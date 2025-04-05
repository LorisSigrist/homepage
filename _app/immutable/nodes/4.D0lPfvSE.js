import { s as safe_not_equal, j as src_url_equal, E as action_destroyer, q as is_function } from "../chunks/scheduler.C1H_TXk1.js";
import { S as SvelteComponent, i as init, d as detach, y as destroy_component, o as transition_out, p as transition_in, u as set_input_value, s as set_data, z as mount_component, a as insert_hydration, r as listen, k as attr, A as claim_component, g as claim_space, c as claim_element, f as claim_text, n as empty, B as create_component, j as space, h as element, t as text, b as append_hydration, e as children } from "../chunks/index.DwiInUfm.js";
import { M as Metadata } from "../chunks/Metadata.C0NnBRDS.js";
function load() {
  return {
    title: "Blurhash",
    author: "Loris Sigrist",
    description: "Description TBD, I don't know what it is yet."
  };
}
const _page = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  load
}, Symbol.toStringTag, { value: "Module" }));
var q = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "#", "$", "%", "*", "+", ",", "-", ".", ":", ";", "=", "?", "@", "[", "]", "^", "_", "{", "|", "}", "~"], x = (t) => {
  let e = 0;
  for (let r = 0; r < t.length; r++) {
    let n = t[r], l = q.indexOf(n);
    e = e * 83 + l;
  }
  return e;
};
var f = (t) => {
  let e = t / 255;
  return e <= 0.04045 ? e / 12.92 : Math.pow((e + 0.055) / 1.055, 2.4);
}, h = (t) => {
  let e = Math.max(0, Math.min(1, t));
  return e <= 31308e-7 ? Math.trunc(e * 12.92 * 255 + 0.5) : Math.trunc((1.055 * Math.pow(e, 0.4166666666666667) - 0.055) * 255 + 0.5);
}, F = (t) => t < 0 ? -1 : 1, M = (t, e) => F(t) * Math.pow(Math.abs(t), e);
var d = class extends Error {
  constructor(e) {
    super(e), this.name = "ValidationError", this.message = e;
  }
};
var C = (t) => {
  if (!t || t.length < 6)
    throw new d("The blurhash string must be at least 6 characters");
  let e = x(t[0]), r = Math.floor(e / 9) + 1, n = e % 9 + 1;
  if (t.length !== 4 + 2 * n * r)
    throw new d(`blurhash length mismatch: length is ${t.length} but it should be ${4 + 2 * n * r}`);
}, N = (t) => {
  try {
    C(t);
  } catch (e) {
    return { result: false, errorReason: e.message };
  }
  return { result: true };
}, z = (t) => {
  let e = t >> 16, r = t >> 8 & 255, n = t & 255;
  return [f(e), f(r), f(n)];
}, L = (t, e) => {
  let r = Math.floor(t / 361), n = Math.floor(t / 19) % 19, l = t % 19;
  return [M((r - 9) / 9, 2) * e, M((n - 9) / 9, 2) * e, M((l - 9) / 9, 2) * e];
}, U = (t, e, r, n) => {
  C(t), n = n | 1;
  let l = x(t[0]), m = Math.floor(l / 9) + 1, b = l % 9 + 1, i = (x(t[1]) + 1) / 166, u = new Array(b * m);
  for (let o = 0; o < u.length; o++)
    if (o === 0) {
      let a = x(t.substring(2, 6));
      u[o] = z(a);
    } else {
      let a = x(t.substring(4 + o * 2, 6 + o * 2));
      u[o] = L(a, i * n);
    }
  let c = e * 4, s = new Uint8ClampedArray(c * r);
  for (let o = 0; o < r; o++)
    for (let a = 0; a < e; a++) {
      let y = 0, B = 0, R = 0;
      for (let w = 0; w < m; w++)
        for (let P = 0; P < b; P++) {
          let G = Math.cos(Math.PI * a * P / e) * Math.cos(Math.PI * o * w / r), T = u[P + w * b];
          y += T[0] * G, B += T[1] * G, R += T[2] * G;
        }
      let V = h(y), I = h(B), E = h(R);
      s[4 * a + 0 + o * c] = V, s[4 * a + 1 + o * c] = I, s[4 * a + 2 + o * c] = E, s[4 * a + 3 + o * c] = 255;
    }
  return s;
}, j = U;
const digitCharacters = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "#",
  "$",
  "%",
  "*",
  "+",
  ",",
  "-",
  ".",
  ":",
  ";",
  "=",
  "?",
  "@",
  "[",
  "]",
  "^",
  "_",
  "{",
  "|",
  "}",
  "~"
];
const decode83 = (str) => {
  let value = 0;
  for (let i = 0; i < str.length; i++) {
    const c = str[i];
    const digit = digitCharacters.indexOf(c);
    value = value * 83 + digit;
  }
  return value;
};
const DEFAULT_OPTIONS = {
  width: 8,
  height: 8,
  blur: 20
};
function blurhashAsGradients(blurhash2, options = {}) {
  const { width, height, blur } = {
    ...DEFAULT_OPTIONS,
    ...options
  };
  const pixels = j(blurhash2, width, height, 1);
  const backgroundSize = asPercentage(1 / width) + " 100%";
  const backgroundRepeat = "no-repeat";
  const backgroundPositions = [];
  const backgroundImages = [];
  for (let x2 = 0; x2 < width; x2++) {
    const stops = [];
    for (let y = 0; y < height; y++) {
      const hex = getColor(pixels, x2, y, width);
      stops.push(hex);
    }
    backgroundImages.push(`linear-gradient(${stops.join(",")})`);
    const bgPosition = x2 == 0 ? "0 0" : `${asPercentage(x2 / (width - 1))} 0`;
    backgroundPositions.push(bgPosition);
  }
  const boxShadow = `0 0 0 10000px ${getAverageColor(blurhash2)}`;
  return {
    backgroundImage: backgroundImages.join(","),
    backgroundPosition: backgroundPositions.join(","),
    backgroundSize,
    backgroundRepeat,
    boxShadow,
    filter: `blur(${blur}px)`,
    clipPath: "inset(0)"
  };
}
function getColor(pixels, x2, y, width) {
  const CHANNELS = 4;
  const BYTES_PER_ROW = width * CHANNELS;
  const index = y * BYTES_PER_ROW + x2 * CHANNELS;
  const r = pixels[index];
  const g = pixels[index + 1];
  const b = pixels[index + 2];
  return rgbToCompactHex(r, g, b);
}
function asPercentage(ratio) {
  const percentage = ratio * 100;
  if (percentage === Math.round(percentage))
    return percentage + "%";
  const percentageString = percentage.toFixed(1);
  return percentageString + "%";
}
function rgbToCompactHex(r, g, b) {
  r = Math.floor(r / 16);
  g = Math.floor(g / 16);
  b = Math.floor(b / 16);
  const rHex = r.toString(16)[0];
  const gHex = g.toString(16)[0];
  const bHex = b.toString(16)[0];
  return "#" + rHex + gHex + bHex;
}
function getAverageColor(blurhash2) {
  const value = blurhash2.substring(2, 6);
  const averageColor = decode83(value);
  const r = averageColor >> 16;
  const g = averageColor >> 8 & 255;
  const b = averageColor & 255;
  return rgbToCompactHex(r, g, b);
}
function styleObjectToCssString(obj) {
  let css = "";
  for (const key in obj) {
    const kebabKey = camelToKebabCase(key);
    const value = obj[key];
    css += `${kebabKey}:${value};`;
  }
  return css;
}
function camelToKebabCase(str) {
  return str.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, "$1-$2").toLowerCase();
}
const big_image = "" + new URL("../assets/big.CTPQD3Sl.jpeg", import.meta.url).href;
const big_image_size = {
  width: 5616,
  height: 3744
};
const blurhash = "L36@sCAb0g|;%MRkWCoe01,.~A69";
function get_if_ctx(ctx) {
  const child_ctx = ctx.slice();
  const constants_0 = styleObjectToCssString(
    /*blurhashCss*/
    child_ctx[2]
  );
  child_ctx[5] = constants_0;
  return child_ctx;
}
function create_if_block_1(ctx) {
  let div1;
  let div0;
  let div0_style_value;
  let t0;
  let img;
  let img_src_value;
  let t1;
  let p;
  let t2_value = (
    /*style*/
    ctx[5] + ""
  );
  let t2;
  return {
    c() {
      div1 = element("div");
      div0 = element("div");
      t0 = space();
      img = element("img");
      t1 = space();
      p = element("p");
      t2 = text(t2_value);
      this.h();
    },
    l(nodes) {
      div1 = claim_element(nodes, "DIV", { class: true });
      var div1_nodes = children(div1);
      div0 = claim_element(div1_nodes, "DIV", { style: true, class: true });
      children(div0).forEach(detach);
      t0 = claim_space(div1_nodes);
      img = claim_element(div1_nodes, "IMG", {
        src: true,
        width: true,
        height: true,
        alt: true
      });
      div1_nodes.forEach(detach);
      t1 = claim_space(nodes);
      p = claim_element(nodes, "P", {});
      var p_nodes = children(p);
      t2 = claim_text(p_nodes, t2_value);
      p_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(div0, "style", div0_style_value = /*style*/
      ctx[5]);
      attr(div0, "class", "absolute inset-0 -z-10");
      if (!src_url_equal(img.src, img_src_value = big_image))
        attr(img, "src", img_src_value);
      attr(img, "width", big_image_size.width);
      attr(img, "height", big_image_size.height);
      attr(img, "alt", "big");
      attr(div1, "class", "relative");
    },
    m(target, anchor) {
      insert_hydration(target, div1, anchor);
      append_hydration(div1, div0);
      append_hydration(div1, t0);
      append_hydration(div1, img);
      insert_hydration(target, t1, anchor);
      insert_hydration(target, p, anchor);
      append_hydration(p, t2);
    },
    p(ctx2, dirty) {
      if (dirty & /*blurhashCss*/
      4 && div0_style_value !== (div0_style_value = /*style*/
      ctx2[5])) {
        attr(div0, "style", div0_style_value);
      }
      if (dirty & /*blurhashCss*/
      4 && t2_value !== (t2_value = /*style*/
      ctx2[5] + ""))
        set_data(t2, t2_value);
    },
    d(detaching) {
      if (detaching) {
        detach(div1);
        detach(t1);
        detach(p);
      }
    }
  };
}
function create_if_block(ctx) {
  let canvas;
  let blurhashDisplay_action;
  let mounted;
  let dispose;
  return {
    c() {
      canvas = element("canvas");
      this.h();
    },
    l(nodes) {
      canvas = claim_element(nodes, "CANVAS", { class: true });
      children(canvas).forEach(detach);
      this.h();
    },
    h() {
      attr(canvas, "class", "w-96");
    },
    m(target, anchor) {
      insert_hydration(target, canvas, anchor);
      if (!mounted) {
        dispose = action_destroyer(blurhashDisplay_action = /*blurhashDisplay*/
        ctx[3].call(
          null,
          canvas,
          /*blurhash*/
          ctx[1]
        ));
        mounted = true;
      }
    },
    p(ctx2, dirty) {
      if (blurhashDisplay_action && is_function(blurhashDisplay_action.update) && dirty & /*blurhash*/
      2)
        blurhashDisplay_action.update.call(
          null,
          /*blurhash*/
          ctx2[1]
        );
    },
    d(detaching) {
      if (detaching) {
        detach(canvas);
      }
      mounted = false;
      dispose();
    }
  };
}
function create_fragment(ctx) {
  let metadata;
  let t0;
  let input;
  let t1;
  let t2;
  let t3;
  let t4;
  let if_block1_anchor;
  let current;
  let mounted;
  let dispose;
  metadata = new Metadata({});
  let if_block0 = (
    /*blurhashCss*/
    ctx[2] && create_if_block_1(get_if_ctx(ctx))
  );
  let if_block1 = (
    /*blurhash*/
    ctx[1] && create_if_block(ctx)
  );
  return {
    c() {
      create_component(metadata.$$.fragment);
      t0 = space();
      input = element("input");
      t1 = space();
      t2 = text(
        /*blurhashInput*/
        ctx[0]
      );
      t3 = space();
      if (if_block0)
        if_block0.c();
      t4 = space();
      if (if_block1)
        if_block1.c();
      if_block1_anchor = empty();
      this.h();
    },
    l(nodes) {
      claim_component(metadata.$$.fragment, nodes);
      t0 = claim_space(nodes);
      input = claim_element(nodes, "INPUT", { type: true });
      t1 = claim_space(nodes);
      t2 = claim_text(
        nodes,
        /*blurhashInput*/
        ctx[0]
      );
      t3 = claim_space(nodes);
      if (if_block0)
        if_block0.l(nodes);
      t4 = claim_space(nodes);
      if (if_block1)
        if_block1.l(nodes);
      if_block1_anchor = empty();
      this.h();
    },
    h() {
      attr(input, "type", "text");
    },
    m(target, anchor) {
      mount_component(metadata, target, anchor);
      insert_hydration(target, t0, anchor);
      insert_hydration(target, input, anchor);
      set_input_value(
        input,
        /*blurhashInput*/
        ctx[0]
      );
      insert_hydration(target, t1, anchor);
      insert_hydration(target, t2, anchor);
      insert_hydration(target, t3, anchor);
      if (if_block0)
        if_block0.m(target, anchor);
      insert_hydration(target, t4, anchor);
      if (if_block1)
        if_block1.m(target, anchor);
      insert_hydration(target, if_block1_anchor, anchor);
      current = true;
      if (!mounted) {
        dispose = listen(
          input,
          "input",
          /*input_input_handler*/
          ctx[4]
        );
        mounted = true;
      }
    },
    p(ctx2, [dirty]) {
      if (dirty & /*blurhashInput*/
      1 && input.value !== /*blurhashInput*/
      ctx2[0]) {
        set_input_value(
          input,
          /*blurhashInput*/
          ctx2[0]
        );
      }
      if (!current || dirty & /*blurhashInput*/
      1)
        set_data(
          t2,
          /*blurhashInput*/
          ctx2[0]
        );
      if (
        /*blurhashCss*/
        ctx2[2]
      ) {
        if (if_block0) {
          if_block0.p(get_if_ctx(ctx2), dirty);
        } else {
          if_block0 = create_if_block_1(get_if_ctx(ctx2));
          if_block0.c();
          if_block0.m(t4.parentNode, t4);
        }
      } else if (if_block0) {
        if_block0.d(1);
        if_block0 = null;
      }
      if (
        /*blurhash*/
        ctx2[1]
      ) {
        if (if_block1) {
          if_block1.p(ctx2, dirty);
        } else {
          if_block1 = create_if_block(ctx2);
          if_block1.c();
          if_block1.m(if_block1_anchor.parentNode, if_block1_anchor);
        }
      } else if (if_block1) {
        if_block1.d(1);
        if_block1 = null;
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(metadata.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(metadata.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      if (detaching) {
        detach(t0);
        detach(input);
        detach(t1);
        detach(t2);
        detach(t3);
        detach(t4);
        detach(if_block1_anchor);
      }
      destroy_component(metadata, detaching);
      if (if_block0)
        if_block0.d(detaching);
      if (if_block1)
        if_block1.d(detaching);
      mounted = false;
      dispose();
    }
  };
}
function instance($$self, $$props, $$invalidate) {
  let blurhash$1;
  let blurhashCss;
  let blurhashInput = blurhash;
  function blurhashDisplay(canvas, blurhash2) {
    const ctx = canvas.getContext("2d");
    if (!ctx)
      throw new Error("Could not get 2d context");
    const width = 32;
    const height = 32;
    canvas.width = width;
    canvas.height = height;
    const display = () => {
      const pixels = j(blurhash2, width, height);
      const imageData = ctx.createImageData(width, height);
      imageData.data.set(pixels);
      ctx.putImageData(imageData, 0, 0);
    };
    display();
    return {
      update(newBlurhash) {
        blurhash2 = newBlurhash;
        display();
      }
    };
  }
  function input_input_handler() {
    blurhashInput = this.value;
    $$invalidate(0, blurhashInput);
  }
  $$self.$$.update = () => {
    if ($$self.$$.dirty & /*blurhashInput*/
    1) {
      $$invalidate(1, blurhash$1 = N(blurhashInput).result ? blurhashInput : null);
    }
    if ($$self.$$.dirty & /*blurhash*/
    2) {
      $$invalidate(2, blurhashCss = blurhash$1 ? blurhashAsGradients(blurhash$1, { blur: 60, width: 8, height: 8 }) : null);
    }
  };
  return [blurhashInput, blurhash$1, blurhashCss, blurhashDisplay, input_input_handler];
}
class Page extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance, create_fragment, safe_not_equal, {});
  }
}
export {
  Page as component,
  _page as universal
};
