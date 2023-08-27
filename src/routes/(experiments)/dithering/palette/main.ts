import * as Comlink from 'comlink';
import RawImagePaletteWorker from './worker?worker';
import type { ImagePaletteWorker } from './worker';
import { browser } from '$app/environment';
import type { RGB } from '../utils';

let worker: Comlink.Remote<ImagePaletteWorker> | null = browser ? Comlink.wrap<ImagePaletteWorker>(new RawImagePaletteWorker()) : null;

export async function generatePaletteInWorker(palette: RGB[]): Promise<ImageData> {
    if (!worker) throw new Error("Worker not initialized");
    return await worker.generatePalette(palette);
}

