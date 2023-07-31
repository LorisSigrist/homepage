import bayer_4_src from './bayer_4.png';
import bayer_4_size from './bayer_4.png?size';

import vertex_src from './vertex.glsl?raw';
import fragment_src from './fragment.glsl?raw';
import { initShaderProgram, loadTexture, setUpRect } from '../utils';

export type BayerDitheringOptions = {
    image: {
        src: string;
        width: number;
        height: number;
    }
    threshold: number;
    noiseIntensity: number;
    monochrome: boolean;
}

export function bayerDithering(canvas: HTMLCanvasElement, initialOptions: BayerDitheringOptions) {
    let options = initialOptions;

    const gl = canvas.getContext('webgl')!;
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
    const uWidth = gl.getUniformLocation(program, 'uWidth');
    const uHeight = gl.getUniformLocation(program, 'uHeight');
    const uNoiseSamplerSize = gl.getUniformLocation(program, 'uNoiseSamplerSize');
    const uMonochrome = gl.getUniformLocation(program, 'uMonochrome');

    const texture = loadTexture(gl, options.image.src);
    gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true);

    const bayer_4 = loadTexture(gl, bayer_4_src);
    gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true);

    gl.useProgram(program);

    let frame: number;

    function render(now: number) {
        gl.bindBuffer(gl.ARRAY_BUFFER, vertex_buffer);
        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, index_buffer);

        // Tell WebGL we want to affect texture unit 0
        gl.activeTexture(gl.TEXTURE0);

        // Bind the texture to texture unit 0
        gl.bindTexture(gl.TEXTURE_2D, texture);

        // Tell the shader we bound the texture to texture unit 0
        gl.uniform1i(uSampler, 0);

        gl.activeTexture(gl.TEXTURE1);
        gl.bindTexture(gl.TEXTURE_2D, bayer_4);
        gl.uniform1i(uNoiseSampler, 1);

        gl.uniform2f(uNoiseSamplerSize, bayer_4_size.width, bayer_4_size.height);

        gl.uniform1f(uThreshold, options.threshold);
        gl.uniform1f(uNoise, options.noiseIntensity);

        gl.uniform1f(uWidth, options.image.width);
        gl.uniform1f(uHeight, options.image.height);

        gl.uniform1f(uMonochrome, options.monochrome ? 1 : 0);
        console.log(options.monochrome);

        gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
        gl.drawElements(gl.TRIANGLES, 6, gl.UNSIGNED_SHORT, 0);

        frame = requestAnimationFrame(render);
    }
    frame = requestAnimationFrame(render);
    
    return {
        update(newOptions: BayerDitheringOptions) {
            options = newOptions;
        },

        destroy() {
            cancelAnimationFrame(frame);
        }
    }
}