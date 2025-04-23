import { s as safe_not_equal, n as noop, d as src_url_equal, r as run_all } from "../chunks/scheduler.6c6_dOpU.js";
import { S as SvelteComponent, i as init, d as detach, a as insert_hydration, b as append_hydration, r as listen, k as attr, c as claim_element, l as get_svelte_dataset, g as claim_space, e as children, n as empty, h as element, j as space, s as set_data, f as claim_text, t as text } from "../chunks/index.Cr7Iuz5O.js";
function generateGodelNumber(flaci) {
  flaci = modifySoThatThereIsOnlyOneAcceptingState(flaci);
  const IDMap = generateIDMappings(flaci);
  flaci = remapIDs(flaci, IDMap);
  console.log(JSON.stringify(flaci));
  const transitions = [];
  const reorderedStackAlphabet = reorderedAlphabet(flaci.automaton.StackAlphabet);
  for (const state of flaci.automaton.States) {
    for (const transition of state.Transitions) {
      for (const label of transition.Labels) {
        const fromSymbolID = reorderedStackAlphabet.indexOf(label[0]) + 1;
        const toSymbolID = reorderedStackAlphabet.indexOf(label[1]) + 1;
        const direction = {
          L: 1,
          R: 2,
          N: void 0
        }[label[2]];
        if (fromSymbolID === void 0 || toSymbolID === void 0 || direction === void 0)
          throw new Error("Invalid label");
        const str = [transition.Source, fromSymbolID, transition.Target, toSymbolID, direction].map(zeros).join("1");
        transitions.push(str);
      }
    }
  }
  const godel = "1" + transitions.join("11");
  return BigInt("0b" + godel);
}
function zeros(n) {
  return "0".repeat(n);
}
function generateIDMappings(flaci) {
  const map = /* @__PURE__ */ new Map();
  const startingState = flaci.automaton.States.find((state) => state.Start);
  const acceptingState = flaci.automaton.States.find((state) => state.Final);
  const otherStates = flaci.automaton.States.filter((state) => !state.Start && !state.Final);
  if (!startingState)
    throw new Error("No starting state found");
  if (!acceptingState)
    throw new Error("No accepting state found");
  map.set(startingState.ID, 1);
  map.set(acceptingState.ID, 2);
  for (const otherState of otherStates) {
    map.set(otherState.ID, map.size + 1);
  }
  return map;
}
function remapIDs(flaci, map) {
  const modified = structuredClone(flaci);
  for (const state of modified.automaton.States) {
    state.ID = map.get(state.ID) || -1;
    state.Name = `q${state.ID}`;
    for (const transition of state.Transitions) {
      transition.Source = map.get(transition.Source) || -1;
      transition.Target = map.get(transition.Target) || -1;
    }
  }
  return modified;
}
function reorderedAlphabet(alphabet) {
  if (alphabet.length < 1)
    return alphabet;
  const emptySymbol = alphabet[0];
  const newAlphabet = [
    "0",
    "1",
    emptySymbol
  ];
  for (const symbol of alphabet) {
    if (!newAlphabet.includes(symbol))
      newAlphabet.push(symbol);
  }
  return newAlphabet;
}
function modifySoThatThereIsOnlyOneAcceptingState(flaci) {
  const modified = structuredClone(flaci);
  const maxID = Math.max(...modified.automaton.States.map((state) => state.ID));
  const acceptingState = {
    ID: maxID + 1,
    Name: `q${maxID + 1}`,
    x: 0,
    y: 0,
    Start: false,
    Final: true,
    Radius: 30,
    Transitions: []
  };
  for (const state of modified.automaton.States) {
    if (!state.Final)
      continue;
    const usedSymbols = /* @__PURE__ */ new Set();
    for (const transition of state.Transitions) {
      for (const label of transition.Labels) {
        usedSymbols.add(label[0]);
      }
    }
    const unusedSymbols = modified.automaton.StackAlphabet.filter((s) => !usedSymbols.has(s));
    state.Transitions.push({
      Source: state.ID,
      Target: acceptingState.ID,
      x: 0,
      y: 0,
      Labels: unusedSymbols.map((s) => [s, s, "R"])
    });
    state.Final = false;
  }
  modified.automaton.States.push(acceptingState);
  return modified;
}
const flaci_download_button_image = "" + new URL("../assets/flaci-download-button.D73xLCA2.png", import.meta.url).href;
function create_if_block(ctx) {
  let h20;
  let textContent = "Binary";
  let t1;
  let p0;
  let t2_value = (
    /*godelNumber*/
    ctx[0].toString(2) + ""
  );
  let t2;
  let t3;
  let button0;
  let textContent_1 = "Copy";
  let t5;
  let h21;
  let textContent_2 = "Decimal";
  let t7;
  let p1;
  let t8;
  let t9;
  let button1;
  let textContent_3 = "Copy";
  let mounted;
  let dispose;
  return {
    c() {
      h20 = element("h2");
      h20.textContent = textContent;
      t1 = space();
      p0 = element("p");
      t2 = text(t2_value);
      t3 = space();
      button0 = element("button");
      button0.textContent = textContent_1;
      t5 = space();
      h21 = element("h2");
      h21.textContent = textContent_2;
      t7 = space();
      p1 = element("p");
      t8 = text(
        /*godelNumber*/
        ctx[0]
      );
      t9 = space();
      button1 = element("button");
      button1.textContent = textContent_3;
    },
    l(nodes) {
      h20 = claim_element(nodes, "H2", { ["data-svelte-h"]: true });
      if (get_svelte_dataset(h20) !== "svelte-1lw6rbr")
        h20.textContent = textContent;
      t1 = claim_space(nodes);
      p0 = claim_element(nodes, "P", {});
      var p0_nodes = children(p0);
      t2 = claim_text(p0_nodes, t2_value);
      p0_nodes.forEach(detach);
      t3 = claim_space(nodes);
      button0 = claim_element(nodes, "BUTTON", { ["data-svelte-h"]: true });
      if (get_svelte_dataset(button0) !== "svelte-1uk9zfx")
        button0.textContent = textContent_1;
      t5 = claim_space(nodes);
      h21 = claim_element(nodes, "H2", { ["data-svelte-h"]: true });
      if (get_svelte_dataset(h21) !== "svelte-hrchcr")
        h21.textContent = textContent_2;
      t7 = claim_space(nodes);
      p1 = claim_element(nodes, "P", {});
      var p1_nodes = children(p1);
      t8 = claim_text(
        p1_nodes,
        /*godelNumber*/
        ctx[0]
      );
      p1_nodes.forEach(detach);
      t9 = claim_space(nodes);
      button1 = claim_element(nodes, "BUTTON", { ["data-svelte-h"]: true });
      if (get_svelte_dataset(button1) !== "svelte-19vpth4")
        button1.textContent = textContent_3;
    },
    m(target, anchor) {
      insert_hydration(target, h20, anchor);
      insert_hydration(target, t1, anchor);
      insert_hydration(target, p0, anchor);
      append_hydration(p0, t2);
      insert_hydration(target, t3, anchor);
      insert_hydration(target, button0, anchor);
      insert_hydration(target, t5, anchor);
      insert_hydration(target, h21, anchor);
      insert_hydration(target, t7, anchor);
      insert_hydration(target, p1, anchor);
      append_hydration(p1, t8);
      insert_hydration(target, t9, anchor);
      insert_hydration(target, button1, anchor);
      if (!mounted) {
        dispose = [
          listen(
            button0,
            "click",
            /*click_handler*/
            ctx[3]
          ),
          listen(
            button1,
            "click",
            /*click_handler_1*/
            ctx[4]
          )
        ];
        mounted = true;
      }
    },
    p(ctx2, dirty) {
      if (dirty & /*godelNumber*/
      1 && t2_value !== (t2_value = /*godelNumber*/
      ctx2[0].toString(2) + ""))
        set_data(t2, t2_value);
      if (dirty & /*godelNumber*/
      1)
        set_data(
          t8,
          /*godelNumber*/
          ctx2[0]
        );
    },
    d(detaching) {
      if (detaching) {
        detach(h20);
        detach(t1);
        detach(p0);
        detach(t3);
        detach(button0);
        detach(t5);
        detach(h21);
        detach(t7);
        detach(p1);
        detach(t9);
        detach(button1);
      }
      mounted = false;
      run_all(dispose);
    }
  };
}
function create_fragment(ctx) {
  let h1;
  let textContent = "Flaci to Gödel-Number Converter";
  let t1;
  let p0;
  let textContent_1 = "This Tool converts Flaci's JSON files for Turing Machines to a Godel Number";
  let t3;
  let h20;
  let textContent_2 = "How to use";
  let t5;
  let p1;
  let textContent_3 = "1. Download your Turing Machine as a JSON file from flaci using\n    the download button in the top right";
  let t7;
  let img;
  let img_src_value;
  let t8;
  let p2;
  let textContent_4 = '2. Below, select "Upload FLACI Json file" and upload the JSON file';
  let t10;
  let h21;
  let textContent_5 = "Tool";
  let t12;
  let label;
  let span;
  let textContent_6 = "Upload FLACI Json file";
  let t14;
  let input;
  let t15;
  let if_block_anchor;
  let mounted;
  let dispose;
  let if_block = (
    /*godelNumber*/
    ctx[0] && create_if_block(ctx)
  );
  return {
    c() {
      h1 = element("h1");
      h1.textContent = textContent;
      t1 = space();
      p0 = element("p");
      p0.textContent = textContent_1;
      t3 = space();
      h20 = element("h2");
      h20.textContent = textContent_2;
      t5 = space();
      p1 = element("p");
      p1.textContent = textContent_3;
      t7 = space();
      img = element("img");
      t8 = space();
      p2 = element("p");
      p2.textContent = textContent_4;
      t10 = space();
      h21 = element("h2");
      h21.textContent = textContent_5;
      t12 = space();
      label = element("label");
      span = element("span");
      span.textContent = textContent_6;
      t14 = space();
      input = element("input");
      t15 = space();
      if (if_block)
        if_block.c();
      if_block_anchor = empty();
      this.h();
    },
    l(nodes) {
      h1 = claim_element(nodes, "H1", { ["data-svelte-h"]: true });
      if (get_svelte_dataset(h1) !== "svelte-jmj27g")
        h1.textContent = textContent;
      t1 = claim_space(nodes);
      p0 = claim_element(nodes, "P", { ["data-svelte-h"]: true });
      if (get_svelte_dataset(p0) !== "svelte-1t177dy")
        p0.textContent = textContent_1;
      t3 = claim_space(nodes);
      h20 = claim_element(nodes, "H2", { ["data-svelte-h"]: true });
      if (get_svelte_dataset(h20) !== "svelte-1cc68ee")
        h20.textContent = textContent_2;
      t5 = claim_space(nodes);
      p1 = claim_element(nodes, "P", { ["data-svelte-h"]: true });
      if (get_svelte_dataset(p1) !== "svelte-u7bjnq")
        p1.textContent = textContent_3;
      t7 = claim_space(nodes);
      img = claim_element(nodes, "IMG", { src: true, alt: true });
      t8 = claim_space(nodes);
      p2 = claim_element(nodes, "P", { ["data-svelte-h"]: true });
      if (get_svelte_dataset(p2) !== "svelte-a1cbns")
        p2.textContent = textContent_4;
      t10 = claim_space(nodes);
      h21 = claim_element(nodes, "H2", { ["data-svelte-h"]: true });
      if (get_svelte_dataset(h21) !== "svelte-yhwwis")
        h21.textContent = textContent_5;
      t12 = claim_space(nodes);
      label = claim_element(nodes, "LABEL", {});
      var label_nodes = children(label);
      span = claim_element(label_nodes, "SPAN", { ["data-svelte-h"]: true });
      if (get_svelte_dataset(span) !== "svelte-jqq2qy")
        span.textContent = textContent_6;
      t14 = claim_space(label_nodes);
      input = claim_element(label_nodes, "INPUT", { type: true, accept: true });
      label_nodes.forEach(detach);
      t15 = claim_space(nodes);
      if (if_block)
        if_block.l(nodes);
      if_block_anchor = empty();
      this.h();
    },
    h() {
      if (!src_url_equal(img.src, img_src_value = flaci_download_button_image))
        attr(img, "src", img_src_value);
      attr(img, "alt", "Flaci Download Button");
      attr(input, "type", "file");
      attr(input, "accept", "application/json");
    },
    m(target, anchor) {
      insert_hydration(target, h1, anchor);
      insert_hydration(target, t1, anchor);
      insert_hydration(target, p0, anchor);
      insert_hydration(target, t3, anchor);
      insert_hydration(target, h20, anchor);
      insert_hydration(target, t5, anchor);
      insert_hydration(target, p1, anchor);
      insert_hydration(target, t7, anchor);
      insert_hydration(target, img, anchor);
      insert_hydration(target, t8, anchor);
      insert_hydration(target, p2, anchor);
      insert_hydration(target, t10, anchor);
      insert_hydration(target, h21, anchor);
      insert_hydration(target, t12, anchor);
      insert_hydration(target, label, anchor);
      append_hydration(label, span);
      append_hydration(label, t14);
      append_hydration(label, input);
      insert_hydration(target, t15, anchor);
      if (if_block)
        if_block.m(target, anchor);
      insert_hydration(target, if_block_anchor, anchor);
      if (!mounted) {
        dispose = listen(
          input,
          "change",
          /*handleFileUpload*/
          ctx[1]
        );
        mounted = true;
      }
    },
    p(ctx2, [dirty]) {
      if (
        /*godelNumber*/
        ctx2[0]
      ) {
        if (if_block) {
          if_block.p(ctx2, dirty);
        } else {
          if_block = create_if_block(ctx2);
          if_block.c();
          if_block.m(if_block_anchor.parentNode, if_block_anchor);
        }
      } else if (if_block) {
        if_block.d(1);
        if_block = null;
      }
    },
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching) {
        detach(h1);
        detach(t1);
        detach(p0);
        detach(t3);
        detach(h20);
        detach(t5);
        detach(p1);
        detach(t7);
        detach(img);
        detach(t8);
        detach(p2);
        detach(t10);
        detach(h21);
        detach(t12);
        detach(label);
        detach(t15);
        detach(if_block_anchor);
      }
      if (if_block)
        if_block.d(detaching);
      mounted = false;
      dispose();
    }
  };
}
function copyToClipboard(str) {
  navigator.clipboard.writeText(str);
}
function instance($$self, $$props, $$invalidate) {
  let godelNumber;
  let flaci = void 0;
  const handleFileUpload = (e) => {
    const reader = new FileReader();
    reader.onload = (e2) => {
      if (typeof reader.result !== "string")
        return;
      $$invalidate(2, flaci = JSON.parse(reader.result));
    };
    reader.readAsText(e.target.files[0]);
  };
  const click_handler = () => copyToClipboard(godelNumber.toString(2));
  const click_handler_1 = () => copyToClipboard(godelNumber.toString(10));
  $$self.$$.update = () => {
    if ($$self.$$.dirty & /*flaci*/
    4) {
      $$invalidate(0, godelNumber = flaci ? generateGodelNumber(flaci) : void 0);
    }
  };
  return [godelNumber, handleFileUpload, flaci, click_handler, click_handler_1];
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
