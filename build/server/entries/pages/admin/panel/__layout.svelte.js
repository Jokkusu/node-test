import { g as getContext, c as create_ssr_component, a as subscribe, b as add_attribute, e as escape, v as validate_component } from "../../../../chunks/index-bdac9f6e.js";
const getStores = () => {
  const stores = getContext("__svelte__");
  return {
    page: {
      subscribe: stores.page.subscribe
    },
    navigating: {
      subscribe: stores.navigating.subscribe
    },
    get preloading() {
      console.error("stores.preloading is deprecated; use stores.navigating instead");
      return {
        subscribe: stores.navigating.subscribe
      };
    },
    session: stores.session,
    updated: stores.updated
  };
};
const page = {
  subscribe(fn) {
    const store = getStores().page;
    return store.subscribe(fn);
  }
};
var NavLink_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".nav-item.svelte-v039kt p.svelte-v039kt{font-size:12px}.material-icons.svelte-v039kt.svelte-v039kt{color:var(--darker-gray);font-size:24px;transition:all 0.5s ease}a.svelte-v039kt.svelte-v039kt{text-decoration:none}.nav-button.svelte-v039kt.svelte-v039kt{background-color:var(--off-white);padding:10px;border-radius:5px;transition:all 0.5s ease;box-shadow:1px 1px 3px rgba(0, 0, 0, 0.25);margin-bottom:5px}.nav-button.svelte-v039kt.svelte-v039kt:hover{background-color:var(--yellow)}.nav-button.svelte-v039kt:hover .material-icons.svelte-v039kt{color:white}.active.svelte-v039kt.svelte-v039kt{background-color:var(--yellow)}",
  map: null
};
const NavLink = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let { iconName = "" } = $$props;
  let { labelName = "" } = $$props;
  let { route = "" } = $$props;
  let isActive = false;
  if ($$props.iconName === void 0 && $$bindings.iconName && iconName !== void 0)
    $$bindings.iconName(iconName);
  if ($$props.labelName === void 0 && $$bindings.labelName && labelName !== void 0)
    $$bindings.labelName(labelName);
  if ($$props.route === void 0 && $$bindings.route && route !== void 0)
    $$bindings.route(route);
  $$result.css.add(css$1);
  isActive = $page.url.pathname.includes(route);
  $$unsubscribe_page();
  return `<div class="${"nav-item flex-column center svelte-v039kt"}"><a${add_attribute("href", route, 0)} class="${["nav-button flex-row center svelte-v039kt", isActive ? "active" : ""].join(" ").trim()}"><span class="${"material-icons svelte-v039kt"}">${escape(iconName)}</span></a>
	<p class="${"svelte-v039kt"}">${escape(labelName)}</p>
</div>`;
});
var __layout_svelte_svelte_type_style_lang = "";
const css = {
  code: ".logo.svelte-h1exa8{width:50px;position:absolute;top:30px;left:12px}.navbar.svelte-h1exa8{width:80px;height:100vh;padding:20px;gap:20px;background-color:var(--light-gray)}.content-container.svelte-h1exa8{height:100vh;max-height:100vh;width:100%;background-color:var(--light-gray);padding-top:20px;padding-bottom:20px}.content.svelte-h1exa8{background-color:white;height:100%;border-top-left-radius:5px;border-bottom-left-radius:5px;padding:40px 80px;overflow-x:hidden;overflow-y:auto}@media(max-width: 500px){.page.svelte-h1exa8{flex-direction:column}.logo.svelte-h1exa8{top:15px}.navbar.svelte-h1exa8{width:100%;height:80px;flex-direction:row;padding:10px}.content-container.svelte-h1exa8{padding-top:0;padding-bottom:0;padding-left:10px;padding-right:10px}.content.svelte-h1exa8{padding:20px 30px;border-bottom-left-radius:0;border-top-right-radius:5px}}",
  map: null
};
const _layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="${"flex-row center page svelte-h1exa8"}"><nav class="${"flex-column center justify-center navbar svelte-h1exa8"}"><img src="${"/lotti-logo.png"}" alt="${"Lotti Logo"}" class="${"logo svelte-h1exa8"}">
		${validate_component(NavLink, "NavLink").$$render($$result, {
    iconName: "ballot",
    labelName: "Lottis",
    route: "/admin/panel/lottis"
  }, {}, {})}
		${validate_component(NavLink, "NavLink").$$render($$result, {
    iconName: "business",
    labelName: "Empresas",
    route: "/admin/panel/companies"
  }, {}, {})}
		${validate_component(NavLink, "NavLink").$$render($$result, {
    iconName: "view_carousel",
    labelName: "Banners",
    route: "/admin/panel/banners"
  }, {}, {})}</nav>
	<div class="${"content-container svelte-h1exa8"}"><div class="${"content svelte-h1exa8"}">${slots.default ? slots.default({}) : ``}</div></div>
</div>`;
});
export { _layout as default };
