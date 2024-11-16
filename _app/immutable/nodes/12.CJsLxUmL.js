import { s as safe_not_equal, n as noop } from "../chunks/scheduler.DhO_7JC-.js";
import { S as SvelteComponent, i as init, d as detach, a as insert_hydration, k as attr, c as claim_element, l as get_svelte_dataset, g as claim_space, m as claim_html_tag, h as element, j as space, H as HtmlTagHydration } from "../chunks/index.BSC7__lV.js";
function create_fragment(ctx) {
  let h1;
  let textContent = `<a href="#a-neat-pattern-for-melt-ui">A neat pattern for Melt UI</a>`;
  let t1;
  let p0;
  let textContent_1 = `While working with Melt UI, I’ve stumbled upon a pattern that has been quite handy several times. Sharing stuff from the same builder between components using the <code>let:</code> directive. Here is an example:`;
  let t5;
  let p1;
  let textContent_2 = "I often find myself in the need for a generic Tooltip component, one where the Trigger is some outside object. Since I use Melt UI for my projects anyway, I really want to use it’s Tooltip builder. However, it’s not immediately obvious how you can do that. Melt UI’s docs always have one component that fully encapsulates all the behavior.";
  let t7;
  let p2;
  let textContent_3 = `But it’s actually quite doable thanks to the <code>let:</code> directive. You can use it to pass the Tooltip’s <code>trigger</code> prop to the outside world. Ideally this would be as simple as:`;
  let t13;
  let html_tag;
  let raw0_value = `<pre class="shiki vitesse-dark" style="background-color:#121212;color:#dbd7caee" tabindex="0"><code><span class="line"><span style="color:#758575DD">&#x3C;!--Tooltip.svelte--></span></span>
<span class="line"><span style="color:#666666">&#x3C;</span><span style="color:#4D9375">script</span><span style="color:#666666">></span></span>
<span class="line"><span style="color:#4D9375">    import</span><span style="color:#666666"> &#123;</span><span style="color:#BD976A"> createTooltip</span><span style="color:#666666"> &#125;</span><span style="color:#4D9375"> from</span><span style="color:#C98A7D99"> '</span><span style="color:#C98A7D">@melt-ui/svelte</span><span style="color:#C98A7D99">'</span><span style="color:#666666">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#CB7676">    const</span><span style="color:#666666"> &#123;</span></span>
<span class="line"><span style="color:#BD976A">    elements</span><span style="color:#666666">:</span><span style="color:#666666"> &#123;</span><span style="color:#BD976A"> trigger</span><span style="color:#666666">,</span><span style="color:#BD976A"> content</span><span style="color:#666666">,</span><span style="color:#BD976A"> arrow</span><span style="color:#666666"> &#125;,</span></span>
<span class="line"><span style="color:#BD976A">    states</span><span style="color:#666666">:</span><span style="color:#666666"> &#123;</span><span style="color:#BD976A"> open</span><span style="color:#666666"> &#125;,</span></span>
<span class="line"><span style="color:#666666">  &#125;</span><span style="color:#666666"> =</span><span style="color:#80A665"> createTooltip</span><span style="color:#666666">();</span></span>
<span class="line"><span style="color:#666666">&#x3C;/</span><span style="color:#4D9375">script</span><span style="color:#666666">></span></span>
<span class="line"></span>
<span class="line"><span style="color:#666666">&#x3C;</span><span style="color:#4D9375">slot</span><span style="color:#BD976A"> &#123;trigger&#125;</span><span style="color:#666666"> /></span></span>
<span class="line"></span>
<span class="line"><span style="color:#666666">&#123;#</span><span style="color:#4D9375">if</span><span style="color:#BD976A"> open</span><span style="color:#666666">&#125;</span></span>
<span class="line"><span style="color:#DBD7CAEE">  ...</span></span>
<span class="line"><span style="color:#666666">&#123;/</span><span style="color:#4D9375">if</span><span style="color:#666666">&#125;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#758575DD">&#x3C;!--App.svelte--></span></span>
<span class="line"><span style="color:#666666">&#x3C;</span><span style="color:#4D9375">script</span><span style="color:#666666">></span></span>
<span class="line"><span style="color:#4D9375">    import</span><span style="color:#BD976A"> Tooltip</span><span style="color:#4D9375"> from</span><span style="color:#C98A7D99"> '</span><span style="color:#C98A7D">./Tooltip.svelte</span><span style="color:#C98A7D99">'</span><span style="color:#666666">;</span></span>
<span class="line"><span style="color:#666666">&#x3C;/</span><span style="color:#4D9375">script</span><span style="color:#666666">></span></span>
<span class="line"></span>
<span class="line"><span style="color:#666666">&#x3C;</span><span style="color:#B8A965">Tooltip</span><span style="color:#CB7676"> let</span><span style="color:#666666">:</span><span style="color:#BD976A">trigger</span><span style="color:#666666">></span></span>
<span class="line"><span style="color:#666666">  &#x3C;</span><span style="color:#4D9375">button</span><span style="color:#4D9375"> use</span><span style="color:#666666">:</span><span style="color:#BD976A">trigger</span><span style="color:#BD976A"> &#123;</span><span style="color:#666666">...</span><span style="color:#BD976A">$trigger&#125;</span><span style="color:#666666">></span><span style="color:#DBD7CAEE">Do Something</span><span style="color:#666666">&#x3C;/</span><span style="color:#4D9375">button</span><span style="color:#666666">></span></span>
<span class="line"><span style="color:#666666">&#x3C;/</span><span style="color:#B8A965">Tooltip</span><span style="color:#666666">></span></span></code></pre>`;
  let t14;
  let p3;
  let textContent_4 = `Unfortunately, this doesn’t work as of now. The problem is the <code>{...$trigger}</code> part. It’s not possible to bind to a store unless it comes from the component’s script tag. The workaround here is to bind the store inside the <code>Tooltip</code> component and pass it to the <code>trigger</code> slot.`;
  let t22;
  let html_tag_1;
  let raw1_value = `<pre class="shiki vitesse-dark" style="background-color:#121212;color:#dbd7caee" tabindex="0"><code><span class="line"><span style="color:#758575DD">&#x3C;!--Tooltip.svelte--></span></span>
<span class="line"><span style="color:#666666">&#x3C;</span><span style="color:#4D9375">script</span><span style="color:#666666">></span></span>
<span class="line"><span style="color:#4D9375">    import</span><span style="color:#666666"> &#123;</span><span style="color:#BD976A"> createTooltip</span><span style="color:#666666"> &#125;</span><span style="color:#4D9375"> from</span><span style="color:#C98A7D99"> '</span><span style="color:#C98A7D">@melt-ui/svelte</span><span style="color:#C98A7D99">'</span><span style="color:#666666">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#CB7676">    const</span><span style="color:#666666"> &#123;</span></span>
<span class="line"><span style="color:#BD976A">    elements</span><span style="color:#666666">:</span><span style="color:#666666"> &#123;</span><span style="color:#BD976A"> trigger</span><span style="color:#666666">,</span><span style="color:#BD976A"> content</span><span style="color:#666666">,</span><span style="color:#BD976A"> arrow</span><span style="color:#666666"> &#125;,</span></span>
<span class="line"><span style="color:#BD976A">    states</span><span style="color:#666666">:</span><span style="color:#666666"> &#123;</span><span style="color:#BD976A"> open</span><span style="color:#666666"> &#125;,</span></span>
<span class="line"><span style="color:#666666">  &#125;</span><span style="color:#666666"> =</span><span style="color:#80A665"> createTooltip</span><span style="color:#666666">();</span></span>
<span class="line"><span style="color:#666666">&#x3C;/</span><span style="color:#4D9375">script</span><span style="color:#666666">></span></span>
<span class="line"></span>
<span class="line"><span style="color:#666666">&#x3C;</span><span style="color:#4D9375">slot</span><span style="color:#BD976A"> triggerAction</span><span style="color:#666666">=&#123;</span><span style="color:#BD976A">trigger</span><span style="color:#666666">&#125;</span><span style="color:#BD976A"> triggerProps</span><span style="color:#666666">=&#123;$</span><span style="color:#BD976A">trigger</span><span style="color:#666666">&#125;</span><span style="color:#666666"> /></span></span>
<span class="line"></span>
<span class="line"><span style="color:#666666">&#123;#</span><span style="color:#4D9375">if</span><span style="color:#BD976A"> open</span><span style="color:#666666">&#125;</span></span>
<span class="line"><span style="color:#DBD7CAEE">  ...</span></span>
<span class="line"><span style="color:#666666">&#123;/</span><span style="color:#4D9375">if</span><span style="color:#666666">&#125;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#758575DD">&#x3C;!--App.svelte--></span></span>
<span class="line"><span style="color:#666666">&#x3C;</span><span style="color:#4D9375">script</span><span style="color:#666666">></span></span>
<span class="line"><span style="color:#4D9375">    import</span><span style="color:#BD976A"> Tooltip</span><span style="color:#4D9375"> from</span><span style="color:#C98A7D99"> '</span><span style="color:#C98A7D">./Tooltip.svelte</span><span style="color:#C98A7D99">'</span><span style="color:#666666">;</span></span>
<span class="line"><span style="color:#666666">&#x3C;/</span><span style="color:#4D9375">script</span><span style="color:#666666">></span></span>
<span class="line"></span>
<span class="line"><span style="color:#666666">&#x3C;</span><span style="color:#B8A965">Tooltip</span><span style="color:#CB7676"> let</span><span style="color:#666666">:</span><span style="color:#BD976A">triggerAction</span><span style="color:#CB7676"> let</span><span style="color:#666666">:</span><span style="color:#BD976A">triggerProps</span><span style="color:#666666">></span></span>
<span class="line"><span style="color:#666666">  &#x3C;</span><span style="color:#4D9375">button</span><span style="color:#4D9375"> use</span><span style="color:#666666">:</span><span style="color:#BD976A">triggerAction</span><span style="color:#BD976A"> &#123;</span><span style="color:#666666">...</span><span style="color:#BD976A">triggerProps&#125;</span><span style="color:#666666">></span><span style="color:#DBD7CAEE">Do Something</span><span style="color:#666666">&#x3C;/</span><span style="color:#4D9375">button</span><span style="color:#666666">></span></span>
<span class="line"><span style="color:#666666">&#x3C;/</span><span style="color:#B8A965">Tooltip</span><span style="color:#666666">></span></span></code></pre>`;
  let t23;
  let p4;
  let textContent_5 = "That’s it.";
  let t25;
  let p5;
  let textContent_6 = "This pattern is has been useful to me a couple times so I wanted to share.";
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
      p2 = element("p");
      p2.innerHTML = textContent_3;
      t13 = space();
      html_tag = new HtmlTagHydration(false);
      t14 = space();
      p3 = element("p");
      p3.innerHTML = textContent_4;
      t22 = space();
      html_tag_1 = new HtmlTagHydration(false);
      t23 = space();
      p4 = element("p");
      p4.textContent = textContent_5;
      t25 = space();
      p5 = element("p");
      p5.textContent = textContent_6;
      this.h();
    },
    l(nodes) {
      h1 = claim_element(nodes, "H1", { id: true, ["data-svelte-h"]: true });
      if (get_svelte_dataset(h1) !== "svelte-15fqgkm")
        h1.innerHTML = textContent;
      t1 = claim_space(nodes);
      p0 = claim_element(nodes, "P", { ["data-svelte-h"]: true });
      if (get_svelte_dataset(p0) !== "svelte-we6q8g")
        p0.innerHTML = textContent_1;
      t5 = claim_space(nodes);
      p1 = claim_element(nodes, "P", { ["data-svelte-h"]: true });
      if (get_svelte_dataset(p1) !== "svelte-sm233c")
        p1.textContent = textContent_2;
      t7 = claim_space(nodes);
      p2 = claim_element(nodes, "P", { ["data-svelte-h"]: true });
      if (get_svelte_dataset(p2) !== "svelte-fb05oo")
        p2.innerHTML = textContent_3;
      t13 = claim_space(nodes);
      html_tag = claim_html_tag(nodes, false);
      t14 = claim_space(nodes);
      p3 = claim_element(nodes, "P", { ["data-svelte-h"]: true });
      if (get_svelte_dataset(p3) !== "svelte-qcbyx")
        p3.innerHTML = textContent_4;
      t22 = claim_space(nodes);
      html_tag_1 = claim_html_tag(nodes, false);
      t23 = claim_space(nodes);
      p4 = claim_element(nodes, "P", { ["data-svelte-h"]: true });
      if (get_svelte_dataset(p4) !== "svelte-jwgito")
        p4.textContent = textContent_5;
      t25 = claim_space(nodes);
      p5 = claim_element(nodes, "P", { ["data-svelte-h"]: true });
      if (get_svelte_dataset(p5) !== "svelte-1hcs8n2")
        p5.textContent = textContent_6;
      this.h();
    },
    h() {
      attr(h1, "id", "a-neat-pattern-for-melt-ui");
      html_tag.a = t14;
      html_tag_1.a = t23;
    },
    m(target, anchor) {
      insert_hydration(target, h1, anchor);
      insert_hydration(target, t1, anchor);
      insert_hydration(target, p0, anchor);
      insert_hydration(target, t5, anchor);
      insert_hydration(target, p1, anchor);
      insert_hydration(target, t7, anchor);
      insert_hydration(target, p2, anchor);
      insert_hydration(target, t13, anchor);
      html_tag.m(raw0_value, target, anchor);
      insert_hydration(target, t14, anchor);
      insert_hydration(target, p3, anchor);
      insert_hydration(target, t22, anchor);
      html_tag_1.m(raw1_value, target, anchor);
      insert_hydration(target, t23, anchor);
      insert_hydration(target, p4, anchor);
      insert_hydration(target, t25, anchor);
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
        detach(t5);
        detach(p1);
        detach(t7);
        detach(p2);
        detach(t13);
        html_tag.d();
        detach(t14);
        detach(p3);
        detach(t22);
        html_tag_1.d();
        detach(t23);
        detach(p4);
        detach(t25);
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
