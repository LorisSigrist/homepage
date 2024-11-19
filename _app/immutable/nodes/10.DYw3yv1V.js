import { i as identity, d as split_css_unit, s as safe_not_equal, c as component_subscribe, o as onMount, e as add_render_callback, n as noop } from "../chunks/scheduler.DwkGEAYb.js";
import { S as SvelteComponent, i as init, e as element, t as text, s as space, c as claim_element, a as children, b as claim_text, d as detach, f as claim_space, m as attr, g as insert_hydration, h as append_hydration, u as set_input_value, r as listen, j as set_data, o as transition_in, v as group_outros, p as transition_out, w as check_outros, x as create_bidirectional_transition, k as get_svelte_dataset, y as create_component, H as HtmlTagHydration, z as claim_component, l as claim_html_tag, A as mount_component, B as destroy_component } from "../chunks/index.BoYP9eQs.js";
import { _ as __vitePreload } from "../chunks/preload-helper.CP-VSAQc.js";
import { w as writable } from "../chunks/index.CU0sutvA.js";
import { S as Showcase } from "../chunks/Showcase.Dhs04y0u.js";
function cubicOut(t) {
  const f = t - 1;
  return f * f * f + 1;
}
function fade(node, { delay = 0, duration = 400, easing = identity } = {}) {
  const o = +getComputedStyle(node).opacity;
  return {
    delay,
    duration,
    easing,
    css: (t) => `opacity: ${t * o}`
  };
}
function fly(node, { delay = 0, duration = 400, easing = cubicOut, x = 0, y = 0, opacity = 0 } = {}) {
  const style = getComputedStyle(node);
  const target_opacity = +style.opacity;
  const transform = style.transform === "none" ? "" : style.transform;
  const od = target_opacity * (1 - opacity);
  const [xValue, xUnit] = split_css_unit(x);
  const [yValue, yUnit] = split_css_unit(y);
  return {
    delay,
    duration,
    easing,
    css: (t, u) => `
			transform: ${transform} translate(${(1 - t) * xValue}${xUnit}, ${(1 - t) * yValue}${yUnit});
			opacity: ${target_opacity - od * u}`
  };
}
function create_if_block_1(ctx) {
  let div;
  let span;
  let t_value = (
    /*parsed*/
    ctx[4].toLocaleDateString("en", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric"
    }) + ""
  );
  let t;
  let div_transition;
  let current;
  return {
    c() {
      div = element("div");
      span = element("span");
      t = text(t_value);
      this.h();
    },
    l(nodes) {
      div = claim_element(nodes, "DIV", { class: true });
      var div_nodes = children(div);
      span = claim_element(div_nodes, "SPAN", { class: true });
      var span_nodes = children(span);
      t = claim_text(span_nodes, t_value);
      span_nodes.forEach(detach);
      div_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(span, "class", "align-middle text-xs");
      attr(div, "class", "pointer-events-none absolute top-1/2 -translate-y-1/2 h-6 right-3 px-4 sm:flex items-center shadow-sm bg-indigo-600 rounded-full hidden text-white");
    },
    m(target, anchor) {
      insert_hydration(target, div, anchor);
      append_hydration(div, span);
      append_hydration(span, t);
      current = true;
    },
    p(ctx2, dirty) {
      if ((!current || dirty & /*parsed*/
      16) && t_value !== (t_value = /*parsed*/
      ctx2[4].toLocaleDateString("en", {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "numeric",
        minute: "numeric"
      }) + ""))
        set_data(t, t_value);
    },
    i(local) {
      if (current)
        return;
      add_render_callback(() => {
        if (!current)
          return;
        if (!div_transition)
          div_transition = create_bidirectional_transition(div, fly, { x: 10, duration: 100 }, true);
        div_transition.run(1);
      });
      current = true;
    },
    o(local) {
      if (!div_transition)
        div_transition = create_bidirectional_transition(div, fly, { x: 10, duration: 100 }, false);
      div_transition.run(0);
      current = false;
    },
    d(detaching) {
      if (detaching) {
        detach(div);
      }
      if (detaching && div_transition)
        div_transition.end();
    }
  };
}
function create_else_block(ctx) {
  let span;
  let textContent = "Please enter a time and date";
  let span_transition;
  let current;
  return {
    c() {
      span = element("span");
      span.textContent = textContent;
      this.h();
    },
    l(nodes) {
      span = claim_element(nodes, "SPAN", { class: true, ["data-svelte-h"]: true });
      if (get_svelte_dataset(span) !== "svelte-12n62la")
        span.textContent = textContent;
      this.h();
    },
    h() {
      attr(span, "class", "text-xs opacity-75 absolute left-0 top-2");
    },
    m(target, anchor) {
      insert_hydration(target, span, anchor);
      current = true;
    },
    p: noop,
    i(local) {
      if (current)
        return;
      add_render_callback(() => {
        if (!current)
          return;
        if (!span_transition)
          span_transition = create_bidirectional_transition(span, fade, { duration: 100 }, true);
        span_transition.run(1);
      });
      current = true;
    },
    o(local) {
      if (!span_transition)
        span_transition = create_bidirectional_transition(span, fade, { duration: 100 }, false);
      span_transition.run(0);
      current = false;
    },
    d(detaching) {
      if (detaching) {
        detach(span);
      }
      if (detaching && span_transition)
        span_transition.end();
    }
  };
}
function create_if_block(ctx) {
  let span;
  let t_value = (
    /*parsed*/
    ctx[4].toLocaleDateString("en", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric"
    }) + ""
  );
  let t;
  let span_transition;
  let current;
  return {
    c() {
      span = element("span");
      t = text(t_value);
      this.h();
    },
    l(nodes) {
      span = claim_element(nodes, "SPAN", { class: true });
      var span_nodes = children(span);
      t = claim_text(span_nodes, t_value);
      span_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(span, "class", "text-xs opacity-75 absolute left-0 top-2");
    },
    m(target, anchor) {
      insert_hydration(target, span, anchor);
      append_hydration(span, t);
      current = true;
    },
    p(ctx2, dirty) {
      if ((!current || dirty & /*parsed*/
      16) && t_value !== (t_value = /*parsed*/
      ctx2[4].toLocaleDateString("en", {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "numeric",
        minute: "numeric"
      }) + ""))
        set_data(t, t_value);
    },
    i(local) {
      if (current)
        return;
      add_render_callback(() => {
        if (!current)
          return;
        if (!span_transition)
          span_transition = create_bidirectional_transition(span, fade, { duration: 100 }, true);
        span_transition.run(1);
      });
      current = true;
    },
    o(local) {
      if (!span_transition)
        span_transition = create_bidirectional_transition(span, fade, { duration: 100 }, false);
      span_transition.run(0);
      current = false;
    },
    d(detaching) {
      if (detaching) {
        detach(span);
      }
      if (detaching && span_transition)
        span_transition.end();
    }
  };
}
function create_fragment$1(ctx) {
  let div2;
  let label_1;
  let t0;
  let t1;
  let div0;
  let input;
  let input_placeholder_value;
  let input_disabled_value;
  let t2;
  let t3;
  let div1;
  let current_block_type_index;
  let if_block1;
  let current;
  let mounted;
  let dispose;
  let if_block0 = (
    /*parsed*/
    ctx[4] && create_if_block_1(ctx)
  );
  const if_block_creators = [create_if_block, create_else_block];
  const if_blocks = [];
  function select_block_type(ctx2, dirty) {
    if (
      /*parsed*/
      ctx2[4]
    )
      return 0;
    return 1;
  }
  current_block_type_index = select_block_type(ctx);
  if_block1 = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
  return {
    c() {
      div2 = element("div");
      label_1 = element("label");
      t0 = text(
        /*label*/
        ctx[2]
      );
      t1 = space();
      div0 = element("div");
      input = element("input");
      t2 = space();
      if (if_block0)
        if_block0.c();
      t3 = space();
      div1 = element("div");
      if_block1.c();
      this.h();
    },
    l(nodes) {
      div2 = claim_element(nodes, "DIV", {});
      var div2_nodes = children(div2);
      label_1 = claim_element(div2_nodes, "LABEL", { for: true, class: true });
      var label_1_nodes = children(label_1);
      t0 = claim_text(
        label_1_nodes,
        /*label*/
        ctx[2]
      );
      label_1_nodes.forEach(detach);
      t1 = claim_space(div2_nodes);
      div0 = claim_element(div2_nodes, "DIV", { class: true });
      var div0_nodes = children(div0);
      input = claim_element(div0_nodes, "INPUT", {
        type: true,
        name: true,
        id: true,
        placeholder: true,
        class: true
      });
      t2 = claim_space(div0_nodes);
      if (if_block0)
        if_block0.l(div0_nodes);
      div0_nodes.forEach(detach);
      t3 = claim_space(div2_nodes);
      div1 = claim_element(div2_nodes, "DIV", { class: true });
      var div1_nodes = children(div1);
      if_block1.l(div1_nodes);
      div1_nodes.forEach(detach);
      div2_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(
        label_1,
        "for",
        /*id*/
        ctx[0]
      );
      attr(label_1, "class", "block text-sm font-medium leading-6 text-gray-900 dark:text-white pointer-events-none");
      attr(input, "type", "text");
      attr(
        input,
        "name",
        /*name*/
        ctx[1]
      );
      attr(
        input,
        "id",
        /*id*/
        ctx[0]
      );
      attr(input, "placeholder", input_placeholder_value = /*loaded*/
      ctx[5] ? (
        /*placeholder*/
        ctx[3]
      ) : "Loading Parser...");
      input.disabled = input_disabled_value = !/*loaded*/
      ctx[5];
      attr(input, "class", "block w-full rounded-md border-0 py-1.5 sm:pe-48 disabled:opacity-40 disabled:cursor-not-allowed dark:bg-white/5 pr-10 text-gray-900 dark:text-white ring-1 ring-inset ring-gray-300 dark:ring-white/10 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 dark:focus-within:ring-indigo-500 sm:text-sm sm:leading-6");
      attr(div0, "class", "relative mt-2 rounded-md shadow-sm");
      attr(div1, "class", "sm:hidden h-6 relative");
    },
    m(target, anchor) {
      insert_hydration(target, div2, anchor);
      append_hydration(div2, label_1);
      append_hydration(label_1, t0);
      append_hydration(div2, t1);
      append_hydration(div2, div0);
      append_hydration(div0, input);
      set_input_value(
        input,
        /*$value*/
        ctx[6]
      );
      append_hydration(div0, t2);
      if (if_block0)
        if_block0.m(div0, null);
      append_hydration(div2, t3);
      append_hydration(div2, div1);
      if_blocks[current_block_type_index].m(div1, null);
      current = true;
      if (!mounted) {
        dispose = listen(
          input,
          "input",
          /*input_input_handler*/
          ctx[8]
        );
        mounted = true;
      }
    },
    p(ctx2, [dirty]) {
      if (!current || dirty & /*label*/
      4)
        set_data(
          t0,
          /*label*/
          ctx2[2]
        );
      if (!current || dirty & /*id*/
      1) {
        attr(
          label_1,
          "for",
          /*id*/
          ctx2[0]
        );
      }
      if (!current || dirty & /*name*/
      2) {
        attr(
          input,
          "name",
          /*name*/
          ctx2[1]
        );
      }
      if (!current || dirty & /*id*/
      1) {
        attr(
          input,
          "id",
          /*id*/
          ctx2[0]
        );
      }
      if (!current || dirty & /*loaded, placeholder*/
      40 && input_placeholder_value !== (input_placeholder_value = /*loaded*/
      ctx2[5] ? (
        /*placeholder*/
        ctx2[3]
      ) : "Loading Parser...")) {
        attr(input, "placeholder", input_placeholder_value);
      }
      if (!current || dirty & /*loaded*/
      32 && input_disabled_value !== (input_disabled_value = !/*loaded*/
      ctx2[5])) {
        input.disabled = input_disabled_value;
      }
      if (dirty & /*$value*/
      64 && input.value !== /*$value*/
      ctx2[6]) {
        set_input_value(
          input,
          /*$value*/
          ctx2[6]
        );
      }
      if (
        /*parsed*/
        ctx2[4]
      ) {
        if (if_block0) {
          if_block0.p(ctx2, dirty);
          if (dirty & /*parsed*/
          16) {
            transition_in(if_block0, 1);
          }
        } else {
          if_block0 = create_if_block_1(ctx2);
          if_block0.c();
          transition_in(if_block0, 1);
          if_block0.m(div0, null);
        }
      } else if (if_block0) {
        group_outros();
        transition_out(if_block0, 1, 1, () => {
          if_block0 = null;
        });
        check_outros();
      }
      let previous_block_index = current_block_type_index;
      current_block_type_index = select_block_type(ctx2);
      if (current_block_type_index === previous_block_index) {
        if_blocks[current_block_type_index].p(ctx2, dirty);
      } else {
        group_outros();
        transition_out(if_blocks[previous_block_index], 1, 1, () => {
          if_blocks[previous_block_index] = null;
        });
        check_outros();
        if_block1 = if_blocks[current_block_type_index];
        if (!if_block1) {
          if_block1 = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx2);
          if_block1.c();
        } else {
          if_block1.p(ctx2, dirty);
        }
        transition_in(if_block1, 1);
        if_block1.m(div1, null);
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(if_block0);
      transition_in(if_block1);
      current = true;
    },
    o(local) {
      transition_out(if_block0);
      transition_out(if_block1);
      current = false;
    },
    d(detaching) {
      if (detaching) {
        detach(div2);
      }
      if (if_block0)
        if_block0.d();
      if_blocks[current_block_type_index].d();
      mounted = false;
      dispose();
    }
  };
}
function instance($$self, $$props, $$invalidate) {
  let $value;
  let { id = "appointment-date" } = $$props;
  let { name = "appointment-date" } = $$props;
  let { label = "When would you like to meet?" } = $$props;
  let { placeholder = "In 2 days at 10am" } = $$props;
  const value = writable("");
  component_subscribe($$self, value, (value2) => $$invalidate(6, $value = value2));
  let parsed = null;
  let loaded = false;
  onMount(async () => {
    const chrono = await __vitePreload(() => import("../chunks/index.HpdiV9OB.js"), true ? __vite__mapDeps([0,1]) : void 0, import.meta.url);
    $$invalidate(5, loaded = true);
    const unsubscribe = value.subscribe((val) => {
      $$invalidate(4, parsed = chrono.parseDate(val));
    });
    return unsubscribe;
  });
  function input_input_handler() {
    $value = this.value;
    value.set($value);
  }
  $$self.$$set = ($$props2) => {
    if ("id" in $$props2)
      $$invalidate(0, id = $$props2.id);
    if ("name" in $$props2)
      $$invalidate(1, name = $$props2.name);
    if ("label" in $$props2)
      $$invalidate(2, label = $$props2.label);
    if ("placeholder" in $$props2)
      $$invalidate(3, placeholder = $$props2.placeholder);
  };
  return [
    id,
    name,
    label,
    placeholder,
    parsed,
    loaded,
    $value,
    value,
    input_input_handler
  ];
}
class FluentDatetime extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance, create_fragment$1, safe_not_equal, { id: 0, name: 1, label: 2, placeholder: 3 });
  }
}
function create_default_slot(ctx) {
  let fluentdatetime;
  let current;
  fluentdatetime = new FluentDatetime({});
  return {
    c() {
      create_component(fluentdatetime.$$.fragment);
    },
    l(nodes) {
      claim_component(fluentdatetime.$$.fragment, nodes);
    },
    m(target, anchor) {
      mount_component(fluentdatetime, target, anchor);
      current = true;
    },
    i(local) {
      if (current)
        return;
      transition_in(fluentdatetime.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(fluentdatetime.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(fluentdatetime, detaching);
    }
  };
}
function create_fragment(ctx) {
  let h1;
  let textContent = `<a href="#fluent-inputs">Fluent Inputs</a>`;
  let t1;
  let p0;
  let textContent_1 = `A few months ago, I stumbled accross Adam Silver’s article <em><a href="https://adamsilver.io/blog/designing-a-time-input/" rel="noopener noreferrer" target="_blank">Designing A Time Input</a></em>. In it he very persuasively argued that the ideal time input should be a single text input that accepts a wide range of formats. I followed his advice in a few projects and was very pleased with the results.`;
  let t5;
  let h20;
  let textContent_2 = `<a href="#down-the-rabbit-hole-and-to-the-prototype">Down the Rabbit Hole and to the Prototype</a>`;
  let t7;
  let p1;
  let textContent_3 = "When I at some point needed a datetime input I decided to reuse the idea. A text field that allow all kinds of formats. But why just “12. July 2023”, why not “Tomorrow” or “Next Monday”. So I also added some special cases. But the slippery slope only started there. What about “Thursday in two weeks at noon”? My ambition soon exceeded my ability and patience, so I started looking for libraries.";
  let t9;
  let p2;
  let textContent_4 = `I found <code>chrono-node</code> which promised to do what I wanted. I used it to build the following prototype. Try it!`;
  let t13;
  let showcase;
  let t14;
  let p3;
  let textContent_5 = "It’s functional, but there are some issues I observed while testing it on a few people.";
  let t16;
  let ol0;
  let textContent_6 = `<li>Users don’t trust that the input will understand them. They wait for feedback before moving on.</li> <li>Result are often lost while typing. Typing “Mon”, will be recognised as monday, but “Mond” won’t be recognised anymore, even though the user is likely to continue typing “Monday”.</li> <li>It fills in the blanks too liberally. If you say “In two days” it will fill in a time. This caused several users to enter incorrect values.</li> <li>Confusingly inconsistent. Some basic instructions are not recognised. “On the 12th” is not recognised, but “On the 12th of July” is.</li> <li>Typing on mobile is annoying.</li>`;
  let t26;
  let p4;
  let textContent_7 = "These problems are a mix of UX and implementation problems. They will all need to be fixed. But the idea did show some promise. There are some obvious advantages.";
  let t28;
  let ol1;
  let textContent_8 = `<li>Very expressive. The gap between what the user is thinking and what they need to type is much smaller.</li> <li>Works without JavaScript - Parsing can be done on the server as fallback <small>(intentionally disabled in this demo)</small>.</li> <li>Dictation is easy. Dictation is becoming more and more popular, especially among former iPad babies that learned to browser YouTube before they learned to write.</li> <li>Accessible. The input is read in a very natural way by screen readers.</li>`;
  let t38;
  let p5;
  let textContent_9 = `While I wouldn’t use the above input anywhere it’s a fine starting point to explore the idea of inputs that accept plain english. These are sometimes called “Natural Language Inputs”, but that could also refer to <a href="https://www.jroehm.com/2014/01/26/ui-pattern-natural-language-form/" rel="noopener noreferrer" target="_blank">this kind of input</a>. To avoid confusion, I’ll coin and use the term “Fluent Inputs”. <small>(<a href="https://xkcd.com/927/" rel="noopener noreferrer" target="_blank">obligatory xkcd 927</a>)</small>`;
  let t45;
  let h21;
  let textContent_10 = `<a href="#doing-some-experiments">Doing some Experiments</a>`;
  let t47;
  let p6;
  let textContent_11 = "For now, I’m going to handwave away the parsing problem and focus on the UX.\nI have a few ideas that I want to test.";
  let t49;
  let h30;
  let textContent_12 = `<a href="#user-feedback-testing">User Feedback Testing</a>`;
  let t51;
  let blockquote0;
  let textContent_13 = `<p>TODO</p>`;
  let t53;
  let h31;
  let textContent_14 = `<a href="#fluent-inputs-as-infodumps">Fluent Inputs as Infodumps</a>`;
  let t55;
  let p8;
  let textContent_15 = "One idea I had is that a Text-Area could be used as an infodump, substituting a whole form. If the user knew what information was expected they could just type it in in a stream of consciousness style. This might be usefull for things like calendars, where the expected information is known, and the details might be copy-pasted from an email or website.";
  let t57;
  let p9;
  let textContent_16 = "Let’s test that.";
  let t59;
  let blockquote1;
  let textContent_17 = `<p>TODO</p>`;
  let t61;
  let h22;
  let textContent_18 = `<a href="#the-implementation-problem">The Implementation Problem</a>`;
  let t63;
  let p11;
  let textContent_19 = "I’ve side-stepped the actual implementation of the parser until now. That’s because I don’t have a good solution yet.";
  let t65;
  let p12;
  let textContent_20 = `We have all the usuall <abbr title="Internationalization">i18n</abbr> problems. Different languages, different cultural expectations. These are always hard problem, but they are even harder to get right here.`;
  let t69;
  let blockquote2;
  let textContent_21 = `<p>TODO</p>`;
  let t71;
  let h32;
  let textContent_22 = `<a href="#what-about-llms">What about LLMs?</a>`;
  let t73;
  let p14;
  let textContent_23 = "Language Models are all the rage right now. They are very good at parsing natural language, so why not use them here?";
  let t75;
  let p15;
  let textContent_24 = "Well, they do have some limitations that (currently) hold them back from reliably parsing user inputs.";
  let t77;
  let ol2;
  let textContent_25 = `<li>They are slow. Ideally we would want to parse the input on every keystroke. Current LLMs aren’t fast enough for that.</li> <li>Can’t run in the browser. Any parsing would need to happen on an external LLM server. This causes latency issues and privacy concerns (since the state is sent on each keystroke, not just at the end).</li> <li>Not repeatable. The same input may be parsed differently on the client and on the server.</li> <li>They are (currently) bad at dates. If you tell it “in four days”, it would need to both know the current date and be able to calculate the date four days from now. LLMs currently suck at math. Clockface math is even more confusing. This does not stop them from confidently giving you a wrong answer though.</li>`;
  let t85;
  let p16;
  let textContent_26 = "However, as LLMs get better and more widely available, they might become the best solution eventually. Alternative parsers get increasingly hard to write as the complexity of the input increases. LLMs handle that better.";
  let t87;
  let p17;
  let textContent_27 = "In the meantime, there is a halfway solution. Instead of using the LLM itself as the parser, you could use it as a preprocessor to extract easier to digest strings from the input. This would allow you to use simpler parsers to get the actual data. The LLM doesn’t have to do any logic, just language-manipulation. This is an easier job, so faster and cheaper models can be used.";
  let t89;
  let p18;
  let textContent_28 = "Here is an example of what that might look like. The input is first passed through a LLM to extract the relevant strings. Then a simple parser is used to parse the extracted strings.";
  let t91;
  let p19;
  let textContent_29 = "Here is an example prompt and the extracted strings.";
  let t93;
  let html_tag;
  let raw_value = `<pre class="shiki vitesse-dark" style="background-color:#121212;color:#dbd7caee" tabindex="0"><code><span class="line"><span>The following text includes information about a calendar event.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>"""</span></span>
<span class="line"><span>Meeting with John, Conference room 103 tomorrow 12:30 until five past two, bring the report &#x26; wish Janine a happy birthday</span></span>
<span class="line"><span>"""</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Fill in the following fields.</span></span>
<span class="line"><span>| Question | Answer |</span></span>
<span class="line"><span>| --- | --- |</span></span>
<span class="line"><span>| What is the title of the event? |  |</span></span>
<span class="line"><span>| What day  does it start? |  |</span></span>
<span class="line"><span>| What time does it start? |  |</span></span>
<span class="line"><span>| What day  does it end? |  |</span></span>
<span class="line"><span>| What time does it end? |  |</span></span>
<span class="line"><span>| Where is it? |  |</span></span>
<span class="line"><span>| Additional details (if applicable)? |  |</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>You do not need to format your answers in any particular way. </span></span>
<span class="line"><span>The answers can be natural language.</span></span>
<span class="line"><span>If the information for one of the questions is not available leave it blank.</span></span></code></pre>`;
  let t94;
  let p20;
  let textContent_30 = "This results in the following output (markdown table)";
  let t96;
  let table;
  let textContent_31 = `<thead><tr><th>Question</th> <th>Answer</th></tr></thead> <tbody><tr><td>What is the title of the event?</td> <td>Meeting with John</td></tr> <tr><td>What day does it start?</td> <td>Tomorrow</td></tr> <tr><td>What time does it start?</td> <td>12:30</td></tr> <tr><td>What day does it end?</td> <td>Tomorrow</td></tr> <tr><td>What time does it end?</td> <td>Five past two (2:05)</td></tr> <tr><td>Where is it?</td> <td>Conference room 103</td></tr> <tr><td>Additional details (if applicable)?</td> <td>Bring the report &amp; wish Janine a happy birthday</td></tr></tbody>`;
  let t128;
  let p21;
  let textContent_32 = "This is already pretty good. We’ve broken down a fairly complex input, which does the job previously done by a whole form, into a few simple strings. We now only have to parse these individual strings, not the whole input.";
  let t130;
  let p22;
  let textContent_33 = "You could also use the LLM to translate the prompt, making it easier to adapt to different languages.";
  let t132;
  let blockquote3;
  let textContent_34 = `<p>We needn’t worry about prompt-injection attacks here, since the user is entering data for themselves. Tricking the LLM does not achieve anything here. However, from a security perspective, you should consider the output of the LLM as untrusted, as if it were user input itself.</p>`;
  let t134;
  let p24;
  let textContent_35 = "This still doesn’t solve the latency and privacy problems, but the others are gone. The LLM doesn’t have to do logic, and it’s consistent enough that repeated parsing will (usually) give the same result.";
  let t136;
  let h23;
  let textContent_36 = `<a href="#getting-started-today">Getting Started Today</a>`;
  let t138;
  let p25;
  let textContent_37 = "There are some great libraries out there that can get you started with Fluent Inputs today. I’ve provided a few examples by category below.";
  let t140;
  let h33;
  let textContent_38 = `<a href="#datetime">Date/Time</a>`;
  let t142;
  let ul;
  let textContent_39 = `<li><a href="">Timeliness</a> - A library for parsing dates and times in a variety of formats.</li> <li><a href="">Chrono-Node</a> - Similar to Timeliness, but with more features and a larger footprint. Great for appointments.</li>`;
  let current;
  showcase = new Showcase({
    props: {
      $$slots: { default: [create_default_slot] },
      $$scope: { ctx }
    }
  });
  return {
    c() {
      h1 = element("h1");
      h1.innerHTML = textContent;
      t1 = space();
      p0 = element("p");
      p0.innerHTML = textContent_1;
      t5 = space();
      h20 = element("h2");
      h20.innerHTML = textContent_2;
      t7 = space();
      p1 = element("p");
      p1.textContent = textContent_3;
      t9 = space();
      p2 = element("p");
      p2.innerHTML = textContent_4;
      t13 = space();
      create_component(showcase.$$.fragment);
      t14 = space();
      p3 = element("p");
      p3.textContent = textContent_5;
      t16 = space();
      ol0 = element("ol");
      ol0.innerHTML = textContent_6;
      t26 = space();
      p4 = element("p");
      p4.textContent = textContent_7;
      t28 = space();
      ol1 = element("ol");
      ol1.innerHTML = textContent_8;
      t38 = space();
      p5 = element("p");
      p5.innerHTML = textContent_9;
      t45 = space();
      h21 = element("h2");
      h21.innerHTML = textContent_10;
      t47 = space();
      p6 = element("p");
      p6.textContent = textContent_11;
      t49 = space();
      h30 = element("h3");
      h30.innerHTML = textContent_12;
      t51 = space();
      blockquote0 = element("blockquote");
      blockquote0.innerHTML = textContent_13;
      t53 = space();
      h31 = element("h3");
      h31.innerHTML = textContent_14;
      t55 = space();
      p8 = element("p");
      p8.textContent = textContent_15;
      t57 = space();
      p9 = element("p");
      p9.textContent = textContent_16;
      t59 = space();
      blockquote1 = element("blockquote");
      blockquote1.innerHTML = textContent_17;
      t61 = space();
      h22 = element("h2");
      h22.innerHTML = textContent_18;
      t63 = space();
      p11 = element("p");
      p11.textContent = textContent_19;
      t65 = space();
      p12 = element("p");
      p12.innerHTML = textContent_20;
      t69 = space();
      blockquote2 = element("blockquote");
      blockquote2.innerHTML = textContent_21;
      t71 = space();
      h32 = element("h3");
      h32.innerHTML = textContent_22;
      t73 = space();
      p14 = element("p");
      p14.textContent = textContent_23;
      t75 = space();
      p15 = element("p");
      p15.textContent = textContent_24;
      t77 = space();
      ol2 = element("ol");
      ol2.innerHTML = textContent_25;
      t85 = space();
      p16 = element("p");
      p16.textContent = textContent_26;
      t87 = space();
      p17 = element("p");
      p17.textContent = textContent_27;
      t89 = space();
      p18 = element("p");
      p18.textContent = textContent_28;
      t91 = space();
      p19 = element("p");
      p19.textContent = textContent_29;
      t93 = space();
      html_tag = new HtmlTagHydration(false);
      t94 = space();
      p20 = element("p");
      p20.textContent = textContent_30;
      t96 = space();
      table = element("table");
      table.innerHTML = textContent_31;
      t128 = space();
      p21 = element("p");
      p21.textContent = textContent_32;
      t130 = space();
      p22 = element("p");
      p22.textContent = textContent_33;
      t132 = space();
      blockquote3 = element("blockquote");
      blockquote3.innerHTML = textContent_34;
      t134 = space();
      p24 = element("p");
      p24.textContent = textContent_35;
      t136 = space();
      h23 = element("h2");
      h23.innerHTML = textContent_36;
      t138 = space();
      p25 = element("p");
      p25.textContent = textContent_37;
      t140 = space();
      h33 = element("h3");
      h33.innerHTML = textContent_38;
      t142 = space();
      ul = element("ul");
      ul.innerHTML = textContent_39;
      this.h();
    },
    l(nodes) {
      h1 = claim_element(nodes, "H1", { id: true, ["data-svelte-h"]: true });
      if (get_svelte_dataset(h1) !== "svelte-r9hph")
        h1.innerHTML = textContent;
      t1 = claim_space(nodes);
      p0 = claim_element(nodes, "P", { ["data-svelte-h"]: true });
      if (get_svelte_dataset(p0) !== "svelte-wg414n")
        p0.innerHTML = textContent_1;
      t5 = claim_space(nodes);
      h20 = claim_element(nodes, "H2", { id: true, ["data-svelte-h"]: true });
      if (get_svelte_dataset(h20) !== "svelte-1jcanza")
        h20.innerHTML = textContent_2;
      t7 = claim_space(nodes);
      p1 = claim_element(nodes, "P", { ["data-svelte-h"]: true });
      if (get_svelte_dataset(p1) !== "svelte-1elvd6k")
        p1.textContent = textContent_3;
      t9 = claim_space(nodes);
      p2 = claim_element(nodes, "P", { ["data-svelte-h"]: true });
      if (get_svelte_dataset(p2) !== "svelte-1o504ap")
        p2.innerHTML = textContent_4;
      t13 = claim_space(nodes);
      claim_component(showcase.$$.fragment, nodes);
      t14 = claim_space(nodes);
      p3 = claim_element(nodes, "P", { ["data-svelte-h"]: true });
      if (get_svelte_dataset(p3) !== "svelte-gxh0xf")
        p3.textContent = textContent_5;
      t16 = claim_space(nodes);
      ol0 = claim_element(nodes, "OL", { ["data-svelte-h"]: true });
      if (get_svelte_dataset(ol0) !== "svelte-s60ooc")
        ol0.innerHTML = textContent_6;
      t26 = claim_space(nodes);
      p4 = claim_element(nodes, "P", { ["data-svelte-h"]: true });
      if (get_svelte_dataset(p4) !== "svelte-m3ckal")
        p4.textContent = textContent_7;
      t28 = claim_space(nodes);
      ol1 = claim_element(nodes, "OL", { ["data-svelte-h"]: true });
      if (get_svelte_dataset(ol1) !== "svelte-1rxknnq")
        ol1.innerHTML = textContent_8;
      t38 = claim_space(nodes);
      p5 = claim_element(nodes, "P", { ["data-svelte-h"]: true });
      if (get_svelte_dataset(p5) !== "svelte-fe5eju")
        p5.innerHTML = textContent_9;
      t45 = claim_space(nodes);
      h21 = claim_element(nodes, "H2", { id: true, ["data-svelte-h"]: true });
      if (get_svelte_dataset(h21) !== "svelte-1b03lr1")
        h21.innerHTML = textContent_10;
      t47 = claim_space(nodes);
      p6 = claim_element(nodes, "P", { ["data-svelte-h"]: true });
      if (get_svelte_dataset(p6) !== "svelte-revz5o")
        p6.textContent = textContent_11;
      t49 = claim_space(nodes);
      h30 = claim_element(nodes, "H3", { id: true, ["data-svelte-h"]: true });
      if (get_svelte_dataset(h30) !== "svelte-1vor0k6")
        h30.innerHTML = textContent_12;
      t51 = claim_space(nodes);
      blockquote0 = claim_element(nodes, "BLOCKQUOTE", { ["data-svelte-h"]: true });
      if (get_svelte_dataset(blockquote0) !== "svelte-1xm3bwr")
        blockquote0.innerHTML = textContent_13;
      t53 = claim_space(nodes);
      h31 = claim_element(nodes, "H3", { id: true, ["data-svelte-h"]: true });
      if (get_svelte_dataset(h31) !== "svelte-1gze3w4")
        h31.innerHTML = textContent_14;
      t55 = claim_space(nodes);
      p8 = claim_element(nodes, "P", { ["data-svelte-h"]: true });
      if (get_svelte_dataset(p8) !== "svelte-1qv3a5")
        p8.textContent = textContent_15;
      t57 = claim_space(nodes);
      p9 = claim_element(nodes, "P", { ["data-svelte-h"]: true });
      if (get_svelte_dataset(p9) !== "svelte-1nxs1d6")
        p9.textContent = textContent_16;
      t59 = claim_space(nodes);
      blockquote1 = claim_element(nodes, "BLOCKQUOTE", { ["data-svelte-h"]: true });
      if (get_svelte_dataset(blockquote1) !== "svelte-1xm3bwr")
        blockquote1.innerHTML = textContent_17;
      t61 = claim_space(nodes);
      h22 = claim_element(nodes, "H2", { id: true, ["data-svelte-h"]: true });
      if (get_svelte_dataset(h22) !== "svelte-1ruudvk")
        h22.innerHTML = textContent_18;
      t63 = claim_space(nodes);
      p11 = claim_element(nodes, "P", { ["data-svelte-h"]: true });
      if (get_svelte_dataset(p11) !== "svelte-1je1ks9")
        p11.textContent = textContent_19;
      t65 = claim_space(nodes);
      p12 = claim_element(nodes, "P", { ["data-svelte-h"]: true });
      if (get_svelte_dataset(p12) !== "svelte-584ndi")
        p12.innerHTML = textContent_20;
      t69 = claim_space(nodes);
      blockquote2 = claim_element(nodes, "BLOCKQUOTE", { ["data-svelte-h"]: true });
      if (get_svelte_dataset(blockquote2) !== "svelte-1xm3bwr")
        blockquote2.innerHTML = textContent_21;
      t71 = claim_space(nodes);
      h32 = claim_element(nodes, "H3", { id: true, ["data-svelte-h"]: true });
      if (get_svelte_dataset(h32) !== "svelte-vagluu")
        h32.innerHTML = textContent_22;
      t73 = claim_space(nodes);
      p14 = claim_element(nodes, "P", { ["data-svelte-h"]: true });
      if (get_svelte_dataset(p14) !== "svelte-13dv9s7")
        p14.textContent = textContent_23;
      t75 = claim_space(nodes);
      p15 = claim_element(nodes, "P", { ["data-svelte-h"]: true });
      if (get_svelte_dataset(p15) !== "svelte-1w5ypms")
        p15.textContent = textContent_24;
      t77 = claim_space(nodes);
      ol2 = claim_element(nodes, "OL", { ["data-svelte-h"]: true });
      if (get_svelte_dataset(ol2) !== "svelte-vudl41")
        ol2.innerHTML = textContent_25;
      t85 = claim_space(nodes);
      p16 = claim_element(nodes, "P", { ["data-svelte-h"]: true });
      if (get_svelte_dataset(p16) !== "svelte-1chjpxt")
        p16.textContent = textContent_26;
      t87 = claim_space(nodes);
      p17 = claim_element(nodes, "P", { ["data-svelte-h"]: true });
      if (get_svelte_dataset(p17) !== "svelte-mm6xcl")
        p17.textContent = textContent_27;
      t89 = claim_space(nodes);
      p18 = claim_element(nodes, "P", { ["data-svelte-h"]: true });
      if (get_svelte_dataset(p18) !== "svelte-qsi7hx")
        p18.textContent = textContent_28;
      t91 = claim_space(nodes);
      p19 = claim_element(nodes, "P", { ["data-svelte-h"]: true });
      if (get_svelte_dataset(p19) !== "svelte-1afg41p")
        p19.textContent = textContent_29;
      t93 = claim_space(nodes);
      html_tag = claim_html_tag(nodes, false);
      t94 = claim_space(nodes);
      p20 = claim_element(nodes, "P", { ["data-svelte-h"]: true });
      if (get_svelte_dataset(p20) !== "svelte-d0loo2")
        p20.textContent = textContent_30;
      t96 = claim_space(nodes);
      table = claim_element(nodes, "TABLE", { ["data-svelte-h"]: true });
      if (get_svelte_dataset(table) !== "svelte-169iksm")
        table.innerHTML = textContent_31;
      t128 = claim_space(nodes);
      p21 = claim_element(nodes, "P", { ["data-svelte-h"]: true });
      if (get_svelte_dataset(p21) !== "svelte-1dupak1")
        p21.textContent = textContent_32;
      t130 = claim_space(nodes);
      p22 = claim_element(nodes, "P", { ["data-svelte-h"]: true });
      if (get_svelte_dataset(p22) !== "svelte-1ny6nv3")
        p22.textContent = textContent_33;
      t132 = claim_space(nodes);
      blockquote3 = claim_element(nodes, "BLOCKQUOTE", { ["data-svelte-h"]: true });
      if (get_svelte_dataset(blockquote3) !== "svelte-182ebge")
        blockquote3.innerHTML = textContent_34;
      t134 = claim_space(nodes);
      p24 = claim_element(nodes, "P", { ["data-svelte-h"]: true });
      if (get_svelte_dataset(p24) !== "svelte-1g6am1b")
        p24.textContent = textContent_35;
      t136 = claim_space(nodes);
      h23 = claim_element(nodes, "H2", { id: true, ["data-svelte-h"]: true });
      if (get_svelte_dataset(h23) !== "svelte-cs9tg")
        h23.innerHTML = textContent_36;
      t138 = claim_space(nodes);
      p25 = claim_element(nodes, "P", { ["data-svelte-h"]: true });
      if (get_svelte_dataset(p25) !== "svelte-160yvz7")
        p25.textContent = textContent_37;
      t140 = claim_space(nodes);
      h33 = claim_element(nodes, "H3", { id: true, ["data-svelte-h"]: true });
      if (get_svelte_dataset(h33) !== "svelte-1k75c1k")
        h33.innerHTML = textContent_38;
      t142 = claim_space(nodes);
      ul = claim_element(nodes, "UL", { ["data-svelte-h"]: true });
      if (get_svelte_dataset(ul) !== "svelte-x0381x")
        ul.innerHTML = textContent_39;
      this.h();
    },
    h() {
      attr(h1, "id", "fluent-inputs");
      attr(h20, "id", "down-the-rabbit-hole-and-to-the-prototype");
      attr(h21, "id", "doing-some-experiments");
      attr(h30, "id", "user-feedback-testing");
      attr(h31, "id", "fluent-inputs-as-infodumps");
      attr(h22, "id", "the-implementation-problem");
      attr(h32, "id", "what-about-llms");
      html_tag.a = t94;
      attr(h23, "id", "getting-started-today");
      attr(h33, "id", "datetime");
    },
    m(target, anchor) {
      insert_hydration(target, h1, anchor);
      insert_hydration(target, t1, anchor);
      insert_hydration(target, p0, anchor);
      insert_hydration(target, t5, anchor);
      insert_hydration(target, h20, anchor);
      insert_hydration(target, t7, anchor);
      insert_hydration(target, p1, anchor);
      insert_hydration(target, t9, anchor);
      insert_hydration(target, p2, anchor);
      insert_hydration(target, t13, anchor);
      mount_component(showcase, target, anchor);
      insert_hydration(target, t14, anchor);
      insert_hydration(target, p3, anchor);
      insert_hydration(target, t16, anchor);
      insert_hydration(target, ol0, anchor);
      insert_hydration(target, t26, anchor);
      insert_hydration(target, p4, anchor);
      insert_hydration(target, t28, anchor);
      insert_hydration(target, ol1, anchor);
      insert_hydration(target, t38, anchor);
      insert_hydration(target, p5, anchor);
      insert_hydration(target, t45, anchor);
      insert_hydration(target, h21, anchor);
      insert_hydration(target, t47, anchor);
      insert_hydration(target, p6, anchor);
      insert_hydration(target, t49, anchor);
      insert_hydration(target, h30, anchor);
      insert_hydration(target, t51, anchor);
      insert_hydration(target, blockquote0, anchor);
      insert_hydration(target, t53, anchor);
      insert_hydration(target, h31, anchor);
      insert_hydration(target, t55, anchor);
      insert_hydration(target, p8, anchor);
      insert_hydration(target, t57, anchor);
      insert_hydration(target, p9, anchor);
      insert_hydration(target, t59, anchor);
      insert_hydration(target, blockquote1, anchor);
      insert_hydration(target, t61, anchor);
      insert_hydration(target, h22, anchor);
      insert_hydration(target, t63, anchor);
      insert_hydration(target, p11, anchor);
      insert_hydration(target, t65, anchor);
      insert_hydration(target, p12, anchor);
      insert_hydration(target, t69, anchor);
      insert_hydration(target, blockquote2, anchor);
      insert_hydration(target, t71, anchor);
      insert_hydration(target, h32, anchor);
      insert_hydration(target, t73, anchor);
      insert_hydration(target, p14, anchor);
      insert_hydration(target, t75, anchor);
      insert_hydration(target, p15, anchor);
      insert_hydration(target, t77, anchor);
      insert_hydration(target, ol2, anchor);
      insert_hydration(target, t85, anchor);
      insert_hydration(target, p16, anchor);
      insert_hydration(target, t87, anchor);
      insert_hydration(target, p17, anchor);
      insert_hydration(target, t89, anchor);
      insert_hydration(target, p18, anchor);
      insert_hydration(target, t91, anchor);
      insert_hydration(target, p19, anchor);
      insert_hydration(target, t93, anchor);
      html_tag.m(raw_value, target, anchor);
      insert_hydration(target, t94, anchor);
      insert_hydration(target, p20, anchor);
      insert_hydration(target, t96, anchor);
      insert_hydration(target, table, anchor);
      insert_hydration(target, t128, anchor);
      insert_hydration(target, p21, anchor);
      insert_hydration(target, t130, anchor);
      insert_hydration(target, p22, anchor);
      insert_hydration(target, t132, anchor);
      insert_hydration(target, blockquote3, anchor);
      insert_hydration(target, t134, anchor);
      insert_hydration(target, p24, anchor);
      insert_hydration(target, t136, anchor);
      insert_hydration(target, h23, anchor);
      insert_hydration(target, t138, anchor);
      insert_hydration(target, p25, anchor);
      insert_hydration(target, t140, anchor);
      insert_hydration(target, h33, anchor);
      insert_hydration(target, t142, anchor);
      insert_hydration(target, ul, anchor);
      current = true;
    },
    p(ctx2, [dirty]) {
      const showcase_changes = {};
      if (dirty & /*$$scope*/
      1) {
        showcase_changes.$$scope = { dirty, ctx: ctx2 };
      }
      showcase.$set(showcase_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(showcase.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(showcase.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      if (detaching) {
        detach(h1);
        detach(t1);
        detach(p0);
        detach(t5);
        detach(h20);
        detach(t7);
        detach(p1);
        detach(t9);
        detach(p2);
        detach(t13);
        detach(t14);
        detach(p3);
        detach(t16);
        detach(ol0);
        detach(t26);
        detach(p4);
        detach(t28);
        detach(ol1);
        detach(t38);
        detach(p5);
        detach(t45);
        detach(h21);
        detach(t47);
        detach(p6);
        detach(t49);
        detach(h30);
        detach(t51);
        detach(blockquote0);
        detach(t53);
        detach(h31);
        detach(t55);
        detach(p8);
        detach(t57);
        detach(p9);
        detach(t59);
        detach(blockquote1);
        detach(t61);
        detach(h22);
        detach(t63);
        detach(p11);
        detach(t65);
        detach(p12);
        detach(t69);
        detach(blockquote2);
        detach(t71);
        detach(h32);
        detach(t73);
        detach(p14);
        detach(t75);
        detach(p15);
        detach(t77);
        detach(ol2);
        detach(t85);
        detach(p16);
        detach(t87);
        detach(p17);
        detach(t89);
        detach(p18);
        detach(t91);
        detach(p19);
        detach(t93);
        html_tag.d();
        detach(t94);
        detach(p20);
        detach(t96);
        detach(table);
        detach(t128);
        detach(p21);
        detach(t130);
        detach(p22);
        detach(t132);
        detach(blockquote3);
        detach(t134);
        detach(p24);
        detach(t136);
        detach(h23);
        detach(t138);
        detach(p25);
        detach(t140);
        detach(h33);
        detach(t142);
        detach(ul);
      }
      destroy_component(showcase, detaching);
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
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["../chunks/index.HpdiV9OB.js","../chunks/_commonjsHelpers.DWwsNxpa.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
