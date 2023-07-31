precision highp float;
varying vec2 fragCoord;

uniform sampler2D uSampler;
uniform float uThreshold;
uniform sampler2D uNoiseSampler;
uniform vec2 uNoiseSamplerSize;

uniform float uNoise;
uniform float uMonochrome;

uniform float uWidth;
uniform float uHeight;

void main(void) {
    //Map the current image pixel to the noise texture
    vec2 imgPixel = vec2(fragCoord.x * uWidth, fragCoord.y * uHeight);
    vec2 noisePixel = vec2( mod(imgPixel.x, uNoiseSamplerSize.x),  mod(imgPixel.y, uNoiseSamplerSize.y));
    
    vec2 noiseUV = vec2(noisePixel.x / uNoiseSamplerSize.x, noisePixel.y / uNoiseSamplerSize.y);
    float noise = (texture2D(uNoiseSampler, noiseUV).r - 0.5) * 2.0 * uNoise;

    //Get the color of the current pixel from the image
    vec4 color = texture2D(uSampler, fragCoord);

   // Convert to grayscale using the NTSC standard coefficients
    float gray = dot(color.rgb, vec3(0.299, 0.587, 0.114));    

    color.r = color.r * (1.0 - uMonochrome) + gray * uMonochrome;
    color.g = color.g * (1.0 - uMonochrome) + gray * uMonochrome;
    color.b = color.b * (1.0 - uMonochrome) + gray * uMonochrome;

    color.rgb = vec3(
        step(uThreshold, color.r + noise), 
        step(uThreshold, color.g + noise), 
        step(uThreshold, color.b + noise)
    );


    gl_FragColor = color;
}