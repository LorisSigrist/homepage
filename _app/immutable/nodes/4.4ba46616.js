import{S as Be,i as Se,s as De,k as d,a as x,l as p,m as b,c as I,h as u,n as l,b as T,G as h,U as P,H as he,q as k,r as z,T as de,p as pe,V as X,W as xe,u as _e,X as Ie,Y as Ue,t as Le,Z as Ee}from"../chunks/index.230d2e35.js";/* empty css                          */const Ae={width:1329,height:1038},ye="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAAAAAA6mKC9AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAgY0hSTQAAeiYAAICEAAD6AAAAgOgAAHUwAADqYAAAOpgAABdwnLpRPAAAARtJREFUGBkBEAHv/gQAgKB/aX+hf1t/oX9pf6F/BL+Bv4G/gb+Bv4G/gb+Bv4EEcX8xf3F/MX9xfzF/cX8xfwS/gb+Bv4G/gb+Bv4G/gb+BBB1/XX8Nf01/HX9dfw1/TX8Ev4G/gb+Bv4G/gb+Bv4G/gQRxfzF/cX8xf3F/MX9xfzF/BL+Bv4G/gb+Bv4G/gb+Bv4EECH9Ifxh/WH8Ef0R/FH9UfwS/gb+Bv4G/gb+Bv4G/gb+BBHF/MX9xfzF/cX8xf3F/MX8Ev4G/gb+Bv4G/gb+Bv4G/gQQdf11/DX9Nfx1/XX8Nf01/BL+Bv4G/gb+Bv4G/gb+Bv4EEcX8xf3F/MX9xfzF/cX8xfwS/gb+Bv4G/gb+Bv4G/gb+BIZOCkuKxtP8AAAAASUVORK5CYII=",Te={width:16,height:16},Fe=`precision highp float;

attribute vec2 position;
varying vec2 fragCoord;

// Just a simple vertex shader that passes on the 2d position to the fragment shader
void main() {
    fragCoord.x = position.x * 0.5 + 0.5;
    fragCoord.y = position.y * 0.5 + 0.5;
    
    gl_Position = vec4(position, 0.0, 1.0);
}`,we=`precision highp float;
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
}`;function Ne(e,i,r){const a=ve(e,e.VERTEX_SHADER,i),t=ve(e,e.FRAGMENT_SHADER,r),s=e.createProgram();if(!s)throw new Error("Failed to create shader program");if(e.attachShader(s,a),e.attachShader(s,t),e.linkProgram(s),!e.getProgramParameter(s,e.LINK_STATUS))throw Error(`Unable to initialize the shader program: ${e.getProgramInfoLog(s)}`);return s}function ve(e,i,r){const a=e.createShader(i);if(!a)throw new Error("Failed to create shader");if(e.shaderSource(a,r),e.compileShader(a),!e.getShaderParameter(a,e.COMPILE_STATUS))throw Error(`An error occurred compiling the shaders: ${e.getShaderInfoLog(a)}`);return a}function Pe(e,i){const r=e.createTexture();if(!r)throw new Error("Failed to create texture");e.bindTexture(e.TEXTURE_2D,r);const a=0,t=e.RGBA,s=1,n=1,c=0,f=e.RGBA,v=e.UNSIGNED_BYTE,_=new Uint8Array([0,0,255,255]);e.texImage2D(e.TEXTURE_2D,a,t,s,n,c,f,v,_);const g=new Image;return g.onload=()=>{e.bindTexture(e.TEXTURE_2D,r),e.texImage2D(e.TEXTURE_2D,a,t,f,v,g),$(g.width)&&$(g.height)?e.generateMipmap(e.TEXTURE_2D):(e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR))},g.src=i,r}function Xe(e){const i=e.createTexture();if(!i)throw new Error("Failed to create texture");e.bindTexture(e.TEXTURE_2D,i);const r=0,a=e.RGBA,t=1,s=1,n=0,c=e.RGBA,f=e.UNSIGNED_BYTE,v=new Uint8Array([0,0,255,255]);return e.texImage2D(e.TEXTURE_2D,r,a,t,s,n,c,f,v),i}function Ce(e,i,r){const t=e.RGBA,s=e.RGBA,n=e.UNSIGNED_BYTE;e.bindTexture(e.TEXTURE_2D,i),e.texImage2D(e.TEXTURE_2D,0,t,s,n,r),$(r.width)&&$(r.height)?e.generateMipmap(e.TEXTURE_2D):(e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR))}function $(e){return(e&e-1)===0}function Ge(e){const i=e.createBuffer(),r=e.createBuffer(),a=[-1,1,-1,-1,1,-1,1,1],t=[3,2,1,3,1,0];return e.bindBuffer(e.ARRAY_BUFFER,i),e.bufferData(e.ARRAY_BUFFER,new Float32Array(a),e.STATIC_DRAW),e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,r),e.bufferData(e.ELEMENT_ARRAY_BUFFER,new Uint16Array(t),e.STATIC_DRAW),{vertex_buffer:i,index_buffer:r}}function Me(e,i){let r=i;function a(){r.image.onload=()=>{Ce(t,E,r.image),e.width=r.image.width,e.height=r.image.height,t.viewport(0,0,r.image.width,r.image.height)}}const t=e.getContext("webgl");t.clearColor(0,0,0,1),t.clear(t.COLOR_BUFFER_BIT);const s=Ne(t,Fe,we),{vertex_buffer:n,index_buffer:c}=Ge(t),f=t.getAttribLocation(s,"position");t.vertexAttribPointer(f,2,t.FLOAT,!1,0,0),t.enableVertexAttribArray(f);const v=t.getUniformLocation(s,"uSampler"),_=t.getUniformLocation(s,"uThreshold"),g=t.getUniformLocation(s,"uNoiseSampler"),B=t.getUniformLocation(s,"uNoise"),S=t.getUniformLocation(s,"uSize"),C=t.getUniformLocation(s,"uNoiseSamplerSize"),F=t.getUniformLocation(s,"uMonochrome"),w=t.getUniformLocation(s,"uDarkColor"),R=t.getUniformLocation(s,"uLightColor"),E=Xe(t);t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,!0),a();const O=Pe(t,ye);t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,!0),t.useProgram(s);let U;function L(D){t.clearColor(0,0,0,1),t.clear(t.COLOR_BUFFER_BIT),t.bindBuffer(t.ARRAY_BUFFER,n),t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,c),t.activeTexture(t.TEXTURE0),t.bindTexture(t.TEXTURE_2D,E),t.uniform1i(v,0),t.activeTexture(t.TEXTURE1),t.bindTexture(t.TEXTURE_2D,O),t.uniform1i(g,1),t.uniform2f(C,Te.width,Te.height),t.uniform1f(_,r.threshold),t.uniform1f(B,r.noiseIntensity),t.uniform2f(S,r.image.width,r.image.height),t.uniform1f(F,r.monochrome?1:0),t.uniform3f(w,...ge(r.colorDark)),t.uniform3f(R,...ge(r.colorLight)),t.clear(t.COLOR_BUFFER_BIT|t.DEPTH_BUFFER_BIT),t.drawElements(t.TRIANGLES,6,t.UNSIGNED_SHORT,0),U=requestAnimationFrame(L)}return U=requestAnimationFrame(L),{update(D){const W=r.image!==D.image;r=D,W&&a()},destroy(){cancelAnimationFrame(U)}}}function ge(e){const i=parseInt(e.slice(1,3),16)/255,r=parseInt(e.slice(3,5),16)/255,a=parseInt(e.slice(5,7),16)/255;return[i,r,a]}function be(e){let i,r,a,t,s,n,c,f,v,_,g,B,S,C,F,w,R,E,O,U,L,D,W,N,G,ee,te,M,re,K,V,y,Q,q,Y,oe,ie,se,A=e[2]&&Re(e);return{c(){i=d("img"),a=x(),t=d("div"),s=d("label"),n=k("Threshold "),c=k(e[0]),f=x(),v=d("div"),_=d("input"),g=x(),B=d("div"),S=d("label"),C=k("Noise Intensity "),F=k(e[1]),w=x(),R=d("div"),E=d("input"),O=x(),U=d("div"),L=d("div"),D=d("input"),W=x(),N=d("div"),G=d("label"),ee=k("Monochrome"),te=x(),M=d("p"),re=k("If the dither should be monochrome, or in color"),K=x(),A&&A.c(),V=x(),y=d("canvas"),q=x(),Y=d("p"),oe=k("Right click and save the image to download it."),this.h()},l(o){i=p(o,"IMG",{src:!0,alt:!0}),a=I(o),t=p(o,"DIV",{});var m=b(t);s=p(m,"LABEL",{for:!0,class:!0});var H=b(s);n=z(H,"Threshold "),c=z(H,e[0]),H.forEach(u),f=I(m),v=p(m,"DIV",{class:!0});var ae=b(v);_=p(ae,"INPUT",{type:!0,min:!0,id:!0,max:!0,step:!0,class:!0}),ae.forEach(u),m.forEach(u),g=I(o),B=p(o,"DIV",{});var J=b(B);S=p(J,"LABEL",{for:!0,class:!0});var ne=b(S);C=z(ne,"Noise Intensity "),F=z(ne,e[1]),ne.forEach(u),w=I(J),R=p(J,"DIV",{class:!0});var le=b(R);E=p(le,"INPUT",{type:!0,min:!0,id:!0,max:!0,step:!0,class:!0}),le.forEach(u),J.forEach(u),O=I(o),U=p(o,"DIV",{class:!0});var Z=b(U);L=p(Z,"DIV",{class:!0});var ce=b(L);D=p(ce,"INPUT",{type:!0,class:!0}),ce.forEach(u),W=I(Z),N=p(Z,"DIV",{class:!0});var j=b(N);G=p(j,"LABEL",{for:!0,class:!0});var ue=b(G);ee=z(ue,"Monochrome"),ue.forEach(u),te=I(j),M=p(j,"P",{id:!0,class:!0});var fe=b(M);re=z(fe,"If the dither should be monochrome, or in color"),fe.forEach(u),j.forEach(u),Z.forEach(u),K=I(o),A&&A.l(o),V=I(o),y=p(o,"CANVAS",{class:!0}),b(y).forEach(u),q=I(o),Y=p(o,"P",{});var me=b(Y);oe=z(me,"Right click and save the image to download it."),me.forEach(u),this.h()},h(){var o;de(i.src,r=(o=e[5])==null?void 0:o.src)||l(i,"src",r),l(i,"alt",""),l(s,"for","threshold"),l(s,"class","block text-sm font-medium leading-6 text-gray-900"),l(_,"type","range"),l(_,"min","0"),l(_,"id","threshold"),l(_,"max","1"),l(_,"step","0.01"),l(_,"class","block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"),l(v,"class","mt-2"),l(S,"for","noise"),l(S,"class","block text-sm font-medium leading-6 text-gray-900"),l(E,"type","range"),l(E,"min","0"),l(E,"id","noise"),l(E,"max","1.5"),l(E,"step","0.01"),l(E,"class","block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"),l(R,"class","mt-2"),l(D,"type","checkbox"),l(D,"class","h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"),l(L,"class","flex h-6 items-center"),l(G,"for","comments"),l(G,"class","font-medium text-gray-900"),l(M,"id","comments-description"),l(M,"class","text-gray-500"),l(N,"class","ml-3 text-sm leading-6"),l(U,"class","relative flex items-start"),l(y,"class","max-w-full"),pe(y,"width",Ae.width),pe(y,"height",Ae.height)},m(o,m){T(o,i,m),T(o,a,m),T(o,t,m),h(t,s),h(s,n),h(s,c),h(t,f),h(t,v),h(v,_),X(_,e[0]),T(o,g,m),T(o,B,m),h(B,S),h(S,C),h(S,F),h(B,w),h(B,R),h(R,E),X(E,e[1]),T(o,O,m),T(o,U,m),h(U,L),h(L,D),D.checked=e[2],h(U,W),h(U,N),h(N,G),h(G,ee),h(N,te),h(N,M),h(M,re),T(o,K,m),A&&A.m(o,m),T(o,V,m),T(o,y,m),T(o,q,m),T(o,Y,m),h(Y,oe),ie||(se=[P(_,"change",e[7]),P(_,"input",e[7]),P(E,"change",e[8]),P(E,"input",e[8]),P(D,"change",e[9]),xe(Q=Me.call(null,y,{image:e[5],threshold:e[0],noiseIntensity:e[1],monochrome:e[2],colorLight:e[3],colorDark:e[4]}))],ie=!0)},p(o,m){var H;m&32&&!de(i.src,r=(H=o[5])==null?void 0:H.src)&&l(i,"src",r),m&1&&_e(c,o[0]),m&1&&X(_,o[0]),m&2&&_e(F,o[1]),m&2&&X(E,o[1]),m&4&&(D.checked=o[2]),o[2]?A?A.p(o,m):(A=Re(o),A.c(),A.m(V.parentNode,V)):A&&(A.d(1),A=null),Q&&Ie(Q.update)&&m&63&&Q.update.call(null,{image:o[5],threshold:o[0],noiseIntensity:o[1],monochrome:o[2],colorLight:o[3],colorDark:o[4]})},d(o){o&&u(i),o&&u(a),o&&u(t),o&&u(g),o&&u(B),o&&u(O),o&&u(U),o&&u(K),A&&A.d(o),o&&u(V),o&&u(y),o&&u(q),o&&u(Y),ie=!1,Ue(se)}}}function Re(e){let i,r,a,t,s;return{c(){i=d("input"),r=x(),a=d("input"),this.h()},l(n){i=p(n,"INPUT",{type:!0}),r=I(n),a=p(n,"INPUT",{type:!0}),this.h()},h(){l(i,"type","color"),l(a,"type","color")},m(n,c){T(n,i,c),X(i,e[3]),T(n,r,c),T(n,a,c),X(a,e[4]),t||(s=[P(i,"input",e[10]),P(a,"input",e[11])],t=!0)},p(n,c){c&8&&X(i,n[3]),c&16&&X(a,n[4])},d(n){n&&u(i),n&&u(r),n&&u(a),t=!1,Ue(s)}}}function ke(e){let i,r,a,t,s,n=e[5]&&be(e);return{c(){i=d("div"),r=d("input"),a=x(),n&&n.c(),this.h()},l(c){i=p(c,"DIV",{class:!0});var f=b(i);r=p(f,"INPUT",{type:!0,id:!0,accept:!0}),a=I(f),n&&n.l(f),f.forEach(u),this.h()},h(){l(r,"type","file"),l(r,"id","image-input"),l(r,"accept","image/*"),l(i,"class","max-w-full px-96")},m(c,f){T(c,i,f),h(i,r),h(i,a),n&&n.m(i,null),t||(s=P(r,"input",e[6]),t=!0)},p(c,[f]){c[5]?n?n.p(c,f):(n=be(c),n.c(),n.m(i,null)):n&&(n.d(1),n=null)},i:he,o:he,d(c){c&&u(i),n&&n.d(),t=!1,s()}}}function ze(e,i,r){let a=.33,t=.3,s=!1,n="#ede6cc",c="#21263f",f;function v(F){const w=F.target.files[0];if(!w)return;const R=new FileReader;R.onload=E=>{r(5,f=new Image),Le().then(()=>{console.log(f),typeof R.result=="string"&&r(5,f.src=R.result,f)}),console.log(f)},R.readAsDataURL(w)}function _(){a=Ee(this.value),r(0,a)}function g(){t=Ee(this.value),r(1,t)}function B(){s=this.checked,r(2,s)}function S(){n=this.value,r(3,n)}function C(){c=this.value,r(4,c)}return[a,t,s,n,c,f,v,_,g,B,S,C]}class Ye extends Be{constructor(i){super(),Se(this,i,ze,ke,De,{})}}export{Ye as component};
