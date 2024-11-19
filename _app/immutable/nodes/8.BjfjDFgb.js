import { s as safe_not_equal, n as noop } from "../chunks/scheduler.DwkGEAYb.js";
import { S as SvelteComponent, i as init, e as element, s as space, H as HtmlTagHydration, n as empty, c as claim_element, k as get_svelte_dataset, f as claim_space, l as claim_html_tag, m as attr, g as insert_hydration, d as detach } from "../chunks/index.BoYP9eQs.js";
function create_fragment(ctx) {
  let h1;
  let textContent = `<a href="#declarative-exception-handling">Declarative Exception Handling</a>`;
  let t1;
  let p0;
  let textContent_1 = "In this article we will explore a potential remedy to the nightmare that is error handling in JS.";
  let t3;
  let h20;
  let textContent_2 = `<a href="#the-state-of-error-handling-in-js">The State of Error Handling in JS</a>`;
  let t5;
  let p1;
  let textContent_3 = "If you have a function that might fail, you would probably do something like this.";
  let t7;
  let html_tag;
  let raw0_value = `<pre class="shiki vitesse-dark twoslash lsp" style="background-color:#121212;color:#dbd7caee" tabindex="0"><code><span class="line"><span style="color:#CB7676">let </span><span style="color:#BD976A"><span class="twoslash-hover"><span class="twoslash-popup-container"><code class="twoslash-popup-code"><span style="color:#CB7676">let </span><span style="color:#BD976A">result</span><span style="color:#666666">: </span><span style="color:#5DA994">any</span></code></span>result</span></span><span style="color:#666666">;</span></span>
<span class="line"><span style="color:#4D9375">try</span><span style="color:#666666"> &#123;</span></span>
<span class="line"><span style="color:#CB7676">  const </span><span style="color:#BD976A"><span class="twoslash-hover"><span class="twoslash-popup-container"><code class="twoslash-popup-code"><pre class="shiki vitesse-dark" style="background-color:#121212;color:#dbd7caee" tabindex="0"><code><span class="line"><span style="color:#CB7676">const </span><span style="color:#BD976A">user</span><span style="color:#666666">: &#123;</span></span>
<span class="line"><span style="color:#BD976A">    name</span><span style="color:#666666">: </span><span style="color:#5DA994">string</span><span style="color:#666666">;</span></span>
<span class="line"><span style="color:#666666">&#125;</span></span></code></pre></code></span>user</span></span><span style="color:#666666"> =</span><span style="color:#80A665"> </span><span style="color:#80A665"><span class="twoslash-hover"><span class="twoslash-popup-container"><code class="twoslash-popup-code"><pre class="shiki vitesse-dark" style="background-color:#121212;color:#dbd7caee" tabindex="0"><code><span class="line"><span style="color:#CB7676">const </span><span style="color:#80A665">unsafe</span><span style="color:#666666">: () => &#123;</span></span>
<span class="line"><span style="color:#BD976A">    name</span><span style="color:#666666">: </span><span style="color:#5DA994">string</span><span style="color:#666666">;</span></span>
<span class="line"><span style="color:#666666">&#125;</span></span></code></pre></code></span>unsafe</span></span><span style="color:#666666">();</span></span>
<span class="line"><span style="color:#BD976A">  </span><span style="color:#BD976A"><span class="twoslash-hover"><span class="twoslash-popup-container"><code class="twoslash-popup-code"><span style="color:#CB7676">let </span><span style="color:#BD976A">result</span><span style="color:#666666">: </span><span style="color:#5DA994">any</span></code></span>result</span></span><span style="color:#666666"> =</span><span style="color:#BD976A"> </span><span style="color:#BD976A"><span class="twoslash-hover"><span class="twoslash-popup-container"><code class="twoslash-popup-code"><pre class="shiki vitesse-dark" style="background-color:#121212;color:#dbd7caee" tabindex="0"><code><span class="line"><span style="color:#CB7676">const </span><span style="color:#BD976A">user</span><span style="color:#666666">: &#123;</span></span>
<span class="line"><span style="color:#BD976A">    name</span><span style="color:#666666">: </span><span style="color:#5DA994">string</span><span style="color:#666666">;</span></span>
<span class="line"><span style="color:#666666">&#125;</span></span></code></pre></code></span>user</span></span><span style="color:#666666">.</span><span style="color:#BD976A"><span class="twoslash-hover"><span class="twoslash-popup-container"><code class="twoslash-popup-code"><span style="color:#80A665">name</span><span style="color:#666666">:</span><span style="color:#BD976A"> string</span></code></span>name</span></span><span style="color:#666666">;</span></span>
<span class="line"><span style="color:#666666">&#125;</span><span style="color:#4D9375"> catch</span><span style="color:#666666">(</span><span style="color:#BD976A"><span class="twoslash-hover"><span class="twoslash-popup-container"><code class="twoslash-popup-code"><span style="color:#CB7676">var </span><span style="color:#BD976A">e</span><span style="color:#666666">: </span><span style="color:#5DA994">unknown</span></code></span>e</span></span><span style="color:#666666">)</span><span style="color:#666666"> &#123;</span></span>
<span class="line"><span style="color:#BD976A">  </span><span style="color:#BD976A"><span class="twoslash-hover"><span class="twoslash-popup-container"><code class="twoslash-popup-code"><span style="color:#CB7676">let </span><span style="color:#BD976A">result</span><span style="color:#666666">: </span><span style="color:#5DA994">any</span></code></span>result</span></span><span style="color:#666666"> =</span><span style="color:#CB7676"> null</span><span style="color:#666666">;</span></span>
<span class="line"><span style="color:#666666">&#125;</span></span></code></pre>`;
  let t8;
  let p2;
  let textContent_4 = `This very common implementation has a bug though. It handles all exceptions, not just the ones we expect to happen during normal operation.
If <code>unsafe</code> has a Syntax error in it’s implementation this would silently swallow it. We don’t want that.`;
  let t12;
  let p3;
  let textContent_5 = "A better implementation would be to throw custom error-types for all your expected exceptions\nand test anything that’s thrown against those.";
  let t14;
  let html_tag_1;
  let raw1_value = `<pre class="shiki vitesse-dark twoslash lsp" style="background-color:#121212;color:#dbd7caee" tabindex="0"><code><span class="line"><span style="color:#CB7676">class</span><span style="color:#5DA994"> </span><span style="color:#5DA994"><span class="twoslash-hover"><span class="twoslash-popup-container"><code class="twoslash-popup-code"><span style="color:#CB7676">class</span><span style="color:#5DA994"> CustomException1</span></code></span>CustomException1</span></span><span style="color:#CB7676"> extends</span><span style="color:#80A665"> </span><span style="color:#80A665"><span class="twoslash-hover"><span class="twoslash-popup-container"><code class="twoslash-popup-code"><span style="color:#CB7676">var </span><span style="color:#BD976A">Error</span><span style="color:#666666">: </span><span style="color:#5DA994">ErrorConstructor</span></code></span>Error</span></span><span style="color:#666666"> &#123;&#125;</span></span>
<span class="line"><span style="color:#CB7676">class</span><span style="color:#5DA994"> </span><span style="color:#5DA994"><span class="twoslash-hover"><span class="twoslash-popup-container"><code class="twoslash-popup-code"><span style="color:#CB7676">class</span><span style="color:#5DA994"> CustomException2</span></code></span>CustomException2</span></span><span style="color:#CB7676"> extends</span><span style="color:#80A665"> </span><span style="color:#80A665"><span class="twoslash-hover"><span class="twoslash-popup-container"><code class="twoslash-popup-code"><span style="color:#CB7676">var </span><span style="color:#BD976A">Error</span><span style="color:#666666">: </span><span style="color:#5DA994">ErrorConstructor</span></code></span>Error</span></span><span style="color:#666666"> &#123;&#125;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#CB7676">let </span><span style="color:#BD976A"><span class="twoslash-hover"><span class="twoslash-popup-container"><code class="twoslash-popup-code"><span style="color:#CB7676">let </span><span style="color:#BD976A">result</span><span style="color:#666666">: </span><span style="color:#5DA994">any</span></code></span>result</span></span><span style="color:#666666">;</span></span>
<span class="line"><span style="color:#4D9375">try</span><span style="color:#666666"> &#123;</span></span>
<span class="line"><span style="color:#CB7676">   const </span><span style="color:#BD976A"><span class="twoslash-hover"><span class="twoslash-popup-container"><code class="twoslash-popup-code"><pre class="shiki vitesse-dark" style="background-color:#121212;color:#dbd7caee" tabindex="0"><code><span class="line"><span style="color:#CB7676">const </span><span style="color:#BD976A">user</span><span style="color:#666666">: &#123;</span></span>
<span class="line"><span style="color:#BD976A">    name</span><span style="color:#666666">: </span><span style="color:#5DA994">string</span><span style="color:#666666">;</span></span>
<span class="line"><span style="color:#666666">&#125;</span></span></code></pre></code></span>user</span></span><span style="color:#666666"> =</span><span style="color:#80A665"> </span><span style="color:#80A665"><span class="twoslash-hover"><span class="twoslash-popup-container"><code class="twoslash-popup-code"><pre class="shiki vitesse-dark" style="background-color:#121212;color:#dbd7caee" tabindex="0"><code><span class="line"><span style="color:#CB7676">const </span><span style="color:#80A665">unsafe</span><span style="color:#666666">: () => &#123;</span></span>
<span class="line"><span style="color:#BD976A">    name</span><span style="color:#666666">: </span><span style="color:#5DA994">string</span><span style="color:#666666">;</span></span>
<span class="line"><span style="color:#666666">&#125;</span></span></code></pre></code></span>unsafe</span></span><span style="color:#666666">();</span><span style="color:#758575DD"> //throws CustomException1 &#x26; 2</span></span>
<span class="line"><span style="color:#BD976A">   </span><span style="color:#BD976A"><span class="twoslash-hover"><span class="twoslash-popup-container"><code class="twoslash-popup-code"><span style="color:#CB7676">let </span><span style="color:#BD976A">result</span><span style="color:#666666">: </span><span style="color:#5DA994">any</span></code></span>result</span></span><span style="color:#666666"> =</span><span style="color:#BD976A"> </span><span style="color:#BD976A"><span class="twoslash-hover"><span class="twoslash-popup-container"><code class="twoslash-popup-code"><pre class="shiki vitesse-dark" style="background-color:#121212;color:#dbd7caee" tabindex="0"><code><span class="line"><span style="color:#CB7676">const </span><span style="color:#BD976A">user</span><span style="color:#666666">: &#123;</span></span>
<span class="line"><span style="color:#BD976A">    name</span><span style="color:#666666">: </span><span style="color:#5DA994">string</span><span style="color:#666666">;</span></span>
<span class="line"><span style="color:#666666">&#125;</span></span></code></pre></code></span>user</span></span><span style="color:#666666">.</span><span style="color:#BD976A"><span class="twoslash-hover"><span class="twoslash-popup-container"><code class="twoslash-popup-code"><span style="color:#80A665">name</span><span style="color:#666666">:</span><span style="color:#BD976A"> string</span></code></span>name</span></span><span style="color:#666666">;</span></span>
<span class="line"><span style="color:#666666">&#125;</span><span style="color:#4D9375"> catch</span><span style="color:#666666">(</span><span style="color:#BD976A"><span class="twoslash-hover"><span class="twoslash-popup-container"><code class="twoslash-popup-code"><span style="color:#CB7676">var </span><span style="color:#BD976A">e</span><span style="color:#666666">: </span><span style="color:#5DA994">unknown</span></code></span>e</span></span><span style="color:#666666">)</span><span style="color:#666666"> &#123;</span></span>
<span class="line"><span style="color:#4D9375">  if</span><span style="color:#666666">(</span><span style="color:#BD976A"><span class="twoslash-hover"><span class="twoslash-popup-container"><code class="twoslash-popup-code"><span style="color:#CB7676">var </span><span style="color:#BD976A">e</span><span style="color:#666666">: </span><span style="color:#5DA994">unknown</span></code></span>e</span></span><span style="color:#CB7676"> instanceof</span><span style="color:#5DA994"> </span><span style="color:#5DA994"><span class="twoslash-hover"><span class="twoslash-popup-container"><code class="twoslash-popup-code"><span style="color:#CB7676">class</span><span style="color:#5DA994"> CustomException1</span></code></span>CustomException1</span></span><span style="color:#666666">)</span><span style="color:#BD976A"> </span><span style="color:#BD976A"><span class="twoslash-hover"><span class="twoslash-popup-container"><code class="twoslash-popup-code"><span style="color:#CB7676">let </span><span style="color:#BD976A">result</span><span style="color:#666666">: </span><span style="color:#5DA994">any</span></code></span>result</span></span><span style="color:#666666"> =</span><span style="color:#CB7676"> null</span><span style="color:#666666">;</span></span>
<span class="line"><span style="color:#4D9375">  else</span><span style="color:#4D9375"> if</span><span style="color:#666666"> (</span><span style="color:#BD976A"><span class="twoslash-hover"><span class="twoslash-popup-container"><code class="twoslash-popup-code"><span style="color:#CB7676">var </span><span style="color:#BD976A">e</span><span style="color:#666666">: </span><span style="color:#5DA994">unknown</span></code></span>e</span></span><span style="color:#CB7676"> instanceof</span><span style="color:#5DA994"> </span><span style="color:#5DA994"><span class="twoslash-hover"><span class="twoslash-popup-container"><code class="twoslash-popup-code"><span style="color:#CB7676">class</span><span style="color:#5DA994"> CustomException2</span></code></span>CustomException2</span></span><span style="color:#666666">)</span><span style="color:#666666"> &#123;</span></span>
<span class="line"><span style="color:#BD976A">    </span><span style="color:#BD976A"><span class="twoslash-hover"><span class="twoslash-popup-container"><code class="twoslash-popup-code"><span style="color:#CB7676">var </span><span style="color:#BD976A">console</span><span style="color:#666666">: </span><span style="color:#5DA994">Console</span></code><div class="twoslash-popup-docs">The &#96;console&#96; module provides a simple debugging console that is similar to the
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
.</div><div class="twoslash-popup-docs twoslash-popup-docs-tags"><span class="twoslash-popup-docs-tag"><span class="twoslash-popup-docs-tag-name">@since</span><span class="twoslash-popup-docs-tag-value">v0.1.100</span></span></div></span>warn</span></span><span style="color:#666666">(</span><span style="color:#C98A7D99">"</span><span style="color:#C98A7D">CustomeException2</span><span style="color:#C98A7D99">"</span><span style="color:#666666">);</span></span>
<span class="line"><span style="color:#BD976A">    </span><span style="color:#BD976A"><span class="twoslash-hover"><span class="twoslash-popup-container"><code class="twoslash-popup-code"><span style="color:#CB7676">let </span><span style="color:#BD976A">result</span><span style="color:#666666">: </span><span style="color:#5DA994">any</span></code></span>result</span></span><span style="color:#666666"> =</span><span style="color:#CB7676"> null</span><span style="color:#666666">;</span></span>
<span class="line"><span style="color:#666666">  &#125;</span></span>
<span class="line"><span style="color:#4D9375">  else</span><span style="color:#4D9375"> throw</span><span style="color:#BD976A"> </span><span style="color:#BD976A"><span class="twoslash-hover"><span class="twoslash-popup-container"><code class="twoslash-popup-code"><span style="color:#CB7676">var </span><span style="color:#BD976A">e</span><span style="color:#666666">: </span><span style="color:#5DA994">unknown</span></code></span>e</span></span><span style="color:#666666">;</span></span>
<span class="line"><span style="color:#666666">&#125;</span></span></code></pre>`;
  let t15;
  let p4;
  let textContent_6 = "But the code here gets really really ugly really really fast. We have to imperatively check which Execution path we should take,\nopening up the door to many silly bugs.";
  let t17;
  let h21;
  let textContent_7 = `<a href="#what-we-want">What we want</a>`;
  let t19;
  let p5;
  let textContent_8 = `Wouldn’t it be really nice if we could declaratively define each execution path an the right thing just happened?
Other languages like Rust would make this pretty easy using Errors-As-Values and <code>match</code> statements. Something like this:`;
  let t23;
  let html_tag_2;
  let raw2_value = `<pre class="shiki vitesse-dark" style="background-color:#121212;color:#dbd7caee" tabindex="0"><code><span class="line"><span style="color:#CB7676">let</span><span style="color:#BD976A"> result</span><span style="color:#666666"> =</span><span style="color:#4D9375"> match</span><span style="color:#80A665"> unsafe_fn</span><span style="color:#666666">()</span><span style="color:#666666"> &#123;</span></span>
<span class="line"><span style="color:#5DA994">    Ok</span><span style="color:#666666">(</span><span style="color:#BD976A">user</span><span style="color:#666666">)</span><span style="color:#CB7676"> =></span><span style="color:#BD976A"> user</span><span style="color:#CB7676">.</span><span style="color:#DBD7CAEE">name</span><span style="color:#666666">,</span></span>
<span class="line"><span style="color:#5DA994">    Err</span><span style="color:#666666">(</span><span style="color:#5DA994">CustomExceptions</span><span style="color:#CB7676">::</span><span style="color:#4C9A91">1</span><span style="color:#666666">)</span><span style="color:#CB7676"> =></span><span style="color:#BD976A"> null</span><span style="color:#666666">,</span></span>
<span class="line"><span style="color:#5DA994">    Err</span><span style="color:#666666">(</span><span style="color:#5DA994">CustomExceptions</span><span style="color:#CB7676">::</span><span style="color:#4C9A91">2</span><span style="color:#666666">)</span><span style="color:#CB7676"> =></span><span style="color:#666666"> &#123;</span></span>
<span class="line"><span style="color:#80A665">      print!</span><span style="color:#666666">(</span><span style="color:#C98A7D99">"</span><span style="color:#C98A7D">CustomeException2</span><span style="color:#C98A7D99">"</span><span style="color:#666666">);</span></span>
<span class="line"><span style="color:#BD976A">      null</span><span style="color:#666666">;</span></span>
<span class="line"><span style="color:#666666">    &#125;,</span></span>
<span class="line"><span style="color:#5DA994">    Err</span><span style="color:#666666">(</span><span style="color:#BD976A">error</span><span style="color:#666666">)</span><span style="color:#CB7676"> =></span><span style="color:#80A665"> panic!</span><span style="color:#666666">(</span><span style="color:#C98A7D99">"</span><span style="color:#C98A7D">Unexpected Error: </span><span style="color:#666666">&#123;</span><span style="color:#C98A7D">:?</span><span style="color:#666666">&#125;</span><span style="color:#C98A7D99">"</span><span style="color:#666666">,</span><span style="color:#BD976A"> error</span><span style="color:#666666">),</span></span>
<span class="line"><span style="color:#666666">&#125;;</span></span></code></pre>`;
  let t24;
  let p6;
  let textContent_9 = "This way we can declaratively define each possible execution branch, drastically reducing the chance of bugs.";
  let t26;
  let h22;
  let textContent_10 = `<a href="#resultmatcher-a-potential-solution"><code>ResultMatcher</code> a potential solution</a>`;
  let t29;
  let p7;
  let textContent_11 = `I took a stab at implementing a similar API in JS, and I came up with the <code>ResultMatcher</code> class. You can find the full source code at the bottom of this article. It is used like this:`;
  let t33;
  let html_tag_3;
  let raw3_value = `<pre class="shiki vitesse-dark twoslash lsp" style="background-color:#121212;color:#dbd7caee" tabindex="0"><code><span class="line"><span style="color:#CB7676">const </span><span style="color:#BD976A"><span class="twoslash-hover"><span class="twoslash-popup-container"><code class="twoslash-popup-code"><span style="color:#CB7676">const </span><span style="color:#BD976A">result</span><span style="color:#666666">: </span><span style="color:#5DA994">void</span></code></span>result</span></span><span style="color:#666666"> =</span><span style="color:#CB7676"> new </span><span style="color:#80A665"><span class="twoslash-hover"><span class="twoslash-popup-container"><code class="twoslash-popup-code"><span style="color:#BD976A">constructor</span><span style="color:#80A665"> ResultMatcher</span><span style="color:#666666">(</span><span style="color:#BD976A">data</span><span style="color:#DBD7CAEE">: </span><span style="color:#BD976A">any</span><span style="color:#666666">)</span><span style="color:#DBD7CAEE">: </span><span style="color:#BD976A">ResultMatcher</span></code></span>ResultMatcher</span></span><span style="color:#666666">(</span><span style="color:#BD976A"><span class="twoslash-hover"><span class="twoslash-popup-container"><code class="twoslash-popup-code"><pre class="shiki vitesse-dark" style="background-color:#121212;color:#dbd7caee" tabindex="0"><code><span class="line"><span style="color:#CB7676">const </span><span style="color:#80A665">unsafe</span><span style="color:#666666">: () => &#123;</span></span>
<span class="line"><span style="color:#BD976A">    name</span><span style="color:#666666">: </span><span style="color:#5DA994">string</span><span style="color:#666666">;</span></span>
<span class="line"><span style="color:#666666">&#125;</span></span></code></pre></code></span>unsafe</span></span><span style="color:#666666">)</span></span>
<span class="line"><span style="color:#666666">    .</span><span style="color:#80A665"><span class="twoslash-hover"><span class="twoslash-popup-container"><code class="twoslash-popup-code"><pre class="shiki vitesse-dark" style="background-color:#121212;color:#dbd7caee" tabindex="0"><code><span class="line"><span style="color:#BD976A">ResultMatcher</span><span style="color:#666666">.</span><span style="color:#80A665">ok</span><span style="color:#666666">(</span><span style="color:#BD976A">cb</span><span style="color:#DBD7CAEE">: </span><span style="color:#666666">(</span><span style="color:#BD976A">user</span><span style="color:#666666">: &#123;</span></span>
<span class="line"><span style="color:#BD976A">    name</span><span style="color:#666666">: </span><span style="color:#5DA994">string</span><span style="color:#666666">;</span></span>
<span class="line"><span style="color:#666666">&#125;)</span><span style="color:#666666"> =></span><span style="color:#BD976A"> any</span><span style="color:#666666">)</span><span style="color:#DBD7CAEE">: </span><span style="color:#BD976A">ResultMatcher</span></span></code></pre></code></span>ok</span></span><span style="color:#666666">(</span><span style="color:#BD976A"><span class="twoslash-hover"><span class="twoslash-popup-container"><code class="twoslash-popup-code"><pre class="shiki vitesse-dark" style="background-color:#121212;color:#dbd7caee" tabindex="0"><code><span class="line"><span style="color:#80A665">user</span><span style="color:#666666">:</span><span style="color:#666666"> &#123;</span></span>
<span class="line"><span style="color:#80A665">    name</span><span style="color:#666666">:</span><span style="color:#BD976A"> string</span><span style="color:#666666">;</span></span>
<span class="line"><span style="color:#666666">&#125;</span></span></code></pre></code></span>user</span></span><span style="color:#666666"> =></span><span style="color:#BD976A"> </span><span style="color:#BD976A"><span class="twoslash-hover"><span class="twoslash-popup-container"><code class="twoslash-popup-code"><pre class="shiki vitesse-dark" style="background-color:#121212;color:#dbd7caee" tabindex="0"><code><span class="line"><span style="color:#80A665">user</span><span style="color:#666666">:</span><span style="color:#666666"> &#123;</span></span>
<span class="line"><span style="color:#80A665">    name</span><span style="color:#666666">:</span><span style="color:#BD976A"> string</span><span style="color:#666666">;</span></span>
<span class="line"><span style="color:#666666">&#125;</span></span></code></pre></code></span>user</span></span><span style="color:#666666">.</span><span style="color:#BD976A"><span class="twoslash-hover"><span class="twoslash-popup-container"><code class="twoslash-popup-code"><span style="color:#80A665">name</span><span style="color:#666666">:</span><span style="color:#BD976A"> string</span></code></span>name</span></span><span style="color:#666666">)</span></span>
<span class="line"><span style="color:#666666">    .</span><span style="color:#80A665"><span class="twoslash-hover"><span class="twoslash-popup-container"><code class="twoslash-popup-code"><pre class="shiki vitesse-dark" style="background-color:#121212;color:#dbd7caee" tabindex="0"><code><span class="line"><span style="color:#BD976A">ResultMatcher</span><span style="color:#666666">.</span><span style="color:#80A665">catch</span><span style="color:#666666">&#x3C;</span><span style="color:#5DA994">CustomException1</span><span style="color:#666666">>(</span><span style="color:#BD976A">prototype</span><span style="color:#DBD7CAEE">: </span><span style="color:#666666">(</span><span style="color:#CB7676">new</span><span style="color:#666666"> ()</span><span style="color:#666666"> =></span><span style="color:#BD976A"> CustomException1</span><span style="color:#666666">)</span><span style="color:#CB7676"> |</span><span style="color:#666666"> &#123;</span></span>
<span class="line"><span style="color:#B8A965">    prototype</span><span style="color:#666666">: </span><span style="color:#BD976A">CustomException1</span><span style="color:#666666">;</span></span>
<span class="line"><span style="color:#666666">&#125;,</span><span style="color:#BD976A"> cb</span><span style="color:#DBD7CAEE">: </span><span style="color:#666666">(</span><span style="color:#BD976A">instance</span><span style="color:#666666">: </span><span style="color:#5DA994">CustomException1</span><span style="color:#666666">)</span><span style="color:#666666"> =></span><span style="color:#BD976A"> any</span><span style="color:#666666">)</span><span style="color:#DBD7CAEE">: </span><span style="color:#BD976A">ResultMatcher</span></span></code></pre></code></span>catch</span></span><span style="color:#666666">(</span><span style="color:#BD976A"><span class="twoslash-hover"><span class="twoslash-popup-container"><code class="twoslash-popup-code"><span style="color:#CB7676">class</span><span style="color:#5DA994"> CustomException1</span></code></span>CustomException1</span></span><span style="color:#666666">,</span><span style="color:#BD976A"> </span><span style="color:#BD976A"><span class="twoslash-hover"><span class="twoslash-popup-container"><code class="twoslash-popup-code"><span style="color:#80A665">e</span><span style="color:#666666">:</span><span style="color:#BD976A"> CustomException1</span></code></span>e</span></span><span style="color:#666666"> =></span><span style="color:#CB7676"> null</span><span style="color:#666666">)</span></span>
<span class="line"><span style="color:#666666">    .</span><span style="color:#80A665"><span class="twoslash-hover"><span class="twoslash-popup-container"><code class="twoslash-popup-code"><pre class="shiki vitesse-dark" style="background-color:#121212;color:#dbd7caee" tabindex="0"><code><span class="line"><span style="color:#BD976A">ResultMatcher</span><span style="color:#666666">.</span><span style="color:#80A665">catch</span><span style="color:#666666">&#x3C;</span><span style="color:#5DA994">CustomException2</span><span style="color:#666666">>(</span><span style="color:#BD976A">prototype</span><span style="color:#DBD7CAEE">: </span><span style="color:#666666">(</span><span style="color:#CB7676">new</span><span style="color:#666666"> ()</span><span style="color:#666666"> =></span><span style="color:#BD976A"> CustomException2</span><span style="color:#666666">)</span><span style="color:#CB7676"> |</span><span style="color:#666666"> &#123;</span></span>
<span class="line"><span style="color:#B8A965">    prototype</span><span style="color:#666666">: </span><span style="color:#BD976A">CustomException2</span><span style="color:#666666">;</span></span>
<span class="line"><span style="color:#666666">&#125;,</span><span style="color:#BD976A"> cb</span><span style="color:#DBD7CAEE">: </span><span style="color:#666666">(</span><span style="color:#BD976A">instance</span><span style="color:#666666">: </span><span style="color:#5DA994">CustomException2</span><span style="color:#666666">)</span><span style="color:#666666"> =></span><span style="color:#BD976A"> any</span><span style="color:#666666">)</span><span style="color:#DBD7CAEE">: </span><span style="color:#BD976A">ResultMatcher</span></span></code></pre></code></span>catch</span></span><span style="color:#666666">(</span><span style="color:#BD976A"><span class="twoslash-hover"><span class="twoslash-popup-container"><code class="twoslash-popup-code"><span style="color:#CB7676">class</span><span style="color:#5DA994"> CustomException2</span></code></span>CustomException2</span></span><span style="color:#666666">,</span><span style="color:#BD976A"> </span><span style="color:#BD976A"><span class="twoslash-hover"><span class="twoslash-popup-container"><code class="twoslash-popup-code"><span style="color:#80A665">e</span><span style="color:#666666">:</span><span style="color:#BD976A"> CustomException2</span></code></span>e</span></span><span style="color:#666666"> =></span><span style="color:#666666"> &#123;</span><span style="color:#BD976A"> </span><span style="color:#BD976A"><span class="twoslash-hover"><span class="twoslash-popup-container"><code class="twoslash-popup-code"><span style="color:#CB7676">var </span><span style="color:#BD976A">console</span><span style="color:#666666">: </span><span style="color:#5DA994">Console</span></code><div class="twoslash-popup-docs">The &#96;console&#96; module provides a simple debugging console that is similar to the
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
.</div><div class="twoslash-popup-docs twoslash-popup-docs-tags"><span class="twoslash-popup-docs-tag"><span class="twoslash-popup-docs-tag-name">@since</span><span class="twoslash-popup-docs-tag-value">v0.1.100</span></span></div></span>warn</span></span><span style="color:#666666">(</span><span style="color:#C98A7D99">"</span><span style="color:#C98A7D">CustomException2</span><span style="color:#C98A7D99">"</span><span style="color:#666666">);</span><span style="color:#4D9375"> return</span><span style="color:#CB7676"> null</span><span style="color:#666666">&#125;)</span></span>
<span class="line"><span style="color:#666666">    .</span><span style="color:#80A665"><span class="twoslash-hover"><span class="twoslash-popup-container"><code class="twoslash-popup-code"><span style="color:#BD976A">ResultMatcher</span><span style="color:#666666">.</span><span style="color:#80A665">run</span><span style="color:#666666">()</span><span style="color:#DBD7CAEE">: </span><span style="color:#CB7676">void</span></code></span>run</span></span><span style="color:#666666">()</span></span></code></pre>`;
  let t34;
  let p8;
  let textContent_12 = "It is fully typesafe making it a breeze to work with.";
  let t36;
  let p9;
  let textContent_13 = "Let’s take a look at each part:";
  let t38;
  let ul0;
  let textContent_14 = `<li><code>const result</code> will be the return value of whatever execution branch is taken. In the snippet above the return type would be <code>string | null</code></li> <li><code>ResultMatcher(unsafe)</code> constructs a matcher instance for the function <code>unsafe</code></li> <li><code>.ok()</code> takes a callback that handles the return value of <code>unsafe</code> if it succeeds. If <code>.ok</code> is not used on the Matcher it will default to the identity function.</li> <li><code>.catch(CustomException1, e =&gt; null)</code> Will only run if <code>unsafe</code> throws a <code>CustomException1</code>. It may return a value.</li> <li><code>.run()</code> Actually calls <code>unsafe</code>. If unsafe takes args, you will pass them here (Eg: <code>run(&quot;Hello&quot;, {option: &quot;a&quot;})</code>). TS will enforce this.</li>`;
  let t67;
  let p10;
  let textContent_15 = `Sometimes you <em>do</em> want to react to all errors that are thrown. Maybe just to log them. For that we have the <code>catchAll</code> method.`;
  let t73;
  let ul1;
  let textContent_16 = `<li><code>.catchAll(e =&gt; {console.error(e); throw e})</code></li>`;
  let t75;
  let h23;
  let textContent_17 = `<a href="#the-snippet">The Snippet</a>`;
  let t77;
  let html_tag_4;
  let raw4_value = `<pre class="shiki vitesse-dark" style="background-color:#121212;color:#dbd7caee" tabindex="0"><code><span class="line"><span style="color:#758575DD">/**</span></span>
<span class="line"><span style="color:#758575DD"> * The configuration for a ResultMatcher Strategy.</span></span>
<span class="line"><span style="color:#758575DD"> *</span></span>
<span class="line"><span style="color:#758575DD"> * </span><span style="color:#666666">@</span><span style="color:#4D9375">template</span><span style="color:#BD976A"> Prototype</span></span>
<span class="line"><span style="color:#758575DD"> * </span><span style="color:#666666">@</span><span style="color:#4D9375">template</span><span style="color:#BD976A"> ReturnType</span></span>
<span class="line"><span style="color:#758575DD"> * </span><span style="color:#666666">@</span><span style="color:#4D9375">typedef</span><span style="color:#666666"> &#123;</span><span style="color:#5DA994">&#123;</span></span>
<span class="line"><span style="color:#5DA994"> *    prototype: &#123; new (): Prototype;  &#125; | &#123; prototype: Prototype; &#125;,</span></span>
<span class="line"><span style="color:#5DA994"> *    handler: (instance: Prototype) => ReturnType;</span></span>
<span class="line"><span style="color:#5DA994"> * &#125;</span><span style="color:#666666">&#125;</span><span style="color:#5DA994"> Strategy</span></span>
<span class="line"><span style="color:#758575DD"> */</span></span>
<span class="line"></span>
<span class="line"><span style="color:#758575DD">/**</span></span>
<span class="line"><span style="color:#758575DD"> * Declaratively define what should happen for all the possible outcomes of a function.</span></span>
<span class="line"><span style="color:#758575DD"> * This follows an immutable builder pattern, so each method returns a new instance of the ResultMatcher class.</span></span>
<span class="line"><span style="color:#758575DD"> *</span></span>
<span class="line"><span style="color:#758575DD"> * </span><span style="color:#666666">@</span><span style="color:#4D9375">template</span><span style="color:#666666"> &#123;</span><span style="color:#5DA994">(...args: any) => any</span><span style="color:#666666">&#125;</span><span style="color:#BD976A"> UnsafeFunc</span></span>
<span class="line"><span style="color:#758575DD"> * </span><span style="color:#666666">@</span><span style="color:#4D9375">template</span><span style="color:#666666"> &#123;</span><span style="color:#5DA994">(result: ReturnType&#x3C;UnsafeFunc>) => any</span><span style="color:#666666">&#125;</span><span style="color:#758575DD"> [</span><span style="color:#BD976A">SuccessHandler</span><span style="color:#758575DD">=((result: ReturnType&#x3C;UnsafeFunc>) => ReturnType&#x3C;UnsafeFunc>)]</span></span>
<span class="line"><span style="color:#758575DD"> * </span><span style="color:#666666">@</span><span style="color:#4D9375">template</span><span style="color:#666666"> &#123;</span><span style="color:#5DA994">Strategy&#x3C;any, any>[]</span><span style="color:#666666">&#125;</span><span style="color:#758575DD"> [</span><span style="color:#BD976A">Strategies</span><span style="color:#758575DD">=[]]</span></span>
<span class="line"><span style="color:#758575DD"> * </span><span style="color:#666666">@</span><span style="color:#4D9375">template</span><span style="color:#666666"> &#123;</span><span style="color:#5DA994">((e: unknown) => any)</span><span style="color:#666666">&#125;</span><span style="color:#758575DD"> [</span><span style="color:#BD976A">FallbackHandler</span><span style="color:#758575DD">=(e: unknown) => never]</span></span>
<span class="line"><span style="color:#758575DD"> */</span></span>
<span class="line"><span style="color:#4D9375">export</span><span style="color:#CB7676"> class</span><span style="color:#5DA994"> ResultMatcher</span><span style="color:#666666"> &#123;</span></span>
<span class="line"><span style="color:#758575DD">  /** </span><span style="color:#666666">@</span><span style="color:#4D9375">type</span><span style="color:#666666"> &#123;</span><span style="color:#5DA994">UnsafeFunc</span><span style="color:#666666">&#125;</span><span style="color:#758575DD"> */</span></span>
<span class="line"><span style="color:#BD976A">  #unsafeFunction</span><span style="color:#666666">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#758575DD">  /** </span><span style="color:#666666">@</span><span style="color:#4D9375">type</span><span style="color:#666666"> &#123;</span><span style="color:#5DA994">Strategies</span><span style="color:#666666">&#125;</span><span style="color:#758575DD"> */</span></span>
<span class="line"><span style="color:#BD976A">  #strategies</span><span style="color:#666666">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#758575DD">  /** </span><span style="color:#666666">@</span><span style="color:#4D9375">type</span><span style="color:#666666"> &#123;</span><span style="color:#5DA994">SuccessHandler</span><span style="color:#666666">&#125;</span><span style="color:#758575DD"> */</span></span>
<span class="line"><span style="color:#BD976A">  #successHandler</span><span style="color:#666666">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#758575DD">  /** </span><span style="color:#666666">@</span><span style="color:#4D9375">type</span><span style="color:#666666"> &#123;</span><span style="color:#5DA994">FallbackHandler</span><span style="color:#666666">&#125;</span><span style="color:#758575DD"> */</span></span>
<span class="line"><span style="color:#BD976A">  #fallbackHandler</span><span style="color:#666666">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#758575DD">  /**</span></span>
<span class="line"><span style="color:#758575DD">   * </span><span style="color:#666666">@</span><span style="color:#4D9375">param</span><span style="color:#666666"> &#123;</span><span style="color:#5DA994">UnsafeFunc</span><span style="color:#666666">&#125;</span><span style="color:#BD976A"> func</span></span>
<span class="line"><span style="color:#758575DD">   * </span><span style="color:#666666">@</span><span style="color:#4D9375">param</span><span style="color:#666666"> &#123;</span><span style="color:#5DA994">Strategies</span><span style="color:#666666">&#125;</span><span style="color:#BD976A"> strategies</span></span>
<span class="line"><span style="color:#758575DD">   * </span><span style="color:#666666">@</span><span style="color:#4D9375">param</span><span style="color:#666666"> &#123;</span><span style="color:#5DA994">SuccessHandler</span><span style="color:#666666">&#125;</span><span style="color:#BD976A"> successHandler</span></span>
<span class="line"><span style="color:#758575DD">   * </span><span style="color:#666666">@</span><span style="color:#4D9375">param</span><span style="color:#666666"> &#123;</span><span style="color:#5DA994">FallbackHandler</span><span style="color:#666666">&#125;</span><span style="color:#BD976A"> fallbackHandler</span></span>
<span class="line"><span style="color:#758575DD">   */</span></span>
<span class="line"><span style="color:#CB7676">  constructor</span><span style="color:#666666">(</span></span>
<span class="line"><span style="color:#BD976A">    func</span><span style="color:#666666">,</span></span>
<span class="line"><span style="color:#BD976A">    strategies</span><span style="color:#666666"> =</span><span style="color:#758575DD"> /** </span><span style="color:#666666">@</span><span style="color:#4D9375">type</span><span style="color:#666666"> &#123;</span><span style="color:#5DA994">any</span><span style="color:#666666">&#125;</span><span style="color:#758575DD"> */</span><span style="color:#666666"> ([]),</span></span>
<span class="line"><span style="color:#BD976A">    successHandler</span><span style="color:#666666"> =</span><span style="color:#758575DD"> /** </span><span style="color:#666666">@</span><span style="color:#4D9375">type</span><span style="color:#666666"> &#123;</span><span style="color:#5DA994">any</span><span style="color:#666666">&#125;</span><span style="color:#758575DD"> */</span><span style="color:#666666"> (</span><span style="color:#BD976A">identity</span><span style="color:#666666">),</span></span>
<span class="line"><span style="color:#BD976A">    fallbackHandler</span><span style="color:#666666"> =</span><span style="color:#758575DD"> /** </span><span style="color:#666666">@</span><span style="color:#4D9375">type</span><span style="color:#666666"> &#123;</span><span style="color:#5DA994">any</span><span style="color:#666666">&#125;</span><span style="color:#758575DD"> */</span><span style="color:#666666"> (</span><span style="color:#BD976A">raise</span><span style="color:#666666">),</span></span>
<span class="line"><span style="color:#666666">  )</span><span style="color:#666666"> &#123;</span></span>
<span class="line"><span style="color:#C99076">    this</span><span style="color:#666666">.</span><span style="color:#BD976A">#unsafeFunction</span><span style="color:#666666"> =</span><span style="color:#BD976A"> func</span><span style="color:#666666">;</span></span>
<span class="line"><span style="color:#C99076">    this</span><span style="color:#666666">.</span><span style="color:#BD976A">#strategies</span><span style="color:#666666"> =</span><span style="color:#BD976A"> strategies</span><span style="color:#666666">;</span></span>
<span class="line"><span style="color:#C99076">    this</span><span style="color:#666666">.</span><span style="color:#BD976A">#successHandler</span><span style="color:#666666"> =</span><span style="color:#BD976A"> successHandler</span><span style="color:#666666">;</span></span>
<span class="line"><span style="color:#C99076">    this</span><span style="color:#666666">.</span><span style="color:#BD976A">#fallbackHandler</span><span style="color:#666666"> =</span><span style="color:#BD976A"> fallbackHandler</span><span style="color:#666666">;</span></span>
<span class="line"><span style="color:#666666">  &#125;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#758575DD">  /**</span></span>
<span class="line"><span style="color:#758575DD">   * Defines a strategy for a given error type.</span></span>
<span class="line"><span style="color:#758575DD">   *</span></span>
<span class="line"><span style="color:#758575DD">   * </span><span style="color:#666666">@</span><span style="color:#4D9375">template</span><span style="color:#BD976A"> Prototype</span></span>
<span class="line"><span style="color:#758575DD">   * </span><span style="color:#666666">@</span><span style="color:#4D9375">template</span><span style="color:#BD976A"> StrategyReturnType</span></span>
<span class="line"><span style="color:#758575DD">   *</span></span>
<span class="line"><span style="color:#758575DD">   * </span><span style="color:#666666">@</span><span style="color:#4D9375">param</span><span style="color:#666666"> &#123;</span><span style="color:#5DA994">&#123; new (): Prototype;&#125; | &#123; prototype: Prototype; &#125;</span><span style="color:#666666">&#125;</span><span style="color:#BD976A"> prototype</span><span style="color:#758575DD"> - The error type to handle. Thrown things will be compared against this with &#96;instanceof&#96;.</span></span>
<span class="line"><span style="color:#758575DD">   * </span><span style="color:#666666">@</span><span style="color:#4D9375">param</span><span style="color:#666666"> &#123;</span><span style="color:#5DA994">(instance: Prototype) => StrategyReturnType</span><span style="color:#666666">&#125;</span><span style="color:#BD976A"> handler</span><span style="color:#758575DD"> - Callback to handle the error.</span></span>
<span class="line"><span style="color:#758575DD">   * </span><span style="color:#666666">@</span><span style="color:#4D9375">returns</span><span style="color:#666666"> &#123;</span><span style="color:#5DA994">ResultMatcher&#x3C;UnsafeFunc, SuccessHandler, [...Strategies, Strategy&#x3C;Prototype, StrategyReturnType>], FallbackHandler></span><span style="color:#666666">&#125;</span></span>
<span class="line"><span style="color:#758575DD">   */</span></span>
<span class="line"><span style="color:#80A665">  catch</span><span style="color:#666666">(</span><span style="color:#BD976A">prototype</span><span style="color:#666666">,</span><span style="color:#BD976A"> handler</span><span style="color:#666666">)</span><span style="color:#666666"> &#123;</span></span>
<span class="line"><span style="color:#CB7676">    const</span><span style="color:#BD976A"> registeredStrategy</span><span style="color:#666666"> =</span><span style="color:#666666"> &#123;</span><span style="color:#BD976A"> prototype</span><span style="color:#666666">,</span><span style="color:#BD976A"> handler</span><span style="color:#666666"> &#125;;</span></span>
<span class="line"><span style="color:#4D9375">    return</span><span style="color:#CB7676"> new</span><span style="color:#80A665"> ResultMatcher</span><span style="color:#666666">(</span></span>
<span class="line"><span style="color:#C99076">      this</span><span style="color:#666666">.</span><span style="color:#BD976A">#unsafeFunction</span><span style="color:#666666">,</span></span>
<span class="line"><span style="color:#666666">      [...</span><span style="color:#C99076">this</span><span style="color:#666666">.</span><span style="color:#BD976A">#strategies</span><span style="color:#666666">,</span><span style="color:#BD976A"> registeredStrategy</span><span style="color:#666666">],</span></span>
<span class="line"><span style="color:#C99076">      this</span><span style="color:#666666">.</span><span style="color:#BD976A">#successHandler</span><span style="color:#666666">,</span></span>
<span class="line"><span style="color:#C99076">      this</span><span style="color:#666666">.</span><span style="color:#BD976A">#fallbackHandler</span><span style="color:#666666">,</span></span>
<span class="line"><span style="color:#666666">    );</span></span>
<span class="line"><span style="color:#666666">  &#125;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#758575DD">  /**</span></span>
<span class="line"><span style="color:#758575DD">   * </span><span style="color:#666666">@</span><span style="color:#4D9375">template</span><span style="color:#666666"> &#123;</span><span style="color:#5DA994">(e:unknown) => any</span><span style="color:#666666">&#125;</span><span style="color:#BD976A"> Handler</span></span>
<span class="line"><span style="color:#758575DD">   *</span></span>
<span class="line"><span style="color:#758575DD">   * </span><span style="color:#666666">@</span><span style="color:#4D9375">param</span><span style="color:#666666"> &#123;</span><span style="color:#5DA994">Handler</span><span style="color:#666666">&#125;</span><span style="color:#BD976A"> handler</span></span>
<span class="line"><span style="color:#758575DD">   * </span><span style="color:#666666">@</span><span style="color:#4D9375">returns</span><span style="color:#666666"> &#123;</span><span style="color:#5DA994">ResultMatcher&#x3C;UnsafeFunc, SuccessHandler, Strategies, Handler></span><span style="color:#666666">&#125;</span></span>
<span class="line"><span style="color:#758575DD">   */</span></span>
<span class="line"><span style="color:#80A665">  catchAll</span><span style="color:#666666">(</span><span style="color:#BD976A">handler</span><span style="color:#666666">)</span><span style="color:#666666"> &#123;</span></span>
<span class="line"><span style="color:#4D9375">    return</span><span style="color:#CB7676"> new</span><span style="color:#80A665"> ResultMatcher</span><span style="color:#666666">(</span></span>
<span class="line"><span style="color:#C99076">      this</span><span style="color:#666666">.</span><span style="color:#BD976A">#unsafeFunction</span><span style="color:#666666">,</span></span>
<span class="line"><span style="color:#C99076">      this</span><span style="color:#666666">.</span><span style="color:#BD976A">#strategies</span><span style="color:#666666">,</span></span>
<span class="line"><span style="color:#C99076">      this</span><span style="color:#666666">.</span><span style="color:#BD976A">#successHandler</span><span style="color:#666666">,</span></span>
<span class="line"><span style="color:#BD976A">      handler</span><span style="color:#666666">,</span></span>
<span class="line"><span style="color:#666666">    );</span></span>
<span class="line"><span style="color:#666666">  &#125;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#758575DD">  /**</span></span>
<span class="line"><span style="color:#758575DD">   * Handle the happy path</span></span>
<span class="line"><span style="color:#758575DD">   *</span></span>
<span class="line"><span style="color:#758575DD">   * </span><span style="color:#666666">@</span><span style="color:#4D9375">template</span><span style="color:#666666"> &#123;</span><span style="color:#5DA994">(result: ReturnType&#x3C;UnsafeFunc>) => any</span><span style="color:#666666">&#125;</span><span style="color:#BD976A"> Handler</span></span>
<span class="line"><span style="color:#758575DD">   * </span><span style="color:#666666">@</span><span style="color:#4D9375">param</span><span style="color:#666666"> &#123;</span><span style="color:#5DA994">Handler</span><span style="color:#666666">&#125;</span><span style="color:#BD976A"> handler</span></span>
<span class="line"><span style="color:#758575DD">   * </span><span style="color:#666666">@</span><span style="color:#4D9375">returns</span><span style="color:#666666"> &#123;</span><span style="color:#5DA994">ResultMatcher&#x3C;UnsafeFunc, Handler, Strategies, FallbackHandler></span><span style="color:#666666">&#125;</span></span>
<span class="line"><span style="color:#758575DD">   */</span></span>
<span class="line"><span style="color:#80A665">  ok</span><span style="color:#666666">(</span><span style="color:#BD976A">handler</span><span style="color:#666666">)</span><span style="color:#666666"> &#123;</span></span>
<span class="line"><span style="color:#4D9375">    return</span><span style="color:#CB7676"> new</span><span style="color:#80A665"> ResultMatcher</span><span style="color:#666666">(</span></span>
<span class="line"><span style="color:#C99076">      this</span><span style="color:#666666">.</span><span style="color:#BD976A">#unsafeFunction</span><span style="color:#666666">,</span></span>
<span class="line"><span style="color:#C99076">      this</span><span style="color:#666666">.</span><span style="color:#BD976A">#strategies</span><span style="color:#666666">,</span></span>
<span class="line"><span style="color:#BD976A">      handler</span><span style="color:#666666">,</span></span>
<span class="line"><span style="color:#C99076">      this</span><span style="color:#666666">.</span><span style="color:#BD976A">#fallbackHandler</span><span style="color:#666666">,</span></span>
<span class="line"><span style="color:#666666">    );</span></span>
<span class="line"><span style="color:#666666">  &#125;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#758575DD">  /**</span></span>
<span class="line"><span style="color:#758575DD">   * Calls the unsafe function with the given parameters and handles any errors that may be thrown</span></span>
<span class="line"><span style="color:#758575DD">   * according to the registered strategies.</span></span>
<span class="line"><span style="color:#758575DD">   *</span></span>
<span class="line"><span style="color:#758575DD">   * </span><span style="color:#666666">@</span><span style="color:#4D9375">param</span><span style="color:#666666">  &#123;</span><span style="color:#5DA994">Parameters&#x3C;UnsafeFunc></span><span style="color:#666666">&#125;</span><span style="color:#BD976A"> params</span></span>
<span class="line"><span style="color:#758575DD">   * </span><span style="color:#666666">@</span><span style="color:#4D9375">returns</span><span style="color:#666666"> &#123;</span><span style="color:#5DA994">ReturnType&#x3C;SuccessHandler> | ReturnType&#x3C;Strategies[number]["handler"]> | ReturnType&#x3C;FallbackHandler></span><span style="color:#666666">&#125;</span></span>
<span class="line"><span style="color:#758575DD">   */</span></span>
<span class="line"><span style="color:#80A665">  run</span><span style="color:#666666">(...</span><span style="color:#BD976A">params</span><span style="color:#666666">)</span><span style="color:#666666"> &#123;</span></span>
<span class="line"><span style="color:#CB7676">    let</span><span style="color:#BD976A"> successResult</span><span style="color:#666666">;</span></span>
<span class="line"><span style="color:#4D9375">    try</span><span style="color:#666666"> &#123;</span></span>
<span class="line"><span style="color:#758575DD">      // @ts-ignore</span></span>
<span class="line"><span style="color:#BD976A">      successResult</span><span style="color:#666666"> =</span><span style="color:#C99076"> this</span><span style="color:#666666">.</span><span style="color:#80A665">#unsafeFunction</span><span style="color:#666666">(...</span><span style="color:#BD976A">params</span><span style="color:#666666">);</span></span>
<span class="line"><span style="color:#666666">    &#125;</span><span style="color:#4D9375"> catch</span><span style="color:#666666"> (</span><span style="color:#BD976A">e</span><span style="color:#666666">)</span><span style="color:#666666"> &#123;</span></span>
<span class="line"><span style="color:#4D9375">      for</span><span style="color:#666666"> (</span><span style="color:#CB7676">const</span><span style="color:#BD976A"> strategy</span><span style="color:#CB7676"> of</span><span style="color:#C99076"> this</span><span style="color:#666666">.</span><span style="color:#BD976A">#strategies</span><span style="color:#666666">)</span><span style="color:#666666"> &#123;</span></span>
<span class="line"><span style="color:#4D9375">        if</span><span style="color:#666666"> (</span><span style="color:#BD976A">e</span><span style="color:#CB7676"> instanceof</span><span style="color:#758575DD"> /** </span><span style="color:#666666">@</span><span style="color:#4D9375">type</span><span style="color:#666666"> &#123;</span><span style="color:#5DA994">any</span><span style="color:#666666">&#125;</span><span style="color:#758575DD"> */</span><span style="color:#666666"> (</span><span style="color:#5DA994">strategy</span><span style="color:#666666">.</span><span style="color:#5DA994">prototype</span><span style="color:#666666">))</span><span style="color:#666666"> &#123;</span></span>
<span class="line"><span style="color:#4D9375">          return</span><span style="color:#BD976A"> strategy</span><span style="color:#666666">.</span><span style="color:#80A665">handler</span><span style="color:#666666">(</span><span style="color:#BD976A">e</span><span style="color:#666666">);</span></span>
<span class="line"><span style="color:#666666">        &#125;</span></span>
<span class="line"><span style="color:#666666">      &#125;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#4D9375">      return</span><span style="color:#C99076"> this</span><span style="color:#666666">.</span><span style="color:#80A665">#fallbackHandler</span><span style="color:#666666">(</span><span style="color:#BD976A">e</span><span style="color:#666666">);</span></span>
<span class="line"><span style="color:#666666">    &#125;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#4D9375">    return</span><span style="color:#C99076"> this</span><span style="color:#666666">.</span><span style="color:#80A665">#successHandler</span><span style="color:#666666">(</span><span style="color:#BD976A">successResult</span><span style="color:#666666">);</span></span>
<span class="line"><span style="color:#666666">  &#125;</span></span>
<span class="line"><span style="color:#666666">&#125;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#758575DD">/**</span></span>
<span class="line"><span style="color:#758575DD"> * The identity function</span></span>
<span class="line"><span style="color:#758575DD"> * </span><span style="color:#666666">@</span><span style="color:#4D9375">template</span><span style="color:#BD976A"> T</span></span>
<span class="line"><span style="color:#758575DD"> * </span><span style="color:#666666">@</span><span style="color:#4D9375">param</span><span style="color:#666666"> &#123;</span><span style="color:#5DA994">T</span><span style="color:#666666">&#125;</span><span style="color:#BD976A"> x</span></span>
<span class="line"><span style="color:#758575DD"> * </span><span style="color:#666666">@</span><span style="color:#4D9375">returns</span><span style="color:#666666"> &#123;</span><span style="color:#5DA994">T</span><span style="color:#666666">&#125;</span></span>
<span class="line"><span style="color:#758575DD"> */</span></span>
<span class="line"><span style="color:#CB7676">const</span><span style="color:#80A665"> identity</span><span style="color:#666666"> =</span><span style="color:#666666"> (</span><span style="color:#BD976A">x</span><span style="color:#666666">)</span><span style="color:#666666"> =></span><span style="color:#BD976A"> x</span><span style="color:#666666">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#758575DD">/**</span></span>
<span class="line"><span style="color:#758575DD"> * </span><span style="color:#666666">@</span><span style="color:#4D9375">template</span><span style="color:#BD976A"> T</span></span>
<span class="line"><span style="color:#758575DD"> * </span><span style="color:#666666">@</span><span style="color:#4D9375">param</span><span style="color:#666666"> &#123;</span><span style="color:#5DA994">T</span><span style="color:#666666">&#125;</span><span style="color:#BD976A"> e</span></span>
<span class="line"><span style="color:#758575DD"> * </span><span style="color:#666666">@</span><span style="color:#4D9375">returns</span><span style="color:#666666"> &#123;</span><span style="color:#5DA994">never</span><span style="color:#666666">&#125;</span></span>
<span class="line"><span style="color:#758575DD"> * </span><span style="color:#666666">@</span><span style="color:#4D9375">throws</span><span style="color:#666666"> &#123;</span><span style="color:#5DA994">T</span><span style="color:#666666">&#125;</span></span>
<span class="line"><span style="color:#758575DD"> */</span></span>
<span class="line"><span style="color:#CB7676">const</span><span style="color:#80A665"> raise</span><span style="color:#666666"> =</span><span style="color:#666666"> (</span><span style="color:#BD976A">e</span><span style="color:#666666">)</span><span style="color:#666666"> =></span><span style="color:#666666"> &#123;</span></span>
<span class="line"><span style="color:#4D9375">  throw</span><span style="color:#BD976A"> e</span><span style="color:#666666">;</span></span>
<span class="line"><span style="color:#666666">&#125;;</span></span></code></pre>`;
  let html_anchor;
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
      html_tag = new HtmlTagHydration(false);
      t8 = space();
      p2 = element("p");
      p2.innerHTML = textContent_4;
      t12 = space();
      p3 = element("p");
      p3.textContent = textContent_5;
      t14 = space();
      html_tag_1 = new HtmlTagHydration(false);
      t15 = space();
      p4 = element("p");
      p4.textContent = textContent_6;
      t17 = space();
      h21 = element("h2");
      h21.innerHTML = textContent_7;
      t19 = space();
      p5 = element("p");
      p5.innerHTML = textContent_8;
      t23 = space();
      html_tag_2 = new HtmlTagHydration(false);
      t24 = space();
      p6 = element("p");
      p6.textContent = textContent_9;
      t26 = space();
      h22 = element("h2");
      h22.innerHTML = textContent_10;
      t29 = space();
      p7 = element("p");
      p7.innerHTML = textContent_11;
      t33 = space();
      html_tag_3 = new HtmlTagHydration(false);
      t34 = space();
      p8 = element("p");
      p8.textContent = textContent_12;
      t36 = space();
      p9 = element("p");
      p9.textContent = textContent_13;
      t38 = space();
      ul0 = element("ul");
      ul0.innerHTML = textContent_14;
      t67 = space();
      p10 = element("p");
      p10.innerHTML = textContent_15;
      t73 = space();
      ul1 = element("ul");
      ul1.innerHTML = textContent_16;
      t75 = space();
      h23 = element("h2");
      h23.innerHTML = textContent_17;
      t77 = space();
      html_tag_4 = new HtmlTagHydration(false);
      html_anchor = empty();
      this.h();
    },
    l(nodes) {
      h1 = claim_element(nodes, "H1", { id: true, ["data-svelte-h"]: true });
      if (get_svelte_dataset(h1) !== "svelte-z0u4rw")
        h1.innerHTML = textContent;
      t1 = claim_space(nodes);
      p0 = claim_element(nodes, "P", { ["data-svelte-h"]: true });
      if (get_svelte_dataset(p0) !== "svelte-xe0fn0")
        p0.textContent = textContent_1;
      t3 = claim_space(nodes);
      h20 = claim_element(nodes, "H2", { id: true, ["data-svelte-h"]: true });
      if (get_svelte_dataset(h20) !== "svelte-xa1j4")
        h20.innerHTML = textContent_2;
      t5 = claim_space(nodes);
      p1 = claim_element(nodes, "P", { ["data-svelte-h"]: true });
      if (get_svelte_dataset(p1) !== "svelte-j0y3la")
        p1.textContent = textContent_3;
      t7 = claim_space(nodes);
      html_tag = claim_html_tag(nodes, false);
      t8 = claim_space(nodes);
      p2 = claim_element(nodes, "P", { ["data-svelte-h"]: true });
      if (get_svelte_dataset(p2) !== "svelte-1o7ycng")
        p2.innerHTML = textContent_4;
      t12 = claim_space(nodes);
      p3 = claim_element(nodes, "P", { ["data-svelte-h"]: true });
      if (get_svelte_dataset(p3) !== "svelte-7telbu")
        p3.textContent = textContent_5;
      t14 = claim_space(nodes);
      html_tag_1 = claim_html_tag(nodes, false);
      t15 = claim_space(nodes);
      p4 = claim_element(nodes, "P", { ["data-svelte-h"]: true });
      if (get_svelte_dataset(p4) !== "svelte-1kgaj31")
        p4.textContent = textContent_6;
      t17 = claim_space(nodes);
      h21 = claim_element(nodes, "H2", { id: true, ["data-svelte-h"]: true });
      if (get_svelte_dataset(h21) !== "svelte-kzejms")
        h21.innerHTML = textContent_7;
      t19 = claim_space(nodes);
      p5 = claim_element(nodes, "P", { ["data-svelte-h"]: true });
      if (get_svelte_dataset(p5) !== "svelte-dvkkc4")
        p5.innerHTML = textContent_8;
      t23 = claim_space(nodes);
      html_tag_2 = claim_html_tag(nodes, false);
      t24 = claim_space(nodes);
      p6 = claim_element(nodes, "P", { ["data-svelte-h"]: true });
      if (get_svelte_dataset(p6) !== "svelte-xy7f4b")
        p6.textContent = textContent_9;
      t26 = claim_space(nodes);
      h22 = claim_element(nodes, "H2", { id: true, ["data-svelte-h"]: true });
      if (get_svelte_dataset(h22) !== "svelte-9hqu1k")
        h22.innerHTML = textContent_10;
      t29 = claim_space(nodes);
      p7 = claim_element(nodes, "P", { ["data-svelte-h"]: true });
      if (get_svelte_dataset(p7) !== "svelte-tiiv16")
        p7.innerHTML = textContent_11;
      t33 = claim_space(nodes);
      html_tag_3 = claim_html_tag(nodes, false);
      t34 = claim_space(nodes);
      p8 = claim_element(nodes, "P", { ["data-svelte-h"]: true });
      if (get_svelte_dataset(p8) !== "svelte-h0ke80")
        p8.textContent = textContent_12;
      t36 = claim_space(nodes);
      p9 = claim_element(nodes, "P", { ["data-svelte-h"]: true });
      if (get_svelte_dataset(p9) !== "svelte-aex9p")
        p9.textContent = textContent_13;
      t38 = claim_space(nodes);
      ul0 = claim_element(nodes, "UL", { ["data-svelte-h"]: true });
      if (get_svelte_dataset(ul0) !== "svelte-1rlehpz")
        ul0.innerHTML = textContent_14;
      t67 = claim_space(nodes);
      p10 = claim_element(nodes, "P", { ["data-svelte-h"]: true });
      if (get_svelte_dataset(p10) !== "svelte-12ouq9h")
        p10.innerHTML = textContent_15;
      t73 = claim_space(nodes);
      ul1 = claim_element(nodes, "UL", { ["data-svelte-h"]: true });
      if (get_svelte_dataset(ul1) !== "svelte-1fgu1t0")
        ul1.innerHTML = textContent_16;
      t75 = claim_space(nodes);
      h23 = claim_element(nodes, "H2", { id: true, ["data-svelte-h"]: true });
      if (get_svelte_dataset(h23) !== "svelte-1m2hw0c")
        h23.innerHTML = textContent_17;
      t77 = claim_space(nodes);
      html_tag_4 = claim_html_tag(nodes, false);
      html_anchor = empty();
      this.h();
    },
    h() {
      attr(h1, "id", "declarative-exception-handling");
      attr(h20, "id", "the-state-of-error-handling-in-js");
      html_tag.a = t8;
      html_tag_1.a = t15;
      attr(h21, "id", "what-we-want");
      html_tag_2.a = t24;
      attr(h22, "id", "resultmatcher-a-potential-solution");
      html_tag_3.a = t34;
      attr(h23, "id", "the-snippet");
      html_tag_4.a = html_anchor;
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
      html_tag.m(raw0_value, target, anchor);
      insert_hydration(target, t8, anchor);
      insert_hydration(target, p2, anchor);
      insert_hydration(target, t12, anchor);
      insert_hydration(target, p3, anchor);
      insert_hydration(target, t14, anchor);
      html_tag_1.m(raw1_value, target, anchor);
      insert_hydration(target, t15, anchor);
      insert_hydration(target, p4, anchor);
      insert_hydration(target, t17, anchor);
      insert_hydration(target, h21, anchor);
      insert_hydration(target, t19, anchor);
      insert_hydration(target, p5, anchor);
      insert_hydration(target, t23, anchor);
      html_tag_2.m(raw2_value, target, anchor);
      insert_hydration(target, t24, anchor);
      insert_hydration(target, p6, anchor);
      insert_hydration(target, t26, anchor);
      insert_hydration(target, h22, anchor);
      insert_hydration(target, t29, anchor);
      insert_hydration(target, p7, anchor);
      insert_hydration(target, t33, anchor);
      html_tag_3.m(raw3_value, target, anchor);
      insert_hydration(target, t34, anchor);
      insert_hydration(target, p8, anchor);
      insert_hydration(target, t36, anchor);
      insert_hydration(target, p9, anchor);
      insert_hydration(target, t38, anchor);
      insert_hydration(target, ul0, anchor);
      insert_hydration(target, t67, anchor);
      insert_hydration(target, p10, anchor);
      insert_hydration(target, t73, anchor);
      insert_hydration(target, ul1, anchor);
      insert_hydration(target, t75, anchor);
      insert_hydration(target, h23, anchor);
      insert_hydration(target, t77, anchor);
      html_tag_4.m(raw4_value, target, anchor);
      insert_hydration(target, html_anchor, anchor);
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
        html_tag.d();
        detach(t8);
        detach(p2);
        detach(t12);
        detach(p3);
        detach(t14);
        html_tag_1.d();
        detach(t15);
        detach(p4);
        detach(t17);
        detach(h21);
        detach(t19);
        detach(p5);
        detach(t23);
        html_tag_2.d();
        detach(t24);
        detach(p6);
        detach(t26);
        detach(h22);
        detach(t29);
        detach(p7);
        detach(t33);
        html_tag_3.d();
        detach(t34);
        detach(p8);
        detach(t36);
        detach(p9);
        detach(t38);
        detach(ul0);
        detach(t67);
        detach(p10);
        detach(t73);
        detach(ul1);
        detach(t75);
        detach(h23);
        detach(t77);
        detach(html_anchor);
        html_tag_4.d();
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
