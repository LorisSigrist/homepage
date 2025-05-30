import { s as safe_not_equal, n as noop, f as add_render_callback, d as src_url_equal, c as component_subscribe, j as binding_callbacks, k as add_flush_callback } from "../chunks/scheduler.6c6_dOpU.js";
import { S as SvelteComponent, i as init, d as detach, E as destroy_each, s as set_data, F as select_option, a as insert_hydration, b as append_hydration, r as listen, k as attr, c as claim_element, e as children, l as get_svelte_dataset, g as claim_space, f as claim_text, h as element, j as space, t as text, u as set_input_value, G as select_value, y as destroy_component, o as transition_out, p as transition_in, z as mount_component, D as set_style, A as claim_component, m as claim_html_tag, B as create_component, H as HtmlTagHydration, I as bind } from "../chunks/index.Cr7Iuz5O.js";
import { S as Showcase } from "../chunks/Showcase.CqC80W22.js";
import { e as ensure_array_like } from "../chunks/each.CuygwpM4.js";
import { w as writable } from "../chunks/index.x8ml4JsE.js";
function get_each_context$1(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[0] = list[i];
  return child_ctx;
}
function create_each_block$1(ctx) {
  let option;
  let t_value = (
    /*currency*/
    ctx[0] + ""
  );
  let t;
  return {
    c() {
      option = element("option");
      t = text(t_value);
      this.h();
    },
    l(nodes) {
      option = claim_element(nodes, "OPTION", {});
      var option_nodes = children(option);
      t = claim_text(option_nodes, t_value);
      option_nodes.forEach(detach);
      this.h();
    },
    h() {
      option.__value = /*currency*/
      ctx[0];
      set_input_value(option, option.__value);
    },
    m(target, anchor) {
      insert_hydration(target, option, anchor);
      append_hydration(option, t);
    },
    p: noop,
    d(detaching) {
      if (detaching) {
        detach(option);
      }
    }
  };
}
function create_fragment$2(ctx) {
  let div3;
  let label0;
  let textContent = "Price";
  let t1;
  let div2;
  let div0;
  let span;
  let t2_value = (
    /*currencies*/
    ctx[1][
      /*currency*/
      ctx[0]
    ] + ""
  );
  let t2;
  let t3;
  let input;
  let t4;
  let div1;
  let label1;
  let textContent_1 = "Currency";
  let t6;
  let select;
  let mounted;
  let dispose;
  let each_value = ensure_array_like(Object.keys(
    /*currencies*/
    ctx[1]
  ));
  let each_blocks = [];
  for (let i = 0; i < each_value.length; i += 1) {
    each_blocks[i] = create_each_block$1(get_each_context$1(ctx, each_value, i));
  }
  return {
    c() {
      div3 = element("div");
      label0 = element("label");
      label0.textContent = textContent;
      t1 = space();
      div2 = element("div");
      div0 = element("div");
      span = element("span");
      t2 = text(t2_value);
      t3 = space();
      input = element("input");
      t4 = space();
      div1 = element("div");
      label1 = element("label");
      label1.textContent = textContent_1;
      t6 = space();
      select = element("select");
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].c();
      }
      this.h();
    },
    l(nodes) {
      div3 = claim_element(nodes, "DIV", {});
      var div3_nodes = children(div3);
      label0 = claim_element(div3_nodes, "LABEL", {
        for: true,
        class: true,
        ["data-svelte-h"]: true
      });
      if (get_svelte_dataset(label0) !== "svelte-76cqnf")
        label0.textContent = textContent;
      t1 = claim_space(div3_nodes);
      div2 = claim_element(div3_nodes, "DIV", { class: true });
      var div2_nodes = children(div2);
      div0 = claim_element(div2_nodes, "DIV", { class: true });
      var div0_nodes = children(div0);
      span = claim_element(div0_nodes, "SPAN", { class: true });
      var span_nodes = children(span);
      t2 = claim_text(span_nodes, t2_value);
      span_nodes.forEach(detach);
      div0_nodes.forEach(detach);
      t3 = claim_space(div2_nodes);
      input = claim_element(div2_nodes, "INPUT", {
        type: true,
        name: true,
        id: true,
        class: true,
        placeholder: true
      });
      t4 = claim_space(div2_nodes);
      div1 = claim_element(div2_nodes, "DIV", { class: true });
      var div1_nodes = children(div1);
      label1 = claim_element(div1_nodes, "LABEL", {
        for: true,
        class: true,
        ["data-svelte-h"]: true
      });
      if (get_svelte_dataset(label1) !== "svelte-1hh6i4f")
        label1.textContent = textContent_1;
      t6 = claim_space(div1_nodes);
      select = claim_element(div1_nodes, "SELECT", { id: true, name: true, class: true });
      var select_nodes = children(select);
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].l(select_nodes);
      }
      select_nodes.forEach(detach);
      div1_nodes.forEach(detach);
      div2_nodes.forEach(detach);
      div3_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(label0, "for", "price");
      attr(label0, "class", "block text-sm font-medium leading-6 text-gray-900 dark:text-white");
      attr(span, "class", "text-gray-500 dark:text-gray-400 sm:text-sm");
      attr(div0, "class", "pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3");
      attr(input, "type", "text");
      attr(input, "name", "price");
      attr(input, "id", "price");
      attr(input, "class", "block w-full rounded-md border-0 py-1.5 pl-7 pr-20 dark:bg-white/5 text-gray-900 dark:text-white ring-1 ring-inset ring-gray-300 dark:ring-white/10 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 dark:focus-within:ring-indigo-500 sm:text-sm sm:leading-6");
      attr(input, "placeholder", "0.00");
      attr(label1, "for", "currency");
      attr(label1, "class", "sr-only");
      attr(select, "id", "currency");
      attr(select, "name", "currency");
      attr(select, "class", "h-full rounded-md border-0 bg-transparent py-0 pl-2 pr-7 text-gray-500 dark:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 dark:focus:ring-indigo-500 sm:text-sm");
      if (
        /*currency*/
        ctx[0] === void 0
      )
        add_render_callback(() => (
          /*select_change_handler*/
          ctx[2].call(select)
        ));
      attr(div1, "class", "absolute inset-y-0 right-0 flex items-center");
      attr(div2, "class", "relative mt-2 rounded-md shadow-sm");
    },
    m(target, anchor) {
      insert_hydration(target, div3, anchor);
      append_hydration(div3, label0);
      append_hydration(div3, t1);
      append_hydration(div3, div2);
      append_hydration(div2, div0);
      append_hydration(div0, span);
      append_hydration(span, t2);
      append_hydration(div2, t3);
      append_hydration(div2, input);
      append_hydration(div2, t4);
      append_hydration(div2, div1);
      append_hydration(div1, label1);
      append_hydration(div1, t6);
      append_hydration(div1, select);
      for (let i = 0; i < each_blocks.length; i += 1) {
        if (each_blocks[i]) {
          each_blocks[i].m(select, null);
        }
      }
      select_option(
        select,
        /*currency*/
        ctx[0],
        true
      );
      if (!mounted) {
        dispose = listen(
          select,
          "change",
          /*select_change_handler*/
          ctx[2]
        );
        mounted = true;
      }
    },
    p(ctx2, [dirty]) {
      if (dirty & /*currency*/
      1 && t2_value !== (t2_value = /*currencies*/
      ctx2[1][
        /*currency*/
        ctx2[0]
      ] + ""))
        set_data(t2, t2_value);
      if (dirty & /*Object, currencies*/
      2) {
        each_value = ensure_array_like(Object.keys(
          /*currencies*/
          ctx2[1]
        ));
        let i;
        for (i = 0; i < each_value.length; i += 1) {
          const child_ctx = get_each_context$1(ctx2, each_value, i);
          if (each_blocks[i]) {
            each_blocks[i].p(child_ctx, dirty);
          } else {
            each_blocks[i] = create_each_block$1(child_ctx);
            each_blocks[i].c();
            each_blocks[i].m(select, null);
          }
        }
        for (; i < each_blocks.length; i += 1) {
          each_blocks[i].d(1);
        }
        each_blocks.length = each_value.length;
      }
      if (dirty & /*currency, Object, currencies*/
      3) {
        select_option(
          select,
          /*currency*/
          ctx2[0]
        );
      }
    },
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching) {
        detach(div3);
      }
      destroy_each(each_blocks, detaching);
      mounted = false;
      dispose();
    }
  };
}
function instance$2($$self, $$props, $$invalidate) {
  const currencies = { USD: "$", EUR: "€", GBP: "£", JPY: "¥" };
  let { currency = "USD" } = $$props;
  function select_change_handler() {
    currency = select_value(this);
    $$invalidate(0, currency);
    $$invalidate(1, currencies);
  }
  $$self.$$set = ($$props2) => {
    if ("currency" in $$props2)
      $$invalidate(0, currency = $$props2.currency);
  };
  return [currency, currencies, select_change_handler];
}
class MoneyInput extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$2, create_fragment$2, safe_not_equal, { currency: 0 });
  }
}
function get_each_context(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[0] = list[i];
  return child_ctx;
}
function create_each_block(ctx) {
  let option;
  let t_value = (
    /*currency*/
    ctx[0] + ""
  );
  let t;
  return {
    c() {
      option = element("option");
      t = text(t_value);
      this.h();
    },
    l(nodes) {
      option = claim_element(nodes, "OPTION", {});
      var option_nodes = children(option);
      t = claim_text(option_nodes, t_value);
      option_nodes.forEach(detach);
      this.h();
    },
    h() {
      option.__value = /*currency*/
      ctx[0];
      set_input_value(option, option.__value);
    },
    m(target, anchor) {
      insert_hydration(target, option, anchor);
      append_hydration(option, t);
    },
    p: noop,
    d(detaching) {
      if (detaching) {
        detach(option);
      }
    }
  };
}
function create_fragment$1(ctx) {
  let div3;
  let label0;
  let textContent = "Price";
  let t1;
  let div2;
  let div0;
  let span;
  let t2_value = (
    /*currencies*/
    ctx[1][
      /*currency*/
      ctx[0]
    ] + ""
  );
  let t2;
  let t3;
  let input;
  let t4;
  let div1;
  let label1;
  let textContent_1 = "Currency";
  let t6;
  let select;
  let mounted;
  let dispose;
  let each_value = ensure_array_like(Object.keys(
    /*currencies*/
    ctx[1]
  ));
  let each_blocks = [];
  for (let i = 0; i < each_value.length; i += 1) {
    each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
  }
  return {
    c() {
      div3 = element("div");
      label0 = element("label");
      label0.textContent = textContent;
      t1 = space();
      div2 = element("div");
      div0 = element("div");
      span = element("span");
      t2 = text(t2_value);
      t3 = space();
      input = element("input");
      t4 = space();
      div1 = element("div");
      label1 = element("label");
      label1.textContent = textContent_1;
      t6 = space();
      select = element("select");
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].c();
      }
      this.h();
    },
    l(nodes) {
      div3 = claim_element(nodes, "DIV", { class: true });
      var div3_nodes = children(div3);
      label0 = claim_element(div3_nodes, "LABEL", {
        for: true,
        class: true,
        ["data-svelte-h"]: true
      });
      if (get_svelte_dataset(label0) !== "svelte-76cqnf")
        label0.textContent = textContent;
      t1 = claim_space(div3_nodes);
      div2 = claim_element(div3_nodes, "DIV", { class: true });
      var div2_nodes = children(div2);
      div0 = claim_element(div2_nodes, "DIV", { class: true });
      var div0_nodes = children(div0);
      span = claim_element(div0_nodes, "SPAN", { class: true });
      var span_nodes = children(span);
      t2 = claim_text(span_nodes, t2_value);
      span_nodes.forEach(detach);
      div0_nodes.forEach(detach);
      t3 = claim_space(div2_nodes);
      input = claim_element(div2_nodes, "INPUT", {
        type: true,
        name: true,
        id: true,
        class: true,
        placeholder: true
      });
      t4 = claim_space(div2_nodes);
      div1 = claim_element(div2_nodes, "DIV", { class: true });
      var div1_nodes = children(div1);
      label1 = claim_element(div1_nodes, "LABEL", {
        for: true,
        class: true,
        ["data-svelte-h"]: true
      });
      if (get_svelte_dataset(label1) !== "svelte-1hh6i4f")
        label1.textContent = textContent_1;
      t6 = claim_space(div1_nodes);
      select = claim_element(div1_nodes, "SELECT", { id: true, name: true, class: true });
      var select_nodes = children(select);
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].l(select_nodes);
      }
      select_nodes.forEach(detach);
      div1_nodes.forEach(detach);
      div2_nodes.forEach(detach);
      div3_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(label0, "for", "price");
      attr(label0, "class", "block text-sm font-medium leading-6 text-gray-900 dark:text-white");
      attr(span, "class", "text-gray-500 dark:text-gray-400 sm:text-sm");
      attr(div0, "class", "pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3");
      attr(input, "type", "text");
      attr(input, "name", "price");
      attr(input, "id", "price");
      attr(input, "class", "block w-full border-0 py-1.5 pl-7 pr-20 dark:bg-white/5 text-gray-900 dark:text-white ring-1 ring-inset ring-gray-800 dark:ring-gray-500 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-emerald-600 dark:focus-within:ring-emerald-500 sm:text-sm sm:leading-6");
      attr(input, "placeholder", "0.00");
      attr(label1, "for", "currency");
      attr(label1, "class", "sr-only");
      attr(select, "id", "currency");
      attr(select, "name", "currency");
      attr(select, "class", "h-full border-0 bg-transparent py-0 pl-2 pr-7 text-gray-500 dark:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-emerald-600 dark:focus:ring-emerald-500 sm:text-sm");
      if (
        /*currency*/
        ctx[0] === void 0
      )
        add_render_callback(() => (
          /*select_change_handler*/
          ctx[2].call(select)
        ));
      attr(div1, "class", "absolute inset-y-0 right-0 flex items-center");
      attr(div2, "class", "relative mt-2");
      attr(div3, "class", "font-mono");
    },
    m(target, anchor) {
      insert_hydration(target, div3, anchor);
      append_hydration(div3, label0);
      append_hydration(div3, t1);
      append_hydration(div3, div2);
      append_hydration(div2, div0);
      append_hydration(div0, span);
      append_hydration(span, t2);
      append_hydration(div2, t3);
      append_hydration(div2, input);
      append_hydration(div2, t4);
      append_hydration(div2, div1);
      append_hydration(div1, label1);
      append_hydration(div1, t6);
      append_hydration(div1, select);
      for (let i = 0; i < each_blocks.length; i += 1) {
        if (each_blocks[i]) {
          each_blocks[i].m(select, null);
        }
      }
      select_option(
        select,
        /*currency*/
        ctx[0],
        true
      );
      if (!mounted) {
        dispose = listen(
          select,
          "change",
          /*select_change_handler*/
          ctx[2]
        );
        mounted = true;
      }
    },
    p(ctx2, [dirty]) {
      if (dirty & /*currency*/
      1 && t2_value !== (t2_value = /*currencies*/
      ctx2[1][
        /*currency*/
        ctx2[0]
      ] + ""))
        set_data(t2, t2_value);
      if (dirty & /*Object, currencies*/
      2) {
        each_value = ensure_array_like(Object.keys(
          /*currencies*/
          ctx2[1]
        ));
        let i;
        for (i = 0; i < each_value.length; i += 1) {
          const child_ctx = get_each_context(ctx2, each_value, i);
          if (each_blocks[i]) {
            each_blocks[i].p(child_ctx, dirty);
          } else {
            each_blocks[i] = create_each_block(child_ctx);
            each_blocks[i].c();
            each_blocks[i].m(select, null);
          }
        }
        for (; i < each_blocks.length; i += 1) {
          each_blocks[i].d(1);
        }
        each_blocks.length = each_value.length;
      }
      if (dirty & /*currency, Object, currencies*/
      3) {
        select_option(
          select,
          /*currency*/
          ctx2[0]
        );
      }
    },
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching) {
        detach(div3);
      }
      destroy_each(each_blocks, detaching);
      mounted = false;
      dispose();
    }
  };
}
function instance$1($$self, $$props, $$invalidate) {
  const currencies = { USD: "$", EUR: "€", GBP: "£", JPY: "¥" };
  let { currency = "USD" } = $$props;
  function select_change_handler() {
    currency = select_value(this);
    $$invalidate(0, currency);
    $$invalidate(1, currencies);
  }
  $$self.$$set = ($$props2) => {
    if ("currency" in $$props2)
      $$invalidate(0, currency = $$props2.currency);
  };
  return [currency, currencies, select_change_handler];
}
class MoneyInputModified extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$1, create_fragment$1, safe_not_equal, { currency: 0 });
  }
}
const BannerSrc = "" + new URL("../assets/banner.Ce51I7LY.webp", import.meta.url).href;
const BannerSize = {
  width: 2837,
  height: 1745
};
const BannerColor = "#ededf8";
function create_default_slot_1(ctx) {
  let moneyinput;
  let updating_currency;
  let current;
  function moneyinput_currency_binding(value) {
    ctx[2](value);
  }
  let moneyinput_props = {};
  if (
    /*$currency*/
    ctx[0] !== void 0
  ) {
    moneyinput_props.currency = /*$currency*/
    ctx[0];
  }
  moneyinput = new MoneyInput({ props: moneyinput_props });
  binding_callbacks.push(() => bind(moneyinput, "currency", moneyinput_currency_binding));
  return {
    c() {
      create_component(moneyinput.$$.fragment);
    },
    l(nodes) {
      claim_component(moneyinput.$$.fragment, nodes);
    },
    m(target, anchor) {
      mount_component(moneyinput, target, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      const moneyinput_changes = {};
      if (!updating_currency && dirty & /*$currency*/
      1) {
        updating_currency = true;
        moneyinput_changes.currency = /*$currency*/
        ctx2[0];
        add_flush_callback(() => updating_currency = false);
      }
      moneyinput.$set(moneyinput_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(moneyinput.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(moneyinput.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(moneyinput, detaching);
    }
  };
}
function create_default_slot(ctx) {
  let moneyinputmodified;
  let updating_currency;
  let current;
  function moneyinputmodified_currency_binding(value) {
    ctx[3](value);
  }
  let moneyinputmodified_props = {};
  if (
    /*$currency*/
    ctx[0] !== void 0
  ) {
    moneyinputmodified_props.currency = /*$currency*/
    ctx[0];
  }
  moneyinputmodified = new MoneyInputModified({ props: moneyinputmodified_props });
  binding_callbacks.push(() => bind(moneyinputmodified, "currency", moneyinputmodified_currency_binding));
  return {
    c() {
      create_component(moneyinputmodified.$$.fragment);
    },
    l(nodes) {
      claim_component(moneyinputmodified.$$.fragment, nodes);
    },
    m(target, anchor) {
      mount_component(moneyinputmodified, target, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      const moneyinputmodified_changes = {};
      if (!updating_currency && dirty & /*$currency*/
      1) {
        updating_currency = true;
        moneyinputmodified_changes.currency = /*$currency*/
        ctx2[0];
        add_flush_callback(() => updating_currency = false);
      }
      moneyinputmodified.$set(moneyinputmodified_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(moneyinputmodified.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(moneyinputmodified.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(moneyinputmodified, detaching);
    }
  };
}
function create_fragment(ctx) {
  let img;
  let img_src_value;
  let t0;
  let h1;
  let textContent = `<a href="#is-tailwind-ui-worth-it">Is Tailwind UI worth it?</a>`;
  let t2;
  let p0;
  let textContent_1 = `<a href="https://tailwindui.com/" rel="noopener noreferrer" target="_blank">Tailwind UI</a> is a collection of high-quality components and templates built by the creators of <a href="https://tailwindcss.com" rel="noopener noreferrer" target="_blank">Tailwind CSS</a>. It’s 300$ price-tag for a single developer license is quite steep when considering all the free alternatives out there. Could it really be worth it?`;
  let t7;
  let p1;
  let textContent_2 = "I’ve been using Tailwind UI for a couple months now. In this article, I’ll go through how it has affected my workflow, what I liked and disliked about it, and who should consider buying it.";
  let t9;
  let blockquote;
  let textContent_3 = `<p>Since Tailwind UI and Tailwind CSS share similar, verbose names, I’ll refer to them as <abbr title="Tailwind UI">TUI</abbr> and <abbr title="Tailwind CSS">TCSS</abbr> respectively.</p>`;
  let t15;
  let h20;
  let textContent_4 = `<a href="#the-tui-workflow">The <abbr title="Tailwind UI">TUI</abbr> workflow</a>`;
  let t19;
  let p3;
  let textContent_5 = `<abbr title="Tailwind UI">TUI</abbr> components and templates are provided as markup with <abbr title="Tailwind CSS">TCSS</abbr> classes. You then copy-paste the markup into your project. In true Tailwind fashion, this seems a bit backwards at first. Why would you want to copy-paste markup if you could just install a library? Customization. If you’ve ever tried to modify something like <a href="https://mui.com" rel="noopener noreferrer" target="_blank">MUI</a> you know it’s insufferable. Owning the markup and styles saves you from a lot of headaches.`;
  let t26;
  let p4;
  let textContent_6 = `Let’s say you wanted to add a money input to your site. You would first browse through the <abbr title="Tailwind UI">TUI</abbr> components to find one that looks like you want.`;
  let t30;
  let showcase0;
  let t31;
  let html_tag;
  let raw_value = `<pre class="shiki vitesse-dark" style="background-color:#121212;color:#dbd7caee" tabindex="0"><code><span class="line"><span style="color:#666666">&#x3C;</span><span style="color:#4D9375">div</span><span style="color:#666666">></span></span>
<span class="line"><span style="color:#666666">  &#x3C;</span><span style="color:#4D9375">label</span><span style="color:#BD976A"> for</span><span style="color:#666666">=</span><span style="color:#C98A7D99">"</span><span style="color:#C98A7D">price</span><span style="color:#C98A7D99">"</span><span style="color:#BD976A"> class</span><span style="color:#666666">=</span><span style="color:#C98A7D99">"</span><span style="color:#C98A7D">block text-sm font-medium leading-6 text-gray-900</span><span style="color:#C98A7D99">"</span><span style="color:#666666">></span><span style="color:#DBD7CAEE">Price</span><span style="color:#666666">&#x3C;/</span><span style="color:#4D9375">label</span><span style="color:#666666">></span></span>
<span class="line"><span style="color:#666666">  &#x3C;</span><span style="color:#4D9375">div</span><span style="color:#BD976A"> class</span><span style="color:#666666">=</span><span style="color:#C98A7D99">"</span><span style="color:#C98A7D">relative mt-2 rounded-md shadow-sm</span><span style="color:#C98A7D99">"</span><span style="color:#666666">></span></span>
<span class="line"><span style="color:#666666">    &#x3C;</span><span style="color:#4D9375">div</span><span style="color:#BD976A"> class</span><span style="color:#666666">=</span><span style="color:#C98A7D99">"</span><span style="color:#C98A7D">pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3</span><span style="color:#C98A7D99">"</span><span style="color:#666666">></span></span>
<span class="line"><span style="color:#666666">      &#x3C;</span><span style="color:#4D9375">span</span><span style="color:#BD976A"> class</span><span style="color:#666666">=</span><span style="color:#C98A7D99">"</span><span style="color:#C98A7D">text-gray-500 sm:text-sm</span><span style="color:#C98A7D99">"</span><span style="color:#666666">></span><span style="color:#DBD7CAEE">$</span><span style="color:#666666">&#x3C;/</span><span style="color:#4D9375">span</span><span style="color:#666666">></span></span>
<span class="line"><span style="color:#666666">    &#x3C;/</span><span style="color:#4D9375">div</span><span style="color:#666666">></span></span>
<span class="line"><span style="color:#666666">    &#x3C;</span><span style="color:#4D9375">input</span><span style="color:#BD976A"> type</span><span style="color:#666666">=</span><span style="color:#C98A7D99">"</span><span style="color:#C98A7D">text</span><span style="color:#C98A7D99">"</span><span style="color:#BD976A"> name</span><span style="color:#666666">=</span><span style="color:#C98A7D99">"</span><span style="color:#C98A7D">price</span><span style="color:#C98A7D99">"</span><span style="color:#BD976A"> id</span><span style="color:#666666">=</span><span style="color:#C98A7D99">"</span><span style="color:#C98A7D">price</span><span style="color:#C98A7D99">"</span><span style="color:#BD976A"> class</span><span style="color:#666666">=</span><span style="color:#C98A7D99">"</span><span style="color:#C98A7D">block w-full rounded-md border-0 py-1.5 pl-7 pr-12 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6</span><span style="color:#C98A7D99">"</span><span style="color:#BD976A"> placeholder</span><span style="color:#666666">=</span><span style="color:#C98A7D99">"</span><span style="color:#C98A7D">0.00</span><span style="color:#C98A7D99">"</span><span style="color:#BD976A"> aria-describedby</span><span style="color:#666666">=</span><span style="color:#C98A7D99">"</span><span style="color:#C98A7D">price-currency</span><span style="color:#C98A7D99">"</span><span style="color:#666666">></span></span>
<span class="line"><span style="color:#666666">    &#x3C;</span><span style="color:#4D9375">div</span><span style="color:#BD976A"> class</span><span style="color:#666666">=</span><span style="color:#C98A7D99">"</span><span style="color:#C98A7D">pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3</span><span style="color:#C98A7D99">"</span><span style="color:#666666">></span></span>
<span class="line"><span style="color:#666666">      &#x3C;</span><span style="color:#4D9375">span</span><span style="color:#BD976A"> class</span><span style="color:#666666">=</span><span style="color:#C98A7D99">"</span><span style="color:#C98A7D">text-gray-500 sm:text-sm</span><span style="color:#C98A7D99">"</span><span style="color:#BD976A"> id</span><span style="color:#666666">=</span><span style="color:#C98A7D99">"</span><span style="color:#C98A7D">price-currency</span><span style="color:#C98A7D99">"</span><span style="color:#666666">></span><span style="color:#DBD7CAEE">USD</span><span style="color:#666666">&#x3C;/</span><span style="color:#4D9375">span</span><span style="color:#666666">></span></span>
<span class="line"><span style="color:#666666">    &#x3C;/</span><span style="color:#4D9375">div</span><span style="color:#666666">></span></span>
<span class="line"><span style="color:#666666">  &#x3C;/</span><span style="color:#4D9375">div</span><span style="color:#666666">></span></span>
<span class="line"><span style="color:#666666">&#x3C;/</span><span style="color:#4D9375">div</span><span style="color:#666666">></span></span></code></pre>`;
  let t32;
  let p5;
  let textContent_7 = "Then you would copy-paste the markup into your project and modify it to fit your theme, changing colors, shapes, fonts and sizes.";
  let t34;
  let showcase1;
  let t35;
  let p6;
  let textContent_8 = `For more complex components that require interactivity <abbr title="Tailwind UI">TUI</abbr> also provides React and Vue components. If you aren’t using these frameworks, the markup also includes comments that explain how the component should behave. This makes it easy to adapt the components to whatever you’re using.`;
  let t39;
  let h21;
  let textContent_9 = `<a href="#looking-good-has-never-been-this-easy">Looking good has never been this easy</a>`;
  let t41;
  let p7;
  let textContent_10 = `Obviously <abbr title="Tailwind UI">TUI</abbr> looks great, you just need to browse their site to see that. What’s more impressive is how easy it is to actually achieve similar results in your own project.`;
  let t45;
  let p8;
  let textContent_11 = "I’m used to Bootstrap, MUI or custom CSS. With these, I would spend a lot of time fiddling to get the look right. Promises of “easy styling” and “beautiful components” would often go unfulfilled.";
  let t47;
  let p9;
  let textContent_12 = `With <abbr title="Tailwind UI">TUI</abbr>, I just copy-paste the markup and it looks great. This effortless beauty has been a novel experience for me.`;
  let t51;
  let h22;
  let textContent_13 = `<a href="#framework-agnostic">Framework agnostic*</a>`;
  let t53;
  let p10;
  let textContent_14 = `Components are provided as markup with <abbr title="Tailwind CSS">TCSS</abbr> classes. The <em>appearance</em> of the components is not tied to any specific framework. However, the <em>behavior</em> of the components needs to be implemented separately for each framework.`;
  let t61;
  let p11;
  let textContent_15 = `<abbr title="Tailwind UI">TUI</abbr> provides prebuilt React &amp; Vue components that implement expected behavior. If you are using a different framework or no framework you’ll have to implement the behavior yourself. Fortunately, this is rarely difficult. The markup includes comments that explain what each part is for and how it should behave.`;
  let t64;
  let p12;
  let textContent_16 = `I’ve personally adapted many <abbr title="Tailwind UI">TUI</abbr> components to <a href="https://svelte.dev" rel="noopener noreferrer" target="_blank">Svelte</a>, using <a href="https://melt-ui.com" rel="noopener noreferrer" target="_blank">Melt UI</a> as the behavior library. It’s been a very smooth experience.`;
  let t72;
  let p13;
  let textContent_17 = `Even when I was using a Server-Side only framework, <a href="https://symfony.com" rel="noopener noreferrer" target="_blank">Symfony</a>, this still worked great. I feel comfortable calling <abbr title="Tailwind UI">TUI</abbr> framework agnostic, even though there is an asterisk.`;
  let t78;
  let h23;
  let textContent_18 = `<a href="#its-not-perfect">It’s not perfect</a>`;
  let t80;
  let p14;
  let textContent_19 = `There are things that I find frustrating about <abbr title="Tailwind UI">TUI</abbr> and wish I had been aware of these before purchasing. Hopefully they will be addressed in future.`;
  let t84;
  let h30;
  let textContent_20 = `<a href="#components-come-in-just-one-theme">Components come in just one theme</a>`;
  let t86;
  let p15;
  let textContent_21 = `All, or at least most, <abbr title="Tailwind UI">TUI</abbr> components come in a single theme. Either light or dark. This is unfortunate, since one of <abbr title="Tailwind CSS">TCSS</abbr>’s nicest features is it’s easy multi-theme styling.`;
  let t92;
  let p16;
  let textContent_22 = "It’s especially odd when a component appears in both light and dark across different pages. Clearly both variants exist, so why not make them available?";
  let t94;
  let p17;
  let textContent_23 = "The thinking here was likely that developers would not expected a component to differ visually from the preview page. If you are building a light-theme site and you copy-paste light theme components, having them suddenly turn dark would be unexpected. This is likely why they decided to make the components single-theme.";
  let t96;
  let p18;
  let textContent_24 = `I would appreciate components being provided in three variants: <code>light</code>, <code>dark</code> and <code>adaptive</code>.`;
  let t104;
  let h31;
  let textContent_25 = `<a href="#tailwind-css-limitations-show">Tailwind CSS limitations show</a>`;
  let t106;
  let p19;
  let textContent_26 = `<abbr title="Tailwind UI">TUI</abbr> has limited itself to just using <abbr title="Tailwind CSS">TCSS</abbr> classes. This is great, as all components are easy to copy-paste and customize. However, occasionally the limitations of <abbr title="Tailwind CSS">TCSS</abbr> shine through.`;
  let t113;
  let p20;
  let textContent_27 = `While <abbr title="Tailwind CSS">TCSS</abbr> can do pretty much anything CSS can when styling a single element. However, it does not match CSS when it comes to multi-element interaction and styling, it’s most powerful feature. <abbr title="Tailwind UI">TUI</abbr> has to abstain from this, which results in some awkward recommendations, usually manifesting in an overreliance on JS.`;
  let t119;
  let p21;
  let textContent_28 = `For example, it recommends opening dropdowns by adding/removing an element JS. That part of the site won’t work without JS. This is a shame, since this could easily be solved with a few lines of CSS. Failing to adhere to the <a href="https://en.wikipedia.org/wiki/Rule_of_least_power" rel="noopener noreferrer" target="_blank">Least Power Principle</a> like this makes your sites more fragile for no benefit.`;
  let t123;
  let p22;
  let textContent_29 = `The solution here isn’t to add custom CSS to <abbr title="Tailwind UI">TUI</abbr>, but to expand <abbr title="Tailwind CSS">TCSS</abbr>’s capabilities. Until that happens I will continue to be frustrated by this.`;
  let t129;
  let h32;
  let textContent_30 = `<a href="#no-offline-support">No Offline Support</a>`;
  let t131;
  let p23;
  let textContent_31 = `I’m currently writing this on a train and I’m unable to access <abbr title="Tailwind UI">TUI</abbr> in any way. This is a rather glaring oversight, as it would be very straight forward to enable offline access. A basic <a href="https://developers.mozilla.org/en-US/docs/Web/API/Service_Worker_API" rel="noopener noreferrer" target="_blank">ServiceWorker</a> would do. Caching static assets isn’t hard.`;
  let t137;
  let h24;
  let textContent_32 = `<a href="#is-it-worth-it">Is it worth it?</a>`;
  let t139;
  let p24;
  let textContent_33 = `I have yet to answer the ultimate question: <em>Is it worth it?</em> I would give the usual “it depends”, because it really does depend, but that’s not fair. It’s not fair because you have to buy it to try it and therefore can’t know on which side of the fence you’ll land. That’s no good.`;
  let t143;
  let p25;
  let textContent_34 = `So instead I’ll give a less correct but more actionable answer. <em>Yes, it’s worth it, unless you have a reason it isn’t.</em>`;
  let t146;
  let p26;
  let textContent_35 = `The amount of time it has saved me, even over the ostensibly many free alternatives, has been worth the price. I’ve been able to build beautiful sites with minimal effort. I’ve been able to focus on shipping, not fiddling. I believe most developers would experience these benefits if they were to buy it, and it would be worth it for them. The only reason I can think of for it not being worth it is if you have a very specific design system that <abbr title="Tailwind UI">TUI</abbr> doesn’t match. Or if you aren’t getting paid, then saving time isn’t very valuable.`;
  let current;
  showcase0 = new Showcase({
    props: {
      $$slots: { default: [create_default_slot_1] },
      $$scope: { ctx }
    }
  });
  showcase1 = new Showcase({
    props: {
      $$slots: { default: [create_default_slot] },
      $$scope: { ctx }
    }
  });
  return {
    c() {
      img = element("img");
      t0 = space();
      h1 = element("h1");
      h1.innerHTML = textContent;
      t2 = space();
      p0 = element("p");
      p0.innerHTML = textContent_1;
      t7 = space();
      p1 = element("p");
      p1.textContent = textContent_2;
      t9 = space();
      blockquote = element("blockquote");
      blockquote.innerHTML = textContent_3;
      t15 = space();
      h20 = element("h2");
      h20.innerHTML = textContent_4;
      t19 = space();
      p3 = element("p");
      p3.innerHTML = textContent_5;
      t26 = space();
      p4 = element("p");
      p4.innerHTML = textContent_6;
      t30 = space();
      create_component(showcase0.$$.fragment);
      t31 = space();
      html_tag = new HtmlTagHydration(false);
      t32 = space();
      p5 = element("p");
      p5.textContent = textContent_7;
      t34 = space();
      create_component(showcase1.$$.fragment);
      t35 = space();
      p6 = element("p");
      p6.innerHTML = textContent_8;
      t39 = space();
      h21 = element("h2");
      h21.innerHTML = textContent_9;
      t41 = space();
      p7 = element("p");
      p7.innerHTML = textContent_10;
      t45 = space();
      p8 = element("p");
      p8.textContent = textContent_11;
      t47 = space();
      p9 = element("p");
      p9.innerHTML = textContent_12;
      t51 = space();
      h22 = element("h2");
      h22.innerHTML = textContent_13;
      t53 = space();
      p10 = element("p");
      p10.innerHTML = textContent_14;
      t61 = space();
      p11 = element("p");
      p11.innerHTML = textContent_15;
      t64 = space();
      p12 = element("p");
      p12.innerHTML = textContent_16;
      t72 = space();
      p13 = element("p");
      p13.innerHTML = textContent_17;
      t78 = space();
      h23 = element("h2");
      h23.innerHTML = textContent_18;
      t80 = space();
      p14 = element("p");
      p14.innerHTML = textContent_19;
      t84 = space();
      h30 = element("h3");
      h30.innerHTML = textContent_20;
      t86 = space();
      p15 = element("p");
      p15.innerHTML = textContent_21;
      t92 = space();
      p16 = element("p");
      p16.textContent = textContent_22;
      t94 = space();
      p17 = element("p");
      p17.textContent = textContent_23;
      t96 = space();
      p18 = element("p");
      p18.innerHTML = textContent_24;
      t104 = space();
      h31 = element("h3");
      h31.innerHTML = textContent_25;
      t106 = space();
      p19 = element("p");
      p19.innerHTML = textContent_26;
      t113 = space();
      p20 = element("p");
      p20.innerHTML = textContent_27;
      t119 = space();
      p21 = element("p");
      p21.innerHTML = textContent_28;
      t123 = space();
      p22 = element("p");
      p22.innerHTML = textContent_29;
      t129 = space();
      h32 = element("h3");
      h32.innerHTML = textContent_30;
      t131 = space();
      p23 = element("p");
      p23.innerHTML = textContent_31;
      t137 = space();
      h24 = element("h2");
      h24.innerHTML = textContent_32;
      t139 = space();
      p24 = element("p");
      p24.innerHTML = textContent_33;
      t143 = space();
      p25 = element("p");
      p25.innerHTML = textContent_34;
      t146 = space();
      p26 = element("p");
      p26.innerHTML = textContent_35;
      this.h();
    },
    l(nodes) {
      img = claim_element(nodes, "IMG", {
        src: true,
        width: true,
        height: true,
        alt: true
      });
      t0 = claim_space(nodes);
      h1 = claim_element(nodes, "H1", { id: true, ["data-svelte-h"]: true });
      if (get_svelte_dataset(h1) !== "svelte-1c99y9k")
        h1.innerHTML = textContent;
      t2 = claim_space(nodes);
      p0 = claim_element(nodes, "P", { ["data-svelte-h"]: true });
      if (get_svelte_dataset(p0) !== "svelte-1nfzanq")
        p0.innerHTML = textContent_1;
      t7 = claim_space(nodes);
      p1 = claim_element(nodes, "P", { ["data-svelte-h"]: true });
      if (get_svelte_dataset(p1) !== "svelte-18dlu86")
        p1.textContent = textContent_2;
      t9 = claim_space(nodes);
      blockquote = claim_element(nodes, "BLOCKQUOTE", { ["data-svelte-h"]: true });
      if (get_svelte_dataset(blockquote) !== "svelte-19rq70s")
        blockquote.innerHTML = textContent_3;
      t15 = claim_space(nodes);
      h20 = claim_element(nodes, "H2", { id: true, ["data-svelte-h"]: true });
      if (get_svelte_dataset(h20) !== "svelte-1yc6z9s")
        h20.innerHTML = textContent_4;
      t19 = claim_space(nodes);
      p3 = claim_element(nodes, "P", { ["data-svelte-h"]: true });
      if (get_svelte_dataset(p3) !== "svelte-b8x8v1")
        p3.innerHTML = textContent_5;
      t26 = claim_space(nodes);
      p4 = claim_element(nodes, "P", { ["data-svelte-h"]: true });
      if (get_svelte_dataset(p4) !== "svelte-zgjvll")
        p4.innerHTML = textContent_6;
      t30 = claim_space(nodes);
      claim_component(showcase0.$$.fragment, nodes);
      t31 = claim_space(nodes);
      html_tag = claim_html_tag(nodes, false);
      t32 = claim_space(nodes);
      p5 = claim_element(nodes, "P", { ["data-svelte-h"]: true });
      if (get_svelte_dataset(p5) !== "svelte-1u5fjv7")
        p5.textContent = textContent_7;
      t34 = claim_space(nodes);
      claim_component(showcase1.$$.fragment, nodes);
      t35 = claim_space(nodes);
      p6 = claim_element(nodes, "P", { ["data-svelte-h"]: true });
      if (get_svelte_dataset(p6) !== "svelte-125vlas")
        p6.innerHTML = textContent_8;
      t39 = claim_space(nodes);
      h21 = claim_element(nodes, "H2", { id: true, ["data-svelte-h"]: true });
      if (get_svelte_dataset(h21) !== "svelte-19msz8s")
        h21.innerHTML = textContent_9;
      t41 = claim_space(nodes);
      p7 = claim_element(nodes, "P", { ["data-svelte-h"]: true });
      if (get_svelte_dataset(p7) !== "svelte-fzdzvx")
        p7.innerHTML = textContent_10;
      t45 = claim_space(nodes);
      p8 = claim_element(nodes, "P", { ["data-svelte-h"]: true });
      if (get_svelte_dataset(p8) !== "svelte-1ty6p2m")
        p8.textContent = textContent_11;
      t47 = claim_space(nodes);
      p9 = claim_element(nodes, "P", { ["data-svelte-h"]: true });
      if (get_svelte_dataset(p9) !== "svelte-iqic7")
        p9.innerHTML = textContent_12;
      t51 = claim_space(nodes);
      h22 = claim_element(nodes, "H2", { id: true, ["data-svelte-h"]: true });
      if (get_svelte_dataset(h22) !== "svelte-g4lzcy")
        h22.innerHTML = textContent_13;
      t53 = claim_space(nodes);
      p10 = claim_element(nodes, "P", { ["data-svelte-h"]: true });
      if (get_svelte_dataset(p10) !== "svelte-6xo8zs")
        p10.innerHTML = textContent_14;
      t61 = claim_space(nodes);
      p11 = claim_element(nodes, "P", { ["data-svelte-h"]: true });
      if (get_svelte_dataset(p11) !== "svelte-1p7cu7f")
        p11.innerHTML = textContent_15;
      t64 = claim_space(nodes);
      p12 = claim_element(nodes, "P", { ["data-svelte-h"]: true });
      if (get_svelte_dataset(p12) !== "svelte-1x5ums4")
        p12.innerHTML = textContent_16;
      t72 = claim_space(nodes);
      p13 = claim_element(nodes, "P", { ["data-svelte-h"]: true });
      if (get_svelte_dataset(p13) !== "svelte-oj51vm")
        p13.innerHTML = textContent_17;
      t78 = claim_space(nodes);
      h23 = claim_element(nodes, "H2", { id: true, ["data-svelte-h"]: true });
      if (get_svelte_dataset(h23) !== "svelte-y4vibp")
        h23.innerHTML = textContent_18;
      t80 = claim_space(nodes);
      p14 = claim_element(nodes, "P", { ["data-svelte-h"]: true });
      if (get_svelte_dataset(p14) !== "svelte-10i90ff")
        p14.innerHTML = textContent_19;
      t84 = claim_space(nodes);
      h30 = claim_element(nodes, "H3", { id: true, ["data-svelte-h"]: true });
      if (get_svelte_dataset(h30) !== "svelte-k0gyvc")
        h30.innerHTML = textContent_20;
      t86 = claim_space(nodes);
      p15 = claim_element(nodes, "P", { ["data-svelte-h"]: true });
      if (get_svelte_dataset(p15) !== "svelte-pmrn8n")
        p15.innerHTML = textContent_21;
      t92 = claim_space(nodes);
      p16 = claim_element(nodes, "P", { ["data-svelte-h"]: true });
      if (get_svelte_dataset(p16) !== "svelte-tco0th")
        p16.textContent = textContent_22;
      t94 = claim_space(nodes);
      p17 = claim_element(nodes, "P", { ["data-svelte-h"]: true });
      if (get_svelte_dataset(p17) !== "svelte-xjwy4l")
        p17.textContent = textContent_23;
      t96 = claim_space(nodes);
      p18 = claim_element(nodes, "P", { ["data-svelte-h"]: true });
      if (get_svelte_dataset(p18) !== "svelte-5yw9cd")
        p18.innerHTML = textContent_24;
      t104 = claim_space(nodes);
      h31 = claim_element(nodes, "H3", { id: true, ["data-svelte-h"]: true });
      if (get_svelte_dataset(h31) !== "svelte-1c5ubnl")
        h31.innerHTML = textContent_25;
      t106 = claim_space(nodes);
      p19 = claim_element(nodes, "P", { ["data-svelte-h"]: true });
      if (get_svelte_dataset(p19) !== "svelte-1ilqcs0")
        p19.innerHTML = textContent_26;
      t113 = claim_space(nodes);
      p20 = claim_element(nodes, "P", { ["data-svelte-h"]: true });
      if (get_svelte_dataset(p20) !== "svelte-1qv6h5")
        p20.innerHTML = textContent_27;
      t119 = claim_space(nodes);
      p21 = claim_element(nodes, "P", { ["data-svelte-h"]: true });
      if (get_svelte_dataset(p21) !== "svelte-mh5nvu")
        p21.innerHTML = textContent_28;
      t123 = claim_space(nodes);
      p22 = claim_element(nodes, "P", { ["data-svelte-h"]: true });
      if (get_svelte_dataset(p22) !== "svelte-1qc1hy1")
        p22.innerHTML = textContent_29;
      t129 = claim_space(nodes);
      h32 = claim_element(nodes, "H3", { id: true, ["data-svelte-h"]: true });
      if (get_svelte_dataset(h32) !== "svelte-l8rx0d")
        h32.innerHTML = textContent_30;
      t131 = claim_space(nodes);
      p23 = claim_element(nodes, "P", { ["data-svelte-h"]: true });
      if (get_svelte_dataset(p23) !== "svelte-1r4ze8n")
        p23.innerHTML = textContent_31;
      t137 = claim_space(nodes);
      h24 = claim_element(nodes, "H2", { id: true, ["data-svelte-h"]: true });
      if (get_svelte_dataset(h24) !== "svelte-7dsikd")
        h24.innerHTML = textContent_32;
      t139 = claim_space(nodes);
      p24 = claim_element(nodes, "P", { ["data-svelte-h"]: true });
      if (get_svelte_dataset(p24) !== "svelte-ogcuk0")
        p24.innerHTML = textContent_33;
      t143 = claim_space(nodes);
      p25 = claim_element(nodes, "P", { ["data-svelte-h"]: true });
      if (get_svelte_dataset(p25) !== "svelte-8zz4cd")
        p25.innerHTML = textContent_34;
      t146 = claim_space(nodes);
      p26 = claim_element(nodes, "P", { ["data-svelte-h"]: true });
      if (get_svelte_dataset(p26) !== "svelte-1k4cmzk")
        p26.innerHTML = textContent_35;
      this.h();
    },
    h() {
      if (!src_url_equal(img.src, img_src_value = BannerSrc))
        attr(img, "src", img_src_value);
      attr(img, "width", BannerSize.width);
      attr(img, "height", BannerSize.height);
      attr(img, "alt", "The Tailwind UI Landing Page showing a bunch of beautiful components");
      set_style(img, "background-color", BannerColor);
      attr(h1, "id", "is-tailwind-ui-worth-it");
      attr(h20, "id", "the-tui-workflow");
      html_tag.a = t32;
      attr(h21, "id", "looking-good-has-never-been-this-easy");
      attr(h22, "id", "framework-agnostic");
      attr(h23, "id", "its-not-perfect");
      attr(h30, "id", "components-come-in-just-one-theme");
      attr(h31, "id", "tailwind-css-limitations-show");
      attr(h32, "id", "no-offline-support");
      attr(h24, "id", "is-it-worth-it");
    },
    m(target, anchor) {
      insert_hydration(target, img, anchor);
      insert_hydration(target, t0, anchor);
      insert_hydration(target, h1, anchor);
      insert_hydration(target, t2, anchor);
      insert_hydration(target, p0, anchor);
      insert_hydration(target, t7, anchor);
      insert_hydration(target, p1, anchor);
      insert_hydration(target, t9, anchor);
      insert_hydration(target, blockquote, anchor);
      insert_hydration(target, t15, anchor);
      insert_hydration(target, h20, anchor);
      insert_hydration(target, t19, anchor);
      insert_hydration(target, p3, anchor);
      insert_hydration(target, t26, anchor);
      insert_hydration(target, p4, anchor);
      insert_hydration(target, t30, anchor);
      mount_component(showcase0, target, anchor);
      insert_hydration(target, t31, anchor);
      html_tag.m(raw_value, target, anchor);
      insert_hydration(target, t32, anchor);
      insert_hydration(target, p5, anchor);
      insert_hydration(target, t34, anchor);
      mount_component(showcase1, target, anchor);
      insert_hydration(target, t35, anchor);
      insert_hydration(target, p6, anchor);
      insert_hydration(target, t39, anchor);
      insert_hydration(target, h21, anchor);
      insert_hydration(target, t41, anchor);
      insert_hydration(target, p7, anchor);
      insert_hydration(target, t45, anchor);
      insert_hydration(target, p8, anchor);
      insert_hydration(target, t47, anchor);
      insert_hydration(target, p9, anchor);
      insert_hydration(target, t51, anchor);
      insert_hydration(target, h22, anchor);
      insert_hydration(target, t53, anchor);
      insert_hydration(target, p10, anchor);
      insert_hydration(target, t61, anchor);
      insert_hydration(target, p11, anchor);
      insert_hydration(target, t64, anchor);
      insert_hydration(target, p12, anchor);
      insert_hydration(target, t72, anchor);
      insert_hydration(target, p13, anchor);
      insert_hydration(target, t78, anchor);
      insert_hydration(target, h23, anchor);
      insert_hydration(target, t80, anchor);
      insert_hydration(target, p14, anchor);
      insert_hydration(target, t84, anchor);
      insert_hydration(target, h30, anchor);
      insert_hydration(target, t86, anchor);
      insert_hydration(target, p15, anchor);
      insert_hydration(target, t92, anchor);
      insert_hydration(target, p16, anchor);
      insert_hydration(target, t94, anchor);
      insert_hydration(target, p17, anchor);
      insert_hydration(target, t96, anchor);
      insert_hydration(target, p18, anchor);
      insert_hydration(target, t104, anchor);
      insert_hydration(target, h31, anchor);
      insert_hydration(target, t106, anchor);
      insert_hydration(target, p19, anchor);
      insert_hydration(target, t113, anchor);
      insert_hydration(target, p20, anchor);
      insert_hydration(target, t119, anchor);
      insert_hydration(target, p21, anchor);
      insert_hydration(target, t123, anchor);
      insert_hydration(target, p22, anchor);
      insert_hydration(target, t129, anchor);
      insert_hydration(target, h32, anchor);
      insert_hydration(target, t131, anchor);
      insert_hydration(target, p23, anchor);
      insert_hydration(target, t137, anchor);
      insert_hydration(target, h24, anchor);
      insert_hydration(target, t139, anchor);
      insert_hydration(target, p24, anchor);
      insert_hydration(target, t143, anchor);
      insert_hydration(target, p25, anchor);
      insert_hydration(target, t146, anchor);
      insert_hydration(target, p26, anchor);
      current = true;
    },
    p(ctx2, [dirty]) {
      const showcase0_changes = {};
      if (dirty & /*$$scope, $currency*/
      17) {
        showcase0_changes.$$scope = { dirty, ctx: ctx2 };
      }
      showcase0.$set(showcase0_changes);
      const showcase1_changes = {};
      if (dirty & /*$$scope, $currency*/
      17) {
        showcase1_changes.$$scope = { dirty, ctx: ctx2 };
      }
      showcase1.$set(showcase1_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(showcase0.$$.fragment, local);
      transition_in(showcase1.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(showcase0.$$.fragment, local);
      transition_out(showcase1.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      if (detaching) {
        detach(img);
        detach(t0);
        detach(h1);
        detach(t2);
        detach(p0);
        detach(t7);
        detach(p1);
        detach(t9);
        detach(blockquote);
        detach(t15);
        detach(h20);
        detach(t19);
        detach(p3);
        detach(t26);
        detach(p4);
        detach(t30);
        detach(t31);
        html_tag.d();
        detach(t32);
        detach(p5);
        detach(t34);
        detach(t35);
        detach(p6);
        detach(t39);
        detach(h21);
        detach(t41);
        detach(p7);
        detach(t45);
        detach(p8);
        detach(t47);
        detach(p9);
        detach(t51);
        detach(h22);
        detach(t53);
        detach(p10);
        detach(t61);
        detach(p11);
        detach(t64);
        detach(p12);
        detach(t72);
        detach(p13);
        detach(t78);
        detach(h23);
        detach(t80);
        detach(p14);
        detach(t84);
        detach(h30);
        detach(t86);
        detach(p15);
        detach(t92);
        detach(p16);
        detach(t94);
        detach(p17);
        detach(t96);
        detach(p18);
        detach(t104);
        detach(h31);
        detach(t106);
        detach(p19);
        detach(t113);
        detach(p20);
        detach(t119);
        detach(p21);
        detach(t123);
        detach(p22);
        detach(t129);
        detach(h32);
        detach(t131);
        detach(p23);
        detach(t137);
        detach(h24);
        detach(t139);
        detach(p24);
        detach(t143);
        detach(p25);
        detach(t146);
        detach(p26);
      }
      destroy_component(showcase0, detaching);
      destroy_component(showcase1, detaching);
    }
  };
}
function instance($$self, $$props, $$invalidate) {
  let $currency;
  const currency = writable("USD");
  component_subscribe($$self, currency, (value) => $$invalidate(0, $currency = value));
  function moneyinput_currency_binding(value) {
    $currency = value;
    currency.set($currency);
  }
  function moneyinputmodified_currency_binding(value) {
    $currency = value;
    currency.set($currency);
  }
  return [
    $currency,
    currency,
    moneyinput_currency_binding,
    moneyinputmodified_currency_binding
  ];
}
class Page extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance, create_fragment, safe_not_equal, {});
  }
}
export {
  Page as component
};
