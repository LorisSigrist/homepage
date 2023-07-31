precision highp float;

#define PI 3.1415926538

varying vec2 fragCoord;

uniform sampler2D uSampler;
uniform float uWidth;
uniform float uHeight;
uniform float uOverspill;

//Dot Size in pixels
uniform float uDotSize;

void main(void) {

    vec2 dotXY = vec2(
        floor(fragCoord.x * (uWidth / uDotSize )),
        floor(fragCoord.y * (uHeight / uDotSize ))
    );

    //Get the viewport coordinates of the center of the current dot
    vec2 dotCenterUV = vec2(
        (dotXY.x + 0.5) * ( uDotSize / uWidth),
        (dotXY.y + 0.5) * ( uDotSize / uHeight)
    );


    //Get the color of the current pixel from the image
    vec4 color = texture2D(uSampler, dotCenterUV);

    //Use the intensity of the current dot-area to determine the radius of the dot
    //Then color the pixel black if it is insider the dot radius and white if it is outside
    //We have to do this in pixel space

    vec2 dotCenter = vec2(
       (dotXY.x + 0.5) * uDotSize,
       (dotXY.y + 0.5) * uDotSize
    );

    vec2 fragCoordPixel = vec2(
        fragCoord.x * uWidth,
        fragCoord.y * uHeight
    );


    // Convert to grayscale using the NTSC standard coefficients
    float intensity = dot(color.rgb, vec3(0.299, 0.587, 0.114));  

    //Increase contrast
    intensity = (intensity - 0.5) * 1.5 + 0.5;

    float maxArea = (uDotSize * 0.5) * (uDotSize * 0.5) * PI;
    float radius = sqrt(maxArea * (1.0 - intensity) / PI);
    float dist = distance(fragCoordPixel, dotCenter);

    float fragCol = 1.0;
    if(dist < radius * uOverspill){
        fragCol = 0.0;
    }

    color.rgb = vec3(fragCol);
    gl_FragColor = color;
}