import { s as safe_not_equal, l as assign, n as noop, m as compute_rest_props, p as exclude_internal_props, a as create_slot, u as update_slot_base, g as get_all_dirty_from_scope, b as get_slot_changes } from "../chunks/scheduler.DwkGEAYb.js";
import { S as SvelteComponent, i as init, J as svg_element, K as claim_svg_element, a as children, d as detach, L as set_svg_attributes, g as insert_hydration, F as destroy_each, e as element, s as space, c as claim_element, f as claim_space, m as attr, o as transition_in, p as transition_out, h as append_hydration, y as create_component, k as get_svelte_dataset, z as claim_component, A as mount_component, r as listen, B as destroy_component, q as head_selector } from "../chunks/index.BoYP9eQs.js";
import { M as Metadata } from "../chunks/Metadata.CGbv6vQ1.js";
import { e as ensure_array_like } from "../chunks/each.CuygwpM4.js";
import { t as theme } from "../chunks/theme.COyUI6g7.js";
function get_spread_update(levels, updates) {
  const update = {};
  const to_null_out = {};
  const accounted_for = { $$scope: 1 };
  let i = levels.length;
  while (i--) {
    const o = levels[i];
    const n = updates[i];
    if (n) {
      for (const key in o) {
        if (!(key in n))
          to_null_out[key] = 1;
      }
      for (const key in n) {
        if (!accounted_for[key]) {
          update[key] = n[key];
          accounted_for[key] = 1;
        }
      }
      levels[i] = n;
    } else {
      for (const key in o) {
        accounted_for[key] = 1;
      }
    }
  }
  for (const key in to_null_out) {
    if (!(key in update))
      update[key] = void 0;
  }
  return update;
}
const Envelope = { "default": { "a": { "fill": "none", "viewBox": "0 0 24 24", "stroke-width": "1.5", "stroke": "currentColor", "aria-hidden": "true" }, "path": [{ "stroke-linecap": "round", "stroke-linejoin": "round", "d": "M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" }] }, "micro": { "a": { "viewBox": "0 0 16 16", "fill": "currentColor", "aria-hidden": "true" }, "path": [{ "d": "M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" }, { "d": "M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" }] }, "mini": { "a": { "viewBox": "0 0 20 20", "fill": "currentColor", "aria-hidden": "true" }, "path": [{ "d": "M3 4a2 2 0 0 0-2 2v1.161l8.441 4.221a1.25 1.25 0 0 0 1.118 0L19 7.162V6a2 2 0 0 0-2-2H3Z" }, { "d": "m19 8.839-7.77 3.885a2.75 2.75 0 0 1-2.46 0L1 8.839V14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8.839Z" }] }, "solid": { "a": { "viewBox": "0 0 24 24", "fill": "currentColor", "aria-hidden": "true" }, "path": [{ "d": "M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" }, { "d": "M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" }] } };
const Moon = { "default": { "a": { "fill": "none", "viewBox": "0 0 24 24", "stroke-width": "1.5", "stroke": "currentColor", "aria-hidden": "true" }, "path": [{ "stroke-linecap": "round", "stroke-linejoin": "round", "d": "M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" }] }, "micro": { "a": { "viewBox": "0 0 16 16", "fill": "currentColor", "aria-hidden": "true" }, "path": [{ "d": "M14.438 10.148c.19-.425-.321-.787-.748-.601A5.5 5.5 0 0 1 6.453 2.31c.186-.427-.176-.938-.6-.748a6.501 6.501 0 1 0 8.585 8.586Z" }] }, "mini": { "a": { "viewBox": "0 0 20 20", "fill": "currentColor", "aria-hidden": "true" }, "path": [{ "fill-rule": "evenodd", "d": "M7.455 2.004a.75.75 0 0 1 .26.77 7 7 0 0 0 9.958 7.967.75.75 0 0 1 1.067.853A8.5 8.5 0 1 1 6.647 1.921a.75.75 0 0 1 .808.083Z", "clip-rule": "evenodd" }] }, "solid": { "a": { "viewBox": "0 0 24 24", "fill": "currentColor", "aria-hidden": "true" }, "path": [{ "fill-rule": "evenodd", "d": "M9.528 1.718a.75.75 0 0 1 .162.819A8.97 8.97 0 0 0 9 6a9 9 0 0 0 9 9 8.97 8.97 0 0 0 3.463-.69.75.75 0 0 1 .981.98 10.503 10.503 0 0 1-9.694 6.46c-5.799 0-10.5-4.7-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 0 1 .818.162Z", "clip-rule": "evenodd" }] } };
const Sun = { "default": { "a": { "fill": "none", "viewBox": "0 0 24 24", "stroke-width": "1.5", "stroke": "currentColor", "aria-hidden": "true" }, "path": [{ "stroke-linecap": "round", "stroke-linejoin": "round", "d": "M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" }] }, "micro": { "a": { "viewBox": "0 0 16 16", "fill": "currentColor", "aria-hidden": "true" }, "path": [{ "d": "M8 1a.75.75 0 0 1 .75.75v1.5a.75.75 0 0 1-1.5 0v-1.5A.75.75 0 0 1 8 1ZM10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0ZM12.95 4.11a.75.75 0 1 0-1.06-1.06l-1.062 1.06a.75.75 0 0 0 1.061 1.062l1.06-1.061ZM15 8a.75.75 0 0 1-.75.75h-1.5a.75.75 0 0 1 0-1.5h1.5A.75.75 0 0 1 15 8ZM11.89 12.95a.75.75 0 0 0 1.06-1.06l-1.06-1.062a.75.75 0 0 0-1.062 1.061l1.061 1.06ZM8 12a.75.75 0 0 1 .75.75v1.5a.75.75 0 0 1-1.5 0v-1.5A.75.75 0 0 1 8 12ZM5.172 11.89a.75.75 0 0 0-1.061-1.062L3.05 11.89a.75.75 0 1 0 1.06 1.06l1.06-1.06ZM4 8a.75.75 0 0 1-.75.75h-1.5a.75.75 0 0 1 0-1.5h1.5A.75.75 0 0 1 4 8ZM4.11 5.172A.75.75 0 0 0 5.173 4.11L4.11 3.05a.75.75 0 1 0-1.06 1.06l1.06 1.06Z" }] }, "mini": { "a": { "viewBox": "0 0 20 20", "fill": "currentColor", "aria-hidden": "true" }, "path": [{ "d": "M10 2a.75.75 0 0 1 .75.75v1.5a.75.75 0 0 1-1.5 0v-1.5A.75.75 0 0 1 10 2ZM10 15a.75.75 0 0 1 .75.75v1.5a.75.75 0 0 1-1.5 0v-1.5A.75.75 0 0 1 10 15ZM10 7a3 3 0 1 0 0 6 3 3 0 0 0 0-6ZM15.657 5.404a.75.75 0 1 0-1.06-1.06l-1.061 1.06a.75.75 0 0 0 1.06 1.06l1.06-1.06ZM6.464 14.596a.75.75 0 1 0-1.06-1.06l-1.06 1.06a.75.75 0 0 0 1.06 1.06l1.06-1.06ZM18 10a.75.75 0 0 1-.75.75h-1.5a.75.75 0 0 1 0-1.5h1.5A.75.75 0 0 1 18 10ZM5 10a.75.75 0 0 1-.75.75h-1.5a.75.75 0 0 1 0-1.5h1.5A.75.75 0 0 1 5 10ZM14.596 15.657a.75.75 0 0 0 1.06-1.06l-1.06-1.061a.75.75 0 1 0-1.06 1.06l1.06 1.06ZM5.404 6.464a.75.75 0 0 0 1.06-1.06l-1.06-1.06a.75.75 0 1 0-1.061 1.06l1.06 1.06Z" }] }, "solid": { "a": { "viewBox": "0 0 24 24", "fill": "currentColor", "aria-hidden": "true" }, "path": [{ "d": "M12 2.25a.75.75 0 0 1 .75.75v2.25a.75.75 0 0 1-1.5 0V3a.75.75 0 0 1 .75-.75ZM7.5 12a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM18.894 6.166a.75.75 0 0 0-1.06-1.06l-1.591 1.59a.75.75 0 1 0 1.06 1.061l1.591-1.59ZM21.75 12a.75.75 0 0 1-.75.75h-2.25a.75.75 0 0 1 0-1.5H21a.75.75 0 0 1 .75.75ZM17.834 18.894a.75.75 0 0 0 1.06-1.06l-1.59-1.591a.75.75 0 1 0-1.061 1.06l1.59 1.591ZM12 18a.75.75 0 0 1 .75.75V21a.75.75 0 0 1-1.5 0v-2.25A.75.75 0 0 1 12 18ZM7.758 17.303a.75.75 0 0 0-1.061-1.06l-1.591 1.59a.75.75 0 0 0 1.06 1.061l1.591-1.59ZM6 12a.75.75 0 0 1-.75.75H3a.75.75 0 0 1 0-1.5h2.25A.75.75 0 0 1 6 12ZM6.697 7.757a.75.75 0 0 0 1.06-1.06l-1.59-1.591a.75.75 0 0 0-1.061 1.06l1.59 1.591Z" }] } };
function get_each_context(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[6] = list[i];
  return child_ctx;
}
function create_each_block(ctx) {
  let path;
  let path_levels = [
    /*a*/
    ctx[6]
  ];
  let path_data = {};
  for (let i = 0; i < path_levels.length; i += 1) {
    path_data = assign(path_data, path_levels[i]);
  }
  return {
    c() {
      path = svg_element("path");
      this.h();
    },
    l(nodes) {
      path = claim_svg_element(nodes, "path", {});
      children(path).forEach(detach);
      this.h();
    },
    h() {
      set_svg_attributes(path, path_data);
    },
    m(target, anchor) {
      insert_hydration(target, path, anchor);
    },
    p(ctx2, dirty) {
      set_svg_attributes(path, path_data = get_spread_update(path_levels, [dirty & /*icon*/
      2 && /*a*/
      ctx2[6]]));
    },
    d(detaching) {
      if (detaching) {
        detach(path);
      }
    }
  };
}
function create_fragment$4(ctx) {
  var _a, _b;
  let svg;
  let each_value = ensure_array_like(
    /*icon*/
    ((_a = ctx[1]) == null ? void 0 : _a.path) ?? []
  );
  let each_blocks = [];
  for (let i = 0; i < each_value.length; i += 1) {
    each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
  }
  let svg_levels = [
    /*icon*/
    (_b = ctx[1]) == null ? void 0 : _b.a,
    { xmlns: "http://www.w3.org/2000/svg" },
    { width: (
      /*size*/
      ctx[0]
    ) },
    { height: (
      /*size*/
      ctx[0]
    ) },
    { "aria-hidden": "true" },
    /*$$restProps*/
    ctx[2]
  ];
  let svg_data = {};
  for (let i = 0; i < svg_levels.length; i += 1) {
    svg_data = assign(svg_data, svg_levels[i]);
  }
  return {
    c() {
      svg = svg_element("svg");
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].c();
      }
      this.h();
    },
    l(nodes) {
      svg = claim_svg_element(nodes, "svg", {
        xmlns: true,
        width: true,
        height: true,
        "aria-hidden": true
      });
      var svg_nodes = children(svg);
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].l(svg_nodes);
      }
      svg_nodes.forEach(detach);
      this.h();
    },
    h() {
      set_svg_attributes(svg, svg_data);
    },
    m(target, anchor) {
      insert_hydration(target, svg, anchor);
      for (let i = 0; i < each_blocks.length; i += 1) {
        if (each_blocks[i]) {
          each_blocks[i].m(svg, null);
        }
      }
    },
    p(ctx2, [dirty]) {
      var _a2, _b2;
      if (dirty & /*icon*/
      2) {
        each_value = ensure_array_like(
          /*icon*/
          ((_a2 = ctx2[1]) == null ? void 0 : _a2.path) ?? []
        );
        let i;
        for (i = 0; i < each_value.length; i += 1) {
          const child_ctx = get_each_context(ctx2, each_value, i);
          if (each_blocks[i]) {
            each_blocks[i].p(child_ctx, dirty);
          } else {
            each_blocks[i] = create_each_block(child_ctx);
            each_blocks[i].c();
            each_blocks[i].m(svg, null);
          }
        }
        for (; i < each_blocks.length; i += 1) {
          each_blocks[i].d(1);
        }
        each_blocks.length = each_value.length;
      }
      set_svg_attributes(svg, svg_data = get_spread_update(svg_levels, [
        dirty & /*icon*/
        2 && /*icon*/
        ((_b2 = ctx2[1]) == null ? void 0 : _b2.a),
        { xmlns: "http://www.w3.org/2000/svg" },
        dirty & /*size*/
        1 && { width: (
          /*size*/
          ctx2[0]
        ) },
        dirty & /*size*/
        1 && { height: (
          /*size*/
          ctx2[0]
        ) },
        { "aria-hidden": "true" },
        dirty & /*$$restProps*/
        4 && /*$$restProps*/
        ctx2[2]
      ]));
    },
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching) {
        detach(svg);
      }
      destroy_each(each_blocks, detaching);
    }
  };
}
function instance$4($$self, $$props, $$invalidate) {
  let icon;
  const omit_props_names = ["src", "size", "solid", "mini"];
  let $$restProps = compute_rest_props($$props, omit_props_names);
  let { src } = $$props;
  let { size = "100%" } = $$props;
  let { solid = false } = $$props;
  let { mini = false } = $$props;
  if (size !== "100%") {
    if (size.slice(-1) != "x" && size.slice(-1) != "m" && size.slice(-1) != "%") {
      try {
        size = parseInt(size) + "px";
      } catch (error) {
        size = "100%";
      }
    }
  }
  $$self.$$set = ($$new_props) => {
    $$props = assign(assign({}, $$props), exclude_internal_props($$new_props));
    $$invalidate(2, $$restProps = compute_rest_props($$props, omit_props_names));
    if ("src" in $$new_props)
      $$invalidate(3, src = $$new_props.src);
    if ("size" in $$new_props)
      $$invalidate(0, size = $$new_props.size);
    if ("solid" in $$new_props)
      $$invalidate(4, solid = $$new_props.solid);
    if ("mini" in $$new_props)
      $$invalidate(5, mini = $$new_props.mini);
  };
  $$self.$$.update = () => {
    if ($$self.$$.dirty & /*src, solid, mini*/
    56) {
      $$invalidate(1, icon = src == null ? void 0 : src[solid ? "solid" : mini ? "mini" : "default"]);
    }
  };
  return [size, icon, $$restProps, src, solid, mini];
}
class Icon extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$4, create_fragment$4, safe_not_equal, { src: 3, size: 0, solid: 4, mini: 5 });
  }
}
const get_dark_slot_changes = (dirty) => ({});
const get_dark_slot_context = (ctx) => ({});
const get_light_slot_changes = (dirty) => ({});
const get_light_slot_context = (ctx) => ({});
function create_fragment$3(ctx) {
  let div0;
  let t;
  let div1;
  let current;
  const light_slot_template = (
    /*#slots*/
    ctx[1].light
  );
  const light_slot = create_slot(
    light_slot_template,
    ctx,
    /*$$scope*/
    ctx[0],
    get_light_slot_context
  );
  const dark_slot_template = (
    /*#slots*/
    ctx[1].dark
  );
  const dark_slot = create_slot(
    dark_slot_template,
    ctx,
    /*$$scope*/
    ctx[0],
    get_dark_slot_context
  );
  return {
    c() {
      div0 = element("div");
      if (light_slot)
        light_slot.c();
      t = space();
      div1 = element("div");
      if (dark_slot)
        dark_slot.c();
      this.h();
    },
    l(nodes) {
      div0 = claim_element(nodes, "DIV", { class: true });
      var div0_nodes = children(div0);
      if (light_slot)
        light_slot.l(div0_nodes);
      div0_nodes.forEach(detach);
      t = claim_space(nodes);
      div1 = claim_element(nodes, "DIV", { class: true });
      var div1_nodes = children(div1);
      if (dark_slot)
        dark_slot.l(div1_nodes);
      div1_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(div0, "class", "dark:hidden contents");
      attr(div1, "class", "hidden dark:contents");
    },
    m(target, anchor) {
      insert_hydration(target, div0, anchor);
      if (light_slot) {
        light_slot.m(div0, null);
      }
      insert_hydration(target, t, anchor);
      insert_hydration(target, div1, anchor);
      if (dark_slot) {
        dark_slot.m(div1, null);
      }
      current = true;
    },
    p(ctx2, [dirty]) {
      if (light_slot) {
        if (light_slot.p && (!current || dirty & /*$$scope*/
        1)) {
          update_slot_base(
            light_slot,
            light_slot_template,
            ctx2,
            /*$$scope*/
            ctx2[0],
            !current ? get_all_dirty_from_scope(
              /*$$scope*/
              ctx2[0]
            ) : get_slot_changes(
              light_slot_template,
              /*$$scope*/
              ctx2[0],
              dirty,
              get_light_slot_changes
            ),
            get_light_slot_context
          );
        }
      }
      if (dark_slot) {
        if (dark_slot.p && (!current || dirty & /*$$scope*/
        1)) {
          update_slot_base(
            dark_slot,
            dark_slot_template,
            ctx2,
            /*$$scope*/
            ctx2[0],
            !current ? get_all_dirty_from_scope(
              /*$$scope*/
              ctx2[0]
            ) : get_slot_changes(
              dark_slot_template,
              /*$$scope*/
              ctx2[0],
              dirty,
              get_dark_slot_changes
            ),
            get_dark_slot_context
          );
        }
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(light_slot, local);
      transition_in(dark_slot, local);
      current = true;
    },
    o(local) {
      transition_out(light_slot, local);
      transition_out(dark_slot, local);
      current = false;
    },
    d(detaching) {
      if (detaching) {
        detach(div0);
        detach(t);
        detach(div1);
      }
      if (light_slot)
        light_slot.d(detaching);
      if (dark_slot)
        dark_slot.d(detaching);
    }
  };
}
function instance$3($$self, $$props, $$invalidate) {
  let { $$slots: slots = {}, $$scope } = $$props;
  $$self.$$set = ($$props2) => {
    if ("$$scope" in $$props2)
      $$invalidate(0, $$scope = $$props2.$$scope);
  };
  return [$$scope, slots];
}
class Themed extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$3, create_fragment$3, safe_not_equal, {});
  }
}
function create_fragment$2(ctx) {
  let svg;
  let path;
  let svg_class_value;
  return {
    c() {
      svg = svg_element("svg");
      path = svg_element("path");
      this.h();
    },
    l(nodes) {
      svg = claim_svg_element(nodes, "svg", {
        width: true,
        height: true,
        viewBox: true,
        fill: true,
        xmlns: true,
        class: true
      });
      var svg_nodes = children(svg);
      path = claim_svg_element(svg_nodes, "path", {
        "fill-rule": true,
        "clip-rule": true,
        d: true,
        transform: true,
        fill: true
      });
      children(path).forEach(detach);
      svg_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(path, "fill-rule", "evenodd");
      attr(path, "clip-rule", "evenodd");
      attr(path, "d", "M8 0C3.58 0 0 3.58 0 8C0 11.54 2.29 14.53 5.47 15.59C5.87 15.66 6.02 15.42 6.02 15.21C6.02 15.02 6.01 14.39 6.01 13.72C4 14.09 3.48 13.23 3.32 12.78C3.23 12.55 2.84 11.84 2.5 11.65C2.22 11.5 1.82 11.13 2.49 11.12C3.12 11.11 3.57 11.7 3.72 11.94C4.44 13.15 5.59 12.81 6.05 12.6C6.12 12.08 6.33 11.73 6.56 11.53C4.78 11.33 2.92 10.64 2.92 7.58C2.92 6.71 3.23 5.99 3.74 5.43C3.66 5.23 3.38 4.41 3.82 3.31C3.82 3.31 4.49 3.1 6.02 4.13C6.66 3.95 7.34 3.86 8.02 3.86C8.7 3.86 9.38 3.95 10.02 4.13C11.55 3.09 12.22 3.31 12.22 3.31C12.66 4.41 12.38 5.23 12.3 5.43C12.81 5.99 13.12 6.7 13.12 7.58C13.12 10.65 11.25 11.33 9.47 11.53C9.76 11.78 10.01 12.26 10.01 13.01C10.01 14.08 10 14.94 10 15.21C10 15.42 10.15 15.67 10.55 15.59C13.71 14.53 16 11.53 16 8C16 3.58 12.42 0 8 0Z");
      attr(path, "transform", "scale(64)");
      attr(path, "fill", "currentColor");
      attr(svg, "width", "1024");
      attr(svg, "height", "1024");
      attr(svg, "viewBox", "0 0 1024 1024");
      attr(svg, "fill", "none");
      attr(svg, "xmlns", "http://www.w3.org/2000/svg");
      attr(svg, "class", svg_class_value = /*small*/
      ctx[0] ? "w-4 h-4" : "w-6 h-6");
    },
    m(target, anchor) {
      insert_hydration(target, svg, anchor);
      append_hydration(svg, path);
    },
    p(ctx2, [dirty]) {
      if (dirty & /*small*/
      1 && svg_class_value !== (svg_class_value = /*small*/
      ctx2[0] ? "w-4 h-4" : "w-6 h-6")) {
        attr(svg, "class", svg_class_value);
      }
    },
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching) {
        detach(svg);
      }
    }
  };
}
function instance$2($$self, $$props, $$invalidate) {
  let { small = false } = $$props;
  $$self.$$set = ($$props2) => {
    if ("small" in $$props2)
      $$invalidate(0, small = $$props2.small);
  };
  return [small];
}
class Github extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$2, create_fragment$2, safe_not_equal, { small: 0 });
  }
}
function create_light_slot(ctx) {
  let icon;
  let current;
  icon = new Icon({
    props: {
      src: Sun,
      slot: "light",
      class: "w-4 h-4"
    }
  });
  return {
    c() {
      create_component(icon.$$.fragment);
    },
    l(nodes) {
      claim_component(icon.$$.fragment, nodes);
    },
    m(target, anchor) {
      mount_component(icon, target, anchor);
      current = true;
    },
    p: noop,
    i(local) {
      if (current)
        return;
      transition_in(icon.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(icon.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(icon, detaching);
    }
  };
}
function create_dark_slot(ctx) {
  let icon;
  let current;
  icon = new Icon({
    props: {
      src: Moon,
      slot: "dark",
      class: "w-4 h-4"
    }
  });
  return {
    c() {
      create_component(icon.$$.fragment);
    },
    l(nodes) {
      claim_component(icon.$$.fragment, nodes);
    },
    m(target, anchor) {
      mount_component(icon, target, anchor);
      current = true;
    },
    p: noop,
    i(local) {
      if (current)
        return;
      transition_in(icon.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(icon.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(icon, detaching);
    }
  };
}
function create_fragment$1(ctx) {
  let header;
  let div0;
  let textContent = `<a href="/" class="flex flex-row items-center gap-3"><picture><source srcset="${"" + new URL("../assets/avatar.Bf4TRO7F.avif", import.meta.url).href + " 1x, " + new URL("../assets/avatar.BkqM9Qx8.avif", import.meta.url).href + " 2x"}" type="image/avif"/><source srcset="${"" + new URL("../assets/avatar.B39wt1fA.webp", import.meta.url).href + " 1x, " + new URL("../assets/avatar.D9hkS3v8.webp", import.meta.url).href + " 2x"}" type="image/webp"/><source srcset="${"" + new URL("../assets/avatar.nNTP_Lha.png", import.meta.url).href + " 1x, " + new URL("../assets/avatar.B3igIkfZ.png", import.meta.url).href + " 2x"}" type="image/png"/><img src=""+new URL('../assets/avatar.B3igIkfZ.png', import.meta.url).href+"" alt="Loris Sigrist looking very handsome" class="rounded-full w-9 aspect-square" width="412" height="412"/></picture> <span class="font-bold text-md">Loris Sigrist</span></a>`;
  let t2;
  let div1;
  let a1;
  let textContent_1 = `<span class="hidden sm:block">Dither Studio</span>`;
  let t4;
  let a2;
  let textContent_2 = `<span class="hidden sm:block">Zocker</span>`;
  let t6;
  let a3;
  let textContent_3 = `<span class="hidden sm:block">t18s</span>`;
  let t8;
  let a4;
  let span4;
  let github;
  let t9;
  let span5;
  let textContent_4 = "Github";
  let t11;
  let a5;
  let icon;
  let t12;
  let span6;
  let textContent_5 = "Contact";
  let t14;
  let button;
  let themed;
  let current;
  let mounted;
  let dispose;
  github = new Github({ props: { small: true } });
  icon = new Icon({
    props: { src: Envelope, class: "w-4 h-4" }
  });
  themed = new Themed({
    props: {
      $$slots: {
        dark: [create_dark_slot],
        light: [create_light_slot]
      },
      $$scope: { ctx }
    }
  });
  return {
    c() {
      header = element("header");
      div0 = element("div");
      div0.innerHTML = textContent;
      t2 = space();
      div1 = element("div");
      a1 = element("a");
      a1.innerHTML = textContent_1;
      t4 = space();
      a2 = element("a");
      a2.innerHTML = textContent_2;
      t6 = space();
      a3 = element("a");
      a3.innerHTML = textContent_3;
      t8 = space();
      a4 = element("a");
      span4 = element("span");
      create_component(github.$$.fragment);
      t9 = space();
      span5 = element("span");
      span5.textContent = textContent_4;
      t11 = space();
      a5 = element("a");
      create_component(icon.$$.fragment);
      t12 = space();
      span6 = element("span");
      span6.textContent = textContent_5;
      t14 = space();
      button = element("button");
      create_component(themed.$$.fragment);
      this.h();
    },
    l(nodes) {
      header = claim_element(nodes, "HEADER", { class: true });
      var header_nodes = children(header);
      div0 = claim_element(header_nodes, "DIV", {
        id: true,
        class: true,
        ["data-svelte-h"]: true
      });
      if (get_svelte_dataset(div0) !== "svelte-1dvax2p")
        div0.innerHTML = textContent;
      t2 = claim_space(header_nodes);
      div1 = claim_element(header_nodes, "DIV", { id: true, class: true });
      var div1_nodes = children(div1);
      a1 = claim_element(div1_nodes, "A", {
        href: true,
        target: true,
        class: true,
        ["data-svelte-h"]: true
      });
      if (get_svelte_dataset(a1) !== "svelte-1ilvshw")
        a1.innerHTML = textContent_1;
      t4 = claim_space(div1_nodes);
      a2 = claim_element(div1_nodes, "A", {
        href: true,
        target: true,
        class: true,
        ["data-svelte-h"]: true
      });
      if (get_svelte_dataset(a2) !== "svelte-1tefg7x")
        a2.innerHTML = textContent_2;
      t6 = claim_space(div1_nodes);
      a3 = claim_element(div1_nodes, "A", {
        href: true,
        target: true,
        class: true,
        ["data-svelte-h"]: true
      });
      if (get_svelte_dataset(a3) !== "svelte-1spq4jh")
        a3.innerHTML = textContent_3;
      t8 = claim_space(div1_nodes);
      a4 = claim_element(div1_nodes, "A", { href: true, target: true, class: true });
      var a4_nodes = children(a4);
      span4 = claim_element(a4_nodes, "SPAN", {});
      var span4_nodes = children(span4);
      claim_component(github.$$.fragment, span4_nodes);
      span4_nodes.forEach(detach);
      t9 = claim_space(a4_nodes);
      span5 = claim_element(a4_nodes, "SPAN", { class: true, ["data-svelte-h"]: true });
      if (get_svelte_dataset(span5) !== "svelte-1ob2gl")
        span5.textContent = textContent_4;
      a4_nodes.forEach(detach);
      t11 = claim_space(div1_nodes);
      a5 = claim_element(div1_nodes, "A", { class: true, href: true });
      var a5_nodes = children(a5);
      claim_component(icon.$$.fragment, a5_nodes);
      t12 = claim_space(a5_nodes);
      span6 = claim_element(a5_nodes, "SPAN", { class: true, ["data-svelte-h"]: true });
      if (get_svelte_dataset(span6) !== "svelte-lz17j7")
        span6.textContent = textContent_5;
      a5_nodes.forEach(detach);
      t14 = claim_space(div1_nodes);
      button = claim_element(div1_nodes, "BUTTON", { class: true, title: true });
      var button_nodes = children(button);
      claim_component(themed.$$.fragment, button_nodes);
      button_nodes.forEach(detach);
      div1_nodes.forEach(detach);
      header_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(div0, "id", "header-start");
      attr(div0, "class", "flex flex-row items-center gap-4");
      attr(a1, "href", "https://dithering.sigrist.dev");
      attr(a1, "target", "_blank");
      attr(a1, "class", "hover:bg-gray-100 flex gap-2 items-center hover:dark:bg-gray-800 p-1 sm:px-3 rounded-md text-gray-800 dark:text-gray-200");
      attr(a2, "href", "https://zocker.sigrist.dev/");
      attr(a2, "target", "_blank");
      attr(a2, "class", "hover:bg-gray-100 flex gap-2 items-center hover:dark:bg-gray-800 p-1 sm:px-3 rounded-md text-gray-800 dark:text-gray-200");
      attr(a3, "href", "https://t18s.sigrist.dev/");
      attr(a3, "target", "_blank");
      attr(a3, "class", "hover:bg-gray-100 flex gap-2 items-center hover:dark:bg-gray-800 p-1 sm:px-3 rounded-md text-gray-800 dark:text-gray-200");
      attr(span5, "class", "hidden sm:block");
      attr(a4, "href", "https://www.github.com/LorisSigrist");
      attr(a4, "target", "_blank");
      attr(a4, "class", "hover:bg-gray-100 flex gap-2 items-center hover:dark:bg-gray-800 p-1 sm:px-3 rounded-md text-gray-800 dark:text-gray-200");
      attr(span6, "class", "hidden md:block");
      attr(a5, "class", "dark:bg-white bg-black text-white dark:text-black px-1 md:px-3 py-1 rounded-md flex gap-2 items-center");
      attr(a5, "href", "mailto:loris@sigrist.dev");
      attr(button, "class", "hover:bg-gray-100 hover:dark:bg-gray-800 p-2 rounded-md aspect-square");
      attr(button, "title", "Toggle Theme");
      attr(div1, "id", "header-end");
      attr(div1, "class", "flex flex-row items-center gap-2 sm:gap-4");
      attr(header, "class", "container mx-auto px-4 py-4 print:hidden flex flex-row justify-between");
    },
    m(target, anchor) {
      insert_hydration(target, header, anchor);
      append_hydration(header, div0);
      append_hydration(header, t2);
      append_hydration(header, div1);
      append_hydration(div1, a1);
      append_hydration(div1, t4);
      append_hydration(div1, a2);
      append_hydration(div1, t6);
      append_hydration(div1, a3);
      append_hydration(div1, t8);
      append_hydration(div1, a4);
      append_hydration(a4, span4);
      mount_component(github, span4, null);
      append_hydration(a4, t9);
      append_hydration(a4, span5);
      append_hydration(div1, t11);
      append_hydration(div1, a5);
      mount_component(icon, a5, null);
      append_hydration(a5, t12);
      append_hydration(a5, span6);
      append_hydration(div1, t14);
      append_hydration(div1, button);
      mount_component(themed, button, null);
      current = true;
      if (!mounted) {
        dispose = listen(
          button,
          "click",
          /*toggle_dark_theme*/
          ctx[0]
        );
        mounted = true;
      }
    },
    p(ctx2, [dirty]) {
      const themed_changes = {};
      if (dirty & /*$$scope*/
      2) {
        themed_changes.$$scope = { dirty, ctx: ctx2 };
      }
      themed.$set(themed_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(github.$$.fragment, local);
      transition_in(icon.$$.fragment, local);
      transition_in(themed.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(github.$$.fragment, local);
      transition_out(icon.$$.fragment, local);
      transition_out(themed.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      if (detaching) {
        detach(header);
      }
      destroy_component(github);
      destroy_component(icon);
      destroy_component(themed);
      mounted = false;
      dispose();
    }
  };
}
function instance$1($$self) {
  function toggle_dark_theme() {
    theme.update((t) => t === "dark" ? "light" : "dark");
  }
  return [toggle_dark_theme];
}
class Header extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$1, create_fragment$1, safe_not_equal, {});
  }
}
function create_fragment(ctx) {
  let script;
  let textContent = "if ('localStorage' in window) {\n			const prefers_dark = localStorage.getItem('theme') === 'dark';\n			const prefers_light = localStorage.getItem('theme') === 'light';\n			const prefers_nothing = !prefers_dark && !prefers_light;\n			if (prefers_dark) {\n				document.documentElement.classList.add('dark');\n			} else if (prefers_light) {\n				document.documentElement.classList.remove('dark');\n			} else if (prefers_nothing) {\n				const media_query = window.matchMedia('(prefers-color-scheme: dark)');\n				if (media_query.matches) {\n					document.documentElement.classList.add('dark');\n					localStorage.setItem('theme', 'dark');\n				} else {\n					document.documentElement.classList.remove('dark');\n					localStorage.setItem('theme', 'light');\n				}\n			}\n		}";
  let t1;
  let metadata;
  let t2;
  let header;
  let t3;
  let current;
  metadata = new Metadata({});
  header = new Header({});
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
      script = element("script");
      script.textContent = textContent;
      t1 = space();
      create_component(metadata.$$.fragment);
      t2 = space();
      create_component(header.$$.fragment);
      t3 = space();
      if (default_slot)
        default_slot.c();
    },
    l(nodes) {
      const head_nodes = head_selector("svelte-1quh51c", document.head);
      script = claim_element(head_nodes, "SCRIPT", { ["data-svelte-h"]: true });
      if (get_svelte_dataset(script) !== "svelte-ctkbxh")
        script.textContent = textContent;
      head_nodes.forEach(detach);
      t1 = claim_space(nodes);
      claim_component(metadata.$$.fragment, nodes);
      t2 = claim_space(nodes);
      claim_component(header.$$.fragment, nodes);
      t3 = claim_space(nodes);
      if (default_slot)
        default_slot.l(nodes);
    },
    m(target, anchor) {
      append_hydration(document.head, script);
      insert_hydration(target, t1, anchor);
      mount_component(metadata, target, anchor);
      insert_hydration(target, t2, anchor);
      mount_component(header, target, anchor);
      insert_hydration(target, t3, anchor);
      if (default_slot) {
        default_slot.m(target, anchor);
      }
      current = true;
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
      transition_in(metadata.$$.fragment, local);
      transition_in(header.$$.fragment, local);
      transition_in(default_slot, local);
      current = true;
    },
    o(local) {
      transition_out(metadata.$$.fragment, local);
      transition_out(header.$$.fragment, local);
      transition_out(default_slot, local);
      current = false;
    },
    d(detaching) {
      if (detaching) {
        detach(t1);
        detach(t2);
        detach(t3);
      }
      detach(script);
      destroy_component(metadata, detaching);
      destroy_component(header, detaching);
      if (default_slot)
        default_slot.d(detaching);
    }
  };
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
