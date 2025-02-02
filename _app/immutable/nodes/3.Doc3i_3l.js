import { s as safe_not_equal, a as create_slot, u as update_slot_base, g as get_all_dirty_from_scope, b as get_slot_changes } from "../chunks/scheduler.C1H_TXk1.js";
import { S as SvelteComponent, i as init, d as detach, o as transition_out, p as transition_in, a as insert_hydration, r as listen, k as attr, c as claim_element, e as children, g as claim_space, h as element, j as space } from "../chunks/index.DwiInUfm.js";
function create_fragment(ctx) {
  let article;
  let t;
  let div;
  let current;
  let mounted;
  let dispose;
  const default_slot_template = (
    /*#slots*/
    ctx[1].default
  );
  const default_slot = create_slot(
    default_slot_template,
    ctx,
    /*$$scope*/
    ctx[0],
    null
  );
  return {
    c() {
      article = element("article");
      if (default_slot)
        default_slot.c();
      t = space();
      div = element("div");
      this.h();
    },
    l(nodes) {
      article = claim_element(nodes, "ARTICLE", { class: true });
      var article_nodes = children(article);
      if (default_slot)
        default_slot.l(article_nodes);
      article_nodes.forEach(detach);
      t = claim_space(nodes);
      div = claim_element(nodes, "DIV", { class: true });
      children(div).forEach(detach);
      this.h();
    },
    h() {
      attr(article, "class", "prose max-w-[70ch] prose-slate dark:prose-invert container mx-auto px-4 my-8 print:m-0 print:p-0 print:w-100");
      attr(div, "class", "progress-bar h-3 bg-blue-700 svelte-co5fg3");
    },
    m(target, anchor) {
      insert_hydration(target, article, anchor);
      if (default_slot) {
        default_slot.m(article, null);
      }
      insert_hydration(target, t, anchor);
      insert_hydration(target, div, anchor);
      current = true;
      if (!mounted) {
        dispose = listen(article, "click", handleProseClick);
        mounted = true;
      }
    },
    p(ctx2, [dirty]) {
      if (default_slot) {
        if (default_slot.p && (!current || dirty & /*$$scope*/
        1)) {
          update_slot_base(
            default_slot,
            default_slot_template,
            ctx2,
            /*$$scope*/
            ctx2[0],
            !current ? get_all_dirty_from_scope(
              /*$$scope*/
              ctx2[0]
            ) : get_slot_changes(
              default_slot_template,
              /*$$scope*/
              ctx2[0],
              dirty,
              null
            ),
            null
          );
        }
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(default_slot, local);
      current = true;
    },
    o(local) {
      transition_out(default_slot, local);
      current = false;
    },
    d(detaching) {
      if (detaching) {
        detach(article);
        detach(t);
        detach(div);
      }
      if (default_slot)
        default_slot.d(detaching);
      mounted = false;
      dispose();
    }
  };
}
async function handleProseClick(e) {
  if (e.target instanceof HTMLAnchorElement && e.target.parentElement instanceof HTMLHeadingElement) {
    await navigator.clipboard.writeText(e.target.href);
  }
}
function instance($$self, $$props, $$invalidate) {
  let { $$slots: slots = {}, $$scope } = $$props;
  $$self.$$set = ($$props2) => {
    if ("$$scope" in $$props2)
      $$invalidate(0, $$scope = $$props2.$$scope);
  };
  return [$$scope, slots];
}
class Layout extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance, create_fragment, safe_not_equal, {});
  }
}
export {
  Layout as component
};
