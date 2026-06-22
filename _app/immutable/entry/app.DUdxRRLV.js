const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["../nodes/0.qtZVnYTY.js","../chunks/scheduler.ZIqz7M1C.js","../chunks/index.D4FFmrY2.js","../nodes/1.B7zMeAcf.js","../chunks/stores.2p-c286S.js","../chunks/entry.Cuk3W8hS.js","../chunks/index.CtraicQk.js","../nodes/2.Be2q3Msa.js","../chunks/Metadata.o9CRy0Gv.js","../assets/Metadata.CvNMVPeL.css","../chunks/each.CuygwpM4.js","../chunks/theme.BHSbm7Uk.js","../nodes/3.B9KcmJVe.js","../assets/3.C1fGWMhf.css","../nodes/4.OtML7M6u.js","../nodes/5.DJpSWQb0.js","../nodes/6.C1wDy7l0.js","../chunks/_commonjsHelpers.DWwsNxpa.js","../assets/6.C0-9uiu2.css","../nodes/7.BJEQCr9k.js","../nodes/8.BR6t0zWc.js","../nodes/9.G5ghvx3L.js","../nodes/10.C23SJQsi.js","../nodes/11.BwdkYfw6.js","../nodes/12.B65CqOIc.js","../nodes/13.N9p0AeHA.js","../nodes/14.0gr4CXJc.js","../chunks/preload-helper.CQrtv1eE.js","../chunks/Showcase.CrHcMjuA.js","../nodes/15.tddCCTtO.js","../nodes/16.CQsjl0ZL.js","../nodes/17.C6ux6udd.js","../nodes/18.DR6PJr0e.js","../nodes/19.C1gzig0d.js","../nodes/20.BYCmJjns.js","../nodes/21.CjtscgHT.js"])))=>i.map(i=>d[i]);
import { _ as __vitePreload } from "../chunks/preload-helper.CQrtv1eE.js";
import { s as safe_not_equal, d as afterUpdate, o as onMount, t as tick, e as binding_callbacks } from "../chunks/scheduler.ZIqz7M1C.js";
import { S as SvelteComponent, i as init, d as detach, o as transition_out, p as transition_in, q as group_outros, r as check_outros, a as insert_hydration, g as claim_space, n as empty, j as space, u as construct_svelte_component, v as destroy_component, w as create_component, x as mount_component, y as claim_component, k as attr, z as set_style, c as claim_element, e as children, h as element, s as set_data, f as claim_text, t as text } from "../chunks/index.D4FFmrY2.js";
const matchers = {};
function create_else_block_2(ctx) {
  let switch_instance;
  let switch_instance_anchor;
  let current;
  var switch_value = (
    /*constructors*/
    ctx[1][0]
  );
  function switch_props(ctx2, dirty) {
    let switch_instance_props = {
      data: (
        /*data_0*/
        ctx2[3]
      ),
      form: (
        /*form*/
        ctx2[2]
      )
    };
    return { props: switch_instance_props };
  }
  if (switch_value) {
    switch_instance = construct_svelte_component(switch_value, switch_props(ctx));
    ctx[18](switch_instance);
  }
  return {
    c() {
      if (switch_instance) create_component(switch_instance.$$.fragment);
      switch_instance_anchor = empty();
    },
    l(nodes2) {
      if (switch_instance) claim_component(switch_instance.$$.fragment, nodes2);
      switch_instance_anchor = empty();
    },
    m(target, anchor) {
      if (switch_instance) mount_component(switch_instance, target, anchor);
      insert_hydration(target, switch_instance_anchor, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      if (dirty & /*constructors*/
      2 && switch_value !== (switch_value = /*constructors*/
      ctx2[1][0])) {
        if (switch_instance) {
          group_outros();
          const old_component = switch_instance;
          transition_out(old_component.$$.fragment, 1, 0, () => {
            destroy_component(old_component, 1);
          });
          check_outros();
        }
        if (switch_value) {
          switch_instance = construct_svelte_component(switch_value, switch_props(ctx2));
          ctx2[18](switch_instance);
          create_component(switch_instance.$$.fragment);
          transition_in(switch_instance.$$.fragment, 1);
          mount_component(switch_instance, switch_instance_anchor.parentNode, switch_instance_anchor);
        } else {
          switch_instance = null;
        }
      } else if (switch_value) {
        const switch_instance_changes = {};
        if (dirty & /*data_0*/
        8) switch_instance_changes.data = /*data_0*/
        ctx2[3];
        if (dirty & /*form*/
        4) switch_instance_changes.form = /*form*/
        ctx2[2];
        switch_instance.$set(switch_instance_changes);
      }
    },
    i(local) {
      if (current) return;
      if (switch_instance) transition_in(switch_instance.$$.fragment, local);
      current = true;
    },
    o(local) {
      if (switch_instance) transition_out(switch_instance.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      if (detaching) {
        detach(switch_instance_anchor);
      }
      ctx[18](null);
      if (switch_instance) destroy_component(switch_instance, detaching);
    }
  };
}
function create_if_block_2(ctx) {
  let switch_instance;
  let switch_instance_anchor;
  let current;
  var switch_value = (
    /*constructors*/
    ctx[1][0]
  );
  function switch_props(ctx2, dirty) {
    let switch_instance_props = {
      data: (
        /*data_0*/
        ctx2[3]
      ),
      $$slots: { default: [create_default_slot] },
      $$scope: { ctx: ctx2 }
    };
    return { props: switch_instance_props };
  }
  if (switch_value) {
    switch_instance = construct_svelte_component(switch_value, switch_props(ctx));
    ctx[17](switch_instance);
  }
  return {
    c() {
      if (switch_instance) create_component(switch_instance.$$.fragment);
      switch_instance_anchor = empty();
    },
    l(nodes2) {
      if (switch_instance) claim_component(switch_instance.$$.fragment, nodes2);
      switch_instance_anchor = empty();
    },
    m(target, anchor) {
      if (switch_instance) mount_component(switch_instance, target, anchor);
      insert_hydration(target, switch_instance_anchor, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      if (dirty & /*constructors*/
      2 && switch_value !== (switch_value = /*constructors*/
      ctx2[1][0])) {
        if (switch_instance) {
          group_outros();
          const old_component = switch_instance;
          transition_out(old_component.$$.fragment, 1, 0, () => {
            destroy_component(old_component, 1);
          });
          check_outros();
        }
        if (switch_value) {
          switch_instance = construct_svelte_component(switch_value, switch_props(ctx2));
          ctx2[17](switch_instance);
          create_component(switch_instance.$$.fragment);
          transition_in(switch_instance.$$.fragment, 1);
          mount_component(switch_instance, switch_instance_anchor.parentNode, switch_instance_anchor);
        } else {
          switch_instance = null;
        }
      } else if (switch_value) {
        const switch_instance_changes = {};
        if (dirty & /*data_0*/
        8) switch_instance_changes.data = /*data_0*/
        ctx2[3];
        if (dirty & /*$$scope, constructors, data_1, components, data_2, data_3, form*/
        524407) {
          switch_instance_changes.$$scope = { dirty, ctx: ctx2 };
        }
        switch_instance.$set(switch_instance_changes);
      }
    },
    i(local) {
      if (current) return;
      if (switch_instance) transition_in(switch_instance.$$.fragment, local);
      current = true;
    },
    o(local) {
      if (switch_instance) transition_out(switch_instance.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      if (detaching) {
        detach(switch_instance_anchor);
      }
      ctx[17](null);
      if (switch_instance) destroy_component(switch_instance, detaching);
    }
  };
}
function create_else_block_1(ctx) {
  let switch_instance;
  let switch_instance_anchor;
  let current;
  var switch_value = (
    /*constructors*/
    ctx[1][1]
  );
  function switch_props(ctx2, dirty) {
    let switch_instance_props = {
      data: (
        /*data_1*/
        ctx2[4]
      ),
      form: (
        /*form*/
        ctx2[2]
      )
    };
    return { props: switch_instance_props };
  }
  if (switch_value) {
    switch_instance = construct_svelte_component(switch_value, switch_props(ctx));
    ctx[16](switch_instance);
  }
  return {
    c() {
      if (switch_instance) create_component(switch_instance.$$.fragment);
      switch_instance_anchor = empty();
    },
    l(nodes2) {
      if (switch_instance) claim_component(switch_instance.$$.fragment, nodes2);
      switch_instance_anchor = empty();
    },
    m(target, anchor) {
      if (switch_instance) mount_component(switch_instance, target, anchor);
      insert_hydration(target, switch_instance_anchor, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      if (dirty & /*constructors*/
      2 && switch_value !== (switch_value = /*constructors*/
      ctx2[1][1])) {
        if (switch_instance) {
          group_outros();
          const old_component = switch_instance;
          transition_out(old_component.$$.fragment, 1, 0, () => {
            destroy_component(old_component, 1);
          });
          check_outros();
        }
        if (switch_value) {
          switch_instance = construct_svelte_component(switch_value, switch_props(ctx2));
          ctx2[16](switch_instance);
          create_component(switch_instance.$$.fragment);
          transition_in(switch_instance.$$.fragment, 1);
          mount_component(switch_instance, switch_instance_anchor.parentNode, switch_instance_anchor);
        } else {
          switch_instance = null;
        }
      } else if (switch_value) {
        const switch_instance_changes = {};
        if (dirty & /*data_1*/
        16) switch_instance_changes.data = /*data_1*/
        ctx2[4];
        if (dirty & /*form*/
        4) switch_instance_changes.form = /*form*/
        ctx2[2];
        switch_instance.$set(switch_instance_changes);
      }
    },
    i(local) {
      if (current) return;
      if (switch_instance) transition_in(switch_instance.$$.fragment, local);
      current = true;
    },
    o(local) {
      if (switch_instance) transition_out(switch_instance.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      if (detaching) {
        detach(switch_instance_anchor);
      }
      ctx[16](null);
      if (switch_instance) destroy_component(switch_instance, detaching);
    }
  };
}
function create_if_block_3(ctx) {
  let switch_instance;
  let switch_instance_anchor;
  let current;
  var switch_value = (
    /*constructors*/
    ctx[1][1]
  );
  function switch_props(ctx2, dirty) {
    let switch_instance_props = {
      data: (
        /*data_1*/
        ctx2[4]
      ),
      $$slots: { default: [create_default_slot_1] },
      $$scope: { ctx: ctx2 }
    };
    return { props: switch_instance_props };
  }
  if (switch_value) {
    switch_instance = construct_svelte_component(switch_value, switch_props(ctx));
    ctx[15](switch_instance);
  }
  return {
    c() {
      if (switch_instance) create_component(switch_instance.$$.fragment);
      switch_instance_anchor = empty();
    },
    l(nodes2) {
      if (switch_instance) claim_component(switch_instance.$$.fragment, nodes2);
      switch_instance_anchor = empty();
    },
    m(target, anchor) {
      if (switch_instance) mount_component(switch_instance, target, anchor);
      insert_hydration(target, switch_instance_anchor, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      if (dirty & /*constructors*/
      2 && switch_value !== (switch_value = /*constructors*/
      ctx2[1][1])) {
        if (switch_instance) {
          group_outros();
          const old_component = switch_instance;
          transition_out(old_component.$$.fragment, 1, 0, () => {
            destroy_component(old_component, 1);
          });
          check_outros();
        }
        if (switch_value) {
          switch_instance = construct_svelte_component(switch_value, switch_props(ctx2));
          ctx2[15](switch_instance);
          create_component(switch_instance.$$.fragment);
          transition_in(switch_instance.$$.fragment, 1);
          mount_component(switch_instance, switch_instance_anchor.parentNode, switch_instance_anchor);
        } else {
          switch_instance = null;
        }
      } else if (switch_value) {
        const switch_instance_changes = {};
        if (dirty & /*data_1*/
        16) switch_instance_changes.data = /*data_1*/
        ctx2[4];
        if (dirty & /*$$scope, constructors, data_2, components, data_3, form*/
        524391) {
          switch_instance_changes.$$scope = { dirty, ctx: ctx2 };
        }
        switch_instance.$set(switch_instance_changes);
      }
    },
    i(local) {
      if (current) return;
      if (switch_instance) transition_in(switch_instance.$$.fragment, local);
      current = true;
    },
    o(local) {
      if (switch_instance) transition_out(switch_instance.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      if (detaching) {
        detach(switch_instance_anchor);
      }
      ctx[15](null);
      if (switch_instance) destroy_component(switch_instance, detaching);
    }
  };
}
function create_else_block(ctx) {
  let switch_instance;
  let switch_instance_anchor;
  let current;
  var switch_value = (
    /*constructors*/
    ctx[1][2]
  );
  function switch_props(ctx2, dirty) {
    let switch_instance_props = {
      data: (
        /*data_2*/
        ctx2[5]
      ),
      form: (
        /*form*/
        ctx2[2]
      )
    };
    return { props: switch_instance_props };
  }
  if (switch_value) {
    switch_instance = construct_svelte_component(switch_value, switch_props(ctx));
    ctx[14](switch_instance);
  }
  return {
    c() {
      if (switch_instance) create_component(switch_instance.$$.fragment);
      switch_instance_anchor = empty();
    },
    l(nodes2) {
      if (switch_instance) claim_component(switch_instance.$$.fragment, nodes2);
      switch_instance_anchor = empty();
    },
    m(target, anchor) {
      if (switch_instance) mount_component(switch_instance, target, anchor);
      insert_hydration(target, switch_instance_anchor, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      if (dirty & /*constructors*/
      2 && switch_value !== (switch_value = /*constructors*/
      ctx2[1][2])) {
        if (switch_instance) {
          group_outros();
          const old_component = switch_instance;
          transition_out(old_component.$$.fragment, 1, 0, () => {
            destroy_component(old_component, 1);
          });
          check_outros();
        }
        if (switch_value) {
          switch_instance = construct_svelte_component(switch_value, switch_props(ctx2));
          ctx2[14](switch_instance);
          create_component(switch_instance.$$.fragment);
          transition_in(switch_instance.$$.fragment, 1);
          mount_component(switch_instance, switch_instance_anchor.parentNode, switch_instance_anchor);
        } else {
          switch_instance = null;
        }
      } else if (switch_value) {
        const switch_instance_changes = {};
        if (dirty & /*data_2*/
        32) switch_instance_changes.data = /*data_2*/
        ctx2[5];
        if (dirty & /*form*/
        4) switch_instance_changes.form = /*form*/
        ctx2[2];
        switch_instance.$set(switch_instance_changes);
      }
    },
    i(local) {
      if (current) return;
      if (switch_instance) transition_in(switch_instance.$$.fragment, local);
      current = true;
    },
    o(local) {
      if (switch_instance) transition_out(switch_instance.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      if (detaching) {
        detach(switch_instance_anchor);
      }
      ctx[14](null);
      if (switch_instance) destroy_component(switch_instance, detaching);
    }
  };
}
function create_if_block_4(ctx) {
  let switch_instance;
  let switch_instance_anchor;
  let current;
  var switch_value = (
    /*constructors*/
    ctx[1][2]
  );
  function switch_props(ctx2, dirty) {
    let switch_instance_props = {
      data: (
        /*data_2*/
        ctx2[5]
      ),
      $$slots: { default: [create_default_slot_2] },
      $$scope: { ctx: ctx2 }
    };
    return { props: switch_instance_props };
  }
  if (switch_value) {
    switch_instance = construct_svelte_component(switch_value, switch_props(ctx));
    ctx[13](switch_instance);
  }
  return {
    c() {
      if (switch_instance) create_component(switch_instance.$$.fragment);
      switch_instance_anchor = empty();
    },
    l(nodes2) {
      if (switch_instance) claim_component(switch_instance.$$.fragment, nodes2);
      switch_instance_anchor = empty();
    },
    m(target, anchor) {
      if (switch_instance) mount_component(switch_instance, target, anchor);
      insert_hydration(target, switch_instance_anchor, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      if (dirty & /*constructors*/
      2 && switch_value !== (switch_value = /*constructors*/
      ctx2[1][2])) {
        if (switch_instance) {
          group_outros();
          const old_component = switch_instance;
          transition_out(old_component.$$.fragment, 1, 0, () => {
            destroy_component(old_component, 1);
          });
          check_outros();
        }
        if (switch_value) {
          switch_instance = construct_svelte_component(switch_value, switch_props(ctx2));
          ctx2[13](switch_instance);
          create_component(switch_instance.$$.fragment);
          transition_in(switch_instance.$$.fragment, 1);
          mount_component(switch_instance, switch_instance_anchor.parentNode, switch_instance_anchor);
        } else {
          switch_instance = null;
        }
      } else if (switch_value) {
        const switch_instance_changes = {};
        if (dirty & /*data_2*/
        32) switch_instance_changes.data = /*data_2*/
        ctx2[5];
        if (dirty & /*$$scope, constructors, data_3, form, components*/
        524359) {
          switch_instance_changes.$$scope = { dirty, ctx: ctx2 };
        }
        switch_instance.$set(switch_instance_changes);
      }
    },
    i(local) {
      if (current) return;
      if (switch_instance) transition_in(switch_instance.$$.fragment, local);
      current = true;
    },
    o(local) {
      if (switch_instance) transition_out(switch_instance.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      if (detaching) {
        detach(switch_instance_anchor);
      }
      ctx[13](null);
      if (switch_instance) destroy_component(switch_instance, detaching);
    }
  };
}
function create_default_slot_2(ctx) {
  let switch_instance;
  let switch_instance_anchor;
  let current;
  var switch_value = (
    /*constructors*/
    ctx[1][3]
  );
  function switch_props(ctx2, dirty) {
    let switch_instance_props = {
      data: (
        /*data_3*/
        ctx2[6]
      ),
      form: (
        /*form*/
        ctx2[2]
      )
    };
    return { props: switch_instance_props };
  }
  if (switch_value) {
    switch_instance = construct_svelte_component(switch_value, switch_props(ctx));
    ctx[12](switch_instance);
  }
  return {
    c() {
      if (switch_instance) create_component(switch_instance.$$.fragment);
      switch_instance_anchor = empty();
    },
    l(nodes2) {
      if (switch_instance) claim_component(switch_instance.$$.fragment, nodes2);
      switch_instance_anchor = empty();
    },
    m(target, anchor) {
      if (switch_instance) mount_component(switch_instance, target, anchor);
      insert_hydration(target, switch_instance_anchor, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      if (dirty & /*constructors*/
      2 && switch_value !== (switch_value = /*constructors*/
      ctx2[1][3])) {
        if (switch_instance) {
          group_outros();
          const old_component = switch_instance;
          transition_out(old_component.$$.fragment, 1, 0, () => {
            destroy_component(old_component, 1);
          });
          check_outros();
        }
        if (switch_value) {
          switch_instance = construct_svelte_component(switch_value, switch_props(ctx2));
          ctx2[12](switch_instance);
          create_component(switch_instance.$$.fragment);
          transition_in(switch_instance.$$.fragment, 1);
          mount_component(switch_instance, switch_instance_anchor.parentNode, switch_instance_anchor);
        } else {
          switch_instance = null;
        }
      } else if (switch_value) {
        const switch_instance_changes = {};
        if (dirty & /*data_3*/
        64) switch_instance_changes.data = /*data_3*/
        ctx2[6];
        if (dirty & /*form*/
        4) switch_instance_changes.form = /*form*/
        ctx2[2];
        switch_instance.$set(switch_instance_changes);
      }
    },
    i(local) {
      if (current) return;
      if (switch_instance) transition_in(switch_instance.$$.fragment, local);
      current = true;
    },
    o(local) {
      if (switch_instance) transition_out(switch_instance.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      if (detaching) {
        detach(switch_instance_anchor);
      }
      ctx[12](null);
      if (switch_instance) destroy_component(switch_instance, detaching);
    }
  };
}
function create_default_slot_1(ctx) {
  let current_block_type_index;
  let if_block;
  let if_block_anchor;
  let current;
  const if_block_creators = [create_if_block_4, create_else_block];
  const if_blocks = [];
  function select_block_type_2(ctx2, dirty) {
    if (
      /*constructors*/
      ctx2[1][3]
    ) return 0;
    return 1;
  }
  current_block_type_index = select_block_type_2(ctx);
  if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
  return {
    c() {
      if_block.c();
      if_block_anchor = empty();
    },
    l(nodes2) {
      if_block.l(nodes2);
      if_block_anchor = empty();
    },
    m(target, anchor) {
      if_blocks[current_block_type_index].m(target, anchor);
      insert_hydration(target, if_block_anchor, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      let previous_block_index = current_block_type_index;
      current_block_type_index = select_block_type_2(ctx2);
      if (current_block_type_index === previous_block_index) {
        if_blocks[current_block_type_index].p(ctx2, dirty);
      } else {
        group_outros();
        transition_out(if_blocks[previous_block_index], 1, 1, () => {
          if_blocks[previous_block_index] = null;
        });
        check_outros();
        if_block = if_blocks[current_block_type_index];
        if (!if_block) {
          if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx2);
          if_block.c();
        } else {
          if_block.p(ctx2, dirty);
        }
        transition_in(if_block, 1);
        if_block.m(if_block_anchor.parentNode, if_block_anchor);
      }
    },
    i(local) {
      if (current) return;
      transition_in(if_block);
      current = true;
    },
    o(local) {
      transition_out(if_block);
      current = false;
    },
    d(detaching) {
      if (detaching) {
        detach(if_block_anchor);
      }
      if_blocks[current_block_type_index].d(detaching);
    }
  };
}
function create_default_slot(ctx) {
  let current_block_type_index;
  let if_block;
  let if_block_anchor;
  let current;
  const if_block_creators = [create_if_block_3, create_else_block_1];
  const if_blocks = [];
  function select_block_type_1(ctx2, dirty) {
    if (
      /*constructors*/
      ctx2[1][2]
    ) return 0;
    return 1;
  }
  current_block_type_index = select_block_type_1(ctx);
  if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
  return {
    c() {
      if_block.c();
      if_block_anchor = empty();
    },
    l(nodes2) {
      if_block.l(nodes2);
      if_block_anchor = empty();
    },
    m(target, anchor) {
      if_blocks[current_block_type_index].m(target, anchor);
      insert_hydration(target, if_block_anchor, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      let previous_block_index = current_block_type_index;
      current_block_type_index = select_block_type_1(ctx2);
      if (current_block_type_index === previous_block_index) {
        if_blocks[current_block_type_index].p(ctx2, dirty);
      } else {
        group_outros();
        transition_out(if_blocks[previous_block_index], 1, 1, () => {
          if_blocks[previous_block_index] = null;
        });
        check_outros();
        if_block = if_blocks[current_block_type_index];
        if (!if_block) {
          if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx2);
          if_block.c();
        } else {
          if_block.p(ctx2, dirty);
        }
        transition_in(if_block, 1);
        if_block.m(if_block_anchor.parentNode, if_block_anchor);
      }
    },
    i(local) {
      if (current) return;
      transition_in(if_block);
      current = true;
    },
    o(local) {
      transition_out(if_block);
      current = false;
    },
    d(detaching) {
      if (detaching) {
        detach(if_block_anchor);
      }
      if_blocks[current_block_type_index].d(detaching);
    }
  };
}
function create_if_block(ctx) {
  let div;
  let if_block = (
    /*navigated*/
    ctx[8] && create_if_block_1(ctx)
  );
  return {
    c() {
      div = element("div");
      if (if_block) if_block.c();
      this.h();
    },
    l(nodes2) {
      div = claim_element(nodes2, "DIV", {
        id: true,
        "aria-live": true,
        "aria-atomic": true,
        style: true
      });
      var div_nodes = children(div);
      if (if_block) if_block.l(div_nodes);
      div_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(div, "id", "svelte-announcer");
      attr(div, "aria-live", "assertive");
      attr(div, "aria-atomic", "true");
      set_style(div, "position", "absolute");
      set_style(div, "left", "0");
      set_style(div, "top", "0");
      set_style(div, "clip", "rect(0 0 0 0)");
      set_style(div, "clip-path", "inset(50%)");
      set_style(div, "overflow", "hidden");
      set_style(div, "white-space", "nowrap");
      set_style(div, "width", "1px");
      set_style(div, "height", "1px");
    },
    m(target, anchor) {
      insert_hydration(target, div, anchor);
      if (if_block) if_block.m(div, null);
    },
    p(ctx2, dirty) {
      if (
        /*navigated*/
        ctx2[8]
      ) {
        if (if_block) {
          if_block.p(ctx2, dirty);
        } else {
          if_block = create_if_block_1(ctx2);
          if_block.c();
          if_block.m(div, null);
        }
      } else if (if_block) {
        if_block.d(1);
        if_block = null;
      }
    },
    d(detaching) {
      if (detaching) {
        detach(div);
      }
      if (if_block) if_block.d();
    }
  };
}
function create_if_block_1(ctx) {
  let t;
  return {
    c() {
      t = text(
        /*title*/
        ctx[9]
      );
    },
    l(nodes2) {
      t = claim_text(
        nodes2,
        /*title*/
        ctx[9]
      );
    },
    m(target, anchor) {
      insert_hydration(target, t, anchor);
    },
    p(ctx2, dirty) {
      if (dirty & /*title*/
      512) set_data(
        t,
        /*title*/
        ctx2[9]
      );
    },
    d(detaching) {
      if (detaching) {
        detach(t);
      }
    }
  };
}
function create_fragment(ctx) {
  let current_block_type_index;
  let if_block0;
  let t;
  let if_block1_anchor;
  let current;
  const if_block_creators = [create_if_block_2, create_else_block_2];
  const if_blocks = [];
  function select_block_type(ctx2, dirty) {
    if (
      /*constructors*/
      ctx2[1][1]
    ) return 0;
    return 1;
  }
  current_block_type_index = select_block_type(ctx);
  if_block0 = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
  let if_block1 = (
    /*mounted*/
    ctx[7] && create_if_block(ctx)
  );
  return {
    c() {
      if_block0.c();
      t = space();
      if (if_block1) if_block1.c();
      if_block1_anchor = empty();
    },
    l(nodes2) {
      if_block0.l(nodes2);
      t = claim_space(nodes2);
      if (if_block1) if_block1.l(nodes2);
      if_block1_anchor = empty();
    },
    m(target, anchor) {
      if_blocks[current_block_type_index].m(target, anchor);
      insert_hydration(target, t, anchor);
      if (if_block1) if_block1.m(target, anchor);
      insert_hydration(target, if_block1_anchor, anchor);
      current = true;
    },
    p(ctx2, [dirty]) {
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
        if_block0 = if_blocks[current_block_type_index];
        if (!if_block0) {
          if_block0 = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx2);
          if_block0.c();
        } else {
          if_block0.p(ctx2, dirty);
        }
        transition_in(if_block0, 1);
        if_block0.m(t.parentNode, t);
      }
      if (
        /*mounted*/
        ctx2[7]
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
      if (current) return;
      transition_in(if_block0);
      current = true;
    },
    o(local) {
      transition_out(if_block0);
      current = false;
    },
    d(detaching) {
      if (detaching) {
        detach(t);
        detach(if_block1_anchor);
      }
      if_blocks[current_block_type_index].d(detaching);
      if (if_block1) if_block1.d(detaching);
    }
  };
}
function instance($$self, $$props, $$invalidate) {
  let { stores } = $$props;
  let { page } = $$props;
  let { constructors } = $$props;
  let { components = [] } = $$props;
  let { form } = $$props;
  let { data_0 = null } = $$props;
  let { data_1 = null } = $$props;
  let { data_2 = null } = $$props;
  let { data_3 = null } = $$props;
  afterUpdate(stores.page.notify);
  let mounted = false;
  let navigated = false;
  let title = null;
  onMount(() => {
    const unsubscribe = stores.page.subscribe(() => {
      if (mounted) {
        $$invalidate(8, navigated = true);
        tick().then(() => {
          $$invalidate(9, title = document.title || "untitled page");
        });
      }
    });
    $$invalidate(7, mounted = true);
    return unsubscribe;
  });
  function switch_instance_binding($$value) {
    binding_callbacks[$$value ? "unshift" : "push"](() => {
      components[3] = $$value;
      $$invalidate(0, components);
    });
  }
  function switch_instance_binding_1($$value) {
    binding_callbacks[$$value ? "unshift" : "push"](() => {
      components[2] = $$value;
      $$invalidate(0, components);
    });
  }
  function switch_instance_binding_2($$value) {
    binding_callbacks[$$value ? "unshift" : "push"](() => {
      components[2] = $$value;
      $$invalidate(0, components);
    });
  }
  function switch_instance_binding_3($$value) {
    binding_callbacks[$$value ? "unshift" : "push"](() => {
      components[1] = $$value;
      $$invalidate(0, components);
    });
  }
  function switch_instance_binding_4($$value) {
    binding_callbacks[$$value ? "unshift" : "push"](() => {
      components[1] = $$value;
      $$invalidate(0, components);
    });
  }
  function switch_instance_binding_5($$value) {
    binding_callbacks[$$value ? "unshift" : "push"](() => {
      components[0] = $$value;
      $$invalidate(0, components);
    });
  }
  function switch_instance_binding_6($$value) {
    binding_callbacks[$$value ? "unshift" : "push"](() => {
      components[0] = $$value;
      $$invalidate(0, components);
    });
  }
  $$self.$$set = ($$props2) => {
    if ("stores" in $$props2) $$invalidate(10, stores = $$props2.stores);
    if ("page" in $$props2) $$invalidate(11, page = $$props2.page);
    if ("constructors" in $$props2) $$invalidate(1, constructors = $$props2.constructors);
    if ("components" in $$props2) $$invalidate(0, components = $$props2.components);
    if ("form" in $$props2) $$invalidate(2, form = $$props2.form);
    if ("data_0" in $$props2) $$invalidate(3, data_0 = $$props2.data_0);
    if ("data_1" in $$props2) $$invalidate(4, data_1 = $$props2.data_1);
    if ("data_2" in $$props2) $$invalidate(5, data_2 = $$props2.data_2);
    if ("data_3" in $$props2) $$invalidate(6, data_3 = $$props2.data_3);
  };
  $$self.$$.update = () => {
    if ($$self.$$.dirty & /*stores, page*/
    3072) {
      stores.page.set(page);
    }
  };
  return [
    components,
    constructors,
    form,
    data_0,
    data_1,
    data_2,
    data_3,
    mounted,
    navigated,
    title,
    stores,
    page,
    switch_instance_binding,
    switch_instance_binding_1,
    switch_instance_binding_2,
    switch_instance_binding_3,
    switch_instance_binding_4,
    switch_instance_binding_5,
    switch_instance_binding_6
  ];
}
class Root extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance, create_fragment, safe_not_equal, {
      stores: 10,
      page: 11,
      constructors: 1,
      components: 0,
      form: 2,
      data_0: 3,
      data_1: 4,
      data_2: 5,
      data_3: 6
    });
  }
}
const nodes = [
  () => __vitePreload(() => import("../nodes/0.qtZVnYTY.js"), true ? __vite__mapDeps([0,1,2]) : void 0, import.meta.url),
  () => __vitePreload(() => import("../nodes/1.B7zMeAcf.js"), true ? __vite__mapDeps([3,1,2,4,5,6]) : void 0, import.meta.url),
  () => __vitePreload(() => import("../nodes/2.Be2q3Msa.js"), true ? __vite__mapDeps([7,1,2,8,4,5,6,9,10,11]) : void 0, import.meta.url),
  () => __vitePreload(() => import("../nodes/3.B9KcmJVe.js"), true ? __vite__mapDeps([12,1,2,13]) : void 0, import.meta.url),
  () => __vitePreload(() => import("../nodes/4.OtML7M6u.js"), true ? __vite__mapDeps([14,1,2,8,4,5,6,9]) : void 0, import.meta.url),
  () => __vitePreload(() => import("../nodes/5.DJpSWQb0.js"), true ? __vite__mapDeps([15,1,2]) : void 0, import.meta.url),
  () => __vitePreload(() => import("../nodes/6.C1wDy7l0.js"), true ? __vite__mapDeps([16,1,2,10,11,6,17,18]) : void 0, import.meta.url),
  () => __vitePreload(() => import("../nodes/7.BJEQCr9k.js"), true ? __vite__mapDeps([19,1,2]) : void 0, import.meta.url),
  () => __vitePreload(() => import("../nodes/8.BR6t0zWc.js"), true ? __vite__mapDeps([20,1,2]) : void 0, import.meta.url),
  () => __vitePreload(() => import("../nodes/9.G5ghvx3L.js"), true ? __vite__mapDeps([21,1,2]) : void 0, import.meta.url),
  () => __vitePreload(() => import("../nodes/10.C23SJQsi.js"), true ? __vite__mapDeps([22,1,2]) : void 0, import.meta.url),
  () => __vitePreload(() => import("../nodes/11.BwdkYfw6.js"), true ? __vite__mapDeps([23,1,2]) : void 0, import.meta.url),
  () => __vitePreload(() => import("../nodes/12.B65CqOIc.js"), true ? __vite__mapDeps([24,1,2]) : void 0, import.meta.url),
  () => __vitePreload(() => import("../nodes/13.N9p0AeHA.js"), true ? __vite__mapDeps([25,1,2]) : void 0, import.meta.url),
  () => __vitePreload(() => import("../nodes/14.0gr4CXJc.js"), true ? __vite__mapDeps([26,1,2,27,6,28]) : void 0, import.meta.url),
  () => __vitePreload(() => import("../nodes/15.tddCCTtO.js"), true ? __vite__mapDeps([29,1,2]) : void 0, import.meta.url),
  () => __vitePreload(() => import("../nodes/16.CQsjl0ZL.js"), true ? __vite__mapDeps([30,1,2]) : void 0, import.meta.url),
  () => __vitePreload(() => import("../nodes/17.C6ux6udd.js"), true ? __vite__mapDeps([31,1,2]) : void 0, import.meta.url),
  () => __vitePreload(() => import("../nodes/18.DR6PJr0e.js"), true ? __vite__mapDeps([32,1,2,28,10,6]) : void 0, import.meta.url),
  () => __vitePreload(() => import("../nodes/19.C1gzig0d.js"), true ? __vite__mapDeps([33,1,2]) : void 0, import.meta.url),
  () => __vitePreload(() => import("../nodes/20.BYCmJjns.js"), true ? __vite__mapDeps([34,1,2]) : void 0, import.meta.url),
  () => __vitePreload(() => import("../nodes/21.CjtscgHT.js"), true ? __vite__mapDeps([35,1,2]) : void 0, import.meta.url)
];
const server_loads = [];
const dictionary = {
  "/(site)": [-7, [2]],
  "/(site)/(articles)/adding-devtools-to-vite-plugins": [-8, [2, 3]],
  "/(site)/(articles)/assertions-in-javascript": [-9, [2, 3]],
  "/(site)/(articles)/avoiding-the-coming-ai-provider-lock-in": [-10, [2, 3]],
  "/(experiments)/blurhash": [4],
  "/(site)/(articles)/branching-in-opencode-with-legit": [-11, [2, 3]],
  "/(site)/(articles)/building-an-i18n-library-for-the-modern-web": [-12, [2, 3]],
  "/(site)/(articles)/declarative-exception-handling": [-13, [2, 3]],
  "/(site)/(articles)/dts-buddy-fixes-type-declarations": [-14, [2, 3]],
  "/(experiments)/flaci-to-godel": [5],
  "/(site)/(articles)/fluent-inputs": [-15, [2, 3]],
  "/(site)/(articles)/melt-ui-neat-pattern": [-16, [2, 3]],
  "/(site)/(articles)/mock-data-with-zocker": [-17, [2, 3]],
  "/(site)/(articles)/reliably-avoiding-theme-flashes": [-18, [2, 3]],
  "/(site)/(articles)/tailwind-ui": [-19, [2, 3]],
  "/(site)/(articles)/the-better-way-to-load-data": [-20, [2, 3]],
  "/(site)/(articles)/the-poor-mans-scheduled-post": [-21, [2, 3]],
  "/(site)/(articles)/zod-driven-development": [-22, [2, 3]]
};
const hooks = {
  handleError: ({ error }) => {
    console.error(error);
  },
  reroute: () => {
  }
};
export {
  dictionary,
  hooks,
  matchers,
  nodes,
  Root as root,
  server_loads
};
