import{S as Re,i as Ue,s as Be,k as d,a as I,l as p,m as b,c as x,h as l,n as u,b as T,G as h,U as N,H as he,o as Se,q as k,r as z,T as de,V as P,W as De,u as pe,X as Ie,Y as be,t as xe,Z as _e}from"../chunks/index.230d2e35.js";/* empty css                          */const Le=""+new URL("../assets/img.58b560b7.jpg",import.meta.url).href,ye="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAAAAAA6mKC9AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAgY0hSTQAAeiYAAICEAAD6AAAAgOgAAHUwAADqYAAAOpgAABdwnLpRPAAAARtJREFUGBkBEAHv/gQAgKB/aX+hf1t/oX9pf6F/BL+Bv4G/gb+Bv4G/gb+Bv4EEcX8xf3F/MX9xfzF/cX8xfwS/gb+Bv4G/gb+Bv4G/gb+BBB1/XX8Nf01/HX9dfw1/TX8Ev4G/gb+Bv4G/gb+Bv4G/gQRxfzF/cX8xf3F/MX9xfzF/BL+Bv4G/gb+Bv4G/gb+Bv4EECH9Ifxh/WH8Ef0R/FH9UfwS/gb+Bv4G/gb+Bv4G/gb+BBHF/MX9xfzF/cX8xf3F/MX8Ev4G/gb+Bv4G/gb+Bv4G/gQQdf11/DX9Nfx1/XX8Nf01/BL+Bv4G/gb+Bv4G/gb+Bv4EEcX8xf3F/MX9xfzF/cX8xfwS/gb+Bv4G/gb+Bv4G/gb+BIZOCkuKxtP8AAAAASUVORK5CYII=",Ee={width:16,height:16},Fe=`precision highp float;

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
}`;function Ne(e,i,t){const a=Ae(e,e.VERTEX_SHADER,i),r=Ae(e,e.FRAGMENT_SHADER,t),s=e.createProgram();if(!s)throw new Error("Failed to create shader program");if(e.attachShader(s,a),e.attachShader(s,r),e.linkProgram(s),!e.getProgramParameter(s,e.LINK_STATUS))throw Error(`Unable to initialize the shader program: ${e.getProgramInfoLog(s)}`);return s}function Ae(e,i,t){const a=e.createShader(i);if(!a)throw new Error("Failed to create shader");if(e.shaderSource(a,t),e.compileShader(a),!e.getShaderParameter(a,e.COMPILE_STATUS))throw Error(`An error occurred compiling the shaders: ${e.getShaderInfoLog(a)}`);return a}function Pe(e,i){const t=e.createTexture();if(!t)throw new Error("Failed to create texture");e.bindTexture(e.TEXTURE_2D,t);const a=0,r=e.RGBA,s=1,n=1,c=0,f=e.RGBA,v=e.UNSIGNED_BYTE,_=new Uint8Array([0,0,255,255]);e.texImage2D(e.TEXTURE_2D,a,r,s,n,c,f,v,_);const g=new Image;return g.onload=()=>{e.bindTexture(e.TEXTURE_2D,t),e.texImage2D(e.TEXTURE_2D,a,r,f,v,g),$(g.width)&&$(g.height)?e.generateMipmap(e.TEXTURE_2D):(e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR))},g.src=i,t}function Xe(e){const i=e.createTexture();if(!i)throw new Error("Failed to create texture");e.bindTexture(e.TEXTURE_2D,i);const t=0,a=e.RGBA,r=1,s=1,n=0,c=e.RGBA,f=e.UNSIGNED_BYTE,v=new Uint8Array([0,0,255,255]);return e.texImage2D(e.TEXTURE_2D,t,a,r,s,n,c,f,v),i}function Ce(e,i,t){const r=e.RGBA,s=e.RGBA,n=e.UNSIGNED_BYTE;e.bindTexture(e.TEXTURE_2D,i),e.texImage2D(e.TEXTURE_2D,0,r,s,n,t),$(t.width)&&$(t.height)?e.generateMipmap(e.TEXTURE_2D):(e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR))}function $(e){return(e&e-1)===0}function Ge(e){const i=e.createBuffer(),t=e.createBuffer(),a=[-1,1,-1,-1,1,-1,1,1],r=[3,2,1,3,1,0];return e.bindBuffer(e.ARRAY_BUFFER,i),e.bufferData(e.ARRAY_BUFFER,new Float32Array(a),e.STATIC_DRAW),e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t),e.bufferData(e.ELEMENT_ARRAY_BUFFER,new Uint16Array(r),e.STATIC_DRAW),{vertex_buffer:i,index_buffer:t}}function Me(e,i){let t=i;function a(){t.image.onload=()=>{Ce(r,E,t.image),e.width=t.image.width,e.height=t.image.height,r.viewport(0,0,t.image.width,t.image.height)}}const r=e.getContext("webgl");r.clearColor(0,0,0,1),r.clear(r.COLOR_BUFFER_BIT);const s=Ne(r,Fe,we),{vertex_buffer:n,index_buffer:c}=Ge(r),f=r.getAttribLocation(s,"position");r.vertexAttribPointer(f,2,r.FLOAT,!1,0,0),r.enableVertexAttribArray(f);const v=r.getUniformLocation(s,"uSampler"),_=r.getUniformLocation(s,"uThreshold"),g=r.getUniformLocation(s,"uNoiseSampler"),B=r.getUniformLocation(s,"uNoise"),S=r.getUniformLocation(s,"uSize"),X=r.getUniformLocation(s,"uNoiseSamplerSize"),y=r.getUniformLocation(s,"uMonochrome"),F=r.getUniformLocation(s,"uDarkColor"),R=r.getUniformLocation(s,"uLightColor"),E=Xe(r);r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,!0),a();const O=Pe(r,ye);r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,!0),r.useProgram(s);let U;function L(D){r.clearColor(0,0,0,1),r.clear(r.COLOR_BUFFER_BIT),r.bindBuffer(r.ARRAY_BUFFER,n),r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,c),r.activeTexture(r.TEXTURE0),r.bindTexture(r.TEXTURE_2D,E),r.uniform1i(v,0),r.activeTexture(r.TEXTURE1),r.bindTexture(r.TEXTURE_2D,O),r.uniform1i(g,1),r.uniform2f(X,Ee.width,Ee.height),r.uniform1f(_,t.threshold),r.uniform1f(B,t.noiseIntensity),r.uniform2f(S,t.image.width,t.image.height),r.uniform1f(y,t.monochrome?1:0),r.uniform3f(F,...Te(t.colorDark)),r.uniform3f(R,...Te(t.colorLight)),r.clear(r.COLOR_BUFFER_BIT|r.DEPTH_BUFFER_BIT),r.drawElements(r.TRIANGLES,6,r.UNSIGNED_SHORT,0),U=requestAnimationFrame(L)}return U=requestAnimationFrame(L),{update(D){const W=t.image!==D.image;t=D,W&&a()},destroy(){cancelAnimationFrame(U)}}}function Te(e){const i=parseInt(e.slice(1,3),16)/255,t=parseInt(e.slice(3,5),16)/255,a=parseInt(e.slice(5,7),16)/255;return[i,t,a]}function ve(e){let i,t,a,r,s,n,c,f,v,_,g,B,S,X,y,F,R,E,O,U,L,D,W,w,C,ee,re,G,te,K,V,M,Q,q,Y,oe,ie,se,A=e[2]&&ge(e);return{c(){i=d("img"),a=I(),r=d("div"),s=d("label"),n=k("Threshold "),c=k(e[0]),f=I(),v=d("div"),_=d("input"),g=I(),B=d("div"),S=d("label"),X=k("Noise Intensity "),y=k(e[1]),F=I(),R=d("div"),E=d("input"),O=I(),U=d("div"),L=d("div"),D=d("input"),W=I(),w=d("div"),C=d("label"),ee=k("Monochrome"),re=I(),G=d("p"),te=k("If the dither should be monochrome, or in color"),K=I(),A&&A.c(),V=I(),M=d("canvas"),q=I(),Y=d("p"),oe=k("Right click and save the image to download it."),this.h()},l(o){i=p(o,"IMG",{src:!0,alt:!0}),a=x(o),r=p(o,"DIV",{});var m=b(r);s=p(m,"LABEL",{for:!0,class:!0});var H=b(s);n=z(H,"Threshold "),c=z(H,e[0]),H.forEach(l),f=x(m),v=p(m,"DIV",{class:!0});var ae=b(v);_=p(ae,"INPUT",{type:!0,min:!0,id:!0,max:!0,step:!0,class:!0}),ae.forEach(l),m.forEach(l),g=x(o),B=p(o,"DIV",{});var J=b(B);S=p(J,"LABEL",{for:!0,class:!0});var ne=b(S);X=z(ne,"Noise Intensity "),y=z(ne,e[1]),ne.forEach(l),F=x(J),R=p(J,"DIV",{class:!0});var ue=b(R);E=p(ue,"INPUT",{type:!0,min:!0,id:!0,max:!0,step:!0,class:!0}),ue.forEach(l),J.forEach(l),O=x(o),U=p(o,"DIV",{class:!0});var Z=b(U);L=p(Z,"DIV",{class:!0});var ce=b(L);D=p(ce,"INPUT",{type:!0,class:!0}),ce.forEach(l),W=x(Z),w=p(Z,"DIV",{class:!0});var j=b(w);C=p(j,"LABEL",{for:!0,class:!0});var le=b(C);ee=z(le,"Monochrome"),le.forEach(l),re=x(j),G=p(j,"P",{id:!0,class:!0});var fe=b(G);te=z(fe,"If the dither should be monochrome, or in color"),fe.forEach(l),j.forEach(l),Z.forEach(l),K=x(o),A&&A.l(o),V=x(o),M=p(o,"CANVAS",{class:!0}),b(M).forEach(l),q=x(o),Y=p(o,"P",{});var me=b(Y);oe=z(me,"Right click and save the image to download it."),me.forEach(l),this.h()},h(){var o;de(i.src,t=(o=e[5])==null?void 0:o.src)||u(i,"src",t),u(i,"alt",""),u(s,"for","threshold"),u(s,"class","block text-sm font-medium leading-6 text-gray-900"),u(_,"type","range"),u(_,"min","0"),u(_,"id","threshold"),u(_,"max","1"),u(_,"step","0.01"),u(_,"class","block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"),u(v,"class","mt-2"),u(S,"for","noise"),u(S,"class","block text-sm font-medium leading-6 text-gray-900"),u(E,"type","range"),u(E,"min","0"),u(E,"id","noise"),u(E,"max","1.5"),u(E,"step","0.01"),u(E,"class","block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"),u(R,"class","mt-2"),u(D,"type","checkbox"),u(D,"class","h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"),u(L,"class","flex h-6 items-center"),u(C,"for","comments"),u(C,"class","font-medium text-gray-900"),u(G,"id","comments-description"),u(G,"class","text-gray-500"),u(w,"class","ml-3 text-sm leading-6"),u(U,"class","relative flex items-start"),u(M,"class","max-w-full")},m(o,m){T(o,i,m),T(o,a,m),T(o,r,m),h(r,s),h(s,n),h(s,c),h(r,f),h(r,v),h(v,_),P(_,e[0]),T(o,g,m),T(o,B,m),h(B,S),h(S,X),h(S,y),h(B,F),h(B,R),h(R,E),P(E,e[1]),T(o,O,m),T(o,U,m),h(U,L),h(L,D),D.checked=e[2],h(U,W),h(U,w),h(w,C),h(C,ee),h(w,re),h(w,G),h(G,te),T(o,K,m),A&&A.m(o,m),T(o,V,m),T(o,M,m),T(o,q,m),T(o,Y,m),h(Y,oe),ie||(se=[N(_,"change",e[7]),N(_,"input",e[7]),N(E,"change",e[8]),N(E,"input",e[8]),N(D,"change",e[9]),De(Q=Me.call(null,M,{image:e[5],threshold:e[0],noiseIntensity:e[1],monochrome:e[2],colorLight:e[3],colorDark:e[4]}))],ie=!0)},p(o,m){var H;m&32&&!de(i.src,t=(H=o[5])==null?void 0:H.src)&&u(i,"src",t),m&1&&pe(c,o[0]),m&1&&P(_,o[0]),m&2&&pe(y,o[1]),m&2&&P(E,o[1]),m&4&&(D.checked=o[2]),o[2]?A?A.p(o,m):(A=ge(o),A.c(),A.m(V.parentNode,V)):A&&(A.d(1),A=null),Q&&Ie(Q.update)&&m&63&&Q.update.call(null,{image:o[5],threshold:o[0],noiseIntensity:o[1],monochrome:o[2],colorLight:o[3],colorDark:o[4]})},d(o){o&&l(i),o&&l(a),o&&l(r),o&&l(g),o&&l(B),o&&l(O),o&&l(U),o&&l(K),A&&A.d(o),o&&l(V),o&&l(M),o&&l(q),o&&l(Y),ie=!1,be(se)}}}function ge(e){let i,t,a,r,s;return{c(){i=d("input"),t=I(),a=d("input"),this.h()},l(n){i=p(n,"INPUT",{type:!0}),t=x(n),a=p(n,"INPUT",{type:!0}),this.h()},h(){u(i,"type","color"),u(a,"type","color")},m(n,c){T(n,i,c),P(i,e[3]),T(n,t,c),T(n,a,c),P(a,e[4]),r||(s=[N(i,"input",e[10]),N(a,"input",e[11])],r=!0)},p(n,c){c&8&&P(i,n[3]),c&16&&P(a,n[4])},d(n){n&&l(i),n&&l(t),n&&l(a),r=!1,be(s)}}}function ke(e){let i,t,a,r,s,n=e[5]&&ve(e);return{c(){i=d("div"),t=d("input"),a=I(),n&&n.c(),this.h()},l(c){i=p(c,"DIV",{class:!0});var f=b(i);t=p(f,"INPUT",{type:!0,id:!0,accept:!0}),a=x(f),n&&n.l(f),f.forEach(l),this.h()},h(){u(t,"type","file"),u(t,"id","image-input"),u(t,"accept","image/*"),u(i,"class","max-w-full px-96")},m(c,f){T(c,i,f),h(i,t),h(i,a),n&&n.m(i,null),r||(s=N(t,"input",e[6]),r=!0)},p(c,[f]){c[5]?n?n.p(c,f):(n=ve(c),n.c(),n.m(i,null)):n&&(n.d(1),n=null)},i:he,o:he,d(c){c&&l(i),n&&n.d(),r=!1,s()}}}function ze(e,i,t){let a=.33,r=.3,s=!1,n="#ede6cc",c="#21263f",f;function v(y){const F=y.target.files[0];if(!F)return;const R=new FileReader;R.onload=E=>{t(5,f=new Image),xe().then(()=>{typeof R.result=="string"&&t(5,f.src=R.result,f)}),console.log(f)},R.readAsDataURL(F)}Se(()=>{t(5,f=new Image),t(5,f.src=Le,f)});function _(){a=_e(this.value),t(0,a)}function g(){r=_e(this.value),t(1,r)}function B(){s=this.checked,t(2,s)}function S(){n=this.value,t(3,n)}function X(){c=this.value,t(4,c)}return[a,r,s,n,c,f,v,_,g,B,S,X]}class Ye extends Re{constructor(i){super(),Ue(this,i,ze,ke,Be,{})}}export{Ye as component};
