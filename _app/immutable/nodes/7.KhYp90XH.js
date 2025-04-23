import { s as safe_not_equal, n as noop } from "../chunks/scheduler.6c6_dOpU.js";
import { S as SvelteComponent, i as init, d as detach, a as insert_hydration, k as attr, c as claim_element, l as get_svelte_dataset, g as claim_space, m as claim_html_tag, h as element, j as space, H as HtmlTagHydration } from "../chunks/index.Cr7Iuz5O.js";
function create_fragment(ctx) {
  let h1;
  let textContent = `<a href="#adding-devtools-to-vite-plugins">Adding Devtools to Vite plugins</a>`;
  let t1;
  let p0;
  let textContent_1 = `One of my favorite features in any framework is the <em>Svelte Inspector</em>. It allows you to click on a component and then it magically opens the relevant file in your editor.`;
  let t5;
  let p1;
  let textContent_2 = "In order to accomplish this, without the user’s having to do additional setup, they have to inject their devtool code into the browser during development. Today we will learn how to do that, so that you too can build great devtools!";
  let t7;
  let h20;
  let textContent_3 = `<a href="#getting-a-foothold---injecting-js-into-the-browser">Getting a Foothold - Injecting JS into the Browser</a>`;
  let t9;
  let p2;
  let textContent_4 = `The key is to inject code into vite’s client side entry point. This is surprisingly straight forward since a vite-plugin can just modify any js file using the <code>transform</code> hook.`;
  let t13;
  let html_tag;
  let raw0_value = `<pre class="shiki vitesse-dark twoslash lsp" style="background-color:#121212;color:#dbd7caee" tabindex="0"><code><span class="line"><span style="color:#758575DD">/** </span><span style="color:#666666">@</span><span style="color:#4D9375">returns</span><span style="color:#666666"> &#123;</span><span style="color:#5DA994">import('vite').Plugin</span><span style="color:#666666">&#125;</span><span style="color:#758575DD"> */</span></span>
<span class="line"><span style="color:#CB7676">const </span><span style="color:#80A665"><span class="twoslash-hover"><span class="twoslash-popup-container"><code class="twoslash-popup-code"><span style="color:#CB7676">const </span><span style="color:#80A665">devtoolsPlugin</span><span style="color:#666666">: () => </span><span style="color:#CB7676">import</span><span style="color:#666666">(</span><span style="color:#C98A7D99">'</span><span style="color:#C98A7D">vite</span><span style="color:#C98A7D99">'</span><span style="color:#666666">).</span><span style="color:#5DA994">Plugin</span></code><div class="twoslash-popup-docs twoslash-popup-docs-tags"><span class="twoslash-popup-docs-tag"><span class="twoslash-popup-docs-tag-name">@returns</span></span></div></span>devtoolsPlugin</span></span><span style="color:#666666"> =</span><span style="color:#666666"> ()</span><span style="color:#666666"> =></span><span style="color:#666666"> (&#123;</span></span>
<span class="line"><span style="color:#B8A965">  </span><span style="color:#B8A965"><span class="twoslash-hover"><span class="twoslash-popup-container"><code class="twoslash-popup-code"><span style="color:#BD976A">OutputPlugin</span><span style="color:#666666">.</span><span style="color:#BD976A">name</span><span style="color:#DBD7CAEE">: </span><span style="color:#BD976A">string</span></code></span>name</span></span><span style="color:#666666">: </span><span style="color:#C98A7D99">"</span><span style="color:#C98A7D">devtools</span><span style="color:#C98A7D99">"</span><span style="color:#666666">,</span></span>
<span class="line"><span style="color:#B8A965">  </span><span style="color:#B8A965"><span class="twoslash-hover"><span class="twoslash-popup-container"><code class="twoslash-popup-code"><span style="color:#BD976A">Plugin</span><span style="color:#666666">&#x3C;</span><span style="color:#BD976A">any</span><span style="color:#666666">>.</span><span style="color:#BD976A">enforce</span><span style="color:#CB7676">?:</span><span style="color:#C98A7D99"> "</span><span style="color:#C98A7D">pre</span><span style="color:#C98A7D99">"</span><span style="color:#CB7676"> |</span><span style="color:#C98A7D99"> "</span><span style="color:#C98A7D">post</span><span style="color:#C98A7D99">"</span><span style="color:#CB7676"> |</span><span style="color:#CB7676"> undefined</span></code><div class="twoslash-popup-docs">Enforce plugin invocation tier similar to webpack loaders.

Plugin invocation order:
- alias resolution
- &#96;enforce: 'pre'&#96; plugins
- vite core plugins
- normal plugins
- vite build plugins
- &#96;enforce: 'post'&#96; plugins
- vite build post plugins</div></span>enforce</span></span><span style="color:#666666">: </span><span style="color:#C98A7D99">"</span><span style="color:#C98A7D">pre</span><span style="color:#C98A7D99">"</span><span style="color:#666666">, </span><span style="color:#758575DD">//run before the vite's built-in transformations</span></span>
<span class="line"><span style="color:#B8A965">  </span><span style="color:#B8A965"><span class="twoslash-hover"><span class="twoslash-popup-container"><code class="twoslash-popup-code"><span style="color:#BD976A">Plugin</span><span style="color:#666666">&#x3C;</span><span style="color:#BD976A">any</span><span style="color:#666666">>.</span><span style="color:#BD976A">apply</span><span style="color:#CB7676">?:</span><span style="color:#C98A7D99"> "</span><span style="color:#C98A7D">serve</span><span style="color:#C98A7D99">"</span><span style="color:#CB7676"> |</span><span style="color:#C98A7D99"> "</span><span style="color:#C98A7D">build</span><span style="color:#C98A7D99">"</span><span style="color:#CB7676"> |</span><span style="color:#666666"> ((</span><span style="color:#C99076">this</span><span style="color:#666666">: </span><span style="color:#5DA994">void</span><span style="color:#666666">,</span><span style="color:#BD976A"> config</span><span style="color:#666666">: </span><span style="color:#5DA994">UserConfig</span><span style="color:#666666">,</span><span style="color:#BD976A"> env</span><span style="color:#666666">: </span><span style="color:#5DA994">ConfigEnv</span><span style="color:#666666">)</span><span style="color:#666666"> =></span><span style="color:#BD976A"> boolean</span><span style="color:#666666">)</span><span style="color:#CB7676"> |</span><span style="color:#CB7676"> undefined</span></code><div class="twoslash-popup-docs">Apply the plugin only for serve or build, or on certain conditions.</div></span>apply</span></span><span style="color:#666666">: </span><span style="color:#C98A7D99">"</span><span style="color:#C98A7D">serve</span><span style="color:#C98A7D99">"</span><span style="color:#666666">, </span><span style="color:#758575DD">//only run in dev mode</span></span>
<span class="line"><span style="color:#80A665">  </span><span style="color:#80A665"><span class="twoslash-hover"><span class="twoslash-popup-container"><code class="twoslash-popup-code"><pre class="shiki vitesse-dark" style="background-color:#121212;color:#dbd7caee" tabindex="0"><code><span class="line"><span style="color:#BD976A">Plugin</span><span style="color:#666666">&#x3C;</span><span style="color:#BD976A">any</span><span style="color:#666666">>.</span><span style="color:#BD976A">transform</span><span style="color:#CB7676">?:</span><span style="color:#BD976A"> ObjectHook</span><span style="color:#666666">&#x3C;(</span><span style="color:#C99076">this</span><span style="color:#666666">: </span><span style="color:#5DA994">TransformPluginContext</span><span style="color:#666666">,</span><span style="color:#BD976A"> code</span><span style="color:#666666">: </span><span style="color:#5DA994">string</span><span style="color:#666666">,</span><span style="color:#BD976A"> id</span><span style="color:#666666">: </span><span style="color:#5DA994">string</span><span style="color:#666666">,</span><span style="color:#BD976A"> options</span><span style="color:#CB7676">?</span><span style="color:#666666">: &#123;</span></span>
<span class="line"><span style="color:#BD976A">    ssr</span><span style="color:#CB7676">?</span><span style="color:#666666">: </span><span style="color:#5DA994">boolean</span><span style="color:#666666"> | </span><span style="color:#CB7676">undefined</span><span style="color:#666666">;</span></span>
<span class="line"><span style="color:#666666">&#125; | </span><span style="color:#CB7676">undefined</span><span style="color:#666666">)</span><span style="color:#666666"> =></span><span style="color:#BD976A"> TransformResult</span><span style="color:#CB7676"> |</span><span style="color:#B8A965"> Promise</span><span style="color:#666666">&#x3C;...</span><span style="color:#CB7676">>></span><span style="color:#CB7676"> |</span><span style="color:#CB7676"> undefined</span></span></code></pre></code></span>transform</span></span><span style="color:#666666">(</span><span style="color:#BD976A"><span class="twoslash-hover"><span class="twoslash-popup-container"><code class="twoslash-popup-code"><span style="color:#80A665">code</span><span style="color:#666666">:</span><span style="color:#BD976A"> string</span></code></span>code</span></span><span style="color:#666666">, </span><span style="color:#BD976A"><span class="twoslash-hover"><span class="twoslash-popup-container"><code class="twoslash-popup-code"><span style="color:#80A665">id</span><span style="color:#666666">:</span><span style="color:#BD976A"> string</span></code></span>id</span></span><span style="color:#666666">, </span><span style="color:#BD976A"><span class="twoslash-hover"><span class="twoslash-popup-container"><code class="twoslash-popup-code"><pre class="shiki vitesse-dark" style="background-color:#121212;color:#dbd7caee" tabindex="0"><code><span class="line"><span style="color:#80A665">options</span><span style="color:#666666">:</span><span style="color:#666666"> &#123;</span></span>
<span class="line"><span style="color:#BD976A">    ssr</span><span style="color:#CB7676">?:</span><span style="color:#BD976A"> boolean</span><span style="color:#CB7676"> |</span><span style="color:#CB7676"> undefined</span><span style="color:#666666">;</span></span>
<span class="line"><span style="color:#666666">&#125;</span><span style="color:#CB7676"> |</span><span style="color:#CB7676"> undefined</span></span></code></pre></code></span>options</span></span><span style="color:#666666">) &#123;</span></span>
<span class="line"><span style="color:#4D9375">    if</span><span style="color:#666666">(</span><span style="color:#BD976A"><span class="twoslash-hover"><span class="twoslash-popup-container"><code class="twoslash-popup-code"><pre class="shiki vitesse-dark" style="background-color:#121212;color:#dbd7caee" tabindex="0"><code><span class="line"><span style="color:#80A665">options</span><span style="color:#666666">:</span><span style="color:#666666"> &#123;</span></span>
<span class="line"><span style="color:#BD976A">    ssr</span><span style="color:#CB7676">?:</span><span style="color:#BD976A"> boolean</span><span style="color:#CB7676"> |</span><span style="color:#CB7676"> undefined</span><span style="color:#666666">;</span></span>
<span class="line"><span style="color:#666666">&#125;</span><span style="color:#CB7676"> |</span><span style="color:#CB7676"> undefined</span></span></code></pre></code></span>options</span></span><span style="color:#666666">?.</span><span style="color:#BD976A"><span class="twoslash-hover"><span class="twoslash-popup-container"><code class="twoslash-popup-code"><span style="color:#BD976A">ssr</span><span style="color:#CB7676">?:</span><span style="color:#BD976A"> boolean</span><span style="color:#CB7676"> |</span><span style="color:#CB7676"> undefined</span></code></span>ssr</span></span><span style="color:#666666">) </span><span style="color:#4D9375">return</span><span style="color:#758575DD"> //Don't run in SSR mode</span></span>
<span class="line"></span>
<span class="line"><span style="color:#758575DD">    //Inject some code into the vite's client side entry point</span></span>
<span class="line"><span style="color:#4D9375">    if</span><span style="color:#666666"> (</span><span style="color:#BD976A"><span class="twoslash-hover"><span class="twoslash-popup-container"><code class="twoslash-popup-code"><span style="color:#80A665">id</span><span style="color:#666666">:</span><span style="color:#BD976A"> string</span></code></span>id</span></span><span style="color:#666666">.</span><span style="color:#80A665"><span class="twoslash-hover"><span class="twoslash-popup-container"><code class="twoslash-popup-code"><span style="color:#BD976A">String</span><span style="color:#666666">.</span><span style="color:#80A665">includes</span><span style="color:#666666">(</span><span style="color:#BD976A">searchString</span><span style="color:#DBD7CAEE">: </span><span style="color:#BD976A">string</span><span style="color:#666666">,</span><span style="color:#BD976A"> position</span><span style="color:#CB7676">?:</span><span style="color:#BD976A"> number</span><span style="color:#CB7676"> |</span><span style="color:#CB7676"> undefined</span><span style="color:#666666">)</span><span style="color:#DBD7CAEE">: </span><span style="color:#BD976A">boolean</span></code><div class="twoslash-popup-docs">Returns true if searchString appears as a substring of the result of converting this
object to a String, at one or more positions that are
greater than or equal to position; otherwise, returns false.</div><div class="twoslash-popup-docs twoslash-popup-docs-tags"><span class="twoslash-popup-docs-tag"><span class="twoslash-popup-docs-tag-name">@param</span><span class="twoslash-popup-docs-tag-value">searchString search string</span></span><span class="twoslash-popup-docs-tag"><span class="twoslash-popup-docs-tag-name">@param</span><span class="twoslash-popup-docs-tag-value">position If position is undefined, 0 is assumed, so as to search all of the String.</span></span></div></span>includes</span></span><span style="color:#666666">(</span><span style="color:#C98A7D99">"</span><span style="color:#C98A7D">vite/dist/client/client.mjs</span><span style="color:#C98A7D99">"</span><span style="color:#666666">)) &#123;</span></span>
<span class="line"><span style="color:#4D9375">      return</span><span style="color:#666666"> &#123; </span><span style="color:#B8A965"><span class="twoslash-hover"><span class="twoslash-popup-container"><code class="twoslash-popup-code"><span style="color:#BD976A">code</span><span style="color:#CB7676">?:</span><span style="color:#BD976A"> string</span><span style="color:#CB7676"> |</span><span style="color:#CB7676"> undefined</span></code></span>code</span></span><span style="color:#666666">: </span><span style="color:#BD976A"><span class="twoslash-hover"><span class="twoslash-popup-container"><code class="twoslash-popup-code"><span style="color:#80A665">code</span><span style="color:#666666">:</span><span style="color:#BD976A"> string</span></code></span>code</span></span><span style="color:#CB7676"> +</span><span style="color:#C98A7D99"> "</span><span style="color:#C99076">&#92;n</span><span style="color:#C98A7D99">"</span><span style="color:#CB7676"> +</span><span style="color:#C98A7D99"> "</span><span style="color:#C98A7D">console.log('Hello World!')</span><span style="color:#C98A7D99">"</span><span style="color:#666666"> &#125;</span></span>
<span class="line"><span style="color:#666666">    &#125;</span></span>
<span class="line"><span style="color:#666666">  &#125;</span></span>
<span class="line"><span style="color:#666666">&#125;)</span></span></code></pre>`;
  let t14;
  let p3;
  let textContent_5 = "Opening the dev-site now shows the message in the console.\nThat’s the foothold we need.";
  let t16;
  let h21;
  let textContent_6 = `<a href="#importing-our-own-modules">Importing our own modules</a>`;
  let t18;
  let p4;
  let textContent_7 = "But to ship non-trivial devtools, we need more than just a foothold. We need more than just appending some code at the end of a file. We need to import our own modules.";
  let t20;
  let p5;
  let textContent_8 = "Unfortunately, this isn’t so straight forward. Our plugin is likely part of an external package and we don’t know where that package will be installed, so we can’t import our own modules using relative paths.";
  let t22;
  let html_tag_1;
  let raw1_value = `<pre class="shiki vitesse-dark twoslash lsp" style="background-color:#121212;color:#dbd7caee" tabindex="0"><code><span class="line"><span style="color:#CB7676">const </span><span style="color:#BD976A"><span class="twoslash-hover"><span class="twoslash-popup-container"><code class="twoslash-popup-code"><pre class="shiki vitesse-dark" style="background-color:#121212;color:#dbd7caee" tabindex="0"><code><span class="line"><span style="color:#CB7676">const </span><span style="color:#BD976A">plugin</span><span style="color:#666666">: &#123;</span></span>
<span class="line"><span style="color:#80A665">    transform</span><span style="color:#666666">(</span><span style="color:#BD976A">code</span><span style="color:#666666">: </span><span style="color:#5DA994">any</span><span style="color:#666666">, </span><span style="color:#BD976A">id</span><span style="color:#666666">: </span><span style="color:#5DA994">any</span><span style="color:#666666">, </span><span style="color:#BD976A">options</span><span style="color:#666666">: </span><span style="color:#5DA994">any</span><span style="color:#666666">): &#123;</span></span>
<span class="line"><span style="color:#BD976A">        code</span><span style="color:#666666">: </span><span style="color:#5DA994">string</span><span style="color:#666666">;</span></span>
<span class="line"><span style="color:#666666">    &#125; | </span><span style="color:#CB7676">undefined</span><span style="color:#666666">;</span></span>
<span class="line"><span style="color:#666666">&#125;</span></span></code></pre></code></span>plugin</span></span><span style="color:#666666"> =</span><span style="color:#666666"> &#123;</span></span>
<span class="line"><span style="color:#80A665">  </span><span style="color:#80A665"><span class="twoslash-hover"><span class="twoslash-popup-container"><code class="twoslash-popup-code"><pre class="shiki vitesse-dark" style="background-color:#121212;color:#dbd7caee" tabindex="0"><code><span class="line"><span style="color:#CB7676">function</span><span style="color:#80A665"> transform</span><span style="color:#666666">(</span><span style="color:#BD976A">code</span><span style="color:#666666">: </span><span style="color:#5DA994">any</span><span style="color:#666666">,</span><span style="color:#BD976A"> id</span><span style="color:#666666">: </span><span style="color:#5DA994">any</span><span style="color:#666666">,</span><span style="color:#BD976A"> options</span><span style="color:#666666">: </span><span style="color:#5DA994">any</span><span style="color:#666666">):</span><span style="color:#666666"> &#123;</span></span>
<span class="line"><span style="color:#BD976A">    code</span><span style="color:#666666">: </span><span style="color:#5DA994">string</span><span style="color:#666666">;</span></span>
<span class="line"><span style="color:#666666">&#125;</span><span style="color:#666666"> |</span><span style="color:#CB7676"> undefined</span></span></code></pre></code></span>transform</span></span><span style="color:#666666">(</span><span style="color:#BD976A"><span class="twoslash-hover"><span class="twoslash-popup-container"><code class="twoslash-popup-code"><span style="color:#80A665">code</span><span style="color:#666666">:</span><span style="color:#BD976A"> any</span></code></span>code</span></span><span style="color:#666666">, </span><span style="color:#BD976A"><span class="twoslash-hover"><span class="twoslash-popup-container"><code class="twoslash-popup-code"><span style="color:#80A665">id</span><span style="color:#666666">:</span><span style="color:#BD976A"> any</span></code></span>id</span></span><span style="color:#666666">, </span><span style="color:#BD976A"><span class="twoslash-hover"><span class="twoslash-popup-container"><code class="twoslash-popup-code"><span style="color:#80A665">options</span><span style="color:#666666">:</span><span style="color:#BD976A"> any</span></code></span>options</span></span><span style="color:#666666">) &#123;</span></span>
<span class="line"><span style="color:#4D9375">    if</span><span style="color:#666666"> (</span><span style="color:#BD976A"><span class="twoslash-hover"><span class="twoslash-popup-container"><code class="twoslash-popup-code"><span style="color:#80A665">id</span><span style="color:#666666">:</span><span style="color:#BD976A"> any</span></code></span>id</span></span><span style="color:#666666">.</span><span style="color:#80A665">includes</span><span style="color:#666666">(</span><span style="color:#C98A7D99">"</span><span style="color:#C98A7D">vite/dist/client/client.mjs</span><span style="color:#C98A7D99">"</span><span style="color:#666666">)) &#123;</span></span>
<span class="line"><span style="color:#758575DD">      // How do we import our own modules?</span></span>
<span class="line"><span style="color:#4D9375">      return</span><span style="color:#666666"> &#123; </span><span style="color:#B8A965"><span class="twoslash-hover"><span class="twoslash-popup-container"><code class="twoslash-popup-code"><span style="color:#80A665">code</span><span style="color:#666666">:</span><span style="color:#BD976A"> string</span></code></span>code</span></span><span style="color:#666666">: </span><span style="color:#BD976A"><span class="twoslash-hover"><span class="twoslash-popup-container"><code class="twoslash-popup-code"><span style="color:#80A665">code</span><span style="color:#666666">:</span><span style="color:#BD976A"> any</span></code></span>code</span></span><span style="color:#CB7676"> +</span><span style="color:#C98A7D99"> "</span><span style="color:#C99076">&#92;n</span><span style="color:#C98A7D99">"</span><span style="color:#CB7676"> +</span><span style="color:#C98A7D99"> "</span><span style="color:#C98A7D">import(????)</span><span style="color:#C98A7D99">"</span><span style="color:#666666"> &#125;</span></span>
<span class="line"><span style="color:#666666">    &#125;</span></span>
<span class="line"><span style="color:#666666">  &#125;</span></span>
<span class="line"><span style="color:#666666">&#125;</span></span></code></pre>`;
  let t23;
  let p6;
  let textContent_9 = "I offer a few solutions here:";
  let t25;
  let ol;
  let textContent_10 = `<li>Export the devtools browser code from the plugin package</li> <li>Use a sub-package</li> <li>Magic Module Resolution (preferred)</li>`;
  let t31;
  let h30;
  let textContent_11 = `<a href="#option-1-exporting-the-runtime-code-from-the-package">Option 1: Exporting the runtime code from the package</a>`;
  let t33;
  let p7;
  let textContent_12 = "This one is very straight forward. We just export the entry point of our devtools from our package. This way all we need to do is to inject an import statement to it in the client side js.";
  let t35;
  let html_tag_2;
  let raw2_value = `<pre class="shiki vitesse-dark twoslash lsp" style="background-color:#121212;color:#dbd7caee" tabindex="0"><code><span class="line"><span style="color:#758575DD">// @filename: entry.js</span></span>
<span class="line"><span style="color:#4D9375">export</span><span style="color:#CB7676"> function</span><span style="color:#80A665"> </span><span style="color:#80A665"><span class="twoslash-hover"><span class="twoslash-popup-container"><code class="twoslash-popup-code"><span style="color:#CB7676">function</span><span style="color:#80A665"> bootstrapDevtools</span><span style="color:#666666">():</span><span style="color:#5DA994"> void</span></code></span>bootstrapDevtools</span></span><span style="color:#666666">()</span><span style="color:#666666"> &#123;</span></span>
<span class="line"><span style="color:#758575DD">    // Devtool Browser code here</span></span>
<span class="line"><span style="color:#666666">&#125;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#758575DD">// @filename: plugin.js</span></span>
<span class="line"><span style="color:#CB7676">const </span><span style="color:#BD976A"><span class="twoslash-hover"><span class="twoslash-popup-container"><code class="twoslash-popup-code"><pre class="shiki vitesse-dark" style="background-color:#121212;color:#dbd7caee" tabindex="0"><code><span class="line"><span style="color:#CB7676">const </span><span style="color:#BD976A">plugin</span><span style="color:#666666">: &#123;</span></span>
<span class="line"><span style="color:#80A665">    transform</span><span style="color:#666666">(</span><span style="color:#BD976A">code</span><span style="color:#666666">: </span><span style="color:#5DA994">any</span><span style="color:#666666">, </span><span style="color:#BD976A">id</span><span style="color:#666666">: </span><span style="color:#5DA994">any</span><span style="color:#666666">, </span><span style="color:#BD976A">options</span><span style="color:#666666">: </span><span style="color:#5DA994">any</span><span style="color:#666666">): &#123;</span></span>
<span class="line"><span style="color:#BD976A">        code</span><span style="color:#666666">: </span><span style="color:#5DA994">string</span><span style="color:#666666">;</span></span>
<span class="line"><span style="color:#666666">    &#125; | </span><span style="color:#CB7676">undefined</span><span style="color:#666666">;</span></span>
<span class="line"><span style="color:#666666">&#125;</span></span></code></pre></code></span>plugin</span></span><span style="color:#666666"> =</span><span style="color:#666666"> &#123;</span></span>
<span class="line"><span style="color:#80A665">  </span><span style="color:#80A665"><span class="twoslash-hover"><span class="twoslash-popup-container"><code class="twoslash-popup-code"><pre class="shiki vitesse-dark" style="background-color:#121212;color:#dbd7caee" tabindex="0"><code><span class="line"><span style="color:#CB7676">function</span><span style="color:#80A665"> transform</span><span style="color:#666666">(</span><span style="color:#BD976A">code</span><span style="color:#666666">: </span><span style="color:#5DA994">any</span><span style="color:#666666">,</span><span style="color:#BD976A"> id</span><span style="color:#666666">: </span><span style="color:#5DA994">any</span><span style="color:#666666">,</span><span style="color:#BD976A"> options</span><span style="color:#666666">: </span><span style="color:#5DA994">any</span><span style="color:#666666">):</span><span style="color:#666666"> &#123;</span></span>
<span class="line"><span style="color:#BD976A">    code</span><span style="color:#666666">: </span><span style="color:#5DA994">string</span><span style="color:#666666">;</span></span>
<span class="line"><span style="color:#666666">&#125;</span><span style="color:#666666"> |</span><span style="color:#CB7676"> undefined</span></span></code></pre></code></span>transform</span></span><span style="color:#666666">(</span><span style="color:#BD976A"><span class="twoslash-hover"><span class="twoslash-popup-container"><code class="twoslash-popup-code"><span style="color:#80A665">code</span><span style="color:#666666">:</span><span style="color:#BD976A"> any</span></code></span>code</span></span><span style="color:#666666">, </span><span style="color:#BD976A"><span class="twoslash-hover"><span class="twoslash-popup-container"><code class="twoslash-popup-code"><span style="color:#80A665">id</span><span style="color:#666666">:</span><span style="color:#BD976A"> any</span></code></span>id</span></span><span style="color:#666666">, </span><span style="color:#BD976A"><span class="twoslash-hover"><span class="twoslash-popup-container"><code class="twoslash-popup-code"><span style="color:#80A665">options</span><span style="color:#666666">:</span><span style="color:#BD976A"> any</span></code></span>options</span></span><span style="color:#666666">) &#123;</span></span>
<span class="line"><span style="color:#4D9375">    if</span><span style="color:#666666"> (</span><span style="color:#BD976A"><span class="twoslash-hover"><span class="twoslash-popup-container"><code class="twoslash-popup-code"><span style="color:#80A665">id</span><span style="color:#666666">:</span><span style="color:#BD976A"> any</span></code></span>id</span></span><span style="color:#666666">.</span><span style="color:#80A665">includes</span><span style="color:#666666">(</span><span style="color:#C98A7D99">"</span><span style="color:#C98A7D">vite/dist/client/client.mjs</span><span style="color:#C98A7D99">"</span><span style="color:#666666">)) &#123;</span></span>
<span class="line"><span style="color:#4D9375">      return</span><span style="color:#666666"> &#123; </span><span style="color:#B8A965"><span class="twoslash-hover"><span class="twoslash-popup-container"><code class="twoslash-popup-code"><span style="color:#80A665">code</span><span style="color:#666666">:</span><span style="color:#BD976A"> string</span></code></span>code</span></span><span style="color:#666666">: </span><span style="color:#BD976A"><span class="twoslash-hover"><span class="twoslash-popup-container"><code class="twoslash-popup-code"><span style="color:#80A665">code</span><span style="color:#666666">:</span><span style="color:#BD976A"> any</span></code></span>code</span></span><span style="color:#CB7676"> +</span><span style="color:#C98A7D99"> "</span><span style="color:#C99076">&#92;n</span><span style="color:#C98A7D99">"</span><span style="color:#CB7676"> +</span><span style="color:#C98A7D99"> '</span><span style="color:#C98A7D">import("my-devtools-plugin").then(module => module.bootstrapDevtools())</span><span style="color:#C98A7D99">'</span><span style="color:#666666"> &#125;</span></span>
<span class="line"><span style="color:#666666">    &#125;</span></span>
<span class="line"><span style="color:#666666">  &#125;</span></span>
<span class="line"><span style="color:#666666">&#125;</span></span></code></pre>`;
  let t36;
  let p8;
  let textContent_13 = "This works and is very simple, but it has some downsides.";
  let t38;
  let ul0;
  let textContent_14 = `<li>It clutters up the exports of our package.</li> <li>It mixes browser code with plugin code.</li>`;
  let t42;
  let blockquote0;
  let textContent_15 = `<p>It’s probably possible to hide the export from the IDE by modifying the package’s type definitions, but that’s more work than the other solutions.</p>`;
  let t44;
  let h31;
  let textContent_16 = `<a href="#option-2-using-a-sub-package">Option 2: Using a sub-package</a>`;
  let t46;
  let p10;
  let textContent_17 = `Sub packages are a feature of npm that allow you to have multiple entry points in a single package. For example, the <code>svelte</code> package has a sub-package <code>svelte/stores</code> which contains store implementations.`;
  let t52;
  let p11;
  let textContent_18 = "In this approach, we still export the runtime code from our package, but we give it it’s own entry point. This way we don’t clutter up the exports and we don’t mix concerns.";
  let t54;
  let p12;
  let textContent_19 = "Here is the setup:";
  let t56;
  let html_tag_3;
  let raw3_value = `<pre class="shiki vitesse-dark" style="background-color:#121212;color:#dbd7caee" tabindex="0"><code><span class="line"><span>src</span></span>
<span class="line"><span>|- plugin.js</span></span>
<span class="line"><span>|- devtools</span></span>
<span class="line"><span>   |- entry.js</span></span></code></pre>`;
  let t57;
  let p13;
  let textContent_20 = `Then, in the <code>package.json</code>, add an exports field with two entries: one for the plugin and one for the devtools.`;
  let t61;
  let html_tag_4;
  let raw4_value = `<pre class="shiki vitesse-dark" style="background-color:#121212;color:#dbd7caee" tabindex="0"><code><span class="line"><span style="color:#666666">&#123;</span></span>
<span class="line"><span style="color:#C98A7D99">  "</span><span style="color:#B8A965">name</span><span style="color:#C98A7D99">"</span><span style="color:#666666">:</span><span style="color:#C98A7D99"> "</span><span style="color:#C98A7D">my-devtools-plugin</span><span style="color:#C98A7D99">"</span><span style="color:#666666">,</span></span>
<span class="line"><span style="color:#C98A7D99">  "</span><span style="color:#B8A965">exports</span><span style="color:#C98A7D99">"</span><span style="color:#666666">:</span><span style="color:#666666"> &#123;</span></span>
<span class="line"><span style="color:#C98A7D99">    "</span><span style="color:#B8A965">.</span><span style="color:#C98A7D99">"</span><span style="color:#666666">:</span><span style="color:#666666"> &#123;</span></span>
<span class="line"><span style="color:#C98A7D99">        "</span><span style="color:#B8A965">import</span><span style="color:#C98A7D99">"</span><span style="color:#666666">:</span><span style="color:#C98A7D99"> "</span><span style="color:#C98A7D">./plugin.js</span><span style="color:#C98A7D99">"</span><span style="color:#666666">,</span></span>
<span class="line"><span style="color:#C98A7D99">        "</span><span style="color:#B8A965">types</span><span style="color:#C98A7D99">"</span><span style="color:#666666">:</span><span style="color:#C98A7D99"> "</span><span style="color:#C98A7D">./plugin.d.ts</span><span style="color:#C98A7D99">"</span></span>
<span class="line"><span style="color:#666666">    &#125;,</span></span>
<span class="line"><span style="color:#C98A7D99">    "</span><span style="color:#B8A965">./internal</span><span style="color:#C98A7D99">"</span><span style="color:#666666">:</span><span style="color:#666666"> &#123;</span></span>
<span class="line"><span style="color:#C98A7D99">        "</span><span style="color:#B8A965">import</span><span style="color:#C98A7D99">"</span><span style="color:#666666">:</span><span style="color:#C98A7D99"> "</span><span style="color:#C98A7D">./devtools/entry.js</span><span style="color:#C98A7D99">"</span></span>
<span class="line"><span style="color:#666666">    &#125;</span></span>
<span class="line"><span style="color:#666666">  &#125;</span></span>
<span class="line"><span style="color:#666666">&#125;</span></span></code></pre>`;
  let t62;
  let p14;
  let textContent_21 = `You can then inject an import statement to <code>my-devtools-plugin/internal</code> in the client side js.`;
  let t66;
  let html_tag_5;
  let raw5_value = `<pre class="shiki vitesse-dark twoslash lsp" style="background-color:#121212;color:#dbd7caee" tabindex="0"><code><span class="line"><span style="color:#CB7676">const </span><span style="color:#BD976A"><span class="twoslash-hover"><span class="twoslash-popup-container"><code class="twoslash-popup-code"><pre class="shiki vitesse-dark" style="background-color:#121212;color:#dbd7caee" tabindex="0"><code><span class="line"><span style="color:#CB7676">const </span><span style="color:#BD976A">plugin</span><span style="color:#666666">: &#123;</span></span>
<span class="line"><span style="color:#80A665">    transform</span><span style="color:#666666">(</span><span style="color:#BD976A">code</span><span style="color:#666666">: </span><span style="color:#5DA994">any</span><span style="color:#666666">, </span><span style="color:#BD976A">id</span><span style="color:#666666">: </span><span style="color:#5DA994">any</span><span style="color:#666666">, </span><span style="color:#BD976A">options</span><span style="color:#666666">: </span><span style="color:#5DA994">any</span><span style="color:#666666">): &#123;</span></span>
<span class="line"><span style="color:#BD976A">        code</span><span style="color:#666666">: </span><span style="color:#5DA994">string</span><span style="color:#666666">;</span></span>
<span class="line"><span style="color:#666666">    &#125; | </span><span style="color:#CB7676">undefined</span><span style="color:#666666">;</span></span>
<span class="line"><span style="color:#666666">&#125;</span></span></code></pre></code></span>plugin</span></span><span style="color:#666666"> =</span><span style="color:#666666"> &#123;</span></span>
<span class="line"><span style="color:#80A665">  </span><span style="color:#80A665"><span class="twoslash-hover"><span class="twoslash-popup-container"><code class="twoslash-popup-code"><pre class="shiki vitesse-dark" style="background-color:#121212;color:#dbd7caee" tabindex="0"><code><span class="line"><span style="color:#CB7676">function</span><span style="color:#80A665"> transform</span><span style="color:#666666">(</span><span style="color:#BD976A">code</span><span style="color:#666666">: </span><span style="color:#5DA994">any</span><span style="color:#666666">,</span><span style="color:#BD976A"> id</span><span style="color:#666666">: </span><span style="color:#5DA994">any</span><span style="color:#666666">,</span><span style="color:#BD976A"> options</span><span style="color:#666666">: </span><span style="color:#5DA994">any</span><span style="color:#666666">):</span><span style="color:#666666"> &#123;</span></span>
<span class="line"><span style="color:#BD976A">    code</span><span style="color:#666666">: </span><span style="color:#5DA994">string</span><span style="color:#666666">;</span></span>
<span class="line"><span style="color:#666666">&#125;</span><span style="color:#666666"> |</span><span style="color:#CB7676"> undefined</span></span></code></pre></code></span>transform</span></span><span style="color:#666666">(</span><span style="color:#BD976A"><span class="twoslash-hover"><span class="twoslash-popup-container"><code class="twoslash-popup-code"><span style="color:#80A665">code</span><span style="color:#666666">:</span><span style="color:#BD976A"> any</span></code></span>code</span></span><span style="color:#666666">, </span><span style="color:#BD976A"><span class="twoslash-hover"><span class="twoslash-popup-container"><code class="twoslash-popup-code"><span style="color:#80A665">id</span><span style="color:#666666">:</span><span style="color:#BD976A"> any</span></code></span>id</span></span><span style="color:#666666">, </span><span style="color:#BD976A"><span class="twoslash-hover"><span class="twoslash-popup-container"><code class="twoslash-popup-code"><span style="color:#80A665">options</span><span style="color:#666666">:</span><span style="color:#BD976A"> any</span></code></span>options</span></span><span style="color:#666666">) &#123;</span></span>
<span class="line"><span style="color:#4D9375">    if</span><span style="color:#666666"> (</span><span style="color:#BD976A"><span class="twoslash-hover"><span class="twoslash-popup-container"><code class="twoslash-popup-code"><span style="color:#80A665">id</span><span style="color:#666666">:</span><span style="color:#BD976A"> any</span></code></span>id</span></span><span style="color:#666666">.</span><span style="color:#80A665">includes</span><span style="color:#666666">(</span><span style="color:#C98A7D99">"</span><span style="color:#C98A7D">vite/dist/client/client.mjs</span><span style="color:#C98A7D99">"</span><span style="color:#666666">)) &#123;</span></span>
<span class="line"><span style="color:#4D9375">      return</span><span style="color:#666666"> &#123; </span><span style="color:#B8A965"><span class="twoslash-hover"><span class="twoslash-popup-container"><code class="twoslash-popup-code"><span style="color:#80A665">code</span><span style="color:#666666">:</span><span style="color:#BD976A"> string</span></code></span>code</span></span><span style="color:#666666">: </span><span style="color:#BD976A"><span class="twoslash-hover"><span class="twoslash-popup-container"><code class="twoslash-popup-code"><span style="color:#80A665">code</span><span style="color:#666666">:</span><span style="color:#BD976A"> any</span></code></span>code</span></span><span style="color:#CB7676"> +</span><span style="color:#C98A7D99"> "</span><span style="color:#C99076">&#92;n</span><span style="color:#C98A7D99">"</span><span style="color:#CB7676"> +</span><span style="color:#C98A7D99"> '</span><span style="color:#C98A7D">import("my-devtools-plugin/internal").then(module => module.bootstrap())</span><span style="color:#C98A7D99">'</span><span style="color:#666666"> &#125;</span></span>
<span class="line"><span style="color:#666666">    &#125;</span></span>
<span class="line"><span style="color:#666666">  &#125;</span></span>
<span class="line"><span style="color:#666666">&#125;</span></span></code></pre>`;
  let t67;
  let p15;
  let textContent_22 = `This eliminates the code-mixing problem, but does not quite eliminated the import cluttering.
While the <code>my-devtools-plugin</code> package does not have private exports, IDEs might still suggest <code>my-devtools-plugin/internal</code> as an import option. Developers are unlikely to use it, but it’s still a bit annoying.`;
  let t73;
  let blockquote1;
  let textContent_23 = `<p>If you generate your type definitions using <a href="https://www.github.com/Rich-Harris/dts-buddy" rel="noopener noreferrer" target="_blank"><code>dts-buddy</code></a> instead of <code>tsc</code>, you can sidestep this problem by not generating type declarations for the <code>internal</code> sub-package. Otherwise use Option 3.</p>`;
  let t81;
  let h32;
  let textContent_24 = `<a href="#option-3-magic-module-resolution-preferred">Option 3: Magic Module Resolution (preferred)</a>`;
  let t83;
  let p17;
  let textContent_25 = `If you <em>really</em> don’t want to clutter your exports, this is the best way to go, but it’s a bit of work to set up.`;
  let t87;
  let p18;
  let textContent_26 = "The idea is to define a magic module-id that our plugin resolves to the absolute path of our entry point.";
  let t89;
  let p19;
  let textContent_27 = `(Eg: <code>import(&quot;my-package:devtools&quot;)</code> resolves to <code>import(&quot;/home/user/project/node_modules/my-package/devtools/entry.js&quot;)</code> or whatever)`;
  let t95;
  let p20;
  let textContent_28 = `But how can we know the absolute path of our entry point? The trick is that we know the relative path to the entry point <em>from</em> our plugin file.`;
  let t99;
  let p21;
  let textContent_29 = `We can get the absolute path of our plugin’s file using <code>import.meta.url</code>. We can then combine that with the relative path to our entry point to get the absolute path to our entry point.`;
  let t103;
  let html_tag_6;
  let raw6_value = `<pre class="shiki vitesse-dark" style="background-color:#121212;color:#dbd7caee" tabindex="0"><code><span class="line"><span>src</span></span>
<span class="line"><span>|- plugin.js</span></span>
<span class="line"><span>|- devtools</span></span>
<span class="line"><span>   |- entry.js</span></span></code></pre>`;
  let t104;
  let html_tag_7;
  let raw7_value = `<pre class="shiki vitesse-dark twoslash lsp" style="background-color:#121212;color:#dbd7caee" tabindex="0"><code><span class="line"><span style="color:#4D9375">import</span><span style="color:#666666"> &#123;</span><span style="color:#BD976A"> </span><span style="color:#BD976A"><span class="twoslash-hover"><span class="twoslash-popup-container"><code class="twoslash-popup-code"><span style="color:#CB7676">function</span><span style="color:#666666"> (</span><span style="color:#BD976A">method</span><span style="color:#666666">)</span><span style="color:#80A665"> dirname</span><span style="color:#666666">(</span><span style="color:#BD976A">path</span><span style="color:#666666">: </span><span style="color:#5DA994">string</span><span style="color:#666666">):</span><span style="color:#5DA994"> string</span></code><div class="twoslash-popup-docs">Return the directory name of a path. Similar to the Unix dirname command.</div><div class="twoslash-popup-docs twoslash-popup-docs-tags"><span class="twoslash-popup-docs-tag"><span class="twoslash-popup-docs-tag-name">@param</span><span class="twoslash-popup-docs-tag-value">path the path to evaluate.</span></span><span class="twoslash-popup-docs-tag"><span class="twoslash-popup-docs-tag-name">@throws</span><span class="twoslash-popup-docs-tag-value">&#123;TypeError&#125; if &#96;path&#96; is not a string.</span></span></div></span>dirname</span></span><span style="color:#666666"> &#125;</span><span style="color:#4D9375"> from</span><span style="color:#C98A7D99"> "</span><span style="color:#C98A7D">node:path</span><span style="color:#C98A7D99">"</span></span>
<span class="line"><span style="color:#4D9375">import</span><span style="color:#666666"> &#123;</span><span style="color:#BD976A"> </span><span style="color:#BD976A"><span class="twoslash-hover"><span class="twoslash-popup-container"><code class="twoslash-popup-code"><span style="color:#CB7676">function</span><span style="color:#80A665"> fileURLToPath</span><span style="color:#666666">(</span><span style="color:#BD976A">url</span><span style="color:#666666">: </span><span style="color:#5DA994">string</span><span style="color:#666666"> | </span><span style="color:#5DA994">URL</span><span style="color:#666666">,</span><span style="color:#BD976A"> options</span><span style="color:#CB7676">?</span><span style="color:#666666">: </span><span style="color:#5DA994">FileUrlToPathOptions</span><span style="color:#666666">):</span><span style="color:#5DA994"> string</span></code><div class="twoslash-popup-docs">This function ensures the correct decodings of percent-encoded characters as
well as ensuring a cross-platform valid absolute path string.

&#96;&#96;&#96;js
import &#123; fileURLToPath &#125; from 'node:url';

const __filename = fileURLToPath(import.meta.url);

new URL('file:///C:/path/').pathname;      // Incorrect: /C:/path/
fileURLToPath('file:///C:/path/');         // Correct:   C:path (Windows)

new URL('file://nas/foo.txt').pathname;    // Incorrect: /foo.txt
fileURLToPath('file://nas/foo.txt');       // Correct:   &#92;nas\foo.txt (Windows)

new URL('file:///你好.txt').pathname;      // Incorrect: /%E4%BD%A0%E5%A5%BD.txt
fileURLToPath('file:///你好.txt');         // Correct:   /你好.txt (POSIX)

new URL('file:///hello world').pathname;   // Incorrect: /hello%20world
fileURLToPath('file:///hello world');      // Correct:   /hello world (POSIX)
&#96;&#96;&#96;</div><div class="twoslash-popup-docs twoslash-popup-docs-tags"><span class="twoslash-popup-docs-tag"><span class="twoslash-popup-docs-tag-name">@since</span><span class="twoslash-popup-docs-tag-value">v10.12.0</span></span><span class="twoslash-popup-docs-tag"><span class="twoslash-popup-docs-tag-name">@param</span><span class="twoslash-popup-docs-tag-value">url The file URL string or URL object to convert to a path.</span></span><span class="twoslash-popup-docs-tag"><span class="twoslash-popup-docs-tag-name">@return</span><span class="twoslash-popup-docs-tag-value">The fully-resolved platform-specific Node.js file path.</span></span></div></span>fileURLToPath</span></span><span style="color:#666666"> &#125;</span><span style="color:#4D9375"> from</span><span style="color:#C98A7D99"> "</span><span style="color:#C98A7D">node:url</span><span style="color:#C98A7D99">"</span></span>
<span class="line"><span style="color:#4D9375">import</span><span style="color:#666666"> &#123;</span><span style="color:#BD976A"> </span><span style="color:#BD976A"><span class="twoslash-hover"><span class="twoslash-popup-container"><code class="twoslash-popup-code"><span style="color:#CB7676">function</span><span style="color:#80A665"> normalizePath</span><span style="color:#666666">(</span><span style="color:#BD976A">id</span><span style="color:#666666">: </span><span style="color:#5DA994">string</span><span style="color:#666666">):</span><span style="color:#5DA994"> string</span></code></span>normalizePath</span></span><span style="color:#666666"> &#125;</span><span style="color:#4D9375"> from</span><span style="color:#C98A7D99"> "</span><span style="color:#C98A7D">vite</span><span style="color:#C98A7D99">"</span></span>
<span class="line"></span>
<span class="line"><span style="color:#CB7676">function</span><span style="color:#80A665"> </span><span style="color:#80A665"><span class="twoslash-hover"><span class="twoslash-popup-container"><code class="twoslash-popup-code"><span style="color:#CB7676">function</span><span style="color:#80A665"> getDevtoolsEntryPath</span><span style="color:#666666">():</span><span style="color:#5DA994"> string</span></code></span>getDevtoolsEntryPath</span></span><span style="color:#666666">()</span><span style="color:#666666"> &#123;</span></span>
<span class="line"><span style="color:#CB7676">    const </span><span style="color:#BD976A"><span class="twoslash-hover"><span class="twoslash-popup-container"><code class="twoslash-popup-code"><span style="color:#CB7676">const </span><span style="color:#BD976A">srcFolderPath</span><span style="color:#666666">: </span><span style="color:#5DA994">string</span></code></span>srcFolderPath</span></span><span style="color:#666666"> =</span><span style="color:#80A665"> </span><span style="color:#80A665"><span class="twoslash-hover"><span class="twoslash-popup-container"><code class="twoslash-popup-code"><span style="color:#CB7676">function</span><span style="color:#80A665"> normalizePath</span><span style="color:#666666">(</span><span style="color:#BD976A">id</span><span style="color:#666666">: </span><span style="color:#5DA994">string</span><span style="color:#666666">):</span><span style="color:#5DA994"> string</span></code></span>normalizePath</span></span><span style="color:#666666">(</span><span style="color:#80A665"><span class="twoslash-hover"><span class="twoslash-popup-container"><code class="twoslash-popup-code"><span style="color:#CB7676">function</span><span style="color:#80A665"> dirname</span><span style="color:#666666">(</span><span style="color:#BD976A">path</span><span style="color:#666666">: </span><span style="color:#5DA994">string</span><span style="color:#666666">):</span><span style="color:#5DA994"> string</span></code><div class="twoslash-popup-docs">Return the directory name of a path. Similar to the Unix dirname command.</div><div class="twoslash-popup-docs twoslash-popup-docs-tags"><span class="twoslash-popup-docs-tag"><span class="twoslash-popup-docs-tag-name">@param</span><span class="twoslash-popup-docs-tag-value">path the path to evaluate.</span></span><span class="twoslash-popup-docs-tag"><span class="twoslash-popup-docs-tag-name">@throws</span><span class="twoslash-popup-docs-tag-value">&#123;TypeError&#125; if &#96;path&#96; is not a string.</span></span></div></span>dirname</span></span><span style="color:#666666">(</span><span style="color:#80A665"><span class="twoslash-hover"><span class="twoslash-popup-container"><code class="twoslash-popup-code"><span style="color:#CB7676">function</span><span style="color:#80A665"> fileURLToPath</span><span style="color:#666666">(</span><span style="color:#BD976A">url</span><span style="color:#666666">: </span><span style="color:#5DA994">string</span><span style="color:#666666"> | </span><span style="color:#5DA994">URL</span><span style="color:#666666">,</span><span style="color:#BD976A"> options</span><span style="color:#CB7676">?</span><span style="color:#666666">: </span><span style="color:#5DA994">FileUrlToPathOptions</span><span style="color:#666666"> | </span><span style="color:#CB7676">undefined</span><span style="color:#666666">):</span><span style="color:#5DA994"> string</span></code><div class="twoslash-popup-docs">This function ensures the correct decodings of percent-encoded characters as
well as ensuring a cross-platform valid absolute path string.

&#96;&#96;&#96;js
import &#123; fileURLToPath &#125; from 'node:url';

const __filename = fileURLToPath(import.meta.url);

new URL('file:///C:/path/').pathname;      // Incorrect: /C:/path/
fileURLToPath('file:///C:/path/');         // Correct:   C:path (Windows)

new URL('file://nas/foo.txt').pathname;    // Incorrect: /foo.txt
fileURLToPath('file://nas/foo.txt');       // Correct:   &#92;nas\foo.txt (Windows)

new URL('file:///你好.txt').pathname;      // Incorrect: /%E4%BD%A0%E5%A5%BD.txt
fileURLToPath('file:///你好.txt');         // Correct:   /你好.txt (POSIX)

new URL('file:///hello world').pathname;   // Incorrect: /hello%20world
fileURLToPath('file:///hello world');      // Correct:   /hello world (POSIX)
&#96;&#96;&#96;</div><div class="twoslash-popup-docs twoslash-popup-docs-tags"><span class="twoslash-popup-docs-tag"><span class="twoslash-popup-docs-tag-name">@since</span><span class="twoslash-popup-docs-tag-value">v10.12.0</span></span><span class="twoslash-popup-docs-tag"><span class="twoslash-popup-docs-tag-name">@param</span><span class="twoslash-popup-docs-tag-value">url The file URL string or URL object to convert to a path.</span></span><span class="twoslash-popup-docs-tag"><span class="twoslash-popup-docs-tag-name">@return</span><span class="twoslash-popup-docs-tag-value">The fully-resolved platform-specific Node.js file path.</span></span></div></span>fileURLToPath</span></span><span style="color:#666666">(</span><span style="color:#4D9375">import</span><span style="color:#666666">.</span><span style="color:#B8A965">meta</span><span style="color:#666666">.</span><span style="color:#BD976A"><span class="twoslash-hover"><span class="twoslash-popup-container"><code class="twoslash-popup-code"><span style="color:#BD976A">ImportMeta</span><span style="color:#666666">.</span><span style="color:#BD976A">url</span><span style="color:#DBD7CAEE">: </span><span style="color:#BD976A">string</span></code><div class="twoslash-popup-docs">The absolute &#96;file:&#96; URL of the module.</div></span>url</span></span><span style="color:#666666">)))</span></span>
<span class="line"><span style="color:#4D9375">    return</span><span style="color:#BD976A"> </span><span style="color:#BD976A"><span class="twoslash-hover"><span class="twoslash-popup-container"><code class="twoslash-popup-code"><span style="color:#CB7676">const </span><span style="color:#BD976A">srcFolderPath</span><span style="color:#666666">: </span><span style="color:#5DA994">string</span></code></span>srcFolderPath</span></span><span style="color:#CB7676"> +</span><span style="color:#C98A7D99"> "</span><span style="color:#C98A7D">/devtools/entry.js</span><span style="color:#C98A7D99">"</span></span>
<span class="line"><span style="color:#666666">&#125;</span></span></code></pre>`;
  let t105;
  let p22;
  let textContent_30 = "Using this, we can then resolve our magic module id to the absolute path of our entry point.";
  let t107;
  let html_tag_8;
  let raw8_value = `<pre class="shiki vitesse-dark twoslash lsp" style="background-color:#121212;color:#dbd7caee" tabindex="0"><code><span class="line"><span style="color:#CB7676">const </span><span style="color:#BD976A"><span class="twoslash-hover"><span class="twoslash-popup-container"><code class="twoslash-popup-code"><span style="color:#CB7676">const </span><span style="color:#BD976A">MAGIC_MODULE_ID</span><span style="color:#666666">: </span><span style="color:#C98A7D99">"</span><span style="color:#C98A7D">my-package:devtools</span><span style="color:#C98A7D99">"</span></code></span>MAGIC_MODULE_ID</span></span><span style="color:#666666"> =</span><span style="color:#C98A7D99"> "</span><span style="color:#C98A7D">my-package:devtools</span><span style="color:#C98A7D99">"</span></span>
<span class="line"></span>
<span class="line"><span style="color:#4D9375">export</span><span style="color:#CB7676"> const </span><span style="color:#80A665"><span class="twoslash-hover"><span class="twoslash-popup-container"><code class="twoslash-popup-code"><pre class="shiki vitesse-dark" style="background-color:#121212;color:#dbd7caee" tabindex="0"><code><span class="line"><span style="color:#CB7676">const </span><span style="color:#80A665">devtoolsPlugin</span><span style="color:#666666">: () => &#123;</span></span>
<span class="line"><span style="color:#BD976A">    name</span><span style="color:#666666">: </span><span style="color:#5DA994">string</span><span style="color:#666666">;</span></span>
<span class="line"><span style="color:#BD976A">    enforce</span><span style="color:#666666">: </span><span style="color:#5DA994">string</span><span style="color:#666666">;</span></span>
<span class="line"><span style="color:#BD976A">    apply</span><span style="color:#666666">: </span><span style="color:#5DA994">string</span><span style="color:#666666">;</span></span>
<span class="line"><span style="color:#80A665">    resolveId</span><span style="color:#666666">(</span><span style="color:#BD976A">id</span><span style="color:#666666">: </span><span style="color:#5DA994">any</span><span style="color:#666666">): </span><span style="color:#5DA994">any</span><span style="color:#666666">;</span></span>
<span class="line"><span style="color:#80A665">    transform</span><span style="color:#666666">(</span><span style="color:#BD976A">code</span><span style="color:#666666">: </span><span style="color:#5DA994">any</span><span style="color:#666666">, </span><span style="color:#BD976A">id</span><span style="color:#666666">: </span><span style="color:#5DA994">any</span><span style="color:#666666">, </span><span style="color:#BD976A">options</span><span style="color:#666666">: </span><span style="color:#5DA994">any</span><span style="color:#666666">): &#123;</span></span>
<span class="line"><span style="color:#BD976A">        code</span><span style="color:#666666">: </span><span style="color:#5DA994">string</span><span style="color:#666666">;</span></span>
<span class="line"><span style="color:#666666">    &#125; | </span><span style="color:#CB7676">undefined</span><span style="color:#666666">;</span></span>
<span class="line"><span style="color:#666666">&#125;</span></span></code></pre></code></span>devtoolsPlugin</span></span><span style="color:#666666"> =</span><span style="color:#666666"> ()</span><span style="color:#666666"> =></span><span style="color:#666666"> (&#123;</span></span>
<span class="line"><span style="color:#B8A965">    </span><span style="color:#B8A965"><span class="twoslash-hover"><span class="twoslash-popup-container"><code class="twoslash-popup-code"><span style="color:#80A665">name</span><span style="color:#666666">:</span><span style="color:#BD976A"> string</span></code></span>name</span></span><span style="color:#666666">: </span><span style="color:#C98A7D99">"</span><span style="color:#C98A7D">devtools</span><span style="color:#C98A7D99">"</span><span style="color:#666666">,</span></span>
<span class="line"><span style="color:#B8A965">    </span><span style="color:#B8A965"><span class="twoslash-hover"><span class="twoslash-popup-container"><code class="twoslash-popup-code"><span style="color:#80A665">enforce</span><span style="color:#666666">:</span><span style="color:#BD976A"> string</span></code></span>enforce</span></span><span style="color:#666666">: </span><span style="color:#C98A7D99">"</span><span style="color:#C98A7D">pre</span><span style="color:#C98A7D99">"</span><span style="color:#666666">,</span></span>
<span class="line"><span style="color:#B8A965">    </span><span style="color:#B8A965"><span class="twoslash-hover"><span class="twoslash-popup-container"><code class="twoslash-popup-code"><span style="color:#80A665">apply</span><span style="color:#666666">:</span><span style="color:#BD976A"> string</span></code></span>apply</span></span><span style="color:#666666">: </span><span style="color:#C98A7D99">"</span><span style="color:#C98A7D">serve</span><span style="color:#C98A7D99">"</span><span style="color:#666666">,</span></span>
<span class="line"><span style="color:#80A665">    </span><span style="color:#80A665"><span class="twoslash-hover"><span class="twoslash-popup-container"><code class="twoslash-popup-code"><span style="color:#CB7676">function</span><span style="color:#80A665"> resolveId</span><span style="color:#666666">(</span><span style="color:#BD976A">id</span><span style="color:#666666">: </span><span style="color:#5DA994">any</span><span style="color:#666666">):</span><span style="color:#5DA994"> any</span></code></span>resolveId</span></span><span style="color:#666666">(</span><span style="color:#BD976A"><span class="twoslash-hover"><span class="twoslash-popup-container"><code class="twoslash-popup-code"><span style="color:#80A665">id</span><span style="color:#666666">:</span><span style="color:#BD976A"> any</span></code></span>id</span></span><span style="color:#666666">) &#123;</span></span>
<span class="line"><span style="color:#4D9375">        if</span><span style="color:#666666"> (</span><span style="color:#BD976A"><span class="twoslash-hover"><span class="twoslash-popup-container"><code class="twoslash-popup-code"><span style="color:#80A665">id</span><span style="color:#666666">:</span><span style="color:#BD976A"> any</span></code></span>id</span></span><span style="color:#CB7676"> ===</span><span style="color:#BD976A"> </span><span style="color:#BD976A"><span class="twoslash-hover"><span class="twoslash-popup-container"><code class="twoslash-popup-code"><span style="color:#CB7676">const </span><span style="color:#BD976A">MAGIC_MODULE_ID</span><span style="color:#666666">: </span><span style="color:#C98A7D99">"</span><span style="color:#C98A7D">my-package:devtools</span><span style="color:#C98A7D99">"</span></code></span>MAGIC_MODULE_ID</span></span><span style="color:#666666">) &#123;</span></span>
<span class="line"><span style="color:#4D9375">            return</span><span style="color:#80A665"> </span><span style="color:#80A665">getDevtoolsEntryPath</span><span style="color:#666666">()</span></span>
<span class="line"><span style="color:#666666">        &#125;</span></span>
<span class="line"><span style="color:#666666">    &#125;, </span></span>
<span class="line"><span style="color:#80A665">    </span><span style="color:#80A665"><span class="twoslash-hover"><span class="twoslash-popup-container"><code class="twoslash-popup-code"><pre class="shiki vitesse-dark" style="background-color:#121212;color:#dbd7caee" tabindex="0"><code><span class="line"><span style="color:#CB7676">function</span><span style="color:#80A665"> transform</span><span style="color:#666666">(</span><span style="color:#BD976A">code</span><span style="color:#666666">: </span><span style="color:#5DA994">any</span><span style="color:#666666">,</span><span style="color:#BD976A"> id</span><span style="color:#666666">: </span><span style="color:#5DA994">any</span><span style="color:#666666">,</span><span style="color:#BD976A"> options</span><span style="color:#666666">: </span><span style="color:#5DA994">any</span><span style="color:#666666">):</span><span style="color:#666666"> &#123;</span></span>
<span class="line"><span style="color:#BD976A">    code</span><span style="color:#666666">: </span><span style="color:#5DA994">string</span><span style="color:#666666">;</span></span>
<span class="line"><span style="color:#666666">&#125;</span><span style="color:#666666"> |</span><span style="color:#CB7676"> undefined</span></span></code></pre></code></span>transform</span></span><span style="color:#666666">(</span><span style="color:#BD976A"><span class="twoslash-hover"><span class="twoslash-popup-container"><code class="twoslash-popup-code"><span style="color:#80A665">code</span><span style="color:#666666">:</span><span style="color:#BD976A"> any</span></code></span>code</span></span><span style="color:#666666">, </span><span style="color:#BD976A"><span class="twoslash-hover"><span class="twoslash-popup-container"><code class="twoslash-popup-code"><span style="color:#80A665">id</span><span style="color:#666666">:</span><span style="color:#BD976A"> any</span></code></span>id</span></span><span style="color:#666666">, </span><span style="color:#BD976A"><span class="twoslash-hover"><span class="twoslash-popup-container"><code class="twoslash-popup-code"><span style="color:#80A665">options</span><span style="color:#666666">:</span><span style="color:#BD976A"> any</span></code></span>options</span></span><span style="color:#666666">) &#123;</span></span>
<span class="line"><span style="color:#4D9375">        if</span><span style="color:#666666"> (</span><span style="color:#BD976A"><span class="twoslash-hover"><span class="twoslash-popup-container"><code class="twoslash-popup-code"><span style="color:#80A665">id</span><span style="color:#666666">:</span><span style="color:#BD976A"> any</span></code></span>id</span></span><span style="color:#666666">.</span><span style="color:#80A665">includes</span><span style="color:#666666">(</span><span style="color:#C98A7D99">"</span><span style="color:#C98A7D">vite/dist/client/client.mjs</span><span style="color:#C98A7D99">"</span><span style="color:#666666">)) &#123;</span></span>
<span class="line"><span style="color:#4D9375">            return</span><span style="color:#666666"> &#123; </span><span style="color:#B8A965"><span class="twoslash-hover"><span class="twoslash-popup-container"><code class="twoslash-popup-code"><span style="color:#80A665">code</span><span style="color:#666666">:</span><span style="color:#BD976A"> string</span></code></span>code</span></span><span style="color:#666666">: </span><span style="color:#BD976A"><span class="twoslash-hover"><span class="twoslash-popup-container"><code class="twoslash-popup-code"><span style="color:#80A665">code</span><span style="color:#666666">:</span><span style="color:#BD976A"> any</span></code></span>code</span></span><span style="color:#CB7676"> +</span><span style="color:#C98A7D99"> "</span><span style="color:#C99076">&#92;n</span><span style="color:#C98A7D99">"</span><span style="color:#CB7676"> +</span><span style="color:#C98A7D99"> &#96;</span><span style="color:#C98A7D">import("</span><span style="color:#666666">$&#123;</span><span style="color:#C98A7D"><span class="twoslash-hover"><span class="twoslash-popup-container"><code class="twoslash-popup-code"><span style="color:#CB7676">const </span><span style="color:#BD976A">MAGIC_MODULE_ID</span><span style="color:#666666">: </span><span style="color:#C98A7D99">"</span><span style="color:#C98A7D">my-package:devtools</span><span style="color:#C98A7D99">"</span></code></span>MAGIC_MODULE_ID</span></span><span style="color:#666666">&#125;</span><span style="color:#C98A7D">").then(module => module.bootstrapDevtools())</span><span style="color:#C98A7D99">&#96;</span><span style="color:#666666"> &#125;</span></span>
<span class="line"><span style="color:#666666">        &#125;</span></span>
<span class="line"><span style="color:#666666">    &#125;</span></span>
<span class="line"><span style="color:#666666">&#125;)</span></span></code></pre>`;
  let t108;
  let p23;
  let textContent_31 = "If you’re going to use this, make sure that the relative path to your entry point is correct. Compiling or Bundling your plugin code may change the relative path.";
  let t110;
  let h4;
  let textContent_32 = `<a href="#addendum-dealing-with-fsallow">Addendum: Dealing with <code>fs.allow</code></a>`;
  let t113;
  let p24;
  let textContent_33 = `<code>vite</code> has a configuration option called <code>fs.allow</code>. It decides which paths vite’s file-imports are allowed to read. This prevents path-traversal attacks. If your user’s use this and haven’t allowed paths inside your package folder the above code will break. You could just instruct them to allow these paths, but that’s not very user friendly.`;
  let t118;
  let p25;
  let textContent_34 = `We can sidestep this by loading the code ourselves using the <code>load</code> hook and <code>fs.readFile</code>. We need to do this for all devtool files, not just the entry point.`;
  let t124;
  let p26;
  let textContent_35 = `To do this, we will not use a <em>magic id</em>, but a <em>magic prefix</em>. We will check if an import id starts with the prefix, and if it does, replace the prefix with the path to our <em>src/devtools/</em> folder and load the files ourselves.`;
  let t132;
  let html_tag_9;
  let raw9_value = `<pre class="shiki vitesse-dark" style="background-color:#121212;color:#dbd7caee" tabindex="0"><code><span class="line"><span>src</span></span>
<span class="line"><span>|- plugin.js</span></span>
<span class="line"><span>|- devtools</span></span>
<span class="line"><span>   |- entry.js</span></span>
<span class="line"><span>   |- imported-by-entry.js</span></span></code></pre>`;
  let t133;
  let p27;
  let textContent_36 = "Eg:";
  let t135;
  let ul1;
  let textContent_37 = `<li>“my-package:devtools/entry.js” -&gt; “/home/user/project/node_modules/my-package/devtools/entry.js”</li> <li>“my-package:devtools/imported-by-entry.js” -&gt; “/home/user/project/node_modules/my-package/devtools/imported-by-entry.js</li>`;
  let t139;
  let html_tag_10;
  let raw10_value = `<pre class="shiki vitesse-dark twoslash lsp" style="background-color:#121212;color:#dbd7caee" tabindex="0"><code><span class="line"><span style="color:#758575DD">// @filename: plugin.js </span></span>
<span class="line"><span style="color:#CB7676">const </span><span style="color:#BD976A"><span class="twoslash-hover"><span class="twoslash-popup-container"><code class="twoslash-popup-code"><span style="color:#CB7676">const </span><span style="color:#BD976A">srcFolderPath</span><span style="color:#666666">: </span><span style="color:#5DA994">any</span></code></span>srcFolderPath</span></span><span style="color:#666666"> =</span><span style="color:#80A665"> </span><span style="color:#80A665">normalizePath</span><span style="color:#666666">(</span><span style="color:#80A665">dirname</span><span style="color:#666666">(</span><span style="color:#80A665">fileURLToPath</span><span style="color:#666666">(</span><span style="color:#4D9375">import</span><span style="color:#666666">.</span><span style="color:#B8A965">meta</span><span style="color:#666666">.</span><span style="color:#BD976A"><span class="twoslash-hover"><span class="twoslash-popup-container"><code class="twoslash-popup-code"><span style="color:#BD976A">ImportMeta</span><span style="color:#666666">.</span><span style="color:#BD976A">url</span><span style="color:#DBD7CAEE">: </span><span style="color:#BD976A">string</span></code><div class="twoslash-popup-docs">The absolute &#96;file:&#96; URL of the module.</div></span>url</span></span><span style="color:#666666">)))</span></span>
<span class="line"><span style="color:#CB7676">const </span><span style="color:#BD976A"><span class="twoslash-hover"><span class="twoslash-popup-container"><code class="twoslash-popup-code"><span style="color:#CB7676">const </span><span style="color:#BD976A">devtoolsFolderPath</span><span style="color:#666666">: </span><span style="color:#5DA994">string</span></code></span>devtoolsFolderPath</span></span><span style="color:#666666"> =</span><span style="color:#BD976A"> </span><span style="color:#BD976A"><span class="twoslash-hover"><span class="twoslash-popup-container"><code class="twoslash-popup-code"><span style="color:#CB7676">const </span><span style="color:#BD976A">srcFolderPath</span><span style="color:#666666">: </span><span style="color:#5DA994">any</span></code></span>srcFolderPath</span></span><span style="color:#CB7676"> + </span><span style="color:#C98A7D99">"</span><span style="color:#C98A7D">/devtools</span><span style="color:#C98A7D99">"</span></span>
<span class="line"></span>
<span class="line"><span style="color:#CB7676">const </span><span style="color:#BD976A"><span class="twoslash-hover"><span class="twoslash-popup-container"><code class="twoslash-popup-code"><span style="color:#CB7676">const </span><span style="color:#BD976A">MAGIC_MODULE_PREFIX</span><span style="color:#666666">: </span><span style="color:#C98A7D99">"</span><span style="color:#C98A7D">my-package:devtools</span><span style="color:#C98A7D99">"</span></code></span>MAGIC_MODULE_PREFIX</span></span><span style="color:#666666"> =</span><span style="color:#C98A7D99"> "</span><span style="color:#C98A7D">my-package:devtools</span><span style="color:#C98A7D99">"</span></span>
<span class="line"></span>
<span class="line"><span style="color:#4D9375">export</span><span style="color:#CB7676"> const </span><span style="color:#80A665"><span class="twoslash-hover"><span class="twoslash-popup-container"><code class="twoslash-popup-code"><pre class="shiki vitesse-dark" style="background-color:#121212;color:#dbd7caee" tabindex="0"><code><span class="line"><span style="color:#CB7676">const </span><span style="color:#80A665">devtoolsPlugin</span><span style="color:#666666">: () => &#123;</span></span>
<span class="line"><span style="color:#BD976A">    name</span><span style="color:#666666">: </span><span style="color:#5DA994">string</span><span style="color:#666666">;</span></span>
<span class="line"><span style="color:#BD976A">    enforce</span><span style="color:#666666">: </span><span style="color:#5DA994">string</span><span style="color:#666666">;</span></span>
<span class="line"><span style="color:#BD976A">    apply</span><span style="color:#666666">: </span><span style="color:#5DA994">string</span><span style="color:#666666">;</span></span>
<span class="line"><span style="color:#80A665">    resolveId</span><span style="color:#666666">(</span><span style="color:#BD976A">id</span><span style="color:#666666">: </span><span style="color:#5DA994">any</span><span style="color:#666666">): </span><span style="color:#5DA994">any</span><span style="color:#666666">;</span></span>
<span class="line"><span style="color:#80A665">    load</span><span style="color:#666666">(</span><span style="color:#BD976A">path</span><span style="color:#666666">: </span><span style="color:#5DA994">any</span><span style="color:#666666">): </span><span style="color:#5DA994">any</span><span style="color:#666666">;</span></span>
<span class="line"><span style="color:#80A665">    transform</span><span style="color:#666666">(</span><span style="color:#BD976A">code</span><span style="color:#666666">: </span><span style="color:#5DA994">any</span><span style="color:#666666">, </span><span style="color:#BD976A">id</span><span style="color:#666666">: </span><span style="color:#5DA994">any</span><span style="color:#666666">, </span><span style="color:#BD976A">options</span><span style="color:#666666">: </span><span style="color:#5DA994">any</span><span style="color:#666666">): &#123;</span></span>
<span class="line"><span style="color:#BD976A">        code</span><span style="color:#666666">: </span><span style="color:#5DA994">string</span><span style="color:#666666">;</span></span>
<span class="line"><span style="color:#666666">    &#125; | </span><span style="color:#CB7676">undefined</span><span style="color:#666666">;</span></span>
<span class="line"><span style="color:#666666">&#125;</span></span></code></pre></code></span>devtoolsPlugin</span></span><span style="color:#666666"> =</span><span style="color:#666666"> ()</span><span style="color:#666666"> =></span><span style="color:#666666"> (&#123;</span></span>
<span class="line"><span style="color:#B8A965">    </span><span style="color:#B8A965"><span class="twoslash-hover"><span class="twoslash-popup-container"><code class="twoslash-popup-code"><span style="color:#80A665">name</span><span style="color:#666666">:</span><span style="color:#BD976A"> string</span></code></span>name</span></span><span style="color:#666666">: </span><span style="color:#C98A7D99">"</span><span style="color:#C98A7D">devtools</span><span style="color:#C98A7D99">"</span><span style="color:#666666">,</span></span>
<span class="line"><span style="color:#B8A965">    </span><span style="color:#B8A965"><span class="twoslash-hover"><span class="twoslash-popup-container"><code class="twoslash-popup-code"><span style="color:#80A665">enforce</span><span style="color:#666666">:</span><span style="color:#BD976A"> string</span></code></span>enforce</span></span><span style="color:#666666">: </span><span style="color:#C98A7D99">"</span><span style="color:#C98A7D">pre</span><span style="color:#C98A7D99">"</span><span style="color:#666666">, </span></span>
<span class="line"><span style="color:#B8A965">    </span><span style="color:#B8A965"><span class="twoslash-hover"><span class="twoslash-popup-container"><code class="twoslash-popup-code"><span style="color:#80A665">apply</span><span style="color:#666666">:</span><span style="color:#BD976A"> string</span></code></span>apply</span></span><span style="color:#666666">: </span><span style="color:#C98A7D99">"</span><span style="color:#C98A7D">serve</span><span style="color:#C98A7D99">"</span><span style="color:#666666">,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#80A665">    </span><span style="color:#80A665"><span class="twoslash-hover"><span class="twoslash-popup-container"><code class="twoslash-popup-code"><span style="color:#CB7676">function</span><span style="color:#80A665"> resolveId</span><span style="color:#666666">(</span><span style="color:#BD976A">id</span><span style="color:#666666">: </span><span style="color:#5DA994">any</span><span style="color:#666666">):</span><span style="color:#5DA994"> any</span></code></span>resolveId</span></span><span style="color:#666666">(</span><span style="color:#BD976A"><span class="twoslash-hover"><span class="twoslash-popup-container"><code class="twoslash-popup-code"><span style="color:#80A665">id</span><span style="color:#666666">:</span><span style="color:#BD976A"> any</span></code></span>id</span></span><span style="color:#666666">) &#123;</span></span>
<span class="line"><span style="color:#4D9375">        if</span><span style="color:#666666"> (</span><span style="color:#BD976A"><span class="twoslash-hover"><span class="twoslash-popup-container"><code class="twoslash-popup-code"><span style="color:#80A665">id</span><span style="color:#666666">:</span><span style="color:#BD976A"> any</span></code></span>id</span></span><span style="color:#666666">.</span><span style="color:#80A665">startsWith</span><span style="color:#666666">(</span><span style="color:#BD976A"><span class="twoslash-hover"><span class="twoslash-popup-container"><code class="twoslash-popup-code"><span style="color:#CB7676">const </span><span style="color:#BD976A">MAGIC_MODULE_PREFIX</span><span style="color:#666666">: </span><span style="color:#C98A7D99">"</span><span style="color:#C98A7D">my-package:devtools</span><span style="color:#C98A7D99">"</span></code></span>MAGIC_MODULE_PREFIX</span></span><span style="color:#666666">)) &#123;</span></span>
<span class="line"><span style="color:#4D9375">            return</span><span style="color:#BD976A"> </span><span style="color:#BD976A"><span class="twoslash-hover"><span class="twoslash-popup-container"><code class="twoslash-popup-code"><span style="color:#80A665">id</span><span style="color:#666666">:</span><span style="color:#BD976A"> any</span></code></span>id</span></span><span style="color:#666666">.</span><span style="color:#80A665">replace</span><span style="color:#666666">(</span><span style="color:#BD976A"><span class="twoslash-hover"><span class="twoslash-popup-container"><code class="twoslash-popup-code"><span style="color:#CB7676">const </span><span style="color:#BD976A">MAGIC_MODULE_PREFIX</span><span style="color:#666666">: </span><span style="color:#C98A7D99">"</span><span style="color:#C98A7D">my-package:devtools</span><span style="color:#C98A7D99">"</span></code></span>MAGIC_MODULE_PREFIX</span></span><span style="color:#666666">, </span><span style="color:#BD976A"><span class="twoslash-hover"><span class="twoslash-popup-container"><code class="twoslash-popup-code"><span style="color:#CB7676">const </span><span style="color:#BD976A">devtoolsFolderPath</span><span style="color:#666666">: </span><span style="color:#5DA994">string</span></code></span>devtoolsFolderPath</span></span><span style="color:#666666">);</span></span>
<span class="line"><span style="color:#666666">        &#125;</span></span>
<span class="line"><span style="color:#666666">    &#125;, </span></span>
<span class="line"></span>
<span class="line"><span style="color:#80A665">    </span><span style="color:#80A665"><span class="twoslash-hover"><span class="twoslash-popup-container"><code class="twoslash-popup-code"><span style="color:#CB7676">function</span><span style="color:#80A665"> load</span><span style="color:#666666">(</span><span style="color:#BD976A">path</span><span style="color:#666666">: </span><span style="color:#5DA994">any</span><span style="color:#666666">):</span><span style="color:#5DA994"> any</span></code></span>load</span></span><span style="color:#666666">(</span><span style="color:#BD976A"><span class="twoslash-hover"><span class="twoslash-popup-container"><code class="twoslash-popup-code"><span style="color:#80A665">path</span><span style="color:#666666">:</span><span style="color:#BD976A"> any</span></code></span>path</span></span><span style="color:#666666">) &#123;</span></span>
<span class="line"><span style="color:#4D9375">        if</span><span style="color:#666666"> (</span><span style="color:#BD976A"><span class="twoslash-hover"><span class="twoslash-popup-container"><code class="twoslash-popup-code"><span style="color:#80A665">path</span><span style="color:#666666">:</span><span style="color:#BD976A"> any</span></code></span>path</span></span><span style="color:#666666">.</span><span style="color:#80A665">startsWith</span><span style="color:#666666">(</span><span style="color:#BD976A"><span class="twoslash-hover"><span class="twoslash-popup-container"><code class="twoslash-popup-code"><span style="color:#CB7676">const </span><span style="color:#BD976A">devtoolsFolderPath</span><span style="color:#666666">: </span><span style="color:#5DA994">string</span></code></span>devtoolsFolderPath</span></span><span style="color:#666666">)) &#123;</span></span>
<span class="line"><span style="color:#CB7676">            let </span><span style="color:#BD976A"><span class="twoslash-hover"><span class="twoslash-popup-container"><code class="twoslash-popup-code"><span style="color:#CB7676">let </span><span style="color:#BD976A">cleanPath</span><span style="color:#666666">: </span><span style="color:#5DA994">any</span></code></span>cleanPath</span></span><span style="color:#666666"> =</span><span style="color:#BD976A"> </span><span style="color:#BD976A">id</span><span style="color:#666666">.</span><span style="color:#80A665">split</span><span style="color:#666666">(</span><span style="color:#C98A7D99">"</span><span style="color:#C98A7D">?</span><span style="color:#C98A7D99">"</span><span style="color:#666666">)[</span><span style="color:#4C9A91">0</span><span style="color:#666666">]</span><span style="color:#CB7676"> ?? </span><span style="color:#C98A7D99">""</span><span style="color:#666666">; </span><span style="color:#758575DD">//remove query params</span></span>
<span class="line"><span style="color:#BD976A">            </span><span style="color:#BD976A"><span class="twoslash-hover"><span class="twoslash-popup-container"><code class="twoslash-popup-code"><span style="color:#CB7676">let </span><span style="color:#BD976A">cleanPath</span><span style="color:#666666">: </span><span style="color:#5DA994">any</span></code></span>cleanPath</span></span><span style="color:#666666"> = </span><span style="color:#BD976A">cleanId</span><span style="color:#666666">.</span><span style="color:#80A665">split</span><span style="color:#666666">(</span><span style="color:#C98A7D99">"</span><span style="color:#C98A7D">#</span><span style="color:#C98A7D99">"</span><span style="color:#666666">)[</span><span style="color:#4C9A91">0</span><span style="color:#666666">] </span><span style="color:#CB7676">??</span><span style="color:#C98A7D99"> ""</span><span style="color:#666666">; </span><span style="color:#758575DD">//remove hash</span></span>
<span class="line"></span>
<span class="line"><span style="color:#4D9375">            if</span><span style="color:#666666">(</span><span style="color:#BD976A">fs</span><span style="color:#666666">.</span><span style="color:#80A665">existsSync</span><span style="color:#666666">(</span><span style="color:#BD976A"><span class="twoslash-hover"><span class="twoslash-popup-container"><code class="twoslash-popup-code"><span style="color:#CB7676">let </span><span style="color:#BD976A">cleanPath</span><span style="color:#666666">: </span><span style="color:#5DA994">any</span></code></span>cleanPath</span></span><span style="color:#666666">)) &#123;</span><span style="color:#4D9375">return</span><span style="color:#BD976A"> </span><span style="color:#BD976A">fs</span><span style="color:#666666">.</span><span style="color:#80A665">readFile</span><span style="color:#666666">(</span><span style="color:#BD976A"><span class="twoslash-hover"><span class="twoslash-popup-container"><code class="twoslash-popup-code"><span style="color:#CB7676">let </span><span style="color:#BD976A">cleanPath</span><span style="color:#666666">: </span><span style="color:#5DA994">any</span></code></span>cleanPath</span></span><span style="color:#666666">, </span><span style="color:#C98A7D99">"</span><span style="color:#C98A7D">utf-8</span><span style="color:#C98A7D99">"</span><span style="color:#666666">) &#125;</span></span>
<span class="line"><span style="color:#4D9375">            else</span><span style="color:#666666"> &#123; </span><span style="color:#BD976A"><span class="twoslash-hover"><span class="twoslash-popup-container"><code class="twoslash-popup-code"><span style="color:#CB7676">var </span><span style="color:#BD976A">console</span><span style="color:#666666">: </span><span style="color:#5DA994">Console</span></code><div class="twoslash-popup-docs">The &#96;console&#96; module provides a simple debugging console that is similar to the
JavaScript console mechanism provided by web browsers.

The module exports two specific components:

* A &#96;Console&#96; class with methods such as &#96;console.log()&#96;, &#96;console.error()&#96; and &#96;console.warn()&#96; that can be used to write to any Node.js stream.
* A global &#96;console&#96; instance configured to write to [&#96;process.stdout&#96;](https://nodejs.org/docs/latest-v22.x/api/process.html#processstdout) and
[&#96;process.stderr&#96;](https://nodejs.org/docs/latest-v22.x/api/process.html#processstderr). The global &#96;console&#96; can be used without importing the &#96;node:console&#96; module.

_**Warning**_: The global console object's methods are neither consistently
synchronous like the browser APIs they resemble, nor are they consistently
asynchronous like all other Node.js streams. See the [&#96;note on process I/O&#96;](https://nodejs.org/docs/latest-v22.x/api/process.html#a-note-on-process-io) for
more information.

Example using the global &#96;console&#96;:

&#96;&#96;&#96;js
console.log('hello world');
// Prints: hello world, to stdout
console.log('hello %s', 'world');
// Prints: hello world, to stdout
console.error(new Error('Whoops, something bad happened'));
// Prints error message and stack trace to stderr:
//   Error: Whoops, something bad happened
//     at [eval]:5:15
//     at Script.runInThisContext (node:vm:132:18)
//     at Object.runInThisContext (node:vm:309:38)
//     at node:internal/process/execution:77:19
//     at [eval]-wrapper:6:22
//     at evalScript (node:internal/process/execution:76:60)
//     at node:internal/main/eval_string:23:3

const name = 'Will Robinson';
console.warn(&#96;Danger $&#123;name&#125;! Danger!&#96;);
// Prints: Danger Will Robinson! Danger!, to stderr
&#96;&#96;&#96;

Example using the &#96;Console&#96; class:

&#96;&#96;&#96;js
const out = getStreamSomehow();
const err = getStreamSomehow();
const myConsole = new console.Console(out, err);

myConsole.log('hello world');
// Prints: hello world, to out
myConsole.log('hello %s', 'world');
// Prints: hello world, to out
myConsole.error(new Error('Whoops, something bad happened'));
// Prints: [Error: Whoops, something bad happened], to err

const name = 'Will Robinson';
myConsole.warn(&#96;Danger $&#123;name&#125;! Danger!&#96;);
// Prints: Danger Will Robinson! Danger!, to err
&#96;&#96;&#96;</div><div class="twoslash-popup-docs twoslash-popup-docs-tags"><span class="twoslash-popup-docs-tag"><span class="twoslash-popup-docs-tag-name">@see</span><span class="twoslash-popup-docs-tag-value">[source](https://github.com/nodejs/node/blob/v22.x/lib/console.js)</span></span></div></span>console</span></span><span style="color:#666666">.</span><span style="color:#80A665"><span class="twoslash-hover"><span class="twoslash-popup-container"><code class="twoslash-popup-code"><span style="color:#BD976A">Console</span><span style="color:#666666">.</span><span style="color:#80A665">warn</span><span style="color:#666666">(</span><span style="color:#BD976A">message</span><span style="color:#CB7676">?:</span><span style="color:#BD976A"> any</span><span style="color:#666666">,</span><span style="color:#666666"> ...</span><span style="color:#BD976A">optionalParams</span><span style="color:#DBD7CAEE">: </span><span style="color:#BD976A">any</span><span style="color:#666666">[])</span><span style="color:#DBD7CAEE">: </span><span style="color:#CB7676">void</span><span style="color:#666666"> (</span><span style="color:#CB7676">+</span><span style="color:#4C9A91">1</span><span style="color:#BD976A"> overload</span><span style="color:#666666">)</span></code><div class="twoslash-popup-docs">The &#96;console.warn()&#96; function is an alias for 
&#123;@link 
error
&#125;
.</div><div class="twoslash-popup-docs twoslash-popup-docs-tags"><span class="twoslash-popup-docs-tag"><span class="twoslash-popup-docs-tag-name">@since</span><span class="twoslash-popup-docs-tag-value">v0.1.100</span></span></div></span>warn</span></span><span style="color:#666666">(</span><span style="color:#C98A7D99">&#96;</span><span style="color:#C98A7D">Could not find file </span><span style="color:#666666">$&#123;</span><span style="color:#C98A7D"><span class="twoslash-hover"><span class="twoslash-popup-container"><code class="twoslash-popup-code"><span style="color:#CB7676">let </span><span style="color:#BD976A">cleanPath</span><span style="color:#666666">: </span><span style="color:#5DA994">any</span></code></span>cleanPath</span></span><span style="color:#666666">&#125;</span><span style="color:#C98A7D99">&#96;</span><span style="color:#666666">) &#125;</span></span>
<span class="line"><span style="color:#666666">        &#125;</span></span>
<span class="line"><span style="color:#666666">    &#125;,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#80A665">    </span><span style="color:#80A665"><span class="twoslash-hover"><span class="twoslash-popup-container"><code class="twoslash-popup-code"><pre class="shiki vitesse-dark" style="background-color:#121212;color:#dbd7caee" tabindex="0"><code><span class="line"><span style="color:#CB7676">function</span><span style="color:#80A665"> transform</span><span style="color:#666666">(</span><span style="color:#BD976A">code</span><span style="color:#666666">: </span><span style="color:#5DA994">any</span><span style="color:#666666">,</span><span style="color:#BD976A"> id</span><span style="color:#666666">: </span><span style="color:#5DA994">any</span><span style="color:#666666">,</span><span style="color:#BD976A"> options</span><span style="color:#666666">: </span><span style="color:#5DA994">any</span><span style="color:#666666">):</span><span style="color:#666666"> &#123;</span></span>
<span class="line"><span style="color:#BD976A">    code</span><span style="color:#666666">: </span><span style="color:#5DA994">string</span><span style="color:#666666">;</span></span>
<span class="line"><span style="color:#666666">&#125;</span><span style="color:#666666"> |</span><span style="color:#CB7676"> undefined</span></span></code></pre></code></span>transform</span></span><span style="color:#666666">(</span><span style="color:#BD976A"><span class="twoslash-hover"><span class="twoslash-popup-container"><code class="twoslash-popup-code"><span style="color:#80A665">code</span><span style="color:#666666">:</span><span style="color:#BD976A"> any</span></code></span>code</span></span><span style="color:#666666">, </span><span style="color:#BD976A"><span class="twoslash-hover"><span class="twoslash-popup-container"><code class="twoslash-popup-code"><span style="color:#80A665">id</span><span style="color:#666666">:</span><span style="color:#BD976A"> any</span></code></span>id</span></span><span style="color:#666666">, </span><span style="color:#BD976A"><span class="twoslash-hover"><span class="twoslash-popup-container"><code class="twoslash-popup-code"><span style="color:#80A665">options</span><span style="color:#666666">:</span><span style="color:#BD976A"> any</span></code></span>options</span></span><span style="color:#666666">) &#123;</span></span>
<span class="line"><span style="color:#4D9375">        if</span><span style="color:#666666"> (</span><span style="color:#BD976A"><span class="twoslash-hover"><span class="twoslash-popup-container"><code class="twoslash-popup-code"><span style="color:#80A665">id</span><span style="color:#666666">:</span><span style="color:#BD976A"> any</span></code></span>id</span></span><span style="color:#666666">.</span><span style="color:#80A665">includes</span><span style="color:#666666">(</span><span style="color:#C98A7D99">"</span><span style="color:#C98A7D">vite/dist/client/client.mjs</span><span style="color:#C98A7D99">"</span><span style="color:#666666">)) &#123;</span></span>
<span class="line"><span style="color:#4D9375">            return</span><span style="color:#666666"> &#123; </span><span style="color:#B8A965"><span class="twoslash-hover"><span class="twoslash-popup-container"><code class="twoslash-popup-code"><span style="color:#80A665">code</span><span style="color:#666666">:</span><span style="color:#BD976A"> string</span></code></span>code</span></span><span style="color:#666666">: </span><span style="color:#BD976A"><span class="twoslash-hover"><span class="twoslash-popup-container"><code class="twoslash-popup-code"><span style="color:#80A665">code</span><span style="color:#666666">:</span><span style="color:#BD976A"> any</span></code></span>code</span></span><span style="color:#CB7676"> +</span><span style="color:#C98A7D99"> "</span><span style="color:#C99076">&#92;n</span><span style="color:#C98A7D99">"</span><span style="color:#CB7676"> +</span><span style="color:#C98A7D99"> &#96;</span><span style="color:#C98A7D">import("</span><span style="color:#666666">$&#123;</span><span style="color:#C98A7D">MAGIC_MODULE_ID</span><span style="color:#666666">&#125;</span><span style="color:#C98A7D">/entry.js").then(module => module.bootstrap())</span><span style="color:#C98A7D99">&#96;</span><span style="color:#666666"> &#125;</span></span>
<span class="line"><span style="color:#666666">        &#125;</span></span>
<span class="line"><span style="color:#666666">    &#125;</span></span>
<span class="line"><span style="color:#666666">&#125;)</span></span></code></pre>`;
  let t140;
  let h22;
  let textContent_38 = `<a href="#in-conclusion">In Conclusion</a>`;
  let t142;
  let p28;
  let textContent_39 = "It’s not hard, but it’s a hassle. Fortunately, you only need to do this once.";
  return {
    c() {
      h1 = element("h1");
      h1.innerHTML = textContent;
      t1 = space();
      p0 = element("p");
      p0.innerHTML = textContent_1;
      t5 = space();
      p1 = element("p");
      p1.textContent = textContent_2;
      t7 = space();
      h20 = element("h2");
      h20.innerHTML = textContent_3;
      t9 = space();
      p2 = element("p");
      p2.innerHTML = textContent_4;
      t13 = space();
      html_tag = new HtmlTagHydration(false);
      t14 = space();
      p3 = element("p");
      p3.textContent = textContent_5;
      t16 = space();
      h21 = element("h2");
      h21.innerHTML = textContent_6;
      t18 = space();
      p4 = element("p");
      p4.textContent = textContent_7;
      t20 = space();
      p5 = element("p");
      p5.textContent = textContent_8;
      t22 = space();
      html_tag_1 = new HtmlTagHydration(false);
      t23 = space();
      p6 = element("p");
      p6.textContent = textContent_9;
      t25 = space();
      ol = element("ol");
      ol.innerHTML = textContent_10;
      t31 = space();
      h30 = element("h3");
      h30.innerHTML = textContent_11;
      t33 = space();
      p7 = element("p");
      p7.textContent = textContent_12;
      t35 = space();
      html_tag_2 = new HtmlTagHydration(false);
      t36 = space();
      p8 = element("p");
      p8.textContent = textContent_13;
      t38 = space();
      ul0 = element("ul");
      ul0.innerHTML = textContent_14;
      t42 = space();
      blockquote0 = element("blockquote");
      blockquote0.innerHTML = textContent_15;
      t44 = space();
      h31 = element("h3");
      h31.innerHTML = textContent_16;
      t46 = space();
      p10 = element("p");
      p10.innerHTML = textContent_17;
      t52 = space();
      p11 = element("p");
      p11.textContent = textContent_18;
      t54 = space();
      p12 = element("p");
      p12.textContent = textContent_19;
      t56 = space();
      html_tag_3 = new HtmlTagHydration(false);
      t57 = space();
      p13 = element("p");
      p13.innerHTML = textContent_20;
      t61 = space();
      html_tag_4 = new HtmlTagHydration(false);
      t62 = space();
      p14 = element("p");
      p14.innerHTML = textContent_21;
      t66 = space();
      html_tag_5 = new HtmlTagHydration(false);
      t67 = space();
      p15 = element("p");
      p15.innerHTML = textContent_22;
      t73 = space();
      blockquote1 = element("blockquote");
      blockquote1.innerHTML = textContent_23;
      t81 = space();
      h32 = element("h3");
      h32.innerHTML = textContent_24;
      t83 = space();
      p17 = element("p");
      p17.innerHTML = textContent_25;
      t87 = space();
      p18 = element("p");
      p18.textContent = textContent_26;
      t89 = space();
      p19 = element("p");
      p19.innerHTML = textContent_27;
      t95 = space();
      p20 = element("p");
      p20.innerHTML = textContent_28;
      t99 = space();
      p21 = element("p");
      p21.innerHTML = textContent_29;
      t103 = space();
      html_tag_6 = new HtmlTagHydration(false);
      t104 = space();
      html_tag_7 = new HtmlTagHydration(false);
      t105 = space();
      p22 = element("p");
      p22.textContent = textContent_30;
      t107 = space();
      html_tag_8 = new HtmlTagHydration(false);
      t108 = space();
      p23 = element("p");
      p23.textContent = textContent_31;
      t110 = space();
      h4 = element("h4");
      h4.innerHTML = textContent_32;
      t113 = space();
      p24 = element("p");
      p24.innerHTML = textContent_33;
      t118 = space();
      p25 = element("p");
      p25.innerHTML = textContent_34;
      t124 = space();
      p26 = element("p");
      p26.innerHTML = textContent_35;
      t132 = space();
      html_tag_9 = new HtmlTagHydration(false);
      t133 = space();
      p27 = element("p");
      p27.textContent = textContent_36;
      t135 = space();
      ul1 = element("ul");
      ul1.innerHTML = textContent_37;
      t139 = space();
      html_tag_10 = new HtmlTagHydration(false);
      t140 = space();
      h22 = element("h2");
      h22.innerHTML = textContent_38;
      t142 = space();
      p28 = element("p");
      p28.textContent = textContent_39;
      this.h();
    },
    l(nodes) {
      h1 = claim_element(nodes, "H1", { id: true, ["data-svelte-h"]: true });
      if (get_svelte_dataset(h1) !== "svelte-149hxn8")
        h1.innerHTML = textContent;
      t1 = claim_space(nodes);
      p0 = claim_element(nodes, "P", { ["data-svelte-h"]: true });
      if (get_svelte_dataset(p0) !== "svelte-f4e11x")
        p0.innerHTML = textContent_1;
      t5 = claim_space(nodes);
      p1 = claim_element(nodes, "P", { ["data-svelte-h"]: true });
      if (get_svelte_dataset(p1) !== "svelte-1gnlx2z")
        p1.textContent = textContent_2;
      t7 = claim_space(nodes);
      h20 = claim_element(nodes, "H2", { id: true, ["data-svelte-h"]: true });
      if (get_svelte_dataset(h20) !== "svelte-13bm82k")
        h20.innerHTML = textContent_3;
      t9 = claim_space(nodes);
      p2 = claim_element(nodes, "P", { ["data-svelte-h"]: true });
      if (get_svelte_dataset(p2) !== "svelte-139m8pm")
        p2.innerHTML = textContent_4;
      t13 = claim_space(nodes);
      html_tag = claim_html_tag(nodes, false);
      t14 = claim_space(nodes);
      p3 = claim_element(nodes, "P", { ["data-svelte-h"]: true });
      if (get_svelte_dataset(p3) !== "svelte-dykwd4")
        p3.textContent = textContent_5;
      t16 = claim_space(nodes);
      h21 = claim_element(nodes, "H2", { id: true, ["data-svelte-h"]: true });
      if (get_svelte_dataset(h21) !== "svelte-wuufpu")
        h21.innerHTML = textContent_6;
      t18 = claim_space(nodes);
      p4 = claim_element(nodes, "P", { ["data-svelte-h"]: true });
      if (get_svelte_dataset(p4) !== "svelte-1q4s0sc")
        p4.textContent = textContent_7;
      t20 = claim_space(nodes);
      p5 = claim_element(nodes, "P", { ["data-svelte-h"]: true });
      if (get_svelte_dataset(p5) !== "svelte-1kcsokb")
        p5.textContent = textContent_8;
      t22 = claim_space(nodes);
      html_tag_1 = claim_html_tag(nodes, false);
      t23 = claim_space(nodes);
      p6 = claim_element(nodes, "P", { ["data-svelte-h"]: true });
      if (get_svelte_dataset(p6) !== "svelte-ujsyuk")
        p6.textContent = textContent_9;
      t25 = claim_space(nodes);
      ol = claim_element(nodes, "OL", { ["data-svelte-h"]: true });
      if (get_svelte_dataset(ol) !== "svelte-1de6fwn")
        ol.innerHTML = textContent_10;
      t31 = claim_space(nodes);
      h30 = claim_element(nodes, "H3", { id: true, ["data-svelte-h"]: true });
      if (get_svelte_dataset(h30) !== "svelte-hi4waj")
        h30.innerHTML = textContent_11;
      t33 = claim_space(nodes);
      p7 = claim_element(nodes, "P", { ["data-svelte-h"]: true });
      if (get_svelte_dataset(p7) !== "svelte-18yov4n")
        p7.textContent = textContent_12;
      t35 = claim_space(nodes);
      html_tag_2 = claim_html_tag(nodes, false);
      t36 = claim_space(nodes);
      p8 = claim_element(nodes, "P", { ["data-svelte-h"]: true });
      if (get_svelte_dataset(p8) !== "svelte-d8lfxd")
        p8.textContent = textContent_13;
      t38 = claim_space(nodes);
      ul0 = claim_element(nodes, "UL", { ["data-svelte-h"]: true });
      if (get_svelte_dataset(ul0) !== "svelte-8xnolz")
        ul0.innerHTML = textContent_14;
      t42 = claim_space(nodes);
      blockquote0 = claim_element(nodes, "BLOCKQUOTE", { ["data-svelte-h"]: true });
      if (get_svelte_dataset(blockquote0) !== "svelte-1mtvoal")
        blockquote0.innerHTML = textContent_15;
      t44 = claim_space(nodes);
      h31 = claim_element(nodes, "H3", { id: true, ["data-svelte-h"]: true });
      if (get_svelte_dataset(h31) !== "svelte-13xa7ud")
        h31.innerHTML = textContent_16;
      t46 = claim_space(nodes);
      p10 = claim_element(nodes, "P", { ["data-svelte-h"]: true });
      if (get_svelte_dataset(p10) !== "svelte-ok68q6")
        p10.innerHTML = textContent_17;
      t52 = claim_space(nodes);
      p11 = claim_element(nodes, "P", { ["data-svelte-h"]: true });
      if (get_svelte_dataset(p11) !== "svelte-anwskw")
        p11.textContent = textContent_18;
      t54 = claim_space(nodes);
      p12 = claim_element(nodes, "P", { ["data-svelte-h"]: true });
      if (get_svelte_dataset(p12) !== "svelte-hih30e")
        p12.textContent = textContent_19;
      t56 = claim_space(nodes);
      html_tag_3 = claim_html_tag(nodes, false);
      t57 = claim_space(nodes);
      p13 = claim_element(nodes, "P", { ["data-svelte-h"]: true });
      if (get_svelte_dataset(p13) !== "svelte-tqh44r")
        p13.innerHTML = textContent_20;
      t61 = claim_space(nodes);
      html_tag_4 = claim_html_tag(nodes, false);
      t62 = claim_space(nodes);
      p14 = claim_element(nodes, "P", { ["data-svelte-h"]: true });
      if (get_svelte_dataset(p14) !== "svelte-zeazju")
        p14.innerHTML = textContent_21;
      t66 = claim_space(nodes);
      html_tag_5 = claim_html_tag(nodes, false);
      t67 = claim_space(nodes);
      p15 = claim_element(nodes, "P", { ["data-svelte-h"]: true });
      if (get_svelte_dataset(p15) !== "svelte-mk2ame")
        p15.innerHTML = textContent_22;
      t73 = claim_space(nodes);
      blockquote1 = claim_element(nodes, "BLOCKQUOTE", { ["data-svelte-h"]: true });
      if (get_svelte_dataset(blockquote1) !== "svelte-4otrga")
        blockquote1.innerHTML = textContent_23;
      t81 = claim_space(nodes);
      h32 = claim_element(nodes, "H3", { id: true, ["data-svelte-h"]: true });
      if (get_svelte_dataset(h32) !== "svelte-1vol08d")
        h32.innerHTML = textContent_24;
      t83 = claim_space(nodes);
      p17 = claim_element(nodes, "P", { ["data-svelte-h"]: true });
      if (get_svelte_dataset(p17) !== "svelte-d4i2kr")
        p17.innerHTML = textContent_25;
      t87 = claim_space(nodes);
      p18 = claim_element(nodes, "P", { ["data-svelte-h"]: true });
      if (get_svelte_dataset(p18) !== "svelte-1bug3ei")
        p18.textContent = textContent_26;
      t89 = claim_space(nodes);
      p19 = claim_element(nodes, "P", { ["data-svelte-h"]: true });
      if (get_svelte_dataset(p19) !== "svelte-1kdpnj3")
        p19.innerHTML = textContent_27;
      t95 = claim_space(nodes);
      p20 = claim_element(nodes, "P", { ["data-svelte-h"]: true });
      if (get_svelte_dataset(p20) !== "svelte-qoqrfj")
        p20.innerHTML = textContent_28;
      t99 = claim_space(nodes);
      p21 = claim_element(nodes, "P", { ["data-svelte-h"]: true });
      if (get_svelte_dataset(p21) !== "svelte-m7512w")
        p21.innerHTML = textContent_29;
      t103 = claim_space(nodes);
      html_tag_6 = claim_html_tag(nodes, false);
      t104 = claim_space(nodes);
      html_tag_7 = claim_html_tag(nodes, false);
      t105 = claim_space(nodes);
      p22 = claim_element(nodes, "P", { ["data-svelte-h"]: true });
      if (get_svelte_dataset(p22) !== "svelte-zni08o")
        p22.textContent = textContent_30;
      t107 = claim_space(nodes);
      html_tag_8 = claim_html_tag(nodes, false);
      t108 = claim_space(nodes);
      p23 = claim_element(nodes, "P", { ["data-svelte-h"]: true });
      if (get_svelte_dataset(p23) !== "svelte-l3cmum")
        p23.textContent = textContent_31;
      t110 = claim_space(nodes);
      h4 = claim_element(nodes, "H4", { id: true, ["data-svelte-h"]: true });
      if (get_svelte_dataset(h4) !== "svelte-1185fxd")
        h4.innerHTML = textContent_32;
      t113 = claim_space(nodes);
      p24 = claim_element(nodes, "P", { ["data-svelte-h"]: true });
      if (get_svelte_dataset(p24) !== "svelte-koxrm5")
        p24.innerHTML = textContent_33;
      t118 = claim_space(nodes);
      p25 = claim_element(nodes, "P", { ["data-svelte-h"]: true });
      if (get_svelte_dataset(p25) !== "svelte-16494hq")
        p25.innerHTML = textContent_34;
      t124 = claim_space(nodes);
      p26 = claim_element(nodes, "P", { ["data-svelte-h"]: true });
      if (get_svelte_dataset(p26) !== "svelte-1lbja3y")
        p26.innerHTML = textContent_35;
      t132 = claim_space(nodes);
      html_tag_9 = claim_html_tag(nodes, false);
      t133 = claim_space(nodes);
      p27 = claim_element(nodes, "P", { ["data-svelte-h"]: true });
      if (get_svelte_dataset(p27) !== "svelte-yave0q")
        p27.textContent = textContent_36;
      t135 = claim_space(nodes);
      ul1 = claim_element(nodes, "UL", { ["data-svelte-h"]: true });
      if (get_svelte_dataset(ul1) !== "svelte-1yfszir")
        ul1.innerHTML = textContent_37;
      t139 = claim_space(nodes);
      html_tag_10 = claim_html_tag(nodes, false);
      t140 = claim_space(nodes);
      h22 = claim_element(nodes, "H2", { id: true, ["data-svelte-h"]: true });
      if (get_svelte_dataset(h22) !== "svelte-oyeq2k")
        h22.innerHTML = textContent_38;
      t142 = claim_space(nodes);
      p28 = claim_element(nodes, "P", { ["data-svelte-h"]: true });
      if (get_svelte_dataset(p28) !== "svelte-3f38rf")
        p28.textContent = textContent_39;
      this.h();
    },
    h() {
      attr(h1, "id", "adding-devtools-to-vite-plugins");
      attr(h20, "id", "getting-a-foothold---injecting-js-into-the-browser");
      html_tag.a = t14;
      attr(h21, "id", "importing-our-own-modules");
      html_tag_1.a = t23;
      attr(h30, "id", "option-1-exporting-the-runtime-code-from-the-package");
      html_tag_2.a = t36;
      attr(h31, "id", "option-2-using-a-sub-package");
      html_tag_3.a = t57;
      html_tag_4.a = t62;
      html_tag_5.a = t67;
      attr(h32, "id", "option-3-magic-module-resolution-preferred");
      html_tag_6.a = t104;
      html_tag_7.a = t105;
      html_tag_8.a = t108;
      attr(h4, "id", "addendum-dealing-with-fsallow");
      html_tag_9.a = t133;
      html_tag_10.a = t140;
      attr(h22, "id", "in-conclusion");
    },
    m(target, anchor) {
      insert_hydration(target, h1, anchor);
      insert_hydration(target, t1, anchor);
      insert_hydration(target, p0, anchor);
      insert_hydration(target, t5, anchor);
      insert_hydration(target, p1, anchor);
      insert_hydration(target, t7, anchor);
      insert_hydration(target, h20, anchor);
      insert_hydration(target, t9, anchor);
      insert_hydration(target, p2, anchor);
      insert_hydration(target, t13, anchor);
      html_tag.m(raw0_value, target, anchor);
      insert_hydration(target, t14, anchor);
      insert_hydration(target, p3, anchor);
      insert_hydration(target, t16, anchor);
      insert_hydration(target, h21, anchor);
      insert_hydration(target, t18, anchor);
      insert_hydration(target, p4, anchor);
      insert_hydration(target, t20, anchor);
      insert_hydration(target, p5, anchor);
      insert_hydration(target, t22, anchor);
      html_tag_1.m(raw1_value, target, anchor);
      insert_hydration(target, t23, anchor);
      insert_hydration(target, p6, anchor);
      insert_hydration(target, t25, anchor);
      insert_hydration(target, ol, anchor);
      insert_hydration(target, t31, anchor);
      insert_hydration(target, h30, anchor);
      insert_hydration(target, t33, anchor);
      insert_hydration(target, p7, anchor);
      insert_hydration(target, t35, anchor);
      html_tag_2.m(raw2_value, target, anchor);
      insert_hydration(target, t36, anchor);
      insert_hydration(target, p8, anchor);
      insert_hydration(target, t38, anchor);
      insert_hydration(target, ul0, anchor);
      insert_hydration(target, t42, anchor);
      insert_hydration(target, blockquote0, anchor);
      insert_hydration(target, t44, anchor);
      insert_hydration(target, h31, anchor);
      insert_hydration(target, t46, anchor);
      insert_hydration(target, p10, anchor);
      insert_hydration(target, t52, anchor);
      insert_hydration(target, p11, anchor);
      insert_hydration(target, t54, anchor);
      insert_hydration(target, p12, anchor);
      insert_hydration(target, t56, anchor);
      html_tag_3.m(raw3_value, target, anchor);
      insert_hydration(target, t57, anchor);
      insert_hydration(target, p13, anchor);
      insert_hydration(target, t61, anchor);
      html_tag_4.m(raw4_value, target, anchor);
      insert_hydration(target, t62, anchor);
      insert_hydration(target, p14, anchor);
      insert_hydration(target, t66, anchor);
      html_tag_5.m(raw5_value, target, anchor);
      insert_hydration(target, t67, anchor);
      insert_hydration(target, p15, anchor);
      insert_hydration(target, t73, anchor);
      insert_hydration(target, blockquote1, anchor);
      insert_hydration(target, t81, anchor);
      insert_hydration(target, h32, anchor);
      insert_hydration(target, t83, anchor);
      insert_hydration(target, p17, anchor);
      insert_hydration(target, t87, anchor);
      insert_hydration(target, p18, anchor);
      insert_hydration(target, t89, anchor);
      insert_hydration(target, p19, anchor);
      insert_hydration(target, t95, anchor);
      insert_hydration(target, p20, anchor);
      insert_hydration(target, t99, anchor);
      insert_hydration(target, p21, anchor);
      insert_hydration(target, t103, anchor);
      html_tag_6.m(raw6_value, target, anchor);
      insert_hydration(target, t104, anchor);
      html_tag_7.m(raw7_value, target, anchor);
      insert_hydration(target, t105, anchor);
      insert_hydration(target, p22, anchor);
      insert_hydration(target, t107, anchor);
      html_tag_8.m(raw8_value, target, anchor);
      insert_hydration(target, t108, anchor);
      insert_hydration(target, p23, anchor);
      insert_hydration(target, t110, anchor);
      insert_hydration(target, h4, anchor);
      insert_hydration(target, t113, anchor);
      insert_hydration(target, p24, anchor);
      insert_hydration(target, t118, anchor);
      insert_hydration(target, p25, anchor);
      insert_hydration(target, t124, anchor);
      insert_hydration(target, p26, anchor);
      insert_hydration(target, t132, anchor);
      html_tag_9.m(raw9_value, target, anchor);
      insert_hydration(target, t133, anchor);
      insert_hydration(target, p27, anchor);
      insert_hydration(target, t135, anchor);
      insert_hydration(target, ul1, anchor);
      insert_hydration(target, t139, anchor);
      html_tag_10.m(raw10_value, target, anchor);
      insert_hydration(target, t140, anchor);
      insert_hydration(target, h22, anchor);
      insert_hydration(target, t142, anchor);
      insert_hydration(target, p28, anchor);
    },
    p: noop,
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching) {
        detach(h1);
        detach(t1);
        detach(p0);
        detach(t5);
        detach(p1);
        detach(t7);
        detach(h20);
        detach(t9);
        detach(p2);
        detach(t13);
        html_tag.d();
        detach(t14);
        detach(p3);
        detach(t16);
        detach(h21);
        detach(t18);
        detach(p4);
        detach(t20);
        detach(p5);
        detach(t22);
        html_tag_1.d();
        detach(t23);
        detach(p6);
        detach(t25);
        detach(ol);
        detach(t31);
        detach(h30);
        detach(t33);
        detach(p7);
        detach(t35);
        html_tag_2.d();
        detach(t36);
        detach(p8);
        detach(t38);
        detach(ul0);
        detach(t42);
        detach(blockquote0);
        detach(t44);
        detach(h31);
        detach(t46);
        detach(p10);
        detach(t52);
        detach(p11);
        detach(t54);
        detach(p12);
        detach(t56);
        html_tag_3.d();
        detach(t57);
        detach(p13);
        detach(t61);
        html_tag_4.d();
        detach(t62);
        detach(p14);
        detach(t66);
        html_tag_5.d();
        detach(t67);
        detach(p15);
        detach(t73);
        detach(blockquote1);
        detach(t81);
        detach(h32);
        detach(t83);
        detach(p17);
        detach(t87);
        detach(p18);
        detach(t89);
        detach(p19);
        detach(t95);
        detach(p20);
        detach(t99);
        detach(p21);
        detach(t103);
        html_tag_6.d();
        detach(t104);
        html_tag_7.d();
        detach(t105);
        detach(p22);
        detach(t107);
        html_tag_8.d();
        detach(t108);
        detach(p23);
        detach(t110);
        detach(h4);
        detach(t113);
        detach(p24);
        detach(t118);
        detach(p25);
        detach(t124);
        detach(p26);
        detach(t132);
        html_tag_9.d();
        detach(t133);
        detach(p27);
        detach(t135);
        detach(ul1);
        detach(t139);
        html_tag_10.d();
        detach(t140);
        detach(h22);
        detach(t142);
        detach(p28);
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
