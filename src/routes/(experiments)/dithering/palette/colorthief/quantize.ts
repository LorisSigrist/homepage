import type { RGB } from "../../utils";

/**
 * WE USE A REDUCED BIT REPRESENTATION FOR COLORS (5bits instead of 8bits)
 */
const BITS_PER_CHANNEL = 8;
const REDUCED_BITS_PER_CHANNEL = 5;
const MAX_ITERATIONS = 1000;

const significant_bits = REDUCED_BITS_PER_CHANNEL;
const rshift = BITS_PER_CHANNEL - REDUCED_BITS_PER_CHANNEL;
const fractByPopulations = 0.75;


/**
 * Maps an RGB color to a reduced-space color index
 * @param r 
 * @param g 
 * @param b 
 * @returns 
 */
function getColorIndex(r: number, g: number, b: number) {
    return (r << 2 * significant_bits) + (g << significant_bits) + b;
}

function naturalOrder(a: number, b: number): -1 | 0 | 1 {
    if (a < b) return -1;
    if (a > b) return 1;
    return 0;
}

/**
 * Simple PriorityQueue
 */
class PriorityQueue<T> {
    private contents: T[] = [];
    private sorted: boolean = false;

    constructor(private compareFn: (a: T, b: T) => number) {
    }

    /**
     * Make sure the contents are sorted. If they are already sorted, this is a no-op.
     */
    private sort() {
        if (this.sorted) return;
        this.contents.sort(this.compareFn);
        this.sorted = true;
    }

    public push(o: T) {
        this.contents.push(o);
        this.sorted = false;
    }

    public peek(index: number | undefined) {
        this.sort();
        if (index === undefined) index = this.contents.length - 1; //Default to last element
        return this.contents[index];
    }

    public pop() {
        this.sort();
        return this.contents.pop();
    }

    public size() {
        return this.contents.length;
    }

    public map<X>(mapFn: (value: T, index: number, array: T[]) => X): X[] {
        return this.contents.map(mapFn);
    }

    /**
     * @deprecated Debugging function. Do not use.
     * @returns The internal array used to store the contents of the queue. This array is sorted.
     */
    public debug() {
        this.sort();
        return this.contents;
    }

    [Symbol.iterator]() {
        this.sort();
        return this.contents[Symbol.iterator]();
    }
}

/**
 * Represents a cube-subset of the color space, with a distribution of colors inside it
 */
class VBox {

    private _volume: number | undefined = undefined;
    private _count: number | undefined = undefined;
    private _avg: RGB | undefined = undefined;

    /**
     * All Color-Values already use the reduced bit resolution
     */
    constructor(
        public r1: number,
        public r2: number,
        public g1: number,
        public g2: number,
        public b1: number,
        public b2: number,
        public histo: number[]
    ) { }

    /**
     * Gets the volume of the vbox
     * @param force - If true, recalculate the volume even if a cached value exists
     */
    public volume(force: boolean = false) {
        if (force || this._volume === undefined) {
            this._volume = (this.r2 - this.r1 + 1) * (this.g2 - this.g1 + 1) * (this.b2 - this.b1 + 1)
        }
        return this._volume;
    }

    /**
     * Gets the number of pixels in the vbox
     * @param force - If true, recalculate the volume even if a cached value exists
     */
    public count(force: boolean = false): number {
        if (this._count === undefined || force) {
            let num_pixels: number = 0;

            for (const [r, g, b] of this.colors()) {
                let index = getColorIndex(r, g, b);
                num_pixels += this.histo[index] || 0;
            }

            this._count = num_pixels;
        }
        return this._count!;
    }

    /**
     * Creates a new VBox copy with the same dimensions and histogram
     */
    public copy() {
        return new VBox(this.r1, this.r2, this.g1, this.g2, this.b1, this.b2, this.histo);
    }


    /**
     * Gets the average color of the vbox
     * @param force 
     * @returns 
     */
    public avg(force: boolean = false): RGB {
        if (!this._avg || force) {
            let num_total_colors = 0; //The total number of colors encountered inside the vbox
            const MULTIPLIER = 1 << rshift; //number to multiply by to go from reduced to full bits

            let r_sum = 0;
            let g_sum = 0;
            let b_sum = 0;

            for (const [r, g, b] of this.colors()) {
                let histo_index = getColorIndex(r, g, b);
                let hval = this.histo[histo_index] ?? 0;
                num_total_colors += hval;
                r_sum += hval * (r + 0.5) * MULTIPLIER;
                g_sum += hval * (g + 0.5) * MULTIPLIER;
                b_sum += hval * (b + 0.5) * MULTIPLIER;
            }


            if (num_total_colors > 0) {
                this._avg = [
                    Math.floor(r_sum / num_total_colors),
                    Math.floor(g_sum / num_total_colors),
                    Math.floor(b_sum / num_total_colors)
                ];
            } else {
                //Empty Box
                this._avg = [Math.floor(MULTIPLIER * (this.r1 + this.r2 + 1) / 2), Math.floor(MULTIPLIER * (this.g1 + this.g2 + 1) / 2), Math.floor(MULTIPLIER * (this.b1 + this.b2 + 1) / 2)];
            }
        }
        return this._avg;
    }

