import { s as safe_not_equal, n as noop } from "../chunks/scheduler.DhO_7JC-.js";
import { S as SvelteComponent, i as init, d as detach, a as insert_hydration, k as attr, c as claim_element, l as get_svelte_dataset, g as claim_space, h as element, j as space } from "../chunks/index.BSC7__lV.js";
function create_fragment(ctx) {
  let h1;
  let textContent = `<a href="#zod-driven-development">Zod Driven Development</a>`;
  let t1;
  let p0;
  let textContent_1 = `Over the last year we’ve been seing <a href="https://zod.dev" rel="noopener noreferrer" target="_blank">zod</a>, a schema validation library, grow into the lingua franca of many tools. From <a href="https://trpc.io/" rel="noopener noreferrer" target="_blank">trpc</a>, to <a href="https://superforms.rocks/" rel="noopener noreferrer" target="_blank">SvelteKit Superforms</a>, even <abbr title="Object Relational Mappers">ORMs</abbr> like <a href="https://orm.drizzle.team/" rel="noopener noreferrer" target="_blank">drizzle</a>. I myself have contributed to this trend with <a href="https://zocker.sigrist.dev" rel="noopener noreferrer" target="_blank">zocker</a>, a mock-data generator that uses zod schemas to generate mock data.`;
  let t15;
  let p1;
  let textContent_2 = "This got me thinking. How far can I push this? Could I generate an entire app from a zod schema? This article documents my experiment.";
  let t17;
  let h20;
  let textContent_3 = `<a href="#the-goalpost-and-how-to-get-there">The Goalpost and how to get there</a>`;
  let t19;
  let p2;
  let textContent_4 = `Since this is a toy project, I’m going to keep the scope limited to a <abbr title="Create Read Update Delete">CRUD</abbr> app with multiple entities. Let’s build a library app. We’ll have <code>Books</code>, <code>Authors</code> and <code>Publishers</code>. Each book has one author and one publisher. Each author can have multiple books. Each publisher can have multiple books.`;
  let t29;
  let p3;
  let textContent_5 = "We will be using the following tools:";
  let t31;
  let ul;
  let textContent_6 = `<li><a href="https://orm.drizzle.team/" rel="noopener noreferrer" target="_blank">drizzle</a> as the <abbr title="Object Relational Mapper">ORM</abbr></li> <li><a href="https://orm.drizzle.team/docs/zod" rel="noopener noreferrer" target="_blank">drizzle-zod</a>, a first party way to generate the zod schemas from drizzle models</li> <li><a href="https://superforms.rocks/" rel="noopener noreferrer" target="_blank">sveltekit superforms</a> to generate and validate forms from the zod schemas</li> <li><a href="https://kit.svelte.dev/" rel="noopener noreferrer" target="_blank">sveltekit</a> as the application framework</li>`;
  let t44;
  let h21;
  let textContent_7 = `<a href="#conclusion">Conclusion</a>`;
  let t46;
  let p4;
  let textContent_8 = "Zod Driven Development has some very obvious strengths. Development speed and maintainability. But, once more complexity get’s added, such as authorization, complex business logic, and more complex relationships, it starts to struggle.";
  let t48;
  let p5;
  let textContent_9 = `Earlier iterations of similar ideas, such as model-driven development, have caused many development failures when the complexity of the projects grew beyond the capabilities of the tool. <a href="https://healthcare.gov" rel="noopener noreferrer" target="_blank">healthcare.gov</a> is a prime example of this.`;
  let t52;
  let p6;
  let textContent_10 = `Fortunately, <abbr title="Zod Driven Development">ZDD</abbr> is not an all or nothing approach. You can use this for the trivial parts of your app, and write the more complex parts the way you usually would. It only gets dangerous if your tooling grows more complex than the app itself.`;
  let t56;
  let p7;
  let textContent_11 = `While I likely won’t be generating entire apps like this, I will certainly add some of these tools to my toolkit. The form-generation &amp; validation, the automagic UI, and the mock-data generation have all been fantastic to work with. <a href="https://orm.drizzle.team/" rel="noopener noreferrer" target="_blank">Drizzle</a> is not quite there yet, but it’s evolving fast and I’m excited to see where it goes.`;
  return {
    c() {
      h1 = element("h1");
      h1.innerHTML = textContent;
      t1 = space();
      p0 = element("p");
      p0.innerHTML = textContent_1;
      t15 = space();
      p1 = element("p");
      p1.textContent = textContent_2;
      t17 = space();
      h20 = element("h2");
      h20.innerHTML = textContent_3;
      t19 = space();
      p2 = element("p");
      p2.innerHTML = textContent_4;
      t29 = space();
      p3 = element("p");
      p3.textContent = textContent_5;
      t31 = space();
      ul = element("ul");
      ul.innerHTML = textContent_6;
      t44 = space();
      h21 = element("h2");
      h21.innerHTML = textContent_7;
      t46 = space();
      p4 = element("p");
      p4.textContent = textContent_8;
      t48 = space();
      p5 = element("p");
      p5.innerHTML = textContent_9;
      t52 = space();
      p6 = element("p");
      p6.innerHTML = textContent_10;
      t56 = space();
      p7 = element("p");
      p7.innerHTML = textContent_11;
      this.h();
    },
    l(nodes) {
      h1 = claim_element(nodes, "H1", { id: true, ["data-svelte-h"]: true });
      if (get_svelte_dataset(h1) !== "svelte-ufx8du")
        h1.innerHTML = textContent;
      t1 = claim_space(nodes);
      p0 = claim_element(nodes, "P", { ["data-svelte-h"]: true });
      if (get_svelte_dataset(p0) !== "svelte-1d6oa7n")
        p0.innerHTML = textContent_1;
      t15 = claim_space(nodes);
      p1 = claim_element(nodes, "P", { ["data-svelte-h"]: true });
      if (get_svelte_dataset(p1) !== "svelte-1c3opg")
        p1.textContent = textContent_2;
      t17 = claim_space(nodes);
      h20 = claim_element(nodes, "H2", { id: true, ["data-svelte-h"]: true });
      if (get_svelte_dataset(h20) !== "svelte-1dbq4ie")
        h20.innerHTML = textContent_3;
      t19 = claim_space(nodes);
      p2 = claim_element(nodes, "P", { ["data-svelte-h"]: true });
      if (get_svelte_dataset(p2) !== "svelte-1lmsl0h")
        p2.innerHTML = textContent_4;
      t29 = claim_space(nodes);
      p3 = claim_element(nodes, "P", { ["data-svelte-h"]: true });
      if (get_svelte_dataset(p3) !== "svelte-1ylsc2g")
        p3.textContent = textContent_5;
      t31 = claim_space(nodes);
      ul = claim_element(nodes, "UL", { ["data-svelte-h"]: true });
      if (get_svelte_dataset(ul) !== "svelte-1ozutpm")
        ul.innerHTML = textContent_6;
      t44 = claim_space(nodes);
      h21 = claim_element(nodes, "H2", { id: true, ["data-svelte-h"]: true });
      if (get_svelte_dataset(h21) !== "svelte-kmpttn")
        h21.innerHTML = textContent_7;
      t46 = claim_space(nodes);
      p4 = claim_element(nodes, "P", { ["data-svelte-h"]: true });
      if (get_svelte_dataset(p4) !== "svelte-1wyw34r")
        p4.textContent = textContent_8;
      t48 = claim_space(nodes);
      p5 = claim_element(nodes, "P", { ["data-svelte-h"]: true });
      if (get_svelte_dataset(p5) !== "svelte-cgzeq0")
        p5.innerHTML = textContent_9;
      t52 = claim_space(nodes);
      p6 = claim_element(nodes, "P", { ["data-svelte-h"]: true });
      if (get_svelte_dataset(p6) !== "svelte-1irwun8")
        p6.innerHTML = textContent_10;
      t56 = claim_space(nodes);
      p7 = claim_element(nodes, "P", { ["data-svelte-h"]: true });
      if (get_svelte_dataset(p7) !== "svelte-14seq6k")
        p7.innerHTML = textContent_11;
      this.h();
    },
    h() {
      attr(h1, "id", "zod-driven-development");
      attr(h20, "id", "the-goalpost-and-how-to-get-there");
      attr(h21, "id", "conclusion");
    },
    m(target, anchor) {
      insert_hydration(target, h1, anchor);
      insert_hydration(target, t1, anchor);
      insert_hydration(target, p0, anchor);
      insert_hydration(target, t15, anchor);
      insert_hydration(target, p1, anchor);
      insert_hydration(target, t17, anchor);
      insert_hydration(target, h20, anchor);
      insert_hydration(target, t19, anchor);
      insert_hydration(target, p2, anchor);
      insert_hydration(target, t29, anchor);
      insert_hydration(target, p3, anchor);
      insert_hydration(target, t31, anchor);
      insert_hydration(target, ul, anchor);
      insert_hydration(target, t44, anchor);
      insert_hydration(target, h21, anchor);
      insert_hydration(target, t46, anchor);
      insert_hydration(target, p4, anchor);
      insert_hydration(target, t48, anchor);
      insert_hydration(target, p5, anchor);
      insert_hydration(target, t52, anchor);
      insert_hydration(target, p6, anchor);
      insert_hydration(target, t56, anchor);
      insert_hydration(target, p7, anchor);
    },
    p: noop,
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching) {
        detach(h1);
        detach(t1);
        detach(p0);
        detach(t15);
        detach(p1);
        detach(t17);
        detach(h20);
        detach(t19);
        detach(p2);
        detach(t29);
        detach(p3);
        detach(t31);
        detach(ul);
        detach(t44);
        detach(h21);
        detach(t46);
        detach(p4);
        detach(t48);
        detach(p5);
        detach(t52);
        detach(p6);
        detach(t56);
        detach(p7);
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
