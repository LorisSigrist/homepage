import vertex_src from './vertex.glsl';
import fragment_src from './fragment.glsl';
import { createTexture, initShaderProgram, loadImageToTexture, setUpRect, textureFromImageData } from './utils';


export type DitheringOptions = {
    image: HTMLImageElement;
    thresholdMap: ImageData;
    threshold: number;
    noiseIntensity: number;
    monochrome: boolean;
    colorLight: string;
    colorDark: string;
    output_width: number;
    output_height: number;
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

    let thresholdMapTexture: WebGLTexture;
    let thresholdMapSize: { width: number, height: number };

    gl.useProgram(program);
    let frame: number | null = null;

    const loadThresholdMap = () => {
        //Delete the old texture if it exists
        /* - Enable after rendering works again, and see if it works
        if (thresholdMapTexture) {
            gl.deleteTexture(thresholdMapTexture); 
        }
        */
        thresholdMapTexture = textureFromImageData(gl, options.thresholdMap);
        thresholdMapSize = { width: options.thresholdMap.width, height: options.thresholdMap.height };
    }

    loadThresholdMap();

    const render = () => {
        gl.viewport(0, 0, options.output_width, options.output_height);
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
        gl.bindTexture(gl.TEXTURE_2D, thresholdMapTexture);
        gl.uniform1i(uNoiseSampler, 1);

        gl.uniform2f(uNoiseSamplerSize, thresholdMapSize.width, thresholdMapSize.height);

        gl.uniform1f(uThreshold, options.threshold);
        gl.uniform1f(uNoise, options.noiseIntensity);

        gl.uniform2f(uSize, options.output_width, options.output_height);

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
            const thresholdMapChanged = options.thresholdMap !== newOptions.thresholdMap;

            //Use the new options
            options = newOptions;

            //Run lifecycle methods if needed
            if (imageHasBeenChanged)
                loadImage();

            if (thresholdMapChanged)
                loadThresholdMap();

            //Schedule a rerender
            invalidate();
        },

        destroy() {
            //Cancel any pending rerenders
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