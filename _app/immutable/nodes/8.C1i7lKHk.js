import { s as safe_not_equal, n as noop } from "../chunks/scheduler.6c6_dOpU.js";
import { S as SvelteComponent, i as init, d as detach, a as insert_hydration, k as attr, c as claim_element, l as get_svelte_dataset, g as claim_space, m as claim_html_tag, h as element, j as space, H as HtmlTagHydration } from "../chunks/index.Cr7Iuz5O.js";
function create_fragment(ctx) {
  let h1;
  let textContent = `<a href="#assertions-in-javascript">Assertions in JavaScript</a>`;
  let t1;
  let p0;
  let textContent_1 = "Assertions are a great way of catching errors during development. Since they’re inlined with your code they’re much cheaper to write than unit tests, while doing a better job of acting as documentation. I like to think of them as comments that actually enfore what they’re saying.";
  let t3;
  let html_tag;
  let raw_value = `<pre class="shiki vitesse-dark" style="background-color:#121212;color:#dbd7caee" tabindex="0"><code><span class="line"><span style="color:#CB7676">const</span><span style="color:#BD976A"> value</span><span style="color:#666666"> =</span><span style="color:#BD976A"> values</span><span style="color:#666666">[</span><span style="color:#BD976A">i</span><span style="color:#666666">]</span><span style="color:#CB7676">!</span><span style="color:#666666">;</span></span>
<span class="line"><span style="color:#80A665">assert</span><span style="color:#666666">(</span><span style="color:#BD976A">value</span><span style="color:#CB7676"> !==</span><span style="color:#CB7676"> undefined</span><span style="color:#666666">,</span><span style="color:#C98A7D99"> &#96;</span><span style="color:#C98A7D">values[</span><span style="color:#666666">$&#123;</span><span style="color:#C98A7D">i</span><span style="color:#666666">&#125;</span><span style="color:#C98A7D">] must be defined</span><span style="color:#C98A7D99">&#96;</span><span style="color:#666666">)</span><span style="color:#DBD7CAEE"> </span></span></code></pre>`;
  let t4;
  let p1;
  let textContent_2 = `Many languages have first party assertions, but JS doesn’t. The closest thing is the <a href="https://nodejs.org/api/assert.html#assertvalue-message" rel="noopener noreferrer" target="_blank"><code>node:assert</code></a> module, which isn’t available in browsers.`;
  let t8;
  let p2;
  let textContent_3 = "There are some additional complexities surrounding assertions with the JS ecosystem specifically.";
  let t10;
  let ol0;
  let textContent_4 = `<li>Code is often bundle-size constrained. Adding assertions everywhere would bloat bundles.</li> <li>JS projects often use a lot of libraries. Consumers of libraries should get the final say about what happens if an assertion in a library fails (fatal/log/ignore).</li>`;
  let t14;
  let p3;
  let textContent_5 = "Ideally we would want assertions that:";
  let t16;
  let ol1;
  let textContent_6 = `<li>Run in every JS environment</li> <li>Can automatically be stripped from client side bundles to avoid bloat</li> <li>Are non-fatal by default &amp; can be made fatal by the final consumer</li>`;
  let t22;
  let p4;
  let textContent_7 = `I’ve found that <a href="https://developer.mozilla.org/en-US/docs/Web/API/console/assert_static" rel="noopener noreferrer" target="_blank"><code>console.assert</code></a> meets these criteria really well. It is universally supported, non-fatal by default, and easy for build tools to remove. Here is what I’ve been doing:`;
  let t26;
  let ol2;
  let textContent_8 = `<li>Add <code>console.assert</code> calls liberally througout my code</li> <li>If I’m writing a library I do <em>not</em> strip out assertions before publishing</li> <li>If I’m writing an app I use EsBuild’s <a href="https://esbuild.github.io/api/#drop" rel="noopener noreferrer" target="_blank"><code>drop</code></a> option to remove<code>console.assert</code> calls from client builds. In vite this can be done via the <code>esbuild</code> option. I don’t remove assertions from the server-side build.</li> <li>I monkey-patch <code>console.assert</code> to be fatal in server-side code.</li>`;
  let t46;
  let p5;
  let textContent_9 = "So far this has been working well for me";
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
      p1.innerHTML = textContent_2;
      t8 = space();
      p2 = element("p");
      p2.textContent = textContent_3;
      t10 = space();
      ol0 = element("ol");
      ol0.innerHTML = textContent_4;
      t14 = space();
      p3 = element("p");
      p3.textContent = textContent_5;
      t16 = space();
      ol1 = element("ol");
      ol1.innerHTML = textContent_6;
      t22 = space();
      p4 = element("p");
      p4.innerHTML = textContent_7;
      t26 = space();
      ol2 = element("ol");
      ol2.innerHTML = textContent_8;
      t46 = space();
      p5 = element("p");
      p5.textContent = textContent_9;
      this.h();
    },
    l(nodes) {
      h1 = claim_element(nodes, "H1", { id: true, ["data-svelte-h"]: true });
      if (get_svelte_dataset(h1) !== "svelte-sjf74d")
        h1.innerHTML = textContent;
      t1 = claim_space(nodes);
      p0 = claim_element(nodes, "P", { ["data-svelte-h"]: true });
      if (get_svelte_dataset(p0) !== "svelte-iaka8")
        p0.textContent = textContent_1;
      t3 = claim_space(nodes);
      html_tag = claim_html_tag(nodes, false);
      t4 = claim_space(nodes);
      p1 = claim_element(nodes, "P", { ["data-svelte-h"]: true });
      if (get_svelte_dataset(p1) !== "svelte-sbqhmt")
        p1.innerHTML = textContent_2;
      t8 = claim_space(nodes);
      p2 = claim_element(nodes, "P", { ["data-svelte-h"]: true });
      if (get_svelte_dataset(p2) !== "svelte-11qvhuo")
        p2.textContent = textContent_3;
      t10 = claim_space(nodes);
      ol0 = claim_element(nodes, "OL", { ["data-svelte-h"]: true });
      if (get_svelte_dataset(ol0) !== "svelte-snq8w")
        ol0.innerHTML = textContent_4;
      t14 = claim_space(nodes);
      p3 = claim_element(nodes, "P", { ["data-svelte-h"]: true });
      if (get_svelte_dataset(p3) !== "svelte-zliyqn")
        p3.textContent = textContent_5;
      t16 = claim_space(nodes);
      ol1 = claim_element(nodes, "OL", { ["data-svelte-h"]: true });
      if (get_svelte_dataset(ol1) !== "svelte-15uv488")
        ol1.innerHTML = textContent_6;
      t22 = claim_space(nodes);
      p4 = claim_element(nodes, "P", { ["data-svelte-h"]: true });
      if (get_svelte_dataset(p4) !== "svelte-1rfy2u2")
        p4.innerHTML = textContent_7;
      t26 = claim_space(nodes);
      ol2 = claim_element(nodes, "OL", { ["data-svelte-h"]: true });
      if (get_svelte_dataset(ol2) !== "svelte-y9ck49")
        ol2.innerHTML = textContent_8;
      t46 = claim_space(nodes);
      p5 = claim_element(nodes, "P", { ["data-svelte-h"]: true });
      if (get_svelte_dataset(p5) !== "svelte-1rbcrtr")
        p5.textContent = textContent_9;
      this.h();
    },
    h() {
      attr(h1, "id", "assertions-in-javascript");
      html_tag.a = t4;
    },
    m(target, anchor) {
      insert_hydration(target, h1, anchor);
      insert_hydration(target, t1, anchor);
      insert_hydration(target, p0, anchor);
      insert_hydration(target, t3, anchor);
      html_tag.m(raw_value, target, anchor);
      insert_hydration(target, t4, anchor);
      insert_hydration(target, p1, anchor);
      insert_hydration(target, t8, anchor);
      insert_hydration(target, p2, anchor);
      insert_hydration(target, t10, anchor);
      insert_hydration(target, ol0, anchor);
      insert_hydration(target, t14, anchor);
      insert_hydration(target, p3, anchor);
      insert_hydration(target, t16, anchor);
      insert_hydration(target, ol1, anchor);
      insert_hydration(target, t22, anchor);
      insert_hydration(target, p4, anchor);
      insert_hydration(target, t26, anchor);
      insert_hydration(target, ol2, anchor);
      insert_hydration(target, t46, anchor);
      insert_hydration(target, p5, anchor);
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
        detach(t8);
        detach(p2);
        detach(t10);
        detach(ol0);
        detach(t14);
        detach(p3);
        detach(t16);
        detach(ol1);
        detach(t22);
        detach(p4);
        detach(t26);
        detach(ol2);
        detach(t46);
        detach(p5);
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
