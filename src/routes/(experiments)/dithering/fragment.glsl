precision highp float;
varying vec2 fragCoord;

uniform sampler2D uSampler;
uniform float uThreshold;
uniform sampler2D uNoiseSampler;
uniform vec2 uNoiseSamplerSize;

uniform float uNoise;

uniform float uWidth;
uniform float uHeight;

void main(void) {
    highp vec4 color = texture2D(uSampler, fragCoord);


    // Convert to grayscale using the NTSC standard coefficients
    float gray = dot(color.rgb, vec3(0.299, 0.587, 0.114));    

    //Sample noise and add it to our grayscale value
    float pixelX = fragCoord.x * uWidth;
    float pixelY = fragCoord.y * uHeight;

    float noisePixelX = mod(pixelX, uNoiseSamplerSize.x);
    float noisePixelY = mod(pixelY, uNoiseSamplerSize.y);

    vec2 noiseUV = vec2(noisePixelX / uNoiseSamplerSize.x, noisePixelY / uNoiseSamplerSize.y);

    float noise = texture2D(uNoiseSampler, noiseUV).r * uNoise;

    gray = step(uThreshold, gray + noise);

    color.rgb = vec3(gray, gray, gray);
    gl_FragColor = color;

   // gl_FragColor = texture2D(uNoiseSampler, noiseUV);
}