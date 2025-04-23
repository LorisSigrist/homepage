import { s as safe_not_equal, n as noop } from "../chunks/scheduler.6c6_dOpU.js";
import { S as SvelteComponent, i as init, d as detach, a as insert_hydration, k as attr, c as claim_element, l as get_svelte_dataset, g as claim_space, m as claim_html_tag, h as element, j as space, H as HtmlTagHydration } from "../chunks/index.Cr7Iuz5O.js";
function create_fragment(ctx) {
  let h1;
  let textContent = `<a href="#building-an-i18n-library-for-the-modern-web">Building an i18n library for the modern Web</a>`;
  let t1;
  let p0;
  let textContent_1 = `Over the last few years we’ve seen the emergence of “partial hydration” patterns across many frameworks. The idea is that most rendering happens on the server, with only the interactive parts of a page actually shipping code to the client. The client and server <em>cooperate</em> to show a user a site. This idea has come in many iterations, be it React Server Components, Astro Islands, or even HTMX.`;
  let t5;
  let p1;
  let textContent_2 = "This has some interesting implications for i18n libraries.";
  let t7;
  let ul1;
  let textContent_3 = `<li><ol><li>Since the server-rendered and client-rendered parts always share the same language, language state is <em>global</em>. The only way to switch languages is to rerender everything, including the server-rendered parts, which  can only be done by fully reloading the page. Thus, any form of message reactivity or language lazy-loading is useless.</li></ol></li> <li><ol start="2"><li>Most Translations are rendered on the server &amp; don’t depend on client side state</li></ol> <ul><li>On the server, any i18n library really serves as a templating helper, so they should excel at doing that!</li> <li>Since only a minority of messages will include client side state, the bundle shipped by an i18n library should only include those messages and the code they require.</li></ul></li>`;
  let t17;
  let h20;
  let textContent_4 = `<a href="#the-status-quo">The Status Quo</a>`;
  let t19;
  let p2;
  let textContent_5 = `Most i18n libraries are still conceptualised as monoliths that do all the work in the same place. Language Detection, Message Fallbacks, Lazy Loading &amp; so many more features. However, doing all the work in one place usually means doing it <strong>twice</strong>! Once on the server and again on the client. This has resulted in some truly impressive bundle sizes. <code>i18next</code>, one of the most popular i18n libraries needs over 40kB to render a single message. This is after bundling.`;
  let t25;
  let p3;
  let textContent_6 = "Clearly there is a lot of room for improvement.";
  let t27;
  let h21;
  let textContent_7 = `<a href="#a-modern-i18n-library">A modern i18n library</a>`;
  let t29;
  let p4;
  let textContent_8 = "What would an i18n library look like that embraces the cooperation between Server and Client, that’s built for partial hydration?";
  let t31;
  let p5;
  let textContent_9 = `That’s exactly what <a href="https://www.inlang.com" rel="noopener noreferrer" target="_blank">we</a> tried to accomplish with <a href="https://inlang.com/m/gerre34r/library-inlang-paraglideJs" rel="noopener noreferrer" target="_blank">ParaglideJS</a>`;
  let t36;
  let p6;
  let textContent_10 = `Paraglide is a compiler that <em>compiles</em> your messages into JS modules. Each message is it’s own export.`;
  let t40;
  let html_tag;
  let raw_value = `<pre class="shiki vitesse-dark" style="background-color:#121212;color:#dbd7caee" tabindex="0"><code><span class="line"><span style="color:#758575DD">// @filename: paraglide/messages.js</span></span>
<span class="line"><span style="color:#758575DD">/**</span></span>
<span class="line"><span style="color:#758575DD"> * </span><span style="color:#666666">@</span><span style="color:#4D9375">param</span><span style="color:#666666"> &#123;</span><span style="color:#5DA994">&#123; name: string &#125;</span><span style="color:#666666">&#125;</span><span style="color:#BD976A"> params</span></span>
<span class="line"><span style="color:#758575DD"> */</span></span>
<span class="line"><span style="color:#4D9375">export</span><span style="color:#CB7676"> const</span><span style="color:#80A665"> greeting</span><span style="color:#666666"> =</span><span style="color:#666666"> (</span><span style="color:#BD976A">params</span><span style="color:#666666">)</span><span style="color:#666666"> =></span><span style="color:#C98A7D99"> &#96;</span><span style="color:#C98A7D">Hello </span><span style="color:#666666">$&#123;</span><span style="color:#C98A7D">params</span><span style="color:#666666">.</span><span style="color:#C98A7D">name</span><span style="color:#666666">&#125;</span><span style="color:#C98A7D99">&#96;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#4D9375">export</span><span style="color:#CB7676"> const</span><span style="color:#80A665"> my_other_message</span><span style="color:#666666"> =</span><span style="color:#666666"> ()</span><span style="color:#666666"> =></span><span style="color:#C98A7D99"> &#96;</span><span style="color:#C98A7D">My Other Message</span><span style="color:#C98A7D99">&#96;</span></span>
<span class="line"><span style="color:#758575DD">// ...</span></span></code></pre>`;
  let t41;
  let p7;
  let textContent_11 = "This takes advantage of modern tooling.";
  let t43;
  let ol2;
  let textContent_12 = `<li>TypeScript. Messages are fully type-safe, including any parameters they take. This makes Paraglide a joy to use for templating.</li> <li>Modern Build tools remove JS code that isn’t used automatically. Because messages are individual JS exports, they can individually be removed if they aren’t used. This automatically only ships messages that are needed on the client. This results in some <em>tiny</em> bundle-sizes, starting as low as 100 bytes.</li>`;
  let t49;
  let p8;
  let textContent_13 = "We can further take advantage of the cooperation between server and client to skip language detection on the client entirely. Because the server already decided which language to render, the client bundle can just read which language was used from the HTML.";
  let t51;
  let p9;
  let textContent_14 = `Because <a href="https://inlang.com/m/gerre34r/library-inlang-paraglideJs" rel="noopener noreferrer" target="_blank">ParaglideJS</a>is a compiler, fallback messages can be resolved at build time, so no runtime code is needed for that.`;
  let t55;
  let p10;
  let textContent_15 = `So far, this approach is working very well in any partial-hydration setting. However, even in frameworks without partial hydration <a href="https://inlang.com/m/gerre34r/library-inlang-paraglideJs" rel="noopener noreferrer" target="_blank">ParaglideJS</a> can still be useful. It still only ships messages that are used on a given <em>page</em> without you needing to manually split messages into namespaces as you usually would.`;
  let t61;
  let h22;
  let textContent_16 = `<a href="#conclusion">Conclusion</a>`;
  let t63;
  let p11;
  let textContent_17 = `Going forward, scaling <em>down</em> and integration with modern tooling is going to be increasingly important for i18n libraries. <a href="https://inlang.com/m/gerre34r/library-inlang-paraglideJs" rel="noopener noreferrer" target="_blank">ParaglideJS</a> is one attempt at this which can be used <em>today</em>. Clearly there is a lot of room for innovation in this space &amp; we’re interested in how it will develop over the next few months and years.`;
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
      ul1 = element("ul");
      ul1.innerHTML = textContent_3;
      t17 = space();
      h20 = element("h2");
      h20.innerHTML = textContent_4;
      t19 = space();
      p2 = element("p");
      p2.innerHTML = textContent_5;
      t25 = space();
      p3 = element("p");
      p3.textContent = textContent_6;
      t27 = space();
      h21 = element("h2");
      h21.innerHTML = textContent_7;
      t29 = space();
      p4 = element("p");
      p4.textContent = textContent_8;
      t31 = space();
      p5 = element("p");
      p5.innerHTML = textContent_9;
      t36 = space();
      p6 = element("p");
      p6.innerHTML = textContent_10;
      t40 = space();
      html_tag = new HtmlTagHydration(false);
      t41 = space();
      p7 = element("p");
      p7.textContent = textContent_11;
      t43 = space();
      ol2 = element("ol");
      ol2.innerHTML = textContent_12;
      t49 = space();
      p8 = element("p");
      p8.textContent = textContent_13;
      t51 = space();
      p9 = element("p");
      p9.innerHTML = textContent_14;
      t55 = space();
      p10 = element("p");
      p10.innerHTML = textContent_15;
      t61 = space();
      h22 = element("h2");
      h22.innerHTML = textContent_16;
      t63 = space();
      p11 = element("p");
      p11.innerHTML = textContent_17;
      this.h();
    },
    l(nodes) {
      h1 = claim_element(nodes, "H1", { id: true, ["data-svelte-h"]: true });
      if (get_svelte_dataset(h1) !== "svelte-nwsd6t")
        h1.innerHTML = textContent;
      t1 = claim_space(nodes);
      p0 = claim_element(nodes, "P", { ["data-svelte-h"]: true });
      if (get_svelte_dataset(p0) !== "svelte-1c1bczr")
        p0.innerHTML = textContent_1;
      t5 = claim_space(nodes);
      p1 = claim_element(nodes, "P", { ["data-svelte-h"]: true });
      if (get_svelte_dataset(p1) !== "svelte-j92q2m")
        p1.textContent = textContent_2;
      t7 = claim_space(nodes);
      ul1 = claim_element(nodes, "UL", { ["data-svelte-h"]: true });
      if (get_svelte_dataset(ul1) !== "svelte-1b02cmv")
        ul1.innerHTML = textContent_3;
      t17 = claim_space(nodes);
      h20 = claim_element(nodes, "H2", { id: true, ["data-svelte-h"]: true });
      if (get_svelte_dataset(h20) !== "svelte-1uw3kpc")
        h20.innerHTML = textContent_4;
      t19 = claim_space(nodes);
      p2 = claim_element(nodes, "P", { ["data-svelte-h"]: true });
      if (get_svelte_dataset(p2) !== "svelte-8g4jzw")
        p2.innerHTML = textContent_5;
      t25 = claim_space(nodes);
      p3 = claim_element(nodes, "P", { ["data-svelte-h"]: true });
      if (get_svelte_dataset(p3) !== "svelte-ia1wab")
        p3.textContent = textContent_6;
      t27 = claim_space(nodes);
      h21 = claim_element(nodes, "H2", { id: true, ["data-svelte-h"]: true });
      if (get_svelte_dataset(h21) !== "svelte-vrr57j")
        h21.innerHTML = textContent_7;
      t29 = claim_space(nodes);
      p4 = claim_element(nodes, "P", { ["data-svelte-h"]: true });
      if (get_svelte_dataset(p4) !== "svelte-9lzziv")
        p4.textContent = textContent_8;
      t31 = claim_space(nodes);
      p5 = claim_element(nodes, "P", { ["data-svelte-h"]: true });
      if (get_svelte_dataset(p5) !== "svelte-j89qxe")
        p5.innerHTML = textContent_9;
      t36 = claim_space(nodes);
      p6 = claim_element(nodes, "P", { ["data-svelte-h"]: true });
      if (get_svelte_dataset(p6) !== "svelte-ft7ejr")
        p6.innerHTML = textContent_10;
      t40 = claim_space(nodes);
      html_tag = claim_html_tag(nodes, false);
      t41 = claim_space(nodes);
      p7 = claim_element(nodes, "P", { ["data-svelte-h"]: true });
      if (get_svelte_dataset(p7) !== "svelte-1mu4d2v")
        p7.textContent = textContent_11;
      t43 = claim_space(nodes);
      ol2 = claim_element(nodes, "OL", { ["data-svelte-h"]: true });
      if (get_svelte_dataset(ol2) !== "svelte-1gandop")
        ol2.innerHTML = textContent_12;
      t49 = claim_space(nodes);
      p8 = claim_element(nodes, "P", { ["data-svelte-h"]: true });
      if (get_svelte_dataset(p8) !== "svelte-fcnch1")
        p8.textContent = textContent_13;
      t51 = claim_space(nodes);
      p9 = claim_element(nodes, "P", { ["data-svelte-h"]: true });
      if (get_svelte_dataset(p9) !== "svelte-pfgajt")
        p9.innerHTML = textContent_14;
      t55 = claim_space(nodes);
      p10 = claim_element(nodes, "P", { ["data-svelte-h"]: true });
      if (get_svelte_dataset(p10) !== "svelte-1tgratn")
        p10.innerHTML = textContent_15;
      t61 = claim_space(nodes);
      h22 = claim_element(nodes, "H2", { id: true, ["data-svelte-h"]: true });
      if (get_svelte_dataset(h22) !== "svelte-kmpttn")
        h22.innerHTML = textContent_16;
      t63 = claim_space(nodes);
      p11 = claim_element(nodes, "P", { ["data-svelte-h"]: true });
      if (get_svelte_dataset(p11) !== "svelte-kvpqci")
        p11.innerHTML = textContent_17;
      this.h();
    },
    h() {
      attr(h1, "id", "building-an-i18n-library-for-the-modern-web");
      attr(h20, "id", "the-status-quo");
      attr(h21, "id", "a-modern-i18n-library");
      html_tag.a = t41;
      attr(h22, "id", "conclusion");
    },
    m(target, anchor) {
      insert_hydration(target, h1, anchor);
      insert_hydration(target, t1, anchor);
      insert_hydration(target, p0, anchor);
      insert_hydration(target, t5, anchor);
      insert_hydration(target, p1, anchor);
      insert_hydration(target, t7, anchor);
      insert_hydration(target, ul1, anchor);
      insert_hydration(target, t17, anchor);
      insert_hydration(target, h20, anchor);
      insert_hydration(target, t19, anchor);
      insert_hydration(target, p2, anchor);
      insert_hydration(target, t25, anchor);
      insert_hydration(target, p3, anchor);
      insert_hydration(target, t27, anchor);
      insert_hydration(target, h21, anchor);
      insert_hydration(target, t29, anchor);
      insert_hydration(target, p4, anchor);
      insert_hydration(target, t31, anchor);
      insert_hydration(target, p5, anchor);
      insert_hydration(target, t36, anchor);
      insert_hydration(target, p6, anchor);
      insert_hydration(target, t40, anchor);
      html_tag.m(raw_value, target, anchor);
      insert_hydration(target, t41, anchor);
      insert_hydration(target, p7, anchor);
      insert_hydration(target, t43, anchor);
      insert_hydration(target, ol2, anchor);
      insert_hydration(target, t49, anchor);
      insert_hydration(target, p8, anchor);
      insert_hydration(target, t51, anchor);
      insert_hydration(target, p9, anchor);
      insert_hydration(target, t55, anchor);
      insert_hydration(target, p10, anchor);
      insert_hydration(target, t61, anchor);
      insert_hydration(target, h22, anchor);
      insert_hydration(target, t63, anchor);
      insert_hydration(target, p11, anchor);
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
        detach(ul1);
        detach(t17);
        detach(h20);
        detach(t19);
        detach(p2);
        detach(t25);
        detach(p3);
        detach(t27);
        detach(h21);
        detach(t29);
        detach(p4);
        detach(t31);
        detach(p5);
        detach(t36);
        detach(p6);
        detach(t40);
        html_tag.d();
        detach(t41);
        detach(p7);
        detach(t43);
        detach(ol2);
        detach(t49);
        detach(p8);
        detach(t51);
        detach(p9);
        detach(t55);
        detach(p10);
        detach(t61);
        detach(h22);
        detach(t63);
        detach(p11);
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
