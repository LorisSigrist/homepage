import type { RGB } from "../../utils";
import { createPixelArray } from './core';

/**
 * WE USE A REDUCED BIT REPRESENTATION FOR COLORS (5bits instead of 8bits)
 */
const BITS_PER_CHANNEL = 8;
const REDUCED_BITS_PER_CHANNEL = 5;
const MAX_ITERATIONS = 1000;

const significant_bits = REDUCED_BITS_PER_CHANNEL;
const right_shift = BITS_PER_CHANNEL - REDUCED_BITS_PER_CHANNEL;
const fractByPopulations = 0.75;


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
        public histogram: Histogram
    ) { }

    /**
     * Gets the volume of the vbox
     * @param force - If true, recalculate the volume even if a cached value exists
     */
    public volume() {
        return (this.r2 - this.r1 + 1) * (this.g2 - this.g1 + 1) * (this.b2 - this.b1 + 1)
    }

    /**
     * Gets the number of pixels in the vbox
     * @param force - If true, recalculate the volume even if a cached value exists
     */
    public count(force: boolean = false): number {
        if (this._count === undefined || force) {
            let num_pixels: number = 0;

            for (const [r, g, b] of this.colors()) {
                num_pixels += this.histogram.sampleWithReducedColor(r, g, b);
            }

            this._count = num_pixels;
        }
        return this._count!;
    }

    /**
     * Creates a new VBox copy with the same dimensions and histogram
     */
    public copy() {
        return new VBox(this.r1, this.r2, this.g1, this.g2, this.b1, this.b2, this.histogram);
    }


    /**
     * Gets the average color of the vbox
     * @param force 
     * @returns 
     */
    public avg(force: boolean = false): RGB {
        if (!this._avg || force) {
            let num_total_colors = 0; //The total number of colors encountered inside the vbox
            const MULTIPLIER = 1 << right_shift; //number to multiply by to go from reduced to full bits

            let r_sum = 0;
            let g_sum = 0;
            let b_sum = 0;

            for (const [r, g, b] of this.colors()) {
                let hval = this.histogram.sampleWithReducedColor(r, g, b);
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
        const r_val = pixel[0] >> right_shift;
        const g_val = pixel[1] >> right_shift;
        const b_val = pixel[2] >> right_shift;

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


class Histogram {
    private histogram: number[] = new Array(1 << 3 * significant_bits);

    constructor(pixels: RGB[]) {
        pixels.forEach((pixel) => {
            let r_val = pixel[0] >> right_shift;
            let g_val = pixel[1] >> right_shift;
            let b_val = pixel[2] >> right_shift;

            let index = Histogram.getColorIndex(r_val, g_val, b_val);
            this.histogram[index] = (this.histogram[index] ?? 0) + 1;
        });
    }

    public sample(r: number, g: number, b: number): number {
        const r_val = r >> right_shift;
        const g_val = g >> right_shift;
        const b_val = b >> right_shift;

        return this.sampleWithReducedColor(r_val, g_val, b_val);
    }

    public sampleWithReducedColor(r_val: number, g_val: number, b_val: number): number {
        const index = Histogram.getColorIndex(r_val, g_val, b_val);
        return this.histogram[index] ?? 0;
    }

    /**
    * Maps a reduced color to an index in the histogram
    */
    static getColorIndex(r_val: number, g_val: number, b_val: number) {
        return (r_val << 2 * significant_bits) + (g_val << significant_bits) + b_val;
    }
}

/**
 * Return the smallest VBox that contains all the pixels
 * 
 * @param pixels 
 * @param histogram 
 * @returns 
 */
function vboxFromPixels(pixels: RGB[], histogram: Histogram): VBox {
    let r_min = 1000000;
    let r_max = 0;
    let gmin = 1000000;
    let gmax = 0;
    let bmin = 1000000;
    let bmax = 0;


    // find min/max
    pixels.forEach(pixel => {
        const r_val = pixel[0] >> right_shift;
        const g_val = pixel[1] >> right_shift;
        const b_val = pixel[2] >> right_shift;


        if (r_val < r_min) r_min = r_val;
        else if (r_val > r_max) r_max = r_val;
        if (g_val < gmin) gmin = g_val;
        else if (g_val > gmax) gmax = g_val;
        if (b_val < bmin) bmin = b_val;
        else if (b_val > bmax) bmax = b_val;
    });

    return new VBox(r_min, r_max, gmin, gmax, bmin, bmax, histogram);
}

function doCut(vbox: VBox, partial_sum: number[], lookahead_sum: number[], total: number, channel: "r" | "g" | "b"): [VBox, VBox] {

    type ColorDim = `${typeof channel}1` | `${typeof channel}2`;

    const dim1: ColorDim = channel + '1' as ColorDim;
    const dim2: ColorDim = channel + '2' as ColorDim;

    for (let r = vbox[dim1]; r <= vbox[dim2]; r++) {
        if (partial_sum[r] > total / 2) {
            let vbox1 = vbox.copy();
            let vbox2 = vbox.copy();
            let left = r - vbox[dim1];
            let right = vbox[dim2] - r;

            let d2, count2 = 0;

            if (left <= right)
                d2 = Math.min(vbox[dim2] - 1, ~~(r + right / 2)); else d2 = Math.max(vbox[dim1], ~~(r - 1 - left / 2));


            // avoid 0-count boxes
            while (!partial_sum[d2]) d2++;
            count2 = lookahead_sum[d2];

            while (!count2 && partial_sum[d2 - 1])
                count2 = lookahead_sum[--d2];


            // set dimensions
            vbox1[dim2] = d2;
            vbox2[dim1] = vbox1[dim2] + 1;

            return [vbox1, vbox2];
        }
    }

    throw new Error("VBox can't be cut");
}

function medianCutApply(histogram: Histogram, vbox: VBox): [VBox, VBox | undefined] {
    if (!vbox.count())
        return [vbox.copy(), undefined]; //Shouldn't happen

    const rw = vbox.r2 - vbox.r1 + 1;
    const gw = vbox.g2 - vbox.g1 + 1;
    const bw = vbox.b2 - vbox.b1 + 1;
    const max_channel_w = Math.max(rw, gw, bw);

    // only one pixel, no split
    if (vbox.count() == 1) {
        return [vbox.copy(), undefined];
    }

    /* Find the partial sum arrays along the selected axis. */
    let total = 0;
    const partial_sum: number[] = [];
    const lookahead_sum: number[] = [];

    if (max_channel_w == rw) {
        for (let r = vbox.r1; r <= vbox.r2; r++) {
            let sum = 0;
            for (let g = vbox.g1; g <= vbox.g2; g++) {
                for (let b = vbox.b1; b <= vbox.b2; b++) {
                    sum += histogram.sampleWithReducedColor(r, g, b);
                }
            }
            total += sum;
            partial_sum[r] = total;
        }
    } else if (max_channel_w == gw) {
        for (let g = vbox.g1; g <= vbox.g2; g++) {
            let sum = 0;
            for (let r = vbox.r1; r <= vbox.r2; r++) {
                for (let b = vbox.b1; b <= vbox.b2; b++) {
                    sum += histogram.sampleWithReducedColor(r, g, b);
                }
            }
            total += sum;
            partial_sum[g] = total;
        }
    } else if (max_channel_w == bw) {
        for (let b = vbox.b1; b <= vbox.b2; b++) {
            let sum = 0;
            for (let r = vbox.r1; r <= vbox.r2; r++) {
                for (let g = vbox.g1; g <= vbox.g2; g++) {
                    sum += histogram.sampleWithReducedColor(r, g, b);
                }
            }
            total += sum;
            partial_sum[b] = total;
        }
    } else {
        throw new Error("Not Reached");
    }

    partial_sum.forEach(function (d, i) {
        lookahead_sum[i] = total - d;
    });


    const channel = max_channel_w == rw ? 'r' : max_channel_w == gw ? 'g' : 'b';
    return doCut(vbox, partial_sum, lookahead_sum, total, channel);
}



export default function quantize(pixelData: Uint8ClampedArray, max_colors: number): ColorMap {

    // Validate Inputs
    if ((pixelData.length < 4) || max_colors < 2 || max_colors > 256) {
        throw new Error('Invalid Arguments. There must be at least one pixel, and the max color must be between 2 and 256');
    }


    const pixels = createPixelArray(pixelData, 10);
    const histogram = new Histogram(pixels);

    // get the beginning vbox from the colors
    const vbox = vboxFromPixels(pixels, histogram);
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
            var [vbox1, vbox2] = medianCutApply(histogram, vbox);
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
