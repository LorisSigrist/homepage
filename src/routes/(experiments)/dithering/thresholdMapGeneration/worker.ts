import * as Comlink from "comlink"
import { type ThresholdMapOptions, generateThresholdMapImageData } from "./generation";

export const ThresholdMapGenerationWorker = {
    generate(options: ThresholdMapOptions): Promise<ImageData> {
        return generateThresholdMapImageData(options);
    }
}

Comlink.expose(ThresholdMapGenerationWorker);