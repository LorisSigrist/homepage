import { s as safe_not_equal, n as noop, r as run_all, E as action_destroyer, c as component_subscribe, o as onMount, q as is_function } from "../chunks/scheduler.DhO_7JC-.js";
import { S as SvelteComponent, i as init, d as detach, s as set_data, k as attr, a as insert_hydration, b as append_hydration, c as claim_element, e as children, f as claim_text, g as claim_space, h as element, t as text, j as space, r as listen, y as destroy_component, o as transition_out, p as transition_in, z as mount_component, A as claim_component, B as create_component, E as destroy_each, w as group_outros, x as check_outros, l as get_svelte_dataset } from "../chunks/index.BSC7__lV.js";
import { e as ensure_array_like } from "../chunks/each.CuygwpM4.js";
import { t as theme } from "../chunks/theme.l93mLorp.js";
import { g as getDefaultExportFromCjs } from "../chunks/_commonjsHelpers.DWwsNxpa.js";
function create_fragment$2(ctx) {
  let article;
  let div0;
  let time;
  let t0_value = (
    /*data*/
    ctx[0].metadata.published.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric"
    }) + ""
  );
  let t0;
  let t1;
  let t2;
  let span0;
  let t3_value = (
    /*data*/
    ctx[0].link + ""
  );
  let t3;
  let t4;
  let div1;
  let h3;
  let a;
  let span1;
  let t5;
  let t6_value = (
    /*data*/
    ctx[0].metadata.title + ""
  );
  let t6;
  let a_href_value;
  let t7;
  let p2;
  let t8_value = (
    /*data*/
    ctx[0].metadata.description + ""
  );
  let t8;
  let article_id_value;
  return {
    c() {
      article = element("article");
      div0 = element("div");
      time = element("time");
      t0 = text(t0_value);
      t1 = space();
      t2 = space();
      span0 = element("span");
      t3 = text(t3_value);
      t4 = space();
      div1 = element("div");
      h3 = element("h3");
      a = element("a");
      span1 = element("span");
      t5 = space();
      t6 = text(t6_value);
      t7 = space();
      p2 = element("p");
      t8 = text(t8_value);
      this.h();
    },
    l(nodes) {
      article = claim_element(nodes, "ARTICLE", { class: true, id: true });
      var article_nodes = children(article);
      div0 = claim_element(article_nodes, "DIV", { class: true });
      var div0_nodes = children(div0);
      time = claim_element(div0_nodes, "TIME", { datetime: true, class: true });
      var time_nodes = children(time);
      t0 = claim_text(time_nodes, t0_value);
      time_nodes.forEach(detach);
      t1 = claim_space(div0_nodes);
      t2 = claim_space(div0_nodes);
      span0 = claim_element(div0_nodes, "SPAN", { class: true });
      var span0_nodes = children(span0);
      t3 = claim_text(span0_nodes, t3_value);
      span0_nodes.forEach(detach);
      div0_nodes.forEach(detach);
      t4 = claim_space(article_nodes);
      div1 = claim_element(article_nodes, "DIV", { class: true });
      var div1_nodes = children(div1);
      h3 = claim_element(div1_nodes, "H3", { class: true });
      var h3_nodes = children(h3);
      a = claim_element(h3_nodes, "A", { href: true });
      var a_nodes = children(a);
      span1 = claim_element(a_nodes, "SPAN", { class: true });
      children(span1).forEach(detach);
      t5 = claim_space(a_nodes);
      t6 = claim_text(a_nodes, t6_value);
      a_nodes.forEach(detach);
      h3_nodes.forEach(detach);
      t7 = claim_space(div1_nodes);
      p2 = claim_element(div1_nodes, "P", { class: true });
      var p_nodes = children(p2);
      t8 = claim_text(p_nodes, t8_value);
      p_nodes.forEach(detach);
      div1_nodes.forEach(detach);
      article_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(time, "datetime", "2020-03-16");
      attr(time, "class", "text-gray-500 dark:text-gray-400");
      attr(span0, "class", "hidden print:block text-gray-500 dark:text-gray-400");
      attr(div0, "class", "flex items-center gap-x-3 text-xs");
      attr(span1, "class", "absolute inset-0");
      attr(a, "href", a_href_value = /*data*/
      ctx[0].link);
      attr(h3, "class", "mt-3 text-lg font-semibold leading-6 text-gray-900 dark:text-white dark:group-hover:text-gray-300 group-hover:text-gray-600 capitalize");
      attr(p2, "class", "mt-5 text-sm leading-6 text-gray-600 dark:text-gray-400");
      attr(div1, "class", "group");
      attr(article, "class", "flex w-full flex-col items-start justify-between bg-white dark:bg-gray-950 p-10 print:p-0 rounded-md relative shadow-sm print:shadow-none print:break-inside-avoid");
      attr(article, "id", article_id_value = slugify(
        /*data*/
        ctx[0].metadata.title
      ));
    },
    m(target, anchor) {
      insert_hydration(target, article, anchor);
      append_hydration(article, div0);
      append_hydration(div0, time);
      append_hydration(time, t0);
      append_hydration(div0, t1);
      append_hydration(div0, t2);
      append_hydration(div0, span0);
      append_hydration(span0, t3);
      append_hydration(article, t4);
      append_hydration(article, div1);
      append_hydration(div1, h3);
      append_hydration(h3, a);
      append_hydration(a, span1);
      append_hydration(a, t5);
      append_hydration(a, t6);
      append_hydration(div1, t7);
      append_hydration(div1, p2);
      append_hydration(p2, t8);
    },
    p(ctx2, [dirty]) {
      if (dirty & /*data*/
      1 && t0_value !== (t0_value = /*data*/
      ctx2[0].metadata.published.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric"
      }) + ""))
        set_data(t0, t0_value);
      if (dirty & /*data*/
      1 && t3_value !== (t3_value = /*data*/
      ctx2[0].link + ""))
        set_data(t3, t3_value);
      if (dirty & /*data*/
      1 && t6_value !== (t6_value = /*data*/
      ctx2[0].metadata.title + ""))
        set_data(t6, t6_value);
      if (dirty & /*data*/
      1 && a_href_value !== (a_href_value = /*data*/
      ctx2[0].link)) {
        attr(a, "href", a_href_value);
      }
      if (dirty & /*data*/
      1 && t8_value !== (t8_value = /*data*/
      ctx2[0].metadata.description + ""))
        set_data(t8, t8_value);
      if (dirty & /*data*/
      1 && article_id_value !== (article_id_value = slugify(
        /*data*/
        ctx2[0].metadata.title
      ))) {
        attr(article, "id", article_id_value);
      }
    },
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching) {
        detach(article);
      }
    }
  };
}
function slugify(str) {
  return str.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)+/g, "");
}
function instance$2($$self, $$props, $$invalidate) {
  let { data } = $$props;
  $$self.$$set = ($$props2) => {
    if ("data" in $$props2)
      $$invalidate(0, data = $$props2.data);
  };
  return [data];
}
class Article extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$2, create_fragment$2, safe_not_equal, { data: 0 });
  }
}
const p = "dmFyIGIgPSAicHJlY2lzaW9uIGhpZ2hwIGZsb2F0O2F0dHJpYnV0ZSB2ZWMyIHBvc2l0aW9uO3ZhcnlpbmcgdmVjMiBmcmFnQ29vcmQ7dm9pZCBtYWluKCl7ZnJhZ0Nvb3JkPXBvc2l0aW9uO2dsX1Bvc2l0aW9uPXZlYzQocG9zaXRpb24sMC4wLDEuMCk7fSIsIFMgPSAicHJlY2lzaW9uIGhpZ2hwIGZsb2F0O3VuaWZvcm0gdmVjMyBiYWNrZ3JvdW5kX2NvbG9yO3VuaWZvcm0gdmVjMyBsaW5lX2NvbG9yO3VuaWZvcm0gZmxvYXQgYXNwZWN0X3JhdGlvO3VuaWZvcm0gZmxvYXQgdGltZTt2YXJ5aW5nIHZlYzIgZnJhZ0Nvb3JkO3ZlYzMgbW9kMjg5KHZlYzMgeCl7cmV0dXJuIHgtZmxvb3IoeCooMS4wLzI4OS4wKSkqMjg5LjA7fXZlYzQgbW9kMjg5KHZlYzQgeCl7cmV0dXJuIHgtZmxvb3IoeCooMS4wLzI4OS4wKSkqMjg5LjA7fXZlYzQgcGVybXV0ZSh2ZWM0IHgpe3JldHVybiBtb2QyODkoKCh4KjM0LjApKzEuMCkqeCk7fXZlYzQgdGF5bG9ySW52U3FydCh2ZWM0IHIpe3JldHVybiAxLjc5Mjg0MjkxNDAwMTU5LTAuODUzNzM0NzIwOTUzMTQqcjt9ZmxvYXQgc25vaXNlKHZlYzMgdil7Y29uc3QgdmVjMiBDPXZlYzIoMS4wLzYuMCwxLjAvMy4wKTtjb25zdCB2ZWM0IEQ9dmVjNCgwLjAsMC41LDEuMCwyLjApO3ZlYzMgaT1mbG9vcih2K2RvdCh2LEMueXl5KSk7dmVjMyB4MD12LWkrZG90KGksQy54eHgpO3ZlYzMgZz1zdGVwKHgwLnl6eCx4MC54eXopO3ZlYzMgbD0xLjAtZzt2ZWMzIGkxPW1pbihnLnh5eixsLnp4eSk7dmVjMyBpMj1tYXgoZy54eXosbC56eHkpO3ZlYzMgeDE9eDAtaTErQy54eHg7dmVjMyB4Mj14MC1pMitDLnl5eTt2ZWMzIHgzPXgwLUQueXl5O2k9bW9kMjg5KGkpO3ZlYzQgcD1wZXJtdXRlKHBlcm11dGUocGVybXV0ZShpLnordmVjNCgwLjAsaTEueixpMi56LDEuMCkpK2kueSt2ZWM0KDAuMCxpMS55LGkyLnksMS4wKSkraS54K3ZlYzQoMC4wLGkxLngsaTIueCwxLjApKTtmbG9hdCBuXz0wLjE0Mjg1NzE0Mjg1Nzt2ZWMzIG5zPW5fKkQud3l6LUQueHp4O3ZlYzQgaj1wLTQ5LjAqZmxvb3IocCpucy56Km5zLnopO3ZlYzQgeF89Zmxvb3Ioaipucy56KTt2ZWM0IHlfPWZsb29yKGotNy4wKnhfKTt2ZWM0IHg9eF8qbnMueCtucy55eXl5O3ZlYzQgeT15Xypucy54K25zLnl5eXk7dmVjNCBoPTEuMC1hYnMoeCktYWJzKHkpO3ZlYzQgYjA9dmVjNCh4Lnh5LHkueHkpO3ZlYzQgYjE9dmVjNCh4Lnp3LHkuencpO3ZlYzQgczA9Zmxvb3IoYjApKjIuMCsxLjA7dmVjNCBzMT1mbG9vcihiMSkqMi4wKzEuMDt2ZWM0IHNoPS1zdGVwKGgsdmVjNCgwLjApKTt2ZWM0IGEwPWIwLnh6eXcrczAueHp5dypzaC54eHl5O3ZlYzQgYTE9YjEueHp5dytzMS54enl3KnNoLnp6d3c7dmVjMyBwMD12ZWMzKGEwLnh5LGgueCk7dmVjMyBwMT12ZWMzKGEwLnp3LGgueSk7dmVjMyBwMj12ZWMzKGExLnh5LGgueik7dmVjMyBwMz12ZWMzKGExLnp3LGgudyk7dmVjNCBub3JtPXRheWxvckludlNxcnQodmVjNChkb3QocDAscDApLGRvdChwMSxwMSksZG90KHAyLHAyKSxkb3QocDMscDMpKSk7cDAqPW5vcm0ueDtwMSo9bm9ybS55O3AyKj1ub3JtLno7cDMqPW5vcm0udzt2ZWM0IG09bWF4KDAuNi12ZWM0KGRvdCh4MCx4MCksZG90KHgxLHgxKSxkb3QoeDIseDIpLGRvdCh4Myx4MykpLDAuMCk7bT1tKm07cmV0dXJuIDQyLjAqZG90KG0qbSx2ZWM0KGRvdChwMCx4MCksZG90KHAxLHgxKSxkb3QocDIseDIpLGRvdChwMyx4MykpKTt9Y29uc3QgZmxvYXQgaGVpZ2h0X3NwYW49MjU1LjA7Y29uc3QgZmxvYXQgbGluZV9zcGFjaW5nPTMyLjA7Y29uc3QgZmxvYXQgbGluZV93aWR0aD0yLjA7dm9pZCBtYWluKCl7dmVjMiB1dj12ZWMyKGZyYWdDb29yZC54KmFzcGVjdF9yYXRpbyxmcmFnQ29vcmQueSk7ZmxvYXQgaGVpZ2h0PXNub2lzZSh2ZWMzKHV2LHRpbWUvMTAwLjApKTtmbG9hdCBtb2RfaGVpZ2h0PW1vZChoZWlnaHQqaGVpZ2h0X3NwYW4sbGluZV9zcGFjaW5nKTtpZihtb2RfaGVpZ2h0PGxpbmVfd2lkdGgpe2dsX0ZyYWdDb2xvcj12ZWM0KGxpbmVfY29sb3IsMS4wKTtyZXR1cm47fWdsX0ZyYWdDb2xvcj12ZWM0KGJhY2tncm91bmRfY29sb3IsMS4wKTt9IjsKZnVuY3Rpb24gRShlLCBvKSB7CiAgY29uc3QgciA9IEMoZSksIHsgdmVydGV4X2J1ZmZlcjogdCwgaW5kZXhfYnVmZmVyOiBhIH0gPSB6KHIpLCB7IHByb2dyYW06IG4sIHZlcnRleF9zaGFkZXI6IG0sIGZyYWdtZW50X3NoYWRlcjogaCB9ID0gQShyLCBiLCBTKTsKICByLnVzZVByb2dyYW0obiksIHIuZGVsZXRlU2hhZGVyKG0pLCByLmRlbGV0ZVNoYWRlcihoKTsKICBjb25zdCBsID0gci5nZXRBdHRyaWJMb2NhdGlvbihuLCAicG9zaXRpb24iKTsKICByLnZlcnRleEF0dHJpYlBvaW50ZXIobCwgMiwgci5GTE9BVCwgITEsIDAsIDApLCByLmVuYWJsZVZlcnRleEF0dHJpYkFycmF5KGwpOwogIGNvbnN0IHAgPSByLmdldFVuaWZvcm1Mb2NhdGlvbihuLCAiYmFja2dyb3VuZF9jb2xvciIpLCB5ID0gci5nZXRVbmlmb3JtTG9jYXRpb24obiwgImxpbmVfY29sb3IiKSwgZyA9IHIuZ2V0VW5pZm9ybUxvY2F0aW9uKG4sICJhc3BlY3RfcmF0aW8iKSwgdyA9IHIuZ2V0VW5pZm9ybUxvY2F0aW9uKG4sICJ0aW1lIik7CiAgXyhyLCBvLnJlbmRlcl93aWR0aCwgby5yZW5kZXJfaGVpZ2h0KTsKICBsZXQgYyA9IG51bGwsIGYgPSBpKG8uYmFja2dyb3VuZF9jb2xvciksIHUgPSBpKG8ubGluZV9jb2xvcik7CiAgY29uc3QgeCA9ICgpID0+IHsKICAgIGNvbnN0IHYgPSBvLnJlbmRlcl93aWR0aCAvIG8ucmVuZGVyX2hlaWdodDsKICAgIHIudW5pZm9ybTNmKHAsIC4uLmYpLCByLnVuaWZvcm0zZih5LCAuLi51KSwgci51bmlmb3JtMWYoZywgdiksIHIudW5pZm9ybTFmKHcsIHBlcmZvcm1hbmNlLm5vdygpIC8gMWUzICogby5zcGVlZCksIHIuY2xlYXJDb2xvciguLi5mLCAxKSwgci5jbGVhcihyLkNPTE9SX0JVRkZFUl9CSVQgfCByLkRFUFRIX0JVRkZFUl9CSVQpLCByLmRyYXdFbGVtZW50cyhyLlRSSUFOR0xFUywgNiwgci5VTlNJR05FRF9TSE9SVCwgMCksIGMgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoeCk7CiAgfTsKICByZXR1cm4gYyA9IHJlcXVlc3RBbmltYXRpb25GcmFtZSh4KSwgewogICAgdXBkYXRlOiAodikgPT4gewogICAgICBvID0gdiwgZiA9IGkoby5iYWNrZ3JvdW5kX2NvbG9yKSwgdSA9IGkoby5saW5lX2NvbG9yKSwgXyhyLCBvLnJlbmRlcl93aWR0aCwgby5yZW5kZXJfaGVpZ2h0KTsKICAgIH0sCiAgICBkZXN0cm95OiAoKSA9PiB7CiAgICAgIGMgJiYgKGNhbmNlbEFuaW1hdGlvbkZyYW1lKGMpLCBjID0gbnVsbCksIHIuZGVsZXRlUHJvZ3JhbShuKSwgci5kZWxldGVCdWZmZXIodCksIHIuZGVsZXRlQnVmZmVyKGEpOwogICAgfQogIH07Cn0KZnVuY3Rpb24gQyhlKSB7CiAgY29uc3QgbyA9IGUuZ2V0Q29udGV4dCgid2ViZ2wiKTsKICBpZiAoIShvIGluc3RhbmNlb2YgV2ViR0xSZW5kZXJpbmdDb250ZXh0KSkKICAgIHRocm93IG5ldyBFcnJvcigiZ2wgaXMgbm90IFdlYkdMUmVuZGVyaW5nQ29udGV4dCIpOwogIHJldHVybiBvOwp9CmZ1bmN0aW9uIHooZSkgewogIGNvbnN0IG8gPSBlLmNyZWF0ZUJ1ZmZlcigpLCByID0gZS5jcmVhdGVCdWZmZXIoKSwgdCA9IFstMSwgMSwgLTEsIC0xLCAxLCAtMSwgMSwgMV0sIGEgPSBbMywgMiwgMSwgMywgMSwgMF07CiAgcmV0dXJuIGUuYmluZEJ1ZmZlcihlLkFSUkFZX0JVRkZFUiwgbyksIGUuYnVmZmVyRGF0YShlLkFSUkFZX0JVRkZFUiwgbmV3IEZsb2F0MzJBcnJheSh0KSwgZS5TVEFUSUNfRFJBVyksIGUuYmluZEJ1ZmZlcihlLkVMRU1FTlRfQVJSQVlfQlVGRkVSLCByKSwgZS5idWZmZXJEYXRhKAogICAgZS5FTEVNRU5UX0FSUkFZX0JVRkZFUiwKICAgIG5ldyBVaW50MTZBcnJheShhKSwKICAgIGUuU1RBVElDX0RSQVcKICApLCB7IHZlcnRleF9idWZmZXI6IG8sIGluZGV4X2J1ZmZlcjogciB9Owp9CmZ1bmN0aW9uIEEoZSwgbywgcikgewogIGNvbnN0IHQgPSBlLmNyZWF0ZVNoYWRlcihlLlZFUlRFWF9TSEFERVIpOwogIGlmICghdCkKICAgIHRocm93IG5ldyBFcnJvcigidmVydGV4U2hhZGVyIGlzIG5vdCBXZWJHTFNoYWRlciIpOwogIGlmIChlLnNoYWRlclNvdXJjZSh0LCBvKSwgZS5jb21waWxlU2hhZGVyKHQpLCAhZS5nZXRTaGFkZXJQYXJhbWV0ZXIodCwgZS5DT01QSUxFX1NUQVRVUykpCiAgICB0aHJvdyBjb25zb2xlLmVycm9yKAogICAgICAiQ291bGQgbm90IGNvbXBpbGUgdmVydGV4IHNoYWRlciIsCiAgICAgIGUuZ2V0U2hhZGVySW5mb0xvZyh0KQogICAgKSwgZS5kZWxldGVTaGFkZXIodCksIG5ldyBFcnJvcigKICAgICAgIkNvdWxkIG5vdCBjb21waWxlIHZlcnRleCBzaGFkZXIgLSBDaGVjayBjb25zb2xlIGZvciBkZXRhaWxzIgogICAgKTsKICBjb25zdCBhID0gZS5jcmVhdGVTaGFkZXIoZS5GUkFHTUVOVF9TSEFERVIpOwogIGlmICghYSkKICAgIHRocm93IG5ldyBFcnJvcigiZnJhZ21lbnRTaGFkZXIgaXMgbm90IFdlYkdMU2hhZGVyIik7CiAgaWYgKGUuc2hhZGVyU291cmNlKGEsIHIpLCBlLmNvbXBpbGVTaGFkZXIoYSksICFlLmdldFNoYWRlclBhcmFtZXRlcihhLCBlLkNPTVBJTEVfU1RBVFVTKSkKICAgIHRocm93IGNvbnNvbGUuZXJyb3IoCiAgICAgICJDb3VsZCBub3QgY29tcGlsZSBmcmFnbWVudCBzaGFkZXIiLAogICAgICBlLmdldFNoYWRlckluZm9Mb2coYSkKICAgICksIGUuZGVsZXRlU2hhZGVyKGEpLCBuZXcgRXJyb3IoCiAgICAgICJDb3VsZCBub3QgY29tcGlsZSBmcmFnbWVudCBzaGFkZXIgLSBDaGVjayBjb25zb2xlIGZvciBkZXRhaWxzIgogICAgKTsKICBjb25zdCBuID0gZS5jcmVhdGVQcm9ncmFtKCk7CiAgaWYgKCFuKQogICAgdGhyb3cgbmV3IEVycm9yKCJwcm9ncmFtIGlzIG5vdCBXZWJHTFByb2dyYW0iKTsKICBpZiAoZS5hdHRhY2hTaGFkZXIobiwgdCksIGUuYXR0YWNoU2hhZGVyKG4sIGEpLCBlLmxpbmtQcm9ncmFtKG4pLCAhZS5nZXRQcm9ncmFtUGFyYW1ldGVyKG4sIGUuTElOS19TVEFUVVMpKQogICAgdGhyb3cgY29uc29sZS5lcnJvcigiQ291bGQgbm90IGxpbmsgcHJvZ3JhbSIpLCBlLmRlbGV0ZVByb2dyYW0obiksIG5ldyBFcnJvcigiQ291bGQgbm90IGxpbmsgcHJvZ3JhbSAtIENoZWNrIGNvbnNvbGUgZm9yIGRldGFpbHMiKTsKICByZXR1cm4geyBwcm9ncmFtOiBuLCB2ZXJ0ZXhfc2hhZGVyOiB0LCBmcmFnbWVudF9zaGFkZXI6IGEgfTsKfQpmdW5jdGlvbiBpKGUpIHsKICByZXR1cm4gZS5tYXAoKG8pID0+IG8gLyAyNTUpOwp9CmZ1bmN0aW9uIF8oZSwgbywgcikgewogIGUudmlld3BvcnQoMCwgMCwgbywgciksIGUuY2FudmFzLndpZHRoID0gbywgZS5jYW52YXMuaGVpZ2h0ID0gcjsKfQpsZXQgcyA9IG51bGwsIGQgPSBudWxsOwpmdW5jdGlvbiBSKGUpIHsKICBzd2l0Y2ggKGUuZGF0YS50eXBlKSB7CiAgICBjYXNlICJpbml0IjogewogICAgICBjb25zdCB7IGNhbnZhczogciwgb3B0aW9uczogdCB9ID0gZS5kYXRhOwogICAgICBUKHIsIHQpOwogICAgICBicmVhazsKICAgIH0KICAgIGNhc2UgInVwZGF0ZSI6IHsKICAgICAgY29uc3QgeyBvcHRpb25zOiByIH0gPSBlLmRhdGE7CiAgICAgIEwocik7CiAgICAgIGJyZWFrOwogICAgfQogICAgY2FzZSAiZGVzdHJveSI6IHsKICAgICAgRigpOwogICAgICBicmVhazsKICAgIH0KICAgIGRlZmF1bHQ6CiAgICAgIHRocm93IG5ldyBFcnJvcigiSW52YWxpZCBtZXNzYWdlIHR5cGUiKTsKICB9Cn0KZnVuY3Rpb24gVChlLCBvKSB7CiAgY29uc3QgeyB1cGRhdGU6IHIsIGRlc3Ryb3k6IHQgfSA9IEUoZSwgbyk7CiAgcyA9IHIsIGQgPSB0Owp9CmZ1bmN0aW9uIEwoZSkgewogIGlmICghcykKICAgIHRocm93IG5ldyBFcnJvcigiVG9wb2xvZ3kgbm90IGluaXRpYWxpemVkIik7CiAgcyhlKTsKfQpmdW5jdGlvbiBGKCkgewogIGlmICghZCkKICAgIHRocm93IG5ldyBFcnJvcigiVG9wb2xvZ3kgbm90IGluaXRpYWxpemVkIik7CiAgZCgpLCBzID0gbnVsbCwgZCA9IG51bGw7Cn0KYWRkRXZlbnRMaXN0ZW5lcigibWVzc2FnZSIsIFIpOwo=", C = typeof window < "u" && window.Blob && new Blob([atob(p)], { type: "text/javascript;charset=utf-8" });
function A() {
  let e;
  try {
    if (e = C && (window.URL || window.webkitURL).createObjectURL(C), !e)
      throw "";
    return new Worker(e);
  } catch {
    return new Worker("data:application/javascript;base64," + p, { type: "module" });
  } finally {
    e && (window.URL || window.webkitURL).revokeObjectURL(e);
  }
}
const B = (e, c) => {
  s(e, c.width, c.height);
  const o = b(c), g = e.transferControlToOffscreen(), r = new A();
  return r.postMessage({ type: "init", canvas: g, options: o }, [g]), {
    update: (t) => {
      s(e, t.width, t.height);
      const n = b(t);
      r.postMessage({ type: "update", options: n });
    },
    destroy: () => {
      r.postMessage({ type: "destroy" }), r.terminate();
    }
  };
};
function s(e, c, o) {
  e.style.width = `${c}px`, e.style.height = `${o}px`;
}
function b(e) {
  return {
    background_color: e.background_color,
    line_color: e.line_color,
    speed: e.speed,
    render_width: e.width * window.devicePixelRatio,
    render_height: e.height * window.devicePixelRatio
  };
}
var k = "precision highp float;attribute vec2 position;varying vec2 fragCoord;void main(){fragCoord=position;gl_Position=vec4(position,0.0,1.0);}", W = "precision highp float;uniform vec3 background_color;uniform vec3 line_color;uniform float aspect_ratio;uniform float time;varying vec2 fragCoord;vec3 mod289(vec3 x){return x-floor(x*(1.0/289.0))*289.0;}vec4 mod289(vec4 x){return x-floor(x*(1.0/289.0))*289.0;}vec4 permute(vec4 x){return mod289(((x*34.0)+1.0)*x);}vec4 taylorInvSqrt(vec4 r){return 1.79284291400159-0.85373472095314*r;}float snoise(vec3 v){const vec2 C=vec2(1.0/6.0,1.0/3.0);const vec4 D=vec4(0.0,0.5,1.0,2.0);vec3 i=floor(v+dot(v,C.yyy));vec3 x0=v-i+dot(i,C.xxx);vec3 g=step(x0.yzx,x0.xyz);vec3 l=1.0-g;vec3 i1=min(g.xyz,l.zxy);vec3 i2=max(g.xyz,l.zxy);vec3 x1=x0-i1+C.xxx;vec3 x2=x0-i2+C.yyy;vec3 x3=x0-D.yyy;i=mod289(i);vec4 p=permute(permute(permute(i.z+vec4(0.0,i1.z,i2.z,1.0))+i.y+vec4(0.0,i1.y,i2.y,1.0))+i.x+vec4(0.0,i1.x,i2.x,1.0));float n_=0.142857142857;vec3 ns=n_*D.wyz-D.xzx;vec4 j=p-49.0*floor(p*ns.z*ns.z);vec4 x_=floor(j*ns.z);vec4 y_=floor(j-7.0*x_);vec4 x=x_*ns.x+ns.yyyy;vec4 y=y_*ns.x+ns.yyyy;vec4 h=1.0-abs(x)-abs(y);vec4 b0=vec4(x.xy,y.xy);vec4 b1=vec4(x.zw,y.zw);vec4 s0=floor(b0)*2.0+1.0;vec4 s1=floor(b1)*2.0+1.0;vec4 sh=-step(h,vec4(0.0));vec4 a0=b0.xzyw+s0.xzyw*sh.xxyy;vec4 a1=b1.xzyw+s1.xzyw*sh.zzww;vec3 p0=vec3(a0.xy,h.x);vec3 p1=vec3(a0.zw,h.y);vec3 p2=vec3(a1.xy,h.z);vec3 p3=vec3(a1.zw,h.w);vec4 norm=taylorInvSqrt(vec4(dot(p0,p0),dot(p1,p1),dot(p2,p2),dot(p3,p3)));p0*=norm.x;p1*=norm.y;p2*=norm.z;p3*=norm.w;vec4 m=max(0.6-vec4(dot(x0,x0),dot(x1,x1),dot(x2,x2),dot(x3,x3)),0.0);m=m*m;return 42.0*dot(m*m,vec4(dot(p0,x0),dot(p1,x1),dot(p2,x2),dot(p3,x3)));}const float height_span=255.0;const float line_spacing=32.0;const float line_width=2.0;void main(){vec2 uv=vec2(fragCoord.x*aspect_ratio,fragCoord.y);float height=snoise(vec3(uv,time/100.0));float mod_height=mod(height*height_span,line_spacing);if(mod_height<line_width){gl_FragColor=vec4(line_color,1.0);return;}gl_FragColor=vec4(background_color,1.0);}";
function f(e, c) {
  const o = K(e), { vertex_buffer: g, index_buffer: r } = L(o), { program: t, vertex_shader: n, fragment_shader: w } = M(o, k, W);
  o.useProgram(t), o.deleteShader(n), o.deleteShader(w);
  const Z = o.getAttribLocation(t, "position");
  o.vertexAttribPointer(Z, 2, o.FLOAT, false, 0, 0), o.enableVertexAttribArray(Z);
  const v = o.getUniformLocation(t, "background_color"), V = o.getUniformLocation(t, "line_color"), S = o.getUniformLocation(t, "aspect_ratio"), x2 = o.getUniformLocation(t, "time");
  y(o, c.render_width, c.render_height);
  let i = null, l = d(c.background_color), a = d(c.line_color);
  const m = () => {
    const I = c.render_width / c.render_height;
    o.uniform3f(v, ...l), o.uniform3f(V, ...a), o.uniform1f(S, I), o.uniform1f(x2, performance.now() / 1e3 * c.speed), o.clearColor(...l, 1), o.clear(o.COLOR_BUFFER_BIT | o.DEPTH_BUFFER_BIT), o.drawElements(o.TRIANGLES, 6, o.UNSIGNED_SHORT, 0), i = requestAnimationFrame(m);
  };
  return i = requestAnimationFrame(m), {
    update: (I) => {
      c = I, l = d(c.background_color), a = d(c.line_color), y(o, c.render_width, c.render_height);
    },
    destroy: () => {
      i && (cancelAnimationFrame(i), i = null), o.deleteProgram(t), o.deleteBuffer(g), o.deleteBuffer(r);
    }
  };
}
function K(e) {
  const c = e.getContext("webgl");
  if (!(c instanceof WebGLRenderingContext))
    throw new Error("gl is not WebGLRenderingContext");
  return c;
}
function L(e) {
  const c = e.createBuffer(), o = e.createBuffer(), g = [-1, 1, -1, -1, 1, -1, 1, 1], r = [3, 2, 1, 3, 1, 0];
  return e.bindBuffer(e.ARRAY_BUFFER, c), e.bufferData(e.ARRAY_BUFFER, new Float32Array(g), e.STATIC_DRAW), e.bindBuffer(e.ELEMENT_ARRAY_BUFFER, o), e.bufferData(
    e.ELEMENT_ARRAY_BUFFER,
    new Uint16Array(r),
    e.STATIC_DRAW
  ), { vertex_buffer: c, index_buffer: o };
}
function M(e, c, o) {
  const g = e.createShader(e.VERTEX_SHADER);
  if (!g)
    throw new Error("vertexShader is not WebGLShader");
  if (e.shaderSource(g, c), e.compileShader(g), !e.getShaderParameter(g, e.COMPILE_STATUS))
    throw console.error(
      "Could not compile vertex shader",
      e.getShaderInfoLog(g)
    ), e.deleteShader(g), new Error(
      "Could not compile vertex shader - Check console for details"
    );
  const r = e.createShader(e.FRAGMENT_SHADER);
  if (!r)
    throw new Error("fragmentShader is not WebGLShader");
  if (e.shaderSource(r, o), e.compileShader(r), !e.getShaderParameter(r, e.COMPILE_STATUS))
    throw console.error(
      "Could not compile fragment shader",
      e.getShaderInfoLog(r)
    ), e.deleteShader(r), new Error(
      "Could not compile fragment shader - Check console for details"
    );
  const t = e.createProgram();
  if (!t)
    throw new Error("program is not WebGLProgram");
  if (e.attachShader(t, g), e.attachShader(t, r), e.linkProgram(t), !e.getProgramParameter(t, e.LINK_STATUS))
    throw console.error("Could not link program"), e.deleteProgram(t), new Error("Could not link program - Check console for details");
  return { program: t, vertex_shader: g, fragment_shader: r };
}
function d(e) {
  return e.map((c) => c / 255);
}
function y(e, c, o) {
  e.viewport(0, 0, c, o), e.canvas.width = c, e.canvas.height = o;
}
function R(e, c) {
  h(e, c.width, c.height);
  const o = G(c), { update: g, destroy: r } = f(e, o);
  return {
    update: (t) => {
      h(e, t.width, t.height);
      const n = G(t);
      g(n);
    },
    destroy: () => {
      r();
    }
  };
}
function h(e, c, o) {
  e.style.width = `${c}px`, e.style.height = `${o}px`;
}
function G(e) {
  return {
    background_color: e.background_color,
    line_color: e.line_color,
    speed: e.speed,
    render_width: e.width * window.devicePixelRatio,
    render_height: e.height * window.devicePixelRatio
  };
}
const u = {
  background_color: [0, 22, 37],
  line_color: [41, 56, 76],
  speed: 1,
  width: 300,
  height: 150
};
function F(e, c) {
  const o = { ...u, ...c };
  let g = (t) => {
  }, r = () => {
  };
  if (Y()) {
    const t = B(e, o);
    g = t.update, r = t.destroy;
  } else {
    const t = R(e, o);
    g = t.update, r = t.destroy;
  }
  return {
    update: (t) => {
      const n = { ...u, ...t };
      g(n);
    },
    destroy: r
  };
}
function Y() {
  if (!("Worker" in globalThis) || !("OffscreenCanvas" in globalThis) || !("transferControlToOffscreen" in HTMLCanvasElement.prototype))
    return false;
  try {
    return new OffscreenCanvas(1, 1).getContext("webgl") instanceof WebGLRenderingContext;
  } catch {
    return false;
  }
}
var colors$2 = {};
var log = {};
var picocolors_browser = { exports: {} };
var x = String;
var create = function() {
  return { isColorSupported: false, reset: x, bold: x, dim: x, italic: x, underline: x, inverse: x, hidden: x, strikethrough: x, black: x, red: x, green: x, yellow: x, blue: x, magenta: x, cyan: x, white: x, gray: x, bgBlack: x, bgRed: x, bgGreen: x, bgYellow: x, bgBlue: x, bgMagenta: x, bgCyan: x, bgWhite: x, blackBright: x, redBright: x, greenBright: x, yellowBright: x, blueBright: x, magentaBright: x, cyanBright: x, whiteBright: x, bgBlackBright: x, bgRedBright: x, bgGreenBright: x, bgYellowBright: x, bgBlueBright: x, bgMagentaBright: x, bgCyanBright: x, bgWhiteBright: x };
};
picocolors_browser.exports = create();
picocolors_browser.exports.createColors = create;
var picocolors_browserExports = picocolors_browser.exports;
(function(exports) {
  var define_process_env_default = {};
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  function _export(target, all) {
    for (var name in all)
      Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
      });
  }
  _export(exports, {
    dim: function() {
      return dim;
    },
    default: function() {
      return _default;
    }
  });
  const _picocolors = /* @__PURE__ */ _interop_require_default(picocolors_browserExports);
  function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }
  let alreadyShown = /* @__PURE__ */ new Set();
  function log2(type, messages, key) {
    if (typeof process !== "undefined" && define_process_env_default.JEST_WORKER_ID)
      return;
    if (key && alreadyShown.has(key))
      return;
    if (key)
      alreadyShown.add(key);
    console.warn("");
    messages.forEach((message) => console.warn(type, "-", message));
  }
  function dim(input) {
    return _picocolors.default.dim(input);
  }
  const _default = {
    info(key, messages) {
      log2(_picocolors.default.bold(_picocolors.default.cyan("info")), ...Array.isArray(key) ? [
        key
      ] : [
        messages,
        key
      ]);
    },
    warn(key, messages) {
      log2(_picocolors.default.bold(_picocolors.default.yellow("warn")), ...Array.isArray(key) ? [
        key
      ] : [
        messages,
        key
      ]);
    },
    risk(key, messages) {
      log2(_picocolors.default.bold(_picocolors.default.magenta("risk")), ...Array.isArray(key) ? [
        key
      ] : [
        messages,
        key
      ]);
    }
  };
})(log);
(function(exports) {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
      return _default;
    }
  });
  const _log = /* @__PURE__ */ _interop_require_default(log);
  function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }
  function warn({ version, from, to }) {
    _log.default.warn(`${from}-color-renamed`, [
      `As of Tailwind CSS ${version}, \`${from}\` has been renamed to \`${to}\`.`,
      "Update your configuration file to silence this warning."
    ]);
  }
  const _default = {
    inherit: "inherit",
    current: "currentColor",
    transparent: "transparent",
    black: "#000",
    white: "#fff",
    slate: {
      50: "#f8fafc",
      100: "#f1f5f9",
      200: "#e2e8f0",
      300: "#cbd5e1",
      400: "#94a3b8",
      500: "#64748b",
      600: "#475569",
      700: "#334155",
      800: "#1e293b",
      900: "#0f172a",
      950: "#020617"
    },
    gray: {
      50: "#f9fafb",
      100: "#f3f4f6",
      200: "#e5e7eb",
      300: "#d1d5db",
      400: "#9ca3af",
      500: "#6b7280",
      600: "#4b5563",
      700: "#374151",
      800: "#1f2937",
      900: "#111827",
      950: "#030712"
    },
    zinc: {
      50: "#fafafa",
      100: "#f4f4f5",
      200: "#e4e4e7",
      300: "#d4d4d8",
      400: "#a1a1aa",
      500: "#71717a",
      600: "#52525b",
      700: "#3f3f46",
      800: "#27272a",
      900: "#18181b",
      950: "#09090b"
    },
    neutral: {
      50: "#fafafa",
      100: "#f5f5f5",
      200: "#e5e5e5",
      300: "#d4d4d4",
      400: "#a3a3a3",
      500: "#737373",
      600: "#525252",
      700: "#404040",
      800: "#262626",
      900: "#171717",
      950: "#0a0a0a"
    },
    stone: {
      50: "#fafaf9",
      100: "#f5f5f4",
      200: "#e7e5e4",
      300: "#d6d3d1",
      400: "#a8a29e",
      500: "#78716c",
      600: "#57534e",
      700: "#44403c",
      800: "#292524",
      900: "#1c1917",
      950: "#0c0a09"
    },
    red: {
      50: "#fef2f2",
      100: "#fee2e2",
      200: "#fecaca",
      300: "#fca5a5",
      400: "#f87171",
      500: "#ef4444",
      600: "#dc2626",
      700: "#b91c1c",
      800: "#991b1b",
      900: "#7f1d1d",
      950: "#450a0a"
    },
    orange: {
      50: "#fff7ed",
      100: "#ffedd5",
      200: "#fed7aa",
      300: "#fdba74",
      400: "#fb923c",
      500: "#f97316",
      600: "#ea580c",
      700: "#c2410c",
      800: "#9a3412",
      900: "#7c2d12",
      950: "#431407"
    },
    amber: {
      50: "#fffbeb",
      100: "#fef3c7",
      200: "#fde68a",
      300: "#fcd34d",
      400: "#fbbf24",
      500: "#f59e0b",
      600: "#d97706",
      700: "#b45309",
      800: "#92400e",
      900: "#78350f",
      950: "#451a03"
    },
    yellow: {
      50: "#fefce8",
      100: "#fef9c3",
      200: "#fef08a",
      300: "#fde047",
      400: "#facc15",
      500: "#eab308",
      600: "#ca8a04",
      700: "#a16207",
      800: "#854d0e",
      900: "#713f12",
      950: "#422006"
    },
    lime: {
      50: "#f7fee7",
      100: "#ecfccb",
      200: "#d9f99d",
      300: "#bef264",
      400: "#a3e635",
      500: "#84cc16",
      600: "#65a30d",
      700: "#4d7c0f",
      800: "#3f6212",
      900: "#365314",
      950: "#1a2e05"
    },
    green: {
      50: "#f0fdf4",
      100: "#dcfce7",
      200: "#bbf7d0",
      300: "#86efac",
      400: "#4ade80",
      500: "#22c55e",
      600: "#16a34a",
      700: "#15803d",
      800: "#166534",
      900: "#14532d",
      950: "#052e16"
    },
    emerald: {
      50: "#ecfdf5",
      100: "#d1fae5",
      200: "#a7f3d0",
      300: "#6ee7b7",
      400: "#34d399",
      500: "#10b981",
      600: "#059669",
      700: "#047857",
      800: "#065f46",
      900: "#064e3b",
      950: "#022c22"
    },
    teal: {
      50: "#f0fdfa",
      100: "#ccfbf1",
      200: "#99f6e4",
      300: "#5eead4",
      400: "#2dd4bf",
      500: "#14b8a6",
      600: "#0d9488",
      700: "#0f766e",
      800: "#115e59",
      900: "#134e4a",
      950: "#042f2e"
    },
    cyan: {
      50: "#ecfeff",
      100: "#cffafe",
      200: "#a5f3fc",
      300: "#67e8f9",
      400: "#22d3ee",
      500: "#06b6d4",
      600: "#0891b2",
      700: "#0e7490",
      800: "#155e75",
      900: "#164e63",
      950: "#083344"
    },
    sky: {
      50: "#f0f9ff",
      100: "#e0f2fe",
      200: "#bae6fd",
      300: "#7dd3fc",
      400: "#38bdf8",
      500: "#0ea5e9",
      600: "#0284c7",
      700: "#0369a1",
      800: "#075985",
      900: "#0c4a6e",
      950: "#082f49"
    },
    blue: {
      50: "#eff6ff",
      100: "#dbeafe",
      200: "#bfdbfe",
      300: "#93c5fd",
      400: "#60a5fa",
      500: "#3b82f6",
      600: "#2563eb",
      700: "#1d4ed8",
      800: "#1e40af",
      900: "#1e3a8a",
      950: "#172554"
    },
    indigo: {
      50: "#eef2ff",
      100: "#e0e7ff",
      200: "#c7d2fe",
      300: "#a5b4fc",
      400: "#818cf8",
      500: "#6366f1",
      600: "#4f46e5",
      700: "#4338ca",
      800: "#3730a3",
      900: "#312e81",
      950: "#1e1b4b"
    },
    violet: {
      50: "#f5f3ff",
      100: "#ede9fe",
      200: "#ddd6fe",
      300: "#c4b5fd",
      400: "#a78bfa",
      500: "#8b5cf6",
      600: "#7c3aed",
      700: "#6d28d9",
      800: "#5b21b6",
      900: "#4c1d95",
      950: "#2e1065"
    },
    purple: {
      50: "#faf5ff",
      100: "#f3e8ff",
      200: "#e9d5ff",
      300: "#d8b4fe",
      400: "#c084fc",
      500: "#a855f7",
      600: "#9333ea",
      700: "#7e22ce",
      800: "#6b21a8",
      900: "#581c87",
      950: "#3b0764"
    },
    fuchsia: {
      50: "#fdf4ff",
      100: "#fae8ff",
      200: "#f5d0fe",
      300: "#f0abfc",
      400: "#e879f9",
      500: "#d946ef",
      600: "#c026d3",
      700: "#a21caf",
      800: "#86198f",
      900: "#701a75",
      950: "#4a044e"
    },
    pink: {
      50: "#fdf2f8",
      100: "#fce7f3",
      200: "#fbcfe8",
      300: "#f9a8d4",
      400: "#f472b6",
      500: "#ec4899",
      600: "#db2777",
      700: "#be185d",
      800: "#9d174d",
      900: "#831843",
      950: "#500724"
    },
    rose: {
      50: "#fff1f2",
      100: "#ffe4e6",
      200: "#fecdd3",
      300: "#fda4af",
      400: "#fb7185",
      500: "#f43f5e",
      600: "#e11d48",
      700: "#be123c",
      800: "#9f1239",
      900: "#881337",
      950: "#4c0519"
    },
    get lightBlue() {
      warn({
        version: "v2.2",
        from: "lightBlue",
        to: "sky"
      });
      return this.sky;
    },
    get warmGray() {
      warn({
        version: "v3.0",
        from: "warmGray",
        to: "stone"
      });
      return this.stone;
    },
    get trueGray() {
      warn({
        version: "v3.0",
        from: "trueGray",
        to: "neutral"
      });
      return this.neutral;
    },
    get coolGray() {
      warn({
        version: "v3.0",
        from: "coolGray",
        to: "gray"
      });
      return this.gray;
    },
    get blueGray() {
      warn({
        version: "v3.0",
        from: "blueGray",
        to: "slate"
      });
      return this.slate;
    }
  };
})(colors$2);
let colors = colors$2;
var colors_1 = (colors.__esModule ? colors : { default: colors }).default;
const colors$1 = /* @__PURE__ */ getDefaultExportFromCjs(colors_1);
function create_fragment$1(ctx) {
  let canvas;
  let topology_action;
  let mounted;
  let dispose;
  return {
    c() {
      canvas = element("canvas");
      this.h();
    },
    l(nodes) {
      canvas = claim_element(nodes, "CANVAS", { class: true, "aria-hidden": true });
      children(canvas).forEach(detach);
      this.h();
    },
    h() {
      attr(canvas, "class", "fixed inset-0 -z-50 fade-in print:hidden motion-reduce:hidden svelte-wo107b");
      attr(canvas, "aria-hidden", "true");
    },
    m(target, anchor) {
      insert_hydration(target, canvas, anchor);
      if (!mounted) {
        dispose = [
          listen(
            window,
            "resize",
            /*set_size*/
            ctx[4]
          ),
          action_destroyer(topology_action = F.call(null, canvas, {
            width: (
              /*width*/
              ctx[1]
            ),
            height: (
              /*height*/
              ctx[0]
            ),
            background_color: (
              /*background_color*/
              ctx[2]
            ),
            line_color: (
              /*line_color*/
              ctx[3]
            )
          }))
        ];
        mounted = true;
      }
    },
    p(ctx2, [dirty]) {
      if (topology_action && is_function(topology_action.update) && dirty & /*width, height, background_color, line_color*/
      15)
        topology_action.update.call(null, {
          width: (
            /*width*/
            ctx2[1]
          ),
          height: (
            /*height*/
            ctx2[0]
          ),
          background_color: (
            /*background_color*/
            ctx2[2]
          ),
          line_color: (
            /*line_color*/
            ctx2[3]
          )
        });
    },
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching) {
        detach(canvas);
      }
      mounted = false;
      run_all(dispose);
    }
  };
}
function hexToRGB(hex) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b2 = parseInt(hex.slice(5, 7), 16);
  return [r, g, b2];
}
function instance$1($$self, $$props, $$invalidate) {
  let $theme;
  component_subscribe($$self, theme, ($$value) => $$invalidate(5, $theme = $$value));
  const { stone, sky } = colors$1;
  let height = 1e3;
  let width = 1e3;
  function set_size() {
    $$invalidate(0, height = document.documentElement.clientHeight);
    $$invalidate(1, width = document.documentElement.clientWidth);
  }
  onMount(set_size);
  let background_color;
  let line_color;
  $$self.$$.update = () => {
    if ($$self.$$.dirty & /*$theme*/
    32) {
      $$invalidate(3, line_color = hexToRGB($theme === "dark" ? sky[950] : sky[200]));
    }
    if ($$self.$$.dirty & /*$theme*/
    32) {
      $$invalidate(2, background_color = hexToRGB($theme === "dark" ? stone[900] : stone[50]));
    }
  };
  return [height, width, background_color, line_color, set_size, $theme];
}
class Topology extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$1, create_fragment$1, safe_not_equal, {});
  }
}
function get_each_context(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[1] = list[i];
  return child_ctx;
}
function create_each_block(ctx) {
  let article_1;
  let current;
  article_1 = new Article({ props: { data: (
    /*article*/
    ctx[1]
  ) } });
  return {
    c() {
      create_component(article_1.$$.fragment);
    },
    l(nodes) {
      claim_component(article_1.$$.fragment, nodes);
    },
    m(target, anchor) {
      mount_component(article_1, target, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      const article_1_changes = {};
      if (dirty & /*data*/
      1)
        article_1_changes.data = /*article*/
        ctx2[1];
      article_1.$set(article_1_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(article_1.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(article_1.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(article_1, detaching);
    }
  };
}
function create_fragment(ctx) {
  let topology;
  let t0;
  let div3;
  let div2;
  let div1;
  let hgroup;
  let textContent = `<h1 class="text-8xl font-black mb-4">Loris Sigrist</h1> <p class="text-xl">Building fun stuff on the Internet. Occasional blogger, Frequent Nerd.</p>`;
  let t4;
  let div0;
  let current;
  topology = new Topology({});
  let each_value = ensure_array_like(
    /*data*/
    ctx[0].articles
  );
  let each_blocks = [];
  for (let i = 0; i < each_value.length; i += 1) {
    each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
  }
  const out = (i) => transition_out(each_blocks[i], 1, 1, () => {
    each_blocks[i] = null;
  });
  return {
    c() {
      create_component(topology.$$.fragment);
      t0 = space();
      div3 = element("div");
      div2 = element("div");
      div1 = element("div");
      hgroup = element("hgroup");
      hgroup.innerHTML = textContent;
      t4 = space();
      div0 = element("div");
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].c();
      }
      this.h();
    },
    l(nodes) {
      claim_component(topology.$$.fragment, nodes);
      t0 = claim_space(nodes);
      div3 = claim_element(nodes, "DIV", { class: true });
      var div3_nodes = children(div3);
      div2 = claim_element(div3_nodes, "DIV", { class: true });
      var div2_nodes = children(div2);
      div1 = claim_element(div2_nodes, "DIV", { class: true });
      var div1_nodes = children(div1);
      hgroup = claim_element(div1_nodes, "HGROUP", { class: true, ["data-svelte-h"]: true });
      if (get_svelte_dataset(hgroup) !== "svelte-1p82tkp")
        hgroup.innerHTML = textContent;
      t4 = claim_space(div1_nodes);
      div0 = claim_element(div1_nodes, "DIV", { class: true });
      var div0_nodes = children(div0);
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].l(div0_nodes);
      }
      div0_nodes.forEach(detach);
      div1_nodes.forEach(detach);
      div2_nodes.forEach(detach);
      div3_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(hgroup, "class", "mb-8");
      attr(div0, "class", "mt-10 pt-10 space-y-5 print:space-y-10 sm:mt-8 sm:pt-8 max-w-2xl");
      attr(div1, "class", "mx-auto max-w-2xl print:mx-0 print:max-w-none");
      attr(div2, "class", "mx-auto max-w-7xl px-6 lg:px-8");
      attr(div3, "class", "py-24 sm:py-32");
    },
    m(target, anchor) {
      mount_component(topology, target, anchor);
      insert_hydration(target, t0, anchor);
      insert_hydration(target, div3, anchor);
      append_hydration(div3, div2);
      append_hydration(div2, div1);
      append_hydration(div1, hgroup);
      append_hydration(div1, t4);
      append_hydration(div1, div0);
      for (let i = 0; i < each_blocks.length; i += 1) {
        if (each_blocks[i]) {
          each_blocks[i].m(div0, null);
        }
      }
      current = true;
    },
    p(ctx2, [dirty]) {
      if (dirty & /*data*/
      1) {
        each_value = ensure_array_like(
          /*data*/
          ctx2[0].articles
        );
        let i;
        for (i = 0; i < each_value.length; i += 1) {
          const child_ctx = get_each_context(ctx2, each_value, i);
          if (each_blocks[i]) {
            each_blocks[i].p(child_ctx, dirty);
            transition_in(each_blocks[i], 1);
          } else {
            each_blocks[i] = create_each_block(child_ctx);
            each_blocks[i].c();
            transition_in(each_blocks[i], 1);
            each_blocks[i].m(div0, null);
          }
        }
        group_outros();
        for (i = each_value.length; i < each_blocks.length; i += 1) {
          out(i);
        }
        check_outros();
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(topology.$$.fragment, local);
      for (let i = 0; i < each_value.length; i += 1) {
        transition_in(each_blocks[i]);
      }
      current = true;
    },
    o(local) {
      transition_out(topology.$$.fragment, local);
      each_blocks = each_blocks.filter(Boolean);
      for (let i = 0; i < each_blocks.length; i += 1) {
        transition_out(each_blocks[i]);
      }
      current = false;
    },
    d(detaching) {
      if (detaching) {
        detach(t0);
        detach(div3);
      }
      destroy_component(topology, detaching);
      destroy_each(each_blocks, detaching);
    }
  };
}
function instance($$self, $$props, $$invalidate) {
  let { data } = $$props;
  $$self.$$set = ($$props2) => {
    if ("data" in $$props2)
      $$invalidate(0, data = $$props2.data);
  };
  return [data];
}
class Page extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance, create_fragment, safe_not_equal, { data: 0 });
  }
}
export {
  Page as component
};
