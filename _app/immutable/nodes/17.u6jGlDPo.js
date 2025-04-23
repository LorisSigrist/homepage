import { s as safe_not_equal, n as noop } from "../chunks/scheduler.6c6_dOpU.js";
import { S as SvelteComponent, i as init, d as detach, a as insert_hydration, k as attr, c as claim_element, l as get_svelte_dataset, g as claim_space, m as claim_html_tag, h as element, j as space, H as HtmlTagHydration } from "../chunks/index.Cr7Iuz5O.js";
function create_fragment(ctx) {
  let h1;
  let textContent = `<a href="#the-poor-mans-scheduled-post">The poor man’s scheduled post</a>`;
  let t1;
  let p0;
  let textContent_1 = "While working on this site, I quickly developed the desire to schedule posts. Often I would write a post, and then immediately have another idea for another post. Not wanting to publish them all at once, I would often just save the post as a draft and come back to it later. Having a way to schedule posts would be much more convenient.";
  let t3;
  let p1;
  let textContent_2 = "But, this site is currently (July 2023) hosted on GitHub Pages, which only hosts static sites. This makes it difficult to schedule posts, as there is no server to decide when a post should become available.";
  let t5;
  let h2;
  let textContent_3 = `<a href="#the-solution">The solution</a>`;
  let t7;
  let p2;
  let textContent_4 = "The solution I came up with is quite a brute force one, but it works very well. During the site-build, filter out any posts that have a publish date in the future. Then have a Github Actions cron-job that rebuilds and redeploys the site every day. This will cause the posts to become available on the day they are scheduled to be published.";
  let t9;
  let p3;
  let textContent_5 = `Doing this is quite straight forward. Go into your GitHub Actions workflow file, and add a <code>schedule</code> trigger. Make it run every day at midnight.`;
  let t13;
  let html_tag;
  let raw_value = `<pre class="shiki vitesse-dark" style="background-color:#121212;color:#dbd7caee" tabindex="0"><code><span class="line"><span style="color:#B8A965">name</span><span style="color:#666666">:</span><span style="color:#C98A7D"> Build and Deploy</span></span>
<span class="line"><span style="color:#4D9375">on</span><span style="color:#666666">:</span><span style="color:#DBD7CAEE"> </span></span>
<span class="line"><span style="color:#758575DD">  # The Schedule on which to redeploy the site (every day at midnight)</span></span>
<span class="line"><span style="color:#B8A965">  schedule</span><span style="color:#666666">:</span></span>
<span class="line"><span style="color:#666666">    -</span><span style="color:#B8A965"> cron</span><span style="color:#666666">:</span><span style="color:#C98A7D99">  '</span><span style="color:#C98A7D">0 0 * * *</span><span style="color:#C98A7D99">'</span></span>
<span class="line"></span>
<span class="line"><span style="color:#758575DD">  # Other events to trigger the build and deploy</span></span>
<span class="line"><span style="color:#B8A965">  push</span><span style="color:#666666">:</span></span>
<span class="line"><span style="color:#B8A965">    branches</span><span style="color:#666666">:</span></span>
<span class="line"><span style="color:#666666">      -</span><span style="color:#C98A7D"> main</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B8A965">jobs</span><span style="color:#666666">:</span></span>
<span class="line"><span style="color:#B8A965">  build-and-deploy</span><span style="color:#666666">:</span></span>
<span class="line"><span style="color:#4C9A91">    ...</span><span style="color:#758575DD"> # Your build and deploy steps</span></span></code></pre>`;
  let t14;
  let p4;
  let textContent_6 = `This is very wasteful, but with GitHub’s generous free tier you can easily get away with it. It’s also very reliable. I’ve tested this by building an <a href="https://today.sigrist.dev" rel="noopener noreferrer" target="_blank">experiment</a> that just prerenders the current date every day. It’s been running for a few months now, and it’s never failed.
Thanks to it’s very fast build times, it has used so little of my free minutes that it doesn’t even show up on my usage graph.`;
  let t18;
  let p5;
  let textContent_7 = "The build-time for this site is a lot longer, at almost two minutes, but that’s still only 60 out of the 2000 free minutes per month. I’m willing to pay that price for the convenience of scheduled posts.";
  return {
    c() {
      h1 = element("h1");
      h1.innerHTML = textContent;
      t1 = space();
      p0 = element("p");
      p0.textContent = textContent_1;
      t3 = space();
      p1 = element("p");
      p1.textContent = textContent_2;
      t5 = space();
      h2 = element("h2");
      h2.innerHTML = textContent_3;
      t7 = space();
      p2 = element("p");
      p2.textContent = textContent_4;
      t9 = space();
      p3 = element("p");
      p3.innerHTML = textContent_5;
      t13 = space();
      html_tag = new HtmlTagHydration(false);
      t14 = space();
      p4 = element("p");
      p4.innerHTML = textContent_6;
      t18 = space();
      p5 = element("p");
      p5.textContent = textContent_7;
      this.h();
    },
    l(nodes) {
      h1 = claim_element(nodes, "H1", { id: true, ["data-svelte-h"]: true });
      if (get_svelte_dataset(h1) !== "svelte-9p66gw")
        h1.innerHTML = textContent;
      t1 = claim_space(nodes);
      p0 = claim_element(nodes, "P", { ["data-svelte-h"]: true });
      if (get_svelte_dataset(p0) !== "svelte-1g4chr8")
        p0.textContent = textContent_1;
      t3 = claim_space(nodes);
      p1 = claim_element(nodes, "P", { ["data-svelte-h"]: true });
      if (get_svelte_dataset(p1) !== "svelte-1t7o281")
        p1.textContent = textContent_2;
      t5 = claim_space(nodes);
      h2 = claim_element(nodes, "H2", { id: true, ["data-svelte-h"]: true });
      if (get_svelte_dataset(h2) !== "svelte-1lcav2")
        h2.innerHTML = textContent_3;
      t7 = claim_space(nodes);
      p2 = claim_element(nodes, "P", { ["data-svelte-h"]: true });
      if (get_svelte_dataset(p2) !== "svelte-89pvv2")
        p2.textContent = textContent_4;
      t9 = claim_space(nodes);
      p3 = claim_element(nodes, "P", { ["data-svelte-h"]: true });
      if (get_svelte_dataset(p3) !== "svelte-29252j")
        p3.innerHTML = textContent_5;
      t13 = claim_space(nodes);
      html_tag = claim_html_tag(nodes, false);
      t14 = claim_space(nodes);
      p4 = claim_element(nodes, "P", { ["data-svelte-h"]: true });
      if (get_svelte_dataset(p4) !== "svelte-6cmld4")
        p4.innerHTML = textContent_6;
      t18 = claim_space(nodes);
      p5 = claim_element(nodes, "P", { ["data-svelte-h"]: true });
      if (get_svelte_dataset(p5) !== "svelte-17pw9xo")
        p5.textContent = textContent_7;
      this.h();
    },
    h() {
      attr(h1, "id", "the-poor-mans-scheduled-post");
      attr(h2, "id", "the-solution");
      html_tag.a = t14;
    },
    m(target, anchor) {
      insert_hydration(target, h1, anchor);
      insert_hydration(target, t1, anchor);
      insert_hydration(target, p0, anchor);
      insert_hydration(target, t3, anchor);
      insert_hydration(target, p1, anchor);
      insert_hydration(target, t5, anchor);
      insert_hydration(target, h2, anchor);
      insert_hydration(target, t7, anchor);
      insert_hydration(target, p2, anchor);
      insert_hydration(target, t9, anchor);
      insert_hydration(target, p3, anchor);
      insert_hydration(target, t13, anchor);
      html_tag.m(raw_value, target, anchor);
      insert_hydration(target, t14, anchor);
      insert_hydration(target, p4, anchor);
      insert_hydration(target, t18, anchor);
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
        detach(p1);
        detach(t5);
        detach(h2);
        detach(t7);
        detach(p2);
        detach(t9);
        detach(p3);
        detach(t13);
        html_tag.d();
        detach(t14);
        detach(p4);
        detach(t18);
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
