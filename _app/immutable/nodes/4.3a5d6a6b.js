import{S as Ie,i as Pe,s as Ne,k as d,a as R,q as V,l as m,m as S,c as x,r as W,h as g,T as Xe,n,p as te,b as re,G as a,V as B,U as L,W as be,u as Se,X as Ue,H as Re,Y as De,Z as oe}from"../chunks/index.230d2e35.js";/* empty css                          */const K=""+new URL("../assets/img.58b560b7.jpg",import.meta.url).href,v={width:1329,height:1038},Ge="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAAAAAA6mKC9AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAgY0hSTQAAeiYAAICEAAD6AAAAgOgAAHUwAADqYAAAOpgAABdwnLpRPAAAARtJREFUGBkBEAHv/gQAgKB/aX+hf1t/oX9pf6F/BL+Bv4G/gb+Bv4G/gb+Bv4EEcX8xf3F/MX9xfzF/cX8xfwS/gb+Bv4G/gb+Bv4G/gb+BBB1/XX8Nf01/HX9dfw1/TX8Ev4G/gb+Bv4G/gb+Bv4G/gQRxfzF/cX8xf3F/MX9xfzF/BL+Bv4G/gb+Bv4G/gb+Bv4EECH9Ifxh/WH8Ef0R/FH9UfwS/gb+Bv4G/gb+Bv4G/gb+BBHF/MX9xfzF/cX8xf3F/MX8Ev4G/gb+Bv4G/gb+Bv4G/gQQdf11/DX9Nfx1/XX8Nf01/BL+Bv4G/gb+Bv4G/gb+Bv4EEcX8xf3F/MX9xfzF/cX8xfwS/gb+Bv4G/gb+Bv4G/gb+BIZOCkuKxtP8AAAAASUVORK5CYII=",xe={width:16,height:16},ze=`precision highp float;

attribute vec2 position;
varying vec2 fragCoord;

// Just a simple vertex shader that passes on the 2d position to the fragment shader
void main() {
    fragCoord.x = position.x * 0.5 + 0.5;
    fragCoord.y = position.y * 0.5 + 0.5;
    
    gl_Position = vec4(position, 0.0, 1.0);
}`,Me=`precision highp float;
varying vec2 fragCoord;

uniform sampler2D uSampler;
uniform float uThreshold;
uniform sampler2D uNoiseSampler;
uniform vec2 uNoiseSamplerSize;

uniform float uNoise;
uniform float uMonochrome;

uniform vec2 uSize;

uniform vec3 uDarkColor;
uniform vec3 uLightColor;

void main(void) {
    //Map the current image pixel to the noise texture
    vec2 imgPixel = vec2(fragCoord.x * uSize.x, fragCoord.y * uSize.y);
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

    vec3 thresholds = vec3(
        step(uThreshold, color.r + noise),
        step(uThreshold, color.g + noise),
        step(uThreshold, color.b + noise)
    );

    if(uMonochrome > 0.0) {
        color.rgb = vec3(
            mix(uDarkColor.r, uLightColor.r, thresholds.r),
            mix(uDarkColor.g, uLightColor.g, thresholds.g),
            mix(uDarkColor.b, uLightColor.b, thresholds.b)
        );
    } else {
        color.rgb = thresholds;
    }

    gl_FragColor = color;
}`;function Le(t,r,o){const e=Be(t,t.VERTEX_SHADER,r),i=Be(t,t.FRAGMENT_SHADER,o),u=t.createProgram();if(!u)throw new Error("Failed to create shader program");if(t.attachShader(u,e),t.attachShader(u,i),t.linkProgram(u),!t.getProgramParameter(u,t.LINK_STATUS))throw Error(`Unable to initialize the shader program: ${t.getProgramInfoLog(u)}`);return u}function Be(t,r,o){const e=t.createShader(r);if(!e)throw new Error("Failed to create shader");if(t.shaderSource(e,o),t.compileShader(e),!t.getShaderParameter(e,t.COMPILE_STATUS))throw Error(`An error occurred compiling the shaders: ${t.getShaderInfoLog(e)}`);return e}function ge(t,r){const o=t.createTexture();if(!o)throw new Error("Failed to create texture");t.bindTexture(t.TEXTURE_2D,o);const e=0,i=t.RGBA,u=1,s=1,f=0,A=t.RGBA,T=t.UNSIGNED_BYTE,b=new Uint8Array([0,0,255,255]);t.texImage2D(t.TEXTURE_2D,e,i,u,s,f,A,T,b);const c=new Image;return c.onload=()=>{t.bindTexture(t.TEXTURE_2D,o),t.texImage2D(t.TEXTURE_2D,e,i,A,T,c),we(c.width)&&we(c.height)?t.generateMipmap(t.TEXTURE_2D):(t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR))},c.src=r,o}function we(t){return(t&t-1)===0}function Fe(t){const r=t.createBuffer(),o=t.createBuffer(),e=[-1,1,-1,-1,1,-1,1,1],i=[3,2,1,3,1,0];return t.bindBuffer(t.ARRAY_BUFFER,r),t.bufferData(t.ARRAY_BUFFER,new Float32Array(e),t.STATIC_DRAW),t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,o),t.bufferData(t.ELEMENT_ARRAY_BUFFER,new Uint16Array(i),t.STATIC_DRAW),{vertex_buffer:r,index_buffer:o}}function ke(t,r){let o=r;const e=t.getContext("webgl");e.clearColor(0,0,0,1),e.clear(e.COLOR_BUFFER_BIT);const i=Le(e,ze,Me),{vertex_buffer:u,index_buffer:s}=Fe(e),f=e.getAttribLocation(i,"position");e.vertexAttribPointer(f,2,e.FLOAT,!1,0,0),e.enableVertexAttribArray(f);const A=e.getUniformLocation(i,"uSampler"),T=e.getUniformLocation(i,"uThreshold"),b=e.getUniformLocation(i,"uNoiseSampler"),c=e.getUniformLocation(i,"uNoise"),X=e.getUniformLocation(i,"uSize"),U=e.getUniformLocation(i,"uNoiseSamplerSize"),E=e.getUniformLocation(i,"uMonochrome"),F=e.getUniformLocation(i,"uDarkColor"),w=e.getUniformLocation(i,"uLightColor"),M=ge(e,o.image.src);e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!0);const I=ge(e,Ge);e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!0),e.useProgram(i);let p;function H(y){e.bindBuffer(e.ARRAY_BUFFER,u),e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,s),e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,M),e.uniform1i(A,0),e.activeTexture(e.TEXTURE1),e.bindTexture(e.TEXTURE_2D,I),e.uniform1i(b,1),e.uniform2f(U,xe.width,xe.height),e.uniform1f(T,o.threshold),e.uniform1f(c,o.noiseIntensity),e.uniform2f(X,o.image.width,o.image.height),e.uniform1f(E,o.monochrome?1:0),e.uniform3f(F,...ye(o.colorDark)),e.uniform3f(w,...ye(o.colorLight)),e.clear(e.COLOR_BUFFER_BIT|e.DEPTH_BUFFER_BIT),e.drawElements(e.TRIANGLES,6,e.UNSIGNED_SHORT,0),p=requestAnimationFrame(H)}return p=requestAnimationFrame(H),{update(y){o=y},destroy(){cancelAnimationFrame(p)}}}function ye(t){const r=parseInt(t.slice(1,3),16)/255,o=parseInt(t.slice(3,5),16)/255,e=parseInt(t.slice(5,7),16)/255;return[r,o,e]}const Oe=`precision highp float;

attribute vec2 position;
varying vec2 fragCoord;

// Just a simple vertex shader that passes on the 2d position to the fragment shader
void main() {
    fragCoord.x = position.x * 0.5 + 0.5;
    fragCoord.y = position.y * 0.5 + 0.5;
    
    gl_Position = vec4(position, 0.0, 1.0);
}`,He=`precision highp float;

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
}`;function Ye(t,r){let o=r;const e=t.getContext("webgl");e.clearColor(0,0,0,1),e.clear(e.COLOR_BUFFER_BIT);const i=Le(e,Oe,He),{vertex_buffer:u,index_buffer:s}=Fe(e),f=e.getAttribLocation(i,"position");e.vertexAttribPointer(f,2,e.FLOAT,!1,0,0),e.enableVertexAttribArray(f);const A=e.getUniformLocation(i,"uSampler"),T=e.getUniformLocation(i,"uWidth"),b=e.getUniformLocation(i,"uHeight"),c=e.getUniformLocation(i,"uDotSize"),X=e.getUniformLocation(i,"uOverspill"),U=ge(e,o.image.src);e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!0),e.useProgram(i);let E;function F(w){e.bindBuffer(e.ARRAY_BUFFER,u),e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,s),e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,U),e.uniform1i(A,0),e.uniform1f(T,o.image.width),e.uniform1f(b,o.image.height),e.uniform1f(c,o.dotSize),e.uniform1f(X,o.overspill),e.clear(e.COLOR_BUFFER_BIT|e.DEPTH_BUFFER_BIT),e.drawElements(e.TRIANGLES,6,e.UNSIGNED_SHORT,0),E=requestAnimationFrame(F)}return E=requestAnimationFrame(F),{update(w){o=w},destroy(){cancelAnimationFrame(E)}}}function Ce(t){let r,o,e,i,u;return{c(){r=d("input"),o=R(),e=d("input"),this.h()},l(s){r=m(s,"INPUT",{type:!0}),o=x(s),e=m(s,"INPUT",{type:!0}),this.h()},h(){n(r,"type","color"),n(e,"type","color")},m(s,f){re(s,r,f),B(r,t[3]),re(s,o,f),re(s,e,f),B(e,t[4]),i||(u=[L(r,"input",t[12]),L(e,"input",t[13])],i=!0)},p(s,f){f&8&&B(r,s[3]),f&16&&B(e,s[4])},d(s){s&&g(r),s&&g(o),s&&g(e),i=!1,De(u)}}}function Ve(t){let r,o,e,i,u,s,f,A,T,b,c,X,U,E,F,w,M,I,p,H,y,Y,G,ne,z,k,ie,ae,O,se,le,q,P,Q,ue,C,ce,D,he,N,J,fe,pe,_=t[2]&&Ce(t);return{c(){r=d("div"),o=d("img"),i=R(),u=d("div"),s=d("label"),f=V("Threshold "),A=V(t[0]),T=R(),b=d("div"),c=d("input"),X=R(),U=d("div"),E=d("label"),F=V("Noise Intensity "),w=V(t[1]),M=R(),I=d("div"),p=d("input"),H=R(),y=d("div"),Y=d("div"),G=d("input"),ne=R(),z=d("div"),k=d("label"),ie=V("Monochrome"),ae=R(),O=d("p"),se=V("If the dither should be monochrome, or in color"),le=R(),_&&_.c(),q=R(),P=d("canvas"),ue=R(),C=d("input"),ce=R(),D=d("input"),he=R(),N=d("canvas"),this.h()},l(h){r=m(h,"DIV",{class:!0});var l=S(r);o=m(l,"IMG",{src:!0,alt:!0,width:!0,height:!0}),i=x(l),u=m(l,"DIV",{});var Z=S(u);s=m(Z,"LABEL",{class:!0});var de=S(s);f=W(de,"Threshold "),A=W(de,t[0]),de.forEach(g),T=x(Z),b=m(Z,"DIV",{class:!0});var _e=S(b);c=m(_e,"INPUT",{type:!0,min:!0,max:!0,step:!0,class:!0}),_e.forEach(g),Z.forEach(g),X=x(l),U=m(l,"DIV",{});var j=S(U);E=m(j,"LABEL",{class:!0});var me=S(E);F=W(me,"Noise Intensity "),w=W(me,t[1]),me.forEach(g),M=x(j),I=m(j,"DIV",{class:!0});var ve=S(I);p=m(ve,"INPUT",{type:!0,min:!0,max:!0,step:!0,class:!0}),ve.forEach(g),j.forEach(g),H=x(l),y=m(l,"DIV",{class:!0});var $=S(y);Y=m($,"DIV",{class:!0});var Ae=S(Y);G=m(Ae,"INPUT",{type:!0,class:!0}),Ae.forEach(g),ne=x($),z=m($,"DIV",{class:!0});var ee=S(z);k=m(ee,"LABEL",{for:!0,class:!0});var Ee=S(k);ie=W(Ee,"Monochrome"),Ee.forEach(g),ae=x(ee),O=m(ee,"P",{id:!0,class:!0});var Te=S(O);se=W(Te,"If the dither should be monochrome, or in color"),Te.forEach(g),ee.forEach(g),$.forEach(g),le=x(l),_&&_.l(l),q=x(l),P=m(l,"CANVAS",{class:!0,width:!0,height:!0}),S(P).forEach(g),ue=x(l),C=m(l,"INPUT",{type:!0,min:!0,max:!0,step:!0}),ce=x(l),D=m(l,"INPUT",{type:!0,min:!0,max:!0,step:!0}),he=x(l),N=m(l,"CANVAS",{class:!0,width:!0,height:!0}),S(N).forEach(g),l.forEach(g),this.h()},h(){Xe(o.src,e=K)||n(o,"src",e),n(o,"alt",""),n(o,"width",v.width),n(o,"height",v.height),n(s,"class","block text-sm font-medium leading-6 text-gray-900"),n(c,"type","range"),n(c,"min","0"),n(c,"max","1"),n(c,"step","0.01"),n(c,"class","block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"),n(b,"class","mt-2"),n(E,"class","block text-sm font-medium leading-6 text-gray-900"),n(p,"type","range"),n(p,"min","0"),n(p,"max","4"),n(p,"step","0.01"),n(p,"class","block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"),n(I,"class","mt-2"),n(G,"type","checkbox"),n(G,"class","h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"),n(Y,"class","flex h-6 items-center"),n(k,"for","comments"),n(k,"class","font-medium text-gray-900"),n(O,"id","comments-description"),n(O,"class","text-gray-500"),n(z,"class","ml-3 text-sm leading-6"),n(y,"class","relative flex items-start"),n(P,"class","max-w-full"),n(P,"width",t[7]),n(P,"height",t[8]),te(P,"width",v.width),te(P,"height",v.height),n(C,"type","range"),n(C,"min","2"),n(C,"max","32"),n(C,"step","1"),n(D,"type","range"),n(D,"min","0.1"),n(D,"max","2"),n(D,"step","0.001"),n(N,"class","max-w-full"),n(N,"width",t[7]),n(N,"height",t[8]),te(N,"width",v.width),te(N,"height",v.height),n(r,"class","max-w-full px-96")},m(h,l){re(h,r,l),a(r,o),a(r,i),a(r,u),a(u,s),a(s,f),a(s,A),a(u,T),a(u,b),a(b,c),B(c,t[0]),a(r,X),a(r,U),a(U,E),a(E,F),a(E,w),a(U,M),a(U,I),a(I,p),B(p,t[1]),a(r,H),a(r,y),a(y,Y),a(Y,G),G.checked=t[2],a(y,ne),a(y,z),a(z,k),a(k,ie),a(z,ae),a(z,O),a(O,se),a(r,le),_&&_.m(r,null),a(r,q),a(r,P),a(r,ue),a(r,C),B(C,t[5]),a(r,ce),a(r,D),B(D,t[6]),a(r,he),a(r,N),fe||(pe=[L(c,"change",t[9]),L(c,"input",t[9]),L(p,"change",t[10]),L(p,"input",t[10]),L(G,"change",t[11]),be(Q=ke.call(null,P,{image:{src:K,width:v.width,height:v.height},threshold:t[0],noiseIntensity:t[1],monochrome:t[2],colorLight:t[3],colorDark:t[4]})),L(C,"change",t[14]),L(C,"input",t[14]),L(D,"change",t[15]),L(D,"input",t[15]),be(J=Ye.call(null,N,{image:{src:K,width:v.width,height:v.height},dotSize:t[5],overspill:t[6]}))],fe=!0)},p(h,[l]){l&1&&Se(A,h[0]),l&1&&B(c,h[0]),l&2&&Se(w,h[1]),l&2&&B(p,h[1]),l&4&&(G.checked=h[2]),h[2]?_?_.p(h,l):(_=Ce(h),_.c(),_.m(r,q)):_&&(_.d(1),_=null),Q&&Ue(Q.update)&&l&31&&Q.update.call(null,{image:{src:K,width:v.width,height:v.height},threshold:h[0],noiseIntensity:h[1],monochrome:h[2],colorLight:h[3],colorDark:h[4]}),l&32&&B(C,h[5]),l&64&&B(D,h[6]),J&&Ue(J.update)&&l&96&&J.update.call(null,{image:{src:K,width:v.width,height:v.height},dotSize:h[5],overspill:h[6]})},i:Re,o:Re,d(h){h&&g(r),_&&_.d(),fe=!1,De(pe)}}}function We(t,r,o){let e=.33,i=1.14,u=!1,s="#ede6cc",f="#21263f",A=18,T=1,b=v.width/("window"in globalThis?window.devicePixelRatio:1),c=v.height/("window"in globalThis?window.devicePixelRatio:1);function X(){e=oe(this.value),o(0,e)}function U(){i=oe(this.value),o(1,i)}function E(){u=this.checked,o(2,u)}function F(){s=this.value,o(3,s)}function w(){f=this.value,o(4,f)}function M(){A=oe(this.value),o(5,A)}function I(){T=oe(this.value),o(6,T)}return[e,i,u,s,f,A,T,b,c,X,U,E,F,w,M,I]}class Qe extends Ie{constructor(r){super(),Pe(this,r,We,Ve,Ne,{})}}export{Qe as component};
