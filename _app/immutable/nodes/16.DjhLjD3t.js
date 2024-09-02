import { s as safe_not_equal, j as src_url_equal, n as noop } from "../chunks/scheduler.DwkGEAYb.js";
import { S as SvelteComponent, i as init, e as element, s as space, H as HtmlTagHydration, c as claim_element, k as get_svelte_dataset, f as claim_space, l as claim_html_tag, m as attr, C as set_style, g as insert_hydration, d as detach } from "../chunks/index.BoYP9eQs.js";
const forAwaitOfCompat = "" + new URL("../assets/for-await-of-compat._bERJMJ2.webp", import.meta.url).href;
const forAwaitOfCompatSize = {
  width: 1575,
  height: 588
};
const forAwaitOfCompatColor = "#dfdedf";
const RawStreamGif = "" + new URL("../assets/raw-stream.DkUx9HyX.gif", import.meta.url).href;
const RawStreamGifSize = {
  width: 1146,
  height: 906
};
const RawStreamGifColor = "#e0e3df";
const TextStreamGif = "" + new URL("../assets/text-stream.BFOpZF0n.gif", import.meta.url).href;
const TextStreamGifSize = {
  width: 818,
  height: 568
};
const TextStreamGifColor = "#e2e4d7";
const ParseResultValueStreamGif = "" + new URL("../assets/parse-result-value-stream.Boa0oDeb.gif", import.meta.url).href;
const ParseResultValueStreamGifSize = {
  width: 818,
  height: 568
};
const ParseResultValueStreamGifColor = "#f2f3ac";
const FinalStreamGif = "" + new URL("../assets/final-stream.BHcIhiV8.gif", import.meta.url).href;
const FinalStreamGifSize = {
  width: 1178,
  height: 568
};
const FinalStreamGifColor = "#e2e5d8";
const NonStreamLoadGif = "" + new URL("../assets/non-stream-load.BSLSw6KO.gif", import.meta.url).href;
const NonStreamLoadGifSize = {
  width: 1178,
  height: 788
};
const NonStreamLoadGifColor = "#ecedcc";
const StreamLoadGif = "" + new URL("../assets/stream-load.CH72huFO.gif", import.meta.url).href;
const StreamLoadGifSize = {
  width: 1178,
  height: 788
};
const StreamLoadGifColor = "#ededcd";
function create_fragment(ctx) {
  let h1;
  let textContent = `<a href="#the-better-way-to-load-data">The Better Way to load data</a>`;
  let t1;
  let p0;
  let textContent_1 = "When we are loading lists in out web-apps, we usually do the following. Our app makes a fetch request to a server, waits for all the data to arrive, maybe the app validates it, and then displays the items.";
  let t3;
  let html_tag;
  let raw0_value = `<pre class="shiki vitesse-dark twoslash lsp" style="background-color:#121212;color:#dbd7caee" tabindex="0"><code><span class="line"><span style="color:#4D9375">import</span><span style="color:#666666"> &#123;</span><span style="color:#BD976A"> </span><span style="color:#BD976A"><span class="twoslash-hover"><span class="twoslash-popup-container"><code class="twoslash-popup-code"><pre class="shiki vitesse-dark" style="background-color:#121212;color:#dbd7caee" tabindex="0"><code><span class="line"><span style="color:#CB7676">const </span><span style="color:#BD976A">TodosSchema</span><span style="color:#666666">: </span><span style="color:#5DA994">z</span><span style="color:#666666">.</span><span style="color:#5DA994">ZodArray</span><span style="color:#666666">&#x3C;</span><span style="color:#5DA994">z</span><span style="color:#666666">.</span><span style="color:#5DA994">ZodObject</span><span style="color:#666666">&#x3C;&#123;</span></span>
<span class="line"><span style="color:#BD976A">    description</span><span style="color:#666666">: </span><span style="color:#5DA994">z</span><span style="color:#666666">.</span><span style="color:#5DA994">ZodString</span><span style="color:#666666">;</span></span>
<span class="line"><span style="color:#BD976A">    done</span><span style="color:#666666">: </span><span style="color:#5DA994">z</span><span style="color:#666666">.</span><span style="color:#5DA994">ZodBoolean</span><span style="color:#666666">;</span></span>
<span class="line"><span style="color:#666666">&#125;, </span><span style="color:#C98A7D99">"</span><span style="color:#C98A7D">strip</span><span style="color:#C98A7D99">"</span><span style="color:#666666">, </span><span style="color:#5DA994">z</span><span style="color:#666666">.</span><span style="color:#5DA994">ZodTypeAny</span><span style="color:#666666">, &#123;</span></span>
<span class="line"><span style="color:#BD976A">    description</span><span style="color:#666666">: </span><span style="color:#5DA994">string</span><span style="color:#666666">;</span></span>
<span class="line"><span style="color:#BD976A">    done</span><span style="color:#666666">: </span><span style="color:#5DA994">boolean</span><span style="color:#666666">;</span></span>
<span class="line"><span style="color:#666666">&#125;, &#123;</span></span>
<span class="line"><span style="color:#BD976A">    description</span><span style="color:#666666">: </span><span style="color:#5DA994">string</span><span style="color:#666666">;</span></span>
<span class="line"><span style="color:#BD976A">    done</span><span style="color:#666666">: </span><span style="color:#5DA994">boolean</span><span style="color:#666666">;</span></span>
<span class="line"><span style="color:#666666">&#125;>, </span><span style="color:#C98A7D99">"</span><span style="color:#C98A7D">many</span><span style="color:#C98A7D99">"</span><span style="color:#666666">></span></span></code></pre></code></span>TodosSchema</span></span><span style="color:#666666">,</span><span style="color:#4D9375"> type</span><span style="color:#BD976A"> </span><span style="color:#BD976A"><span class="twoslash-hover"><span class="twoslash-popup-container"><code class="twoslash-popup-code"><pre class="shiki vitesse-dark" style="background-color:#121212;color:#dbd7caee" tabindex="0"><code><span class="line"><span style="color:#CB7676">type</span><span style="color:#5DA994"> Todo</span><span style="color:#666666"> =</span><span style="color:#666666"> &#123;</span></span>
<span class="line"><span style="color:#BD976A">    description</span><span style="color:#666666">: </span><span style="color:#5DA994">string</span><span style="color:#666666">;</span></span>
<span class="line"><span style="color:#BD976A">    done</span><span style="color:#666666">: </span><span style="color:#5DA994">boolean</span><span style="color:#666666">;</span></span>
<span class="line"><span style="color:#666666">&#125;</span></span></code></pre></code></span>Todo</span></span><span style="color:#666666"> &#125;</span><span style="color:#4D9375"> from</span><span style="color:#C98A7D99"> "</span><span style="color:#C98A7D">./model</span><span style="color:#C98A7D99">"</span></span>
<span class="line"><span style="color:#4D9375">import</span><span style="color:#666666"> &#123;</span><span style="color:#BD976A"> </span><span style="color:#BD976A"><span class="twoslash-hover"><span class="twoslash-popup-container"><code class="twoslash-popup-code"><span style="color:#CB7676">function</span><span style="color:#80A665"> display</span><span style="color:#666666">(</span><span style="color:#BD976A">todo</span><span style="color:#666666">: </span><span style="color:#5DA994">Todo</span><span style="color:#666666">):</span><span style="color:#5DA994"> void</span></code></span>display</span></span><span style="color:#666666"> &#125;</span><span style="color:#4D9375"> from</span><span style="color:#C98A7D99"> "</span><span style="color:#C98A7D">./render</span><span style="color:#C98A7D99">"</span></span>
<span class="line"></span>
<span class="line"><span style="color:#CB7676">const </span><span style="color:#BD976A"><span class="twoslash-hover"><span class="twoslash-popup-container"><code class="twoslash-popup-code"><span style="color:#CB7676">const </span><span style="color:#BD976A">response</span><span style="color:#666666">: </span><span style="color:#5DA994">Response</span></code></span>response</span></span><span style="color:#666666"> =</span><span style="color:#4D9375"> await</span><span style="color:#80A665"> </span><span style="color:#80A665"><span class="twoslash-hover"><span class="twoslash-popup-container"><code class="twoslash-popup-code"><span style="color:#CB7676">function</span><span style="color:#80A665"> fetch</span><span style="color:#666666">(</span><span style="color:#BD976A">input</span><span style="color:#666666">: </span><span style="color:#5DA994">string</span><span style="color:#666666"> | </span><span style="color:#5DA994">URL</span><span style="color:#666666"> | </span><span style="color:#5DA994">Request</span><span style="color:#666666">,</span><span style="color:#BD976A"> init</span><span style="color:#CB7676">?</span><span style="color:#666666">: </span><span style="color:#5DA994">RequestInit</span><span style="color:#666666"> | </span><span style="color:#CB7676">undefined</span><span style="color:#666666">):</span><span style="color:#5DA994"> Promise</span><span style="color:#666666">&#x3C;</span><span style="color:#5DA994">Response</span><span style="color:#666666">></span><span style="color:#666666"> (</span><span style="color:#DBD7CAEE">+</span><span style="color:#4C9A91">1</span><span style="color:#5DA994"> overload</span><span style="color:#666666">)</span></code></span>fetch</span></span><span style="color:#666666">(</span><span style="color:#C98A7D99">"</span><span style="color:#C98A7D">/todos</span><span style="color:#C98A7D99">"</span><span style="color:#666666">);</span><span style="color:#758575DD">    //fetch</span></span>
<span class="line"><span style="color:#CB7676">const </span><span style="color:#BD976A"><span class="twoslash-hover"><span class="twoslash-popup-container"><code class="twoslash-popup-code"><span style="color:#CB7676">const </span><span style="color:#BD976A">data</span><span style="color:#666666">: </span><span style="color:#5DA994">any</span></code></span>data</span></span><span style="color:#666666"> =</span><span style="color:#4D9375"> await</span><span style="color:#BD976A"> </span><span style="color:#BD976A"><span class="twoslash-hover"><span class="twoslash-popup-container"><code class="twoslash-popup-code"><span style="color:#CB7676">const </span><span style="color:#BD976A">response</span><span style="color:#666666">: </span><span style="color:#5DA994">Response</span></code></span>response</span></span><span style="color:#666666">.</span><span style="color:#80A665"><span class="twoslash-hover"><span class="twoslash-popup-container"><code class="twoslash-popup-code"><span style="color:#BD976A">Body</span><span style="color:#666666">.</span><span style="color:#80A665">json</span><span style="color:#666666">()</span><span style="color:#DBD7CAEE">: </span><span style="color:#B8A965">Promise</span><span style="color:#666666">&#x3C;</span><span style="color:#BD976A">any</span><span style="color:#666666">></span></code></span>json</span></span><span style="color:#666666">();</span><span style="color:#758575DD">        //wait</span></span>
<span class="line"><span style="color:#CB7676">const </span><span style="color:#BD976A"><span class="twoslash-hover"><span class="twoslash-popup-container"><code class="twoslash-popup-code"><pre class="shiki vitesse-dark" style="background-color:#121212;color:#dbd7caee" tabindex="0"><code><span class="line"><span style="color:#CB7676">const </span><span style="color:#BD976A">todos</span><span style="color:#666666">: &#123;</span></span>
<span class="line"><span style="color:#BD976A">    description</span><span style="color:#666666">: </span><span style="color:#5DA994">string</span><span style="color:#666666">;</span></span>
<span class="line"><span style="color:#BD976A">    done</span><span style="color:#666666">: </span><span style="color:#5DA994">boolean</span><span style="color:#666666">;</span></span>
<span class="line"><span style="color:#666666">&#125;[]</span></span></code></pre></code></span>todos</span></span><span style="color:#666666"> =</span><span style="color:#BD976A"> </span><span style="color:#BD976A"><span class="twoslash-hover"><span class="twoslash-popup-container"><code class="twoslash-popup-code"><pre class="shiki vitesse-dark" style="background-color:#121212;color:#dbd7caee" tabindex="0"><code><span class="line"><span style="color:#CB7676">const </span><span style="color:#BD976A">TodosSchema</span><span style="color:#666666">: </span><span style="color:#5DA994">z</span><span style="color:#666666">.</span><span style="color:#5DA994">ZodArray</span><span style="color:#666666">&#x3C;</span><span style="color:#5DA994">z</span><span style="color:#666666">.</span><span style="color:#5DA994">ZodObject</span><span style="color:#666666">&#x3C;&#123;</span></span>
<span class="line"><span style="color:#BD976A">    description</span><span style="color:#666666">: </span><span style="color:#5DA994">z</span><span style="color:#666666">.</span><span style="color:#5DA994">ZodString</span><span style="color:#666666">;</span></span>
<span class="line"><span style="color:#BD976A">    done</span><span style="color:#666666">: </span><span style="color:#5DA994">z</span><span style="color:#666666">.</span><span style="color:#5DA994">ZodBoolean</span><span style="color:#666666">;</span></span>
<span class="line"><span style="color:#666666">&#125;, </span><span style="color:#C98A7D99">"</span><span style="color:#C98A7D">strip</span><span style="color:#C98A7D99">"</span><span style="color:#666666">, </span><span style="color:#5DA994">z</span><span style="color:#666666">.</span><span style="color:#5DA994">ZodTypeAny</span><span style="color:#666666">, &#123;</span></span>
<span class="line"><span style="color:#BD976A">    description</span><span style="color:#666666">: </span><span style="color:#5DA994">string</span><span style="color:#666666">;</span></span>
<span class="line"><span style="color:#BD976A">    done</span><span style="color:#666666">: </span><span style="color:#5DA994">boolean</span><span style="color:#666666">;</span></span>
<span class="line"><span style="color:#666666">&#125;, &#123;</span></span>
<span class="line"><span style="color:#BD976A">    description</span><span style="color:#666666">: </span><span style="color:#5DA994">string</span><span style="color:#666666">;</span></span>
<span class="line"><span style="color:#BD976A">    done</span><span style="color:#666666">: </span><span style="color:#5DA994">boolean</span><span style="color:#666666">;</span></span>
<span class="line"><span style="color:#666666">&#125;>, </span><span style="color:#C98A7D99">"</span><span style="color:#C98A7D">many</span><span style="color:#C98A7D99">"</span><span style="color:#666666">></span></span></code></pre></code></span>TodosSchema</span></span><span style="color:#666666">.</span><span style="color:#80A665"><span class="twoslash-hover"><span class="twoslash-popup-container"><code class="twoslash-popup-code"><pre class="shiki vitesse-dark" style="background-color:#121212;color:#dbd7caee" tabindex="0"><code><span class="line"><span style="color:#BD976A">ZodType</span><span style="color:#666666">&#x3C;&#123;</span><span style="color:#80A665"> description</span><span style="color:#666666">:</span><span style="color:#BD976A"> string</span><span style="color:#666666">;</span><span style="color:#80A665"> done</span><span style="color:#666666">:</span><span style="color:#BD976A"> boolean</span><span style="color:#666666">;</span><span style="color:#666666"> &#125;[],</span><span style="color:#BD976A"> ZodArrayDef</span><span style="color:#666666">&#x3C;</span><span style="color:#BD976A">ZodObject</span><span style="color:#666666">&#x3C;&#123;</span><span style="color:#80A665"> description</span><span style="color:#666666">:</span><span style="color:#BD976A"> ZodString</span><span style="color:#666666">;</span><span style="color:#80A665"> done</span><span style="color:#666666">:</span><span style="color:#BD976A"> ZodBoolean</span><span style="color:#666666">;</span><span style="color:#666666"> &#125;,</span><span style="color:#C98A7D99"> "</span><span style="color:#C98A7D">strip</span><span style="color:#C98A7D99">"</span><span style="color:#666666">,</span><span style="color:#BD976A"> ZodTypeAny</span><span style="color:#666666">, &#123; </span><span style="color:#B8A965">description</span><span style="color:#666666">: </span><span style="color:#BD976A">string</span><span style="color:#666666">; </span><span style="color:#BD976A">done</span><span style="color:#666666">: </span><span style="color:#BD976A">boolean</span><span style="color:#666666">; &#125;, &#123; ...; &#125;</span><span style="color:#CB7676">>></span><span style="color:#666666">, &#123; ...; &#125;[]>.</span><span style="color:#80A665">parse</span><span style="color:#666666">(</span><span style="color:#BD976A">data</span><span style="color:#DBD7CAEE">: </span><span style="color:#BD976A">unknown</span><span style="color:#666666">,</span><span style="color:#BD976A"> params</span><span style="color:#CB7676">?:</span><span style="color:#BD976A"> Partial</span><span style="color:#666666">&#x3C;</span><span style="color:#BD976A">ParseParams</span><span style="color:#666666">></span><span style="color:#CB7676"> |</span><span style="color:#CB7676"> undefined</span><span style="color:#666666">)</span><span style="color:#DBD7CAEE">:</span><span style="color:#666666"> &#123;</span></span>
<span class="line"><span style="color:#B8A965">    description</span><span style="color:#666666">: </span><span style="color:#BD976A">string</span><span style="color:#666666">;</span></span>
<span class="line"><span style="color:#BD976A">    done</span><span style="color:#666666">: </span><span style="color:#BD976A">boolean</span><span style="color:#666666">;</span></span>
<span class="line"><span style="color:#666666">&#125;[]</span></span></code></pre></code></span>parse</span></span><span style="color:#666666">(</span><span style="color:#BD976A"><span class="twoslash-hover"><span class="twoslash-popup-container"><code class="twoslash-popup-code"><span style="color:#CB7676">const </span><span style="color:#BD976A">data</span><span style="color:#666666">: </span><span style="color:#5DA994">any</span></code></span>data</span></span><span style="color:#666666">);</span><span style="color:#758575DD">     //validate</span></span>
<span class="line"></span>
<span class="line"><span style="color:#4D9375">for</span><span style="color:#666666"> (</span><span style="color:#CB7676">const </span><span style="color:#BD976A"><span class="twoslash-hover"><span class="twoslash-popup-container"><code class="twoslash-popup-code"><pre class="shiki vitesse-dark" style="background-color:#121212;color:#dbd7caee" tabindex="0"><code><span class="line"><span style="color:#CB7676">const </span><span style="color:#BD976A">todo</span><span style="color:#666666">: &#123;</span></span>
<span class="line"><span style="color:#BD976A">    description</span><span style="color:#666666">: </span><span style="color:#5DA994">string</span><span style="color:#666666">;</span></span>
<span class="line"><span style="color:#BD976A">    done</span><span style="color:#666666">: </span><span style="color:#5DA994">boolean</span><span style="color:#666666">;</span></span>
<span class="line"><span style="color:#666666">&#125;</span></span></code></pre></code></span>todo</span></span><span style="color:#CB7676"> of</span><span style="color:#BD976A"> </span><span style="color:#BD976A"><span class="twoslash-hover"><span class="twoslash-popup-container"><code class="twoslash-popup-code"><pre class="shiki vitesse-dark" style="background-color:#121212;color:#dbd7caee" tabindex="0"><code><span class="line"><span style="color:#CB7676">const </span><span style="color:#BD976A">todos</span><span style="color:#666666">: &#123;</span></span>
<span class="line"><span style="color:#BD976A">    description</span><span style="color:#666666">: </span><span style="color:#5DA994">string</span><span style="color:#666666">;</span></span>
<span class="line"><span style="color:#BD976A">    done</span><span style="color:#666666">: </span><span style="color:#5DA994">boolean</span><span style="color:#666666">;</span></span>
<span class="line"><span style="color:#666666">&#125;[]</span></span></code></pre></code></span>todos</span></span><span style="color:#666666">)</span><span style="color:#666666"> &#123;</span></span>
<span class="line"><span style="color:#80A665">	</span><span style="color:#80A665"><span class="twoslash-hover"><span class="twoslash-popup-container"><code class="twoslash-popup-code"><pre class="shiki vitesse-dark" style="background-color:#121212;color:#dbd7caee" tabindex="0"><code><span class="line"><span style="color:#CB7676">function</span><span style="color:#80A665"> display</span><span style="color:#666666">(</span><span style="color:#BD976A">todo</span><span style="color:#666666">: &#123;</span></span>
<span class="line"><span style="color:#BD976A">    description</span><span style="color:#666666">: </span><span style="color:#5DA994">string</span><span style="color:#666666">;</span></span>
<span class="line"><span style="color:#BD976A">    done</span><span style="color:#666666">: </span><span style="color:#5DA994">boolean</span><span style="color:#666666">;</span></span>
<span class="line"><span style="color:#666666">&#125;):</span><span style="color:#5DA994"> void</span></span></code></pre></code></span>display</span></span><span style="color:#666666">(</span><span style="color:#BD976A"><span class="twoslash-hover"><span class="twoslash-popup-container"><code class="twoslash-popup-code"><pre class="shiki vitesse-dark" style="background-color:#121212;color:#dbd7caee" tabindex="0"><code><span class="line"><span style="color:#CB7676">const </span><span style="color:#BD976A">todo</span><span style="color:#666666">: &#123;</span></span>
<span class="line"><span style="color:#BD976A">    description</span><span style="color:#666666">: </span><span style="color:#5DA994">string</span><span style="color:#666666">;</span></span>
<span class="line"><span style="color:#BD976A">    done</span><span style="color:#666666">: </span><span style="color:#5DA994">boolean</span><span style="color:#666666">;</span></span>
<span class="line"><span style="color:#666666">&#125;</span></span></code></pre></code></span>todo</span></span><span style="color:#666666">);</span></span>
<span class="line"><span style="color:#666666">&#125;</span></span></code></pre>`;
  let t4;
  let p1;
  let textContent_2 = "But what if there are hundreds of items and the connection to the server is slow. If we wait for the entire response to arrive the user is going to see absolutely nothing for several seconds, and then see all the items at once. This feels sluggish. Unfortunately, for anyone taking the subway, this is a daily experience.";
  let t6;
  let img0;
  let img0_src_value;
  let t7;
  let p2;
  let textContent_3 = "There might be a better way though. We don’t actually need to wait for all the data before we start displaying it. Once the data for the first item has made it over the network, we should be able display it. Having the items trickle in as the data arrives over the network would be a much nicer user experience.";
  let t9;
  let p3;
  let textContent_4 = "In this post we are going to implement this using streams.";
  let t11;
  let blockquote0;
  let textContent_5 = `<p>Quick note: In the Javascript world there are two different Stream APIs: Node Streams, and Web streams. Node Streams only work in Node, whereas Web Streams work both in Browsers and Node. Also, web-streams are sometimes called WHATWG-streams, after the standards organisation, It’s a mess.</p> <p>We will be using web-streams.</p>`;
  let t15;
  let p6;
  let textContent_6 = "Fortunately this won’t be that hard.";
  let t17;
  let p7;
  let textContent_7 = `Our trusty fetch API is designed to make streaming easy. <code>response.body</code> is actually a stream that will give you access to the raw data coming in over the network, as it is coming in.`;
  let t21;
  let p8;
  let textContent_8 = "Let’s visualise that by logging each chunk of data as it arrives.\nWe can access a stream’s data by getting it’s reader and waiting for a value to arrive. Once a value arrives we log it and again wait for the next value, and then the next value, etc, until the stream is done.";
  let t23;
  let html_tag_1;
  let raw1_value = `<pre class="shiki vitesse-dark twoslash lsp" style="background-color:#121212;color:#dbd7caee" tabindex="0"><code><span class="line"><span style="color:#CB7676">const </span><span style="color:#BD976A"><span class="twoslash-hover"><span class="twoslash-popup-container"><code class="twoslash-popup-code"><span style="color:#CB7676">const </span><span style="color:#BD976A">response</span><span style="color:#666666">: </span><span style="color:#5DA994">Response</span></code></span>response</span></span><span style="color:#666666"> =</span><span style="color:#4D9375"> await</span><span style="color:#80A665"> </span><span style="color:#80A665"><span class="twoslash-hover"><span class="twoslash-popup-container"><code class="twoslash-popup-code"><span style="color:#CB7676">function</span><span style="color:#80A665"> fetch</span><span style="color:#666666">(</span><span style="color:#BD976A">input</span><span style="color:#666666">: </span><span style="color:#5DA994">string</span><span style="color:#666666"> | </span><span style="color:#5DA994">URL</span><span style="color:#666666"> | </span><span style="color:#5DA994">Request</span><span style="color:#666666">,</span><span style="color:#BD976A"> init</span><span style="color:#CB7676">?</span><span style="color:#666666">: </span><span style="color:#5DA994">RequestInit</span><span style="color:#666666"> | </span><span style="color:#CB7676">undefined</span><span style="color:#666666">):</span><span style="color:#5DA994"> Promise</span><span style="color:#666666">&#x3C;</span><span style="color:#5DA994">Response</span><span style="color:#666666">></span><span style="color:#666666"> (</span><span style="color:#DBD7CAEE">+</span><span style="color:#4C9A91">1</span><span style="color:#5DA994"> overload</span><span style="color:#666666">)</span></code></span>fetch</span></span><span style="color:#666666">(</span><span style="color:#C98A7D99">'</span><span style="color:#C98A7D">/list</span><span style="color:#C98A7D99">'</span><span style="color:#666666">);</span></span>
<span class="line"><span style="color:#CB7676">const </span><span style="color:#BD976A"><span class="twoslash-hover"><span class="twoslash-popup-container"><code class="twoslash-popup-code"><span style="color:#CB7676">const </span><span style="color:#BD976A">stream</span><span style="color:#666666">: </span><span style="color:#5DA994">ReadableStream</span><span style="color:#666666">&#x3C;</span><span style="color:#5DA994">Uint8Array</span><span style="color:#666666">></span></code></span>stream</span></span><span style="color:#666666"> =</span><span style="color:#BD976A"> </span><span style="color:#BD976A"><span class="twoslash-hover"><span class="twoslash-popup-container"><code class="twoslash-popup-code"><span style="color:#CB7676">const </span><span style="color:#BD976A">response</span><span style="color:#666666">: </span><span style="color:#5DA994">Response</span></code></span>response</span></span><span style="color:#666666">.</span><span style="color:#BD976A"><span class="twoslash-hover"><span class="twoslash-popup-container"><code class="twoslash-popup-code"><span style="color:#BD976A">Body</span><span style="color:#666666">.</span><span style="color:#BD976A">body</span><span style="color:#DBD7CAEE">: </span><span style="color:#BD976A">ReadableStream</span><span style="color:#666666">&#x3C;</span><span style="color:#BD976A">Uint8Array</span><span style="color:#666666">></span><span style="color:#CB7676"> |</span><span style="color:#CB7676"> null</span></code></span>body</span></span><span style="color:#CB7676">!</span><span style="color:#666666">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#CB7676">const </span><span style="color:#BD976A"><span class="twoslash-hover"><span class="twoslash-popup-container"><code class="twoslash-popup-code"><span style="color:#CB7676">const </span><span style="color:#BD976A">reader</span><span style="color:#666666">: </span><span style="color:#5DA994">ReadableStreamDefaultReader</span><span style="color:#666666">&#x3C;</span><span style="color:#5DA994">Uint8Array</span><span style="color:#666666">></span></code></span>reader</span></span><span style="color:#666666"> =</span><span style="color:#BD976A"> </span><span style="color:#BD976A"><span class="twoslash-hover"><span class="twoslash-popup-container"><code class="twoslash-popup-code"><span style="color:#CB7676">const </span><span style="color:#BD976A">stream</span><span style="color:#666666">: </span><span style="color:#5DA994">ReadableStream</span><span style="color:#666666">&#x3C;</span><span style="color:#5DA994">Uint8Array</span><span style="color:#666666">></span></code></span>stream</span></span><span style="color:#666666">.</span><span style="color:#80A665"><span class="twoslash-hover"><span class="twoslash-popup-container"><code class="twoslash-popup-code"><span style="color:#BD976A">ReadableStream</span><span style="color:#666666">&#x3C;</span><span style="color:#BD976A">Uint8Array</span><span style="color:#666666">>.</span><span style="color:#80A665">getReader</span><span style="color:#666666">()</span><span style="color:#DBD7CAEE">: </span><span style="color:#80A665">ReadableStreamDefaultReader</span><span style="color:#666666">&#x3C;</span><span style="color:#5DA994">Uint8Array</span><span style="color:#666666">></span><span style="color:#666666"> (</span><span style="color:#CB7676">+</span><span style="color:#4C9A91">2</span><span style="color:#BD976A"> overloads</span><span style="color:#666666">)</span></code></span>getReader</span></span><span style="color:#666666">();</span><span style="color:#758575DD"> //Get reader (boilerplate)</span></span>
<span class="line"><span style="color:#4D9375">while</span><span style="color:#666666"> (</span><span style="color:#4D9375">true</span><span style="color:#666666">)</span><span style="color:#666666"> &#123;</span></span>
<span class="line"><span style="color:#CB7676">	const </span><span style="color:#666666">&#123;</span><span style="color:#BD976A"> </span><span style="color:#BD976A"><span class="twoslash-hover"><span class="twoslash-popup-container"><code class="twoslash-popup-code"><span style="color:#CB7676">const </span><span style="color:#BD976A">value</span><span style="color:#666666">: </span><span style="color:#5DA994">Uint8Array</span><span style="color:#666666"> | </span><span style="color:#CB7676">undefined</span></code></span>value</span></span><span style="color:#666666">,</span><span style="color:#BD976A"> </span><span style="color:#BD976A"><span class="twoslash-hover"><span class="twoslash-popup-container"><code class="twoslash-popup-code"><span style="color:#CB7676">const </span><span style="color:#BD976A">done</span><span style="color:#666666">: </span><span style="color:#5DA994">boolean</span></code></span>done</span></span><span style="color:#666666"> &#125;</span><span style="color:#666666"> =</span><span style="color:#4D9375"> await</span><span style="color:#BD976A"> </span><span style="color:#BD976A"><span class="twoslash-hover"><span class="twoslash-popup-container"><code class="twoslash-popup-code"><span style="color:#CB7676">const </span><span style="color:#BD976A">reader</span><span style="color:#666666">: </span><span style="color:#5DA994">ReadableStreamDefaultReader</span><span style="color:#666666">&#x3C;</span><span style="color:#5DA994">Uint8Array</span><span style="color:#666666">></span></code></span>reader</span></span><span style="color:#666666">.</span><span style="color:#80A665"><span class="twoslash-hover"><span class="twoslash-popup-container"><code class="twoslash-popup-code"><span style="color:#BD976A">ReadableStreamDefaultReader</span><span style="color:#666666">&#x3C;</span><span style="color:#BD976A">Uint8Array</span><span style="color:#666666">>.</span><span style="color:#80A665">read</span><span style="color:#666666">()</span><span style="color:#DBD7CAEE">: </span><span style="color:#B8A965">Promise</span><span style="color:#666666">&#x3C;</span><span style="color:#BD976A">ReadableStreamReadResult</span><span style="color:#666666">&#x3C;</span><span style="color:#BD976A">Uint8Array</span><span style="color:#CB7676">>></span></code></span>read</span></span><span style="color:#666666">();</span><span style="color:#758575DD"> //wait for value</span></span>
<span class="line"><span style="color:#4D9375">	if</span><span style="color:#666666"> (</span><span style="color:#BD976A"><span class="twoslash-hover"><span class="twoslash-popup-container"><code class="twoslash-popup-code"><span style="color:#CB7676">const </span><span style="color:#BD976A">done</span><span style="color:#666666">: </span><span style="color:#5DA994">boolean</span></code></span>done</span></span><span style="color:#666666">)</span><span style="color:#4D9375"> break</span><span style="color:#666666">;</span></span>
<span class="line"><span style="color:#BD976A">	</span><span style="color:#BD976A"><span class="twoslash-hover"><span class="twoslash-popup-container"><code class="twoslash-popup-code"><span style="color:#CB7676">var </span><span style="color:#BD976A">console</span><span style="color:#666666">: </span><span style="color:#5DA994">Console</span></code><div class="twoslash-popup-docs">The &#96;console&#96; module provides a simple debugging console that is similar to the
JavaScript console mechanism provided by web browsers.

The module exports two specific components:

* A &#96;Console&#96; class with methods such as &#96;console.log()&#96;, &#96;console.error()&#96; and &#96;console.warn()&#96; that can be used to write to any Node.js stream.
* A global &#96;console&#96; instance configured to write to [&#96;process.stdout&#96;](https://nodejs.org/docs/latest-v22.x/api/process.html#processstdout) and
[&#96;process.stderr&#96;](https://nodejs.org/docs/latest-v22.x/api/process.html#processstderr). The global &#96;console&#96; can be used without calling &#96;require('console')&#96;.

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
&#96;&#96;&#96;</div><div class="twoslash-popup-docs twoslash-popup-docs-tags"><span class="twoslash-popup-docs-tag"><span class="twoslash-popup-docs-tag-name">@see</span><span class="twoslash-popup-docs-tag-value">[source](https://github.com/nodejs/node/blob/v22.x/lib/console.js)</span></span></div></span>console</span></span><span style="color:#666666">.</span><span style="color:#80A665"><span class="twoslash-hover"><span class="twoslash-popup-container"><code class="twoslash-popup-code"><span style="color:#BD976A">Console</span><span style="color:#666666">.</span><span style="color:#80A665">log</span><span style="color:#666666">(</span><span style="color:#BD976A">message</span><span style="color:#CB7676">?:</span><span style="color:#BD976A"> any</span><span style="color:#666666">,</span><span style="color:#666666"> ...</span><span style="color:#BD976A">optionalParams</span><span style="color:#DBD7CAEE">: </span><span style="color:#BD976A">any</span><span style="color:#666666">[])</span><span style="color:#DBD7CAEE">: </span><span style="color:#CB7676">void</span><span style="color:#666666"> (</span><span style="color:#CB7676">+</span><span style="color:#4C9A91">1</span><span style="color:#BD976A"> overload</span><span style="color:#666666">)</span></code><div class="twoslash-popup-docs">Prints to &#96;stdout&#96; with newline. Multiple arguments can be passed, with the
first used as the primary message and all additional used as substitution
values similar to [&#96;printf(3)&#96;](http://man7.org/linux/man-pages/man3/printf.3.html)
(the arguments are all passed to [&#96;util.format()&#96;](https://nodejs.org/docs/latest-v22.x/api/util.html#utilformatformat-args)).

&#96;&#96;&#96;js
const count = 5;
console.log('count: %d', count);
// Prints: count: 5, to stdout
console.log('count:', count);
// Prints: count: 5, to stdout
&#96;&#96;&#96;

See [&#96;util.format()&#96;](https://nodejs.org/docs/latest-v22.x/api/util.html#utilformatformat-args) for more information.</div><div class="twoslash-popup-docs twoslash-popup-docs-tags"><span class="twoslash-popup-docs-tag"><span class="twoslash-popup-docs-tag-name">@since</span><span class="twoslash-popup-docs-tag-value">v0.1.100</span></span></div></span>log</span></span><span style="color:#666666">(</span><span style="color:#BD976A"><span class="twoslash-hover"><span class="twoslash-popup-container"><code class="twoslash-popup-code"><span style="color:#CB7676">const </span><span style="color:#BD976A">value</span><span style="color:#666666">: </span><span style="color:#5DA994">Uint8Array</span></code></span>value</span></span><span style="color:#666666">);</span></span>
<span class="line"><span style="color:#666666">&#125;</span></span></code></pre>`;
  let t24;
  let p9;
  let textContent_9 = `We now see see a bunch of <code>Uint8Arrays</code> in the console. This is the raw binary data arriving over the network.`;
  let t28;
  let img1;
  let img1_src_value;
  let t29;
  let p10;
  let textContent_10 = `But we want text, so let’s convert the raw data to text. We can modify a stream’s data using a TransformStream. A TransformStream takes in a stream, runs some logic on each chunk of data as it arrives, and writes the result to an outgoing stream.
In our case, we want a TransformStream that takes in a stream of raw binary data and outputs a stream of strings. This is such a common task that there actually is a built in one, the <a href="https://developer.mozilla.org/en-US/docs/Web/API/TextDecoderStream" rel="noopener noreferrer" target="_blank"><code>TextDecoderStream</code></a>. Let’s use that. Don’t worry, we will be creating our own TransformStreams later on.`;
  let t33;
  let p11;
  let textContent_11 = `Let’s hook the TextDecoder up to our stream using the <code>pipeThrough</code> method. This will return a new stream with the transform applied.`;
  let t37;
  let html_tag_2;
  let raw2_value = `<pre class="shiki vitesse-dark twoslash lsp" style="background-color:#121212;color:#dbd7caee" tabindex="0"><code><span class="line"><span style="color:#CB7676">const </span><span style="color:#BD976A"><span class="twoslash-hover"><span class="twoslash-popup-container"><code class="twoslash-popup-code"><span style="color:#CB7676">const </span><span style="color:#BD976A">stream</span><span style="color:#666666">: </span><span style="color:#5DA994">ReadableStream</span><span style="color:#666666">&#x3C;</span><span style="color:#5DA994">string</span><span style="color:#666666">></span></code></span>stream</span></span><span style="color:#666666"> =</span><span style="color:#BD976A"> </span><span style="color:#BD976A"><span class="twoslash-hover"><span class="twoslash-popup-container"><code class="twoslash-popup-code"><span style="color:#CB7676">const </span><span style="color:#BD976A">request</span><span style="color:#666666">: </span><span style="color:#5DA994">Request</span></code></span>request</span></span><span style="color:#666666">.</span><span style="color:#BD976A"><span class="twoslash-hover"><span class="twoslash-popup-container"><code class="twoslash-popup-code"><span style="color:#BD976A">Body</span><span style="color:#666666">.</span><span style="color:#BD976A">body</span><span style="color:#DBD7CAEE">: </span><span style="color:#BD976A">ReadableStream</span><span style="color:#666666">&#x3C;</span><span style="color:#BD976A">Uint8Array</span><span style="color:#666666">></span><span style="color:#CB7676"> |</span><span style="color:#CB7676"> null</span></code></span>body</span></span><span style="color:#CB7676">!</span><span style="color:#666666">.</span><span style="color:#80A665"><span class="twoslash-hover"><span class="twoslash-popup-container"><code class="twoslash-popup-code"><span style="color:#BD976A">ReadableStream</span><span style="color:#666666">&#x3C;</span><span style="color:#BD976A">Uint8Array</span><span style="color:#666666">>.</span><span style="color:#80A665">pipeThrough</span><span style="color:#666666">&#x3C;</span><span style="color:#5DA994">string</span><span style="color:#666666">>(</span><span style="color:#BD976A">transform</span><span style="color:#DBD7CAEE">: </span><span style="color:#BD976A">ReadableWritablePair</span><span style="color:#666666">&#x3C;</span><span style="color:#BD976A">string</span><span style="color:#666666">,</span><span style="color:#BD976A"> Uint8Array</span><span style="color:#666666">>,</span><span style="color:#BD976A"> options</span><span style="color:#CB7676">?:</span><span style="color:#BD976A"> StreamPipeOptions</span><span style="color:#CB7676"> |</span><span style="color:#CB7676"> undefined</span><span style="color:#666666">)</span><span style="color:#DBD7CAEE">: </span><span style="color:#BD976A">ReadableStream</span><span style="color:#666666">&#x3C;</span><span style="color:#BD976A">string</span><span style="color:#666666">></span></code></span>pipeThrough</span></span><span style="color:#666666">(</span><span style="color:#CB7676">new </span><span style="color:#80A665"><span class="twoslash-hover"><span class="twoslash-popup-container"><code class="twoslash-popup-code"><span style="color:#CB7676">var </span><span style="color:#BD976A">TextDecoderStream</span><span style="color:#666666">: </span><span style="color:#4D9375">new</span><span style="color:#666666"> (</span><span style="color:#BD976A">label</span><span style="color:#CB7676">?</span><span style="color:#666666">: </span><span style="color:#5DA994">string</span><span style="color:#666666"> | </span><span style="color:#CB7676">undefined</span><span style="color:#666666">, </span><span style="color:#BD976A">options</span><span style="color:#CB7676">?</span><span style="color:#666666">: </span><span style="color:#5DA994">TextDecoderOptions</span><span style="color:#666666"> | </span><span style="color:#CB7676">undefined</span><span style="color:#666666">) => </span><span style="color:#5DA994">TextDecoderStream</span></code><div class="twoslash-popup-docs">&#96;TextDecoderStream&#96; class is a global reference for &#96;require('stream/web').TextDecoderStream&#96;.
https://nodejs.org/api/globals.html#class-textdecoderstream</div><div class="twoslash-popup-docs twoslash-popup-docs-tags"><span class="twoslash-popup-docs-tag"><span class="twoslash-popup-docs-tag-name">@since</span><span class="twoslash-popup-docs-tag-value">v18.0.0</span></span></div></span>TextDecoderStream</span></span><span style="color:#666666">());</span></span></code></pre>`;
  let t38;
  let p12;
  let textContent_12 = "We now have a bunch of readable strings in the console.";
  let t40;
  let img2;
  let img2_src_value;
  let t41;
  let p13;
  let textContent_13 = `But we really want a stream of objects that represent our items. We can’t just <code>JSON.parse</code> each string-chunk, they don’t line up with the JSON structure; What we need is a streaming JSON parser.`;
  let t45;
  let p14;
  let textContent_14 = `Writing our own would be hard and undifferentiated work, so instead we’re going to use a library. There is a fantastic one called <a href="https://www.npmjs.com/package/@streamparser/json-whatwg" rel="noopener noreferrer" target="_blank"><code>@streamparser/json-whatwg</code></a> which can create a TransformStream that takes in json-data and returns parsed objects.`;
  let t49;
  let html_tag_3;
  let raw3_value = `<pre class="shiki vitesse-dark" style="background-color:#121212;color:#dbd7caee" tabindex="0"><code><span class="line"><span style="color:#80A665">npm</span><span style="color:#C98A7D"> install</span><span style="color:#C98A7D"> @streamparser/json-whatwg</span></span></code></pre>`;
  let t50;
  let p15;
  let textContent_15 = `We can initialise the TransformStream using the <code>JSONParser</code> constructor. We want each object in our todo-array to be emitted one after the other as they trickle in so let’s configure the parser for that. We can provide a pattern of which paths should be emitted as the <code>paths</code> option; like a regex that runs on the paths. We want each child of the top-level array to be emitted. This can be expressed using the <code>$.*</code> pattern. The dollar-sign is always the top-level object, the array in our case, and the star is a wildcard that matches each direct child.`;
  let t58;
  let p16;
  let textContent_16 = `Let’s add this parser to our stream-chain. This parser can also do the text-decoding internally so we don’t need the <code>TextDecoderStream</code> anymore.`;
  let t62;
  let html_tag_4;
  let raw4_value = `<pre class="shiki vitesse-dark twoslash lsp" style="background-color:#121212;color:#dbd7caee" tabindex="0"><code><span class="line"><span style="color:#4D9375">import</span><span style="color:#666666"> &#123;</span><span style="color:#BD976A"> </span><span style="color:#BD976A"><span class="twoslash-hover"><span class="twoslash-popup-container"><code class="twoslash-popup-code"><span style="color:#CB7676">class</span><span style="color:#5DA994"> JSONParser</span></code></span>JSONParser</span></span><span style="color:#666666"> &#125;</span><span style="color:#4D9375"> from</span><span style="color:#C98A7D99"> "</span><span style="color:#C98A7D">@streamparser/json-whatwg</span><span style="color:#C98A7D99">"</span></span>
<span class="line"><span style="color:#758575DD">// ...</span></span>
<span class="line"><span style="color:#CB7676">const </span><span style="color:#BD976A"><span class="twoslash-hover"><span class="twoslash-popup-container"><code class="twoslash-popup-code"><span style="color:#CB7676">const </span><span style="color:#BD976A">parser</span><span style="color:#666666">: </span><span style="color:#5DA994">JSONParser</span></code></span>parser</span></span><span style="color:#666666"> =</span><span style="color:#CB7676"> new </span><span style="color:#80A665"><span class="twoslash-hover"><span class="twoslash-popup-container"><code class="twoslash-popup-code"><span style="color:#CB7676">new</span><span style="color:#80A665"> JSONParser</span><span style="color:#666666">(</span><span style="color:#BD976A">opts</span><span style="color:#CB7676">?:</span><span style="color:#BD976A"> JSONParserOptions</span><span style="color:#CB7676"> |</span><span style="color:#CB7676"> undefined</span><span style="color:#666666">,</span><span style="color:#BD976A"> writableStrategy</span><span style="color:#CB7676">?:</span><span style="color:#BD976A"> QueuingStrategy</span><span style="color:#666666">&#x3C;</span><span style="color:#BD976A">any</span><span style="color:#666666">></span><span style="color:#CB7676"> |</span><span style="color:#CB7676"> undefined</span><span style="color:#666666">,</span><span style="color:#BD976A"> readableStrategy</span><span style="color:#CB7676">?:</span><span style="color:#BD976A"> QueuingStrategy</span><span style="color:#666666">&#x3C;</span><span style="color:#BD976A">any</span><span style="color:#666666">></span><span style="color:#CB7676"> |</span><span style="color:#CB7676"> undefined</span><span style="color:#666666">)</span><span style="color:#DBD7CAEE">: </span><span style="color:#BD976A">JSONParser</span></code></span>JSONParser</span></span><span style="color:#666666">(&#123; </span><span style="color:#B8A965"><span class="twoslash-hover"><span class="twoslash-popup-container"><code class="twoslash-popup-code"><span style="color:#BD976A">TokenParserOptions</span><span style="color:#666666">.</span><span style="color:#BD976A">paths</span><span style="color:#CB7676">?:</span><span style="color:#BD976A"> string</span><span style="color:#666666">[]</span><span style="color:#CB7676"> |</span><span style="color:#CB7676"> undefined</span></code></span>paths</span></span><span style="color:#666666">: [</span><span style="color:#C98A7D99">"</span><span style="color:#C98A7D">$.*</span><span style="color:#C98A7D99">"</span><span style="color:#666666">] &#125;)</span></span>
<span class="line"><span style="color:#CB7676">const </span><span style="color:#BD976A"><span class="twoslash-hover"><span class="twoslash-popup-container"><code class="twoslash-popup-code"><span style="color:#CB7676">const </span><span style="color:#BD976A">stream</span><span style="color:#666666">: </span><span style="color:#5DA994">ReadableStream</span><span style="color:#666666">&#x3C;</span><span style="color:#5DA994">ParsedElementInfo</span><span style="color:#666666">></span></code></span>stream</span></span><span style="color:#666666"> =</span><span style="color:#BD976A"> </span><span style="color:#BD976A"><span class="twoslash-hover"><span class="twoslash-popup-container"><code class="twoslash-popup-code"><span style="color:#CB7676">const </span><span style="color:#BD976A">response</span><span style="color:#666666">: </span><span style="color:#5DA994">Response</span></code></span>response</span></span><span style="color:#666666">.</span><span style="color:#BD976A"><span class="twoslash-hover"><span class="twoslash-popup-container"><code class="twoslash-popup-code"><span style="color:#BD976A">Body</span><span style="color:#666666">.</span><span style="color:#BD976A">body</span><span style="color:#DBD7CAEE">: </span><span style="color:#BD976A">ReadableStream</span><span style="color:#666666">&#x3C;</span><span style="color:#BD976A">Uint8Array</span><span style="color:#666666">></span><span style="color:#CB7676"> |</span><span style="color:#CB7676"> null</span></code></span>body</span></span><span style="color:#CB7676">!</span></span>
<span class="line"><span style="color:#666666">	.</span><span style="color:#80A665"><span class="twoslash-hover"><span class="twoslash-popup-container"><code class="twoslash-popup-code"><span style="color:#BD976A">ReadableStream</span><span style="color:#666666">&#x3C;</span><span style="color:#BD976A">Uint8Array</span><span style="color:#666666">>.</span><span style="color:#80A665">pipeThrough</span><span style="color:#666666">&#x3C;</span><span style="color:#5DA994">ParsedElementInfo</span><span style="color:#666666">>(</span><span style="color:#BD976A">transform</span><span style="color:#DBD7CAEE">: </span><span style="color:#BD976A">ReadableWritablePair</span><span style="color:#666666">&#x3C;</span><span style="color:#BD976A">ParsedElementInfo</span><span style="color:#666666">,</span><span style="color:#BD976A"> Uint8Array</span><span style="color:#666666">>,</span><span style="color:#BD976A"> options</span><span style="color:#CB7676">?:</span><span style="color:#BD976A"> StreamPipeOptions</span><span style="color:#CB7676"> |</span><span style="color:#CB7676"> undefined</span><span style="color:#666666">)</span><span style="color:#DBD7CAEE">: </span><span style="color:#BD976A">ReadableStream</span><span style="color:#666666">&#x3C;</span><span style="color:#BD976A">ParsedElementInfo</span><span style="color:#666666">></span></code></span>pipeThrough</span></span><span style="color:#666666">(</span><span style="color:#BD976A"><span class="twoslash-hover"><span class="twoslash-popup-container"><code class="twoslash-popup-code"><span style="color:#CB7676">const </span><span style="color:#BD976A">parser</span><span style="color:#666666">: </span><span style="color:#5DA994">JSONParser</span></code></span>parser</span></span><span style="color:#666666">)</span></span></code></pre>`;
  let t63;
  let blockquote1;
  let textContent_17 = `<p>Optional Performance optimization: Add <code>keepStack: false, stringBufferSize: undefined</code> along with the paths option.</p>`;
  let t67;
  let p18;
  let textContent_18 = `In the console we now see a bunch of weird objects. The <code>value</code> property in each one contains our list items in their fully parsed glory. <code>JSONParser</code> emits what it calls “ParsedElementInfo” objects, which contain the parsed values as well as some extra metadata. That’s what we’re seeing.`;
  let t73;
  let img3;
  let img3_src_value;
  let t74;
  let p19;
  let textContent_19 = `Since we only care about the parsed values, let’s map over each element in the stream using, you guessed it, another Transform Stream. This time we’ll create our own. The constructor takes an object with some lifecycle methods. The <code>start</code> method runs when the stream starts, the <code>flush</code> method runs if the stream is about to be closed, and the <code>transform</code> method runs whenever a new chunk of data arrives. We will only be using <code>transform</code> . It takes two arguments the first one is the chunk of incoming data, in our case that is the ParsedElementInfo object from the JSONParser, and the second one is a stream-controller for the output stream. The stream-controller is how we write to or close the output stream. Here we enqueue the value property of each parsed element.`;
  let t84;
  let html_tag_5;
  let raw5_value = `<pre class="shiki vitesse-dark twoslash lsp" style="background-color:#121212;color:#dbd7caee" tabindex="0"><code><span class="line"><span style="color:#CB7676">const </span><span style="color:#BD976A"><span class="twoslash-hover"><span class="twoslash-popup-container"><code class="twoslash-popup-code"><span style="color:#CB7676">const </span><span style="color:#BD976A">mapToValueStream</span><span style="color:#666666">: </span><span style="color:#5DA994">TransformStream</span><span style="color:#666666">&#x3C;</span><span style="color:#5DA994">any</span><span style="color:#666666">, </span><span style="color:#5DA994">any</span><span style="color:#666666">></span></code></span>mapToValueStream</span></span><span style="color:#666666"> =</span><span style="color:#CB7676"> new </span><span style="color:#80A665"><span class="twoslash-hover"><span class="twoslash-popup-container"><code class="twoslash-popup-code"><span style="color:#CB7676">var </span><span style="color:#BD976A">TransformStream</span><span style="color:#666666">: </span><span style="color:#4D9375">new</span><span style="color:#666666"> &#x3C;</span><span style="color:#5DA994">any</span><span style="color:#666666">, </span><span style="color:#5DA994">any</span><span style="color:#666666">>(</span><span style="color:#BD976A">transformer</span><span style="color:#CB7676">?</span><span style="color:#666666">: </span><span style="color:#5DA994">Transformer</span><span style="color:#666666">&#x3C;</span><span style="color:#5DA994">any</span><span style="color:#666666">, </span><span style="color:#5DA994">any</span><span style="color:#666666">> | </span><span style="color:#CB7676">undefined</span><span style="color:#666666">, </span><span style="color:#BD976A">writableStrategy</span><span style="color:#CB7676">?</span><span style="color:#666666">: </span><span style="color:#5DA994">QueuingStrategy</span><span style="color:#666666">&#x3C;</span><span style="color:#5DA994">any</span><span style="color:#666666">> | </span><span style="color:#CB7676">undefined</span><span style="color:#666666">, </span><span style="color:#BD976A">readableStrategy</span><span style="color:#CB7676">?</span><span style="color:#666666">: </span><span style="color:#5DA994">QueuingStrategy</span><span style="color:#666666">&#x3C;</span><span style="color:#5DA994">any</span><span style="color:#666666">> | </span><span style="color:#CB7676">undefined</span><span style="color:#666666">) => </span><span style="color:#5DA994">TransformStream</span><span style="color:#666666">&#x3C;...></span></code><div class="twoslash-popup-docs">&#96;TransformStream&#96; class is a global reference for &#96;require('stream/web').TransformStream&#96;.
https://nodejs.org/api/globals.html#class-transformstream</div><div class="twoslash-popup-docs twoslash-popup-docs-tags"><span class="twoslash-popup-docs-tag"><span class="twoslash-popup-docs-tag-name">@since</span><span class="twoslash-popup-docs-tag-value">v18.0.0</span></span></div></span>TransformStream</span></span><span style="color:#666666">(&#123;</span></span>
<span class="line"><span style="color:#80A665">	</span><span style="color:#80A665"><span class="twoslash-hover"><span class="twoslash-popup-container"><code class="twoslash-popup-code"><span style="color:#BD976A">Transformer</span><span style="color:#666666">&#x3C;</span><span style="color:#BD976A">any</span><span style="color:#666666">,</span><span style="color:#BD976A"> any</span><span style="color:#666666">>.</span><span style="color:#BD976A">transform</span><span style="color:#CB7676">?:</span><span style="color:#BD976A"> TransformerTransformCallback</span><span style="color:#666666">&#x3C;</span><span style="color:#BD976A">any</span><span style="color:#666666">,</span><span style="color:#BD976A"> any</span><span style="color:#666666">></span><span style="color:#CB7676"> |</span><span style="color:#CB7676"> undefined</span></code></span>transform</span></span><span style="color:#666666">(</span><span style="color:#BD976A"><span class="twoslash-hover"><span class="twoslash-popup-container"><code class="twoslash-popup-code"><span style="color:#80A665">parsedElementInfo</span><span style="color:#666666">:</span><span style="color:#BD976A"> any</span></code></span>parsedElementInfo</span></span><span style="color:#666666">, </span><span style="color:#BD976A"><span class="twoslash-hover"><span class="twoslash-popup-container"><code class="twoslash-popup-code"><span style="color:#80A665">controller</span><span style="color:#666666">:</span><span style="color:#BD976A"> TransformStreamDefaultController</span><span style="color:#666666">&#x3C;</span><span style="color:#BD976A">any</span><span style="color:#666666">></span></code></span>controller</span></span><span style="color:#666666">) &#123;</span></span>
<span class="line"><span style="color:#BD976A">		</span><span style="color:#BD976A"><span class="twoslash-hover"><span class="twoslash-popup-container"><code class="twoslash-popup-code"><span style="color:#80A665">controller</span><span style="color:#666666">:</span><span style="color:#BD976A"> TransformStreamDefaultController</span><span style="color:#666666">&#x3C;</span><span style="color:#BD976A">any</span><span style="color:#666666">></span></code></span>controller</span></span><span style="color:#666666">.</span><span style="color:#80A665"><span class="twoslash-hover"><span class="twoslash-popup-container"><code class="twoslash-popup-code"><span style="color:#BD976A">TransformStreamDefaultController</span><span style="color:#666666">&#x3C;</span><span style="color:#BD976A">any</span><span style="color:#666666">>.</span><span style="color:#80A665">enqueue</span><span style="color:#666666">(</span><span style="color:#BD976A">chunk</span><span style="color:#CB7676">?:</span><span style="color:#BD976A"> any</span><span style="color:#666666">)</span><span style="color:#DBD7CAEE">: </span><span style="color:#CB7676">void</span></code></span>enqueue</span></span><span style="color:#666666">(</span><span style="color:#BD976A"><span class="twoslash-hover"><span class="twoslash-popup-container"><code class="twoslash-popup-code"><span style="color:#80A665">parsedElementInfo</span><span style="color:#666666">:</span><span style="color:#BD976A"> any</span></code></span>parsedElementInfo</span></span><span style="color:#666666">.</span><span style="color:#BD976A">value</span><span style="color:#666666">);</span></span>
<span class="line"><span style="color:#666666">	&#125;</span></span>
<span class="line"><span style="color:#666666">&#125;);</span></span></code></pre>`;
  let t85;
  let p20;
  let textContent_20 = "Let’s tack on our TransformStream and look at the console.";
  let t87;
  let html_tag_6;
  let raw6_value = `<pre class="shiki vitesse-dark twoslash lsp" style="background-color:#121212;color:#dbd7caee" tabindex="0"><code><span class="line"><span style="color:#CB7676">const </span><span style="color:#BD976A"><span class="twoslash-hover"><span class="twoslash-popup-container"><code class="twoslash-popup-code"><span style="color:#CB7676">const </span><span style="color:#BD976A">stream</span><span style="color:#666666">: </span><span style="color:#5DA994">ReadableStream</span><span style="color:#666666">&#x3C;</span><span style="color:#5DA994">unknown</span><span style="color:#666666">></span></code></span>stream</span></span><span style="color:#666666"> =</span><span style="color:#BD976A"> </span><span style="color:#BD976A"><span class="twoslash-hover"><span class="twoslash-popup-container"><code class="twoslash-popup-code"><span style="color:#CB7676">const </span><span style="color:#BD976A">response</span><span style="color:#666666">: </span><span style="color:#5DA994">Response</span></code></span>response</span></span><span style="color:#666666">.</span><span style="color:#BD976A"><span class="twoslash-hover"><span class="twoslash-popup-container"><code class="twoslash-popup-code"><span style="color:#BD976A">Body</span><span style="color:#666666">.</span><span style="color:#BD976A">body</span><span style="color:#DBD7CAEE">: </span><span style="color:#BD976A">ReadableStream</span><span style="color:#666666">&#x3C;</span><span style="color:#BD976A">Uint8Array</span><span style="color:#666666">></span><span style="color:#CB7676"> |</span><span style="color:#CB7676"> null</span></code></span>body</span></span><span style="color:#CB7676">!</span></span>
<span class="line"><span style="color:#666666">	.</span><span style="color:#80A665"><span class="twoslash-hover"><span class="twoslash-popup-container"><code class="twoslash-popup-code"><span style="color:#BD976A">ReadableStream</span><span style="color:#666666">&#x3C;</span><span style="color:#BD976A">Uint8Array</span><span style="color:#666666">>.</span><span style="color:#80A665">pipeThrough</span><span style="color:#666666">&#x3C;</span><span style="color:#5DA994">ParsedElementInfo</span><span style="color:#666666">>(</span><span style="color:#BD976A">transform</span><span style="color:#DBD7CAEE">: </span><span style="color:#BD976A">ReadableWritablePair</span><span style="color:#666666">&#x3C;</span><span style="color:#BD976A">ParsedElementInfo</span><span style="color:#666666">,</span><span style="color:#BD976A"> Uint8Array</span><span style="color:#666666">>,</span><span style="color:#BD976A"> options</span><span style="color:#CB7676">?:</span><span style="color:#BD976A"> StreamPipeOptions</span><span style="color:#CB7676"> |</span><span style="color:#CB7676"> undefined</span><span style="color:#666666">)</span><span style="color:#DBD7CAEE">: </span><span style="color:#BD976A">ReadableStream</span><span style="color:#666666">&#x3C;</span><span style="color:#BD976A">ParsedElementInfo</span><span style="color:#666666">></span></code></span>pipeThrough</span></span><span style="color:#666666">(</span><span style="color:#BD976A"><span class="twoslash-hover"><span class="twoslash-popup-container"><code class="twoslash-popup-code"><span style="color:#CB7676">const </span><span style="color:#BD976A">parser</span><span style="color:#666666">: </span><span style="color:#5DA994">JSONParser</span></code></span>parser</span></span><span style="color:#666666">)</span></span>
<span class="line"><span style="color:#666666">	.</span><span style="color:#80A665"><span class="twoslash-hover"><span class="twoslash-popup-container"><code class="twoslash-popup-code"><span style="color:#BD976A">ReadableStream</span><span style="color:#666666">&#x3C;</span><span style="color:#BD976A">ParsedElementInfo</span><span style="color:#666666">>.</span><span style="color:#80A665">pipeThrough</span><span style="color:#666666">&#x3C;</span><span style="color:#5DA994">unknown</span><span style="color:#666666">>(</span><span style="color:#BD976A">transform</span><span style="color:#DBD7CAEE">: </span><span style="color:#BD976A">ReadableWritablePair</span><span style="color:#666666">&#x3C;</span><span style="color:#BD976A">unknown</span><span style="color:#666666">,</span><span style="color:#BD976A"> ParsedElementInfo</span><span style="color:#666666">>,</span><span style="color:#BD976A"> options</span><span style="color:#CB7676">?:</span><span style="color:#BD976A"> StreamPipeOptions</span><span style="color:#CB7676"> |</span><span style="color:#CB7676"> undefined</span><span style="color:#666666">)</span><span style="color:#DBD7CAEE">: </span><span style="color:#BD976A">ReadableStream</span><span style="color:#666666">&#x3C;</span><span style="color:#BD976A">unknown</span><span style="color:#666666">></span></code></span>pipeThrough</span></span><span style="color:#666666">(</span><span style="color:#BD976A"><span class="twoslash-hover"><span class="twoslash-popup-container"><code class="twoslash-popup-code"><span style="color:#CB7676">const </span><span style="color:#BD976A">valueStream</span><span style="color:#666666">: </span><span style="color:#5DA994">TransformStream</span><span style="color:#666666">&#x3C;</span><span style="color:#CB7676">typeof</span><span style="color:#BD976A"> ParsedElementInfo</span><span style="color:#666666">, </span><span style="color:#5DA994">unknown</span><span style="color:#666666">></span></code></span>valueStream</span></span><span style="color:#666666">);</span></span></code></pre>`;
  let t88;
  let img4;
  let img4_src_value;
  let t89;
  let p21;
  let textContent_21 = "That’s looking good already! We get list-items trickling in as the data is arriving over the network!";
  let t91;
  let p22;
  let textContent_22 = "Let’s replace the log-statement with our rendering logic. I want to keep this post framework agnostic, so I won’t spend much time here. This is where you would hook into your UI framework.";
  let t93;
  let html_tag_7;
  let raw7_value = `<pre class="shiki vitesse-dark twoslash lsp" style="background-color:#121212;color:#dbd7caee" tabindex="0"><code><span class="line"><span style="color:#4D9375">import</span><span style="color:#666666"> &#123;</span><span style="color:#BD976A"> </span><span style="color:#BD976A"><span class="twoslash-hover"><span class="twoslash-popup-container"><code class="twoslash-popup-code"><span style="color:#CB7676">function</span><span style="color:#80A665"> display</span><span style="color:#666666">(</span><span style="color:#BD976A">todo</span><span style="color:#666666">: </span><span style="color:#5DA994">Todo</span><span style="color:#666666">):</span><span style="color:#5DA994"> void</span></code></span>display</span></span><span style="color:#666666"> &#125;</span><span style="color:#4D9375"> from</span><span style="color:#C98A7D99"> "</span><span style="color:#C98A7D">./render</span><span style="color:#C98A7D99">"</span></span>
<span class="line"><span style="color:#758575DD">//...</span></span>
<span class="line"><span style="color:#4D9375">while</span><span style="color:#666666">(</span><span style="color:#4D9375">true</span><span style="color:#666666">)</span><span style="color:#666666"> &#123;</span></span>
<span class="line"><span style="color:#CB7676">	const </span><span style="color:#666666">&#123;</span><span style="color:#BD976A"> </span><span style="color:#BD976A"><span class="twoslash-hover"><span class="twoslash-popup-container"><code class="twoslash-popup-code"><span style="color:#CB7676">const </span><span style="color:#BD976A">value</span><span style="color:#666666">: </span><span style="color:#5DA994">Todo</span><span style="color:#666666"> | </span><span style="color:#CB7676">undefined</span></code></span>value</span></span><span style="color:#666666">,</span><span style="color:#BD976A"> </span><span style="color:#BD976A"><span class="twoslash-hover"><span class="twoslash-popup-container"><code class="twoslash-popup-code"><span style="color:#CB7676">const </span><span style="color:#BD976A">done</span><span style="color:#666666">: </span><span style="color:#5DA994">boolean</span></code></span>done</span></span><span style="color:#666666"> &#125;</span><span style="color:#666666"> =</span><span style="color:#4D9375"> await</span><span style="color:#BD976A"> </span><span style="color:#BD976A"><span class="twoslash-hover"><span class="twoslash-popup-container"><code class="twoslash-popup-code"><span style="color:#CB7676">const </span><span style="color:#BD976A">reader</span><span style="color:#666666">: </span><span style="color:#5DA994">ReadableStreamDefaultReader</span><span style="color:#666666">&#x3C;</span><span style="color:#5DA994">Todo</span><span style="color:#666666">></span></code></span>reader</span></span><span style="color:#666666">.</span><span style="color:#80A665"><span class="twoslash-hover"><span class="twoslash-popup-container"><code class="twoslash-popup-code"><span style="color:#BD976A">ReadableStreamDefaultReader</span><span style="color:#666666">&#x3C;</span><span style="color:#BD976A">Todo</span><span style="color:#666666">>.</span><span style="color:#80A665">read</span><span style="color:#666666">()</span><span style="color:#DBD7CAEE">: </span><span style="color:#B8A965">Promise</span><span style="color:#666666">&#x3C;</span><span style="color:#BD976A">ReadableStreamReadResult</span><span style="color:#666666">&#x3C;</span><span style="color:#BD976A">Todo</span><span style="color:#CB7676">>></span></code></span>read</span></span><span style="color:#666666">();</span></span>
<span class="line"><span style="color:#4D9375">	if</span><span style="color:#666666">(</span><span style="color:#BD976A"><span class="twoslash-hover"><span class="twoslash-popup-container"><code class="twoslash-popup-code"><span style="color:#CB7676">const </span><span style="color:#BD976A">done</span><span style="color:#666666">: </span><span style="color:#5DA994">boolean</span></code></span>done</span></span><span style="color:#666666">)</span><span style="color:#4D9375"> break</span><span style="color:#666666">;</span></span>
<span class="line"><span style="color:#80A665">	</span><span style="color:#80A665"><span class="twoslash-hover"><span class="twoslash-popup-container"><code class="twoslash-popup-code"><span style="color:#CB7676">function</span><span style="color:#80A665"> display</span><span style="color:#666666">(</span><span style="color:#BD976A">todo</span><span style="color:#666666">: </span><span style="color:#5DA994">Todo</span><span style="color:#666666">):</span><span style="color:#5DA994"> void</span></code></span>display</span></span><span style="color:#666666">(</span><span style="color:#BD976A"><span class="twoslash-hover"><span class="twoslash-popup-container"><code class="twoslash-popup-code"><span style="color:#CB7676">const </span><span style="color:#BD976A">value</span><span style="color:#666666">: </span><span style="color:#5DA994">Todo</span></code></span>value</span></span><span style="color:#666666">)</span></span>
<span class="line"><span style="color:#666666">&#125;</span></span></code></pre>`;
  let t94;
  let img5;
  let img5_src_value;
  let t95;
  let p23;
  let textContent_23 = "Just what we wanted!";
  let t97;
  let p24;
  let textContent_24 = "The original code we had did one more thing that we are not yet doing. It validated the data. Let’s add that. We’re going to need another TransformStream. This one is very similar to the one we already made. We need to validate each element in the stream, and write it to the output if and only if it’s valid. You could throw an error if an item is invalid; I’m just going to fail silently.";
  let t99;
  let html_tag_8;
  let raw8_value = `<pre class="shiki vitesse-dark twoslash lsp" style="background-color:#121212;color:#dbd7caee" tabindex="0"><code><span class="line"><span style="color:#CB7676">const </span><span style="color:#BD976A"><span class="twoslash-hover"><span class="twoslash-popup-container"><code class="twoslash-popup-code"><pre class="shiki vitesse-dark" style="background-color:#121212;color:#dbd7caee" tabindex="0"><code><span class="line"><span style="color:#CB7676">const </span><span style="color:#BD976A">validateTodoStream</span><span style="color:#666666">: </span><span style="color:#5DA994">TransformStream</span><span style="color:#666666">&#x3C;</span><span style="color:#5DA994">unknown</span><span style="color:#666666">, &#123;</span></span>
<span class="line"><span style="color:#BD976A">    description</span><span style="color:#666666">: </span><span style="color:#5DA994">string</span><span style="color:#666666">;</span></span>
<span class="line"><span style="color:#BD976A">    done</span><span style="color:#666666">: </span><span style="color:#5DA994">boolean</span><span style="color:#666666">;</span></span>
<span class="line"><span style="color:#666666">&#125;></span></span></code></pre></code></span>validateTodoStream</span></span><span style="color:#666666"> =</span><span style="color:#CB7676"> new </span><span style="color:#80A665"><span class="twoslash-hover"><span class="twoslash-popup-container"><code class="twoslash-popup-code"><pre class="shiki vitesse-dark" style="background-color:#121212;color:#dbd7caee" tabindex="0"><code><span class="line"><span style="color:#CB7676">var </span><span style="color:#BD976A">TransformStream</span><span style="color:#666666">: </span><span style="color:#4D9375">new</span><span style="color:#666666"> &#x3C;</span><span style="color:#5DA994">unknown</span><span style="color:#666666">, &#123;</span></span>
<span class="line"><span style="color:#BD976A">    description</span><span style="color:#666666">: </span><span style="color:#5DA994">string</span><span style="color:#666666">;</span></span>
<span class="line"><span style="color:#BD976A">    done</span><span style="color:#666666">: </span><span style="color:#5DA994">boolean</span><span style="color:#666666">;</span></span>
<span class="line"><span style="color:#666666">&#125;>(</span><span style="color:#BD976A">transformer</span><span style="color:#CB7676">?</span><span style="color:#666666">: </span><span style="color:#5DA994">Transformer</span><span style="color:#666666">&#x3C;</span><span style="color:#5DA994">unknown</span><span style="color:#666666">, &#123;</span></span>
<span class="line"><span style="color:#BD976A">    description</span><span style="color:#666666">: </span><span style="color:#5DA994">string</span><span style="color:#666666">;</span></span>
<span class="line"><span style="color:#BD976A">    done</span><span style="color:#666666">: </span><span style="color:#5DA994">boolean</span><span style="color:#666666">;</span></span>
<span class="line"><span style="color:#666666">&#125;> | </span><span style="color:#CB7676">undefined</span><span style="color:#666666">, </span><span style="color:#BD976A">writableStrategy</span><span style="color:#CB7676">?</span><span style="color:#666666">: </span><span style="color:#5DA994">QueuingStrategy</span><span style="color:#666666">&#x3C;</span><span style="color:#5DA994">unknown</span><span style="color:#666666">> | </span><span style="color:#CB7676">undefined</span><span style="color:#666666">, </span><span style="color:#BD976A">readableStrategy</span><span style="color:#CB7676">?</span><span style="color:#666666">: </span><span style="color:#5DA994">QueuingStrategy</span><span style="color:#666666">&#x3C;...> | </span><span style="color:#CB7676">undefined</span><span style="color:#666666">) => </span><span style="color:#5DA994">TransformStream</span><span style="color:#666666">&#x3C;...></span></span></code></pre></code><div class="twoslash-popup-docs">&#96;TransformStream&#96; class is a global reference for &#96;require('stream/web').TransformStream&#96;.
https://nodejs.org/api/globals.html#class-transformstream</div><div class="twoslash-popup-docs twoslash-popup-docs-tags"><span class="twoslash-popup-docs-tag"><span class="twoslash-popup-docs-tag-name">@since</span><span class="twoslash-popup-docs-tag-value">v18.0.0</span></span></div></span>TransformStream</span></span><span style="color:#666666">&#x3C;</span><span style="color:#5DA994">unknown</span><span style="color:#666666">,</span><span style="color:#5DA994"> </span><span style="color:#5DA994"><span class="twoslash-hover"><span class="twoslash-popup-container"><code class="twoslash-popup-code"><pre class="shiki vitesse-dark" style="background-color:#121212;color:#dbd7caee" tabindex="0"><code><span class="line"><span style="color:#CB7676">type</span><span style="color:#5DA994"> Todo</span><span style="color:#666666"> =</span><span style="color:#666666"> &#123;</span></span>
<span class="line"><span style="color:#BD976A">    description</span><span style="color:#666666">: </span><span style="color:#5DA994">string</span><span style="color:#666666">;</span></span>
<span class="line"><span style="color:#BD976A">    done</span><span style="color:#666666">: </span><span style="color:#5DA994">boolean</span><span style="color:#666666">;</span></span>
<span class="line"><span style="color:#666666">&#125;</span></span></code></pre></code></span>Todo</span></span><span style="color:#666666">>(&#123;</span></span>
<span class="line"><span style="color:#80A665">	</span><span style="color:#80A665"><span class="twoslash-hover"><span class="twoslash-popup-container"><code class="twoslash-popup-code"><pre class="shiki vitesse-dark" style="background-color:#121212;color:#dbd7caee" tabindex="0"><code><span class="line"><span style="color:#BD976A">Transformer</span><span style="color:#666666">&#x3C;</span><span style="color:#BD976A">unknown</span><span style="color:#666666">, &#123; </span><span style="color:#B8A965">description</span><span style="color:#666666">: </span><span style="color:#BD976A">string</span><span style="color:#666666">; </span><span style="color:#BD976A">done</span><span style="color:#666666">: </span><span style="color:#BD976A">boolean</span><span style="color:#666666">; &#125;>.</span><span style="color:#BD976A">transform</span><span style="color:#CB7676">?:</span><span style="color:#BD976A"> TransformerTransformCallback</span><span style="color:#666666">&#x3C;</span><span style="color:#BD976A">unknown</span><span style="color:#666666">, &#123;</span></span>
<span class="line"><span style="color:#B8A965">    description</span><span style="color:#666666">: </span><span style="color:#BD976A">string</span><span style="color:#666666">;</span></span>
<span class="line"><span style="color:#BD976A">    done</span><span style="color:#666666">: </span><span style="color:#BD976A">boolean</span><span style="color:#666666">;</span></span>
<span class="line"><span style="color:#666666">&#125;></span><span style="color:#CB7676"> |</span><span style="color:#CB7676"> undefined</span></span></code></pre></code></span>transform</span></span><span style="color:#666666">(</span><span style="color:#BD976A"><span class="twoslash-hover"><span class="twoslash-popup-container"><code class="twoslash-popup-code"><span style="color:#80A665">value</span><span style="color:#666666">:</span><span style="color:#BD976A"> unknown</span></code></span>value</span></span><span style="color:#666666">, </span><span style="color:#BD976A"><span class="twoslash-hover"><span class="twoslash-popup-container"><code class="twoslash-popup-code"><pre class="shiki vitesse-dark" style="background-color:#121212;color:#dbd7caee" tabindex="0"><code><span class="line"><span style="color:#80A665">controller</span><span style="color:#666666">:</span><span style="color:#80A665"> TransformStreamDefaultController</span><span style="color:#666666">&#x3C;&#123;</span></span>
<span class="line"><span style="color:#BD976A">    description</span><span style="color:#666666">: </span><span style="color:#5DA994">string</span><span style="color:#666666">;</span></span>
<span class="line"><span style="color:#BD976A">    done</span><span style="color:#666666">: </span><span style="color:#5DA994">boolean</span><span style="color:#666666">;</span></span>
<span class="line"><span style="color:#666666">&#125;></span></span></code></pre></code></span>controller</span></span><span style="color:#666666">) &#123;</span></span>
<span class="line"><span style="color:#4D9375">		try</span><span style="color:#666666"> &#123;</span></span>
<span class="line"><span style="color:#BD976A">			</span><span style="color:#BD976A"><span class="twoslash-hover"><span class="twoslash-popup-container"><code class="twoslash-popup-code"><pre class="shiki vitesse-dark" style="background-color:#121212;color:#dbd7caee" tabindex="0"><code><span class="line"><span style="color:#80A665">controller</span><span style="color:#666666">:</span><span style="color:#80A665"> TransformStreamDefaultController</span><span style="color:#666666">&#x3C;&#123;</span></span>
<span class="line"><span style="color:#BD976A">    description</span><span style="color:#666666">: </span><span style="color:#5DA994">string</span><span style="color:#666666">;</span></span>
<span class="line"><span style="color:#BD976A">    done</span><span style="color:#666666">: </span><span style="color:#5DA994">boolean</span><span style="color:#666666">;</span></span>
<span class="line"><span style="color:#666666">&#125;></span></span></code></pre></code></span>controller</span></span><span style="color:#666666">.</span><span style="color:#80A665"><span class="twoslash-hover"><span class="twoslash-popup-container"><code class="twoslash-popup-code"><pre class="shiki vitesse-dark" style="background-color:#121212;color:#dbd7caee" tabindex="0"><code><span class="line"><span style="color:#BD976A">TransformStreamDefaultController</span><span style="color:#666666">&#x3C;&#123;</span><span style="color:#80A665"> description</span><span style="color:#666666">:</span><span style="color:#BD976A"> string</span><span style="color:#666666">;</span><span style="color:#80A665"> done</span><span style="color:#666666">:</span><span style="color:#BD976A"> boolean</span><span style="color:#666666">;</span><span style="color:#666666"> &#125;>.</span><span style="color:#80A665">enqueue</span><span style="color:#666666">(</span><span style="color:#BD976A">chunk</span><span style="color:#CB7676">?:</span><span style="color:#666666"> &#123;</span></span>
<span class="line"><span style="color:#B8A965">    description</span><span style="color:#666666">: </span><span style="color:#BD976A">string</span><span style="color:#666666">;</span></span>
<span class="line"><span style="color:#BD976A">    done</span><span style="color:#666666">: </span><span style="color:#BD976A">boolean</span><span style="color:#666666">;</span></span>
<span class="line"><span style="color:#666666">&#125;</span><span style="color:#CB7676"> |</span><span style="color:#CB7676"> undefined</span><span style="color:#666666">)</span><span style="color:#DBD7CAEE">: </span><span style="color:#CB7676">void</span></span></code></pre></code></span>enqueue</span></span><span style="color:#666666">(</span><span style="color:#BD976A"><span class="twoslash-hover"><span class="twoslash-popup-container"><code class="twoslash-popup-code"><pre class="shiki vitesse-dark" style="background-color:#121212;color:#dbd7caee" tabindex="0"><code><span class="line"><span style="color:#CB7676">const </span><span style="color:#BD976A">TodoSchema</span><span style="color:#666666">: </span><span style="color:#5DA994">z</span><span style="color:#666666">.</span><span style="color:#5DA994">ZodObject</span><span style="color:#666666">&#x3C;&#123;</span></span>
<span class="line"><span style="color:#BD976A">    description</span><span style="color:#666666">: </span><span style="color:#5DA994">z</span><span style="color:#666666">.</span><span style="color:#5DA994">ZodString</span><span style="color:#666666">;</span></span>
<span class="line"><span style="color:#BD976A">    done</span><span style="color:#666666">: </span><span style="color:#5DA994">z</span><span style="color:#666666">.</span><span style="color:#5DA994">ZodBoolean</span><span style="color:#666666">;</span></span>
<span class="line"><span style="color:#666666">&#125;, </span><span style="color:#C98A7D99">"</span><span style="color:#C98A7D">strip</span><span style="color:#C98A7D99">"</span><span style="color:#666666">, </span><span style="color:#5DA994">z</span><span style="color:#666666">.</span><span style="color:#5DA994">ZodTypeAny</span><span style="color:#666666">, &#123;</span></span>
<span class="line"><span style="color:#BD976A">    description</span><span style="color:#666666">: </span><span style="color:#5DA994">string</span><span style="color:#666666">;</span></span>
<span class="line"><span style="color:#BD976A">    done</span><span style="color:#666666">: </span><span style="color:#5DA994">boolean</span><span style="color:#666666">;</span></span>
<span class="line"><span style="color:#666666">&#125;, &#123;</span></span>
<span class="line"><span style="color:#BD976A">    description</span><span style="color:#666666">: </span><span style="color:#5DA994">string</span><span style="color:#666666">;</span></span>
<span class="line"><span style="color:#BD976A">    done</span><span style="color:#666666">: </span><span style="color:#5DA994">boolean</span><span style="color:#666666">;</span></span>
<span class="line"><span style="color:#666666">&#125;></span></span></code></pre></code></span>TodoSchema</span></span><span style="color:#666666">.</span><span style="color:#80A665"><span class="twoslash-hover"><span class="twoslash-popup-container"><code class="twoslash-popup-code"><pre class="shiki vitesse-dark" style="background-color:#121212;color:#dbd7caee" tabindex="0"><code><span class="line"><span style="color:#BD976A">ZodType</span><span style="color:#666666">&#x3C;&#123;</span><span style="color:#80A665"> description</span><span style="color:#666666">:</span><span style="color:#BD976A"> string</span><span style="color:#666666">;</span><span style="color:#80A665"> done</span><span style="color:#666666">:</span><span style="color:#BD976A"> boolean</span><span style="color:#666666">;</span><span style="color:#666666"> &#125;,</span><span style="color:#BD976A"> ZodObjectDef</span><span style="color:#666666">&#x3C;&#123;</span><span style="color:#80A665"> description</span><span style="color:#666666">:</span><span style="color:#BD976A"> ZodString</span><span style="color:#666666">;</span><span style="color:#80A665"> done</span><span style="color:#666666">:</span><span style="color:#BD976A"> ZodBoolean</span><span style="color:#666666">;</span><span style="color:#666666"> &#125;,</span><span style="color:#C98A7D99"> "</span><span style="color:#C98A7D">strip</span><span style="color:#C98A7D99">"</span><span style="color:#666666">,</span><span style="color:#BD976A"> ZodTypeAny</span><span style="color:#666666">>, &#123; </span><span style="color:#B8A965">description</span><span style="color:#666666">: </span><span style="color:#BD976A">string</span><span style="color:#666666">; </span><span style="color:#BD976A">done</span><span style="color:#666666">: </span><span style="color:#BD976A">boolean</span><span style="color:#666666">; &#125;>.</span><span style="color:#80A665">parse</span><span style="color:#666666">(</span><span style="color:#BD976A">data</span><span style="color:#DBD7CAEE">: </span><span style="color:#BD976A">unknown</span><span style="color:#666666">,</span><span style="color:#BD976A"> params</span><span style="color:#CB7676">?:</span><span style="color:#BD976A"> Partial</span><span style="color:#666666">&#x3C;</span><span style="color:#BD976A">z</span><span style="color:#666666">.</span><span style="color:#BD976A">ParseParams</span><span style="color:#666666">></span><span style="color:#CB7676"> |</span><span style="color:#CB7676"> undefined</span><span style="color:#666666">)</span><span style="color:#DBD7CAEE">:</span><span style="color:#666666"> &#123;</span></span>
<span class="line"><span style="color:#B8A965">    description</span><span style="color:#666666">: </span><span style="color:#BD976A">string</span><span style="color:#666666">;</span></span>
<span class="line"><span style="color:#BD976A">    done</span><span style="color:#666666">: </span><span style="color:#BD976A">boolean</span><span style="color:#666666">;</span></span>
<span class="line"><span style="color:#666666">&#125;</span></span></code></pre></code></span>parse</span></span><span style="color:#666666">(</span><span style="color:#BD976A"><span class="twoslash-hover"><span class="twoslash-popup-container"><code class="twoslash-popup-code"><span style="color:#80A665">value</span><span style="color:#666666">:</span><span style="color:#BD976A"> unknown</span></code></span>value</span></span><span style="color:#666666">));</span></span>
<span class="line"><span style="color:#666666">		&#125; </span><span style="color:#4D9375">catch</span><span style="color:#666666"> (</span><span style="color:#BD976A"><span class="twoslash-hover"><span class="twoslash-popup-container"><code class="twoslash-popup-code"><span style="color:#CB7676">function</span><span style="color:#666666"> (</span><span style="color:#BD976A">local</span><span style="color:#BD976A"> var</span><span style="color:#666666">)</span><span style="color:#80A665"> e</span><span style="color:#DBD7CAEE">: </span><span style="color:#80A665">unknown</span></code></span>e</span></span><span style="color:#666666">) &#123;&#125;</span></span>
<span class="line"><span style="color:#666666">	&#125;</span></span>
<span class="line"><span style="color:#666666">&#125;);</span></span></code></pre>`;
  let t100;
  let p25;
  let textContent_25 = "Let’s add it to the stream-chain. Still Works!";
  let t102;
  let html_tag_9;
  let raw9_value = `<pre class="shiki vitesse-dark twoslash lsp" style="background-color:#121212;color:#dbd7caee" tabindex="0"><code><span class="line"><span style="color:#4D9375">import</span><span style="color:#666666"> &#123;</span><span style="color:#BD976A"> </span><span style="color:#BD976A"><span class="twoslash-hover"><span class="twoslash-popup-container"><code class="twoslash-popup-code"><span style="color:#CB7676">class</span><span style="color:#5DA994"> JSONParser</span></code></span>JSONParser</span></span><span style="color:#666666"> &#125;</span><span style="color:#4D9375"> from</span><span style="color:#C98A7D99"> "</span><span style="color:#C98A7D">@streamparser/json-whatwg</span><span style="color:#C98A7D99">"</span><span style="color:#666666">;</span></span>
<span class="line"><span style="color:#CB7676">declare const </span><span style="color:#BD976A"><span class="twoslash-hover"><span class="twoslash-popup-container"><code class="twoslash-popup-code"><span style="color:#CB7676">const </span><span style="color:#BD976A">response</span><span style="color:#666666">: </span><span style="color:#5DA994">Response</span></code></span>response</span></span><span style="color:#666666"> : </span><span style="color:#5DA994">Response</span><span style="color:#666666">;</span></span>
<span class="line"><span style="color:#CB7676">declare const </span><span style="color:#BD976A"><span class="twoslash-hover"><span class="twoslash-popup-container"><code class="twoslash-popup-code"><span style="color:#CB7676">const </span><span style="color:#BD976A">parser</span><span style="color:#666666">: </span><span style="color:#5DA994">JSONParser</span></code></span>parser</span></span><span style="color:#666666">: </span><span style="color:#5DA994"><span class="twoslash-hover"><span class="twoslash-popup-container"><code class="twoslash-popup-code"><span style="color:#CB7676">class</span><span style="color:#5DA994"> JSONParser</span></code></span>JSONParser</span></span><span style="color:#666666">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#758575DD">// ---cut-before-</span></span>
<span class="line"><span style="color:#CB7676">const </span><span style="color:#BD976A"><span class="twoslash-hover"><span class="twoslash-popup-container"><code class="twoslash-popup-code"><span style="color:#CB7676">const </span><span style="color:#BD976A">stream</span><span style="color:#666666">: </span><span style="color:#5DA994">ReadableStream</span><span style="color:#666666">&#x3C;</span><span style="color:#5DA994">Todo</span><span style="color:#666666">></span></code></span>stream</span></span><span style="color:#666666"> =</span><span style="color:#BD976A"> </span><span style="color:#BD976A"><span class="twoslash-hover"><span class="twoslash-popup-container"><code class="twoslash-popup-code"><span style="color:#CB7676">const </span><span style="color:#BD976A">response</span><span style="color:#666666">: </span><span style="color:#5DA994">Response</span></code></span>response</span></span><span style="color:#666666">.</span><span style="color:#BD976A"><span class="twoslash-hover"><span class="twoslash-popup-container"><code class="twoslash-popup-code"><span style="color:#BD976A">Body</span><span style="color:#666666">.</span><span style="color:#BD976A">body</span><span style="color:#DBD7CAEE">: </span><span style="color:#BD976A">ReadableStream</span><span style="color:#666666">&#x3C;</span><span style="color:#BD976A">Uint8Array</span><span style="color:#666666">></span><span style="color:#CB7676"> |</span><span style="color:#CB7676"> null</span></code></span>body</span></span><span style="color:#CB7676">!</span></span>
<span class="line"><span style="color:#666666">	.</span><span style="color:#80A665"><span class="twoslash-hover"><span class="twoslash-popup-container"><code class="twoslash-popup-code"><span style="color:#BD976A">ReadableStream</span><span style="color:#666666">&#x3C;</span><span style="color:#BD976A">Uint8Array</span><span style="color:#666666">>.</span><span style="color:#80A665">pipeThrough</span><span style="color:#666666">&#x3C;</span><span style="color:#5DA994">ParsedElementInfo</span><span style="color:#666666">>(</span><span style="color:#BD976A">transform</span><span style="color:#DBD7CAEE">: </span><span style="color:#BD976A">ReadableWritablePair</span><span style="color:#666666">&#x3C;</span><span style="color:#BD976A">ParsedElementInfo</span><span style="color:#666666">,</span><span style="color:#BD976A"> Uint8Array</span><span style="color:#666666">>,</span><span style="color:#BD976A"> options</span><span style="color:#CB7676">?:</span><span style="color:#BD976A"> StreamPipeOptions</span><span style="color:#CB7676"> |</span><span style="color:#CB7676"> undefined</span><span style="color:#666666">)</span><span style="color:#DBD7CAEE">: </span><span style="color:#BD976A">ReadableStream</span><span style="color:#666666">&#x3C;</span><span style="color:#BD976A">ParsedElementInfo</span><span style="color:#666666">></span></code></span>pipeThrough</span></span><span style="color:#666666">(</span><span style="color:#BD976A"><span class="twoslash-hover"><span class="twoslash-popup-container"><code class="twoslash-popup-code"><span style="color:#CB7676">const </span><span style="color:#BD976A">parser</span><span style="color:#666666">: </span><span style="color:#5DA994">JSONParser</span></code></span>parser</span></span><span style="color:#666666">)</span></span>
<span class="line"><span style="color:#666666">	.</span><span style="color:#80A665"><span class="twoslash-hover"><span class="twoslash-popup-container"><code class="twoslash-popup-code"><span style="color:#BD976A">ReadableStream</span><span style="color:#666666">&#x3C;</span><span style="color:#BD976A">ParsedElementInfo</span><span style="color:#666666">>.</span><span style="color:#80A665">pipeThrough</span><span style="color:#666666">&#x3C;</span><span style="color:#5DA994">unknown</span><span style="color:#666666">>(</span><span style="color:#BD976A">transform</span><span style="color:#DBD7CAEE">: </span><span style="color:#BD976A">ReadableWritablePair</span><span style="color:#666666">&#x3C;</span><span style="color:#BD976A">unknown</span><span style="color:#666666">,</span><span style="color:#BD976A"> ParsedElementInfo</span><span style="color:#666666">>,</span><span style="color:#BD976A"> options</span><span style="color:#CB7676">?:</span><span style="color:#BD976A"> StreamPipeOptions</span><span style="color:#CB7676"> |</span><span style="color:#CB7676"> undefined</span><span style="color:#666666">)</span><span style="color:#DBD7CAEE">: </span><span style="color:#BD976A">ReadableStream</span><span style="color:#666666">&#x3C;</span><span style="color:#BD976A">unknown</span><span style="color:#666666">></span></code></span>pipeThrough</span></span><span style="color:#666666">(</span><span style="color:#BD976A"><span class="twoslash-hover"><span class="twoslash-popup-container"><code class="twoslash-popup-code"><span style="color:#CB7676">const </span><span style="color:#BD976A">valueStream</span><span style="color:#666666">: </span><span style="color:#5DA994">TransformStream</span><span style="color:#666666">&#x3C;</span><span style="color:#CB7676">typeof</span><span style="color:#BD976A"> ParsedElementInfo</span><span style="color:#666666">, </span><span style="color:#5DA994">unknown</span><span style="color:#666666">></span></code></span>valueStream</span></span><span style="color:#666666">)</span></span>
<span class="line"><span style="color:#666666">	.</span><span style="color:#80A665"><span class="twoslash-hover"><span class="twoslash-popup-container"><code class="twoslash-popup-code"><span style="color:#BD976A">ReadableStream</span><span style="color:#666666">&#x3C;</span><span style="color:#BD976A">unknown</span><span style="color:#666666">>.</span><span style="color:#80A665">pipeThrough</span><span style="color:#666666">&#x3C;</span><span style="color:#5DA994">Todo</span><span style="color:#666666">>(</span><span style="color:#BD976A">transform</span><span style="color:#DBD7CAEE">: </span><span style="color:#BD976A">ReadableWritablePair</span><span style="color:#666666">&#x3C;</span><span style="color:#BD976A">Todo</span><span style="color:#666666">,</span><span style="color:#BD976A"> unknown</span><span style="color:#666666">>,</span><span style="color:#BD976A"> options</span><span style="color:#CB7676">?:</span><span style="color:#BD976A"> StreamPipeOptions</span><span style="color:#CB7676"> |</span><span style="color:#CB7676"> undefined</span><span style="color:#666666">)</span><span style="color:#DBD7CAEE">: </span><span style="color:#BD976A">ReadableStream</span><span style="color:#666666">&#x3C;</span><span style="color:#BD976A">Todo</span><span style="color:#666666">></span></code></span>pipeThrough</span></span><span style="color:#666666">(</span><span style="color:#BD976A"><span class="twoslash-hover"><span class="twoslash-popup-container"><code class="twoslash-popup-code"><span style="color:#CB7676">const </span><span style="color:#BD976A">validateTodoStream</span><span style="color:#666666">: </span><span style="color:#5DA994">TransformStream</span><span style="color:#666666">&#x3C;</span><span style="color:#5DA994">unknown</span><span style="color:#666666">, </span><span style="color:#5DA994">Todo</span><span style="color:#666666">></span></code></span>validateTodoStream</span></span><span style="color:#666666">);</span></span></code></pre>`;
  let t103;
  let p26;
  let textContent_26 = "We’ve now implemented all the original functionality in a streaming manner, but there is an opportunity to refactor here. Our two TransformStreams are very similar. They each execute a mapping function over every element, and emit the result. Let’s DRY that up. We’re going to make a helper called MapStream that takes the mapping-function as an argument and returns a TransformStream that runs it for each chunk. If it throws, we ignore the element.";
  let t105;
  let html_tag_10;
  let raw10_value = `<pre class="shiki vitesse-dark" style="background-color:#121212;color:#dbd7caee" tabindex="0"><code><span class="line"><span style="color:#758575DD">// helpers.ts</span></span>
<span class="line"><span style="color:#4D9375">export</span><span style="color:#CB7676"> function</span><span style="color:#80A665"> MapStream</span><span style="color:#666666">&#x3C;</span><span style="color:#5DA994">I</span><span style="color:#666666">,</span><span style="color:#5DA994"> O</span><span style="color:#666666">>(</span><span style="color:#80A665">map</span><span style="color:#666666">: (</span><span style="color:#BD976A">i</span><span style="color:#666666">: </span><span style="color:#5DA994">I</span><span style="color:#666666">) => </span><span style="color:#5DA994">O</span><span style="color:#666666">):</span><span style="color:#5DA994"> TransformStream</span><span style="color:#666666">&#x3C;</span><span style="color:#5DA994">I</span><span style="color:#666666">,</span><span style="color:#5DA994"> O</span><span style="color:#666666">></span><span style="color:#666666"> &#123;</span></span>
<span class="line"><span style="color:#4D9375">	return</span><span style="color:#CB7676"> new</span><span style="color:#80A665"> TransformStream</span><span style="color:#666666">(&#123;</span></span>
<span class="line"><span style="color:#80A665">		transform</span><span style="color:#666666">(</span><span style="color:#BD976A">chunk</span><span style="color:#666666">,</span><span style="color:#BD976A"> controller</span><span style="color:#666666">)</span><span style="color:#666666"> &#123;</span></span>
<span class="line"><span style="color:#4D9375">			try</span><span style="color:#666666"> &#123;</span></span>
<span class="line"><span style="color:#BD976A">				controller</span><span style="color:#666666">.</span><span style="color:#80A665">enqueue</span><span style="color:#666666">(</span><span style="color:#80A665">map</span><span style="color:#666666">(</span><span style="color:#BD976A">chunk</span><span style="color:#666666">));</span></span>
<span class="line"><span style="color:#666666">			&#125;</span><span style="color:#4D9375"> catch</span><span style="color:#666666"> (</span><span style="color:#BD976A">e</span><span style="color:#666666">)</span><span style="color:#666666"> &#123;&#125;</span></span>
<span class="line"><span style="color:#666666">		&#125;</span></span>
<span class="line"><span style="color:#666666">	&#125;);</span></span>
<span class="line"><span style="color:#666666">&#125;</span></span></code></pre>`;
  let t106;
  let p27;
  let textContent_27 = "We can now rewrite both our TransformStreams using the helper.";
  let t108;
  let html_tag_11;
  let raw11_value = `<pre class="shiki vitesse-dark twoslash lsp" style="background-color:#121212;color:#dbd7caee" tabindex="0"><code><span class="line"><span style="color:#4D9375">import</span><span style="color:#666666"> &#123;</span><span style="color:#BD976A"> </span><span style="color:#BD976A"><span class="twoslash-hover"><span class="twoslash-popup-container"><code class="twoslash-popup-code"><span style="color:#CB7676">function</span><span style="color:#80A665"> MapStream</span><span style="color:#666666">&#x3C;</span><span style="color:#5DA994">I</span><span style="color:#666666">,</span><span style="color:#5DA994"> O</span><span style="color:#666666">>(</span><span style="color:#80A665">map</span><span style="color:#666666">: (</span><span style="color:#BD976A">i</span><span style="color:#666666">: </span><span style="color:#5DA994">I</span><span style="color:#666666">) => </span><span style="color:#5DA994">O</span><span style="color:#666666">):</span><span style="color:#5DA994"> TransformStream</span><span style="color:#666666">&#x3C;</span><span style="color:#5DA994">I</span><span style="color:#666666">,</span><span style="color:#5DA994"> O</span><span style="color:#666666">></span></code></span>MapStream</span></span><span style="color:#666666"> &#125;</span><span style="color:#4D9375"> from</span><span style="color:#C98A7D99"> "</span><span style="color:#C98A7D">./helpers</span><span style="color:#C98A7D99">"</span></span>
<span class="line"><span style="color:#758575DD">//...</span></span>
<span class="line"><span style="color:#CB7676">const </span><span style="color:#BD976A"><span class="twoslash-hover"><span class="twoslash-popup-container"><code class="twoslash-popup-code"><pre class="shiki vitesse-dark" style="background-color:#121212;color:#dbd7caee" tabindex="0"><code><span class="line"><span style="color:#CB7676">const </span><span style="color:#BD976A">stream</span><span style="color:#666666">: </span><span style="color:#5DA994">ReadableStream</span><span style="color:#666666">&#x3C;&#123;</span></span>
<span class="line"><span style="color:#BD976A">    description</span><span style="color:#666666">: </span><span style="color:#5DA994">string</span><span style="color:#666666">;</span></span>
<span class="line"><span style="color:#BD976A">    done</span><span style="color:#666666">: </span><span style="color:#5DA994">boolean</span><span style="color:#666666">;</span></span>
<span class="line"><span style="color:#666666">&#125;></span></span></code></pre></code></span>stream</span></span><span style="color:#666666"> =</span><span style="color:#BD976A"> </span><span style="color:#BD976A"><span class="twoslash-hover"><span class="twoslash-popup-container"><code class="twoslash-popup-code"><span style="color:#CB7676">const </span><span style="color:#BD976A">response</span><span style="color:#666666">: </span><span style="color:#5DA994">Response</span></code></span>response</span></span><span style="color:#666666">.</span><span style="color:#BD976A"><span class="twoslash-hover"><span class="twoslash-popup-container"><code class="twoslash-popup-code"><span style="color:#BD976A">Body</span><span style="color:#666666">.</span><span style="color:#BD976A">body</span><span style="color:#DBD7CAEE">: </span><span style="color:#BD976A">ReadableStream</span><span style="color:#666666">&#x3C;</span><span style="color:#BD976A">Uint8Array</span><span style="color:#666666">></span><span style="color:#CB7676"> |</span><span style="color:#CB7676"> null</span></code></span>body</span></span><span style="color:#CB7676">!</span></span>
<span class="line"><span style="color:#666666">	.</span><span style="color:#80A665"><span class="twoslash-hover"><span class="twoslash-popup-container"><code class="twoslash-popup-code"><span style="color:#BD976A">ReadableStream</span><span style="color:#666666">&#x3C;</span><span style="color:#BD976A">Uint8Array</span><span style="color:#666666">>.</span><span style="color:#80A665">pipeThrough</span><span style="color:#666666">&#x3C;</span><span style="color:#5DA994">ParsedElementInfo</span><span style="color:#666666">>(</span><span style="color:#BD976A">transform</span><span style="color:#DBD7CAEE">: </span><span style="color:#BD976A">ReadableWritablePair</span><span style="color:#666666">&#x3C;</span><span style="color:#BD976A">ParsedElementInfo</span><span style="color:#666666">,</span><span style="color:#BD976A"> Uint8Array</span><span style="color:#666666">>,</span><span style="color:#BD976A"> options</span><span style="color:#CB7676">?:</span><span style="color:#BD976A"> StreamPipeOptions</span><span style="color:#CB7676"> |</span><span style="color:#CB7676"> undefined</span><span style="color:#666666">)</span><span style="color:#DBD7CAEE">: </span><span style="color:#BD976A">ReadableStream</span><span style="color:#666666">&#x3C;</span><span style="color:#BD976A">ParsedElementInfo</span><span style="color:#666666">></span></code></span>pipeThrough</span></span><span style="color:#666666">(</span><span style="color:#BD976A"><span class="twoslash-hover"><span class="twoslash-popup-container"><code class="twoslash-popup-code"><span style="color:#CB7676">const </span><span style="color:#BD976A">parser</span><span style="color:#666666">: </span><span style="color:#5DA994">JSONParser</span></code></span>parser</span></span><span style="color:#666666">)</span></span>
<span class="line"><span style="color:#666666">	.</span><span style="color:#80A665"><span class="twoslash-hover"><span class="twoslash-popup-container"><code class="twoslash-popup-code"><span style="color:#BD976A">ReadableStream</span><span style="color:#666666">&#x3C;</span><span style="color:#BD976A">ParsedElementInfo</span><span style="color:#666666">>.</span><span style="color:#80A665">pipeThrough</span><span style="color:#666666">&#x3C;</span><span style="color:#5DA994">any</span><span style="color:#666666">>(</span><span style="color:#BD976A">transform</span><span style="color:#DBD7CAEE">: </span><span style="color:#BD976A">ReadableWritablePair</span><span style="color:#666666">&#x3C;</span><span style="color:#BD976A">any</span><span style="color:#666666">,</span><span style="color:#BD976A"> ParsedElementInfo</span><span style="color:#666666">>,</span><span style="color:#BD976A"> options</span><span style="color:#CB7676">?:</span><span style="color:#BD976A"> StreamPipeOptions</span><span style="color:#CB7676"> |</span><span style="color:#CB7676"> undefined</span><span style="color:#666666">)</span><span style="color:#DBD7CAEE">: </span><span style="color:#BD976A">ReadableStream</span><span style="color:#666666">&#x3C;</span><span style="color:#BD976A">any</span><span style="color:#666666">></span></code></span>pipeThrough</span></span><span style="color:#666666">(</span><span style="color:#80A665"><span class="twoslash-hover"><span class="twoslash-popup-container"><code class="twoslash-popup-code"><span style="color:#80A665">MapStream</span><span style="color:#666666">&#x3C;</span><span style="color:#5DA994">ParsedElementInfo</span><span style="color:#666666">,</span><span style="color:#5DA994"> any</span><span style="color:#666666">>(</span><span style="color:#BD976A">map</span><span style="color:#DBD7CAEE">: </span><span style="color:#666666">(</span><span style="color:#BD976A">i</span><span style="color:#666666">: </span><span style="color:#5DA994">ParsedElementInfo</span><span style="color:#666666">)</span><span style="color:#666666"> =></span><span style="color:#BD976A"> any</span><span style="color:#666666">)</span><span style="color:#DBD7CAEE">: </span><span style="color:#BD976A">TransformStream</span><span style="color:#666666">&#x3C;</span><span style="color:#BD976A">ParsedElementInfo</span><span style="color:#666666">,</span><span style="color:#BD976A"> any</span><span style="color:#666666">></span></code></span>MapStream</span></span><span style="color:#666666">(</span><span style="color:#BD976A"><span class="twoslash-hover"><span class="twoslash-popup-container"><code class="twoslash-popup-code"><span style="color:#80A665">result</span><span style="color:#666666">:</span><span style="color:#BD976A"> ParsedElementInfo</span></code></span>result</span></span><span style="color:#666666"> =></span><span style="color:#BD976A"> </span><span style="color:#BD976A"><span class="twoslash-hover"><span class="twoslash-popup-container"><code class="twoslash-popup-code"><span style="color:#80A665">result</span><span style="color:#666666">:</span><span style="color:#BD976A"> ParsedElementInfo</span></code></span>result</span></span><span style="color:#666666">.</span><span style="color:#BD976A">value</span><span style="color:#666666">))</span></span>
<span class="line"><span style="color:#666666">	.</span><span style="color:#80A665"><span class="twoslash-hover"><span class="twoslash-popup-container"><code class="twoslash-popup-code"><pre class="shiki vitesse-dark" style="background-color:#121212;color:#dbd7caee" tabindex="0"><code><span class="line"><span style="color:#BD976A">ReadableStream</span><span style="color:#666666">&#x3C;</span><span style="color:#BD976A">any</span><span style="color:#666666">>.</span><span style="color:#80A665">pipeThrough</span><span style="color:#666666">&#x3C;&#123;</span></span>
<span class="line"><span style="color:#BD976A">    description</span><span style="color:#666666">: </span><span style="color:#5DA994">string</span><span style="color:#666666">;</span></span>
<span class="line"><span style="color:#BD976A">    done</span><span style="color:#666666">: </span><span style="color:#5DA994">boolean</span><span style="color:#666666">;</span></span>
<span class="line"><span style="color:#666666">&#125;>(</span><span style="color:#BD976A">transform</span><span style="color:#666666">: </span><span style="color:#5DA994">ReadableWritablePair</span><span style="color:#666666">&#x3C;&#123;</span></span>
<span class="line"><span style="color:#BD976A">    description</span><span style="color:#666666">: </span><span style="color:#5DA994">string</span><span style="color:#666666">;</span></span>
<span class="line"><span style="color:#BD976A">    done</span><span style="color:#666666">: </span><span style="color:#5DA994">boolean</span><span style="color:#666666">;</span></span>
<span class="line"><span style="color:#666666">&#125;, </span><span style="color:#5DA994">any</span><span style="color:#666666">>,</span><span style="color:#BD976A"> options</span><span style="color:#CB7676">?</span><span style="color:#666666">: </span><span style="color:#5DA994">StreamPipeOptions</span><span style="color:#666666"> | </span><span style="color:#CB7676">undefined</span><span style="color:#666666">):</span><span style="color:#5DA994"> ReadableStream</span><span style="color:#666666">&#x3C;</span><span style="color:#DBD7CAEE">...</span><span style="color:#666666">></span></span></code></pre></code></span>pipeThrough</span></span><span style="color:#666666">(</span><span style="color:#80A665"><span class="twoslash-hover"><span class="twoslash-popup-container"><code class="twoslash-popup-code"><pre class="shiki vitesse-dark" style="background-color:#121212;color:#dbd7caee" tabindex="0"><code><span class="line"><span style="color:#BD976A">MapStream</span><span style="color:#666666">&#x3C;</span><span style="color:#BD976A">unknown</span><span style="color:#666666">, &#123;</span></span>
<span class="line"><span style="color:#B8A965">    description</span><span style="color:#666666">: </span><span style="color:#BD976A">string</span><span style="color:#666666">;</span></span>
<span class="line"><span style="color:#BD976A">    done</span><span style="color:#666666">: </span><span style="color:#BD976A">boolean</span><span style="color:#666666">;</span></span>
<span class="line"><span style="color:#666666">&#125;>(</span><span style="color:#80A665">map</span><span style="color:#666666">: (</span><span style="color:#BD976A">i</span><span style="color:#666666">: </span><span style="color:#5DA994">unknown</span><span style="color:#666666">) => &#123;</span></span>
<span class="line"><span style="color:#BD976A">    description</span><span style="color:#666666">: </span><span style="color:#5DA994">string</span><span style="color:#666666">;</span></span>
<span class="line"><span style="color:#BD976A">    done</span><span style="color:#666666">: </span><span style="color:#5DA994">boolean</span><span style="color:#666666">;</span></span>
<span class="line"><span style="color:#666666">&#125;):</span><span style="color:#5DA994"> TransformStream</span><span style="color:#666666">&#x3C;</span><span style="color:#5DA994">unknown</span><span style="color:#666666">,</span><span style="color:#666666"> &#123;</span></span>
<span class="line"><span style="color:#BD976A">    description</span><span style="color:#666666">: </span><span style="color:#5DA994">string</span><span style="color:#666666">;</span></span>
<span class="line"><span style="color:#BD976A">    done</span><span style="color:#666666">: </span><span style="color:#5DA994">boolean</span><span style="color:#666666">;</span></span>
<span class="line"><span style="color:#666666">&#125;></span></span></code></pre></code></span>MapStream</span></span><span style="color:#666666">(</span><span style="color:#BD976A"><span class="twoslash-hover"><span class="twoslash-popup-container"><code class="twoslash-popup-code"><pre class="shiki vitesse-dark" style="background-color:#121212;color:#dbd7caee" tabindex="0"><code><span class="line"><span style="color:#CB7676">const </span><span style="color:#BD976A">TodoSchema</span><span style="color:#666666">: </span><span style="color:#5DA994">z</span><span style="color:#666666">.</span><span style="color:#5DA994">ZodObject</span><span style="color:#666666">&#x3C;&#123;</span></span>
<span class="line"><span style="color:#BD976A">    description</span><span style="color:#666666">: </span><span style="color:#5DA994">z</span><span style="color:#666666">.</span><span style="color:#5DA994">ZodString</span><span style="color:#666666">;</span></span>
<span class="line"><span style="color:#BD976A">    done</span><span style="color:#666666">: </span><span style="color:#5DA994">z</span><span style="color:#666666">.</span><span style="color:#5DA994">ZodBoolean</span><span style="color:#666666">;</span></span>
<span class="line"><span style="color:#666666">&#125;, </span><span style="color:#C98A7D99">"</span><span style="color:#C98A7D">strip</span><span style="color:#C98A7D99">"</span><span style="color:#666666">, </span><span style="color:#5DA994">z</span><span style="color:#666666">.</span><span style="color:#5DA994">ZodTypeAny</span><span style="color:#666666">, &#123;</span></span>
<span class="line"><span style="color:#BD976A">    description</span><span style="color:#666666">: </span><span style="color:#5DA994">string</span><span style="color:#666666">;</span></span>
<span class="line"><span style="color:#BD976A">    done</span><span style="color:#666666">: </span><span style="color:#5DA994">boolean</span><span style="color:#666666">;</span></span>
<span class="line"><span style="color:#666666">&#125;, &#123;</span></span>
<span class="line"><span style="color:#BD976A">    description</span><span style="color:#666666">: </span><span style="color:#5DA994">string</span><span style="color:#666666">;</span></span>
<span class="line"><span style="color:#BD976A">    done</span><span style="color:#666666">: </span><span style="color:#5DA994">boolean</span><span style="color:#666666">;</span></span>
<span class="line"><span style="color:#666666">&#125;></span></span></code></pre></code></span>TodoSchema</span></span><span style="color:#666666">.</span><span style="color:#BD976A"><span class="twoslash-hover"><span class="twoslash-popup-container"><code class="twoslash-popup-code"><pre class="shiki vitesse-dark" style="background-color:#121212;color:#dbd7caee" tabindex="0"><code><span class="line"><span style="color:#BD976A">ZodType</span><span style="color:#666666">&#x3C;&#123;</span><span style="color:#80A665"> description</span><span style="color:#666666">:</span><span style="color:#BD976A"> string</span><span style="color:#666666">;</span><span style="color:#80A665"> done</span><span style="color:#666666">:</span><span style="color:#BD976A"> boolean</span><span style="color:#666666">;</span><span style="color:#666666"> &#125;,</span><span style="color:#BD976A"> ZodObjectDef</span><span style="color:#666666">&#x3C;&#123;</span><span style="color:#80A665"> description</span><span style="color:#666666">:</span><span style="color:#BD976A"> ZodString</span><span style="color:#666666">;</span><span style="color:#80A665"> done</span><span style="color:#666666">:</span><span style="color:#BD976A"> ZodBoolean</span><span style="color:#666666">;</span><span style="color:#666666"> &#125;,</span><span style="color:#C98A7D99"> "</span><span style="color:#C98A7D">strip</span><span style="color:#C98A7D99">"</span><span style="color:#666666">,</span><span style="color:#BD976A"> ZodTypeAny</span><span style="color:#666666">>, &#123; </span><span style="color:#B8A965">description</span><span style="color:#666666">: </span><span style="color:#BD976A">string</span><span style="color:#666666">; </span><span style="color:#BD976A">done</span><span style="color:#666666">: </span><span style="color:#BD976A">boolean</span><span style="color:#666666">; &#125;>.</span><span style="color:#80A665">parse</span><span style="color:#666666">(</span><span style="color:#BD976A">data</span><span style="color:#DBD7CAEE">: </span><span style="color:#BD976A">unknown</span><span style="color:#666666">,</span><span style="color:#BD976A"> params</span><span style="color:#CB7676">?:</span><span style="color:#BD976A"> Partial</span><span style="color:#666666">&#x3C;</span><span style="color:#BD976A">z</span><span style="color:#666666">.</span><span style="color:#BD976A">ParseParams</span><span style="color:#666666">></span><span style="color:#CB7676"> |</span><span style="color:#CB7676"> undefined</span><span style="color:#666666">)</span><span style="color:#DBD7CAEE">:</span><span style="color:#666666"> &#123;</span></span>
<span class="line"><span style="color:#B8A965">    description</span><span style="color:#666666">: </span><span style="color:#BD976A">string</span><span style="color:#666666">;</span></span>
<span class="line"><span style="color:#BD976A">    done</span><span style="color:#666666">: </span><span style="color:#BD976A">boolean</span><span style="color:#666666">;</span></span>
<span class="line"><span style="color:#666666">&#125;</span></span></code></pre></code></span>parse</span></span><span style="color:#666666">))</span></span></code></pre>`;
  let t109;
  let p28;
  let textContent_28 = "Very expressive, isn’t it?";
  let t111;
  let p29;
  let textContent_29 = `With that, our implementation is done. But there is one more thing I would like to refactor; this while loop at the bottom. According to the spec, you’re supposed to be able to consume streams using a <code>for await of</code> loop, but not everyone implements this.`;
  let t115;
  let html_tag_12;
  let raw12_value = `<pre class="shiki vitesse-dark twoslash lsp" style="background-color:#121212;color:#dbd7caee" tabindex="0"><code><span class="line"><span style="color:#4D9375">for</span><span style="color:#4D9375"> await</span><span style="color:#666666"> (</span><span style="color:#CB7676">const </span><span style="color:#BD976A"><span class="twoslash-hover"><span class="twoslash-popup-container"><code class="twoslash-popup-code"><span style="color:#CB7676">const </span><span style="color:#BD976A">todo</span><span style="color:#666666">: </span><span style="color:#5DA994">Todo</span></code></span>todo</span></span><span style="color:#CB7676"> of</span><span style="color:#BD976A"> </span><span style="color:#BD976A"><span class="twoslash-hover"><span class="twoslash-popup-container"><code class="twoslash-popup-code"><span style="color:#CB7676">const </span><span style="color:#BD976A">stream</span><span style="color:#666666">: </span><span style="color:#5DA994">AsyncGenerator</span><span style="color:#666666">&#x3C;</span><span style="color:#5DA994">Todo</span><span style="color:#666666">, </span><span style="color:#5DA994">any</span><span style="color:#666666">, </span><span style="color:#5DA994">unknown</span><span style="color:#666666">></span></code></span>stream</span></span><span style="color:#666666">)</span><span style="color:#666666"> &#123;</span></span>
<span class="line"><span style="color:#80A665">	</span><span style="color:#80A665"><span class="twoslash-hover"><span class="twoslash-popup-container"><code class="twoslash-popup-code"><span style="color:#CB7676">const </span><span style="color:#80A665">display</span><span style="color:#666666">: (</span><span style="color:#BD976A">todo</span><span style="color:#666666">: </span><span style="color:#5DA994">Todo</span><span style="color:#666666">) => </span><span style="color:#5DA994">void</span></code></span>display</span></span><span style="color:#666666">(</span><span style="color:#BD976A"><span class="twoslash-hover"><span class="twoslash-popup-container"><code class="twoslash-popup-code"><span style="color:#CB7676">const </span><span style="color:#BD976A">todo</span><span style="color:#666666">: </span><span style="color:#5DA994">Todo</span></code></span>todo</span></span><span style="color:#666666">);</span></span>
<span class="line"><span style="color:#666666">&#125;</span></span></code></pre>`;
  let t116;
  let img6;
  let img6_src_value;
  let t117;
  let p30;
  let textContent_30 = "Let’s write another helper that let’s us use the nicer syntax. If you’ve never used async-generators before, this will look unintelligible. That’s ok, this is entirely optional; Just stick with the while loop.";
  let t119;
  let html_tag_13;
  let raw13_value = `<pre class="shiki vitesse-dark twoslash lsp" style="background-color:#121212;color:#dbd7caee" tabindex="0"><code><span class="line"><span style="color:#758575DD">// helpers.ts</span></span>
<span class="line"><span style="color:#4D9375">export</span><span style="color:#CB7676"> async</span><span style="color:#CB7676"> function</span><span style="color:#4D9375">*</span><span style="color:#80A665"> </span><span style="color:#80A665"><span class="twoslash-hover"><span class="twoslash-popup-container"><code class="twoslash-popup-code"><span style="color:#CB7676">function</span><span style="color:#80A665"> asIterable</span><span style="color:#666666">&#x3C;</span><span style="color:#5DA994">T</span><span style="color:#666666">>(</span><span style="color:#BD976A">stream</span><span style="color:#666666">: </span><span style="color:#5DA994">ReadableStream</span><span style="color:#666666">&#x3C;</span><span style="color:#5DA994">T</span><span style="color:#666666">>):</span><span style="color:#5DA994"> AsyncGenerator</span><span style="color:#666666">&#x3C;</span><span style="color:#5DA994">T</span><span style="color:#666666">></span></code></span>asIterable</span></span><span style="color:#666666">&#x3C;</span><span style="color:#5DA994"><span class="twoslash-hover"><span class="twoslash-popup-container"><code class="twoslash-popup-code"><span style="color:#CB7676">function</span><span style="color:#666666"> (</span><span style="color:#BD976A">type</span><span style="color:#BD976A"> parameter</span><span style="color:#666666">)</span><span style="color:#80A665"> T</span><span style="color:#80A665"> in</span><span style="color:#80A665"> asIterable</span><span style="color:#666666">&#x3C;</span><span style="color:#5DA994">T</span><span style="color:#666666">>(</span><span style="color:#BD976A">stream</span><span style="color:#666666">: </span><span style="color:#5DA994">ReadableStream</span><span style="color:#666666">&#x3C;</span><span style="color:#5DA994">T</span><span style="color:#666666">>):</span><span style="color:#5DA994"> AsyncGenerator</span><span style="color:#666666">&#x3C;</span><span style="color:#5DA994">T</span><span style="color:#666666">,</span><span style="color:#5DA994"> any</span><span style="color:#666666">,</span><span style="color:#5DA994"> unknown</span><span style="color:#666666">></span></code></span>T</span></span><span style="color:#666666">>(</span><span style="color:#BD976A"><span class="twoslash-hover"><span class="twoslash-popup-container"><code class="twoslash-popup-code"><span style="color:#80A665">stream</span><span style="color:#666666">:</span><span style="color:#BD976A"> ReadableStream</span><span style="color:#666666">&#x3C;</span><span style="color:#BD976A">T</span><span style="color:#666666">></span></code></span>stream</span></span><span style="color:#666666">: </span><span style="color:#5DA994"><span class="twoslash-hover"><span class="twoslash-popup-container"><code class="twoslash-popup-code"><span style="color:#CB7676">interface</span><span style="color:#5DA994"> ReadableStream</span><span style="color:#666666">&#x3C;</span><span style="color:#5DA994">R</span><span style="color:#666666"> =</span><span style="color:#5DA994"> any</span><span style="color:#666666">></span></code><div class="twoslash-popup-docs">This Streams API interface represents a readable stream of byte data. The Fetch API offers a concrete instance of a ReadableStream through the body property of a Response object.


&#96;ReadableStream&#96; class is a global reference for &#96;require('stream/web').ReadableStream&#96;.
https://nodejs.org/api/globals.html#class-readablestream</div><div class="twoslash-popup-docs twoslash-popup-docs-tags"><span class="twoslash-popup-docs-tag"><span class="twoslash-popup-docs-tag-name">@since</span><span class="twoslash-popup-docs-tag-value">v18.0.0</span></span></div></span>ReadableStream</span></span><span style="color:#666666">&#x3C;</span><span style="color:#5DA994"><span class="twoslash-hover"><span class="twoslash-popup-container"><code class="twoslash-popup-code"><span style="color:#CB7676">function</span><span style="color:#666666"> (</span><span style="color:#BD976A">type</span><span style="color:#BD976A"> parameter</span><span style="color:#666666">)</span><span style="color:#80A665"> T</span><span style="color:#80A665"> in</span><span style="color:#80A665"> asIterable</span><span style="color:#666666">&#x3C;</span><span style="color:#5DA994">T</span><span style="color:#666666">>(</span><span style="color:#BD976A">stream</span><span style="color:#666666">: </span><span style="color:#5DA994">ReadableStream</span><span style="color:#666666">&#x3C;</span><span style="color:#5DA994">T</span><span style="color:#666666">>):</span><span style="color:#5DA994"> AsyncGenerator</span><span style="color:#666666">&#x3C;</span><span style="color:#5DA994">T</span><span style="color:#666666">,</span><span style="color:#5DA994"> any</span><span style="color:#666666">,</span><span style="color:#5DA994"> unknown</span><span style="color:#666666">></span></code></span>T</span></span><span style="color:#666666">>):</span><span style="color:#5DA994"> </span><span style="color:#5DA994"><span class="twoslash-hover"><span class="twoslash-popup-container"><code class="twoslash-popup-code"><span style="color:#CB7676">interface</span><span style="color:#5DA994"> AsyncGenerator</span><span style="color:#666666">&#x3C;</span><span style="color:#5DA994">T</span><span style="color:#666666"> =</span><span style="color:#5DA994"> unknown</span><span style="color:#666666">,</span><span style="color:#5DA994"> TReturn</span><span style="color:#666666"> =</span><span style="color:#5DA994"> any</span><span style="color:#666666">,</span><span style="color:#5DA994"> TNext</span><span style="color:#666666"> =</span><span style="color:#5DA994"> unknown</span><span style="color:#666666">></span></code></span>AsyncGenerator</span></span><span style="color:#666666">&#x3C;</span><span style="color:#5DA994"><span class="twoslash-hover"><span class="twoslash-popup-container"><code class="twoslash-popup-code"><span style="color:#CB7676">function</span><span style="color:#666666"> (</span><span style="color:#BD976A">type</span><span style="color:#BD976A"> parameter</span><span style="color:#666666">)</span><span style="color:#80A665"> T</span><span style="color:#80A665"> in</span><span style="color:#80A665"> asIterable</span><span style="color:#666666">&#x3C;</span><span style="color:#5DA994">T</span><span style="color:#666666">>(</span><span style="color:#BD976A">stream</span><span style="color:#666666">: </span><span style="color:#5DA994">ReadableStream</span><span style="color:#666666">&#x3C;</span><span style="color:#5DA994">T</span><span style="color:#666666">>):</span><span style="color:#5DA994"> AsyncGenerator</span><span style="color:#666666">&#x3C;</span><span style="color:#5DA994">T</span><span style="color:#666666">,</span><span style="color:#5DA994"> any</span><span style="color:#666666">,</span><span style="color:#5DA994"> unknown</span><span style="color:#666666">></span></code></span>T</span></span><span style="color:#666666">></span><span style="color:#666666"> &#123;</span></span>
<span class="line"><span style="color:#CB7676">	const </span><span style="color:#BD976A"><span class="twoslash-hover"><span class="twoslash-popup-container"><code class="twoslash-popup-code"><span style="color:#CB7676">const </span><span style="color:#BD976A">reader</span><span style="color:#666666">: </span><span style="color:#5DA994">ReadableStreamDefaultReader</span><span style="color:#666666">&#x3C;</span><span style="color:#5DA994">T</span><span style="color:#666666">></span></code></span>reader</span></span><span style="color:#666666"> =</span><span style="color:#BD976A"> </span><span style="color:#BD976A"><span class="twoslash-hover"><span class="twoslash-popup-container"><code class="twoslash-popup-code"><span style="color:#80A665">stream</span><span style="color:#666666">:</span><span style="color:#BD976A"> ReadableStream</span><span style="color:#666666">&#x3C;</span><span style="color:#BD976A">T</span><span style="color:#666666">></span></code></span>stream</span></span><span style="color:#666666">.</span><span style="color:#80A665"><span class="twoslash-hover"><span class="twoslash-popup-container"><code class="twoslash-popup-code"><span style="color:#BD976A">ReadableStream</span><span style="color:#666666">&#x3C;</span><span style="color:#BD976A">T</span><span style="color:#666666">>.</span><span style="color:#80A665">getReader</span><span style="color:#666666">()</span><span style="color:#DBD7CAEE">: </span><span style="color:#80A665">ReadableStreamDefaultReader</span><span style="color:#666666">&#x3C;</span><span style="color:#5DA994">T</span><span style="color:#666666">></span><span style="color:#666666"> (</span><span style="color:#CB7676">+</span><span style="color:#4C9A91">2</span><span style="color:#BD976A"> overloads</span><span style="color:#666666">)</span></code></span>getReader</span></span><span style="color:#666666">();</span></span>
<span class="line"><span style="color:#4D9375">	while</span><span style="color:#666666"> (</span><span style="color:#4D9375">true</span><span style="color:#666666">)</span><span style="color:#666666"> &#123;</span></span>
<span class="line"><span style="color:#CB7676">		const </span><span style="color:#666666">&#123;</span><span style="color:#BD976A"> </span><span style="color:#BD976A"><span class="twoslash-hover"><span class="twoslash-popup-container"><code class="twoslash-popup-code"><span style="color:#CB7676">const </span><span style="color:#BD976A">value</span><span style="color:#666666">: </span><span style="color:#5DA994">T</span><span style="color:#666666"> | </span><span style="color:#CB7676">undefined</span></code></span>value</span></span><span style="color:#666666">,</span><span style="color:#BD976A"> </span><span style="color:#BD976A"><span class="twoslash-hover"><span class="twoslash-popup-container"><code class="twoslash-popup-code"><span style="color:#CB7676">const </span><span style="color:#BD976A">done</span><span style="color:#666666">: </span><span style="color:#5DA994">boolean</span></code></span>done</span></span><span style="color:#666666"> &#125;</span><span style="color:#666666"> =</span><span style="color:#4D9375"> await</span><span style="color:#BD976A"> </span><span style="color:#BD976A"><span class="twoslash-hover"><span class="twoslash-popup-container"><code class="twoslash-popup-code"><span style="color:#CB7676">const </span><span style="color:#BD976A">reader</span><span style="color:#666666">: </span><span style="color:#5DA994">ReadableStreamDefaultReader</span><span style="color:#666666">&#x3C;</span><span style="color:#5DA994">T</span><span style="color:#666666">></span></code></span>reader</span></span><span style="color:#666666">.</span><span style="color:#80A665"><span class="twoslash-hover"><span class="twoslash-popup-container"><code class="twoslash-popup-code"><span style="color:#BD976A">ReadableStreamDefaultReader</span><span style="color:#666666">&#x3C;</span><span style="color:#BD976A">T</span><span style="color:#666666">>.</span><span style="color:#80A665">read</span><span style="color:#666666">()</span><span style="color:#DBD7CAEE">: </span><span style="color:#B8A965">Promise</span><span style="color:#666666">&#x3C;</span><span style="color:#BD976A">ReadableStreamReadResult</span><span style="color:#666666">&#x3C;</span><span style="color:#BD976A">T</span><span style="color:#CB7676">>></span></code></span>read</span></span><span style="color:#666666">();</span></span>
<span class="line"><span style="color:#4D9375">		if</span><span style="color:#666666"> (</span><span style="color:#BD976A"><span class="twoslash-hover"><span class="twoslash-popup-container"><code class="twoslash-popup-code"><span style="color:#CB7676">const </span><span style="color:#BD976A">done</span><span style="color:#666666">: </span><span style="color:#5DA994">boolean</span></code></span>done</span></span><span style="color:#666666">)</span><span style="color:#4D9375"> break</span><span style="color:#666666">;</span></span>
<span class="line"><span style="color:#4D9375">		yield</span><span style="color:#BD976A"> </span><span style="color:#BD976A"><span class="twoslash-hover"><span class="twoslash-popup-container"><code class="twoslash-popup-code"><span style="color:#CB7676">const </span><span style="color:#BD976A">value</span><span style="color:#666666">: </span><span style="color:#5DA994">T</span></code></span>value</span></span><span style="color:#666666">;</span></span>
<span class="line"><span style="color:#666666">	&#125;</span></span>
<span class="line"><span style="color:#666666">&#125;</span></span></code></pre>`;
  let t120;
  let p31;
  let textContent_31 = `We can now use <code>for await (const todo of asIterable(stream))</code> to asynchronously loop over the elements in the stream. I find this easier to read, since there is no control-flow.`;
  let t124;
  let html_tag_14;
  let raw14_value = `<pre class="shiki vitesse-dark" style="background-color:#121212;color:#dbd7caee" tabindex="0"><code><span class="line"><span style="color:#758575DD">// @filename: helpers.ts</span></span>
<span class="line"><span style="color:#CB7676">declare</span><span style="color:#CB7676"> function</span><span style="color:#80A665"> MapStream</span><span style="color:#666666">&#x3C;</span><span style="color:#5DA994">I</span><span style="color:#666666">,</span><span style="color:#5DA994"> O</span><span style="color:#666666">>(</span><span style="color:#80A665">map</span><span style="color:#666666">: (</span><span style="color:#BD976A">i</span><span style="color:#666666">: </span><span style="color:#5DA994">I</span><span style="color:#666666">) => </span><span style="color:#5DA994">O</span><span style="color:#666666">)</span><span style="color:#666666"> :</span><span style="color:#5DA994"> TransformStream</span><span style="color:#666666">&#x3C;</span><span style="color:#5DA994">I</span><span style="color:#666666">,</span><span style="color:#5DA994"> O</span><span style="color:#666666">></span></span>
<span class="line"><span style="color:#CB7676">declare</span><span style="color:#CB7676"> function</span><span style="color:#80A665"> asIterable</span><span style="color:#666666">&#x3C;</span><span style="color:#5DA994">T</span><span style="color:#666666">>(</span><span style="color:#BD976A">stream</span><span style="color:#666666">: </span><span style="color:#5DA994">ReadableStream</span><span style="color:#666666">&#x3C;</span><span style="color:#5DA994">T</span><span style="color:#666666">>):</span><span style="color:#5DA994"> AsyncGenerator</span><span style="color:#666666">&#x3C;</span><span style="color:#5DA994">T</span><span style="color:#666666">></span><span style="color:#DBD7CAEE"> </span></span>
<span class="line"><span style="color:#4D9375">export</span><span style="color:#666666"> &#123;</span><span style="color:#BD976A"> MapStream</span><span style="color:#666666">,</span><span style="color:#BD976A"> asIterable</span><span style="color:#666666"> &#125;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#758575DD">// @filename: fetch.ts</span></span>
<span class="line"><span style="color:#CB7676">type</span><span style="color:#5DA994"> Todo</span><span style="color:#666666"> =</span><span style="color:#666666"> &#123;</span><span style="color:#BD976A"> description</span><span style="color:#666666">: </span><span style="color:#5DA994">string</span><span style="color:#666666">,</span><span style="color:#BD976A"> done</span><span style="color:#666666">: </span><span style="color:#5DA994">boolean</span><span style="color:#666666"> &#125;</span></span>
<span class="line"><span style="color:#CB7676">declare</span><span style="color:#CB7676"> const</span><span style="color:#BD976A"> stream</span><span style="color:#666666">: </span><span style="color:#5DA994">ReadableStream</span><span style="color:#666666">&#x3C;</span><span style="color:#5DA994">Todo</span><span style="color:#666666">></span></span>
<span class="line"><span style="color:#CB7676">declare</span><span style="color:#CB7676"> const</span><span style="color:#80A665"> display</span><span style="color:#666666">: (</span><span style="color:#BD976A">todo</span><span style="color:#666666">: </span><span style="color:#5DA994">Todo</span><span style="color:#666666">) => </span><span style="color:#5DA994">void</span></span>
<span class="line"><span style="color:#758575DD">// ---cut-before---</span></span>
<span class="line"><span style="color:#4D9375">import</span><span style="color:#666666"> &#123;</span><span style="color:#BD976A"> MapStream</span><span style="color:#666666">,</span><span style="color:#BD976A"> asIterable</span><span style="color:#666666"> &#125;</span><span style="color:#4D9375"> from</span><span style="color:#C98A7D99"> "</span><span style="color:#C98A7D">./helpers</span><span style="color:#C98A7D99">"</span></span>
<span class="line"><span style="color:#758575DD">//...</span></span>
<span class="line"><span style="color:#4D9375">for</span><span style="color:#4D9375"> await</span><span style="color:#666666"> (</span><span style="color:#CB7676">const</span><span style="color:#BD976A"> todo</span><span style="color:#CB7676"> of</span><span style="color:#80A665"> asIterable</span><span style="color:#666666">(</span><span style="color:#BD976A">stream</span><span style="color:#666666">))</span><span style="color:#666666"> &#123;</span></span>
<span class="line"><span style="color:#80A665">	display</span><span style="color:#666666">(</span><span style="color:#BD976A">todo</span><span style="color:#666666">);</span></span>
<span class="line"><span style="color:#666666">&#125;</span></span></code></pre>`;
  let t125;
  let p32;
  let textContent_32 = "The final code looks like this:";
  let t127;
  let html_tag_15;
  let raw15_value = `<pre class="shiki vitesse-dark twoslash lsp" style="background-color:#121212;color:#dbd7caee" tabindex="0"><code><span class="line"><span style="color:#4D9375">import</span><span style="color:#666666"> &#123;</span><span style="color:#BD976A"> </span><span style="color:#BD976A"><span class="twoslash-hover"><span class="twoslash-popup-container"><code class="twoslash-popup-code"><span style="color:#CB7676">class</span><span style="color:#5DA994"> JSONParser</span></code></span>JSONParser</span></span><span style="color:#666666"> &#125;</span><span style="color:#4D9375"> from</span><span style="color:#C98A7D99"> '</span><span style="color:#C98A7D">@streamparser/json-whatwg</span><span style="color:#C98A7D99">'</span><span style="color:#666666">;</span></span>
<span class="line"><span style="color:#4D9375">import</span><span style="color:#666666"> &#123;</span><span style="color:#BD976A"> </span><span style="color:#BD976A"><span class="twoslash-hover"><span class="twoslash-popup-container"><code class="twoslash-popup-code"><span style="color:#CB7676">function</span><span style="color:#80A665"> MapStream</span><span style="color:#666666">&#x3C;</span><span style="color:#5DA994">I</span><span style="color:#666666">,</span><span style="color:#5DA994"> O</span><span style="color:#666666">>(</span><span style="color:#80A665">map</span><span style="color:#666666">: (</span><span style="color:#BD976A">i</span><span style="color:#666666">: </span><span style="color:#5DA994">I</span><span style="color:#666666">) => </span><span style="color:#5DA994">O</span><span style="color:#666666">):</span><span style="color:#5DA994"> TransformStream</span><span style="color:#666666">&#x3C;</span><span style="color:#5DA994">I</span><span style="color:#666666">,</span><span style="color:#5DA994"> O</span><span style="color:#666666">></span></code></span>MapStream</span></span><span style="color:#666666">,</span><span style="color:#BD976A"> </span><span style="color:#BD976A"><span class="twoslash-hover"><span class="twoslash-popup-container"><code class="twoslash-popup-code"><span style="color:#CB7676">function</span><span style="color:#80A665"> asIterable</span><span style="color:#666666">&#x3C;</span><span style="color:#5DA994">T</span><span style="color:#666666">>(</span><span style="color:#BD976A">stream</span><span style="color:#666666">: </span><span style="color:#5DA994">ReadableStream</span><span style="color:#666666">&#x3C;</span><span style="color:#5DA994">T</span><span style="color:#666666">>):</span><span style="color:#5DA994"> AsyncGenerator</span><span style="color:#666666">&#x3C;</span><span style="color:#5DA994">T</span><span style="color:#666666">></span></code></span>asIterable</span></span><span style="color:#666666"> &#125;</span><span style="color:#4D9375"> from</span><span style="color:#C98A7D99"> '</span><span style="color:#C98A7D">./helpers</span><span style="color:#C98A7D99">'</span><span style="color:#666666">;</span></span>
<span class="line"><span style="color:#4D9375">import</span><span style="color:#666666"> &#123;</span><span style="color:#BD976A"> </span><span style="color:#BD976A"><span class="twoslash-hover"><span class="twoslash-popup-container"><code class="twoslash-popup-code"><pre class="shiki vitesse-dark" style="background-color:#121212;color:#dbd7caee" tabindex="0"><code><span class="line"><span style="color:#CB7676">const </span><span style="color:#BD976A">TodoSchema</span><span style="color:#666666">: </span><span style="color:#5DA994">z</span><span style="color:#666666">.</span><span style="color:#5DA994">ZodObject</span><span style="color:#666666">&#x3C;&#123;</span></span>
<span class="line"><span style="color:#BD976A">    description</span><span style="color:#666666">: </span><span style="color:#5DA994">z</span><span style="color:#666666">.</span><span style="color:#5DA994">ZodString</span><span style="color:#666666">;</span></span>
<span class="line"><span style="color:#BD976A">    done</span><span style="color:#666666">: </span><span style="color:#5DA994">z</span><span style="color:#666666">.</span><span style="color:#5DA994">ZodBoolean</span><span style="color:#666666">;</span></span>
<span class="line"><span style="color:#666666">&#125;, </span><span style="color:#C98A7D99">"</span><span style="color:#C98A7D">strip</span><span style="color:#C98A7D99">"</span><span style="color:#666666">, </span><span style="color:#5DA994">z</span><span style="color:#666666">.</span><span style="color:#5DA994">ZodTypeAny</span><span style="color:#666666">, &#123;</span></span>
<span class="line"><span style="color:#BD976A">    description</span><span style="color:#666666">: </span><span style="color:#5DA994">string</span><span style="color:#666666">;</span></span>
<span class="line"><span style="color:#BD976A">    done</span><span style="color:#666666">: </span><span style="color:#5DA994">boolean</span><span style="color:#666666">;</span></span>
<span class="line"><span style="color:#666666">&#125;, &#123;</span></span>
<span class="line"><span style="color:#BD976A">    description</span><span style="color:#666666">: </span><span style="color:#5DA994">string</span><span style="color:#666666">;</span></span>
<span class="line"><span style="color:#BD976A">    done</span><span style="color:#666666">: </span><span style="color:#5DA994">boolean</span><span style="color:#666666">;</span></span>
<span class="line"><span style="color:#666666">&#125;></span></span></code></pre></code></span>TodoSchema</span></span><span style="color:#666666"> &#125;</span><span style="color:#4D9375"> from</span><span style="color:#C98A7D99"> '</span><span style="color:#C98A7D">./model</span><span style="color:#C98A7D99">'</span><span style="color:#666666">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#CB7676">const </span><span style="color:#BD976A"><span class="twoslash-hover"><span class="twoslash-popup-container"><code class="twoslash-popup-code"><span style="color:#CB7676">const </span><span style="color:#BD976A">response</span><span style="color:#666666">: </span><span style="color:#5DA994">Response</span></code></span>response</span></span><span style="color:#666666"> =</span><span style="color:#4D9375"> await</span><span style="color:#80A665"> </span><span style="color:#80A665"><span class="twoslash-hover"><span class="twoslash-popup-container"><code class="twoslash-popup-code"><span style="color:#CB7676">function</span><span style="color:#80A665"> fetch</span><span style="color:#666666">(</span><span style="color:#BD976A">input</span><span style="color:#666666">: </span><span style="color:#5DA994">string</span><span style="color:#666666"> | </span><span style="color:#5DA994">URL</span><span style="color:#666666"> | </span><span style="color:#5DA994">Request</span><span style="color:#666666">,</span><span style="color:#BD976A"> init</span><span style="color:#CB7676">?</span><span style="color:#666666">: </span><span style="color:#5DA994">RequestInit</span><span style="color:#666666"> | </span><span style="color:#CB7676">undefined</span><span style="color:#666666">):</span><span style="color:#5DA994"> Promise</span><span style="color:#666666">&#x3C;</span><span style="color:#5DA994">Response</span><span style="color:#666666">></span><span style="color:#666666"> (</span><span style="color:#DBD7CAEE">+</span><span style="color:#4C9A91">1</span><span style="color:#5DA994"> overload</span><span style="color:#666666">)</span></code></span>fetch</span></span><span style="color:#666666">(</span><span style="color:#C98A7D99">'</span><span style="color:#C98A7D">/todos.json</span><span style="color:#C98A7D99">'</span><span style="color:#666666">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#CB7676">const </span><span style="color:#BD976A"><span class="twoslash-hover"><span class="twoslash-popup-container"><code class="twoslash-popup-code"><span style="color:#CB7676">const </span><span style="color:#BD976A">parser</span><span style="color:#666666">: </span><span style="color:#5DA994">JSONParser</span></code></span>parser</span></span><span style="color:#666666"> =</span><span style="color:#CB7676"> new </span><span style="color:#80A665"><span class="twoslash-hover"><span class="twoslash-popup-container"><code class="twoslash-popup-code"><span style="color:#CB7676">new</span><span style="color:#80A665"> JSONParser</span><span style="color:#666666">(</span><span style="color:#BD976A">opts</span><span style="color:#CB7676">?:</span><span style="color:#BD976A"> JSONParserOptions</span><span style="color:#CB7676"> |</span><span style="color:#CB7676"> undefined</span><span style="color:#666666">,</span><span style="color:#BD976A"> writableStrategy</span><span style="color:#CB7676">?:</span><span style="color:#BD976A"> QueuingStrategy</span><span style="color:#666666">&#x3C;</span><span style="color:#BD976A">any</span><span style="color:#666666">></span><span style="color:#CB7676"> |</span><span style="color:#CB7676"> undefined</span><span style="color:#666666">,</span><span style="color:#BD976A"> readableStrategy</span><span style="color:#CB7676">?:</span><span style="color:#BD976A"> QueuingStrategy</span><span style="color:#666666">&#x3C;</span><span style="color:#BD976A">any</span><span style="color:#666666">></span><span style="color:#CB7676"> |</span><span style="color:#CB7676"> undefined</span><span style="color:#666666">)</span><span style="color:#DBD7CAEE">: </span><span style="color:#BD976A">JSONParser</span></code></span>JSONParser</span></span><span style="color:#666666">(&#123;</span></span>
<span class="line"><span style="color:#B8A965">	</span><span style="color:#B8A965"><span class="twoslash-hover"><span class="twoslash-popup-container"><code class="twoslash-popup-code"><span style="color:#BD976A">TokenParserOptions</span><span style="color:#666666">.</span><span style="color:#BD976A">paths</span><span style="color:#CB7676">?:</span><span style="color:#BD976A"> string</span><span style="color:#666666">[]</span><span style="color:#CB7676"> |</span><span style="color:#CB7676"> undefined</span></code></span>paths</span></span><span style="color:#666666">: [</span><span style="color:#C98A7D99">'</span><span style="color:#C98A7D">$.*</span><span style="color:#C98A7D99">'</span><span style="color:#666666">]</span></span>
<span class="line"><span style="color:#666666">&#125;);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#CB7676">const </span><span style="color:#BD976A"><span class="twoslash-hover"><span class="twoslash-popup-container"><code class="twoslash-popup-code"><pre class="shiki vitesse-dark" style="background-color:#121212;color:#dbd7caee" tabindex="0"><code><span class="line"><span style="color:#CB7676">const </span><span style="color:#BD976A">stream</span><span style="color:#666666">: </span><span style="color:#5DA994">ReadableStream</span><span style="color:#666666">&#x3C;&#123;</span></span>
<span class="line"><span style="color:#BD976A">    description</span><span style="color:#666666">: </span><span style="color:#5DA994">string</span><span style="color:#666666">;</span></span>
<span class="line"><span style="color:#BD976A">    done</span><span style="color:#666666">: </span><span style="color:#5DA994">boolean</span><span style="color:#666666">;</span></span>
<span class="line"><span style="color:#666666">&#125;></span></span></code></pre></code></span>stream</span></span><span style="color:#666666"> =</span><span style="color:#BD976A"> </span><span style="color:#BD976A"><span class="twoslash-hover"><span class="twoslash-popup-container"><code class="twoslash-popup-code"><span style="color:#CB7676">const </span><span style="color:#BD976A">response</span><span style="color:#666666">: </span><span style="color:#5DA994">Response</span></code></span>response</span></span><span style="color:#666666">.</span><span style="color:#BD976A"><span class="twoslash-hover"><span class="twoslash-popup-container"><code class="twoslash-popup-code"><span style="color:#BD976A">Body</span><span style="color:#666666">.</span><span style="color:#BD976A">body</span><span style="color:#DBD7CAEE">: </span><span style="color:#BD976A">ReadableStream</span><span style="color:#666666">&#x3C;</span><span style="color:#BD976A">Uint8Array</span><span style="color:#666666">></span><span style="color:#CB7676"> |</span><span style="color:#CB7676"> null</span></code></span>body</span></span><span style="color:#CB7676">!</span></span>
<span class="line"><span style="color:#666666">	.</span><span style="color:#80A665"><span class="twoslash-hover"><span class="twoslash-popup-container"><code class="twoslash-popup-code"><span style="color:#BD976A">ReadableStream</span><span style="color:#666666">&#x3C;</span><span style="color:#BD976A">Uint8Array</span><span style="color:#666666">>.</span><span style="color:#80A665">pipeThrough</span><span style="color:#666666">&#x3C;</span><span style="color:#5DA994">ParsedElementInfo</span><span style="color:#666666">>(</span><span style="color:#BD976A">transform</span><span style="color:#DBD7CAEE">: </span><span style="color:#BD976A">ReadableWritablePair</span><span style="color:#666666">&#x3C;</span><span style="color:#BD976A">ParsedElementInfo</span><span style="color:#666666">,</span><span style="color:#BD976A"> Uint8Array</span><span style="color:#666666">>,</span><span style="color:#BD976A"> options</span><span style="color:#CB7676">?:</span><span style="color:#BD976A"> StreamPipeOptions</span><span style="color:#CB7676"> |</span><span style="color:#CB7676"> undefined</span><span style="color:#666666">)</span><span style="color:#DBD7CAEE">: </span><span style="color:#BD976A">ReadableStream</span><span style="color:#666666">&#x3C;</span><span style="color:#BD976A">ParsedElementInfo</span><span style="color:#666666">></span></code></span>pipeThrough</span></span><span style="color:#666666">(</span><span style="color:#BD976A"><span class="twoslash-hover"><span class="twoslash-popup-container"><code class="twoslash-popup-code"><span style="color:#CB7676">const </span><span style="color:#BD976A">parser</span><span style="color:#666666">: </span><span style="color:#5DA994">JSONParser</span></code></span>parser</span></span><span style="color:#666666">)</span></span>
<span class="line"><span style="color:#666666">	.</span><span style="color:#80A665"><span class="twoslash-hover"><span class="twoslash-popup-container"><code class="twoslash-popup-code"><span style="color:#BD976A">ReadableStream</span><span style="color:#666666">&#x3C;</span><span style="color:#BD976A">ParsedElementInfo</span><span style="color:#666666">>.</span><span style="color:#80A665">pipeThrough</span><span style="color:#666666">&#x3C;</span><span style="color:#5DA994">any</span><span style="color:#666666">>(</span><span style="color:#BD976A">transform</span><span style="color:#DBD7CAEE">: </span><span style="color:#BD976A">ReadableWritablePair</span><span style="color:#666666">&#x3C;</span><span style="color:#BD976A">any</span><span style="color:#666666">,</span><span style="color:#BD976A"> ParsedElementInfo</span><span style="color:#666666">>,</span><span style="color:#BD976A"> options</span><span style="color:#CB7676">?:</span><span style="color:#BD976A"> StreamPipeOptions</span><span style="color:#CB7676"> |</span><span style="color:#CB7676"> undefined</span><span style="color:#666666">)</span><span style="color:#DBD7CAEE">: </span><span style="color:#BD976A">ReadableStream</span><span style="color:#666666">&#x3C;</span><span style="color:#BD976A">any</span><span style="color:#666666">></span></code></span>pipeThrough</span></span><span style="color:#666666">(</span><span style="color:#80A665"><span class="twoslash-hover"><span class="twoslash-popup-container"><code class="twoslash-popup-code"><span style="color:#80A665">MapStream</span><span style="color:#666666">&#x3C;</span><span style="color:#5DA994">ParsedElementInfo</span><span style="color:#666666">,</span><span style="color:#5DA994"> any</span><span style="color:#666666">>(</span><span style="color:#BD976A">map</span><span style="color:#DBD7CAEE">: </span><span style="color:#666666">(</span><span style="color:#BD976A">i</span><span style="color:#666666">: </span><span style="color:#5DA994">ParsedElementInfo</span><span style="color:#666666">)</span><span style="color:#666666"> =></span><span style="color:#BD976A"> any</span><span style="color:#666666">)</span><span style="color:#DBD7CAEE">: </span><span style="color:#BD976A">TransformStream</span><span style="color:#666666">&#x3C;</span><span style="color:#BD976A">ParsedElementInfo</span><span style="color:#666666">,</span><span style="color:#BD976A"> any</span><span style="color:#666666">></span></code></span>MapStream</span></span><span style="color:#666666">((</span><span style="color:#BD976A"><span class="twoslash-hover"><span class="twoslash-popup-container"><code class="twoslash-popup-code"><span style="color:#80A665">result</span><span style="color:#666666">:</span><span style="color:#BD976A"> ParsedElementInfo</span></code></span>result</span></span><span style="color:#666666">)</span><span style="color:#666666"> =></span><span style="color:#BD976A"> </span><span style="color:#BD976A"><span class="twoslash-hover"><span class="twoslash-popup-container"><code class="twoslash-popup-code"><span style="color:#80A665">result</span><span style="color:#666666">:</span><span style="color:#BD976A"> ParsedElementInfo</span></code></span>result</span></span><span style="color:#666666">.</span><span style="color:#BD976A">value</span><span style="color:#666666">))</span></span>
<span class="line"><span style="color:#666666">	.</span><span style="color:#80A665"><span class="twoslash-hover"><span class="twoslash-popup-container"><code class="twoslash-popup-code"><pre class="shiki vitesse-dark" style="background-color:#121212;color:#dbd7caee" tabindex="0"><code><span class="line"><span style="color:#BD976A">ReadableStream</span><span style="color:#666666">&#x3C;</span><span style="color:#BD976A">any</span><span style="color:#666666">>.</span><span style="color:#80A665">pipeThrough</span><span style="color:#666666">&#x3C;&#123;</span></span>
<span class="line"><span style="color:#BD976A">    description</span><span style="color:#666666">: </span><span style="color:#5DA994">string</span><span style="color:#666666">;</span></span>
<span class="line"><span style="color:#BD976A">    done</span><span style="color:#666666">: </span><span style="color:#5DA994">boolean</span><span style="color:#666666">;</span></span>
<span class="line"><span style="color:#666666">&#125;>(</span><span style="color:#BD976A">transform</span><span style="color:#666666">: </span><span style="color:#5DA994">ReadableWritablePair</span><span style="color:#666666">&#x3C;&#123;</span></span>
<span class="line"><span style="color:#BD976A">    description</span><span style="color:#666666">: </span><span style="color:#5DA994">string</span><span style="color:#666666">;</span></span>
<span class="line"><span style="color:#BD976A">    done</span><span style="color:#666666">: </span><span style="color:#5DA994">boolean</span><span style="color:#666666">;</span></span>
<span class="line"><span style="color:#666666">&#125;, </span><span style="color:#5DA994">any</span><span style="color:#666666">>,</span><span style="color:#BD976A"> options</span><span style="color:#CB7676">?</span><span style="color:#666666">: </span><span style="color:#5DA994">StreamPipeOptions</span><span style="color:#666666"> | </span><span style="color:#CB7676">undefined</span><span style="color:#666666">):</span><span style="color:#5DA994"> ReadableStream</span><span style="color:#666666">&#x3C;</span><span style="color:#DBD7CAEE">...</span><span style="color:#666666">></span></span></code></pre></code></span>pipeThrough</span></span><span style="color:#666666">(</span><span style="color:#80A665"><span class="twoslash-hover"><span class="twoslash-popup-container"><code class="twoslash-popup-code"><pre class="shiki vitesse-dark" style="background-color:#121212;color:#dbd7caee" tabindex="0"><code><span class="line"><span style="color:#BD976A">MapStream</span><span style="color:#666666">&#x3C;</span><span style="color:#BD976A">unknown</span><span style="color:#666666">, &#123;</span></span>
<span class="line"><span style="color:#B8A965">    description</span><span style="color:#666666">: </span><span style="color:#BD976A">string</span><span style="color:#666666">;</span></span>
<span class="line"><span style="color:#BD976A">    done</span><span style="color:#666666">: </span><span style="color:#BD976A">boolean</span><span style="color:#666666">;</span></span>
<span class="line"><span style="color:#666666">&#125;>(</span><span style="color:#80A665">map</span><span style="color:#666666">: (</span><span style="color:#BD976A">i</span><span style="color:#666666">: </span><span style="color:#5DA994">unknown</span><span style="color:#666666">) => &#123;</span></span>
<span class="line"><span style="color:#BD976A">    description</span><span style="color:#666666">: </span><span style="color:#5DA994">string</span><span style="color:#666666">;</span></span>
<span class="line"><span style="color:#BD976A">    done</span><span style="color:#666666">: </span><span style="color:#5DA994">boolean</span><span style="color:#666666">;</span></span>
<span class="line"><span style="color:#666666">&#125;):</span><span style="color:#5DA994"> TransformStream</span><span style="color:#666666">&#x3C;</span><span style="color:#5DA994">unknown</span><span style="color:#666666">,</span><span style="color:#666666"> &#123;</span></span>
<span class="line"><span style="color:#BD976A">    description</span><span style="color:#666666">: </span><span style="color:#5DA994">string</span><span style="color:#666666">;</span></span>
<span class="line"><span style="color:#BD976A">    done</span><span style="color:#666666">: </span><span style="color:#5DA994">boolean</span><span style="color:#666666">;</span></span>
<span class="line"><span style="color:#666666">&#125;></span></span></code></pre></code></span>MapStream</span></span><span style="color:#666666">(</span><span style="color:#BD976A"><span class="twoslash-hover"><span class="twoslash-popup-container"><code class="twoslash-popup-code"><pre class="shiki vitesse-dark" style="background-color:#121212;color:#dbd7caee" tabindex="0"><code><span class="line"><span style="color:#CB7676">const </span><span style="color:#BD976A">TodoSchema</span><span style="color:#666666">: </span><span style="color:#5DA994">z</span><span style="color:#666666">.</span><span style="color:#5DA994">ZodObject</span><span style="color:#666666">&#x3C;&#123;</span></span>
<span class="line"><span style="color:#BD976A">    description</span><span style="color:#666666">: </span><span style="color:#5DA994">z</span><span style="color:#666666">.</span><span style="color:#5DA994">ZodString</span><span style="color:#666666">;</span></span>
<span class="line"><span style="color:#BD976A">    done</span><span style="color:#666666">: </span><span style="color:#5DA994">z</span><span style="color:#666666">.</span><span style="color:#5DA994">ZodBoolean</span><span style="color:#666666">;</span></span>
<span class="line"><span style="color:#666666">&#125;, </span><span style="color:#C98A7D99">"</span><span style="color:#C98A7D">strip</span><span style="color:#C98A7D99">"</span><span style="color:#666666">, </span><span style="color:#5DA994">z</span><span style="color:#666666">.</span><span style="color:#5DA994">ZodTypeAny</span><span style="color:#666666">, &#123;</span></span>
<span class="line"><span style="color:#BD976A">    description</span><span style="color:#666666">: </span><span style="color:#5DA994">string</span><span style="color:#666666">;</span></span>
<span class="line"><span style="color:#BD976A">    done</span><span style="color:#666666">: </span><span style="color:#5DA994">boolean</span><span style="color:#666666">;</span></span>
<span class="line"><span style="color:#666666">&#125;, &#123;</span></span>
<span class="line"><span style="color:#BD976A">    description</span><span style="color:#666666">: </span><span style="color:#5DA994">string</span><span style="color:#666666">;</span></span>
<span class="line"><span style="color:#BD976A">    done</span><span style="color:#666666">: </span><span style="color:#5DA994">boolean</span><span style="color:#666666">;</span></span>
<span class="line"><span style="color:#666666">&#125;></span></span></code></pre></code></span>TodoSchema</span></span><span style="color:#666666">.</span><span style="color:#BD976A"><span class="twoslash-hover"><span class="twoslash-popup-container"><code class="twoslash-popup-code"><pre class="shiki vitesse-dark" style="background-color:#121212;color:#dbd7caee" tabindex="0"><code><span class="line"><span style="color:#BD976A">ZodType</span><span style="color:#666666">&#x3C;&#123;</span><span style="color:#80A665"> description</span><span style="color:#666666">:</span><span style="color:#BD976A"> string</span><span style="color:#666666">;</span><span style="color:#80A665"> done</span><span style="color:#666666">:</span><span style="color:#BD976A"> boolean</span><span style="color:#666666">;</span><span style="color:#666666"> &#125;,</span><span style="color:#BD976A"> ZodObjectDef</span><span style="color:#666666">&#x3C;&#123;</span><span style="color:#80A665"> description</span><span style="color:#666666">:</span><span style="color:#BD976A"> ZodString</span><span style="color:#666666">;</span><span style="color:#80A665"> done</span><span style="color:#666666">:</span><span style="color:#BD976A"> ZodBoolean</span><span style="color:#666666">;</span><span style="color:#666666"> &#125;,</span><span style="color:#C98A7D99"> "</span><span style="color:#C98A7D">strip</span><span style="color:#C98A7D99">"</span><span style="color:#666666">,</span><span style="color:#BD976A"> ZodTypeAny</span><span style="color:#666666">>, &#123; </span><span style="color:#B8A965">description</span><span style="color:#666666">: </span><span style="color:#BD976A">string</span><span style="color:#666666">; </span><span style="color:#BD976A">done</span><span style="color:#666666">: </span><span style="color:#BD976A">boolean</span><span style="color:#666666">; &#125;>.</span><span style="color:#80A665">parse</span><span style="color:#666666">(</span><span style="color:#BD976A">data</span><span style="color:#DBD7CAEE">: </span><span style="color:#BD976A">unknown</span><span style="color:#666666">,</span><span style="color:#BD976A"> params</span><span style="color:#CB7676">?:</span><span style="color:#BD976A"> Partial</span><span style="color:#666666">&#x3C;</span><span style="color:#BD976A">ParseParams</span><span style="color:#666666">></span><span style="color:#CB7676"> |</span><span style="color:#CB7676"> undefined</span><span style="color:#666666">)</span><span style="color:#DBD7CAEE">:</span><span style="color:#666666"> &#123;</span></span>
<span class="line"><span style="color:#B8A965">    description</span><span style="color:#666666">: </span><span style="color:#BD976A">string</span><span style="color:#666666">;</span></span>
<span class="line"><span style="color:#BD976A">    done</span><span style="color:#666666">: </span><span style="color:#BD976A">boolean</span><span style="color:#666666">;</span></span>
<span class="line"><span style="color:#666666">&#125;</span></span></code></pre></code></span>parse</span></span><span style="color:#666666">));</span></span>
<span class="line"></span>
<span class="line"><span style="color:#4D9375">for</span><span style="color:#4D9375"> await</span><span style="color:#666666"> (</span><span style="color:#CB7676">const </span><span style="color:#BD976A"><span class="twoslash-hover"><span class="twoslash-popup-container"><code class="twoslash-popup-code"><pre class="shiki vitesse-dark" style="background-color:#121212;color:#dbd7caee" tabindex="0"><code><span class="line"><span style="color:#CB7676">const </span><span style="color:#BD976A">todo</span><span style="color:#666666">: &#123;</span></span>
<span class="line"><span style="color:#BD976A">    description</span><span style="color:#666666">: </span><span style="color:#5DA994">string</span><span style="color:#666666">;</span></span>
<span class="line"><span style="color:#BD976A">    done</span><span style="color:#666666">: </span><span style="color:#5DA994">boolean</span><span style="color:#666666">;</span></span>
<span class="line"><span style="color:#666666">&#125;</span></span></code></pre></code></span>todo</span></span><span style="color:#CB7676"> of</span><span style="color:#80A665"> </span><span style="color:#80A665"><span class="twoslash-hover"><span class="twoslash-popup-container"><code class="twoslash-popup-code"><pre class="shiki vitesse-dark" style="background-color:#121212;color:#dbd7caee" tabindex="0"><code><span class="line"><span style="color:#80A665">asIterable</span><span style="color:#666666">&#x3C;&#123;</span></span>
<span class="line"><span style="color:#BD976A">    description</span><span style="color:#666666">: </span><span style="color:#5DA994">string</span><span style="color:#666666">;</span></span>
<span class="line"><span style="color:#BD976A">    done</span><span style="color:#666666">: </span><span style="color:#5DA994">boolean</span><span style="color:#666666">;</span></span>
<span class="line"><span style="color:#666666">&#125;>(</span><span style="color:#BD976A">stream</span><span style="color:#666666">: </span><span style="color:#5DA994">ReadableStream</span><span style="color:#666666">&#x3C;&#123;</span></span>
<span class="line"><span style="color:#BD976A">    description</span><span style="color:#666666">: </span><span style="color:#5DA994">string</span><span style="color:#666666">;</span></span>
<span class="line"><span style="color:#BD976A">    done</span><span style="color:#666666">: </span><span style="color:#5DA994">boolean</span><span style="color:#666666">;</span></span>
<span class="line"><span style="color:#666666">&#125;>):</span><span style="color:#5DA994"> AsyncGenerator</span><span style="color:#666666">&#x3C;&#123;</span></span>
<span class="line"><span style="color:#BD976A">    description</span><span style="color:#666666">: </span><span style="color:#5DA994">string</span><span style="color:#666666">;</span></span>
<span class="line"><span style="color:#BD976A">    done</span><span style="color:#666666">: </span><span style="color:#5DA994">boolean</span><span style="color:#666666">;</span></span>
<span class="line"><span style="color:#666666">&#125;,</span><span style="color:#5DA994"> any</span><span style="color:#666666">,</span><span style="color:#5DA994"> unknown</span><span style="color:#666666">></span></span></code></pre></code></span>asIterable</span></span><span style="color:#666666">(</span><span style="color:#BD976A"><span class="twoslash-hover"><span class="twoslash-popup-container"><code class="twoslash-popup-code"><pre class="shiki vitesse-dark" style="background-color:#121212;color:#dbd7caee" tabindex="0"><code><span class="line"><span style="color:#CB7676">const </span><span style="color:#BD976A">stream</span><span style="color:#666666">: </span><span style="color:#5DA994">ReadableStream</span><span style="color:#666666">&#x3C;&#123;</span></span>
<span class="line"><span style="color:#BD976A">    description</span><span style="color:#666666">: </span><span style="color:#5DA994">string</span><span style="color:#666666">;</span></span>
<span class="line"><span style="color:#BD976A">    done</span><span style="color:#666666">: </span><span style="color:#5DA994">boolean</span><span style="color:#666666">;</span></span>
<span class="line"><span style="color:#666666">&#125;></span></span></code></pre></code></span>stream</span></span><span style="color:#666666">))</span><span style="color:#666666"> &#123;</span></span>
<span class="line"><span style="color:#80A665">	</span><span style="color:#80A665"><span class="twoslash-hover"><span class="twoslash-popup-container"><code class="twoslash-popup-code"><span style="color:#CB7676">const </span><span style="color:#80A665">display</span><span style="color:#666666">: (</span><span style="color:#BD976A">todo</span><span style="color:#666666">: </span><span style="color:#5DA994">Todo</span><span style="color:#666666">) => </span><span style="color:#5DA994">void</span></code></span>display</span></span><span style="color:#666666">(</span><span style="color:#BD976A"><span class="twoslash-hover"><span class="twoslash-popup-container"><code class="twoslash-popup-code"><pre class="shiki vitesse-dark" style="background-color:#121212;color:#dbd7caee" tabindex="0"><code><span class="line"><span style="color:#CB7676">const </span><span style="color:#BD976A">todo</span><span style="color:#666666">: &#123;</span></span>
<span class="line"><span style="color:#BD976A">    description</span><span style="color:#666666">: </span><span style="color:#5DA994">string</span><span style="color:#666666">;</span></span>
<span class="line"><span style="color:#BD976A">    done</span><span style="color:#666666">: </span><span style="color:#5DA994">boolean</span><span style="color:#666666">;</span></span>
<span class="line"><span style="color:#666666">&#125;</span></span></code></pre></code></span>todo</span></span><span style="color:#666666">);</span></span>
<span class="line"><span style="color:#666666">&#125;</span></span></code></pre>`;
  let t128;
  let p33;
  let textContent_33 = "A few observations to close out.";
  let t130;
  let ol;
  let textContent_34 = `<li>On slow connections, the Streaming version is both faster to show stuff to the user and also finishes earlier, since the parsing and validation happen in parallel with the fetching. On fast connections, the performance difference is negligible.</li> <li>Once the <code>MapStream</code> and <code>asIterable</code> helpers are defined, the streaming version of the code isn’t meaningfully longer. The effort for both versions is about the same.</li> <li>The bundle size for the streaming versions is slightly larger than the non-streaming version since we need to ship the JSONParser (+20kB). This isn’t always worth it. On sites with long session times it likely <em>is</em> worth it, since the extra code is only sent once and every subsequent request can be sped up. In PWAs, where your code is already cached on the client, streaming is a no brainer.</li>`;
  let t142;
  let p34;
  let textContent_35 = "There is a lot more you can do with streams, I really encourage you to play around with them. They’re a really powerful idea that applies to much more than just data-fetching. I hope you’ve learned something and have a good day.";
  return {
    c() {
      h1 = element("h1");
      h1.innerHTML = textContent;
      t1 = space();
      p0 = element("p");
      p0.textContent = textContent_1;
      t3 = space();
      html_tag = new HtmlTagHydration(false);
      t4 = space();
      p1 = element("p");
      p1.textContent = textContent_2;
      t6 = space();
      img0 = element("img");
      t7 = space();
      p2 = element("p");
      p2.textContent = textContent_3;
      t9 = space();
      p3 = element("p");
      p3.textContent = textContent_4;
      t11 = space();
      blockquote0 = element("blockquote");
      blockquote0.innerHTML = textContent_5;
      t15 = space();
      p6 = element("p");
      p6.textContent = textContent_6;
      t17 = space();
      p7 = element("p");
      p7.innerHTML = textContent_7;
      t21 = space();
      p8 = element("p");
      p8.textContent = textContent_8;
      t23 = space();
      html_tag_1 = new HtmlTagHydration(false);
      t24 = space();
      p9 = element("p");
      p9.innerHTML = textContent_9;
      t28 = space();
      img1 = element("img");
      t29 = space();
      p10 = element("p");
      p10.innerHTML = textContent_10;
      t33 = space();
      p11 = element("p");
      p11.innerHTML = textContent_11;
      t37 = space();
      html_tag_2 = new HtmlTagHydration(false);
      t38 = space();
      p12 = element("p");
      p12.textContent = textContent_12;
      t40 = space();
      img2 = element("img");
      t41 = space();
      p13 = element("p");
      p13.innerHTML = textContent_13;
      t45 = space();
      p14 = element("p");
      p14.innerHTML = textContent_14;
      t49 = space();
      html_tag_3 = new HtmlTagHydration(false);
      t50 = space();
      p15 = element("p");
      p15.innerHTML = textContent_15;
      t58 = space();
      p16 = element("p");
      p16.innerHTML = textContent_16;
      t62 = space();
      html_tag_4 = new HtmlTagHydration(false);
      t63 = space();
      blockquote1 = element("blockquote");
      blockquote1.innerHTML = textContent_17;
      t67 = space();
      p18 = element("p");
      p18.innerHTML = textContent_18;
      t73 = space();
      img3 = element("img");
      t74 = space();
      p19 = element("p");
      p19.innerHTML = textContent_19;
      t84 = space();
      html_tag_5 = new HtmlTagHydration(false);
      t85 = space();
      p20 = element("p");
      p20.textContent = textContent_20;
      t87 = space();
      html_tag_6 = new HtmlTagHydration(false);
      t88 = space();
      img4 = element("img");
      t89 = space();
      p21 = element("p");
      p21.textContent = textContent_21;
      t91 = space();
      p22 = element("p");
      p22.textContent = textContent_22;
      t93 = space();
      html_tag_7 = new HtmlTagHydration(false);
      t94 = space();
      img5 = element("img");
      t95 = space();
      p23 = element("p");
      p23.textContent = textContent_23;
      t97 = space();
      p24 = element("p");
      p24.textContent = textContent_24;
      t99 = space();
      html_tag_8 = new HtmlTagHydration(false);
      t100 = space();
      p25 = element("p");
      p25.textContent = textContent_25;
      t102 = space();
      html_tag_9 = new HtmlTagHydration(false);
      t103 = space();
      p26 = element("p");
      p26.textContent = textContent_26;
      t105 = space();
      html_tag_10 = new HtmlTagHydration(false);
      t106 = space();
      p27 = element("p");
      p27.textContent = textContent_27;
      t108 = space();
      html_tag_11 = new HtmlTagHydration(false);
      t109 = space();
      p28 = element("p");
      p28.textContent = textContent_28;
      t111 = space();
      p29 = element("p");
      p29.innerHTML = textContent_29;
      t115 = space();
      html_tag_12 = new HtmlTagHydration(false);
      t116 = space();
      img6 = element("img");
      t117 = space();
      p30 = element("p");
      p30.textContent = textContent_30;
      t119 = space();
      html_tag_13 = new HtmlTagHydration(false);
      t120 = space();
      p31 = element("p");
      p31.innerHTML = textContent_31;
      t124 = space();
      html_tag_14 = new HtmlTagHydration(false);
      t125 = space();
      p32 = element("p");
      p32.textContent = textContent_32;
      t127 = space();
      html_tag_15 = new HtmlTagHydration(false);
      t128 = space();
      p33 = element("p");
      p33.textContent = textContent_33;
      t130 = space();
      ol = element("ol");
      ol.innerHTML = textContent_34;
      t142 = space();
      p34 = element("p");
      p34.textContent = textContent_35;
      this.h();
    },
    l(nodes) {
      h1 = claim_element(nodes, "H1", { id: true, ["data-svelte-h"]: true });
      if (get_svelte_dataset(h1) !== "svelte-1tquwwz")
        h1.innerHTML = textContent;
      t1 = claim_space(nodes);
      p0 = claim_element(nodes, "P", { ["data-svelte-h"]: true });
      if (get_svelte_dataset(p0) !== "svelte-10izeu3")
        p0.textContent = textContent_1;
      t3 = claim_space(nodes);
      html_tag = claim_html_tag(nodes, false);
      t4 = claim_space(nodes);
      p1 = claim_element(nodes, "P", { ["data-svelte-h"]: true });
      if (get_svelte_dataset(p1) !== "svelte-1waqisa")
        p1.textContent = textContent_2;
      t6 = claim_space(nodes);
      img0 = claim_element(nodes, "IMG", {
        src: true,
        width: true,
        height: true,
        alt: true
      });
      t7 = claim_space(nodes);
      p2 = claim_element(nodes, "P", { ["data-svelte-h"]: true });
      if (get_svelte_dataset(p2) !== "svelte-1e5tf9p")
        p2.textContent = textContent_3;
      t9 = claim_space(nodes);
      p3 = claim_element(nodes, "P", { ["data-svelte-h"]: true });
      if (get_svelte_dataset(p3) !== "svelte-1mgs7p8")
        p3.textContent = textContent_4;
      t11 = claim_space(nodes);
      blockquote0 = claim_element(nodes, "BLOCKQUOTE", { ["data-svelte-h"]: true });
      if (get_svelte_dataset(blockquote0) !== "svelte-14ytl9r")
        blockquote0.innerHTML = textContent_5;
      t15 = claim_space(nodes);
      p6 = claim_element(nodes, "P", { ["data-svelte-h"]: true });
      if (get_svelte_dataset(p6) !== "svelte-166in9b")
        p6.textContent = textContent_6;
      t17 = claim_space(nodes);
      p7 = claim_element(nodes, "P", { ["data-svelte-h"]: true });
      if (get_svelte_dataset(p7) !== "svelte-1pdvwy4")
        p7.innerHTML = textContent_7;
      t21 = claim_space(nodes);
      p8 = claim_element(nodes, "P", { ["data-svelte-h"]: true });
      if (get_svelte_dataset(p8) !== "svelte-h55bag")
        p8.textContent = textContent_8;
      t23 = claim_space(nodes);
      html_tag_1 = claim_html_tag(nodes, false);
      t24 = claim_space(nodes);
      p9 = claim_element(nodes, "P", { ["data-svelte-h"]: true });
      if (get_svelte_dataset(p9) !== "svelte-fcg9yf")
        p9.innerHTML = textContent_9;
      t28 = claim_space(nodes);
      img1 = claim_element(nodes, "IMG", {
        src: true,
        width: true,
        height: true,
        alt: true
      });
      t29 = claim_space(nodes);
      p10 = claim_element(nodes, "P", { ["data-svelte-h"]: true });
      if (get_svelte_dataset(p10) !== "svelte-n1hc4n")
        p10.innerHTML = textContent_10;
      t33 = claim_space(nodes);
      p11 = claim_element(nodes, "P", { ["data-svelte-h"]: true });
      if (get_svelte_dataset(p11) !== "svelte-owqyst")
        p11.innerHTML = textContent_11;
      t37 = claim_space(nodes);
      html_tag_2 = claim_html_tag(nodes, false);
      t38 = claim_space(nodes);
      p12 = claim_element(nodes, "P", { ["data-svelte-h"]: true });
      if (get_svelte_dataset(p12) !== "svelte-1igzqy3")
        p12.textContent = textContent_12;
      t40 = claim_space(nodes);
      img2 = claim_element(nodes, "IMG", {
        src: true,
        width: true,
        height: true,
        alt: true,
        loading: true
      });
      t41 = claim_space(nodes);
      p13 = claim_element(nodes, "P", { ["data-svelte-h"]: true });
      if (get_svelte_dataset(p13) !== "svelte-14fgtdo")
        p13.innerHTML = textContent_13;
      t45 = claim_space(nodes);
      p14 = claim_element(nodes, "P", { ["data-svelte-h"]: true });
      if (get_svelte_dataset(p14) !== "svelte-1nabusx")
        p14.innerHTML = textContent_14;
      t49 = claim_space(nodes);
      html_tag_3 = claim_html_tag(nodes, false);
      t50 = claim_space(nodes);
      p15 = claim_element(nodes, "P", { ["data-svelte-h"]: true });
      if (get_svelte_dataset(p15) !== "svelte-19puwgb")
        p15.innerHTML = textContent_15;
      t58 = claim_space(nodes);
      p16 = claim_element(nodes, "P", { ["data-svelte-h"]: true });
      if (get_svelte_dataset(p16) !== "svelte-1ir7oz5")
        p16.innerHTML = textContent_16;
      t62 = claim_space(nodes);
      html_tag_4 = claim_html_tag(nodes, false);
      t63 = claim_space(nodes);
      blockquote1 = claim_element(nodes, "BLOCKQUOTE", { ["data-svelte-h"]: true });
      if (get_svelte_dataset(blockquote1) !== "svelte-1en34yb")
        blockquote1.innerHTML = textContent_17;
      t67 = claim_space(nodes);
      p18 = claim_element(nodes, "P", { ["data-svelte-h"]: true });
      if (get_svelte_dataset(p18) !== "svelte-18hh2of")
        p18.innerHTML = textContent_18;
      t73 = claim_space(nodes);
      img3 = claim_element(nodes, "IMG", {
        src: true,
        width: true,
        height: true,
        alt: true,
        loading: true
      });
      t74 = claim_space(nodes);
      p19 = claim_element(nodes, "P", { ["data-svelte-h"]: true });
      if (get_svelte_dataset(p19) !== "svelte-1bec8xu")
        p19.innerHTML = textContent_19;
      t84 = claim_space(nodes);
      html_tag_5 = claim_html_tag(nodes, false);
      t85 = claim_space(nodes);
      p20 = claim_element(nodes, "P", { ["data-svelte-h"]: true });
      if (get_svelte_dataset(p20) !== "svelte-1r27hss")
        p20.textContent = textContent_20;
      t87 = claim_space(nodes);
      html_tag_6 = claim_html_tag(nodes, false);
      t88 = claim_space(nodes);
      img4 = claim_element(nodes, "IMG", {
        src: true,
        width: true,
        height: true,
        alt: true,
        loading: true
      });
      t89 = claim_space(nodes);
      p21 = claim_element(nodes, "P", { ["data-svelte-h"]: true });
      if (get_svelte_dataset(p21) !== "svelte-2kxuce")
        p21.textContent = textContent_21;
      t91 = claim_space(nodes);
      p22 = claim_element(nodes, "P", { ["data-svelte-h"]: true });
      if (get_svelte_dataset(p22) !== "svelte-1sp1uam")
        p22.textContent = textContent_22;
      t93 = claim_space(nodes);
      html_tag_7 = claim_html_tag(nodes, false);
      t94 = claim_space(nodes);
      img5 = claim_element(nodes, "IMG", {
        src: true,
        width: true,
        height: true,
        alt: true,
        loading: true
      });
      t95 = claim_space(nodes);
      p23 = claim_element(nodes, "P", { ["data-svelte-h"]: true });
      if (get_svelte_dataset(p23) !== "svelte-8o6b7i")
        p23.textContent = textContent_23;
      t97 = claim_space(nodes);
      p24 = claim_element(nodes, "P", { ["data-svelte-h"]: true });
      if (get_svelte_dataset(p24) !== "svelte-26lz5m")
        p24.textContent = textContent_24;
      t99 = claim_space(nodes);
      html_tag_8 = claim_html_tag(nodes, false);
      t100 = claim_space(nodes);
      p25 = claim_element(nodes, "P", { ["data-svelte-h"]: true });
      if (get_svelte_dataset(p25) !== "svelte-143g0y4")
        p25.textContent = textContent_25;
      t102 = claim_space(nodes);
      html_tag_9 = claim_html_tag(nodes, false);
      t103 = claim_space(nodes);
      p26 = claim_element(nodes, "P", { ["data-svelte-h"]: true });
      if (get_svelte_dataset(p26) !== "svelte-z1901r")
        p26.textContent = textContent_26;
      t105 = claim_space(nodes);
      html_tag_10 = claim_html_tag(nodes, false);
      t106 = claim_space(nodes);
      p27 = claim_element(nodes, "P", { ["data-svelte-h"]: true });
      if (get_svelte_dataset(p27) !== "svelte-16ergwb")
        p27.textContent = textContent_27;
      t108 = claim_space(nodes);
      html_tag_11 = claim_html_tag(nodes, false);
      t109 = claim_space(nodes);
      p28 = claim_element(nodes, "P", { ["data-svelte-h"]: true });
      if (get_svelte_dataset(p28) !== "svelte-1levvwx")
        p28.textContent = textContent_28;
      t111 = claim_space(nodes);
      p29 = claim_element(nodes, "P", { ["data-svelte-h"]: true });
      if (get_svelte_dataset(p29) !== "svelte-7lz10")
        p29.innerHTML = textContent_29;
      t115 = claim_space(nodes);
      html_tag_12 = claim_html_tag(nodes, false);
      t116 = claim_space(nodes);
      img6 = claim_element(nodes, "IMG", {
        src: true,
        width: true,
        height: true,
        alt: true,
        loading: true
      });
      t117 = claim_space(nodes);
      p30 = claim_element(nodes, "P", { ["data-svelte-h"]: true });
      if (get_svelte_dataset(p30) !== "svelte-jzzcb8")
        p30.textContent = textContent_30;
      t119 = claim_space(nodes);
      html_tag_13 = claim_html_tag(nodes, false);
      t120 = claim_space(nodes);
      p31 = claim_element(nodes, "P", { ["data-svelte-h"]: true });
      if (get_svelte_dataset(p31) !== "svelte-3mjbt0")
        p31.innerHTML = textContent_31;
      t124 = claim_space(nodes);
      html_tag_14 = claim_html_tag(nodes, false);
      t125 = claim_space(nodes);
      p32 = claim_element(nodes, "P", { ["data-svelte-h"]: true });
      if (get_svelte_dataset(p32) !== "svelte-vzc5cp")
        p32.textContent = textContent_32;
      t127 = claim_space(nodes);
      html_tag_15 = claim_html_tag(nodes, false);
      t128 = claim_space(nodes);
      p33 = claim_element(nodes, "P", { ["data-svelte-h"]: true });
      if (get_svelte_dataset(p33) !== "svelte-1vn92sb")
        p33.textContent = textContent_33;
      t130 = claim_space(nodes);
      ol = claim_element(nodes, "OL", { ["data-svelte-h"]: true });
      if (get_svelte_dataset(ol) !== "svelte-5fot8a")
        ol.innerHTML = textContent_34;
      t142 = claim_space(nodes);
      p34 = claim_element(nodes, "P", { ["data-svelte-h"]: true });
      if (get_svelte_dataset(p34) !== "svelte-mnwotl")
        p34.textContent = textContent_35;
      this.h();
    },
    h() {
      attr(h1, "id", "the-better-way-to-load-data");
      html_tag.a = t4;
      if (!src_url_equal(img0.src, img0_src_value = NonStreamLoadGif))
        attr(img0, "src", img0_src_value);
      attr(img0, "width", NonStreamLoadGifSize.width);
      attr(img0, "height", NonStreamLoadGifSize.height);
      attr(img0, "alt", "A list of items loading for a long time, and then being filled all at once");
      set_style(img0, "background-color", NonStreamLoadGifColor);
      html_tag_1.a = t24;
      if (!src_url_equal(img1.src, img1_src_value = RawStreamGif))
        attr(img1, "src", img1_src_value);
      attr(img1, "width", RawStreamGifSize.width);
      attr(img1, "height", RawStreamGifSize.height);
      attr(img1, "alt", "A bunch of Uint8Arrays being logged to the console");
      set_style(img1, "background-color", RawStreamGifColor);
      html_tag_2.a = t38;
      if (!src_url_equal(img2.src, img2_src_value = TextStreamGif))
        attr(img2, "src", img2_src_value);
      attr(img2, "width", TextStreamGifSize.width);
      attr(img2, "height", TextStreamGifSize.height);
      attr(img2, "alt", "A bunch of strings being logged to the console, with each being a chunk of a big JSON string");
      attr(img2, "loading", "lazy");
      set_style(img2, "background-color", TextStreamGifColor);
      html_tag_3.a = t50;
      html_tag_4.a = t63;
      if (!src_url_equal(img3.src, img3_src_value = ParseResultValueStreamGif))
        attr(img3, "src", img3_src_value);
      attr(img3, "width", ParseResultValueStreamGifSize.width);
      attr(img3, "height", ParseResultValueStreamGifSize.height);
      attr(img3, "alt", "A bunch of objects with the properties value,key,parent and stack being logged to the console");
      attr(img3, "loading", "lazy");
      set_style(img3, "background-color", ParseResultValueStreamGifColor);
      html_tag_5.a = t85;
      html_tag_6.a = t88;
      if (!src_url_equal(img4.src, img4_src_value = FinalStreamGif))
        attr(img4, "src", img4_src_value);
      attr(img4, "width", FinalStreamGifSize.width);
      attr(img4, "height", FinalStreamGifSize.height);
      attr(img4, "alt", "Each object in the list being logged out one after the other");
      attr(img4, "loading", "lazy");
      set_style(img4, "background-color", FinalStreamGifColor);
      html_tag_7.a = t94;
      if (!src_url_equal(img5.src, img5_src_value = StreamLoadGif))
        attr(img5, "src", img5_src_value);
      attr(img5, "width", StreamLoadGifSize.width);
      attr(img5, "height", StreamLoadGifSize.height);
      attr(img5, "alt", "The list being rendered one item at a time");
      attr(img5, "loading", "lazy");
      set_style(img5, "background-color", StreamLoadGifColor);
      html_tag_8.a = t100;
      html_tag_9.a = t103;
      html_tag_10.a = t106;
      html_tag_11.a = t109;
      html_tag_12.a = t116;
      if (!src_url_equal(img6.src, img6_src_value = forAwaitOfCompat))
        attr(img6, "src", img6_src_value);
      attr(img6, "width", forAwaitOfCompatSize.width);
      attr(img6, "height", forAwaitOfCompatSize.height);
      attr(img6, "alt", "Table showing that the 'for await of' syntax is only supported in Node, Deno and Firefox");
      attr(img6, "loading", "lazy");
      set_style(img6, "background-color", forAwaitOfCompatColor);
      html_tag_13.a = t120;
      html_tag_14.a = t125;
      html_tag_15.a = t128;
    },
    m(target, anchor) {
      insert_hydration(target, h1, anchor);
      insert_hydration(target, t1, anchor);
      insert_hydration(target, p0, anchor);
      insert_hydration(target, t3, anchor);
      html_tag.m(raw0_value, target, anchor);
      insert_hydration(target, t4, anchor);
      insert_hydration(target, p1, anchor);
      insert_hydration(target, t6, anchor);
      insert_hydration(target, img0, anchor);
      insert_hydration(target, t7, anchor);
      insert_hydration(target, p2, anchor);
      insert_hydration(target, t9, anchor);
      insert_hydration(target, p3, anchor);
      insert_hydration(target, t11, anchor);
      insert_hydration(target, blockquote0, anchor);
      insert_hydration(target, t15, anchor);
      insert_hydration(target, p6, anchor);
      insert_hydration(target, t17, anchor);
      insert_hydration(target, p7, anchor);
      insert_hydration(target, t21, anchor);
      insert_hydration(target, p8, anchor);
      insert_hydration(target, t23, anchor);
      html_tag_1.m(raw1_value, target, anchor);
      insert_hydration(target, t24, anchor);
      insert_hydration(target, p9, anchor);
      insert_hydration(target, t28, anchor);
      insert_hydration(target, img1, anchor);
      insert_hydration(target, t29, anchor);
      insert_hydration(target, p10, anchor);
      insert_hydration(target, t33, anchor);
      insert_hydration(target, p11, anchor);
      insert_hydration(target, t37, anchor);
      html_tag_2.m(raw2_value, target, anchor);
      insert_hydration(target, t38, anchor);
      insert_hydration(target, p12, anchor);
      insert_hydration(target, t40, anchor);
      insert_hydration(target, img2, anchor);
      insert_hydration(target, t41, anchor);
      insert_hydration(target, p13, anchor);
      insert_hydration(target, t45, anchor);
      insert_hydration(target, p14, anchor);
      insert_hydration(target, t49, anchor);
      html_tag_3.m(raw3_value, target, anchor);
      insert_hydration(target, t50, anchor);
      insert_hydration(target, p15, anchor);
      insert_hydration(target, t58, anchor);
      insert_hydration(target, p16, anchor);
      insert_hydration(target, t62, anchor);
      html_tag_4.m(raw4_value, target, anchor);
      insert_hydration(target, t63, anchor);
      insert_hydration(target, blockquote1, anchor);
      insert_hydration(target, t67, anchor);
      insert_hydration(target, p18, anchor);
      insert_hydration(target, t73, anchor);
      insert_hydration(target, img3, anchor);
      insert_hydration(target, t74, anchor);
      insert_hydration(target, p19, anchor);
      insert_hydration(target, t84, anchor);
      html_tag_5.m(raw5_value, target, anchor);
      insert_hydration(target, t85, anchor);
      insert_hydration(target, p20, anchor);
      insert_hydration(target, t87, anchor);
      html_tag_6.m(raw6_value, target, anchor);
      insert_hydration(target, t88, anchor);
      insert_hydration(target, img4, anchor);
      insert_hydration(target, t89, anchor);
      insert_hydration(target, p21, anchor);
      insert_hydration(target, t91, anchor);
      insert_hydration(target, p22, anchor);
      insert_hydration(target, t93, anchor);
      html_tag_7.m(raw7_value, target, anchor);
      insert_hydration(target, t94, anchor);
      insert_hydration(target, img5, anchor);
      insert_hydration(target, t95, anchor);
      insert_hydration(target, p23, anchor);
      insert_hydration(target, t97, anchor);
      insert_hydration(target, p24, anchor);
      insert_hydration(target, t99, anchor);
      html_tag_8.m(raw8_value, target, anchor);
      insert_hydration(target, t100, anchor);
      insert_hydration(target, p25, anchor);
      insert_hydration(target, t102, anchor);
      html_tag_9.m(raw9_value, target, anchor);
      insert_hydration(target, t103, anchor);
      insert_hydration(target, p26, anchor);
      insert_hydration(target, t105, anchor);
      html_tag_10.m(raw10_value, target, anchor);
      insert_hydration(target, t106, anchor);
      insert_hydration(target, p27, anchor);
      insert_hydration(target, t108, anchor);
      html_tag_11.m(raw11_value, target, anchor);
      insert_hydration(target, t109, anchor);
      insert_hydration(target, p28, anchor);
      insert_hydration(target, t111, anchor);
      insert_hydration(target, p29, anchor);
      insert_hydration(target, t115, anchor);
      html_tag_12.m(raw12_value, target, anchor);
      insert_hydration(target, t116, anchor);
      insert_hydration(target, img6, anchor);
      insert_hydration(target, t117, anchor);
      insert_hydration(target, p30, anchor);
      insert_hydration(target, t119, anchor);
      html_tag_13.m(raw13_value, target, anchor);
      insert_hydration(target, t120, anchor);
      insert_hydration(target, p31, anchor);
      insert_hydration(target, t124, anchor);
      html_tag_14.m(raw14_value, target, anchor);
      insert_hydration(target, t125, anchor);
      insert_hydration(target, p32, anchor);
      insert_hydration(target, t127, anchor);
      html_tag_15.m(raw15_value, target, anchor);
      insert_hydration(target, t128, anchor);
      insert_hydration(target, p33, anchor);
      insert_hydration(target, t130, anchor);
      insert_hydration(target, ol, anchor);
      insert_hydration(target, t142, anchor);
      insert_hydration(target, p34, anchor);
    },
    p: noop,
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching) {
        detach(h1);
        detach(t1);
        detach(p0);
        detach(t3);
        html_tag.d();
        detach(t4);
        detach(p1);
        detach(t6);
        detach(img0);
        detach(t7);
        detach(p2);
        detach(t9);
        detach(p3);
        detach(t11);
        detach(blockquote0);
        detach(t15);
        detach(p6);
        detach(t17);
        detach(p7);
        detach(t21);
        detach(p8);
        detach(t23);
        html_tag_1.d();
        detach(t24);
        detach(p9);
        detach(t28);
        detach(img1);
        detach(t29);
        detach(p10);
        detach(t33);
        detach(p11);
        detach(t37);
        html_tag_2.d();
        detach(t38);
        detach(p12);
        detach(t40);
        detach(img2);
        detach(t41);
        detach(p13);
        detach(t45);
        detach(p14);
        detach(t49);
        html_tag_3.d();
        detach(t50);
        detach(p15);
        detach(t58);
        detach(p16);
        detach(t62);
        html_tag_4.d();
        detach(t63);
        detach(blockquote1);
        detach(t67);
        detach(p18);
        detach(t73);
        detach(img3);
        detach(t74);
        detach(p19);
        detach(t84);
        html_tag_5.d();
        detach(t85);
        detach(p20);
        detach(t87);
        html_tag_6.d();
        detach(t88);
        detach(img4);
        detach(t89);
        detach(p21);
        detach(t91);
        detach(p22);
        detach(t93);
        html_tag_7.d();
        detach(t94);
        detach(img5);
        detach(t95);
        detach(p23);
        detach(t97);
        detach(p24);
        detach(t99);
        html_tag_8.d();
        detach(t100);
        detach(p25);
        detach(t102);
        html_tag_9.d();
        detach(t103);
        detach(p26);
        detach(t105);
        html_tag_10.d();
        detach(t106);
        detach(p27);
        detach(t108);
        html_tag_11.d();
        detach(t109);
        detach(p28);
        detach(t111);
        detach(p29);
        detach(t115);
        html_tag_12.d();
        detach(t116);
        detach(img6);
        detach(t117);
        detach(p30);
        detach(t119);
        html_tag_13.d();
        detach(t120);
        detach(p31);
        detach(t124);
        html_tag_14.d();
        detach(t125);
        detach(p32);
        detach(t127);
        html_tag_15.d();
        detach(t128);
        detach(p33);
        detach(t130);
        detach(ol);
        detach(t142);
        detach(p34);
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
