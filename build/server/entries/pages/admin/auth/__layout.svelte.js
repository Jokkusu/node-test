import { c as create_ssr_component } from "../../../../chunks/index-bdac9f6e.js";
var __layout_svelte_svelte_type_style_lang = "";
const css = {
  code: ".left.svelte-1m81i8r{background-color:var(--light-gray);min-height:100vh;width:40%;padding:40px 50px}.right.svelte-1m81i8r{background-color:var(--yellow);min-height:100vh;width:60%;padding:40px 50px}@media(max-width: 600px){.left.svelte-1m81i8r{width:100%}.right.svelte-1m81i8r{display:none}}",
  map: null
};
const _layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="${"flex-row center"}"><div class="${"left svelte-1m81i8r"}">${``}
		${slots.default ? slots.default({}) : ``}</div>
	<div class="${"right svelte-1m81i8r"}"></div>
</div>`;
});
export { _layout as default };
