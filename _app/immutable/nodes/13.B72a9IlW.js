import { s as safe_not_equal, n as noop } from "../chunks/scheduler.C1H_TXk1.js";
import { S as SvelteComponent, i as init, d as detach, a as insert_hydration, k as attr, c as claim_element, l as get_svelte_dataset, g as claim_space, m as claim_html_tag, h as element, j as space, H as HtmlTagHydration } from "../chunks/index.DwiInUfm.js";
function create_fragment(ctx) {
  let h1;
  let textContent = `<a href="#never-write-mock-data-again-with-zocker">Never write Mock-Data again, with Zocker</a>`;
  let t1;
  let p0;
  let textContent_1 = "The trend of zod-driven-development continues! This time, we’re going to use zod to generate\nsensible mock-data for our tests.";
  let t3;
  let h20;
  let textContent_2 = `<a href="#writing-mock-data-is-the-worst">Writing Mock Data is the worst</a>`;
  let t5;
  let p1;
  let textContent_3 = "When writing tests, you often need to provide some mock-data to test your code against. This can be a real pain, especially if you need lot’s of it, and if it’s complex.";
  let t7;
  let p2;
  let textContent_4 = `Most mock-data generation libraries, such as the excellent <a href="https://www.npmjs.com/package/@faker-js/faker" rel="noopener noreferrer" target="_blank">faker</a>, supply only individual fields, not entire data-structures.`;
  let t11;
  let p3;
  let textContent_5 = "Manually assembling these fields into a data-structure is tedious, and maintenance-heavy.";
  let t13;
  let h21;
  let textContent_6 = `<a href="#enter-zocker">Enter Zocker</a>`;
  let t15;
  let p4;
  let textContent_7 = `<a href="https://zocker.sigrist.dev" rel="noopener noreferrer" target="_blank">Zocker</a> is a library I’ve built to forever
eliminate the pain of writing and maintaining mock-data. It uses your zod-schemas as a guide to generate sensible and realistic mock-data for you. This way you can focus on writing tests, not on writing mock-data. Data generation does not get harder if you need more data, or if your data gets more complex. It’s all handled for you.`;
  let t18;
  let h30;
  let textContent_8 = `<a href="#getting-started">Getting Started</a>`;
  let t20;
  let p5;
  let textContent_9 = "Obviously, install it first:";
  let t22;
  let html_tag;
  let raw0_value = `<pre class="shiki vitesse-dark" style="background-color:#121212;color:#dbd7caee" tabindex="0"><code><span class="line"><span style="color:#80A665">npm</span><span style="color:#C98A7D"> install</span><span style="color:#C99076"> --save-dev</span><span style="color:#C98A7D"> zocker</span></span></code></pre>`;
  let t23;
  let p6;
  let textContent_10 = `Then, in your test-file, import the <code>zocker</code> function and pass it your zod-schema:`;
  let t27;
  let html_tag_1;
  let raw1_value = `<pre class="shiki vitesse-dark twoslash lsp" style="background-color:#121212;color:#dbd7caee" tabindex="0"><code><span class="line"><span style="color:#4D9375">import</span><span style="color:#666666"> &#123;</span><span style="color:#BD976A"> </span><span style="color:#BD976A"><span class="twoslash-hover"><span class="twoslash-popup-container"><code class="twoslash-popup-code"><span style="color:#4D9375">import</span><span style="color:#BD976A"> z</span></code></span>z</span></span><span style="color:#666666"> &#125;</span><span style="color:#4D9375"> from</span><span style="color:#C98A7D99"> '</span><span style="color:#C98A7D">zod</span><span style="color:#C98A7D99">'</span><span style="color:#666666">;</span></span>
<span class="line"><span style="color:#4D9375">import</span><span style="color:#666666"> &#123;</span><span style="color:#BD976A"> </span><span style="color:#BD976A"><span class="twoslash-hover"><span class="twoslash-popup-container"><code class="twoslash-popup-code"><span style="color:#CB7676">function</span><span style="color:#80A665"> zocker</span><span style="color:#666666">&#x3C;</span><span style="color:#5DA994">Z</span><span style="color:#CB7676"> extends</span><span style="color:#5DA994"> z</span><span style="color:#666666">.</span><span style="color:#5DA994">ZodType</span><span style="color:#666666">&#x3C;</span><span style="color:#5DA994">any</span><span style="color:#666666">,</span><span style="color:#5DA994"> z</span><span style="color:#666666">.</span><span style="color:#5DA994">ZodTypeDef</span><span style="color:#666666">,</span><span style="color:#5DA994"> any</span><span style="color:#666666">>>(</span><span style="color:#BD976A">schema</span><span style="color:#666666">: </span><span style="color:#5DA994">Z</span><span style="color:#666666">):</span><span style="color:#5DA994"> Zocker</span><span style="color:#666666">&#x3C;</span><span style="color:#5DA994">Z</span><span style="color:#666666">></span></code></span>zocker</span></span><span style="color:#666666"> &#125;</span><span style="color:#4D9375"> from</span><span style="color:#C98A7D99"> '</span><span style="color:#C98A7D">zocker</span><span style="color:#C98A7D99">'</span><span style="color:#666666">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#CB7676">const </span><span style="color:#BD976A"><span class="twoslash-hover"><span class="twoslash-popup-container"><code class="twoslash-popup-code"><pre class="shiki vitesse-dark" style="background-color:#121212;color:#dbd7caee" tabindex="0"><code><span class="line"><span style="color:#CB7676">const </span><span style="color:#BD976A">schema</span><span style="color:#666666">: </span><span style="color:#5DA994">z</span><span style="color:#666666">.</span><span style="color:#5DA994">ZodObject</span><span style="color:#666666">&#x3C;&#123;</span></span>
<span class="line"><span style="color:#BD976A">    name</span><span style="color:#666666">: </span><span style="color:#5DA994">z</span><span style="color:#666666">.</span><span style="color:#5DA994">ZodString</span><span style="color:#666666">;</span></span>
<span class="line"><span style="color:#BD976A">    age</span><span style="color:#666666">: </span><span style="color:#5DA994">z</span><span style="color:#666666">.</span><span style="color:#5DA994">ZodNumber</span><span style="color:#666666">;</span></span>
<span class="line"><span style="color:#BD976A">    isAwesome</span><span style="color:#666666">: </span><span style="color:#5DA994">z</span><span style="color:#666666">.</span><span style="color:#5DA994">ZodBoolean</span><span style="color:#666666">;</span></span>
<span class="line"><span style="color:#666666">&#125;, </span><span style="color:#C98A7D99">"</span><span style="color:#C98A7D">strip</span><span style="color:#C98A7D99">"</span><span style="color:#666666">, </span><span style="color:#5DA994">z</span><span style="color:#666666">.</span><span style="color:#5DA994">ZodTypeAny</span><span style="color:#666666">, &#123;</span></span>
<span class="line"><span style="color:#BD976A">    name</span><span style="color:#666666">: </span><span style="color:#5DA994">string</span><span style="color:#666666">;</span></span>
<span class="line"><span style="color:#BD976A">    age</span><span style="color:#666666">: </span><span style="color:#5DA994">number</span><span style="color:#666666">;</span></span>
<span class="line"><span style="color:#BD976A">    isAwesome</span><span style="color:#666666">: </span><span style="color:#5DA994">boolean</span><span style="color:#666666">;</span></span>
<span class="line"><span style="color:#666666">&#125;, &#123;</span></span>
<span class="line"><span style="color:#BD976A">    name</span><span style="color:#666666">: </span><span style="color:#5DA994">string</span><span style="color:#666666">;</span></span>
<span class="line"><span style="color:#BD976A">    age</span><span style="color:#666666">: </span><span style="color:#5DA994">number</span><span style="color:#666666">;</span></span>
<span class="line"><span style="color:#BD976A">    isAwesome</span><span style="color:#666666">: </span><span style="color:#5DA994">boolean</span><span style="color:#666666">;</span></span>
<span class="line"><span style="color:#666666">&#125;></span></span></code></pre></code></span>schema</span></span><span style="color:#666666"> =</span><span style="color:#BD976A"> </span><span style="color:#BD976A"><span class="twoslash-hover"><span class="twoslash-popup-container"><code class="twoslash-popup-code"><span style="color:#4D9375">import</span><span style="color:#BD976A"> z</span></code></span>z</span></span><span style="color:#666666">.</span><span style="color:#80A665"><span class="twoslash-hover"><span class="twoslash-popup-container"><code class="twoslash-popup-code"><pre class="shiki vitesse-dark" style="background-color:#121212;color:#dbd7caee" tabindex="0"><code><span class="line"><span style="color:#80A665">object</span><span style="color:#666666">&#x3C;&#123;</span></span>
<span class="line"><span style="color:#BD976A">    name</span><span style="color:#666666">: </span><span style="color:#5DA994">z</span><span style="color:#666666">.</span><span style="color:#5DA994">ZodString</span><span style="color:#666666">;</span></span>
<span class="line"><span style="color:#BD976A">    age</span><span style="color:#666666">: </span><span style="color:#5DA994">z</span><span style="color:#666666">.</span><span style="color:#5DA994">ZodNumber</span><span style="color:#666666">;</span></span>
<span class="line"><span style="color:#BD976A">    isAwesome</span><span style="color:#666666">: </span><span style="color:#5DA994">z</span><span style="color:#666666">.</span><span style="color:#5DA994">ZodBoolean</span><span style="color:#666666">;</span></span>
<span class="line"><span style="color:#666666">&#125;>(</span><span style="color:#BD976A">shape</span><span style="color:#666666">: &#123;</span></span>
<span class="line"><span style="color:#BD976A">    name</span><span style="color:#666666">: </span><span style="color:#5DA994">z</span><span style="color:#666666">.</span><span style="color:#5DA994">ZodString</span><span style="color:#666666">;</span></span>
<span class="line"><span style="color:#BD976A">    age</span><span style="color:#666666">: </span><span style="color:#5DA994">z</span><span style="color:#666666">.</span><span style="color:#5DA994">ZodNumber</span><span style="color:#666666">;</span></span>
<span class="line"><span style="color:#BD976A">    isAwesome</span><span style="color:#666666">: </span><span style="color:#5DA994">z</span><span style="color:#666666">.</span><span style="color:#5DA994">ZodBoolean</span><span style="color:#666666">;</span></span>
<span class="line"><span style="color:#666666">&#125;,</span><span style="color:#BD976A"> params</span><span style="color:#CB7676">?</span><span style="color:#666666">: </span><span style="color:#5DA994">z</span><span style="color:#666666">.</span><span style="color:#5DA994">RawCreateParams</span><span style="color:#666666">):</span><span style="color:#5DA994"> z</span><span style="color:#666666">.</span><span style="color:#5DA994">ZodObject</span><span style="color:#666666">&#x3C;</span><span style="color:#DBD7CAEE">...</span><span style="color:#666666">></span></span>
<span class="line"><span style="color:#4D9375">export</span><span style="color:#BD976A"> object</span></span></code></pre></code></span>object</span></span><span style="color:#666666">(&#123;</span></span>
<span class="line"><span style="color:#B8A965">	</span><span style="color:#B8A965"><span class="twoslash-hover"><span class="twoslash-popup-container"><code class="twoslash-popup-code"><span style="color:#80A665">name</span><span style="color:#666666">:</span><span style="color:#BD976A"> z</span><span style="color:#666666">.</span><span style="color:#BD976A">ZodString</span></code></span>name</span></span><span style="color:#666666">: </span><span style="color:#BD976A"><span class="twoslash-hover"><span class="twoslash-popup-container"><code class="twoslash-popup-code"><span style="color:#4D9375">import</span><span style="color:#BD976A"> z</span></code></span>z</span></span><span style="color:#666666">.</span><span style="color:#80A665"><span class="twoslash-hover"><span class="twoslash-popup-container"><code class="twoslash-popup-code"><pre class="shiki vitesse-dark" style="background-color:#121212;color:#dbd7caee" tabindex="0"><code><span class="line"><span style="color:#CB7676">function</span><span style="color:#80A665"> string</span><span style="color:#666666">(</span><span style="color:#80A665">params</span><span style="color:#CB7676">?</span><span style="color:#666666">: (&#123;</span></span>
<span class="line"><span style="color:#BD976A">    errorMap</span><span style="color:#CB7676">?</span><span style="color:#666666">: </span><span style="color:#5DA994">z</span><span style="color:#666666">.</span><span style="color:#5DA994">ZodErrorMap</span><span style="color:#666666"> | </span><span style="color:#CB7676">undefined</span><span style="color:#666666">;</span></span>
<span class="line"><span style="color:#BD976A">    invalid_type_error</span><span style="color:#CB7676">?</span><span style="color:#666666">: </span><span style="color:#5DA994">string</span><span style="color:#666666"> | </span><span style="color:#CB7676">undefined</span><span style="color:#666666">;</span></span>
<span class="line"><span style="color:#BD976A">    required_error</span><span style="color:#CB7676">?</span><span style="color:#666666">: </span><span style="color:#5DA994">string</span><span style="color:#666666"> | </span><span style="color:#CB7676">undefined</span><span style="color:#666666">;</span></span>
<span class="line"><span style="color:#BD976A">    message</span><span style="color:#CB7676">?</span><span style="color:#666666">: </span><span style="color:#5DA994">string</span><span style="color:#666666"> | </span><span style="color:#CB7676">undefined</span><span style="color:#666666">;</span></span>
<span class="line"><span style="color:#BD976A">    description</span><span style="color:#CB7676">?</span><span style="color:#666666">: </span><span style="color:#5DA994">string</span><span style="color:#666666"> | </span><span style="color:#CB7676">undefined</span><span style="color:#666666">;</span></span>
<span class="line"><span style="color:#666666">&#125; &#x26; &#123;</span></span>
<span class="line"><span style="color:#666666">    ...;</span></span>
<span class="line"><span style="color:#666666">&#125;) | </span><span style="color:#CB7676">undefined</span><span style="color:#666666">):</span><span style="color:#5DA994"> z</span><span style="color:#666666">.</span><span style="color:#5DA994">ZodString</span></span>
<span class="line"><span style="color:#4D9375">export</span><span style="color:#BD976A"> string</span></span></code></pre></code></span>string</span></span><span style="color:#666666">(),</span></span>
<span class="line"><span style="color:#B8A965">	</span><span style="color:#B8A965"><span class="twoslash-hover"><span class="twoslash-popup-container"><code class="twoslash-popup-code"><span style="color:#80A665">age</span><span style="color:#666666">:</span><span style="color:#BD976A"> z</span><span style="color:#666666">.</span><span style="color:#BD976A">ZodNumber</span></code></span>age</span></span><span style="color:#666666">: </span><span style="color:#BD976A"><span class="twoslash-hover"><span class="twoslash-popup-container"><code class="twoslash-popup-code"><span style="color:#4D9375">import</span><span style="color:#BD976A"> z</span></code></span>z</span></span><span style="color:#666666">.</span><span style="color:#80A665"><span class="twoslash-hover"><span class="twoslash-popup-container"><code class="twoslash-popup-code"><pre class="shiki vitesse-dark" style="background-color:#121212;color:#dbd7caee" tabindex="0"><code><span class="line"><span style="color:#CB7676">function</span><span style="color:#80A665"> number</span><span style="color:#666666">(</span><span style="color:#80A665">params</span><span style="color:#CB7676">?</span><span style="color:#666666">: (&#123;</span></span>
<span class="line"><span style="color:#BD976A">    errorMap</span><span style="color:#CB7676">?</span><span style="color:#666666">: </span><span style="color:#5DA994">z</span><span style="color:#666666">.</span><span style="color:#5DA994">ZodErrorMap</span><span style="color:#666666"> | </span><span style="color:#CB7676">undefined</span><span style="color:#666666">;</span></span>
<span class="line"><span style="color:#BD976A">    invalid_type_error</span><span style="color:#CB7676">?</span><span style="color:#666666">: </span><span style="color:#5DA994">string</span><span style="color:#666666"> | </span><span style="color:#CB7676">undefined</span><span style="color:#666666">;</span></span>
<span class="line"><span style="color:#BD976A">    required_error</span><span style="color:#CB7676">?</span><span style="color:#666666">: </span><span style="color:#5DA994">string</span><span style="color:#666666"> | </span><span style="color:#CB7676">undefined</span><span style="color:#666666">;</span></span>
<span class="line"><span style="color:#BD976A">    message</span><span style="color:#CB7676">?</span><span style="color:#666666">: </span><span style="color:#5DA994">string</span><span style="color:#666666"> | </span><span style="color:#CB7676">undefined</span><span style="color:#666666">;</span></span>
<span class="line"><span style="color:#BD976A">    description</span><span style="color:#CB7676">?</span><span style="color:#666666">: </span><span style="color:#5DA994">string</span><span style="color:#666666"> | </span><span style="color:#CB7676">undefined</span><span style="color:#666666">;</span></span>
<span class="line"><span style="color:#666666">&#125; &#x26; &#123;</span></span>
<span class="line"><span style="color:#666666">    ...;</span></span>
<span class="line"><span style="color:#666666">&#125;) | </span><span style="color:#CB7676">undefined</span><span style="color:#666666">):</span><span style="color:#5DA994"> z</span><span style="color:#666666">.</span><span style="color:#5DA994">ZodNumber</span></span>
<span class="line"><span style="color:#4D9375">export</span><span style="color:#BD976A"> number</span></span></code></pre></code></span>number</span></span><span style="color:#666666">(),</span></span>
<span class="line"><span style="color:#B8A965">	</span><span style="color:#B8A965"><span class="twoslash-hover"><span class="twoslash-popup-container"><code class="twoslash-popup-code"><span style="color:#80A665">isAwesome</span><span style="color:#666666">:</span><span style="color:#BD976A"> z</span><span style="color:#666666">.</span><span style="color:#BD976A">ZodBoolean</span></code></span>isAwesome</span></span><span style="color:#666666">: </span><span style="color:#BD976A"><span class="twoslash-hover"><span class="twoslash-popup-container"><code class="twoslash-popup-code"><span style="color:#4D9375">import</span><span style="color:#BD976A"> z</span></code></span>z</span></span><span style="color:#666666">.</span><span style="color:#80A665"><span class="twoslash-hover"><span class="twoslash-popup-container"><code class="twoslash-popup-code"><pre class="shiki vitesse-dark" style="background-color:#121212;color:#dbd7caee" tabindex="0"><code><span class="line"><span style="color:#CB7676">function</span><span style="color:#80A665"> boolean</span><span style="color:#666666">(</span><span style="color:#80A665">params</span><span style="color:#CB7676">?</span><span style="color:#666666">: (&#123;</span></span>
<span class="line"><span style="color:#BD976A">    errorMap</span><span style="color:#CB7676">?</span><span style="color:#666666">: </span><span style="color:#5DA994">z</span><span style="color:#666666">.</span><span style="color:#5DA994">ZodErrorMap</span><span style="color:#666666"> | </span><span style="color:#CB7676">undefined</span><span style="color:#666666">;</span></span>
<span class="line"><span style="color:#BD976A">    invalid_type_error</span><span style="color:#CB7676">?</span><span style="color:#666666">: </span><span style="color:#5DA994">string</span><span style="color:#666666"> | </span><span style="color:#CB7676">undefined</span><span style="color:#666666">;</span></span>
<span class="line"><span style="color:#BD976A">    required_error</span><span style="color:#CB7676">?</span><span style="color:#666666">: </span><span style="color:#5DA994">string</span><span style="color:#666666"> | </span><span style="color:#CB7676">undefined</span><span style="color:#666666">;</span></span>
<span class="line"><span style="color:#BD976A">    message</span><span style="color:#CB7676">?</span><span style="color:#666666">: </span><span style="color:#5DA994">string</span><span style="color:#666666"> | </span><span style="color:#CB7676">undefined</span><span style="color:#666666">;</span></span>
<span class="line"><span style="color:#BD976A">    description</span><span style="color:#CB7676">?</span><span style="color:#666666">: </span><span style="color:#5DA994">string</span><span style="color:#666666"> | </span><span style="color:#CB7676">undefined</span><span style="color:#666666">;</span></span>
<span class="line"><span style="color:#666666">&#125; &#x26; &#123;</span></span>
<span class="line"><span style="color:#666666">    ...;</span></span>
<span class="line"><span style="color:#666666">&#125;) | </span><span style="color:#CB7676">undefined</span><span style="color:#666666">):</span><span style="color:#5DA994"> z</span><span style="color:#666666">.</span><span style="color:#5DA994">ZodBoolean</span></span>
<span class="line"><span style="color:#4D9375">export</span><span style="color:#BD976A"> boolean</span></span></code></pre></code></span>boolean</span></span><span style="color:#666666">()</span></span>
<span class="line"><span style="color:#666666">&#125;);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#CB7676">const </span><span style="color:#BD976A"><span class="twoslash-hover"><span class="twoslash-popup-container"><code class="twoslash-popup-code"><pre class="shiki vitesse-dark" style="background-color:#121212;color:#dbd7caee" tabindex="0"><code><span class="line"><span style="color:#CB7676">const </span><span style="color:#BD976A">mockData</span><span style="color:#666666">: &#123;</span></span>
<span class="line"><span style="color:#BD976A">    name</span><span style="color:#666666">: </span><span style="color:#5DA994">string</span><span style="color:#666666">;</span></span>
<span class="line"><span style="color:#BD976A">    age</span><span style="color:#666666">: </span><span style="color:#5DA994">number</span><span style="color:#666666">;</span></span>
<span class="line"><span style="color:#BD976A">    isAwesome</span><span style="color:#666666">: </span><span style="color:#5DA994">boolean</span><span style="color:#666666">;</span></span>
<span class="line"><span style="color:#666666">&#125;</span></span></code></pre></code></span>mockData</span></span><span style="color:#666666"> =</span><span style="color:#80A665"> </span><span style="color:#80A665"><span class="twoslash-hover"><span class="twoslash-popup-container"><code class="twoslash-popup-code"><pre class="shiki vitesse-dark" style="background-color:#121212;color:#dbd7caee" tabindex="0"><code><span class="line"><span style="color:#BD976A">zocker</span><span style="color:#666666">&#x3C;</span><span style="color:#BD976A">z</span><span style="color:#666666">.</span><span style="color:#80A665">ZodObject</span><span style="color:#666666">&#x3C;&#123;</span></span>
<span class="line"><span style="color:#BD976A">    name</span><span style="color:#666666">: </span><span style="color:#5DA994">z</span><span style="color:#666666">.</span><span style="color:#5DA994">ZodString</span><span style="color:#666666">;</span></span>
<span class="line"><span style="color:#BD976A">    age</span><span style="color:#666666">: </span><span style="color:#5DA994">z</span><span style="color:#666666">.</span><span style="color:#5DA994">ZodNumber</span><span style="color:#666666">;</span></span>
<span class="line"><span style="color:#BD976A">    isAwesome</span><span style="color:#666666">: </span><span style="color:#5DA994">z</span><span style="color:#666666">.</span><span style="color:#5DA994">ZodBoolean</span><span style="color:#666666">;</span></span>
<span class="line"><span style="color:#666666">&#125;,</span><span style="color:#C98A7D99"> "</span><span style="color:#C98A7D">strip</span><span style="color:#C98A7D99">"</span><span style="color:#666666">,</span><span style="color:#5DA994"> z</span><span style="color:#666666">.</span><span style="color:#5DA994">ZodTypeAny</span><span style="color:#666666">,</span><span style="color:#666666"> &#123;</span></span>
<span class="line"><span style="color:#BD976A">    name</span><span style="color:#666666">: </span><span style="color:#5DA994">string</span><span style="color:#666666">;</span></span>
<span class="line"><span style="color:#BD976A">    age</span><span style="color:#666666">: </span><span style="color:#5DA994">number</span><span style="color:#666666">;</span></span>
<span class="line"><span style="color:#BD976A">    isAwesome</span><span style="color:#666666">: </span><span style="color:#5DA994">boolean</span><span style="color:#666666">;</span></span>
<span class="line"><span style="color:#666666">&#125;,</span><span style="color:#666666"> &#123;</span></span>
<span class="line"><span style="color:#BD976A">    name</span><span style="color:#666666">: </span><span style="color:#5DA994">string</span><span style="color:#666666">;</span></span>
<span class="line"><span style="color:#BD976A">    age</span><span style="color:#666666">: </span><span style="color:#5DA994">number</span><span style="color:#666666">;</span></span>
<span class="line"><span style="color:#BD976A">    isAwesome</span><span style="color:#666666">: </span><span style="color:#5DA994">boolean</span><span style="color:#666666">;</span></span>
<span class="line"><span style="color:#666666">&#125;>>(</span><span style="color:#BD976A">schema</span><span style="color:#666666">: </span><span style="color:#5DA994">z</span><span style="color:#666666">.</span><span style="color:#5DA994">ZodObject</span><span style="color:#666666">&#x3C;...>):</span><span style="color:#5DA994"> Zocker</span><span style="color:#666666">&#x3C;</span><span style="color:#DBD7CAEE">...</span><span style="color:#666666">></span></span></code></pre></code></span>zocker</span></span><span style="color:#666666">(</span><span style="color:#BD976A"><span class="twoslash-hover"><span class="twoslash-popup-container"><code class="twoslash-popup-code"><pre class="shiki vitesse-dark" style="background-color:#121212;color:#dbd7caee" tabindex="0"><code><span class="line"><span style="color:#CB7676">const </span><span style="color:#BD976A">schema</span><span style="color:#666666">: </span><span style="color:#5DA994">z</span><span style="color:#666666">.</span><span style="color:#5DA994">ZodObject</span><span style="color:#666666">&#x3C;&#123;</span></span>
<span class="line"><span style="color:#BD976A">    name</span><span style="color:#666666">: </span><span style="color:#5DA994">z</span><span style="color:#666666">.</span><span style="color:#5DA994">ZodString</span><span style="color:#666666">;</span></span>
<span class="line"><span style="color:#BD976A">    age</span><span style="color:#666666">: </span><span style="color:#5DA994">z</span><span style="color:#666666">.</span><span style="color:#5DA994">ZodNumber</span><span style="color:#666666">;</span></span>
<span class="line"><span style="color:#BD976A">    isAwesome</span><span style="color:#666666">: </span><span style="color:#5DA994">z</span><span style="color:#666666">.</span><span style="color:#5DA994">ZodBoolean</span><span style="color:#666666">;</span></span>
<span class="line"><span style="color:#666666">&#125;, </span><span style="color:#C98A7D99">"</span><span style="color:#C98A7D">strip</span><span style="color:#C98A7D99">"</span><span style="color:#666666">, </span><span style="color:#5DA994">z</span><span style="color:#666666">.</span><span style="color:#5DA994">ZodTypeAny</span><span style="color:#666666">, &#123;</span></span>
<span class="line"><span style="color:#BD976A">    name</span><span style="color:#666666">: </span><span style="color:#5DA994">string</span><span style="color:#666666">;</span></span>
<span class="line"><span style="color:#BD976A">    age</span><span style="color:#666666">: </span><span style="color:#5DA994">number</span><span style="color:#666666">;</span></span>
<span class="line"><span style="color:#BD976A">    isAwesome</span><span style="color:#666666">: </span><span style="color:#5DA994">boolean</span><span style="color:#666666">;</span></span>
<span class="line"><span style="color:#666666">&#125;, &#123;</span></span>
<span class="line"><span style="color:#BD976A">    name</span><span style="color:#666666">: </span><span style="color:#5DA994">string</span><span style="color:#666666">;</span></span>
<span class="line"><span style="color:#BD976A">    age</span><span style="color:#666666">: </span><span style="color:#5DA994">number</span><span style="color:#666666">;</span></span>
<span class="line"><span style="color:#BD976A">    isAwesome</span><span style="color:#666666">: </span><span style="color:#5DA994">boolean</span><span style="color:#666666">;</span></span>
<span class="line"><span style="color:#666666">&#125;></span></span></code></pre></code></span>schema</span></span><span style="color:#666666">).</span><span style="color:#80A665"><span class="twoslash-hover"><span class="twoslash-popup-container"><code class="twoslash-popup-code"><pre class="shiki vitesse-dark" style="background-color:#121212;color:#dbd7caee" tabindex="0"><code><span class="line"><span style="color:#BD976A">Zocker</span><span style="color:#666666">&#x3C;</span><span style="color:#BD976A">ZodObject</span><span style="color:#666666">&#x3C;&#123;</span><span style="color:#80A665"> name</span><span style="color:#666666">:</span><span style="color:#BD976A"> ZodString</span><span style="color:#666666">;</span><span style="color:#80A665"> age</span><span style="color:#666666">:</span><span style="color:#BD976A"> ZodNumber</span><span style="color:#666666">;</span><span style="color:#80A665"> isAwesome</span><span style="color:#666666">:</span><span style="color:#BD976A"> ZodBoolean</span><span style="color:#666666">;</span><span style="color:#666666"> &#125;,</span><span style="color:#C98A7D99"> "</span><span style="color:#C98A7D">strip</span><span style="color:#C98A7D99">"</span><span style="color:#666666">,</span><span style="color:#BD976A"> ZodTypeAny</span><span style="color:#666666">, &#123; </span><span style="color:#B8A965">name</span><span style="color:#666666">: </span><span style="color:#BD976A">string</span><span style="color:#666666">; </span><span style="color:#BD976A">age</span><span style="color:#666666">: </span><span style="color:#BD976A">number</span><span style="color:#666666">; </span><span style="color:#BD976A">isAwesome</span><span style="color:#666666">: </span><span style="color:#BD976A">boolean</span><span style="color:#666666">; &#125;, &#123; ...; &#125;</span><span style="color:#CB7676">>></span><span style="color:#666666">.</span><span style="color:#80A665">generate</span><span style="color:#666666">()</span><span style="color:#DBD7CAEE">:</span><span style="color:#666666"> &#123;</span></span>
<span class="line"><span style="color:#B8A965">    name</span><span style="color:#666666">: </span><span style="color:#BD976A">string</span><span style="color:#666666">;</span></span>
<span class="line"><span style="color:#BD976A">    age</span><span style="color:#666666">: </span><span style="color:#BD976A">number</span><span style="color:#666666">;</span></span>
<span class="line"><span style="color:#BD976A">    isAwesome</span><span style="color:#666666">: </span><span style="color:#BD976A">boolean</span><span style="color:#666666">;</span></span>
<span class="line"><span style="color:#666666">&#125;</span></span></code></pre></code></span>generate</span></span><span style="color:#666666">();</span></span>
<span class="line"><span style="color:#758575DD">// &#123; name: "Jimmy Smith", age: 42, isAwesome: true &#125;</span></span></code></pre>`;
  let t28;
  let p7;
  let textContent_11 = "And voilà! You have your mock-data.";
  let t30;
  let p8;
  let textContent_12 = "That was obviously a very simple example. Zocker can handle much more complex schemas, including\ncyclic schemas, anys, unkowns, regular expressions, and much more. This here works just fine:";
  let t32;
  let html_tag_2;
  let raw2_value = `<pre class="shiki vitesse-dark twoslash lsp" style="background-color:#121212;color:#dbd7caee" tabindex="0"><code><span class="line"><span style="color:#CB7676">const </span><span style="color:#BD976A"><span class="twoslash-hover"><span class="twoslash-popup-container"><code class="twoslash-popup-code"><span style="color:#CB7676">const </span><span style="color:#BD976A">difficult_schema</span><span style="color:#666666">: </span><span style="color:#5DA994">any</span></code></span>difficult_schema</span></span><span style="color:#666666"> =</span><span style="color:#BD976A"> </span><span style="color:#BD976A"><span class="twoslash-hover"><span class="twoslash-popup-container"><code class="twoslash-popup-code"><span style="color:#4D9375">import</span><span style="color:#BD976A"> z</span></code></span>z</span></span><span style="color:#666666">.</span><span style="color:#80A665"><span class="twoslash-hover"><span class="twoslash-popup-container"><code class="twoslash-popup-code"><pre class="shiki vitesse-dark" style="background-color:#121212;color:#dbd7caee" tabindex="0"><code><span class="line"><span style="color:#80A665">object</span><span style="color:#666666">&#x3C;&#123;</span></span>
<span class="line"><span style="color:#BD976A">    id</span><span style="color:#666666">: </span><span style="color:#5DA994">z</span><span style="color:#666666">.</span><span style="color:#5DA994">ZodString</span><span style="color:#666666">;</span></span>
<span class="line"><span style="color:#BD976A">    name</span><span style="color:#666666">: </span><span style="color:#5DA994">z</span><span style="color:#666666">.</span><span style="color:#5DA994">ZodString</span><span style="color:#666666">;</span></span>
<span class="line"><span style="color:#BD976A">    age</span><span style="color:#666666">: </span><span style="color:#5DA994">z</span><span style="color:#666666">.</span><span style="color:#5DA994">ZodNumber</span><span style="color:#666666">;</span></span>
<span class="line"><span style="color:#BD976A">    isAwesome</span><span style="color:#666666">: </span><span style="color:#5DA994">z</span><span style="color:#666666">.</span><span style="color:#5DA994">ZodOptional</span><span style="color:#666666">&#x3C;</span><span style="color:#5DA994">z</span><span style="color:#666666">.</span><span style="color:#5DA994">ZodBoolean</span><span style="color:#666666">>;</span></span>
<span class="line"><span style="color:#BD976A">    friends</span><span style="color:#666666">: </span><span style="color:#5DA994">z</span><span style="color:#666666">.</span><span style="color:#5DA994">ZodArray</span><span style="color:#666666">&#x3C;</span><span style="color:#5DA994">z</span><span style="color:#666666">.</span><span style="color:#5DA994">ZodString</span><span style="color:#666666">, </span><span style="color:#C98A7D99">"</span><span style="color:#C98A7D">many</span><span style="color:#C98A7D99">"</span><span style="color:#666666">>;</span></span>
<span class="line"><span style="color:#BD976A">    zip</span><span style="color:#666666">: </span><span style="color:#5DA994">z</span><span style="color:#666666">.</span><span style="color:#5DA994">ZodString</span><span style="color:#666666">;</span></span>
<span class="line"><span style="color:#BD976A">    children</span><span style="color:#666666">: </span><span style="color:#5DA994">z</span><span style="color:#666666">.</span><span style="color:#5DA994">ZodMap</span><span style="color:#666666">&#x3C;...>;</span></span>
<span class="line"><span style="color:#666666">&#125;>(</span><span style="color:#BD976A">shape</span><span style="color:#666666">: &#123;</span></span>
<span class="line"><span style="color:#666666">    ...;</span></span>
<span class="line"><span style="color:#666666">&#125;,</span><span style="color:#BD976A"> params</span><span style="color:#CB7676">?</span><span style="color:#666666">: </span><span style="color:#5DA994">z</span><span style="color:#666666">.</span><span style="color:#5DA994">RawCreateParams</span><span style="color:#666666">):</span><span style="color:#5DA994"> z</span><span style="color:#666666">.</span><span style="color:#5DA994">ZodObject</span><span style="color:#666666">&#x3C;</span><span style="color:#DBD7CAEE">...</span><span style="color:#666666">></span></span>
<span class="line"><span style="color:#4D9375">export</span><span style="color:#BD976A"> object</span></span></code></pre></code></span>object</span></span><span style="color:#666666">(&#123;</span></span>
<span class="line"><span style="color:#B8A965">	</span><span style="color:#B8A965"><span class="twoslash-hover"><span class="twoslash-popup-container"><code class="twoslash-popup-code"><span style="color:#80A665">id</span><span style="color:#666666">:</span><span style="color:#BD976A"> z</span><span style="color:#666666">.</span><span style="color:#BD976A">ZodString</span></code></span>id</span></span><span style="color:#666666">: </span><span style="color:#BD976A"><span class="twoslash-hover"><span class="twoslash-popup-container"><code class="twoslash-popup-code"><span style="color:#4D9375">import</span><span style="color:#BD976A"> z</span></code></span>z</span></span><span style="color:#666666">.</span><span style="color:#80A665"><span class="twoslash-hover"><span class="twoslash-popup-container"><code class="twoslash-popup-code"><pre class="shiki vitesse-dark" style="background-color:#121212;color:#dbd7caee" tabindex="0"><code><span class="line"><span style="color:#CB7676">function</span><span style="color:#80A665"> string</span><span style="color:#666666">(</span><span style="color:#80A665">params</span><span style="color:#CB7676">?</span><span style="color:#666666">: (&#123;</span></span>
<span class="line"><span style="color:#BD976A">    errorMap</span><span style="color:#CB7676">?</span><span style="color:#666666">: </span><span style="color:#5DA994">z</span><span style="color:#666666">.</span><span style="color:#5DA994">ZodErrorMap</span><span style="color:#666666"> | </span><span style="color:#CB7676">undefined</span><span style="color:#666666">;</span></span>
<span class="line"><span style="color:#BD976A">    invalid_type_error</span><span style="color:#CB7676">?</span><span style="color:#666666">: </span><span style="color:#5DA994">string</span><span style="color:#666666"> | </span><span style="color:#CB7676">undefined</span><span style="color:#666666">;</span></span>
<span class="line"><span style="color:#BD976A">    required_error</span><span style="color:#CB7676">?</span><span style="color:#666666">: </span><span style="color:#5DA994">string</span><span style="color:#666666"> | </span><span style="color:#CB7676">undefined</span><span style="color:#666666">;</span></span>
<span class="line"><span style="color:#BD976A">    message</span><span style="color:#CB7676">?</span><span style="color:#666666">: </span><span style="color:#5DA994">string</span><span style="color:#666666"> | </span><span style="color:#CB7676">undefined</span><span style="color:#666666">;</span></span>
<span class="line"><span style="color:#BD976A">    description</span><span style="color:#CB7676">?</span><span style="color:#666666">: </span><span style="color:#5DA994">string</span><span style="color:#666666"> | </span><span style="color:#CB7676">undefined</span><span style="color:#666666">;</span></span>
<span class="line"><span style="color:#666666">&#125; &#x26; &#123;</span></span>
<span class="line"><span style="color:#666666">    ...;</span></span>
<span class="line"><span style="color:#666666">&#125;) | </span><span style="color:#CB7676">undefined</span><span style="color:#666666">):</span><span style="color:#5DA994"> z</span><span style="color:#666666">.</span><span style="color:#5DA994">ZodString</span></span>
<span class="line"><span style="color:#4D9375">export</span><span style="color:#BD976A"> string</span></span></code></pre></code></span>string</span></span><span style="color:#666666">().</span><span style="color:#80A665"><span class="twoslash-hover"><span class="twoslash-popup-container"><code class="twoslash-popup-code"><span style="color:#BD976A">ZodString</span><span style="color:#666666">.</span><span style="color:#80A665">uuid</span><span style="color:#666666">(</span><span style="color:#BD976A">message</span><span style="color:#CB7676">?:</span><span style="color:#BD976A"> errorUtil</span><span style="color:#666666">.</span><span style="color:#BD976A">ErrMessage</span><span style="color:#CB7676"> |</span><span style="color:#CB7676"> undefined</span><span style="color:#666666">)</span><span style="color:#DBD7CAEE">: </span><span style="color:#BD976A">z</span><span style="color:#666666">.</span><span style="color:#BD976A">ZodString</span></code></span>uuid</span></span><span style="color:#666666">(),</span></span>
<span class="line"><span style="color:#B8A965">	</span><span style="color:#B8A965"><span class="twoslash-hover"><span class="twoslash-popup-container"><code class="twoslash-popup-code"><span style="color:#80A665">name</span><span style="color:#666666">:</span><span style="color:#BD976A"> z</span><span style="color:#666666">.</span><span style="color:#BD976A">ZodString</span></code></span>name</span></span><span style="color:#666666">: </span><span style="color:#BD976A"><span class="twoslash-hover"><span class="twoslash-popup-container"><code class="twoslash-popup-code"><span style="color:#4D9375">import</span><span style="color:#BD976A"> z</span></code></span>z</span></span><span style="color:#666666">.</span><span style="color:#80A665"><span class="twoslash-hover"><span class="twoslash-popup-container"><code class="twoslash-popup-code"><pre class="shiki vitesse-dark" style="background-color:#121212;color:#dbd7caee" tabindex="0"><code><span class="line"><span style="color:#CB7676">function</span><span style="color:#80A665"> string</span><span style="color:#666666">(</span><span style="color:#80A665">params</span><span style="color:#CB7676">?</span><span style="color:#666666">: (&#123;</span></span>
<span class="line"><span style="color:#BD976A">    errorMap</span><span style="color:#CB7676">?</span><span style="color:#666666">: </span><span style="color:#5DA994">z</span><span style="color:#666666">.</span><span style="color:#5DA994">ZodErrorMap</span><span style="color:#666666"> | </span><span style="color:#CB7676">undefined</span><span style="color:#666666">;</span></span>
<span class="line"><span style="color:#BD976A">    invalid_type_error</span><span style="color:#CB7676">?</span><span style="color:#666666">: </span><span style="color:#5DA994">string</span><span style="color:#666666"> | </span><span style="color:#CB7676">undefined</span><span style="color:#666666">;</span></span>
<span class="line"><span style="color:#BD976A">    required_error</span><span style="color:#CB7676">?</span><span style="color:#666666">: </span><span style="color:#5DA994">string</span><span style="color:#666666"> | </span><span style="color:#CB7676">undefined</span><span style="color:#666666">;</span></span>
<span class="line"><span style="color:#BD976A">    message</span><span style="color:#CB7676">?</span><span style="color:#666666">: </span><span style="color:#5DA994">string</span><span style="color:#666666"> | </span><span style="color:#CB7676">undefined</span><span style="color:#666666">;</span></span>
<span class="line"><span style="color:#BD976A">    description</span><span style="color:#CB7676">?</span><span style="color:#666666">: </span><span style="color:#5DA994">string</span><span style="color:#666666"> | </span><span style="color:#CB7676">undefined</span><span style="color:#666666">;</span></span>
<span class="line"><span style="color:#666666">&#125; &#x26; &#123;</span></span>
<span class="line"><span style="color:#666666">    ...;</span></span>
<span class="line"><span style="color:#666666">&#125;) | </span><span style="color:#CB7676">undefined</span><span style="color:#666666">):</span><span style="color:#5DA994"> z</span><span style="color:#666666">.</span><span style="color:#5DA994">ZodString</span></span>
<span class="line"><span style="color:#4D9375">export</span><span style="color:#BD976A"> string</span></span></code></pre></code></span>string</span></span><span style="color:#666666">().</span><span style="color:#80A665"><span class="twoslash-hover"><span class="twoslash-popup-container"><code class="twoslash-popup-code"><span style="color:#BD976A">ZodString</span><span style="color:#666666">.</span><span style="color:#80A665">min</span><span style="color:#666666">(</span><span style="color:#BD976A">minLength</span><span style="color:#DBD7CAEE">: </span><span style="color:#BD976A">number</span><span style="color:#666666">,</span><span style="color:#BD976A"> message</span><span style="color:#CB7676">?:</span><span style="color:#BD976A"> errorUtil</span><span style="color:#666666">.</span><span style="color:#BD976A">ErrMessage</span><span style="color:#CB7676"> |</span><span style="color:#CB7676"> undefined</span><span style="color:#666666">)</span><span style="color:#DBD7CAEE">: </span><span style="color:#BD976A">z</span><span style="color:#666666">.</span><span style="color:#BD976A">ZodString</span></code></span>min</span></span><span style="color:#666666">(</span><span style="color:#4C9A91">3</span><span style="color:#666666">).</span><span style="color:#80A665"><span class="twoslash-hover"><span class="twoslash-popup-container"><code class="twoslash-popup-code"><span style="color:#BD976A">ZodString</span><span style="color:#666666">.</span><span style="color:#80A665">max</span><span style="color:#666666">(</span><span style="color:#BD976A">maxLength</span><span style="color:#DBD7CAEE">: </span><span style="color:#BD976A">number</span><span style="color:#666666">,</span><span style="color:#BD976A"> message</span><span style="color:#CB7676">?:</span><span style="color:#BD976A"> errorUtil</span><span style="color:#666666">.</span><span style="color:#BD976A">ErrMessage</span><span style="color:#CB7676"> |</span><span style="color:#CB7676"> undefined</span><span style="color:#666666">)</span><span style="color:#DBD7CAEE">: </span><span style="color:#BD976A">z</span><span style="color:#666666">.</span><span style="color:#BD976A">ZodString</span></code></span>max</span></span><span style="color:#666666">(</span><span style="color:#4C9A91">20</span><span style="color:#666666">),</span></span>
<span class="line"><span style="color:#B8A965">	</span><span style="color:#B8A965"><span class="twoslash-hover"><span class="twoslash-popup-container"><code class="twoslash-popup-code"><span style="color:#80A665">age</span><span style="color:#666666">:</span><span style="color:#BD976A"> z</span><span style="color:#666666">.</span><span style="color:#BD976A">ZodNumber</span></code></span>age</span></span><span style="color:#666666">: </span><span style="color:#BD976A"><span class="twoslash-hover"><span class="twoslash-popup-container"><code class="twoslash-popup-code"><span style="color:#4D9375">import</span><span style="color:#BD976A"> z</span></code></span>z</span></span><span style="color:#666666">.</span><span style="color:#80A665"><span class="twoslash-hover"><span class="twoslash-popup-container"><code class="twoslash-popup-code"><pre class="shiki vitesse-dark" style="background-color:#121212;color:#dbd7caee" tabindex="0"><code><span class="line"><span style="color:#CB7676">function</span><span style="color:#80A665"> number</span><span style="color:#666666">(</span><span style="color:#80A665">params</span><span style="color:#CB7676">?</span><span style="color:#666666">: (&#123;</span></span>
<span class="line"><span style="color:#BD976A">    errorMap</span><span style="color:#CB7676">?</span><span style="color:#666666">: </span><span style="color:#5DA994">z</span><span style="color:#666666">.</span><span style="color:#5DA994">ZodErrorMap</span><span style="color:#666666"> | </span><span style="color:#CB7676">undefined</span><span style="color:#666666">;</span></span>
<span class="line"><span style="color:#BD976A">    invalid_type_error</span><span style="color:#CB7676">?</span><span style="color:#666666">: </span><span style="color:#5DA994">string</span><span style="color:#666666"> | </span><span style="color:#CB7676">undefined</span><span style="color:#666666">;</span></span>
<span class="line"><span style="color:#BD976A">    required_error</span><span style="color:#CB7676">?</span><span style="color:#666666">: </span><span style="color:#5DA994">string</span><span style="color:#666666"> | </span><span style="color:#CB7676">undefined</span><span style="color:#666666">;</span></span>
<span class="line"><span style="color:#BD976A">    message</span><span style="color:#CB7676">?</span><span style="color:#666666">: </span><span style="color:#5DA994">string</span><span style="color:#666666"> | </span><span style="color:#CB7676">undefined</span><span style="color:#666666">;</span></span>
<span class="line"><span style="color:#BD976A">    description</span><span style="color:#CB7676">?</span><span style="color:#666666">: </span><span style="color:#5DA994">string</span><span style="color:#666666"> | </span><span style="color:#CB7676">undefined</span><span style="color:#666666">;</span></span>
<span class="line"><span style="color:#666666">&#125; &#x26; &#123;</span></span>
<span class="line"><span style="color:#666666">    ...;</span></span>
<span class="line"><span style="color:#666666">&#125;) | </span><span style="color:#CB7676">undefined</span><span style="color:#666666">):</span><span style="color:#5DA994"> z</span><span style="color:#666666">.</span><span style="color:#5DA994">ZodNumber</span></span>
<span class="line"><span style="color:#4D9375">export</span><span style="color:#BD976A"> number</span></span></code></pre></code></span>number</span></span><span style="color:#666666">().</span><span style="color:#80A665"><span class="twoslash-hover"><span class="twoslash-popup-container"><code class="twoslash-popup-code"><span style="color:#BD976A">ZodNumber</span><span style="color:#666666">.</span><span style="color:#80A665">int</span><span style="color:#666666">(</span><span style="color:#BD976A">message</span><span style="color:#CB7676">?:</span><span style="color:#BD976A"> errorUtil</span><span style="color:#666666">.</span><span style="color:#BD976A">ErrMessage</span><span style="color:#CB7676"> |</span><span style="color:#CB7676"> undefined</span><span style="color:#666666">)</span><span style="color:#DBD7CAEE">: </span><span style="color:#BD976A">z</span><span style="color:#666666">.</span><span style="color:#BD976A">ZodNumber</span></code></span>int</span></span><span style="color:#666666">().</span><span style="color:#80A665"><span class="twoslash-hover"><span class="twoslash-popup-container"><code class="twoslash-popup-code"><span style="color:#BD976A">ZodNumber</span><span style="color:#666666">.</span><span style="color:#BD976A">min</span><span style="color:#DBD7CAEE">: </span><span style="color:#666666">(</span><span style="color:#BD976A">value</span><span style="color:#666666">: </span><span style="color:#5DA994">number</span><span style="color:#666666">,</span><span style="color:#BD976A"> message</span><span style="color:#CB7676">?</span><span style="color:#666666">: </span><span style="color:#5DA994">errorUtil</span><span style="color:#666666">.</span><span style="color:#5DA994">ErrMessage</span><span style="color:#666666"> | </span><span style="color:#CB7676">undefined</span><span style="color:#666666">)</span><span style="color:#666666"> =></span><span style="color:#BD976A"> z</span><span style="color:#666666">.</span><span style="color:#BD976A">ZodNumber</span></code></span>min</span></span><span style="color:#666666">(</span><span style="color:#4C9A91">0</span><span style="color:#666666">).</span><span style="color:#80A665"><span class="twoslash-hover"><span class="twoslash-popup-container"><code class="twoslash-popup-code"><span style="color:#BD976A">ZodNumber</span><span style="color:#666666">.</span><span style="color:#BD976A">max</span><span style="color:#DBD7CAEE">: </span><span style="color:#666666">(</span><span style="color:#BD976A">value</span><span style="color:#666666">: </span><span style="color:#5DA994">number</span><span style="color:#666666">,</span><span style="color:#BD976A"> message</span><span style="color:#CB7676">?</span><span style="color:#666666">: </span><span style="color:#5DA994">errorUtil</span><span style="color:#666666">.</span><span style="color:#5DA994">ErrMessage</span><span style="color:#666666"> | </span><span style="color:#CB7676">undefined</span><span style="color:#666666">)</span><span style="color:#666666"> =></span><span style="color:#BD976A"> z</span><span style="color:#666666">.</span><span style="color:#BD976A">ZodNumber</span></code></span>max</span></span><span style="color:#666666">(</span><span style="color:#4C9A91">120</span><span style="color:#666666">).</span><span style="color:#80A665"><span class="twoslash-hover"><span class="twoslash-popup-container"><code class="twoslash-popup-code"><span style="color:#BD976A">ZodNumber</span><span style="color:#666666">.</span><span style="color:#80A665">multipleOf</span><span style="color:#666666">(</span><span style="color:#BD976A">value</span><span style="color:#DBD7CAEE">: </span><span style="color:#BD976A">number</span><span style="color:#666666">,</span><span style="color:#BD976A"> message</span><span style="color:#CB7676">?:</span><span style="color:#BD976A"> errorUtil</span><span style="color:#666666">.</span><span style="color:#BD976A">ErrMessage</span><span style="color:#CB7676"> |</span><span style="color:#CB7676"> undefined</span><span style="color:#666666">)</span><span style="color:#DBD7CAEE">: </span><span style="color:#BD976A">z</span><span style="color:#666666">.</span><span style="color:#BD976A">ZodNumber</span></code></span>multipleOf</span></span><span style="color:#666666">(</span><span style="color:#4C9A91">10</span><span style="color:#666666">),</span></span>
<span class="line"><span style="color:#B8A965">	</span><span style="color:#B8A965"><span class="twoslash-hover"><span class="twoslash-popup-container"><code class="twoslash-popup-code"><span style="color:#80A665">isAwesome</span><span style="color:#666666">:</span><span style="color:#BD976A"> z</span><span style="color:#666666">.</span><span style="color:#BD976A">ZodOptional</span><span style="color:#666666">&#x3C;</span><span style="color:#BD976A">z</span><span style="color:#666666">.</span><span style="color:#BD976A">ZodBoolean</span><span style="color:#666666">></span></code></span>isAwesome</span></span><span style="color:#666666">: </span><span style="color:#BD976A"><span class="twoslash-hover"><span class="twoslash-popup-container"><code class="twoslash-popup-code"><span style="color:#4D9375">import</span><span style="color:#BD976A"> z</span></code></span>z</span></span><span style="color:#666666">.</span><span style="color:#80A665"><span class="twoslash-hover"><span class="twoslash-popup-container"><code class="twoslash-popup-code"><pre class="shiki vitesse-dark" style="background-color:#121212;color:#dbd7caee" tabindex="0"><code><span class="line"><span style="color:#CB7676">function</span><span style="color:#80A665"> boolean</span><span style="color:#666666">(</span><span style="color:#80A665">params</span><span style="color:#CB7676">?</span><span style="color:#666666">: (&#123;</span></span>
<span class="line"><span style="color:#BD976A">    errorMap</span><span style="color:#CB7676">?</span><span style="color:#666666">: </span><span style="color:#5DA994">z</span><span style="color:#666666">.</span><span style="color:#5DA994">ZodErrorMap</span><span style="color:#666666"> | </span><span style="color:#CB7676">undefined</span><span style="color:#666666">;</span></span>
<span class="line"><span style="color:#BD976A">    invalid_type_error</span><span style="color:#CB7676">?</span><span style="color:#666666">: </span><span style="color:#5DA994">string</span><span style="color:#666666"> | </span><span style="color:#CB7676">undefined</span><span style="color:#666666">;</span></span>
<span class="line"><span style="color:#BD976A">    required_error</span><span style="color:#CB7676">?</span><span style="color:#666666">: </span><span style="color:#5DA994">string</span><span style="color:#666666"> | </span><span style="color:#CB7676">undefined</span><span style="color:#666666">;</span></span>
<span class="line"><span style="color:#BD976A">    message</span><span style="color:#CB7676">?</span><span style="color:#666666">: </span><span style="color:#5DA994">string</span><span style="color:#666666"> | </span><span style="color:#CB7676">undefined</span><span style="color:#666666">;</span></span>
<span class="line"><span style="color:#BD976A">    description</span><span style="color:#CB7676">?</span><span style="color:#666666">: </span><span style="color:#5DA994">string</span><span style="color:#666666"> | </span><span style="color:#CB7676">undefined</span><span style="color:#666666">;</span></span>
<span class="line"><span style="color:#666666">&#125; &#x26; &#123;</span></span>
<span class="line"><span style="color:#666666">    ...;</span></span>
<span class="line"><span style="color:#666666">&#125;) | </span><span style="color:#CB7676">undefined</span><span style="color:#666666">):</span><span style="color:#5DA994"> z</span><span style="color:#666666">.</span><span style="color:#5DA994">ZodBoolean</span></span>
<span class="line"><span style="color:#4D9375">export</span><span style="color:#BD976A"> boolean</span></span></code></pre></code></span>boolean</span></span><span style="color:#666666">().</span><span style="color:#80A665"><span class="twoslash-hover"><span class="twoslash-popup-container"><code class="twoslash-popup-code"><span style="color:#BD976A">ZodType</span><span style="color:#666666">&#x3C;</span><span style="color:#BD976A">boolean</span><span style="color:#666666">,</span><span style="color:#BD976A"> ZodBooleanDef</span><span style="color:#666666">,</span><span style="color:#BD976A"> boolean</span><span style="color:#666666">>.</span><span style="color:#80A665">optional</span><span style="color:#666666">()</span><span style="color:#DBD7CAEE">: </span><span style="color:#BD976A">z</span><span style="color:#666666">.</span><span style="color:#BD976A">ZodOptional</span><span style="color:#666666">&#x3C;</span><span style="color:#BD976A">z</span><span style="color:#666666">.</span><span style="color:#BD976A">ZodBoolean</span><span style="color:#666666">></span></code></span>optional</span></span><span style="color:#666666">(),</span></span>
<span class="line"><span style="color:#B8A965">	</span><span style="color:#B8A965"><span class="twoslash-hover"><span class="twoslash-popup-container"><code class="twoslash-popup-code"><span style="color:#80A665">friends</span><span style="color:#666666">:</span><span style="color:#BD976A"> z</span><span style="color:#666666">.</span><span style="color:#BD976A">ZodArray</span><span style="color:#666666">&#x3C;</span><span style="color:#BD976A">z</span><span style="color:#666666">.</span><span style="color:#BD976A">ZodString</span><span style="color:#666666">,</span><span style="color:#C98A7D99"> "</span><span style="color:#C98A7D">many</span><span style="color:#C98A7D99">"</span><span style="color:#666666">></span></code></span>friends</span></span><span style="color:#666666">: </span><span style="color:#BD976A"><span class="twoslash-hover"><span class="twoslash-popup-container"><code class="twoslash-popup-code"><span style="color:#4D9375">import</span><span style="color:#BD976A"> z</span></code></span>z</span></span><span style="color:#666666">.</span><span style="color:#80A665"><span class="twoslash-hover"><span class="twoslash-popup-container"><code class="twoslash-popup-code"><pre class="shiki vitesse-dark" style="background-color:#121212;color:#dbd7caee" tabindex="0"><code><span class="line"><span style="color:#80A665">array</span><span style="color:#666666">&#x3C;</span><span style="color:#5DA994">z</span><span style="color:#666666">.</span><span style="color:#5DA994">ZodString</span><span style="color:#666666">>(</span><span style="color:#BD976A">schema</span><span style="color:#DBD7CAEE">: </span><span style="color:#BD976A">z</span><span style="color:#666666">.</span><span style="color:#BD976A">ZodString</span><span style="color:#666666">,</span><span style="color:#BD976A"> params</span><span style="color:#CB7676">?:</span><span style="color:#BD976A"> z</span><span style="color:#666666">.</span><span style="color:#BD976A">RawCreateParams</span><span style="color:#666666">)</span><span style="color:#DBD7CAEE">: </span><span style="color:#BD976A">z</span><span style="color:#666666">.</span><span style="color:#BD976A">ZodArray</span><span style="color:#666666">&#x3C;</span><span style="color:#BD976A">z</span><span style="color:#666666">.</span><span style="color:#BD976A">ZodString</span><span style="color:#666666">,</span><span style="color:#C98A7D99"> "</span><span style="color:#C98A7D">many</span><span style="color:#C98A7D99">"</span><span style="color:#666666">></span></span>
<span class="line"><span style="color:#4D9375">export</span><span style="color:#BD976A"> array</span></span></code></pre></code></span>array</span></span><span style="color:#666666">(</span><span style="color:#BD976A"><span class="twoslash-hover"><span class="twoslash-popup-container"><code class="twoslash-popup-code"><span style="color:#4D9375">import</span><span style="color:#BD976A"> z</span></code></span>z</span></span><span style="color:#666666">.</span><span style="color:#80A665"><span class="twoslash-hover"><span class="twoslash-popup-container"><code class="twoslash-popup-code"><pre class="shiki vitesse-dark" style="background-color:#121212;color:#dbd7caee" tabindex="0"><code><span class="line"><span style="color:#CB7676">function</span><span style="color:#80A665"> string</span><span style="color:#666666">(</span><span style="color:#80A665">params</span><span style="color:#CB7676">?</span><span style="color:#666666">: (&#123;</span></span>
<span class="line"><span style="color:#BD976A">    errorMap</span><span style="color:#CB7676">?</span><span style="color:#666666">: </span><span style="color:#5DA994">z</span><span style="color:#666666">.</span><span style="color:#5DA994">ZodErrorMap</span><span style="color:#666666"> | </span><span style="color:#CB7676">undefined</span><span style="color:#666666">;</span></span>
<span class="line"><span style="color:#BD976A">    invalid_type_error</span><span style="color:#CB7676">?</span><span style="color:#666666">: </span><span style="color:#5DA994">string</span><span style="color:#666666"> | </span><span style="color:#CB7676">undefined</span><span style="color:#666666">;</span></span>
<span class="line"><span style="color:#BD976A">    required_error</span><span style="color:#CB7676">?</span><span style="color:#666666">: </span><span style="color:#5DA994">string</span><span style="color:#666666"> | </span><span style="color:#CB7676">undefined</span><span style="color:#666666">;</span></span>
<span class="line"><span style="color:#BD976A">    message</span><span style="color:#CB7676">?</span><span style="color:#666666">: </span><span style="color:#5DA994">string</span><span style="color:#666666"> | </span><span style="color:#CB7676">undefined</span><span style="color:#666666">;</span></span>
<span class="line"><span style="color:#BD976A">    description</span><span style="color:#CB7676">?</span><span style="color:#666666">: </span><span style="color:#5DA994">string</span><span style="color:#666666"> | </span><span style="color:#CB7676">undefined</span><span style="color:#666666">;</span></span>
<span class="line"><span style="color:#666666">&#125; &#x26; &#123;</span></span>
<span class="line"><span style="color:#666666">    ...;</span></span>
<span class="line"><span style="color:#666666">&#125;) | </span><span style="color:#CB7676">undefined</span><span style="color:#666666">):</span><span style="color:#5DA994"> z</span><span style="color:#666666">.</span><span style="color:#5DA994">ZodString</span></span>
<span class="line"><span style="color:#4D9375">export</span><span style="color:#BD976A"> string</span></span></code></pre></code></span>string</span></span><span style="color:#666666">().</span><span style="color:#80A665"><span class="twoslash-hover"><span class="twoslash-popup-container"><code class="twoslash-popup-code"><span style="color:#BD976A">ZodString</span><span style="color:#666666">.</span><span style="color:#80A665">min</span><span style="color:#666666">(</span><span style="color:#BD976A">minLength</span><span style="color:#DBD7CAEE">: </span><span style="color:#BD976A">number</span><span style="color:#666666">,</span><span style="color:#BD976A"> message</span><span style="color:#CB7676">?:</span><span style="color:#BD976A"> errorUtil</span><span style="color:#666666">.</span><span style="color:#BD976A">ErrMessage</span><span style="color:#CB7676"> |</span><span style="color:#CB7676"> undefined</span><span style="color:#666666">)</span><span style="color:#DBD7CAEE">: </span><span style="color:#BD976A">z</span><span style="color:#666666">.</span><span style="color:#BD976A">ZodString</span></code></span>min</span></span><span style="color:#666666">(</span><span style="color:#4C9A91">3</span><span style="color:#666666">).</span><span style="color:#80A665"><span class="twoslash-hover"><span class="twoslash-popup-container"><code class="twoslash-popup-code"><span style="color:#BD976A">ZodString</span><span style="color:#666666">.</span><span style="color:#80A665">max</span><span style="color:#666666">(</span><span style="color:#BD976A">maxLength</span><span style="color:#DBD7CAEE">: </span><span style="color:#BD976A">number</span><span style="color:#666666">,</span><span style="color:#BD976A"> message</span><span style="color:#CB7676">?:</span><span style="color:#BD976A"> errorUtil</span><span style="color:#666666">.</span><span style="color:#BD976A">ErrMessage</span><span style="color:#CB7676"> |</span><span style="color:#CB7676"> undefined</span><span style="color:#666666">)</span><span style="color:#DBD7CAEE">: </span><span style="color:#BD976A">z</span><span style="color:#666666">.</span><span style="color:#BD976A">ZodString</span></code></span>max</span></span><span style="color:#666666">(</span><span style="color:#4C9A91">20</span><span style="color:#666666">)).</span><span style="color:#80A665"><span class="twoslash-hover"><span class="twoslash-popup-container"><code class="twoslash-popup-code"><span style="color:#BD976A">ZodArray</span><span style="color:#666666">&#x3C;</span><span style="color:#BD976A">ZodString</span><span style="color:#666666">,</span><span style="color:#C98A7D99"> "</span><span style="color:#C98A7D">many</span><span style="color:#C98A7D99">"</span><span style="color:#666666">>.</span><span style="color:#80A665">min</span><span style="color:#666666">(</span><span style="color:#BD976A">minLength</span><span style="color:#DBD7CAEE">: </span><span style="color:#BD976A">number</span><span style="color:#666666">,</span><span style="color:#BD976A"> message</span><span style="color:#CB7676">?:</span><span style="color:#BD976A"> errorUtil</span><span style="color:#666666">.</span><span style="color:#BD976A">ErrMessage</span><span style="color:#CB7676"> |</span><span style="color:#CB7676"> undefined</span><span style="color:#666666">)</span><span style="color:#DBD7CAEE">: </span><span style="color:#BD976A">z</span><span style="color:#666666">.</span><span style="color:#BD976A">ZodArray</span><span style="color:#666666">&#x3C;</span><span style="color:#BD976A">z</span><span style="color:#666666">.</span><span style="color:#BD976A">ZodString</span><span style="color:#666666">,</span><span style="color:#C98A7D99"> "</span><span style="color:#C98A7D">many</span><span style="color:#C98A7D99">"</span><span style="color:#666666">></span></code></span>min</span></span><span style="color:#666666">(</span><span style="color:#4C9A91">1</span><span style="color:#666666">).</span><span style="color:#80A665"><span class="twoslash-hover"><span class="twoslash-popup-container"><code class="twoslash-popup-code"><span style="color:#BD976A">ZodArray</span><span style="color:#666666">&#x3C;</span><span style="color:#BD976A">ZodString</span><span style="color:#666666">,</span><span style="color:#C98A7D99"> "</span><span style="color:#C98A7D">many</span><span style="color:#C98A7D99">"</span><span style="color:#666666">>.</span><span style="color:#80A665">max</span><span style="color:#666666">(</span><span style="color:#BD976A">maxLength</span><span style="color:#DBD7CAEE">: </span><span style="color:#BD976A">number</span><span style="color:#666666">,</span><span style="color:#BD976A"> message</span><span style="color:#CB7676">?:</span><span style="color:#BD976A"> errorUtil</span><span style="color:#666666">.</span><span style="color:#BD976A">ErrMessage</span><span style="color:#CB7676"> |</span><span style="color:#CB7676"> undefined</span><span style="color:#666666">)</span><span style="color:#DBD7CAEE">: </span><span style="color:#BD976A">z</span><span style="color:#666666">.</span><span style="color:#BD976A">ZodArray</span><span style="color:#666666">&#x3C;</span><span style="color:#BD976A">z</span><span style="color:#666666">.</span><span style="color:#BD976A">ZodString</span><span style="color:#666666">,</span><span style="color:#C98A7D99"> "</span><span style="color:#C98A7D">many</span><span style="color:#C98A7D99">"</span><span style="color:#666666">></span></code></span>max</span></span><span style="color:#666666">(</span><span style="color:#4C9A91">10</span><span style="color:#666666">),</span></span>
<span class="line"><span style="color:#B8A965">	</span><span style="color:#B8A965"><span class="twoslash-hover"><span class="twoslash-popup-container"><code class="twoslash-popup-code"><span style="color:#80A665">zip</span><span style="color:#666666">:</span><span style="color:#BD976A"> z</span><span style="color:#666666">.</span><span style="color:#BD976A">ZodString</span></code></span>zip</span></span><span style="color:#666666">: </span><span style="color:#BD976A"><span class="twoslash-hover"><span class="twoslash-popup-container"><code class="twoslash-popup-code"><span style="color:#4D9375">import</span><span style="color:#BD976A"> z</span></code></span>z</span></span><span style="color:#666666">.</span><span style="color:#80A665"><span class="twoslash-hover"><span class="twoslash-popup-container"><code class="twoslash-popup-code"><pre class="shiki vitesse-dark" style="background-color:#121212;color:#dbd7caee" tabindex="0"><code><span class="line"><span style="color:#CB7676">function</span><span style="color:#80A665"> string</span><span style="color:#666666">(</span><span style="color:#80A665">params</span><span style="color:#CB7676">?</span><span style="color:#666666">: (&#123;</span></span>
<span class="line"><span style="color:#BD976A">    errorMap</span><span style="color:#CB7676">?</span><span style="color:#666666">: </span><span style="color:#5DA994">z</span><span style="color:#666666">.</span><span style="color:#5DA994">ZodErrorMap</span><span style="color:#666666"> | </span><span style="color:#CB7676">undefined</span><span style="color:#666666">;</span></span>
<span class="line"><span style="color:#BD976A">    invalid_type_error</span><span style="color:#CB7676">?</span><span style="color:#666666">: </span><span style="color:#5DA994">string</span><span style="color:#666666"> | </span><span style="color:#CB7676">undefined</span><span style="color:#666666">;</span></span>
<span class="line"><span style="color:#BD976A">    required_error</span><span style="color:#CB7676">?</span><span style="color:#666666">: </span><span style="color:#5DA994">string</span><span style="color:#666666"> | </span><span style="color:#CB7676">undefined</span><span style="color:#666666">;</span></span>
<span class="line"><span style="color:#BD976A">    message</span><span style="color:#CB7676">?</span><span style="color:#666666">: </span><span style="color:#5DA994">string</span><span style="color:#666666"> | </span><span style="color:#CB7676">undefined</span><span style="color:#666666">;</span></span>
<span class="line"><span style="color:#BD976A">    description</span><span style="color:#CB7676">?</span><span style="color:#666666">: </span><span style="color:#5DA994">string</span><span style="color:#666666"> | </span><span style="color:#CB7676">undefined</span><span style="color:#666666">;</span></span>
<span class="line"><span style="color:#666666">&#125; &#x26; &#123;</span></span>
<span class="line"><span style="color:#666666">    ...;</span></span>
<span class="line"><span style="color:#666666">&#125;) | </span><span style="color:#CB7676">undefined</span><span style="color:#666666">):</span><span style="color:#5DA994"> z</span><span style="color:#666666">.</span><span style="color:#5DA994">ZodString</span></span>
<span class="line"><span style="color:#4D9375">export</span><span style="color:#BD976A"> string</span></span></code></pre></code></span>string</span></span><span style="color:#666666">().</span><span style="color:#80A665"><span class="twoslash-hover"><span class="twoslash-popup-container"><code class="twoslash-popup-code"><span style="color:#BD976A">ZodString</span><span style="color:#666666">.</span><span style="color:#80A665">regex</span><span style="color:#666666">(</span><span style="color:#BD976A">regex</span><span style="color:#DBD7CAEE">: </span><span style="color:#BD976A">RegExp</span><span style="color:#666666">,</span><span style="color:#BD976A"> message</span><span style="color:#CB7676">?:</span><span style="color:#BD976A"> errorUtil</span><span style="color:#666666">.</span><span style="color:#BD976A">ErrMessage</span><span style="color:#CB7676"> |</span><span style="color:#CB7676"> undefined</span><span style="color:#666666">)</span><span style="color:#DBD7CAEE">: </span><span style="color:#BD976A">z</span><span style="color:#666666">.</span><span style="color:#BD976A">ZodString</span></code></span>regex</span></span><span style="color:#666666">(</span><span style="color:#C98A7D99">/</span><span style="color:#4D9375">^</span><span style="color:#666666">[</span><span style="color:#C99076">0-9</span><span style="color:#666666">]</span><span style="color:#4C9A91">&#123;5&#125;</span><span style="color:#4D9375">$</span><span style="color:#C98A7D99">/</span><span style="color:#666666">),</span></span>
<span class="line"><span style="color:#B8A965">	</span><span style="color:#B8A965"><span class="twoslash-hover"><span class="twoslash-popup-container"><code class="twoslash-popup-code"><span style="color:#80A665">children</span><span style="color:#666666">:</span><span style="color:#BD976A"> z</span><span style="color:#666666">.</span><span style="color:#BD976A">ZodMap</span><span style="color:#666666">&#x3C;</span><span style="color:#BD976A">z</span><span style="color:#666666">.</span><span style="color:#BD976A">ZodString</span><span style="color:#666666">,</span><span style="color:#BD976A"> z</span><span style="color:#666666">.</span><span style="color:#BD976A">ZodLazy</span><span style="color:#666666">&#x3C;</span><span style="color:#BD976A">any</span><span style="color:#CB7676">>></span></code></span>children</span></span><span style="color:#666666">: </span><span style="color:#BD976A"><span class="twoslash-hover"><span class="twoslash-popup-container"><code class="twoslash-popup-code"><span style="color:#4D9375">import</span><span style="color:#BD976A"> z</span></code></span>z</span></span><span style="color:#666666">.</span><span style="color:#80A665"><span class="twoslash-hover"><span class="twoslash-popup-container"><code class="twoslash-popup-code"><pre class="shiki vitesse-dark" style="background-color:#121212;color:#dbd7caee" tabindex="0"><code><span class="line"><span style="color:#80A665">map</span><span style="color:#666666">&#x3C;</span><span style="color:#5DA994">z</span><span style="color:#666666">.</span><span style="color:#5DA994">ZodString</span><span style="color:#666666">,</span><span style="color:#5DA994"> z</span><span style="color:#666666">.</span><span style="color:#5DA994">ZodLazy</span><span style="color:#666666">&#x3C;</span><span style="color:#5DA994">any</span><span style="color:#666666">>>(</span><span style="color:#BD976A">keyType</span><span style="color:#DBD7CAEE">: </span><span style="color:#BD976A">z</span><span style="color:#666666">.</span><span style="color:#BD976A">ZodString</span><span style="color:#666666">,</span><span style="color:#BD976A"> valueType</span><span style="color:#DBD7CAEE">: </span><span style="color:#BD976A">z</span><span style="color:#666666">.</span><span style="color:#BD976A">ZodLazy</span><span style="color:#666666">&#x3C;</span><span style="color:#BD976A">any</span><span style="color:#666666">>,</span><span style="color:#BD976A"> params</span><span style="color:#CB7676">?:</span><span style="color:#BD976A"> z</span><span style="color:#666666">.</span><span style="color:#BD976A">RawCreateParams</span><span style="color:#666666">)</span><span style="color:#DBD7CAEE">: </span><span style="color:#BD976A">z</span><span style="color:#666666">.</span><span style="color:#BD976A">ZodMap</span><span style="color:#666666">&#x3C;</span><span style="color:#BD976A">z</span><span style="color:#666666">.</span><span style="color:#BD976A">ZodString</span><span style="color:#666666">,</span><span style="color:#BD976A"> z</span><span style="color:#666666">.</span><span style="color:#BD976A">ZodLazy</span><span style="color:#666666">&#x3C;</span><span style="color:#BD976A">any</span><span style="color:#CB7676">>></span></span>
<span class="line"><span style="color:#4D9375">export</span><span style="color:#BD976A"> map</span></span></code></pre></code></span>map</span></span><span style="color:#666666">(</span></span>
<span class="line"><span style="color:#BD976A">		</span><span style="color:#BD976A"><span class="twoslash-hover"><span class="twoslash-popup-container"><code class="twoslash-popup-code"><span style="color:#4D9375">import</span><span style="color:#BD976A"> z</span></code></span>z</span></span><span style="color:#666666">.</span><span style="color:#80A665"><span class="twoslash-hover"><span class="twoslash-popup-container"><code class="twoslash-popup-code"><pre class="shiki vitesse-dark" style="background-color:#121212;color:#dbd7caee" tabindex="0"><code><span class="line"><span style="color:#CB7676">function</span><span style="color:#80A665"> string</span><span style="color:#666666">(</span><span style="color:#80A665">params</span><span style="color:#CB7676">?</span><span style="color:#666666">: (&#123;</span></span>
<span class="line"><span style="color:#BD976A">    errorMap</span><span style="color:#CB7676">?</span><span style="color:#666666">: </span><span style="color:#5DA994">z</span><span style="color:#666666">.</span><span style="color:#5DA994">ZodErrorMap</span><span style="color:#666666"> | </span><span style="color:#CB7676">undefined</span><span style="color:#666666">;</span></span>
<span class="line"><span style="color:#BD976A">    invalid_type_error</span><span style="color:#CB7676">?</span><span style="color:#666666">: </span><span style="color:#5DA994">string</span><span style="color:#666666"> | </span><span style="color:#CB7676">undefined</span><span style="color:#666666">;</span></span>
<span class="line"><span style="color:#BD976A">    required_error</span><span style="color:#CB7676">?</span><span style="color:#666666">: </span><span style="color:#5DA994">string</span><span style="color:#666666"> | </span><span style="color:#CB7676">undefined</span><span style="color:#666666">;</span></span>
<span class="line"><span style="color:#BD976A">    message</span><span style="color:#CB7676">?</span><span style="color:#666666">: </span><span style="color:#5DA994">string</span><span style="color:#666666"> | </span><span style="color:#CB7676">undefined</span><span style="color:#666666">;</span></span>
<span class="line"><span style="color:#BD976A">    description</span><span style="color:#CB7676">?</span><span style="color:#666666">: </span><span style="color:#5DA994">string</span><span style="color:#666666"> | </span><span style="color:#CB7676">undefined</span><span style="color:#666666">;</span></span>
<span class="line"><span style="color:#666666">&#125; &#x26; &#123;</span></span>
<span class="line"><span style="color:#666666">    ...;</span></span>
<span class="line"><span style="color:#666666">&#125;) | </span><span style="color:#CB7676">undefined</span><span style="color:#666666">):</span><span style="color:#5DA994"> z</span><span style="color:#666666">.</span><span style="color:#5DA994">ZodString</span></span>
<span class="line"><span style="color:#4D9375">export</span><span style="color:#BD976A"> string</span></span></code></pre></code></span>string</span></span><span style="color:#666666">(),</span></span>
<span class="line"><span style="color:#BD976A">		</span><span style="color:#BD976A"><span class="twoslash-hover"><span class="twoslash-popup-container"><code class="twoslash-popup-code"><span style="color:#4D9375">import</span><span style="color:#BD976A"> z</span></code></span>z</span></span><span style="color:#666666">.</span><span style="color:#80A665"><span class="twoslash-hover"><span class="twoslash-popup-container"><code class="twoslash-popup-code"><pre class="shiki vitesse-dark" style="background-color:#121212;color:#dbd7caee" tabindex="0"><code><span class="line"><span style="color:#80A665">lazy</span><span style="color:#666666">&#x3C;</span><span style="color:#5DA994">any</span><span style="color:#666666">>(</span><span style="color:#BD976A">getter</span><span style="color:#DBD7CAEE">: </span><span style="color:#666666">()</span><span style="color:#666666"> =></span><span style="color:#BD976A"> any</span><span style="color:#666666">,</span><span style="color:#BD976A"> params</span><span style="color:#CB7676">?:</span><span style="color:#BD976A"> z</span><span style="color:#666666">.</span><span style="color:#BD976A">RawCreateParams</span><span style="color:#666666">)</span><span style="color:#DBD7CAEE">: </span><span style="color:#BD976A">z</span><span style="color:#666666">.</span><span style="color:#BD976A">ZodLazy</span><span style="color:#666666">&#x3C;</span><span style="color:#BD976A">any</span><span style="color:#666666">></span></span>
<span class="line"><span style="color:#4D9375">export</span><span style="color:#BD976A"> lazy</span></span></code></pre></code></span>lazy</span></span><span style="color:#666666">(() => </span><span style="color:#BD976A"><span class="twoslash-hover"><span class="twoslash-popup-container"><code class="twoslash-popup-code"><span style="color:#CB7676">const </span><span style="color:#BD976A">difficult_schema</span><span style="color:#666666">: </span><span style="color:#5DA994">any</span></code></span>difficult_schema</span></span><span style="color:#666666">)</span></span>
<span class="line"><span style="color:#666666">	)</span></span>
<span class="line"><span style="color:#666666">&#125;)</span><span style="color:#4D9375"> as</span><span style="color:#5DA994"> any</span><span style="color:#666666">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#CB7676">const </span><span style="color:#BD976A"><span class="twoslash-hover"><span class="twoslash-popup-container"><code class="twoslash-popup-code"><span style="color:#CB7676">const </span><span style="color:#BD976A">mockData</span><span style="color:#666666">: </span><span style="color:#5DA994">any</span></code></span>mockData</span></span><span style="color:#666666"> =</span><span style="color:#80A665"> </span><span style="color:#80A665"><span class="twoslash-hover"><span class="twoslash-popup-container"><code class="twoslash-popup-code"><span style="color:#80A665">zocker</span><span style="color:#666666">&#x3C;</span><span style="color:#5DA994">any</span><span style="color:#666666">>(</span><span style="color:#BD976A">schema</span><span style="color:#DBD7CAEE">: </span><span style="color:#BD976A">any</span><span style="color:#666666">)</span><span style="color:#DBD7CAEE">: </span><span style="color:#BD976A">Zocker</span><span style="color:#666666">&#x3C;</span><span style="color:#BD976A">any</span><span style="color:#666666">></span></code></span>zocker</span></span><span style="color:#666666">(</span><span style="color:#BD976A"><span class="twoslash-hover"><span class="twoslash-popup-container"><code class="twoslash-popup-code"><span style="color:#CB7676">const </span><span style="color:#BD976A">difficult_schema</span><span style="color:#666666">: </span><span style="color:#5DA994">any</span></code></span>difficult_schema</span></span><span style="color:#666666">).</span><span style="color:#80A665"><span class="twoslash-hover"><span class="twoslash-popup-container"><code class="twoslash-popup-code"><span style="color:#BD976A">Zocker</span><span style="color:#666666">&#x3C;</span><span style="color:#BD976A">any</span><span style="color:#666666">>.</span><span style="color:#80A665">generate</span><span style="color:#666666">()</span><span style="color:#DBD7CAEE">: </span><span style="color:#BD976A">any</span></code></span>generate</span></span><span style="color:#666666">();</span></span></code></pre>`;
  let t33;
  let h31;
  let textContent_13 = `<a href="#supplying-values">Supplying values</a>`;
  let t35;
  let p9;
  let textContent_14 = "When testing specific edge-cases, you often want to supply your own values for certain fields.";
  let t37;
  let p10;
  let textContent_15 = "This can be done by “supplying” your own value, or generator function, for a schema. That value is then\nused whenever a value is needed for a (sub)schema that matches the given schema by reference.";
  let t39;
  let p11;
  let textContent_16 = "This is easier to undestand with an example:";
  let t41;
  let html_tag_3;
  let raw3_value = `<pre class="shiki vitesse-dark twoslash lsp" style="background-color:#121212;color:#dbd7caee" tabindex="0"><code><span class="line"><span style="color:#CB7676">const </span><span style="color:#BD976A"><span class="twoslash-hover"><span class="twoslash-popup-container"><code class="twoslash-popup-code"><pre class="shiki vitesse-dark" style="background-color:#121212;color:#dbd7caee" tabindex="0"><code><span class="line"><span style="color:#CB7676">const </span><span style="color:#BD976A">user</span><span style="color:#666666">: </span><span style="color:#5DA994">z</span><span style="color:#666666">.</span><span style="color:#5DA994">ZodObject</span><span style="color:#666666">&#x3C;&#123;</span></span>
<span class="line"><span style="color:#BD976A">    name</span><span style="color:#666666">: </span><span style="color:#5DA994">z</span><span style="color:#666666">.</span><span style="color:#5DA994">ZodString</span><span style="color:#666666">;</span></span>
<span class="line"><span style="color:#BD976A">    age</span><span style="color:#666666">: </span><span style="color:#5DA994">z</span><span style="color:#666666">.</span><span style="color:#5DA994">ZodNumber</span><span style="color:#666666">;</span></span>
<span class="line"><span style="color:#666666">&#125;, </span><span style="color:#C98A7D99">"</span><span style="color:#C98A7D">strip</span><span style="color:#C98A7D99">"</span><span style="color:#666666">, </span><span style="color:#5DA994">z</span><span style="color:#666666">.</span><span style="color:#5DA994">ZodTypeAny</span><span style="color:#666666">, &#123;</span></span>
<span class="line"><span style="color:#BD976A">    name</span><span style="color:#666666">: </span><span style="color:#5DA994">string</span><span style="color:#666666">;</span></span>
<span class="line"><span style="color:#BD976A">    age</span><span style="color:#666666">: </span><span style="color:#5DA994">number</span><span style="color:#666666">;</span></span>
<span class="line"><span style="color:#666666">&#125;, &#123;</span></span>
<span class="line"><span style="color:#BD976A">    name</span><span style="color:#666666">: </span><span style="color:#5DA994">string</span><span style="color:#666666">;</span></span>
<span class="line"><span style="color:#BD976A">    age</span><span style="color:#666666">: </span><span style="color:#5DA994">number</span><span style="color:#666666">;</span></span>
<span class="line"><span style="color:#666666">&#125;></span></span></code></pre></code></span>user</span></span><span style="color:#666666"> =</span><span style="color:#BD976A"> </span><span style="color:#BD976A"><span class="twoslash-hover"><span class="twoslash-popup-container"><code class="twoslash-popup-code"><span style="color:#4D9375">import</span><span style="color:#BD976A"> z</span></code></span>z</span></span><span style="color:#666666">.</span><span style="color:#80A665"><span class="twoslash-hover"><span class="twoslash-popup-container"><code class="twoslash-popup-code"><pre class="shiki vitesse-dark" style="background-color:#121212;color:#dbd7caee" tabindex="0"><code><span class="line"><span style="color:#80A665">object</span><span style="color:#666666">&#x3C;&#123;</span></span>
<span class="line"><span style="color:#BD976A">    name</span><span style="color:#666666">: </span><span style="color:#5DA994">z</span><span style="color:#666666">.</span><span style="color:#5DA994">ZodString</span><span style="color:#666666">;</span></span>
<span class="line"><span style="color:#BD976A">    age</span><span style="color:#666666">: </span><span style="color:#5DA994">z</span><span style="color:#666666">.</span><span style="color:#5DA994">ZodNumber</span><span style="color:#666666">;</span></span>
<span class="line"><span style="color:#666666">&#125;>(</span><span style="color:#BD976A">shape</span><span style="color:#666666">: &#123;</span></span>
<span class="line"><span style="color:#BD976A">    name</span><span style="color:#666666">: </span><span style="color:#5DA994">z</span><span style="color:#666666">.</span><span style="color:#5DA994">ZodString</span><span style="color:#666666">;</span></span>
<span class="line"><span style="color:#BD976A">    age</span><span style="color:#666666">: </span><span style="color:#5DA994">z</span><span style="color:#666666">.</span><span style="color:#5DA994">ZodNumber</span><span style="color:#666666">;</span></span>
<span class="line"><span style="color:#666666">&#125;,</span><span style="color:#BD976A"> params</span><span style="color:#CB7676">?</span><span style="color:#666666">: </span><span style="color:#5DA994">z</span><span style="color:#666666">.</span><span style="color:#5DA994">RawCreateParams</span><span style="color:#666666">):</span><span style="color:#5DA994"> z</span><span style="color:#666666">.</span><span style="color:#5DA994">ZodObject</span><span style="color:#666666">&#x3C;&#123;</span></span>
<span class="line"><span style="color:#BD976A">    name</span><span style="color:#666666">: </span><span style="color:#5DA994">z</span><span style="color:#666666">.</span><span style="color:#5DA994">ZodString</span><span style="color:#666666">;</span></span>
<span class="line"><span style="color:#BD976A">    age</span><span style="color:#666666">: </span><span style="color:#5DA994">z</span><span style="color:#666666">.</span><span style="color:#5DA994">ZodNumber</span><span style="color:#666666">;</span></span>
<span class="line"><span style="color:#666666">&#125;,</span><span style="color:#C98A7D99"> "</span><span style="color:#C98A7D">strip</span><span style="color:#C98A7D99">"</span><span style="color:#666666">,</span><span style="color:#5DA994"> z</span><span style="color:#666666">.</span><span style="color:#5DA994">ZodTypeAny</span><span style="color:#666666">,</span><span style="color:#666666"> &#123;</span></span>
<span class="line"><span style="color:#666666">    ...;</span></span>
<span class="line"><span style="color:#666666">&#125;,</span><span style="color:#666666"> &#123;</span></span>
<span class="line"><span style="color:#666666">    ...;</span></span>
<span class="line"><span style="color:#666666">&#125;></span></span>
<span class="line"><span style="color:#4D9375">export</span><span style="color:#BD976A"> object</span></span></code></pre></code></span>object</span></span><span style="color:#666666">(&#123;</span></span>
<span class="line"><span style="color:#B8A965">	</span><span style="color:#B8A965"><span class="twoslash-hover"><span class="twoslash-popup-container"><code class="twoslash-popup-code"><span style="color:#80A665">name</span><span style="color:#666666">:</span><span style="color:#BD976A"> z</span><span style="color:#666666">.</span><span style="color:#BD976A">ZodString</span></code></span>name</span></span><span style="color:#666666">: </span><span style="color:#BD976A"><span class="twoslash-hover"><span class="twoslash-popup-container"><code class="twoslash-popup-code"><span style="color:#4D9375">import</span><span style="color:#BD976A"> z</span></code></span>z</span></span><span style="color:#666666">.</span><span style="color:#80A665"><span class="twoslash-hover"><span class="twoslash-popup-container"><code class="twoslash-popup-code"><pre class="shiki vitesse-dark" style="background-color:#121212;color:#dbd7caee" tabindex="0"><code><span class="line"><span style="color:#CB7676">function</span><span style="color:#80A665"> string</span><span style="color:#666666">(</span><span style="color:#80A665">params</span><span style="color:#CB7676">?</span><span style="color:#666666">: (&#123;</span></span>
<span class="line"><span style="color:#BD976A">    errorMap</span><span style="color:#CB7676">?</span><span style="color:#666666">: </span><span style="color:#5DA994">z</span><span style="color:#666666">.</span><span style="color:#5DA994">ZodErrorMap</span><span style="color:#666666"> | </span><span style="color:#CB7676">undefined</span><span style="color:#666666">;</span></span>
<span class="line"><span style="color:#BD976A">    invalid_type_error</span><span style="color:#CB7676">?</span><span style="color:#666666">: </span><span style="color:#5DA994">string</span><span style="color:#666666"> | </span><span style="color:#CB7676">undefined</span><span style="color:#666666">;</span></span>
<span class="line"><span style="color:#BD976A">    required_error</span><span style="color:#CB7676">?</span><span style="color:#666666">: </span><span style="color:#5DA994">string</span><span style="color:#666666"> | </span><span style="color:#CB7676">undefined</span><span style="color:#666666">;</span></span>
<span class="line"><span style="color:#BD976A">    message</span><span style="color:#CB7676">?</span><span style="color:#666666">: </span><span style="color:#5DA994">string</span><span style="color:#666666"> | </span><span style="color:#CB7676">undefined</span><span style="color:#666666">;</span></span>
<span class="line"><span style="color:#BD976A">    description</span><span style="color:#CB7676">?</span><span style="color:#666666">: </span><span style="color:#5DA994">string</span><span style="color:#666666"> | </span><span style="color:#CB7676">undefined</span><span style="color:#666666">;</span></span>
<span class="line"><span style="color:#666666">&#125; &#x26; &#123;</span></span>
<span class="line"><span style="color:#666666">    ...;</span></span>
<span class="line"><span style="color:#666666">&#125;) | </span><span style="color:#CB7676">undefined</span><span style="color:#666666">):</span><span style="color:#5DA994"> z</span><span style="color:#666666">.</span><span style="color:#5DA994">ZodString</span></span>
<span class="line"><span style="color:#4D9375">export</span><span style="color:#BD976A"> string</span></span></code></pre></code></span>string</span></span><span style="color:#666666">(),</span></span>
<span class="line"><span style="color:#B8A965">	</span><span style="color:#B8A965"><span class="twoslash-hover"><span class="twoslash-popup-container"><code class="twoslash-popup-code"><span style="color:#80A665">age</span><span style="color:#666666">:</span><span style="color:#BD976A"> z</span><span style="color:#666666">.</span><span style="color:#BD976A">ZodNumber</span></code></span>age</span></span><span style="color:#666666">: </span><span style="color:#BD976A"><span class="twoslash-hover"><span class="twoslash-popup-container"><code class="twoslash-popup-code"><span style="color:#4D9375">import</span><span style="color:#BD976A"> z</span></code></span>z</span></span><span style="color:#666666">.</span><span style="color:#80A665"><span class="twoslash-hover"><span class="twoslash-popup-container"><code class="twoslash-popup-code"><pre class="shiki vitesse-dark" style="background-color:#121212;color:#dbd7caee" tabindex="0"><code><span class="line"><span style="color:#CB7676">function</span><span style="color:#80A665"> number</span><span style="color:#666666">(</span><span style="color:#80A665">params</span><span style="color:#CB7676">?</span><span style="color:#666666">: (&#123;</span></span>
<span class="line"><span style="color:#BD976A">    errorMap</span><span style="color:#CB7676">?</span><span style="color:#666666">: </span><span style="color:#5DA994">z</span><span style="color:#666666">.</span><span style="color:#5DA994">ZodErrorMap</span><span style="color:#666666"> | </span><span style="color:#CB7676">undefined</span><span style="color:#666666">;</span></span>
<span class="line"><span style="color:#BD976A">    invalid_type_error</span><span style="color:#CB7676">?</span><span style="color:#666666">: </span><span style="color:#5DA994">string</span><span style="color:#666666"> | </span><span style="color:#CB7676">undefined</span><span style="color:#666666">;</span></span>
<span class="line"><span style="color:#BD976A">    required_error</span><span style="color:#CB7676">?</span><span style="color:#666666">: </span><span style="color:#5DA994">string</span><span style="color:#666666"> | </span><span style="color:#CB7676">undefined</span><span style="color:#666666">;</span></span>
<span class="line"><span style="color:#BD976A">    message</span><span style="color:#CB7676">?</span><span style="color:#666666">: </span><span style="color:#5DA994">string</span><span style="color:#666666"> | </span><span style="color:#CB7676">undefined</span><span style="color:#666666">;</span></span>
<span class="line"><span style="color:#BD976A">    description</span><span style="color:#CB7676">?</span><span style="color:#666666">: </span><span style="color:#5DA994">string</span><span style="color:#666666"> | </span><span style="color:#CB7676">undefined</span><span style="color:#666666">;</span></span>
<span class="line"><span style="color:#666666">&#125; &#x26; &#123;</span></span>
<span class="line"><span style="color:#666666">    ...;</span></span>
<span class="line"><span style="color:#666666">&#125;) | </span><span style="color:#CB7676">undefined</span><span style="color:#666666">):</span><span style="color:#5DA994"> z</span><span style="color:#666666">.</span><span style="color:#5DA994">ZodNumber</span></span>
<span class="line"><span style="color:#4D9375">export</span><span style="color:#BD976A"> number</span></span></code></pre></code></span>number</span></span><span style="color:#666666">()</span></span>
<span class="line"><span style="color:#666666">&#125;);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#CB7676">const </span><span style="color:#BD976A"><span class="twoslash-hover"><span class="twoslash-popup-container"><code class="twoslash-popup-code"><pre class="shiki vitesse-dark" style="background-color:#121212;color:#dbd7caee" tabindex="0"><code><span class="line"><span style="color:#CB7676">const </span><span style="color:#BD976A">mockData</span><span style="color:#666666">: &#123;</span></span>
<span class="line"><span style="color:#BD976A">    name</span><span style="color:#666666">: </span><span style="color:#5DA994">string</span><span style="color:#666666">;</span></span>
<span class="line"><span style="color:#BD976A">    age</span><span style="color:#666666">: </span><span style="color:#5DA994">number</span><span style="color:#666666">;</span></span>
<span class="line"><span style="color:#666666">&#125;</span></span></code></pre></code></span>mockData</span></span><span style="color:#666666"> =</span><span style="color:#80A665"> </span><span style="color:#80A665"><span class="twoslash-hover"><span class="twoslash-popup-container"><code class="twoslash-popup-code"><pre class="shiki vitesse-dark" style="background-color:#121212;color:#dbd7caee" tabindex="0"><code><span class="line"><span style="color:#BD976A">zocker</span><span style="color:#666666">&#x3C;</span><span style="color:#BD976A">z</span><span style="color:#666666">.</span><span style="color:#80A665">ZodObject</span><span style="color:#666666">&#x3C;&#123;</span></span>
<span class="line"><span style="color:#BD976A">    name</span><span style="color:#666666">: </span><span style="color:#5DA994">z</span><span style="color:#666666">.</span><span style="color:#5DA994">ZodString</span><span style="color:#666666">;</span></span>
<span class="line"><span style="color:#BD976A">    age</span><span style="color:#666666">: </span><span style="color:#5DA994">z</span><span style="color:#666666">.</span><span style="color:#5DA994">ZodNumber</span><span style="color:#666666">;</span></span>
<span class="line"><span style="color:#666666">&#125;,</span><span style="color:#C98A7D99"> "</span><span style="color:#C98A7D">strip</span><span style="color:#C98A7D99">"</span><span style="color:#666666">,</span><span style="color:#5DA994"> z</span><span style="color:#666666">.</span><span style="color:#5DA994">ZodTypeAny</span><span style="color:#666666">,</span><span style="color:#666666"> &#123;</span></span>
<span class="line"><span style="color:#BD976A">    name</span><span style="color:#666666">: </span><span style="color:#5DA994">string</span><span style="color:#666666">;</span></span>
<span class="line"><span style="color:#BD976A">    age</span><span style="color:#666666">: </span><span style="color:#5DA994">number</span><span style="color:#666666">;</span></span>
<span class="line"><span style="color:#666666">&#125;,</span><span style="color:#666666"> &#123;</span></span>
<span class="line"><span style="color:#BD976A">    name</span><span style="color:#666666">: </span><span style="color:#5DA994">string</span><span style="color:#666666">;</span></span>
<span class="line"><span style="color:#BD976A">    age</span><span style="color:#666666">: </span><span style="color:#5DA994">number</span><span style="color:#666666">;</span></span>
<span class="line"><span style="color:#666666">&#125;>>(</span><span style="color:#BD976A">schema</span><span style="color:#666666">: </span><span style="color:#5DA994">z</span><span style="color:#666666">.</span><span style="color:#5DA994">ZodObject</span><span style="color:#666666">&#x3C;&#123;</span></span>
<span class="line"><span style="color:#BD976A">    name</span><span style="color:#666666">: </span><span style="color:#5DA994">z</span><span style="color:#666666">.</span><span style="color:#5DA994">ZodString</span><span style="color:#666666">;</span></span>
<span class="line"><span style="color:#BD976A">    age</span><span style="color:#666666">: </span><span style="color:#5DA994">z</span><span style="color:#666666">.</span><span style="color:#5DA994">ZodNumber</span><span style="color:#666666">;</span></span>
<span class="line"><span style="color:#666666">&#125;, </span><span style="color:#C98A7D99">"</span><span style="color:#C98A7D">strip</span><span style="color:#C98A7D99">"</span><span style="color:#666666">, </span><span style="color:#5DA994">z</span><span style="color:#666666">.</span><span style="color:#5DA994">ZodTypeAny</span><span style="color:#666666">, &#123;</span></span>
<span class="line"><span style="color:#666666">    ...;</span></span>
<span class="line"><span style="color:#666666">&#125;, &#123;</span></span>
<span class="line"><span style="color:#666666">    ...;</span></span>
<span class="line"><span style="color:#666666">&#125;>):</span><span style="color:#5DA994"> Zocker</span><span style="color:#666666">&#x3C;</span><span style="color:#DBD7CAEE">...</span><span style="color:#666666">></span></span></code></pre></code></span>zocker</span></span><span style="color:#666666">(</span><span style="color:#BD976A"><span class="twoslash-hover"><span class="twoslash-popup-container"><code class="twoslash-popup-code"><pre class="shiki vitesse-dark" style="background-color:#121212;color:#dbd7caee" tabindex="0"><code><span class="line"><span style="color:#CB7676">const </span><span style="color:#BD976A">user</span><span style="color:#666666">: </span><span style="color:#5DA994">z</span><span style="color:#666666">.</span><span style="color:#5DA994">ZodObject</span><span style="color:#666666">&#x3C;&#123;</span></span>
<span class="line"><span style="color:#BD976A">    name</span><span style="color:#666666">: </span><span style="color:#5DA994">z</span><span style="color:#666666">.</span><span style="color:#5DA994">ZodString</span><span style="color:#666666">;</span></span>
<span class="line"><span style="color:#BD976A">    age</span><span style="color:#666666">: </span><span style="color:#5DA994">z</span><span style="color:#666666">.</span><span style="color:#5DA994">ZodNumber</span><span style="color:#666666">;</span></span>
<span class="line"><span style="color:#666666">&#125;, </span><span style="color:#C98A7D99">"</span><span style="color:#C98A7D">strip</span><span style="color:#C98A7D99">"</span><span style="color:#666666">, </span><span style="color:#5DA994">z</span><span style="color:#666666">.</span><span style="color:#5DA994">ZodTypeAny</span><span style="color:#666666">, &#123;</span></span>
<span class="line"><span style="color:#BD976A">    name</span><span style="color:#666666">: </span><span style="color:#5DA994">string</span><span style="color:#666666">;</span></span>
<span class="line"><span style="color:#BD976A">    age</span><span style="color:#666666">: </span><span style="color:#5DA994">number</span><span style="color:#666666">;</span></span>
<span class="line"><span style="color:#666666">&#125;, &#123;</span></span>
<span class="line"><span style="color:#BD976A">    name</span><span style="color:#666666">: </span><span style="color:#5DA994">string</span><span style="color:#666666">;</span></span>
<span class="line"><span style="color:#BD976A">    age</span><span style="color:#666666">: </span><span style="color:#5DA994">number</span><span style="color:#666666">;</span></span>
<span class="line"><span style="color:#666666">&#125;></span></span></code></pre></code></span>user</span></span><span style="color:#666666">).</span><span style="color:#80A665"><span class="twoslash-hover"><span class="twoslash-popup-container"><code class="twoslash-popup-code"><pre class="shiki vitesse-dark" style="background-color:#121212;color:#dbd7caee" tabindex="0"><code><span class="line"><span style="color:#BD976A">Zocker</span><span style="color:#666666">&#x3C;</span><span style="color:#BD976A">ZodObject</span><span style="color:#666666">&#x3C;&#123;</span><span style="color:#80A665"> name</span><span style="color:#666666">:</span><span style="color:#BD976A"> ZodString</span><span style="color:#666666">;</span><span style="color:#80A665"> age</span><span style="color:#666666">:</span><span style="color:#BD976A"> ZodNumber</span><span style="color:#666666">;</span><span style="color:#666666"> &#125;,</span><span style="color:#C98A7D99"> "</span><span style="color:#C98A7D">strip</span><span style="color:#C98A7D99">"</span><span style="color:#666666">,</span><span style="color:#BD976A"> ZodTypeAny</span><span style="color:#666666">, &#123; </span><span style="color:#B8A965">name</span><span style="color:#666666">: </span><span style="color:#BD976A">string</span><span style="color:#666666">; </span><span style="color:#BD976A">age</span><span style="color:#666666">: </span><span style="color:#BD976A">number</span><span style="color:#666666">; &#125;, &#123; </span><span style="color:#B8A965">name</span><span style="color:#666666">: </span><span style="color:#BD976A">string</span><span style="color:#666666">; </span><span style="color:#BD976A">age</span><span style="color:#666666">: </span><span style="color:#BD976A">number</span><span style="color:#666666">; &#125;</span><span style="color:#CB7676">>></span><span style="color:#666666">.</span><span style="color:#80A665">supply</span><span style="color:#666666">&#x3C;</span><span style="color:#5DA994">z</span><span style="color:#666666">.</span><span style="color:#5DA994">ZodString</span><span style="color:#666666">>(</span><span style="color:#BD976A">schema</span><span style="color:#DBD7CAEE">: </span><span style="color:#BD976A">z</span><span style="color:#666666">.</span><span style="color:#BD976A">ZodString</span><span style="color:#666666">,</span><span style="color:#BD976A"> generator</span><span style="color:#DBD7CAEE">: </span><span style="color:#BD976A">string</span><span style="color:#CB7676"> |</span><span style="color:#BD976A"> Generator</span><span style="color:#666666">&#x3C;</span><span style="color:#BD976A">z</span><span style="color:#666666">.</span><span style="color:#BD976A">ZodString</span><span style="color:#666666">>)</span><span style="color:#DBD7CAEE">: </span><span style="color:#BD976A">Zocker</span><span style="color:#666666">&#x3C;</span><span style="color:#BD976A">z</span><span style="color:#666666">.</span><span style="color:#80A665">ZodObject</span><span style="color:#666666">&#x3C;&#123;</span></span>
<span class="line"><span style="color:#BD976A">    name</span><span style="color:#666666">: </span><span style="color:#5DA994">z</span><span style="color:#666666">.</span><span style="color:#5DA994">ZodString</span><span style="color:#666666">;</span></span>
<span class="line"><span style="color:#BD976A">    age</span><span style="color:#666666">: </span><span style="color:#5DA994">z</span><span style="color:#666666">.</span><span style="color:#5DA994">ZodNumber</span><span style="color:#666666">;</span></span>
<span class="line"><span style="color:#666666">&#125;,</span><span style="color:#C98A7D99"> "</span><span style="color:#C98A7D">strip</span><span style="color:#C98A7D99">"</span><span style="color:#666666">,</span><span style="color:#5DA994"> z</span><span style="color:#666666">.</span><span style="color:#5DA994">ZodTypeAny</span><span style="color:#666666">,</span><span style="color:#666666"> &#123;</span></span>
<span class="line"><span style="color:#666666">    ...;</span></span>
<span class="line"><span style="color:#666666">&#125;,</span><span style="color:#666666"> &#123;</span></span>
<span class="line"><span style="color:#666666">    ...;</span></span>
<span class="line"><span style="color:#666666">&#125;>></span></span></code></pre></code><div class="twoslash-popup-docs">Supply your own value / function for generating values for a given schema
It will be used whenever the given schema matches an encountered schema by referebce</div><div class="twoslash-popup-docs twoslash-popup-docs-tags"><span class="twoslash-popup-docs-tag"><span class="twoslash-popup-docs-tag-name">@param</span><span class="twoslash-popup-docs-tag-value">schema - The schema for which this value will be used</span></span><span class="twoslash-popup-docs-tag"><span class="twoslash-popup-docs-tag-name">@param</span><span class="twoslash-popup-docs-tag-value">generator - A value, or a function that generates a value that matches the schema</span></span></div></span>supply</span></span><span style="color:#666666">(</span><span style="color:#BD976A"><span class="twoslash-hover"><span class="twoslash-popup-container"><code class="twoslash-popup-code"><pre class="shiki vitesse-dark" style="background-color:#121212;color:#dbd7caee" tabindex="0"><code><span class="line"><span style="color:#CB7676">const </span><span style="color:#BD976A">user</span><span style="color:#666666">: </span><span style="color:#5DA994">z</span><span style="color:#666666">.</span><span style="color:#5DA994">ZodObject</span><span style="color:#666666">&#x3C;&#123;</span></span>
<span class="line"><span style="color:#BD976A">    name</span><span style="color:#666666">: </span><span style="color:#5DA994">z</span><span style="color:#666666">.</span><span style="color:#5DA994">ZodString</span><span style="color:#666666">;</span></span>
<span class="line"><span style="color:#BD976A">    age</span><span style="color:#666666">: </span><span style="color:#5DA994">z</span><span style="color:#666666">.</span><span style="color:#5DA994">ZodNumber</span><span style="color:#666666">;</span></span>
<span class="line"><span style="color:#666666">&#125;, </span><span style="color:#C98A7D99">"</span><span style="color:#C98A7D">strip</span><span style="color:#C98A7D99">"</span><span style="color:#666666">, </span><span style="color:#5DA994">z</span><span style="color:#666666">.</span><span style="color:#5DA994">ZodTypeAny</span><span style="color:#666666">, &#123;</span></span>
<span class="line"><span style="color:#BD976A">    name</span><span style="color:#666666">: </span><span style="color:#5DA994">string</span><span style="color:#666666">;</span></span>
<span class="line"><span style="color:#BD976A">    age</span><span style="color:#666666">: </span><span style="color:#5DA994">number</span><span style="color:#666666">;</span></span>
<span class="line"><span style="color:#666666">&#125;, &#123;</span></span>
<span class="line"><span style="color:#BD976A">    name</span><span style="color:#666666">: </span><span style="color:#5DA994">string</span><span style="color:#666666">;</span></span>
<span class="line"><span style="color:#BD976A">    age</span><span style="color:#666666">: </span><span style="color:#5DA994">number</span><span style="color:#666666">;</span></span>
<span class="line"><span style="color:#666666">&#125;></span></span></code></pre></code></span>user</span></span><span style="color:#666666">.</span><span style="color:#BD976A"><span class="twoslash-hover"><span class="twoslash-popup-container"><code class="twoslash-popup-code"><pre class="shiki vitesse-dark" style="background-color:#121212;color:#dbd7caee" tabindex="0"><code><span class="line"><span style="color:#BD976A">ZodObject</span><span style="color:#666666">&#x3C;&#123;</span><span style="color:#80A665"> name</span><span style="color:#666666">:</span><span style="color:#BD976A"> ZodString</span><span style="color:#666666">;</span><span style="color:#80A665"> age</span><span style="color:#666666">:</span><span style="color:#BD976A"> ZodNumber</span><span style="color:#666666">;</span><span style="color:#666666"> &#125;,</span><span style="color:#C98A7D99"> "</span><span style="color:#C98A7D">strip</span><span style="color:#C98A7D99">"</span><span style="color:#666666">,</span><span style="color:#BD976A"> ZodTypeAny</span><span style="color:#666666">, &#123; </span><span style="color:#B8A965">name</span><span style="color:#666666">: </span><span style="color:#BD976A">string</span><span style="color:#666666">; </span><span style="color:#BD976A">age</span><span style="color:#666666">: </span><span style="color:#BD976A">number</span><span style="color:#666666">; &#125;, &#123; </span><span style="color:#B8A965">name</span><span style="color:#666666">: </span><span style="color:#BD976A">string</span><span style="color:#666666">; </span><span style="color:#BD976A">age</span><span style="color:#666666">: </span><span style="color:#BD976A">number</span><span style="color:#666666">; &#125;>.</span><span style="color:#BD976A">shape</span><span style="color:#DBD7CAEE">:</span><span style="color:#666666"> &#123;</span></span>
<span class="line"><span style="color:#B8A965">    name</span><span style="color:#666666">: </span><span style="color:#BD976A">z</span><span style="color:#666666">.</span><span style="color:#BD976A">ZodString</span><span style="color:#666666">;</span></span>
<span class="line"><span style="color:#BD976A">    age</span><span style="color:#666666">: </span><span style="color:#BD976A">z</span><span style="color:#666666">.</span><span style="color:#BD976A">ZodNumber</span><span style="color:#666666">;</span></span>
<span class="line"><span style="color:#666666">&#125;</span></span></code></pre></code></span>shape</span></span><span style="color:#666666">.</span><span style="color:#BD976A"><span class="twoslash-hover"><span class="twoslash-popup-container"><code class="twoslash-popup-code"><span style="color:#80A665">name</span><span style="color:#666666">:</span><span style="color:#BD976A"> z</span><span style="color:#666666">.</span><span style="color:#BD976A">ZodString</span></code></span>name</span></span><span style="color:#666666">,</span><span style="color:#C98A7D99"> '</span><span style="color:#C98A7D">Jimmy Smith</span><span style="color:#C98A7D99">'</span><span style="color:#666666">).</span><span style="color:#80A665"><span class="twoslash-hover"><span class="twoslash-popup-container"><code class="twoslash-popup-code"><pre class="shiki vitesse-dark" style="background-color:#121212;color:#dbd7caee" tabindex="0"><code><span class="line"><span style="color:#BD976A">Zocker</span><span style="color:#666666">&#x3C;</span><span style="color:#BD976A">ZodObject</span><span style="color:#666666">&#x3C;&#123;</span><span style="color:#80A665"> name</span><span style="color:#666666">:</span><span style="color:#BD976A"> ZodString</span><span style="color:#666666">;</span><span style="color:#80A665"> age</span><span style="color:#666666">:</span><span style="color:#BD976A"> ZodNumber</span><span style="color:#666666">;</span><span style="color:#666666"> &#125;,</span><span style="color:#C98A7D99"> "</span><span style="color:#C98A7D">strip</span><span style="color:#C98A7D99">"</span><span style="color:#666666">,</span><span style="color:#BD976A"> ZodTypeAny</span><span style="color:#666666">, &#123; </span><span style="color:#B8A965">name</span><span style="color:#666666">: </span><span style="color:#BD976A">string</span><span style="color:#666666">; </span><span style="color:#BD976A">age</span><span style="color:#666666">: </span><span style="color:#BD976A">number</span><span style="color:#666666">; &#125;, &#123; </span><span style="color:#B8A965">name</span><span style="color:#666666">: </span><span style="color:#BD976A">string</span><span style="color:#666666">; </span><span style="color:#BD976A">age</span><span style="color:#666666">: </span><span style="color:#BD976A">number</span><span style="color:#666666">; &#125;</span><span style="color:#CB7676">>></span><span style="color:#666666">.</span><span style="color:#80A665">generate</span><span style="color:#666666">()</span><span style="color:#DBD7CAEE">:</span><span style="color:#666666"> &#123;</span></span>
<span class="line"><span style="color:#B8A965">    name</span><span style="color:#666666">: </span><span style="color:#BD976A">string</span><span style="color:#666666">;</span></span>
<span class="line"><span style="color:#BD976A">    age</span><span style="color:#666666">: </span><span style="color:#BD976A">number</span><span style="color:#666666">;</span></span>
<span class="line"><span style="color:#666666">&#125;</span></span></code></pre></code></span>generate</span></span><span style="color:#666666">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#758575DD">// &#123; name: "Jimmy Smith", age: 42 &#125; - The name is now fixed</span></span></code></pre>`;
  let t42;
  let h32;
  let textContent_17 = `<a href="#limitations">Limitations</a>`;
  let t44;
  let p12;
  let textContent_18 = "There are a few limitations though. Zocker will never be able to generate data for preprocess or\nrefinement functions. At least not out of the box. We can however supply our own values for those\n(sub)schemas, and side-step the issue.";
  let t46;
  let h33;
  let textContent_19 = `<a href="#repeatability">Repeatability</a>`;
  let t48;
  let p13;
  let textContent_20 = `By default, zocker will generate a new random value for each schema. This is great for most cases,
but can lead to flaky tests if you’re not careful. If you want to generate the same data every
time, you can set a seed using the <code>setSeed</code> method. This will generate the same data every time.`;
  let t52;
  let html_tag_4;
  let raw4_value = `<pre class="shiki vitesse-dark twoslash lsp" style="background-color:#121212;color:#dbd7caee" tabindex="0"><code><span class="line"><span style="color:#CB7676">const </span><span style="color:#BD976A"><span class="twoslash-hover"><span class="twoslash-popup-container"><code class="twoslash-popup-code"><span style="color:#CB7676">const </span><span style="color:#BD976A">mockData</span><span style="color:#666666">: </span><span style="color:#5DA994">any</span></code></span>mockData</span></span><span style="color:#666666"> =</span><span style="color:#80A665"> </span><span style="color:#80A665"><span class="twoslash-hover"><span class="twoslash-popup-container"><code class="twoslash-popup-code"><span style="color:#80A665">zocker</span><span style="color:#666666">&#x3C;</span><span style="color:#5DA994">ZodAny</span><span style="color:#666666">>(</span><span style="color:#BD976A">schema</span><span style="color:#DBD7CAEE">: </span><span style="color:#BD976A">ZodAny</span><span style="color:#666666">)</span><span style="color:#DBD7CAEE">: </span><span style="color:#BD976A">Zocker</span><span style="color:#666666">&#x3C;</span><span style="color:#BD976A">ZodAny</span><span style="color:#666666">></span></code></span>zocker</span></span><span style="color:#666666">(</span><span style="color:#BD976A"><span class="twoslash-hover"><span class="twoslash-popup-container"><code class="twoslash-popup-code"><span style="color:#CB7676">const </span><span style="color:#BD976A">schema</span><span style="color:#666666">: </span><span style="color:#5DA994">ZodAny</span></code></span>schema</span></span><span style="color:#666666">).</span><span style="color:#80A665"><span class="twoslash-hover"><span class="twoslash-popup-container"><code class="twoslash-popup-code"><span style="color:#BD976A">Zocker</span><span style="color:#666666">&#x3C;</span><span style="color:#BD976A">ZodAny</span><span style="color:#666666">>.</span><span style="color:#80A665">setSeed</span><span style="color:#666666">(</span><span style="color:#BD976A">seed</span><span style="color:#DBD7CAEE">: </span><span style="color:#BD976A">number</span><span style="color:#666666">)</span><span style="color:#DBD7CAEE">: </span><span style="color:#BD976A">Zocker</span><span style="color:#666666">&#x3C;</span><span style="color:#BD976A">ZodAny</span><span style="color:#666666">></span></code></span>setSeed</span></span><span style="color:#666666">(</span><span style="color:#4C9A91">42</span><span style="color:#666666">).</span><span style="color:#80A665"><span class="twoslash-hover"><span class="twoslash-popup-container"><code class="twoslash-popup-code"><span style="color:#BD976A">Zocker</span><span style="color:#666666">&#x3C;</span><span style="color:#BD976A">ZodAny</span><span style="color:#666666">>.</span><span style="color:#80A665">generate</span><span style="color:#666666">()</span><span style="color:#DBD7CAEE">: </span><span style="color:#BD976A">any</span></code></span>generate</span></span><span style="color:#666666">();</span></span></code></pre>`;
  let t53;
  let h22;
  let textContent_21 = `<a href="#conclusion">Conclusion</a>`;
  let t55;
  let p14;
  let textContent_22 = `I hope this article has given you a taste of what zocker can do. If you want to learn more, check out
the <a href="https://zocker.sigrist.dev" rel="noopener noreferrer" target="_blank">documentation</a>. In my own use, zocker has
been a huge time-saver. I hope it can help you too!`;
  return {
    c() {
      h1 = element("h1");
      h1.innerHTML = textContent;
      t1 = space();
      p0 = element("p");
      p0.textContent = textContent_1;
      t3 = space();
      h20 = element("h2");
      h20.innerHTML = textContent_2;
      t5 = space();
      p1 = element("p");
      p1.textContent = textContent_3;
      t7 = space();
      p2 = element("p");
      p2.innerHTML = textContent_4;
      t11 = space();
      p3 = element("p");
      p3.textContent = textContent_5;
      t13 = space();
      h21 = element("h2");
      h21.innerHTML = textContent_6;
      t15 = space();
      p4 = element("p");
      p4.innerHTML = textContent_7;
      t18 = space();
      h30 = element("h3");
      h30.innerHTML = textContent_8;
      t20 = space();
      p5 = element("p");
      p5.textContent = textContent_9;
      t22 = space();
      html_tag = new HtmlTagHydration(false);
      t23 = space();
      p6 = element("p");
      p6.innerHTML = textContent_10;
      t27 = space();
      html_tag_1 = new HtmlTagHydration(false);
      t28 = space();
      p7 = element("p");
      p7.textContent = textContent_11;
      t30 = space();
      p8 = element("p");
      p8.textContent = textContent_12;
      t32 = space();
      html_tag_2 = new HtmlTagHydration(false);
      t33 = space();
      h31 = element("h3");
      h31.innerHTML = textContent_13;
      t35 = space();
      p9 = element("p");
      p9.textContent = textContent_14;
      t37 = space();
      p10 = element("p");
      p10.textContent = textContent_15;
      t39 = space();
      p11 = element("p");
      p11.textContent = textContent_16;
      t41 = space();
      html_tag_3 = new HtmlTagHydration(false);
      t42 = space();
      h32 = element("h3");
      h32.innerHTML = textContent_17;
      t44 = space();
      p12 = element("p");
      p12.textContent = textContent_18;
      t46 = space();
      h33 = element("h3");
      h33.innerHTML = textContent_19;
      t48 = space();
      p13 = element("p");
      p13.innerHTML = textContent_20;
      t52 = space();
      html_tag_4 = new HtmlTagHydration(false);
      t53 = space();
      h22 = element("h2");
      h22.innerHTML = textContent_21;
      t55 = space();
      p14 = element("p");
      p14.innerHTML = textContent_22;
      this.h();
    },
    l(nodes) {
      h1 = claim_element(nodes, "H1", { id: true, ["data-svelte-h"]: true });
      if (get_svelte_dataset(h1) !== "svelte-6rd6lw")
        h1.innerHTML = textContent;
      t1 = claim_space(nodes);
      p0 = claim_element(nodes, "P", { ["data-svelte-h"]: true });
      if (get_svelte_dataset(p0) !== "svelte-xaqg6a")
        p0.textContent = textContent_1;
      t3 = claim_space(nodes);
      h20 = claim_element(nodes, "H2", { id: true, ["data-svelte-h"]: true });
      if (get_svelte_dataset(h20) !== "svelte-12hcv5e")
        h20.innerHTML = textContent_2;
      t5 = claim_space(nodes);
      p1 = claim_element(nodes, "P", { ["data-svelte-h"]: true });
      if (get_svelte_dataset(p1) !== "svelte-ds87us")
        p1.textContent = textContent_3;
      t7 = claim_space(nodes);
      p2 = claim_element(nodes, "P", { ["data-svelte-h"]: true });
      if (get_svelte_dataset(p2) !== "svelte-e7jizo")
        p2.innerHTML = textContent_4;
      t11 = claim_space(nodes);
      p3 = claim_element(nodes, "P", { ["data-svelte-h"]: true });
      if (get_svelte_dataset(p3) !== "svelte-185h9dq")
        p3.textContent = textContent_5;
      t13 = claim_space(nodes);
      h21 = claim_element(nodes, "H2", { id: true, ["data-svelte-h"]: true });
      if (get_svelte_dataset(h21) !== "svelte-19r7qfc")
        h21.innerHTML = textContent_6;
      t15 = claim_space(nodes);
      p4 = claim_element(nodes, "P", { ["data-svelte-h"]: true });
      if (get_svelte_dataset(p4) !== "svelte-1675m96")
        p4.innerHTML = textContent_7;
      t18 = claim_space(nodes);
      h30 = claim_element(nodes, "H3", { id: true, ["data-svelte-h"]: true });
      if (get_svelte_dataset(h30) !== "svelte-1qdh62n")
        h30.innerHTML = textContent_8;
      t20 = claim_space(nodes);
      p5 = claim_element(nodes, "P", { ["data-svelte-h"]: true });
      if (get_svelte_dataset(p5) !== "svelte-x0pe8q")
        p5.textContent = textContent_9;
      t22 = claim_space(nodes);
      html_tag = claim_html_tag(nodes, false);
      t23 = claim_space(nodes);
      p6 = claim_element(nodes, "P", { ["data-svelte-h"]: true });
      if (get_svelte_dataset(p6) !== "svelte-1kxxt3y")
        p6.innerHTML = textContent_10;
      t27 = claim_space(nodes);
      html_tag_1 = claim_html_tag(nodes, false);
      t28 = claim_space(nodes);
      p7 = claim_element(nodes, "P", { ["data-svelte-h"]: true });
      if (get_svelte_dataset(p7) !== "svelte-1t97pvt")
        p7.textContent = textContent_11;
      t30 = claim_space(nodes);
      p8 = claim_element(nodes, "P", { ["data-svelte-h"]: true });
      if (get_svelte_dataset(p8) !== "svelte-zuacy1")
        p8.textContent = textContent_12;
      t32 = claim_space(nodes);
      html_tag_2 = claim_html_tag(nodes, false);
      t33 = claim_space(nodes);
      h31 = claim_element(nodes, "H3", { id: true, ["data-svelte-h"]: true });
      if (get_svelte_dataset(h31) !== "svelte-lnzl37")
        h31.innerHTML = textContent_13;
      t35 = claim_space(nodes);
      p9 = claim_element(nodes, "P", { ["data-svelte-h"]: true });
      if (get_svelte_dataset(p9) !== "svelte-zmnaun")
        p9.textContent = textContent_14;
      t37 = claim_space(nodes);
      p10 = claim_element(nodes, "P", { ["data-svelte-h"]: true });
      if (get_svelte_dataset(p10) !== "svelte-106zx7x")
        p10.textContent = textContent_15;
      t39 = claim_space(nodes);
      p11 = claim_element(nodes, "P", { ["data-svelte-h"]: true });
      if (get_svelte_dataset(p11) !== "svelte-vje499")
        p11.textContent = textContent_16;
      t41 = claim_space(nodes);
      html_tag_3 = claim_html_tag(nodes, false);
      t42 = claim_space(nodes);
      h32 = claim_element(nodes, "H3", { id: true, ["data-svelte-h"]: true });
      if (get_svelte_dataset(h32) !== "svelte-lt9ef1")
        h32.innerHTML = textContent_17;
      t44 = claim_space(nodes);
      p12 = claim_element(nodes, "P", { ["data-svelte-h"]: true });
      if (get_svelte_dataset(p12) !== "svelte-jajpvn")
        p12.textContent = textContent_18;
      t46 = claim_space(nodes);
      h33 = claim_element(nodes, "H3", { id: true, ["data-svelte-h"]: true });
      if (get_svelte_dataset(h33) !== "svelte-6ps6eb")
        h33.innerHTML = textContent_19;
      t48 = claim_space(nodes);
      p13 = claim_element(nodes, "P", { ["data-svelte-h"]: true });
      if (get_svelte_dataset(p13) !== "svelte-13lyt9w")
        p13.innerHTML = textContent_20;
      t52 = claim_space(nodes);
      html_tag_4 = claim_html_tag(nodes, false);
      t53 = claim_space(nodes);
      h22 = claim_element(nodes, "H2", { id: true, ["data-svelte-h"]: true });
      if (get_svelte_dataset(h22) !== "svelte-kmpttn")
        h22.innerHTML = textContent_21;
      t55 = claim_space(nodes);
      p14 = claim_element(nodes, "P", { ["data-svelte-h"]: true });
      if (get_svelte_dataset(p14) !== "svelte-14m8bhx")
        p14.innerHTML = textContent_22;
      this.h();
    },
    h() {
      attr(h1, "id", "never-write-mock-data-again-with-zocker");
      attr(h20, "id", "writing-mock-data-is-the-worst");
      attr(h21, "id", "enter-zocker");
      attr(h30, "id", "getting-started");
      html_tag.a = t23;
      html_tag_1.a = t28;
      html_tag_2.a = t33;
      attr(h31, "id", "supplying-values");
      html_tag_3.a = t42;
      attr(h32, "id", "limitations");
      attr(h33, "id", "repeatability");
      html_tag_4.a = t53;
      attr(h22, "id", "conclusion");
    },
    m(target, anchor) {
      insert_hydration(target, h1, anchor);
      insert_hydration(target, t1, anchor);
      insert_hydration(target, p0, anchor);
      insert_hydration(target, t3, anchor);
      insert_hydration(target, h20, anchor);
      insert_hydration(target, t5, anchor);
      insert_hydration(target, p1, anchor);
      insert_hydration(target, t7, anchor);
      insert_hydration(target, p2, anchor);
      insert_hydration(target, t11, anchor);
      insert_hydration(target, p3, anchor);
      insert_hydration(target, t13, anchor);
      insert_hydration(target, h21, anchor);
      insert_hydration(target, t15, anchor);
      insert_hydration(target, p4, anchor);
      insert_hydration(target, t18, anchor);
      insert_hydration(target, h30, anchor);
      insert_hydration(target, t20, anchor);
      insert_hydration(target, p5, anchor);
      insert_hydration(target, t22, anchor);
      html_tag.m(raw0_value, target, anchor);
      insert_hydration(target, t23, anchor);
      insert_hydration(target, p6, anchor);
      insert_hydration(target, t27, anchor);
      html_tag_1.m(raw1_value, target, anchor);
      insert_hydration(target, t28, anchor);
      insert_hydration(target, p7, anchor);
      insert_hydration(target, t30, anchor);
      insert_hydration(target, p8, anchor);
      insert_hydration(target, t32, anchor);
      html_tag_2.m(raw2_value, target, anchor);
      insert_hydration(target, t33, anchor);
      insert_hydration(target, h31, anchor);
      insert_hydration(target, t35, anchor);
      insert_hydration(target, p9, anchor);
      insert_hydration(target, t37, anchor);
      insert_hydration(target, p10, anchor);
      insert_hydration(target, t39, anchor);
      insert_hydration(target, p11, anchor);
      insert_hydration(target, t41, anchor);
      html_tag_3.m(raw3_value, target, anchor);
      insert_hydration(target, t42, anchor);
      insert_hydration(target, h32, anchor);
      insert_hydration(target, t44, anchor);
      insert_hydration(target, p12, anchor);
      insert_hydration(target, t46, anchor);
      insert_hydration(target, h33, anchor);
      insert_hydration(target, t48, anchor);
      insert_hydration(target, p13, anchor);
      insert_hydration(target, t52, anchor);
      html_tag_4.m(raw4_value, target, anchor);
      insert_hydration(target, t53, anchor);
      insert_hydration(target, h22, anchor);
      insert_hydration(target, t55, anchor);
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
        detach(t3);
        detach(h20);
        detach(t5);
        detach(p1);
        detach(t7);
        detach(p2);
        detach(t11);
        detach(p3);
        detach(t13);
        detach(h21);
        detach(t15);
        detach(p4);
        detach(t18);
        detach(h30);
        detach(t20);
        detach(p5);
        detach(t22);
        html_tag.d();
        detach(t23);
        detach(p6);
        detach(t27);
        html_tag_1.d();
        detach(t28);
        detach(p7);
        detach(t30);
        detach(p8);
        detach(t32);
        html_tag_2.d();
        detach(t33);
        detach(h31);
        detach(t35);
        detach(p9);
        detach(t37);
        detach(p10);
        detach(t39);
        detach(p11);
        detach(t41);
        html_tag_3.d();
        detach(t42);
        detach(h32);
        detach(t44);
        detach(p12);
        detach(t46);
        detach(h33);
        detach(t48);
        detach(p13);
        detach(t52);
        html_tag_4.d();
        detach(t53);
        detach(h22);
        detach(t55);
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
