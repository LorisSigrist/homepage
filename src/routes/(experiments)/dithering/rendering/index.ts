import blue_noise_src from './blue_noise.png';
import blue_noise_size from './blue_noise.png?size';

import white_noise_src from './white_noise.png';
import white_noise_size from './white_noise.png?size';

import vertex_src from './vertex.glsl';
import fragment_src from './fragment.glsl';
import { createTexture, initShaderProgram, loadImageToTexture, loadTexture, setUpRect } from './utils';
import { generateBayerTexture } from './bayer';

export type DitherMode = `bayer_${number}` | 'blue_noise' | "white_noise";

export type DitheringOptions = {
    image: HTMLImageElement;
    threshold: number;
    noiseIntensity: number;
    monochrome: boolean;
    colorLight: string;
    colorDark: string;
    mode: DitherMode
    width: number;
    height: number;
}

export function dithering(canvas: HTMLCanvasElement, initialOptions: DitheringOptions) {
    let options = initialOptions;

    const gl = canvas.getContext('webgl', {
        preserveDrawingBuffer: true //Needed to save the canvas as an image
    }) as WebGLRenderingContext | null;

    if (!gl) {
        alert('WebGL not supported')
        return;
    }

    const loadImage = () => {
        loadImageToTexture(gl, imageTexture, options.image);
    }

    gl.clearColor(0.0, 0.0, 0.0, 1.0);
    gl.clear(gl.COLOR_BUFFER_BIT);

    const program = initShaderProgram(gl, vertex_src, fragment_src);
    const { vertex_buffer, index_buffer } = setUpRect(gl);

    //Get the location of the attributes and uniforms
    const position_attribute_location = gl.getAttribLocation(program, 'position');
    gl.vertexAttribPointer(position_attribute_location, 2, gl.FLOAT, false, 0, 0);
    gl.enableVertexAttribArray(position_attribute_location);

    const uSampler = gl.getUniformLocation(program, 'uSampler');
    const uThreshold = gl.getUniformLocation(program, 'uThreshold');
    const uNoiseSampler = gl.getUniformLocation(program, 'uNoiseSampler');
    const uNoise = gl.getUniformLocation(program, 'uNoise');
    const uSize = gl.getUniformLocation(program, 'uSize');
    const uNoiseSamplerSize = gl.getUniformLocation(program, 'uNoiseSamplerSize');
    const uMonochrome = gl.getUniformLocation(program, 'uMonochrome');
    const uDarkColor = gl.getUniformLocation(program, 'uDarkColor');
    const uLightColor = gl.getUniformLocation(program, 'uLightColor');

    const imageTexture = createTexture(gl);
    gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true);
    loadImage();

    let maskTexture: WebGLTexture;
    let maskTextureSize: { width: number, height: number };

    gl.useProgram(program);
    let frame: number | null = null;

    const loadMask = () => {
        if (options.mode === "blue_noise") {
            const blue_noise = loadTexture(gl, blue_noise_src, invalidate);
            gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true);


            maskTexture = blue_noise;
            maskTextureSize = blue_noise_size;
            return;
        }

        if (options.mode === "white_noise") {
            const white_noise = loadTexture(gl, white_noise_src, invalidate);
            gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true);


            maskTexture = white_noise;
            maskTextureSize = white_noise_size;
            return;
        }

        if (options.mode.startsWith('bayer_')) {
            const level = Number(options.mode.slice('bayer_'.length));
            if (isNaN(level)) throw new Error(`Invalid bayer level: "${options.mode}"`);
            const bayerGenerated = generateBayerTexture(gl, level);
            const bayerGeneratedSize = Math.pow(2, level + 1);

            maskTexture = bayerGenerated;
            maskTextureSize = { width: bayerGeneratedSize, height: bayerGeneratedSize };
            return;
        }

        throw new Error(`Unknown mode: "${options.mode}"`);
    }

    loadMask();

    const render = () => {
        gl.viewport(0, 0, options.width, options.height);
        gl.clearColor(0.0, 0.0, 0.0, 1.0);
        gl.clear(gl.COLOR_BUFFER_BIT);
        gl.bindBuffer(gl.ARRAY_BUFFER, vertex_buffer);
        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, index_buffer);

        // Tell WebGL we want to affect texture unit 0
        gl.activeTexture(gl.TEXTURE0);

        // Bind the texture to texture unit 0
        gl.bindTexture(gl.TEXTURE_2D, imageTexture);

        // Tell the shader we bound the texture to texture unit 0
        gl.uniform1i(uSampler, 0);

        gl.activeTexture(gl.TEXTURE1);
        gl.bindTexture(gl.TEXTURE_2D, maskTexture);
        gl.uniform1i(uNoiseSampler, 1);

        gl.uniform2f(uNoiseSamplerSize, maskTextureSize.width, maskTextureSize.height);

        gl.uniform1f(uThreshold, options.threshold);
        gl.uniform1f(uNoise, options.noiseIntensity);

        gl.uniform2f(uSize, options.width, options.height);

        gl.uniform1f(uMonochrome, options.monochrome ? 1 : 0);

        gl.uniform3f(uDarkColor, ...hexToGLSL(options.colorDark));
        gl.uniform3f(uLightColor, ...hexToGLSL(options.colorLight));

        gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
        gl.drawElements(gl.TRIANGLES, 6, gl.UNSIGNED_SHORT, 0);
    }

    function invalidate() {
        frame = requestAnimationFrame(() => {
            render();
            frame = null;
        });
    }

    invalidate();

    return {
        update(newOptions: DitheringOptions) {
            const imageHasBeenChanged = options.image !== newOptions.image;
            const modeHasBeenChanged = options.mode !== newOptions.mode;


            options = newOptions;
            if (imageHasBeenChanged)
                loadImage();

            if (modeHasBeenChanged)
                loadMask();



            invalidate();
        },

        destroy() {
            if (frame !== null)
                cancelAnimationFrame(frame);
        }
    }
}

function hexToGLSL(hex: string): [number, number, number] {
    const r = parseInt(hex.slice(1, 3), 16) / 255;
    const g = parseInt(hex.slice(3, 5), 16) / 255;
    const b = parseInt(hex.slice(5, 7), 16) / 255;

    return [r, g, b];
}