import type { ThresholdMapOptions } from "./generation";
import type { ThresholdMapGenerationWorker } from "./worker";
import * as Comlink from "comlink";
import ThresholdWorker from "./worker?worker";

let ThresholdMapWorker: Comlink.Remote<typeof ThresholdMapGenerationWorker> | null = null;

export async function generateThresholdMap(options: ThresholdMapOptions): Promise<ImageData> {
    if (!ThresholdMapWorker) {
        ThresholdMapWorker = Comlink.wrap(new ThresholdWorker());
    }

    return await ThresholdMapWorker.generate(options);
}