import { TypedEventTarget } from 'typescript-event-target';
import PointerTracker, { type Pointer } from 'pointer-tracker';
import { clamp } from '$lib/math/clamp';

export type TransformChangeEvent = CustomEvent<{ x: number, y: number, scale: number, matrix : DOMMatrix }>;

interface PanzoomEventMap {
    'panzoom:change': TransformChangeEvent;
}

interface Point {
    clientX: number;
    clientY: number;
}

interface ApplyChangeOpts {
    panX?: number;
    panY?: number;
    scaleDiff?: number;
    originX?: number;
    originY?: number;
}


function getDistance(a: Point, b?: Point): number {
    if (!b) return 0;
    return Math.sqrt((b.clientX - a.clientX) ** 2 + (b.clientY - a.clientY) ** 2);
}

function getMidpoint(a: Point, b?: Point): Point {
    if (!b) return a;

    return {
        clientX: (a.clientX + b.clientX) / 2,
        clientY: (a.clientY + b.clientY) / 2,
    };
}

export class Panzoom extends TypedEventTarget<PanzoomEventMap> {
    public static readonly MIN_SCALE = 0.01;
    public static readonly MAX_SCALE = 100_000;

    private element: HTMLElement;

    private transform: DOMMatrix = new DOMMatrix();

    private pointerTracker: PointerTracker;
    
    get x() {
        return this.transform.e;
    }

    get y() {
        return this.transform.f;
    }

    get scale() {
        return this.transform.a;
    }

    set x(x: number) {
       this.transform.e = x;
    }

    set y(y: number) {
        this.transform.f = y;
    }

    set scale(scale: number) {
        this.transform.a = scale;
        this.transform.d = scale;
    }

    constructor(element: HTMLElement) {
        super();
        this.element = element;


        this.element.addEventListener('wheel',
            this.onWheel.bind(this)
        );

        // Watch for pointers
        this.pointerTracker = new PointerTracker(this.element, {
            start: (pointer, event) => {
                // We only want to track 2 pointers at most
                if (this.pointerTracker.currentPointers.length === 2) {
                    return false;
                }

                event.preventDefault();
                return true;
            },
            move: (previousPointers) => {
                this.onPointerMove(previousPointers, this.pointerTracker.currentPointers);
            },

            avoidPointerEvents: this.isSafari(),
        });

        this.element.addEventListener('wheel', this.onWheel.bind(this));

    }

    private onWheel(event: WheelEvent) {
        event.preventDefault();

        const currentBoundingBox = this.element.getBoundingClientRect();

        let { deltaY } = event;
        const { ctrlKey, deltaMode } = event;

        if (deltaMode === 1) {
            // 1 is "lines", 0 is "pixels"
            // Firefox uses "lines" for some types of mouse
            deltaY *= 15;
        }

        const zoomingOut = deltaY > 0;

        // ctrlKey is true when pinch-zooming on a trackpad.
        const divisor = ctrlKey ? 100 : 300;
        // when zooming out, invert the delta and the ratio to keep zoom stable
        const ratio = 1 - (zoomingOut ? -deltaY : deltaY) / divisor;
        const scaleDiff = zoomingOut ? 1 / ratio : ratio;

        const originX = event.clientX - currentBoundingBox.left;
        const originY = event.clientY - currentBoundingBox.top;

        this.applyTransformation({
            scaleDiff,
            originX,
            originY,
        });
    }

    private applyTransformation(opts: ApplyChangeOpts = {}) {
        const {
            panX = 0,
            panY = 0,
            originX = 0,
            originY = 0,
            scaleDiff: scaleFactor = 1,
        } = opts;


        // Create a new matrix with the desired scale & translation.
        const scaleTransform = new DOMMatrix()
            // Translate according to panning.
            //.translate(panX, panY)
            // Scale about the origin.
            .translate(originX, originY)
            .scale(scaleFactor)
            .translate(-originX, -originY);
        
        const panTransform = new DOMMatrix().translate(panX, panY);
        
        scaleTransform.multiplySelf(panTransform);
        scaleTransform.multiplySelf(this.transform);

        const scale = scaleTransform.a;
        const x = scaleTransform.e;
        const y = scaleTransform.f;
        
        // Convert the transform into basic translate & scale.
        this.updateTransform(
            scale, x, y
        );
    }

    private onPointerMove(
        previousPointers: Pointer[],
        currentPointers: Pointer[],
    ) {

        // Combine next points with previous points
        const currentRect = this.element.getBoundingClientRect();

        // For calculating panning movement
        const prevMidpoint = getMidpoint(previousPointers[0], previousPointers[1]);
        const newMidpoint = getMidpoint(currentPointers[0], currentPointers[1]);

        // Midpoint within the element
        const originX = prevMidpoint.clientX - currentRect.left;
        const originY = prevMidpoint.clientY - currentRect.top;

        // Calculate the desired change in scale
        const prevDistance = getDistance(previousPointers[0], previousPointers[1]);
        const newDistance = getDistance(currentPointers[0], currentPointers[1]);
        const scaleDiff = prevDistance ? newDistance / prevDistance : 1;

        this.applyTransformation({
            originX,
            originY,
            scaleDiff,
            panX: newMidpoint.clientX - prevMidpoint.clientX,
            panY: newMidpoint.clientY - prevMidpoint.clientY,
        });
    }

    private updateTransform(
        scale: number,
        x: number,
        y: number,
    ) {
        if(scale < Panzoom.MIN_SCALE || scale > Panzoom.MAX_SCALE) return;

        // Return if there's no change
        if (
            scale === this.scale &&
            x === this.x &&
            y === this.y
        ) return;

        this.x = x;
        this.y = y;
        this.scale = scale;

        //Dispatch change event
        const event: TransformChangeEvent = new CustomEvent('panzoom:change', {
            bubbles: true,
            detail: {
                x: this.x,
                y: this.y,
                scale: this.scale,
                matrix: this.transform
            }
        });
        this.dispatchTypedEvent("panzoom:change", event);

    }

    private isSafari() {
        const isSafari =
            /Safari\//.test(navigator.userAgent) &&
            !/Chrom(e|ium)\//.test(navigator.userAgent);
        return isSafari;
    }

    public reset() {
        this.updateTransform(1, 0, 0);
    }


    /**
     * Remove all _internal_ event listeners and cleanup.
     * 
     * You still have to remove your own event listeners from the panzoom instance.
     */
    public destroy() {
        this.pointerTracker.stop();
    }
}
