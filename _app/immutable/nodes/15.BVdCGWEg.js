import{s as at,q as Ft,n as ve,j as es,e as ts,b as Jt,v as Rt}from"../chunks/scheduler.IgQUtjbl.js";import{S as it,i as rt,g as a,s as h,m as nt,h as i,j as $,C as w,c as y,n as lt,f as t,k as b,a as l,x as C,J as Ge,D as Yt,o as Gt,B as Kt,F as Qt,K as Xt,r as Ke,H as ss,u as Qe,G as ns,l as ls,v as Xe,d as Ze,t as et,w as tt,L as Zt}from"../chunks/index.BUVdxXQj.js";import{S as qt}from"../chunks/Showcase.D0lwfIdR.js";import{e as st}from"../chunks/each.-gASlQSi.js";import{w as as}from"../chunks/index.BKx-NocJ.js";function zt(u,s,c){const d=u.slice();return d[0]=s[c],d}function Ot(u){let s,c=u[0]+"",d;return{c(){s=a("option"),d=nt(c),this.h()},l(f){s=i(f,"OPTION",{});var m=$(s);d=lt(m,c),m.forEach(t),this.h()},h(){s.__value=u[0],Qt(s,s.__value)},m(f,m){l(f,s,m),C(s,d)},p:ve,d(f){f&&t(s)}}}function is(u){let s,c,d="Price",f,m,r,_,k=u[1][u[0]]+"",U,A,I,B,x,D,q="Currency",H,g,j,P,S=st(Object.keys(u[1])),v=[];for(let p=0;p<S.length;p+=1)v[p]=Ot(zt(u,S,p));return{c(){s=a("div"),c=a("label"),c.textContent=d,f=h(),m=a("div"),r=a("div"),_=a("span"),U=nt(k),A=h(),I=a("input"),B=h(),x=a("div"),D=a("label"),D.textContent=q,H=h(),g=a("select");for(let p=0;p<v.length;p+=1)v[p].c();this.h()},l(p){s=i(p,"DIV",{});var T=$(s);c=i(T,"LABEL",{for:!0,class:!0,"data-svelte-h":!0}),w(c)!=="svelte-76cqnf"&&(c.textContent=d),f=y(T),m=i(T,"DIV",{class:!0});var o=$(m);r=i(o,"DIV",{class:!0});var L=$(r);_=i(L,"SPAN",{class:!0});var z=$(_);U=lt(z,k),z.forEach(t),L.forEach(t),A=y(o),I=i(o,"INPUT",{type:!0,name:!0,id:!0,class:!0,placeholder:!0}),B=y(o),x=i(o,"DIV",{class:!0});var M=$(x);D=i(M,"LABEL",{for:!0,class:!0,"data-svelte-h":!0}),w(D)!=="svelte-1hh6i4f"&&(D.textContent=q),H=y(M),g=i(M,"SELECT",{id:!0,name:!0,class:!0});var G=$(g);for(let E=0;E<v.length;E+=1)v[E].l(G);G.forEach(t),M.forEach(t),o.forEach(t),T.forEach(t),this.h()},h(){b(c,"for","price"),b(c,"class","block text-sm font-medium leading-6 text-gray-900 dark:text-white"),b(_,"class","text-gray-500 dark:text-gray-400 sm:text-sm"),b(r,"class","pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3"),b(I,"type","text"),b(I,"name","price"),b(I,"id","price"),b(I,"class","block w-full rounded-md border-0 py-1.5 pl-7 pr-20 dark:bg-white/5 text-gray-900 dark:text-white ring-1 ring-inset ring-gray-300 dark:ring-white/10 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 dark:focus-within:ring-indigo-500 sm:text-sm sm:leading-6"),b(I,"placeholder","0.00"),b(D,"for","currency"),b(D,"class","sr-only"),b(g,"id","currency"),b(g,"name","currency"),b(g,"class","h-full rounded-md border-0 bg-transparent py-0 pl-2 pr-7 text-gray-500 dark:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 dark:focus:ring-indigo-500 sm:text-sm"),u[0]===void 0&&Ft(()=>u[2].call(g)),b(x,"class","absolute inset-y-0 right-0 flex items-center"),b(m,"class","relative mt-2 rounded-md shadow-sm")},m(p,T){l(p,s,T),C(s,c),C(s,f),C(s,m),C(m,r),C(r,_),C(_,U),C(m,A),C(m,I),C(m,B),C(m,x),C(x,D),C(x,H),C(x,g);for(let o=0;o<v.length;o+=1)v[o]&&v[o].m(g,null);Ge(g,u[0],!0),j||(P=Yt(g,"change",u[2]),j=!0)},p(p,[T]){if(T&1&&k!==(k=p[1][p[0]]+"")&&Gt(U,k),T&2){S=st(Object.keys(p[1]));let o;for(o=0;o<S.length;o+=1){const L=zt(p,S,o);v[o]?v[o].p(L,T):(v[o]=Ot(L),v[o].c(),v[o].m(g,null))}for(;o<v.length;o+=1)v[o].d(1);v.length=S.length}T&3&&Ge(g,p[0])},i:ve,o:ve,d(p){p&&t(s),Kt(v,p),j=!1,P()}}}function rs(u,s,c){const d={USD:"$",EUR:"€",GBP:"£",JPY:"¥"};let{currency:f="USD"}=s;function m(){f=Xt(this),c(0,f),c(1,d)}return u.$$set=r=>{"currency"in r&&c(0,f=r.currency)},[f,d,m]}class os extends it{constructor(s){super(),rt(this,s,rs,is,at,{currency:0})}}function Vt(u,s,c){const d=u.slice();return d[0]=s[c],d}function Wt(u){let s,c=u[0]+"",d;return{c(){s=a("option"),d=nt(c),this.h()},l(f){s=i(f,"OPTION",{});var m=$(s);d=lt(m,c),m.forEach(t),this.h()},h(){s.__value=u[0],Qt(s,s.__value)},m(f,m){l(f,s,m),C(s,d)},p:ve,d(f){f&&t(s)}}}function ps(u){let s,c,d="Price",f,m,r,_,k=u[1][u[0]]+"",U,A,I,B,x,D,q="Currency",H,g,j,P,S=st(Object.keys(u[1])),v=[];for(let p=0;p<S.length;p+=1)v[p]=Wt(Vt(u,S,p));return{c(){s=a("div"),c=a("label"),c.textContent=d,f=h(),m=a("div"),r=a("div"),_=a("span"),U=nt(k),A=h(),I=a("input"),B=h(),x=a("div"),D=a("label"),D.textContent=q,H=h(),g=a("select");for(let p=0;p<v.length;p+=1)v[p].c();this.h()},l(p){s=i(p,"DIV",{class:!0});var T=$(s);c=i(T,"LABEL",{for:!0,class:!0,"data-svelte-h":!0}),w(c)!=="svelte-76cqnf"&&(c.textContent=d),f=y(T),m=i(T,"DIV",{class:!0});var o=$(m);r=i(o,"DIV",{class:!0});var L=$(r);_=i(L,"SPAN",{class:!0});var z=$(_);U=lt(z,k),z.forEach(t),L.forEach(t),A=y(o),I=i(o,"INPUT",{type:!0,name:!0,id:!0,class:!0,placeholder:!0}),B=y(o),x=i(o,"DIV",{class:!0});var M=$(x);D=i(M,"LABEL",{for:!0,class:!0,"data-svelte-h":!0}),w(D)!=="svelte-1hh6i4f"&&(D.textContent=q),H=y(M),g=i(M,"SELECT",{id:!0,name:!0,class:!0});var G=$(g);for(let E=0;E<v.length;E+=1)v[E].l(G);G.forEach(t),M.forEach(t),o.forEach(t),T.forEach(t),this.h()},h(){b(c,"for","price"),b(c,"class","block text-sm font-medium leading-6 text-gray-900 dark:text-white"),b(_,"class","text-gray-500 dark:text-gray-400 sm:text-sm"),b(r,"class","pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3"),b(I,"type","text"),b(I,"name","price"),b(I,"id","price"),b(I,"class","block w-full border-0 py-1.5 pl-7 pr-20 dark:bg-white/5 text-gray-900 dark:text-white ring-1 ring-inset ring-gray-800 dark:ring-gray-500 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-emerald-600 dark:focus-within:ring-emerald-500 sm:text-sm sm:leading-6"),b(I,"placeholder","0.00"),b(D,"for","currency"),b(D,"class","sr-only"),b(g,"id","currency"),b(g,"name","currency"),b(g,"class","h-full border-0 bg-transparent py-0 pl-2 pr-7 text-gray-500 dark:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-emerald-600 dark:focus:ring-emerald-500 sm:text-sm"),u[0]===void 0&&Ft(()=>u[2].call(g)),b(x,"class","absolute inset-y-0 right-0 flex items-center"),b(m,"class","relative mt-2"),b(s,"class","font-mono")},m(p,T){l(p,s,T),C(s,c),C(s,f),C(s,m),C(m,r),C(r,_),C(_,U),C(m,A),C(m,I),C(m,B),C(m,x),C(x,D),C(x,H),C(x,g);for(let o=0;o<v.length;o+=1)v[o]&&v[o].m(g,null);Ge(g,u[0],!0),j||(P=Yt(g,"change",u[2]),j=!0)},p(p,[T]){if(T&1&&k!==(k=p[1][p[0]]+"")&&Gt(U,k),T&2){S=st(Object.keys(p[1]));let o;for(o=0;o<S.length;o+=1){const L=Vt(p,S,o);v[o]?v[o].p(L,T):(v[o]=Wt(L),v[o].c(),v[o].m(g,null))}for(;o<v.length;o+=1)v[o].d(1);v.length=S.length}T&3&&Ge(g,p[0])},i:ve,o:ve,d(p){p&&t(s),Kt(v,p),j=!1,P()}}}function cs(u,s,c){const d={USD:"$",EUR:"€",GBP:"£",JPY:"¥"};let{currency:f="USD"}=s;function m(){f=Xt(this),c(0,f),c(1,d)}return u.$$set=r=>{"currency"in r&&c(0,f=r.currency)},[f,d,m]}class us extends it{constructor(s){super(),rt(this,s,cs,ps,at,{currency:0})}}const ds=""+new URL("../assets/banner.Ce51I7LY.webp",import.meta.url).href,Nt={width:2837,height:1745},fs="#ededf8";function hs(u){let s,c,d;function f(r){u[2](r)}let m={};return u[0]!==void 0&&(m.currency=u[0]),s=new os({props:m}),Jt.push(()=>Zt(s,"currency",f)),{c(){Ke(s.$$.fragment)},l(r){Qe(s.$$.fragment,r)},m(r,_){Xe(s,r,_),d=!0},p(r,_){const k={};!c&&_&1&&(c=!0,k.currency=r[0],Rt(()=>c=!1)),s.$set(k)},i(r){d||(Ze(s.$$.fragment,r),d=!0)},o(r){et(s.$$.fragment,r),d=!1},d(r){tt(s,r)}}}function ys(u){let s,c,d;function f(r){u[3](r)}let m={};return u[0]!==void 0&&(m.currency=u[0]),s=new us({props:m}),Jt.push(()=>Zt(s,"currency",f)),{c(){Ke(s.$$.fragment)},l(r){Qe(s.$$.fragment,r)},m(r,_){Xe(s,r,_),d=!0},p(r,_){const k={};!c&&_&1&&(c=!0,k.currency=r[0],Rt(()=>c=!1)),s.$set(k)},i(r){d||(Ze(s.$$.fragment,r),d=!0)},o(r){et(s.$$.fragment,r),d=!1},d(r){tt(s,r)}}}function ms(u){let s,c,d,f,m='<a href="#is-tailwind-ui-worth-it">Is Tailwind UI worth it?</a>',r,_,k='<a href="https://tailwindui.com/" rel="noopener noreferrer" target="_blank">Tailwind UI</a> is a collection of high-quality components and templates built by the creators of <a href="https://tailwindcss.com" rel="noopener noreferrer" target="_blank">Tailwind CSS</a>. It’s 300$ price-tag for a single developer license is quite steep when considering all the free alternatives out there. Could it really be worth it?',U,A,I="I’ve been using Tailwind UI for a couple months now. In this article, I’ll go through how it has affected my workflow, what I liked and disliked about it, and who should consider buying it.",B,x,D='<p>Since Tailwind UI and Tailwind CSS share similar, verbose names, I’ll refer to them as <abbr title="Tailwind UI">TUI</abbr> and <abbr title="Tailwind CSS">TCSS</abbr> respectively.</p>',q,H,g='<a href="#the-tui-workflow">The <abbr title="Tailwind UI">TUI</abbr> workflow</a>',j,P,S='<abbr title="Tailwind UI">TUI</abbr> components and templates are provided as markup with <abbr title="Tailwind CSS">TCSS</abbr> classes. You then copy-paste the markup into your project. In true Tailwind fashion, this seems a bit backwards at first. Why would you want to copy-paste markup if you could just install a library? Customization. If you’ve ever tried to modify something like <a href="https://mui.com" rel="noopener noreferrer" target="_blank">MUI</a> you know it’s insufferable. Owning the markup and styles saves you from a lot of headaches.',v,p,T='Let’s say you wanted to add a money input to your site. You would first browse through the <abbr title="Tailwind UI">TUI</abbr> components to find one that looks like you want.',o,L,z,M,G=`<pre class="shiki vitesse-dark" style="background-color:#121212;color:#dbd7caee" tabindex="0"><code><span class="line"><span style="color:#666666">&#x3C;</span><span style="color:#4D9375">div</span><span style="color:#666666">></span></span>
<span class="line"><span style="color:#666666">  &#x3C;</span><span style="color:#4D9375">label</span><span style="color:#BD976A"> for</span><span style="color:#666666">=</span><span style="color:#C98A7D99">"</span><span style="color:#C98A7D">price</span><span style="color:#C98A7D99">"</span><span style="color:#BD976A"> class</span><span style="color:#666666">=</span><span style="color:#C98A7D99">"</span><span style="color:#C98A7D">block text-sm font-medium leading-6 text-gray-900</span><span style="color:#C98A7D99">"</span><span style="color:#666666">></span><span style="color:#DBD7CAEE">Price</span><span style="color:#666666">&#x3C;/</span><span style="color:#4D9375">label</span><span style="color:#666666">></span></span>
<span class="line"><span style="color:#666666">  &#x3C;</span><span style="color:#4D9375">div</span><span style="color:#BD976A"> class</span><span style="color:#666666">=</span><span style="color:#C98A7D99">"</span><span style="color:#C98A7D">relative mt-2 rounded-md shadow-sm</span><span style="color:#C98A7D99">"</span><span style="color:#666666">></span></span>
<span class="line"><span style="color:#666666">    &#x3C;</span><span style="color:#4D9375">div</span><span style="color:#BD976A"> class</span><span style="color:#666666">=</span><span style="color:#C98A7D99">"</span><span style="color:#C98A7D">pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3</span><span style="color:#C98A7D99">"</span><span style="color:#666666">></span></span>
<span class="line"><span style="color:#666666">      &#x3C;</span><span style="color:#4D9375">span</span><span style="color:#BD976A"> class</span><span style="color:#666666">=</span><span style="color:#C98A7D99">"</span><span style="color:#C98A7D">text-gray-500 sm:text-sm</span><span style="color:#C98A7D99">"</span><span style="color:#666666">></span><span style="color:#DBD7CAEE">$</span><span style="color:#666666">&#x3C;/</span><span style="color:#4D9375">span</span><span style="color:#666666">></span></span>
<span class="line"><span style="color:#666666">    &#x3C;/</span><span style="color:#4D9375">div</span><span style="color:#666666">></span></span>
<span class="line"><span style="color:#666666">    &#x3C;</span><span style="color:#4D9375">input</span><span style="color:#BD976A"> type</span><span style="color:#666666">=</span><span style="color:#C98A7D99">"</span><span style="color:#C98A7D">text</span><span style="color:#C98A7D99">"</span><span style="color:#BD976A"> name</span><span style="color:#666666">=</span><span style="color:#C98A7D99">"</span><span style="color:#C98A7D">price</span><span style="color:#C98A7D99">"</span><span style="color:#BD976A"> id</span><span style="color:#666666">=</span><span style="color:#C98A7D99">"</span><span style="color:#C98A7D">price</span><span style="color:#C98A7D99">"</span><span style="color:#BD976A"> class</span><span style="color:#666666">=</span><span style="color:#C98A7D99">"</span><span style="color:#C98A7D">block w-full rounded-md border-0 py-1.5 pl-7 pr-12 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6</span><span style="color:#C98A7D99">"</span><span style="color:#BD976A"> placeholder</span><span style="color:#666666">=</span><span style="color:#C98A7D99">"</span><span style="color:#C98A7D">0.00</span><span style="color:#C98A7D99">"</span><span style="color:#BD976A"> aria-describedby</span><span style="color:#666666">=</span><span style="color:#C98A7D99">"</span><span style="color:#C98A7D">price-currency</span><span style="color:#C98A7D99">"</span><span style="color:#666666">></span></span>
<span class="line"><span style="color:#666666">    &#x3C;</span><span style="color:#4D9375">div</span><span style="color:#BD976A"> class</span><span style="color:#666666">=</span><span style="color:#C98A7D99">"</span><span style="color:#C98A7D">pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3</span><span style="color:#C98A7D99">"</span><span style="color:#666666">></span></span>
<span class="line"><span style="color:#666666">      &#x3C;</span><span style="color:#4D9375">span</span><span style="color:#BD976A"> class</span><span style="color:#666666">=</span><span style="color:#C98A7D99">"</span><span style="color:#C98A7D">text-gray-500 sm:text-sm</span><span style="color:#C98A7D99">"</span><span style="color:#BD976A"> id</span><span style="color:#666666">=</span><span style="color:#C98A7D99">"</span><span style="color:#C98A7D">price-currency</span><span style="color:#C98A7D99">"</span><span style="color:#666666">></span><span style="color:#DBD7CAEE">USD</span><span style="color:#666666">&#x3C;/</span><span style="color:#4D9375">span</span><span style="color:#666666">></span></span>
<span class="line"><span style="color:#666666">    &#x3C;/</span><span style="color:#4D9375">div</span><span style="color:#666666">></span></span>
<span class="line"><span style="color:#666666">  &#x3C;/</span><span style="color:#4D9375">div</span><span style="color:#666666">></span></span>
<span class="line"><span style="color:#666666">&#x3C;/</span><span style="color:#4D9375">div</span><span style="color:#666666">></span></span></code></pre>`,E,K,ot="Then you would copy-paste the markup into your project and modify it to fit your theme, changing colors, shapes, fonts and sizes.",we,O,_e,Q,pt='For more complex components that require interactivity <abbr title="Tailwind UI">TUI</abbr> also provides React and Vue components. If you aren’t using these frameworks, the markup also includes comments that explain how the component should behave. This makes it easy to adapt the components to whatever you’re using.',ge,V,ct='<a href="#looking-good-has-never-been-this-easy">Looking good has never been this easy</a>',Ce,X,ut='Obviously <abbr title="Tailwind UI">TUI</abbr> looks great, you just need to browse their site to see that. What’s more impressive is how easy it is to actually achieve similar results in your own project.',Te,Z,dt="I’m used to Bootstrap, MUI or custom CSS. With these, I would spend a lot of time fiddling to get the look right. Promises of “easy styling” and “beautiful components” would often go unfulfilled.",xe,ee,ft='With <abbr title="Tailwind UI">TUI</abbr>, I just copy-paste the markup and it looks great. This effortless beauty has been a novel experience for me.',ke,W,ht='<a href="#framework-agnostic">Framework agnostic*</a>',Ie,te,yt='Components are provided as markup with <abbr title="Tailwind CSS">TCSS</abbr> classes. The <em>appearance</em> of the components is not tied to any specific framework. However, the <em>behavior</em> of the components needs to be implemented separately for each framework.',De,se,mt='<abbr title="Tailwind UI">TUI</abbr> provides prebuilt React &amp; Vue components that implement expected behavior. If you are using a different framework or no framework you’ll have to implement the behavior yourself. Fortunately, this is rarely difficult. The markup includes comments that explain what each part is for and how it should behave.',Le,ne,bt='I’ve personally adapted many <abbr title="Tailwind UI">TUI</abbr> components to <a href="https://svelte.dev" rel="noopener noreferrer" target="_blank">Svelte</a>, using <a href="https://melt-ui.com" rel="noopener noreferrer" target="_blank">Melt UI</a> as the behavior library. It’s been a very smooth experience.',He,le,vt='Even when I was using a Server-Side only framework, <a href="https://symfony.com" rel="noopener noreferrer" target="_blank">Symfony</a>, this still worked great. I feel comfortable calling <abbr title="Tailwind UI">TUI</abbr> framework agnostic, even though there is an asterisk.',Se,N,wt='<a href="#its-not-perfect">It’s not perfect</a>',Ae,ae,_t='There are things that I find frustrating about <abbr title="Tailwind UI">TUI</abbr> and wish I had been aware of these before purchasing. Hopefully they will be addressed in future.',Me,F,gt='<a href="#components-come-in-just-one-theme">Components come in just one theme</a>',Ue,ie,Ct='All, or at least most, <abbr title="Tailwind UI">TUI</abbr> components come in a single theme. Either light or dark. This is unfortunate, since one of <abbr title="Tailwind CSS">TCSS</abbr>’s nicest features is it’s easy multi-theme styling.',$e,re,Tt="It’s especially odd when a component appears in both light and dark across different pages. Clearly both variants exist, so why not make them available?",Pe,oe,xt="The thinking here was likely that developers would not expected a component to differ visually from the preview page. If you are building a light-theme site and you copy-paste light theme components, having them suddenly turn dark would be unexpected. This is likely why they decided to make the components single-theme.",Ee,pe,kt="I would appreciate components being provided in three variants: <code>light</code>, <code>dark</code> and <code>adaptive</code>.",Be,J,It='<a href="#tailwind-css-limitations-show">Tailwind CSS limitations show</a>',je,ce,Dt='<abbr title="Tailwind UI">TUI</abbr> has limited itself to just using <abbr title="Tailwind CSS">TCSS</abbr> classes. This is great, as all components are easy to copy-paste and customize. However, occasionally the limitations of <abbr title="Tailwind CSS">TCSS</abbr> shine through.',qe,ue,Lt='While <abbr title="Tailwind CSS">TCSS</abbr> can do pretty much anything CSS can when styling a single element. However, it does not match CSS when it comes to multi-element interaction and styling, it’s most powerful feature. <abbr title="Tailwind UI">TUI</abbr> has to abstain from this, which results in some awkward recommendations, usually manifesting in an overreliance on JS.',ze,de,Ht='For example, it recommends opening dropdowns by adding/removing an element JS. That part of the site won’t work without JS. This is a shame, since this could easily be solved with a few lines of CSS. Failing to adhere to the <a href="https://en.wikipedia.org/wiki/Rule_of_least_power" rel="noopener noreferrer" target="_blank">Least Power Principle</a> like this makes your sites more fragile for no benefit.',Oe,fe,St='The solution here isn’t to add custom CSS to <abbr title="Tailwind UI">TUI</abbr>, but to expand <abbr title="Tailwind CSS">TCSS</abbr>’s capabilities. Until that happens I will continue to be frustrated by this.',Ve,R,At='<a href="#no-offline-support">No Offline Support</a>',We,he,Mt='I’m currently writing this on a train and I’m unable to access <abbr title="Tailwind UI">TUI</abbr> in any way. This is a rather glaring oversight, as it would be very straight forward to enable offline access. A basic <a href="https://developers.mozilla.org/en-US/docs/Web/API/Service_Worker_API" rel="noopener noreferrer" target="_blank">ServiceWorker</a> would do. Caching static assets isn’t hard.',Ne,Y,Ut='<a href="#is-it-worth-it">Is it worth it?</a>',Fe,ye,$t="I have yet to answer the ultimate question: <em>Is it worth it?</em> I would give the usual “it depends”, because it really does depend, but that’s not fair. It’s not fair because you have to buy it to try it and therefore can’t know on which side of the fence you’ll land. That’s no good.",Je,me,Pt="So instead I’ll give a less correct but more actionable answer. <em>Yes, it’s worth it, unless you have a reason it isn’t.</em>",Re,be,Et='The amount of time it has saved me, even over the ostensibly many free alternatives, has been worth the price. I’ve been able to build beautiful sites with minimal effort. I’ve been able to focus on shipping, not fiddling. I believe most developers would experience these benefits if they were to buy it, and it would be worth it for them. The only reason I can think of for it not being worth it is if you have a very specific design system that <abbr title="Tailwind UI">TUI</abbr> doesn’t match. Or if you aren’t getting paid, then saving time isn’t very valuable.',Ye;return L=new qt({props:{$$slots:{default:[hs]},$$scope:{ctx:u}}}),O=new qt({props:{$$slots:{default:[ys]},$$scope:{ctx:u}}}),{c(){s=a("img"),d=h(),f=a("h1"),f.innerHTML=m,r=h(),_=a("p"),_.innerHTML=k,U=h(),A=a("p"),A.textContent=I,B=h(),x=a("blockquote"),x.innerHTML=D,q=h(),H=a("h2"),H.innerHTML=g,j=h(),P=a("p"),P.innerHTML=S,v=h(),p=a("p"),p.innerHTML=T,o=h(),Ke(L.$$.fragment),z=h(),M=new ss(!1),E=h(),K=a("p"),K.textContent=ot,we=h(),Ke(O.$$.fragment),_e=h(),Q=a("p"),Q.innerHTML=pt,ge=h(),V=a("h2"),V.innerHTML=ct,Ce=h(),X=a("p"),X.innerHTML=ut,Te=h(),Z=a("p"),Z.textContent=dt,xe=h(),ee=a("p"),ee.innerHTML=ft,ke=h(),W=a("h2"),W.innerHTML=ht,Ie=h(),te=a("p"),te.innerHTML=yt,De=h(),se=a("p"),se.innerHTML=mt,Le=h(),ne=a("p"),ne.innerHTML=bt,He=h(),le=a("p"),le.innerHTML=vt,Se=h(),N=a("h2"),N.innerHTML=wt,Ae=h(),ae=a("p"),ae.innerHTML=_t,Me=h(),F=a("h3"),F.innerHTML=gt,Ue=h(),ie=a("p"),ie.innerHTML=Ct,$e=h(),re=a("p"),re.textContent=Tt,Pe=h(),oe=a("p"),oe.textContent=xt,Ee=h(),pe=a("p"),pe.innerHTML=kt,Be=h(),J=a("h3"),J.innerHTML=It,je=h(),ce=a("p"),ce.innerHTML=Dt,qe=h(),ue=a("p"),ue.innerHTML=Lt,ze=h(),de=a("p"),de.innerHTML=Ht,Oe=h(),fe=a("p"),fe.innerHTML=St,Ve=h(),R=a("h3"),R.innerHTML=At,We=h(),he=a("p"),he.innerHTML=Mt,Ne=h(),Y=a("h2"),Y.innerHTML=Ut,Fe=h(),ye=a("p"),ye.innerHTML=$t,Je=h(),me=a("p"),me.innerHTML=Pt,Re=h(),be=a("p"),be.innerHTML=Et,this.h()},l(e){s=i(e,"IMG",{src:!0,width:!0,height:!0,alt:!0}),d=y(e),f=i(e,"H1",{id:!0,"data-svelte-h":!0}),w(f)!=="svelte-1c99y9k"&&(f.innerHTML=m),r=y(e),_=i(e,"P",{"data-svelte-h":!0}),w(_)!=="svelte-1nfzanq"&&(_.innerHTML=k),U=y(e),A=i(e,"P",{"data-svelte-h":!0}),w(A)!=="svelte-18dlu86"&&(A.textContent=I),B=y(e),x=i(e,"BLOCKQUOTE",{"data-svelte-h":!0}),w(x)!=="svelte-19rq70s"&&(x.innerHTML=D),q=y(e),H=i(e,"H2",{id:!0,"data-svelte-h":!0}),w(H)!=="svelte-1yc6z9s"&&(H.innerHTML=g),j=y(e),P=i(e,"P",{"data-svelte-h":!0}),w(P)!=="svelte-b8x8v1"&&(P.innerHTML=S),v=y(e),p=i(e,"P",{"data-svelte-h":!0}),w(p)!=="svelte-zgjvll"&&(p.innerHTML=T),o=y(e),Qe(L.$$.fragment,e),z=y(e),M=ns(e,!1),E=y(e),K=i(e,"P",{"data-svelte-h":!0}),w(K)!=="svelte-1u5fjv7"&&(K.textContent=ot),we=y(e),Qe(O.$$.fragment,e),_e=y(e),Q=i(e,"P",{"data-svelte-h":!0}),w(Q)!=="svelte-125vlas"&&(Q.innerHTML=pt),ge=y(e),V=i(e,"H2",{id:!0,"data-svelte-h":!0}),w(V)!=="svelte-19msz8s"&&(V.innerHTML=ct),Ce=y(e),X=i(e,"P",{"data-svelte-h":!0}),w(X)!=="svelte-fzdzvx"&&(X.innerHTML=ut),Te=y(e),Z=i(e,"P",{"data-svelte-h":!0}),w(Z)!=="svelte-1ty6p2m"&&(Z.textContent=dt),xe=y(e),ee=i(e,"P",{"data-svelte-h":!0}),w(ee)!=="svelte-iqic7"&&(ee.innerHTML=ft),ke=y(e),W=i(e,"H2",{id:!0,"data-svelte-h":!0}),w(W)!=="svelte-g4lzcy"&&(W.innerHTML=ht),Ie=y(e),te=i(e,"P",{"data-svelte-h":!0}),w(te)!=="svelte-6xo8zs"&&(te.innerHTML=yt),De=y(e),se=i(e,"P",{"data-svelte-h":!0}),w(se)!=="svelte-1p7cu7f"&&(se.innerHTML=mt),Le=y(e),ne=i(e,"P",{"data-svelte-h":!0}),w(ne)!=="svelte-1x5ums4"&&(ne.innerHTML=bt),He=y(e),le=i(e,"P",{"data-svelte-h":!0}),w(le)!=="svelte-oj51vm"&&(le.innerHTML=vt),Se=y(e),N=i(e,"H2",{id:!0,"data-svelte-h":!0}),w(N)!=="svelte-y4vibp"&&(N.innerHTML=wt),Ae=y(e),ae=i(e,"P",{"data-svelte-h":!0}),w(ae)!=="svelte-10i90ff"&&(ae.innerHTML=_t),Me=y(e),F=i(e,"H3",{id:!0,"data-svelte-h":!0}),w(F)!=="svelte-k0gyvc"&&(F.innerHTML=gt),Ue=y(e),ie=i(e,"P",{"data-svelte-h":!0}),w(ie)!=="svelte-pmrn8n"&&(ie.innerHTML=Ct),$e=y(e),re=i(e,"P",{"data-svelte-h":!0}),w(re)!=="svelte-tco0th"&&(re.textContent=Tt),Pe=y(e),oe=i(e,"P",{"data-svelte-h":!0}),w(oe)!=="svelte-xjwy4l"&&(oe.textContent=xt),Ee=y(e),pe=i(e,"P",{"data-svelte-h":!0}),w(pe)!=="svelte-5yw9cd"&&(pe.innerHTML=kt),Be=y(e),J=i(e,"H3",{id:!0,"data-svelte-h":!0}),w(J)!=="svelte-1c5ubnl"&&(J.innerHTML=It),je=y(e),ce=i(e,"P",{"data-svelte-h":!0}),w(ce)!=="svelte-1ilqcs0"&&(ce.innerHTML=Dt),qe=y(e),ue=i(e,"P",{"data-svelte-h":!0}),w(ue)!=="svelte-1qv6h5"&&(ue.innerHTML=Lt),ze=y(e),de=i(e,"P",{"data-svelte-h":!0}),w(de)!=="svelte-mh5nvu"&&(de.innerHTML=Ht),Oe=y(e),fe=i(e,"P",{"data-svelte-h":!0}),w(fe)!=="svelte-1qc1hy1"&&(fe.innerHTML=St),Ve=y(e),R=i(e,"H3",{id:!0,"data-svelte-h":!0}),w(R)!=="svelte-l8rx0d"&&(R.innerHTML=At),We=y(e),he=i(e,"P",{"data-svelte-h":!0}),w(he)!=="svelte-1r4ze8n"&&(he.innerHTML=Mt),Ne=y(e),Y=i(e,"H2",{id:!0,"data-svelte-h":!0}),w(Y)!=="svelte-7dsikd"&&(Y.innerHTML=Ut),Fe=y(e),ye=i(e,"P",{"data-svelte-h":!0}),w(ye)!=="svelte-ogcuk0"&&(ye.innerHTML=$t),Je=y(e),me=i(e,"P",{"data-svelte-h":!0}),w(me)!=="svelte-8zz4cd"&&(me.innerHTML=Pt),Re=y(e),be=i(e,"P",{"data-svelte-h":!0}),w(be)!=="svelte-1k4cmzk"&&(be.innerHTML=Et),this.h()},h(){es(s.src,c=ds)||b(s,"src",c),b(s,"width",Nt.width),b(s,"height",Nt.height),b(s,"alt","The Tailwind UI Landing Page showing a bunch of beautiful components"),ls(s,"background-color",fs),b(f,"id","is-tailwind-ui-worth-it"),b(H,"id","the-tui-workflow"),M.a=E,b(V,"id","looking-good-has-never-been-this-easy"),b(W,"id","framework-agnostic"),b(N,"id","its-not-perfect"),b(F,"id","components-come-in-just-one-theme"),b(J,"id","tailwind-css-limitations-show"),b(R,"id","no-offline-support"),b(Y,"id","is-it-worth-it")},m(e,n){l(e,s,n),l(e,d,n),l(e,f,n),l(e,r,n),l(e,_,n),l(e,U,n),l(e,A,n),l(e,B,n),l(e,x,n),l(e,q,n),l(e,H,n),l(e,j,n),l(e,P,n),l(e,v,n),l(e,p,n),l(e,o,n),Xe(L,e,n),l(e,z,n),M.m(G,e,n),l(e,E,n),l(e,K,n),l(e,we,n),Xe(O,e,n),l(e,_e,n),l(e,Q,n),l(e,ge,n),l(e,V,n),l(e,Ce,n),l(e,X,n),l(e,Te,n),l(e,Z,n),l(e,xe,n),l(e,ee,n),l(e,ke,n),l(e,W,n),l(e,Ie,n),l(e,te,n),l(e,De,n),l(e,se,n),l(e,Le,n),l(e,ne,n),l(e,He,n),l(e,le,n),l(e,Se,n),l(e,N,n),l(e,Ae,n),l(e,ae,n),l(e,Me,n),l(e,F,n),l(e,Ue,n),l(e,ie,n),l(e,$e,n),l(e,re,n),l(e,Pe,n),l(e,oe,n),l(e,Ee,n),l(e,pe,n),l(e,Be,n),l(e,J,n),l(e,je,n),l(e,ce,n),l(e,qe,n),l(e,ue,n),l(e,ze,n),l(e,de,n),l(e,Oe,n),l(e,fe,n),l(e,Ve,n),l(e,R,n),l(e,We,n),l(e,he,n),l(e,Ne,n),l(e,Y,n),l(e,Fe,n),l(e,ye,n),l(e,Je,n),l(e,me,n),l(e,Re,n),l(e,be,n),Ye=!0},p(e,[n]){const Bt={};n&17&&(Bt.$$scope={dirty:n,ctx:e}),L.$set(Bt);const jt={};n&17&&(jt.$$scope={dirty:n,ctx:e}),O.$set(jt)},i(e){Ye||(Ze(L.$$.fragment,e),Ze(O.$$.fragment,e),Ye=!0)},o(e){et(L.$$.fragment,e),et(O.$$.fragment,e),Ye=!1},d(e){e&&(t(s),t(d),t(f),t(r),t(_),t(U),t(A),t(B),t(x),t(q),t(H),t(j),t(P),t(v),t(p),t(o),t(z),M.d(),t(E),t(K),t(we),t(_e),t(Q),t(ge),t(V),t(Ce),t(X),t(Te),t(Z),t(xe),t(ee),t(ke),t(W),t(Ie),t(te),t(De),t(se),t(Le),t(ne),t(He),t(le),t(Se),t(N),t(Ae),t(ae),t(Me),t(F),t(Ue),t(ie),t($e),t(re),t(Pe),t(oe),t(Ee),t(pe),t(Be),t(J),t(je),t(ce),t(qe),t(ue),t(ze),t(de),t(Oe),t(fe),t(Ve),t(R),t(We),t(he),t(Ne),t(Y),t(Fe),t(ye),t(Je),t(me),t(Re),t(be)),tt(L,e),tt(O,e)}}}function bs(u,s,c){let d;const f=as("USD");ts(u,f,_=>c(0,d=_));function m(_){d=_,f.set(d)}function r(_){d=_,f.set(d)}return[d,f,m,r]}class Ts extends it{constructor(s){super(),rt(this,s,bs,ms,at,{})}}export{Ts as component};