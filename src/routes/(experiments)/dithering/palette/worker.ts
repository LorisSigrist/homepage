import { generatePalette } from "./paletteGeneration";
import { getPalette } from "./color-extraction";
import * as Comlink from "comlink";


const ImagePaletteWorker = {
    generatePalette,
    getPalette
}

export type ImagePaletteWorker = typeof ImagePaletteWorker;

Comlink.expose(ImagePaletteWorker);