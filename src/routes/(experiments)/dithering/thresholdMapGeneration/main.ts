import type { ThresholdMapOptions } from "./generation";
import type { ThresholdMapGenerationWorker } from "./worker";
import * as Comlink from "comlink";
import worker_url from "./worker?url";

let ThresholdMapWorker: Comlink.Remote<typeof ThresholdMapGenerationWorker> | null = null;

export async function generateThresholdMap(options: ThresholdMapOptions): Promise<ImageData> {
    if (!ThresholdMapWorker) {
        ThresholdMapWorker = Comlink.wrap(new Worker(worker_url, { type: "module"}));
    }

    return await ThresholdMapWorker.generate(options);
}