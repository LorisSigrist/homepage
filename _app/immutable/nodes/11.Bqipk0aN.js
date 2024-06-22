import { s as safe_not_equal, n as noop } from "../chunks/scheduler.DwkGEAYb.js";
import { S as SvelteComponent, i as init, e as element, s as space, c as claim_element, k as get_svelte_dataset, f as claim_space, m as attr, g as insert_hydration, d as detach } from "../chunks/index.BoYP9eQs.js";
function create_fragment(ctx) {
  let h1;
  let textContent = `<a href="#ive-started-taking-notes">I’ve Started Taking Notes</a>`;
  let t1;
  let p0;
  let textContent_1 = "I have always had a personality that gets sucked in very easily. This is great for learning things, but it can be dangerous. With the endless recommendation algorithms always throwing more stuff at you it’s very easy to waste your time. I used to frequently step away from watching YouTube feeling unsatisfied with how I spent my time.";
  let t3;
  let p1;
  let textContent_2 = "A habit that has helped me a lot is to always take notes when I’m watching something. The goal isn’t to learn or study, just to stay present. This forces me to make the concious choice about continuing to watch. If I struggle to write anything down, I should probably do something else.";
  let t5;
  let p2;
  let textContent_3 = `It takes surprisingly little discipline to do this. It’s actually infuriating to watch something with a notepad open, but without anything worth writing down happening. You will <em>want</em> to stop watching &amp; find something else.`;
  let t9;
  let p3;
  let textContent_4 = "This habit hasn’t reduced the time I spend watching stuff, but it has lead me to watch stuff that I find more satisfying. It’s amazing how much high quality stuff there is out there about interesting topics. Beneath all the slop there is stuff that’s worth your time. You just need to force yourself to find it. Taking notes has helped me do that.";
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
      p2 = element("p");
      p2.innerHTML = textContent_3;
      t9 = space();
      p3 = element("p");
      p3.textContent = textContent_4;
      this.h();
    },
    l(nodes) {
      h1 = claim_element(nodes, "H1", { id: true, ["data-svelte-h"]: true });
      if (get_svelte_dataset(h1) !== "svelte-1s44yrh")
        h1.innerHTML = textContent;
      t1 = claim_space(nodes);
      p0 = claim_element(nodes, "P", { ["data-svelte-h"]: true });
      if (get_svelte_dataset(p0) !== "svelte-pdribo")
        p0.textContent = textContent_1;
      t3 = claim_space(nodes);
      p1 = claim_element(nodes, "P", { ["data-svelte-h"]: true });
      if (get_svelte_dataset(p1) !== "svelte-m63s8a")
        p1.textContent = textContent_2;
      t5 = claim_space(nodes);
      p2 = claim_element(nodes, "P", { ["data-svelte-h"]: true });
      if (get_svelte_dataset(p2) !== "svelte-11mpnjp")
        p2.innerHTML = textContent_3;
      t9 = claim_space(nodes);
      p3 = claim_element(nodes, "P", { ["data-svelte-h"]: true });
      if (get_svelte_dataset(p3) !== "svelte-1ni7o07")
        p3.textContent = textContent_4;
      this.h();
    },
    h() {
      attr(h1, "id", "ive-started-taking-notes");
    },
    m(target, anchor) {
      insert_hydration(target, h1, anchor);
      insert_hydration(target, t1, anchor);
      insert_hydration(target, p0, anchor);
      insert_hydration(target, t3, anchor);
      insert_hydration(target, p1, anchor);
      insert_hydration(target, t5, anchor);
      insert_hydration(target, p2, anchor);
      insert_hydration(target, t9, anchor);
      insert_hydration(target, p3, anchor);
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
        detach(p2);
        detach(t9);
        detach(p3);
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
