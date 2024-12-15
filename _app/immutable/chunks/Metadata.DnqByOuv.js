import { s as safe_not_equal, n as noop, c as component_subscribe } from "./scheduler.DwkGEAYb.js";
import { S as SvelteComponent, i as init, e as element, n as empty, q as head_selector, c as claim_element, d as detach, m as attr, h as append_hydration, g as insert_hydration } from "./index.BoYP9eQs.js";
import { p as page } from "./stores.DqTlGixJ.js";
const default_favicon = "" + new URL("../assets/favicon.BtYv9CGA.png", import.meta.url).href;
function create_else_block(ctx) {
  let meta;
  let meta_content_value;
  return {
    c() {
      meta = element("meta");
      this.h();
    },
    l(nodes) {
      meta = claim_element(nodes, "META", { name: true, content: true });
      this.h();
    },
    h() {
      attr(meta, "name", "og:image");
      attr(meta, "content", meta_content_value = "/og/" + encodeURI(
        /*title*/
        ctx[3]
      ) + ".png");
    },
    m(target, anchor) {
      insert_hydration(target, meta, anchor);
    },
    p(ctx2, dirty) {
      if (dirty & /*title*/
      8 && meta_content_value !== (meta_content_value = "/og/" + encodeURI(
        /*title*/
        ctx2[3]
      ) + ".png")) {
        attr(meta, "content", meta_content_value);
      }
    },
    d(detaching) {
      if (detaching) {
        detach(meta);
      }
    }
  };
}
function create_if_block_2(ctx) {
  let meta;
  return {
    c() {
      meta = element("meta");
      this.h();
    },
    l(nodes) {
      meta = claim_element(nodes, "META", { name: true, content: true });
      this.h();
    },
    h() {
      attr(meta, "name", "og:image");
      attr(
        meta,
        "content",
        /*og_image*/
        ctx[1]
      );
    },
    m(target, anchor) {
      insert_hydration(target, meta, anchor);
    },
    p(ctx2, dirty) {
      if (dirty & /*og_image*/
      2) {
        attr(
          meta,
          "content",
          /*og_image*/
          ctx2[1]
        );
      }
    },
    d(detaching) {
      if (detaching) {
        detach(meta);
      }
    }
  };
}
function create_if_block_1(ctx) {
  let meta;
  let meta_content_value;
  return {
    c() {
      meta = element("meta");
      this.h();
    },
    l(nodes) {
      meta = claim_element(nodes, "META", { name: true, content: true });
      this.h();
    },
    h() {
      attr(meta, "name", "description");
      attr(meta, "content", meta_content_value = /*$page*/
      ctx[2].data.description);
    },
    m(target, anchor) {
      insert_hydration(target, meta, anchor);
    },
    p(ctx2, dirty) {
      if (dirty & /*$page*/
      4 && meta_content_value !== (meta_content_value = /*$page*/
      ctx2[2].data.description)) {
        attr(meta, "content", meta_content_value);
      }
    },
    d(detaching) {
      if (detaching) {
        detach(meta);
      }
    }
  };
}
function create_if_block(ctx) {
  let meta;
  let meta_content_value;
  return {
    c() {
      meta = element("meta");
      this.h();
    },
    l(nodes) {
      meta = claim_element(nodes, "META", { name: true, content: true });
      this.h();
    },
    h() {
      attr(meta, "name", "date");
      attr(meta, "content", meta_content_value = /*$page*/
      ctx[2].data.published.toISOString());
    },
    m(target, anchor) {
      insert_hydration(target, meta, anchor);
    },
    p(ctx2, dirty) {
      if (dirty & /*$page*/
      4 && meta_content_value !== (meta_content_value = /*$page*/
      ctx2[2].data.published.toISOString())) {
        attr(meta, "content", meta_content_value);
      }
    },
    d(detaching) {
      if (detaching) {
        detach(meta);
      }
    }
  };
}
function create_fragment(ctx) {
  let title_value;
  let meta0;
  let meta1;
  let meta2;
  let link;
  let meta3;
  let meta3_content_value;
  let if_block2_anchor;
  document.title = title_value = /*title*/
  ctx[3];
  function select_block_type(ctx2, dirty) {
    if (
      /*og_image*/
      ctx2[1]
    )
      return create_if_block_2;
    return create_else_block;
  }
  let current_block_type = select_block_type(ctx);
  let if_block0 = current_block_type(ctx);
  let if_block1 = (
    /*$page*/
    ctx[2].data.description && create_if_block_1(ctx)
  );
  let if_block2 = (
    /*$page*/
    ctx[2].data.published && create_if_block(ctx)
  );
  return {
    c() {
      meta0 = element("meta");
      meta1 = element("meta");
      meta2 = element("meta");
      if_block0.c();
      link = element("link");
      if (if_block1)
        if_block1.c();
      meta3 = element("meta");
      if (if_block2)
        if_block2.c();
      if_block2_anchor = empty();
      this.h();
    },
    l(nodes) {
      const head_nodes = head_selector("svelte-170d11p", document.head);
      meta0 = claim_element(head_nodes, "META", { name: true, content: true });
      meta1 = claim_element(head_nodes, "META", { name: true, content: true });
      meta2 = claim_element(head_nodes, "META", { name: true, content: true });
      if_block0.l(head_nodes);
      link = claim_element(head_nodes, "LINK", { rel: true, href: true });
      if (if_block1)
        if_block1.l(head_nodes);
      meta3 = claim_element(head_nodes, "META", { name: true, content: true });
      if (if_block2)
        if_block2.l(head_nodes);
      if_block2_anchor = empty();
      head_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(meta0, "name", "og:title");
      attr(
        meta0,
        "content",
        /*title*/
        ctx[3]
      );
      attr(meta1, "name", "twitter:title");
      attr(
        meta1,
        "content",
        /*title*/
        ctx[3]
      );
      attr(meta2, "name", "og:type");
      attr(meta2, "content", "website");
      attr(link, "rel", "icon");
      attr(
        link,
        "href",
        /*icon*/
        ctx[0]
      );
      attr(meta3, "name", "author");
      attr(meta3, "content", meta3_content_value = /*$page*/
      ctx[2].data.author ?? DEFAULT_AUTHOR);
    },
    m(target, anchor) {
      append_hydration(document.head, meta0);
      append_hydration(document.head, meta1);
      append_hydration(document.head, meta2);
      if_block0.m(document.head, null);
      append_hydration(document.head, link);
      if (if_block1)
        if_block1.m(document.head, null);
      append_hydration(document.head, meta3);
      if (if_block2)
        if_block2.m(document.head, null);
      append_hydration(document.head, if_block2_anchor);
    },
    p(ctx2, [dirty]) {
      if (dirty & /*title*/
      8 && title_value !== (title_value = /*title*/
      ctx2[3])) {
        document.title = title_value;
      }
      if (dirty & /*title*/
      8) {
        attr(
          meta0,
          "content",
          /*title*/
          ctx2[3]
        );
      }
      if (dirty & /*title*/
      8) {
        attr(
          meta1,
          "content",
          /*title*/
          ctx2[3]
        );
      }
      if (current_block_type === (current_block_type = select_block_type(ctx2)) && if_block0) {
        if_block0.p(ctx2, dirty);
      } else {
        if_block0.d(1);
        if_block0 = current_block_type(ctx2);
        if (if_block0) {
          if_block0.c();
          if_block0.m(link.parentNode, link);
        }
      }
      if (dirty & /*icon*/
      1) {
        attr(
          link,
          "href",
          /*icon*/
          ctx2[0]
        );
      }
      if (
        /*$page*/
        ctx2[2].data.description
      ) {
        if (if_block1) {
          if_block1.p(ctx2, dirty);
        } else {
          if_block1 = create_if_block_1(ctx2);
          if_block1.c();
          if_block1.m(meta3.parentNode, meta3);
        }
      } else if (if_block1) {
        if_block1.d(1);
        if_block1 = null;
      }
      if (dirty & /*$page*/
      4 && meta3_content_value !== (meta3_content_value = /*$page*/
      ctx2[2].data.author ?? DEFAULT_AUTHOR)) {
        attr(meta3, "content", meta3_content_value);
      }
      if (
        /*$page*/
        ctx2[2].data.published
      ) {
        if (if_block2) {
          if_block2.p(ctx2, dirty);
        } else {
          if_block2 = create_if_block(ctx2);
          if_block2.c();
          if_block2.m(if_block2_anchor.parentNode, if_block2_anchor);
        }
      } else if (if_block2) {
        if_block2.d(1);
        if_block2 = null;
      }
    },
    i: noop,
    o: noop,
    d(detaching) {
      detach(meta0);
      detach(meta1);
      detach(meta2);
      if_block0.d(detaching);
      detach(link);
      if (if_block1)
        if_block1.d(detaching);
      detach(meta3);
      if (if_block2)
        if_block2.d(detaching);
      detach(if_block2_anchor);
    }
  };
}
const DEFAULT_TITLE = "Loris Sigrist";
const DEFAULT_AUTHOR = "Loris Sigrist";
function instance($$self, $$props, $$invalidate) {
  let title;
  let $page;
  component_subscribe($$self, page, ($$value) => $$invalidate(2, $page = $$value));
  let { icon = default_favicon } = $$props;
  let { og_image = void 0 } = $$props;
  $$self.$$set = ($$props2) => {
    if ("icon" in $$props2)
      $$invalidate(0, icon = $$props2.icon);
    if ("og_image" in $$props2)
      $$invalidate(1, og_image = $$props2.og_image);
  };
  $$self.$$.update = () => {
    if ($$self.$$.dirty & /*$page*/
    4) {
      $$invalidate(3, title = $page.data.title ?? DEFAULT_TITLE);
    }
  };
  return [icon, og_image, $page, title];
}
class Metadata extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance, create_fragment, safe_not_equal, { icon: 0, og_image: 1 });
  }
}
export {
  Metadata as M
};
