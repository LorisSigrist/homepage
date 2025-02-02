import { s as safe_not_equal, n as noop } from "../chunks/scheduler.C1H_TXk1.js";
import { S as SvelteComponent, i as init, d as detach, a as insert_hydration, k as attr, c as claim_element, l as get_svelte_dataset, g as claim_space, m as claim_html_tag, h as element, j as space, H as HtmlTagHydration } from "../chunks/index.DwiInUfm.js";
function create_fragment(ctx) {
  let h1;
  let textContent = `<a href="#reliably-avoiding-theme-flashes">Reliably avoiding Theme Flashes</a>`;
  let t1;
  let blockquote0;
  let textContent_1 = `<p><strong>TLDR: Add a non-deferred <code>script</code> tag at the start of the document and react to the user’s theme preference there</strong></p>`;
  let t5;
  let p1;
  let textContent_2 = `A common issue on sites with theme-toggles is a flash of the wrong theme when the page loads. In the hilariously titled post <a href="https://css-tricks.com/flash-of-inaccurate-color-theme-fart/" rel="noopener noreferrer" target="_blank">Flash of inAccurate coloR Theme (FART)</a>, Chris Coyier coined the term FART to describe this phenomenon. In this post, we will explore the cause of FARTs, and how to avoid them client-side only. Along the way we will be learning about how page-loading works in the browser.`;
  let t9;
  let h20;
  let textContent_3 = `<a href="#diagnosing-the-problem">Diagnosing the Problem</a>`;
  let t11;
  let p2;
  let textContent_4 = `HTML is a streaming format. This is great, since we can display the content of a page before it has fully loaded. Even massive sites like the <a href="https://html.spec.whatwg.org/" rel="noopener noreferrer" target="_blank">HTML Specification</a> with it’s <strong>13MB (!)</strong> of raw HTML can be displayed almost instantly. This is one of the most underrated features of the web.`;
  let t17;
  let p3;
  let textContent_5 = `But this poses a question when running Javascript. If the page has not fully loaded by the time our code runs, how does a selector like <code>document.getElementById</code> behave? Well, it only gets run on the part that has already been loaded.
This is dangerous when trying to hydrate a page, since the elements your code is trying to hydrate might not be there yet. To avoid this, pretty much all sites run their JS <em>after</em> the HTML has been fully recieved and parsed. We used to do this with <a href="https://developer.mozilla.org/en-US/docs/Web/API/Window/DOMContentLoaded_event" rel="noopener noreferrer" target="_blank"><code>DOMContentLoaded</code></a> or by putting our scripts at the bottom of the page, but today we usually use <code>defered</code>, or <code>type=module</code> on the script tag to achieve this.`;
  let t29;
  let p4;
  let textContent_6 = "There is also the additional problem that non-deferred scripts are render-blocking, meaning that the browser will not render anything that comes after them until they have finished running. Loading your frontend framework like this would completely negate the benefits of SSR or prerendering, the behaviour would be identical to pure client-side-rendering.";
  let t31;
  let p5;
  let textContent_7 = "For these reasons pretty much all sites load their JS code in a deferred manner.";
  let t33;
  let p6;
  let textContent_8 = `Unfortunately this causes FARTs. In order to decide which theme we should display, we need to check some sort local persistence. That might be <code>localStorage</code>, <code>IndexedDB</code> or a plain old <code>cookie</code>. Either way, JS needs to run. If our JS runs <em>after</em> the page has been fully parsed, as is the default nowadays, we get a flash of the default theme. You might get lucky and the browser will run your JS between finishing parsing and rendering, but you can’t rely on that.`;
  let t43;
  let h21;
  let textContent_9 = `<a href="#the-solution">The Solution</a>`;
  let t45;
  let p7;
  let textContent_10 = `We need to somehow determine the desired theme before the page gets rendered. The way we do this is by returning the web-development stone age. The primitive <code>&lt;script&gt;</code> tag with no <code>defer</code> or <code>type=&quot;module&quot;</code> attributes will block the page from rendering until it has run. If we put our theme code in such a script we will not get a FART.`;
  let t53;
  let blockquote1;
  let textContent_11 = `<p>Tip: Most projects have a skeleton HTML file somewhere, which is used as a template for all pages. Add the script there.</p>`;
  let t55;
  let html_tag;
  let raw_value = `<pre class="shiki vitesse-dark" style="background-color:#121212;color:#dbd7caee" tabindex="0"><code><span class="line"><span style="color:#666666">&#x3C;!</span><span style="color:#4D9375">DOCTYPE</span><span style="color:#BD976A"> html</span><span style="color:#666666">></span></span>
<span class="line"><span style="color:#666666">&#x3C;</span><span style="color:#4D9375">html</span><span style="color:#666666">></span></span>
<span class="line"><span style="color:#666666">	&#x3C;</span><span style="color:#4D9375">head</span><span style="color:#666666">></span></span>
<span class="line"><span style="color:#DBD7CAEE">		...</span></span>
<span class="line"><span style="color:#666666">		&#x3C;</span><span style="color:#4D9375">script</span><span style="color:#666666">></span></span>
<span class="line"><span style="color:#BD976A">			document</span><span style="color:#666666">.</span><span style="color:#BD976A">documentElement</span></span>
<span class="line"><span style="color:#666666">			.</span><span style="color:#BD976A">classList</span><span style="color:#666666">.</span><span style="color:#80A665">add</span><span style="color:#666666">(</span><span style="color:#BD976A">localStorage</span><span style="color:#666666">.</span><span style="color:#80A665">getItem</span><span style="color:#666666">(</span><span style="color:#C98A7D99">"</span><span style="color:#C98A7D">theme</span><span style="color:#C98A7D99">"</span><span style="color:#666666">)</span><span style="color:#CB7676"> ??</span><span style="color:#C98A7D99"> "</span><span style="color:#C98A7D">light</span><span style="color:#C98A7D99">"</span><span style="color:#666666">)</span></span>
<span class="line"><span style="color:#666666">		&#x3C;/</span><span style="color:#4D9375">script</span><span style="color:#666666">></span></span>
<span class="line"><span style="color:#666666">	&#x3C;/</span><span style="color:#4D9375">head</span><span style="color:#666666">></span></span>
<span class="line"><span style="color:#666666">	&#x3C;</span><span style="color:#4D9375">body</span><span style="color:#666666">></span></span>
<span class="line"><span style="color:#666666">		&#x3C;</span><span style="color:#4D9375">div</span><span style="color:#BD976A"> id</span><span style="color:#666666">=</span><span style="color:#C98A7D99">"</span><span style="color:#C98A7D">app</span><span style="color:#C98A7D99">"</span><span style="color:#666666">></span><span style="color:#DBD7CAEE">...</span><span style="color:#666666">&#x3C;/</span><span style="color:#4D9375">div</span><span style="color:#666666">></span></span>
<span class="line"><span style="color:#666666">	&#x3C;/</span><span style="color:#4D9375">body</span><span style="color:#666666">></span></span>
<span class="line"><span style="color:#666666">&#x3C;/</span><span style="color:#4D9375">html</span><span style="color:#666666">></span></span></code></pre>`;
  let t56;
  let p9;
  let textContent_12 = `Beware though. Since the HTML is not yet fully parsed when this script runs you only have guaranteed access to the elements that come before it, not after it. In the above example we could not safely add a class to the <code>body</code>, only to the <code>html</code> tag. Any elements that come before the script could potentially be displayed before it has run. You also need to account for that. The best place to put the script is usually either in the <code>head</code>, or as the first thing in the <code>body</code>.`;
  let t66;
  let blockquote2;
  let textContent_13 = `<p>Warning: If the theme logic is more complex, it’s tempting to put the JS in a separate file and load it via <code>src</code>. That would require an additional HTTP request, during which the page cannot be rendered. Just inline it.</p>`;
  let t70;
  let p11;
  let textContent_14 = "There is another benefit to this. Elements with css transitions can often look awkward when switching themes, since they take longer than the rest of the page. This is especially noticeable during FARTs. By running the theme-switching code before the page has been rendered this problem is avoided, since the initial render will already be in the correct theme.";
  let t72;
  let h22;
  let textContent_15 = `<a href="#addressing-the-concerns">Addressing the concerns</a>`;
  let t74;
  let p12;
  let textContent_16 = `Some developers will avoid blocking scripts like the plague, since they used to be common sources of performance issues. However, in our case, the page cannot safely be rendered before the code has run, so this is an exception. Understanding <em>why</em> something is considered bad practice is key to knowing when it’s okay to break the rules. Think of it like this: The theme-checking code needs to run anyway, so we might as well run it as early as possible. There is no performance loss.`;
  return {
    c() {
      h1 = element("h1");
      h1.innerHTML = textContent;
      t1 = space();
      blockquote0 = element("blockquote");
      blockquote0.innerHTML = textContent_1;
      t5 = space();
      p1 = element("p");
      p1.innerHTML = textContent_2;
      t9 = space();
      h20 = element("h2");
      h20.innerHTML = textContent_3;
      t11 = space();
      p2 = element("p");
      p2.innerHTML = textContent_4;
      t17 = space();
      p3 = element("p");
      p3.innerHTML = textContent_5;
      t29 = space();
      p4 = element("p");
      p4.textContent = textContent_6;
      t31 = space();
      p5 = element("p");
      p5.textContent = textContent_7;
      t33 = space();
      p6 = element("p");
      p6.innerHTML = textContent_8;
      t43 = space();
      h21 = element("h2");
      h21.innerHTML = textContent_9;
      t45 = space();
      p7 = element("p");
      p7.innerHTML = textContent_10;
      t53 = space();
      blockquote1 = element("blockquote");
      blockquote1.innerHTML = textContent_11;
      t55 = space();
      html_tag = new HtmlTagHydration(false);
      t56 = space();
      p9 = element("p");
      p9.innerHTML = textContent_12;
      t66 = space();
      blockquote2 = element("blockquote");
      blockquote2.innerHTML = textContent_13;
      t70 = space();
      p11 = element("p");
      p11.textContent = textContent_14;
      t72 = space();
      h22 = element("h2");
      h22.innerHTML = textContent_15;
      t74 = space();
      p12 = element("p");
      p12.innerHTML = textContent_16;
      this.h();
    },
    l(nodes) {
      h1 = claim_element(nodes, "H1", { id: true, ["data-svelte-h"]: true });
      if (get_svelte_dataset(h1) !== "svelte-zlnnuw")
        h1.innerHTML = textContent;
      t1 = claim_space(nodes);
      blockquote0 = claim_element(nodes, "BLOCKQUOTE", { ["data-svelte-h"]: true });
      if (get_svelte_dataset(blockquote0) !== "svelte-3lttfb")
        blockquote0.innerHTML = textContent_1;
      t5 = claim_space(nodes);
      p1 = claim_element(nodes, "P", { ["data-svelte-h"]: true });
      if (get_svelte_dataset(p1) !== "svelte-e34hy7")
        p1.innerHTML = textContent_2;
      t9 = claim_space(nodes);
      h20 = claim_element(nodes, "H2", { id: true, ["data-svelte-h"]: true });
      if (get_svelte_dataset(h20) !== "svelte-b2uuaj")
        h20.innerHTML = textContent_3;
      t11 = claim_space(nodes);
      p2 = claim_element(nodes, "P", { ["data-svelte-h"]: true });
      if (get_svelte_dataset(p2) !== "svelte-11smj55")
        p2.innerHTML = textContent_4;
      t17 = claim_space(nodes);
      p3 = claim_element(nodes, "P", { ["data-svelte-h"]: true });
      if (get_svelte_dataset(p3) !== "svelte-1kaf9f8")
        p3.innerHTML = textContent_5;
      t29 = claim_space(nodes);
      p4 = claim_element(nodes, "P", { ["data-svelte-h"]: true });
      if (get_svelte_dataset(p4) !== "svelte-1gzzywg")
        p4.textContent = textContent_6;
      t31 = claim_space(nodes);
      p5 = claim_element(nodes, "P", { ["data-svelte-h"]: true });
      if (get_svelte_dataset(p5) !== "svelte-kxnsll")
        p5.textContent = textContent_7;
      t33 = claim_space(nodes);
      p6 = claim_element(nodes, "P", { ["data-svelte-h"]: true });
      if (get_svelte_dataset(p6) !== "svelte-1pdxkij")
        p6.innerHTML = textContent_8;
      t43 = claim_space(nodes);
      h21 = claim_element(nodes, "H2", { id: true, ["data-svelte-h"]: true });
      if (get_svelte_dataset(h21) !== "svelte-1nn6mce")
        h21.innerHTML = textContent_9;
      t45 = claim_space(nodes);
      p7 = claim_element(nodes, "P", { ["data-svelte-h"]: true });
      if (get_svelte_dataset(p7) !== "svelte-4ldeh")
        p7.innerHTML = textContent_10;
      t53 = claim_space(nodes);
      blockquote1 = claim_element(nodes, "BLOCKQUOTE", { ["data-svelte-h"]: true });
      if (get_svelte_dataset(blockquote1) !== "svelte-lj5gi9")
        blockquote1.innerHTML = textContent_11;
      t55 = claim_space(nodes);
      html_tag = claim_html_tag(nodes, false);
      t56 = claim_space(nodes);
      p9 = claim_element(nodes, "P", { ["data-svelte-h"]: true });
      if (get_svelte_dataset(p9) !== "svelte-cg0sd")
        p9.innerHTML = textContent_12;
      t66 = claim_space(nodes);
      blockquote2 = claim_element(nodes, "BLOCKQUOTE", { ["data-svelte-h"]: true });
      if (get_svelte_dataset(blockquote2) !== "svelte-1tnuzsl")
        blockquote2.innerHTML = textContent_13;
      t70 = claim_space(nodes);
      p11 = claim_element(nodes, "P", { ["data-svelte-h"]: true });
      if (get_svelte_dataset(p11) !== "svelte-1bwmhjq")
        p11.textContent = textContent_14;
      t72 = claim_space(nodes);
      h22 = claim_element(nodes, "H2", { id: true, ["data-svelte-h"]: true });
      if (get_svelte_dataset(h22) !== "svelte-hz2d2g")
        h22.innerHTML = textContent_15;
      t74 = claim_space(nodes);
      p12 = claim_element(nodes, "P", { ["data-svelte-h"]: true });
      if (get_svelte_dataset(p12) !== "svelte-l3p4rp")
        p12.innerHTML = textContent_16;
      this.h();
    },
    h() {
      attr(h1, "id", "reliably-avoiding-theme-flashes");
      attr(h20, "id", "diagnosing-the-problem");
      attr(h21, "id", "the-solution");
      html_tag.a = t56;
      attr(h22, "id", "addressing-the-concerns");
    },
    m(target, anchor) {
      insert_hydration(target, h1, anchor);
      insert_hydration(target, t1, anchor);
      insert_hydration(target, blockquote0, anchor);
      insert_hydration(target, t5, anchor);
      insert_hydration(target, p1, anchor);
      insert_hydration(target, t9, anchor);
      insert_hydration(target, h20, anchor);
      insert_hydration(target, t11, anchor);
      insert_hydration(target, p2, anchor);
      insert_hydration(target, t17, anchor);
      insert_hydration(target, p3, anchor);
      insert_hydration(target, t29, anchor);
      insert_hydration(target, p4, anchor);
      insert_hydration(target, t31, anchor);
      insert_hydration(target, p5, anchor);
      insert_hydration(target, t33, anchor);
      insert_hydration(target, p6, anchor);
      insert_hydration(target, t43, anchor);
      insert_hydration(target, h21, anchor);
      insert_hydration(target, t45, anchor);
      insert_hydration(target, p7, anchor);
      insert_hydration(target, t53, anchor);
      insert_hydration(target, blockquote1, anchor);
      insert_hydration(target, t55, anchor);
      html_tag.m(raw_value, target, anchor);
      insert_hydration(target, t56, anchor);
      insert_hydration(target, p9, anchor);
      insert_hydration(target, t66, anchor);
      insert_hydration(target, blockquote2, anchor);
      insert_hydration(target, t70, anchor);
      insert_hydration(target, p11, anchor);
      insert_hydration(target, t72, anchor);
      insert_hydration(target, h22, anchor);
      insert_hydration(target, t74, anchor);
      insert_hydration(target, p12, anchor);
    },
    p: noop,
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching) {
        detach(h1);
        detach(t1);
        detach(blockquote0);
        detach(t5);
        detach(p1);
        detach(t9);
        detach(h20);
        detach(t11);
        detach(p2);
        detach(t17);
        detach(p3);
        detach(t29);
        detach(p4);
        detach(t31);
        detach(p5);
        detach(t33);
        detach(p6);
        detach(t43);
        detach(h21);
        detach(t45);
        detach(p7);
        detach(t53);
        detach(blockquote1);
        detach(t55);
        html_tag.d();
        detach(t56);
        detach(p9);
        detach(t66);
        detach(blockquote2);
        detach(t70);
        detach(p11);
        detach(t72);
        detach(h22);
        detach(t74);
        detach(p12);
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
