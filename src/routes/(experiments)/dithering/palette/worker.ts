import { generatePalette } from "./paletteGeneration";
import * as Comlink from "comlink";


const ImagePaletteWorker = {
    generatePalette
}

export type ImagePaletteWorker = typeof ImagePaletteWorker;

Comlink.expose(ImagePaletteWorker);