    public contains(pixel: RGB) {

        // Reduce the number of significant bits for each color channel.
        const r_val = pixel[0] >> rshift;
        const g_val = pixel[1] >> rshift;
        const b_val = pixel[2] >> rshift;

        //See if the pixel is within the vbox
        return (r_val >= this.r1 && r_val <= this.r2) &&
            (g_val >= this.g1 && g_val <= this.g2) &&
            (b_val >= this.b1 && b_val <= this.b2);
    }

    /**
     * Iterates over all the colors in the vbox
     */
    private * colors(): Generator<RGB> {
        for (let r = this.r1; r <= this.r2; r++) {
            for (let g = this.g1; g <= this.g2; g++) {
                for (let b = this.b1; b <= this.b2; b++) {
                    yield [r, g, b];
                }
            }
        }
    }
}


class ColorMap {
    private boxes: PriorityQueue<{
        vbox: VBox,
        color: RGB
    }>;


    constructor() {
        this.boxes = new PriorityQueue((a, b) => {
            return naturalOrder(a.vbox.count() * a.vbox.volume(), b.vbox.count() * b.vbox.volume());
        });
    }

    public push(vbox: VBox) {
        this.boxes.push({
            vbox: vbox,
            color: vbox.avg()
        });
    }

    public palette() {
        return this.boxes.map(vb => vb.color);
    }

    public size() {
        return this.boxes.size();
    }

    public map(color: RGB) {

        for (const box of this.boxes) {
            if (box.vbox.contains(color)) {
                return box.color;
            }
        }

        return this.nearest(color);
    }

    /**
     * Iterate over all VBoxes in the color map, and find the one whose average color is closest to the given color
     */
    public nearest(color: RGB) {
        let d1, d2, pColor;


        for (const vbox of this.boxes) {
            d2 = Math.sqrt(Math.pow(color[0] - vbox.color[0], 2) + Math.pow(color[1] - vbox.color[1], 2) + Math.pow(color[2] - vbox.color[2], 2));
            if (d1 === undefined || d2 < d1) {
                d1 = d2;
                pColor = vbox.color;
            }
        }

        return pColor;
    }
}


// histo (1-d array, giving the number of pixels in
// each quantized region of color space), or null on error

function getHistogram(pixels: RGB[]): number[] {
    const histogram_size = 1 << 3 * significant_bits;
    const histo = new Array(histogram_size);
    let index;


    pixels.forEach((pixel) => {
        let r_val = pixel[0] >> rshift;
        let g_val = pixel[1] >> rshift;
        let b_val = pixel[2] >> rshift;

        index = getColorIndex(r_val, g_val, b_val);
        histo[index] = (histo[index] ?? 0) + 1;
    });

    return histo;
}

/**
 * Return the smallest VBox that contains all the pixels
 * 
 * @param pixels 
 * @param histo 
 * @returns 
 */
