import * as Comlink from 'comlink';
import RenderingWorker from "./renderingWorker?worker"
import type { ErrorDiffusionWorker } from './renderingWorker';

export type ErrorDiffusionDitheringOptions = {
    image: ImageData,
    output_width: number,
    output_height: number,
    monochrome: boolean;
    colorLight: string;
    colorDark: string;
    diffusionStrength: number;
    diffusionMatrix: number[][];
    diffusionMatrixOriginX: number;
}

export function errorDiffusionDithering(canvas: HTMLCanvasElement, options: ErrorDiffusionDitheringOptions) {
    const offscreen = canvas.transferControlToOffscreen();

    const worker = new RenderingWorker();
    const wrappedWorker: Comlink.Remote<typeof ErrorDiffusionWorker> = Comlink.wrap(worker);

    let pendingUpdate : ErrorDiffusionDitheringOptions | null = null;

    let update: ((newOptions: ErrorDiffusionDitheringOptions) => void) | null = null;
    let destroy: () => void = () => { };

    wrappedWorker.errorDiffusionDithering(Comlink.transfer(offscreen, [offscreen]), options)
        .then((result) => {
            update = result.update;
            destroy = result.destroy;

            if (pendingUpdate) update(pendingUpdate);
            else update(options); //Necessary to avoid Chrome bug where `image-rendering` is not respected. No idea why.
        });

    return {
        update: (newOptions: ErrorDiffusionDitheringOptions) => {
            if(update)
                update(newOptions);
            else 
                pendingUpdate = newOptions;
        },
        destroy: () => {
            destroy();
            worker.terminate();
        }
    }

}