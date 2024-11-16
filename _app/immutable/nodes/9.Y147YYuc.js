import { s as safe_not_equal, n as noop } from "../chunks/scheduler.DhO_7JC-.js";
import { S as SvelteComponent, i as init, d as detach, a as insert_hydration, k as attr, c as claim_element, l as get_svelte_dataset, g as claim_space, m as claim_html_tag, h as element, j as space, H as HtmlTagHydration } from "../chunks/index.BSC7__lV.js";
function create_fragment(ctx) {
  let h1;
  let textContent = `<a href="#dts-buddy-fixes-type-declarations">DTS-Buddy fixes Type-Declarations</a>`;
  let t1;
  let p0;
  let textContent_1 = `<code>dts-buddy</code> is one of those tools that’s hard to justify without encountering the problem they solve first. Here’s the story of how I ran into it.`;
  let t4;
  let p1;
  let textContent_2 = `If you don’t care why, you can <a href="#dts-buddy-the-savior">skip past the intro</a>`;
  let t7;
  let h20;
  let textContent_3 = `<a href="#a-horror-story-about-types-in-subpackages">A horror story about types in subpackages</a>`;
  let t9;
  let p2;
  let textContent_4 = `I’ve been finding myself copying a lot of code between projects. To make this easier, I’ve been building a package where I keep all my commonly used code. Since it includes code from many domains, using subpackages seemed quite natural. <code>@sigrist.dev/framework/pdf</code> for all my PDF-related code, <code>@sigrist.dev/framework/ui</code> for all my UI-related code, and so on.`;
  let t15;
  let p3;
  let textContent_5 = "To keep editing convenient, I opted to use JSDoc types, and generate type-declarations from them.";
  let t17;
  let p4;
  let textContent_6 = `While doing this, I quickly learned about the pitfalls of using subpackages. Using the TypeScript compiler means I was generating one <code>d.ts</code> file per <code>js</code> file. This caused a problems when importing a subpackage. Whenever I started typing <code>import {</code> the IDE would show me a list of all the types present in the package, including ones that were not meant to be public. This was very irritating.`;
  let t25;
  let p5;
  let textContent_7 = `Another issue I ran into is that <code>go to definition</code> didn’t work. I couldn’t jump to the implementation of a type, because the IDE didn’t know how to map the type-declaration to the actual source code.
As the declarations were always colocated with the JS file it wasn’t that bad, but still inconveniet. I often have to glance at the implementation to recall what was going on, since the package isn’t documented well.`;
  let t29;
  let h21;
  let textContent_8 = `<a href="#dts-buddy-the-savior">Dts-Buddy; The savior</a>`;
  let t31;
  let p6;
  let textContent_9 = `<code>dts-buddy</code> solves all these things in a very clever way. Instead of colocating each type-declaration with the JS file it belongs to, it generates just one <code>.d.ts</code> file for the entire package. This is then referenced by the <code>types</code> field in your <code>package.json</code>.
The file contains module declarations for the public interface of the package and it’s subpackages, using the <code>declare module</code> syntax.`;
  let t42;
  let p7;
  let textContent_10 = "Here’s an example output it generated for one of my (private, sorry) packages:";
  let t44;
  let html_tag;
  let raw0_value = `<pre class="shiki vitesse-dark twoslash lsp" style="background-color:#121212;color:#dbd7caee" tabindex="0"><code><span class="line"><span style="color:#758575DD">// @filename: dist/types.d.ts</span></span>
<span class="line"><span style="color:#CB7676">declare</span><span style="color:#CB7676"> module</span><span style="color:#C98A7D99"> '</span><span style="color:#C98A7D">@sigrist.dev/framework/pdf</span><span style="color:#C98A7D99">'</span><span style="color:#666666"> &#123;</span></span>
<span class="line"><span style="color:#758575DD">    /**</span></span>
<span class="line"><span style="color:#758575DD">    * Adds a QR-ESR Invoice footer to the given PDF.</span></span>
<span class="line"><span style="color:#758575DD">    * Assumes the current page has A4 portrait format.</span></span>
<span class="line"><span style="color:#758575DD">    *</span></span>
<span class="line"><span style="color:#758575DD">    * </span><span style="color:#666666">@</span><span style="color:#4D9375">see</span><span style="color:#BD976A"> https://www.swiss-qr-invoice.org/validator/?lang=de</span><span style="color:#758575DD"> for a validator</span></span>
<span class="line"><span style="color:#758575DD">    */</span></span>
<span class="line"><span style="color:#4D9375">    export</span><span style="color:#CB7676"> function</span><span style="color:#80A665"> </span><span style="color:#80A665"><span class="twoslash-hover"><span class="twoslash-popup-container"><code class="twoslash-popup-code"><span style="color:#CB7676">function</span><span style="color:#80A665"> addQrEsrFooter</span><span style="color:#666666">(</span><span style="color:#BD976A">pdf</span><span style="color:#666666">: </span><span style="color:#CB7676">import</span><span style="color:#666666">(</span><span style="color:#C98A7D99">"</span><span style="color:#C98A7D">jspdf</span><span style="color:#C98A7D99">"</span><span style="color:#666666">).</span><span style="color:#5DA994">jsPDF</span><span style="color:#666666">,</span><span style="color:#BD976A"> data</span><span style="color:#666666">: </span><span style="color:#5DA994">ESRData</span><span style="color:#666666">):</span><span style="color:#CB7676"> import</span><span style="color:#666666">(</span><span style="color:#C98A7D99">"</span><span style="color:#C98A7D">jspdf</span><span style="color:#C98A7D99">"</span><span style="color:#666666">)</span><span style="color:#DBD7CAEE">.</span><span style="color:#5DA994">jsPDF</span></code><div class="twoslash-popup-docs">Adds a QR-ESR Invoice footer to the given PDF.
Assumes the current page has A4 portrait format.</div><div class="twoslash-popup-docs twoslash-popup-docs-tags"><span class="twoslash-popup-docs-tag"><span class="twoslash-popup-docs-tag-name">@see</span><span class="twoslash-popup-docs-tag-value">https://www.swiss-qr-invoice.org/validator/?lang=de for a validator</span></span></div></span>addQrEsrFooter</span></span><span style="color:#666666">(</span><span style="color:#BD976A"><span class="twoslash-hover"><span class="twoslash-popup-container"><code class="twoslash-popup-code"><span style="color:#80A665">pdf</span><span style="color:#666666">:</span><span style="color:#BD976A"> jsPDF</span></code></span>pdf</span></span><span style="color:#666666">: </span><span style="color:#CB7676">import</span><span style="color:#666666">(</span><span style="color:#C98A7D99">"</span><span style="color:#C98A7D">jspdf</span><span style="color:#C98A7D99">"</span><span style="color:#666666">).</span><span style="color:#5DA994"><span class="twoslash-hover"><span class="twoslash-popup-container"><code class="twoslash-popup-code"><span style="color:#CB7676">class</span><span style="color:#5DA994"> jsPDF</span></code></span>jsPDF</span></span><span style="color:#666666">,</span><span style="color:#BD976A"> </span><span style="color:#BD976A"><span class="twoslash-hover"><span class="twoslash-popup-container"><code class="twoslash-popup-code"><span style="color:#80A665">data</span><span style="color:#666666">:</span><span style="color:#BD976A"> ESRData</span></code></span>data</span></span><span style="color:#666666">: </span><span style="color:#5DA994"><span class="twoslash-hover"><span class="twoslash-popup-container"><code class="twoslash-popup-code"><pre class="shiki vitesse-dark" style="background-color:#121212;color:#dbd7caee" tabindex="0"><code><span class="line"><span style="color:#CB7676">type</span><span style="color:#5DA994"> ESRData</span><span style="color:#666666"> =</span><span style="color:#666666"> &#123;</span></span>
<span class="line"><span style="color:#BD976A">    amount</span><span style="color:#666666">: </span><span style="color:#5DA994">number</span><span style="color:#666666">;</span></span>
<span class="line"><span style="color:#BD976A">    reference</span><span style="color:#666666">: </span><span style="color:#5DA994">string</span><span style="color:#666666">;</span></span>
<span class="line"><span style="color:#666666">&#125;</span></span></code></pre></code></span>ESRData</span></span><span style="color:#666666">)</span><span style="color:#666666"> :</span><span style="color:#CB7676"> import</span><span style="color:#666666">(</span><span style="color:#C98A7D99">"</span><span style="color:#C98A7D">jspdf</span><span style="color:#C98A7D99">"</span><span style="color:#666666">)</span><span style="color:#DBD7CAEE">.</span><span style="color:#5DA994"><span class="twoslash-hover"><span class="twoslash-popup-container"><code class="twoslash-popup-code"><span style="color:#CB7676">class</span><span style="color:#5DA994"> jsPDF</span></code></span>jsPDF</span></span><span style="color:#666666">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#4D9375">    export</span><span style="color:#CB7676"> type</span><span style="color:#5DA994"> </span><span style="color:#5DA994"><span class="twoslash-hover"><span class="twoslash-popup-container"><code class="twoslash-popup-code"><pre class="shiki vitesse-dark" style="background-color:#121212;color:#dbd7caee" tabindex="0"><code><span class="line"><span style="color:#CB7676">type</span><span style="color:#5DA994"> ESRData</span><span style="color:#666666"> =</span><span style="color:#666666"> &#123;</span></span>
<span class="line"><span style="color:#BD976A">    amount</span><span style="color:#666666">: </span><span style="color:#5DA994">number</span><span style="color:#666666">;</span></span>
<span class="line"><span style="color:#BD976A">    reference</span><span style="color:#666666">: </span><span style="color:#5DA994">string</span><span style="color:#666666">;</span></span>
<span class="line"><span style="color:#666666">&#125;</span></span></code></pre></code></span>ESRData</span></span><span style="color:#666666"> =</span><span style="color:#666666"> &#123;</span></span>
<span class="line"><span style="color:#BD976A">        </span><span style="color:#BD976A"><span class="twoslash-hover"><span class="twoslash-popup-container"><code class="twoslash-popup-code"><span style="color:#80A665">amount</span><span style="color:#666666">:</span><span style="color:#BD976A"> number</span></code></span>amount</span></span><span style="color:#666666">: </span><span style="color:#5DA994">number</span><span style="color:#666666">;</span></span>
<span class="line"><span style="color:#BD976A">        </span><span style="color:#BD976A"><span class="twoslash-hover"><span class="twoslash-popup-container"><code class="twoslash-popup-code"><span style="color:#80A665">reference</span><span style="color:#666666">:</span><span style="color:#BD976A"> string</span></code></span>reference</span></span><span style="color:#666666">: </span><span style="color:#5DA994">string</span><span style="color:#666666">;</span></span>
<span class="line"><span style="color:#758575DD">		//...</span></span>
<span class="line"><span style="color:#666666">    &#125;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#758575DD">	// ...</span></span>
<span class="line"><span style="color:#666666">&#125;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#CB7676">declare</span><span style="color:#CB7676"> module</span><span style="color:#C98A7D99"> '</span><span style="color:#C98A7D">@sigrist.dev/framework/ui</span><span style="color:#C98A7D99">'</span><span style="color:#666666"> &#123;</span></span>
<span class="line"><span style="color:#758575DD">	// ...</span></span>
<span class="line"><span style="color:#666666">&#125;</span></span></code></pre>`;
  let t45;
  let p8;
  let textContent_11 = `Alongside this, it also generates a <code>.map.d.ts</code> file, which maps the public types onto the actual source code. This allows the IDE to “go to definition” and “peek definition” reliably.`;
  let t49;
  let h22;
  let textContent_12 = `<a href="#how-to-use-it">How to use it</a>`;
  let t51;
  let p9;
  let textContent_13 = "First install it:";
  let t53;
  let html_tag_1;
  let raw1_value = `<pre class="shiki vitesse-dark" style="background-color:#121212;color:#dbd7caee" tabindex="0"><code><span class="line"><span style="color:#80A665">pnpm</span><span style="color:#C98A7D"> i</span><span style="color:#C99076"> -D</span><span style="color:#C98A7D"> dts-buddy</span></span></code></pre>`;
  let t54;
  let p10;
  let textContent_14 = `Then create a <code>build.js</code> file in your project, and use it as your build script:`;
  let t58;
  let html_tag_2;
  let raw2_value = `<pre class="shiki vitesse-dark" style="background-color:#121212;color:#dbd7caee" tabindex="0"><code><span class="line"><span style="color:#666666">&#123;</span></span>
<span class="line"><span style="color:#C98A7D99">	"</span><span style="color:#B8A965">scripts</span><span style="color:#C98A7D99">"</span><span style="color:#666666">:</span><span style="color:#666666"> &#123;</span></span>
<span class="line"><span style="color:#C98A7D99">		"</span><span style="color:#B8A965">build</span><span style="color:#C98A7D99">"</span><span style="color:#666666">:</span><span style="color:#C98A7D99"> "</span><span style="color:#C98A7D">node build.js</span><span style="color:#C98A7D99">"</span></span>
<span class="line"><span style="color:#666666">	&#125;</span></span>
<span class="line"><span style="color:#666666">&#125;</span></span></code></pre>`;
  let t59;
  let html_tag_3;
  let raw3_value = `<pre class="shiki vitesse-dark" style="background-color:#121212;color:#dbd7caee" tabindex="0"><code><span class="line"><span style="color:#758575DD">// @filename: build.js</span></span>
<span class="line"><span style="color:#4D9375">import</span><span style="color:#666666"> &#123;</span><span style="color:#BD976A"> createBundle</span><span style="color:#666666"> &#125;</span><span style="color:#4D9375"> from</span><span style="color:#C98A7D99"> '</span><span style="color:#C98A7D">dts-buddy</span><span style="color:#C98A7D99">'</span><span style="color:#666666">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#758575DD">//Generate a bundle of all type-declarations</span></span>
<span class="line"><span style="color:#4D9375">await</span><span style="color:#80A665"> createBundle</span><span style="color:#666666">(&#123;</span></span>
<span class="line"><span style="color:#B8A965">	project</span><span style="color:#666666">:</span><span style="color:#C98A7D99"> '</span><span style="color:#C98A7D">tsconfig.json</span><span style="color:#C98A7D99">'</span><span style="color:#666666">,</span><span style="color:#758575DD"> //Your tsconfig.json</span></span>
<span class="line"></span>
<span class="line"><span style="color:#758575DD">	//Map subpackages to their entrypoints</span></span>
<span class="line"><span style="color:#B8A965">	modules</span><span style="color:#666666">:</span><span style="color:#666666"> &#123;</span></span>
<span class="line"><span style="color:#C98A7D99">		'</span><span style="color:#C98A7D">@sigrist.dev/framework/pdf</span><span style="color:#C98A7D99">'</span><span style="color:#666666">:</span><span style="color:#C98A7D99"> '</span><span style="color:#C98A7D">src/pdf/index.js</span><span style="color:#C98A7D99">'</span><span style="color:#666666">,</span></span>
<span class="line"><span style="color:#C98A7D99">		'</span><span style="color:#C98A7D">@sigrist.dev/framework/ui</span><span style="color:#C98A7D99">'</span><span style="color:#666666">:</span><span style="color:#C98A7D99"> '</span><span style="color:#C98A7D">src/ui/index.js</span><span style="color:#C98A7D99">'</span></span>
<span class="line"><span style="color:#666666">	&#125;,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B8A965">	include</span><span style="color:#666666">:</span><span style="color:#666666"> [</span><span style="color:#C98A7D99">'</span><span style="color:#C98A7D">src</span><span style="color:#C98A7D99">'</span><span style="color:#666666">],</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B8A965">	output</span><span style="color:#666666">:</span><span style="color:#C98A7D99"> '</span><span style="color:#C98A7D">types/index.d.ts</span><span style="color:#C98A7D99">'</span><span style="color:#758575DD"> //The resulting type-declaration file</span></span>
<span class="line"><span style="color:#666666">&#125;);</span></span></code></pre>`;
  let t60;
  let p11;
  let textContent_15 = `The only thing left to do is to tell the module-resolution to actually use the generated file. So, in your <code>package.json</code>, add a <code>types</code> field, and also register it in each <code>exports</code> field.`;
  let t68;
  let html_tag_4;
  let raw4_value = `<pre class="shiki vitesse-dark" style="background-color:#121212;color:#dbd7caee" tabindex="0"><code><span class="line"><span style="color:#666666">&#123;</span></span>
<span class="line"><span style="color:#C98A7D99">	"</span><span style="color:#B8A965">types</span><span style="color:#C98A7D99">"</span><span style="color:#666666">:</span><span style="color:#C98A7D99"> "</span><span style="color:#C98A7D">types/index.d.ts</span><span style="color:#C98A7D99">"</span><span style="color:#666666">,</span><span style="color:#758575DD"> //here</span></span>
<span class="line"><span style="color:#C98A7D99">	"</span><span style="color:#B8A965">exports</span><span style="color:#C98A7D99">"</span><span style="color:#666666">:</span><span style="color:#666666"> &#123;</span></span>
<span class="line"><span style="color:#C98A7D99">		"</span><span style="color:#B8A965">.</span><span style="color:#C98A7D99">"</span><span style="color:#666666">:</span><span style="color:#666666"> &#123;</span></span>
<span class="line"><span style="color:#C98A7D99">			"</span><span style="color:#B8A965">types</span><span style="color:#C98A7D99">"</span><span style="color:#666666">:</span><span style="color:#C98A7D99"> "</span><span style="color:#C98A7D">types/index.d.ts</span><span style="color:#C98A7D99">"</span><span style="color:#666666">,</span><span style="color:#758575DD"> //here</span></span>
<span class="line"><span style="color:#C98A7D99">			"</span><span style="color:#B8A965">import</span><span style="color:#C98A7D99">"</span><span style="color:#666666">:</span><span style="color:#C98A7D99"> "</span><span style="color:#C98A7D">./src/index.js</span><span style="color:#C98A7D99">"</span></span>
<span class="line"><span style="color:#666666">		&#125;,</span></span>
<span class="line"><span style="color:#C98A7D99">		"</span><span style="color:#B8A965">./pdf</span><span style="color:#C98A7D99">"</span><span style="color:#666666">:</span><span style="color:#666666"> &#123;</span></span>
<span class="line"><span style="color:#C98A7D99">			"</span><span style="color:#B8A965">types</span><span style="color:#C98A7D99">"</span><span style="color:#666666">:</span><span style="color:#C98A7D99"> "</span><span style="color:#C98A7D">types/index.d.ts</span><span style="color:#C98A7D99">"</span><span style="color:#666666">,</span><span style="color:#758575DD"> //here</span></span>
<span class="line"><span style="color:#C98A7D99">			"</span><span style="color:#B8A965">import</span><span style="color:#C98A7D99">"</span><span style="color:#666666">:</span><span style="color:#C98A7D99"> "</span><span style="color:#C98A7D">./src/pdf/index.js</span><span style="color:#C98A7D99">"</span></span>
<span class="line"><span style="color:#666666">		&#125;,</span></span>
<span class="line"><span style="color:#C98A7D99">		"</span><span style="color:#B8A965">./ui</span><span style="color:#C98A7D99">"</span><span style="color:#666666">:</span><span style="color:#666666"> &#123;</span></span>
<span class="line"><span style="color:#C98A7D99">			"</span><span style="color:#B8A965">types</span><span style="color:#C98A7D99">"</span><span style="color:#666666">:</span><span style="color:#C98A7D99"> "</span><span style="color:#C98A7D">types/index.d.ts</span><span style="color:#C98A7D99">"</span><span style="color:#666666">,</span><span style="color:#758575DD"> //here</span></span>
<span class="line"><span style="color:#C98A7D99">			"</span><span style="color:#B8A965">import</span><span style="color:#C98A7D99">"</span><span style="color:#666666">:</span><span style="color:#C98A7D99"> "</span><span style="color:#C98A7D">./src/ui/index.js</span><span style="color:#C98A7D99">"</span></span>
<span class="line"><span style="color:#666666">		&#125;</span></span>
<span class="line"><span style="color:#666666">	&#125;</span></span>
<span class="line"><span style="color:#666666">&#125;</span></span></code></pre>`;
  let t69;
  let p12;
  let textContent_16 = `That’s it! Now you can run <code>npm run build</code> and it’ll generate a single type-declaration file (+map) for your entire package.`;
  let t73;
  let h23;
  let textContent_17 = `<a href="#should-you-use-it">Should you use it?</a>`;
  let t75;
  let p13;
  let textContent_18 = `<code>dts-buddy</code> is a tool that solves the subpackage-problem very very well. Outside of that, the regular TypeScript compiler is good enough. It’s going to be more familiar to most developers and is maintained more actively. But when you do need <code>dts-buddy</code>, it’s a lifesaver.`;
  let t80;
  let p14;
  let textContent_19 = "I for one have really enjoyed it and am very likely to choose it again.";
  return {
    c() {
      h1 = element("h1");
      h1.innerHTML = textContent;
      t1 = space();
      p0 = element("p");
      p0.innerHTML = textContent_1;
      t4 = space();
      p1 = element("p");
      p1.innerHTML = textContent_2;
      t7 = space();
      h20 = element("h2");
      h20.innerHTML = textContent_3;
      t9 = space();
      p2 = element("p");
      p2.innerHTML = textContent_4;
      t15 = space();
      p3 = element("p");
      p3.textContent = textContent_5;
      t17 = space();
      p4 = element("p");
      p4.innerHTML = textContent_6;
      t25 = space();
      p5 = element("p");
      p5.innerHTML = textContent_7;
      t29 = space();
      h21 = element("h2");
      h21.innerHTML = textContent_8;
      t31 = space();
      p6 = element("p");
      p6.innerHTML = textContent_9;
      t42 = space();
      p7 = element("p");
      p7.textContent = textContent_10;
      t44 = space();
      html_tag = new HtmlTagHydration(false);
      t45 = space();
      p8 = element("p");
      p8.innerHTML = textContent_11;
      t49 = space();
      h22 = element("h2");
      h22.innerHTML = textContent_12;
      t51 = space();
      p9 = element("p");
      p9.textContent = textContent_13;
      t53 = space();
      html_tag_1 = new HtmlTagHydration(false);
      t54 = space();
      p10 = element("p");
      p10.innerHTML = textContent_14;
      t58 = space();
      html_tag_2 = new HtmlTagHydration(false);
      t59 = space();
      html_tag_3 = new HtmlTagHydration(false);
      t60 = space();
      p11 = element("p");
      p11.innerHTML = textContent_15;
      t68 = space();
      html_tag_4 = new HtmlTagHydration(false);
      t69 = space();
      p12 = element("p");
      p12.innerHTML = textContent_16;
      t73 = space();
      h23 = element("h2");
      h23.innerHTML = textContent_17;
      t75 = space();
      p13 = element("p");
      p13.innerHTML = textContent_18;
      t80 = space();
      p14 = element("p");
      p14.textContent = textContent_19;
      this.h();
    },
    l(nodes) {
      h1 = claim_element(nodes, "H1", { id: true, ["data-svelte-h"]: true });
      if (get_svelte_dataset(h1) !== "svelte-6meor9")
        h1.innerHTML = textContent;
      t1 = claim_space(nodes);
      p0 = claim_element(nodes, "P", { ["data-svelte-h"]: true });
      if (get_svelte_dataset(p0) !== "svelte-13kfg1b")
        p0.innerHTML = textContent_1;
      t4 = claim_space(nodes);
      p1 = claim_element(nodes, "P", { ["data-svelte-h"]: true });
      if (get_svelte_dataset(p1) !== "svelte-1x748i3")
        p1.innerHTML = textContent_2;
      t7 = claim_space(nodes);
      h20 = claim_element(nodes, "H2", { id: true, ["data-svelte-h"]: true });
      if (get_svelte_dataset(h20) !== "svelte-v1ttt0")
        h20.innerHTML = textContent_3;
      t9 = claim_space(nodes);
      p2 = claim_element(nodes, "P", { ["data-svelte-h"]: true });
      if (get_svelte_dataset(p2) !== "svelte-15olzmx")
        p2.innerHTML = textContent_4;
      t15 = claim_space(nodes);
      p3 = claim_element(nodes, "P", { ["data-svelte-h"]: true });
      if (get_svelte_dataset(p3) !== "svelte-198lpmg")
        p3.textContent = textContent_5;
      t17 = claim_space(nodes);
      p4 = claim_element(nodes, "P", { ["data-svelte-h"]: true });
      if (get_svelte_dataset(p4) !== "svelte-11jzph8")
        p4.innerHTML = textContent_6;
      t25 = claim_space(nodes);
      p5 = claim_element(nodes, "P", { ["data-svelte-h"]: true });
      if (get_svelte_dataset(p5) !== "svelte-1x2j3qn")
        p5.innerHTML = textContent_7;
      t29 = claim_space(nodes);
      h21 = claim_element(nodes, "H2", { id: true, ["data-svelte-h"]: true });
      if (get_svelte_dataset(h21) !== "svelte-y603ka")
        h21.innerHTML = textContent_8;
      t31 = claim_space(nodes);
      p6 = claim_element(nodes, "P", { ["data-svelte-h"]: true });
      if (get_svelte_dataset(p6) !== "svelte-b8cecc")
        p6.innerHTML = textContent_9;
      t42 = claim_space(nodes);
      p7 = claim_element(nodes, "P", { ["data-svelte-h"]: true });
      if (get_svelte_dataset(p7) !== "svelte-2h5g6c")
        p7.textContent = textContent_10;
      t44 = claim_space(nodes);
      html_tag = claim_html_tag(nodes, false);
      t45 = claim_space(nodes);
      p8 = claim_element(nodes, "P", { ["data-svelte-h"]: true });
      if (get_svelte_dataset(p8) !== "svelte-vsvpk2")
        p8.innerHTML = textContent_11;
      t49 = claim_space(nodes);
      h22 = claim_element(nodes, "H2", { id: true, ["data-svelte-h"]: true });
      if (get_svelte_dataset(h22) !== "svelte-1l1k7cz")
        h22.innerHTML = textContent_12;
      t51 = claim_space(nodes);
      p9 = claim_element(nodes, "P", { ["data-svelte-h"]: true });
      if (get_svelte_dataset(p9) !== "svelte-14wigas")
        p9.textContent = textContent_13;
      t53 = claim_space(nodes);
      html_tag_1 = claim_html_tag(nodes, false);
      t54 = claim_space(nodes);
      p10 = claim_element(nodes, "P", { ["data-svelte-h"]: true });
      if (get_svelte_dataset(p10) !== "svelte-h4o59e")
        p10.innerHTML = textContent_14;
      t58 = claim_space(nodes);
      html_tag_2 = claim_html_tag(nodes, false);
      t59 = claim_space(nodes);
      html_tag_3 = claim_html_tag(nodes, false);
      t60 = claim_space(nodes);
      p11 = claim_element(nodes, "P", { ["data-svelte-h"]: true });
      if (get_svelte_dataset(p11) !== "svelte-11fftnk")
        p11.innerHTML = textContent_15;
      t68 = claim_space(nodes);
      html_tag_4 = claim_html_tag(nodes, false);
      t69 = claim_space(nodes);
      p12 = claim_element(nodes, "P", { ["data-svelte-h"]: true });
      if (get_svelte_dataset(p12) !== "svelte-4gj9lj")
        p12.innerHTML = textContent_16;
      t73 = claim_space(nodes);
      h23 = claim_element(nodes, "H2", { id: true, ["data-svelte-h"]: true });
      if (get_svelte_dataset(h23) !== "svelte-13u71ln")
        h23.innerHTML = textContent_17;
      t75 = claim_space(nodes);
      p13 = claim_element(nodes, "P", { ["data-svelte-h"]: true });
      if (get_svelte_dataset(p13) !== "svelte-p7dlfn")
        p13.innerHTML = textContent_18;
      t80 = claim_space(nodes);
      p14 = claim_element(nodes, "P", { ["data-svelte-h"]: true });
      if (get_svelte_dataset(p14) !== "svelte-yzmwae")
        p14.textContent = textContent_19;
      this.h();
    },
    h() {
      attr(h1, "id", "dts-buddy-fixes-type-declarations");
      attr(h20, "id", "a-horror-story-about-types-in-subpackages");
      attr(h21, "id", "dts-buddy-the-savior");
      html_tag.a = t45;
      attr(h22, "id", "how-to-use-it");
      html_tag_1.a = t54;
      html_tag_2.a = t59;
      html_tag_3.a = t60;
      html_tag_4.a = t69;
      attr(h23, "id", "should-you-use-it");
    },
    m(target, anchor) {
      insert_hydration(target, h1, anchor);
      insert_hydration(target, t1, anchor);
      insert_hydration(target, p0, anchor);
      insert_hydration(target, t4, anchor);
      insert_hydration(target, p1, anchor);
      insert_hydration(target, t7, anchor);
      insert_hydration(target, h20, anchor);
      insert_hydration(target, t9, anchor);
      insert_hydration(target, p2, anchor);
      insert_hydration(target, t15, anchor);
      insert_hydration(target, p3, anchor);
      insert_hydration(target, t17, anchor);
      insert_hydration(target, p4, anchor);
      insert_hydration(target, t25, anchor);
      insert_hydration(target, p5, anchor);
      insert_hydration(target, t29, anchor);
      insert_hydration(target, h21, anchor);
      insert_hydration(target, t31, anchor);
      insert_hydration(target, p6, anchor);
      insert_hydration(target, t42, anchor);
      insert_hydration(target, p7, anchor);
      insert_hydration(target, t44, anchor);
      html_tag.m(raw0_value, target, anchor);
      insert_hydration(target, t45, anchor);
      insert_hydration(target, p8, anchor);
      insert_hydration(target, t49, anchor);
      insert_hydration(target, h22, anchor);
      insert_hydration(target, t51, anchor);
      insert_hydration(target, p9, anchor);
      insert_hydration(target, t53, anchor);
      html_tag_1.m(raw1_value, target, anchor);
      insert_hydration(target, t54, anchor);
      insert_hydration(target, p10, anchor);
      insert_hydration(target, t58, anchor);
      html_tag_2.m(raw2_value, target, anchor);
      insert_hydration(target, t59, anchor);
      html_tag_3.m(raw3_value, target, anchor);
      insert_hydration(target, t60, anchor);
      insert_hydration(target, p11, anchor);
      insert_hydration(target, t68, anchor);
      html_tag_4.m(raw4_value, target, anchor);
      insert_hydration(target, t69, anchor);
      insert_hydration(target, p12, anchor);
      insert_hydration(target, t73, anchor);
      insert_hydration(target, h23, anchor);
      insert_hydration(target, t75, anchor);
      insert_hydration(target, p13, anchor);
      insert_hydration(target, t80, anchor);
      insert_hydration(target, p14, anchor);
    },
    p: noop,
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching) {
        detach(h1);
        detach(t1);
        detach(p0);
        detach(t4);
        detach(p1);
        detach(t7);
        detach(h20);
        detach(t9);
        detach(p2);
        detach(t15);
        detach(p3);
        detach(t17);
        detach(p4);
        detach(t25);
        detach(p5);
        detach(t29);
        detach(h21);
        detach(t31);
        detach(p6);
        detach(t42);
        detach(p7);
        detach(t44);
        html_tag.d();
        detach(t45);
        detach(p8);
        detach(t49);
        detach(h22);
        detach(t51);
        detach(p9);
        detach(t53);
        html_tag_1.d();
        detach(t54);
        detach(p10);
        detach(t58);
        html_tag_2.d();
        detach(t59);
        html_tag_3.d();
        detach(t60);
        detach(p11);
        detach(t68);
        html_tag_4.d();
        detach(t69);
        detach(p12);
        detach(t73);
        detach(h23);
        detach(t75);
        detach(p13);
        detach(t80);
        detach(p14);
      }
    }
  };
}
class Page extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, null, create_fragment, safe_not_equal, {});
  }
}
export {
  Page as component
};