function vboxFromPixels(pixels: RGB[], histo: number[]): VBox {
    let r_min = 1000000;
    let r_max = 0;
    let gmin = 1000000;
    let gmax = 0;
    let bmin = 1000000;
    let bmax = 0;


    // find min/max
    pixels.forEach(pixel => {
        const r_val = pixel[0] >> rshift;
        const g_val = pixel[1] >> rshift;
        const b_val = pixel[2] >> rshift;


        if (r_val < r_min) r_min = r_val;
        else if (r_val > r_max) r_max = r_val;
        if (g_val < gmin) gmin = g_val;
        else if (g_val > gmax) gmax = g_val;
        if (b_val < bmin) bmin = b_val;
        else if (b_val > bmax) bmax = b_val;
    });


    return new VBox(r_min, r_max, gmin, gmax, bmin, bmax, histo);
}
function medianCutApply(histo: number[], vbox: VBox): [VBox, VBox | undefined] {
    if (!vbox.count())
        return [vbox.copy(), undefined]; //Shouldn't happen

    const rw = vbox.r2 - vbox.r1 + 1;
    const gw = vbox.g2 - vbox.g1 + 1;
    const bw = vbox.b2 - vbox.b1 + 1;
    const maxw = Math.max(rw, gw, bw);

    // only one pixel, no split
    if (vbox.count() == 1) {
        return [vbox.copy(), undefined];
    }

    /* Find the partial sum arrays along the selected axis. */
    var total = 0,
        partial_sum: number[] = [],
        lookahead_sum: number[] = [],
        i,
        j,
        k,
        sum,
        index;
    if (maxw == rw) {
        for (i = vbox.r1; i <= vbox.r2; i++) {
            sum = 0;
            for (j = vbox.g1; j <= vbox.g2; j++) {
                for (k = vbox.b1; k <= vbox.b2; k++) {
                    index = getColorIndex(i, j, k);
                    sum += histo[index] || 0;
                }
            }
            total += sum;
            partial_sum[i] = total;
        }
    } else if (maxw == gw) {
        for (i = vbox.g1; i <= vbox.g2; i++) {
            sum = 0;
            for (j = vbox.r1; j <= vbox.r2; j++) {
                for (k = vbox.b1; k <= vbox.b2; k++) {
                    index = getColorIndex(j, i, k);
                    sum += histo[index] || 0;
                }
            }
            total += sum;
            partial_sum[i] = total;
        }
    } else {
        /* maxw == bw */
        for (i = vbox.b1; i <= vbox.b2; i++) {
            sum = 0;
            for (j = vbox.r1; j <= vbox.r2; j++) {
                for (k = vbox.g1; k <= vbox.g2; k++) {
                    index = getColorIndex(j, k, i);
                    sum += histo[index] || 0;
                }
            }
            total += sum;
            partial_sum[i] = total;
        }
    }


    partial_sum.forEach(function (d, i) {
        lookahead_sum[i] = total - d;
    });


    function doCut(channel: "r" | "g" | "b"): [VBox, VBox] {

        type ColorDim = `${typeof channel}1` | `${typeof channel}2`;

        const dim1: ColorDim = channel + '1' as ColorDim;
        const dim2: ColorDim = channel + '2' as ColorDim;

        let
            left,
            right,
            vbox1,
            vbox2,
            d2,
            count2 = 0;
        for (i = vbox[dim1]; i <= vbox[dim2]; i++) {
            if (partial_sum[i] > total / 2) {
                vbox1 = vbox.copy();
                vbox2 = vbox.copy();
                left = i - vbox[dim1];
                right = vbox[dim2] - i;
                if (left <= right) d2 = Math.min(vbox[dim2] - 1, ~~(i + right / 2)); else d2 = Math.max(vbox[dim1], ~~(i - 1 - left / 2));
                // avoid 0-count boxes
                while (!partial_sum[d2]) d2++;
                count2 = lookahead_sum[d2];
                while (!count2 && partial_sum[d2 - 1]) count2 = lookahead_sum[--d2];
                // set dimensions
                vbox1[dim2] = d2;
                vbox2[dim1] = vbox1[dim2] + 1;
                // console.log('vbox counts:', vbox.count(), vbox1.count(), vbox2.count());
                return [vbox1, vbox2];
            }
        }

        throw new Error("VBox can't be cut");
    }
    // determine the cut planes
    return maxw == rw ? doCut('r') : maxw == gw ? doCut('g') : doCut('b');
}



export default function quantize(pixels: RGB[], max_colors: number): ColorMap {
    

    // Validate Inputs
    if (!pixels.length || max_colors < 2 || max_colors > 256) {
        throw new Error('Invalid Arguments. There must be at least one pixel, and the max color must be between 2 and 256');
    }


    const histo = getHistogram(pixels);

    // get the beginning vbox from the colors
    const vbox = vboxFromPixels(pixels, histo);
    const pq = new PriorityQueue<VBox>((a, b) => {
        return naturalOrder(a.count(), b.count());
    });

    pq.push(vbox);

    // inner function to do the iteration

    function iter(lh: PriorityQueue<VBox>, target: number) {
        let num_colors = lh.size();
        let iterations = 0;

        let vbox: VBox | undefined;

        while (iterations < MAX_ITERATIONS) {
            if (num_colors >= target) return;
            if (iterations++ > MAX_ITERATIONS) {
                // console.log("infinite loop; perhaps too few pixels!");
                return;
            }
            vbox = lh.pop();
            if (!vbox || !vbox.count()) {
                lh.push(vbox!);
                iterations++;
                continue;
            }
            // do the cut
            var [vbox1, vbox2] = medianCutApply(histo, vbox);
            lh.push(vbox1);

            if (vbox2) {
                /* vbox2 may be null */
                lh.push(vbox2);
                num_colors++;
            }
        }
    }

    // first set of colors, sorted by population
    iter(pq, fractByPopulations * max_colors);
    // console.log(pq.size(), pq.debug().length, pq.debug().slice());

    // Re-sort by the product of pixel occupancy times the size in color space.
    var pq2 = new PriorityQueue<VBox>(function (a, b) {
        return naturalOrder(a.count() * a.volume(), b.count() * b.volume());
    });


    while (pq.size()) {
        pq2.push(pq.pop()!);
    }

    // next set - generate the median cuts using the (npix * vol) sorting.
    iter(pq2, max_colors);

    // calculate the actual colors
    const colorMap = new ColorMap();
    while (pq2.size()) {
        colorMap.push(pq2.pop()!);
    }
    return colorMap;
}
