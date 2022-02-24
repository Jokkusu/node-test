import { c as create_ssr_component } from "../../../../chunks/index-bdac9f6e.js";
var passwordRecovery_svelte_svelte_type_style_lang = "";
const css = {
  code: "form.svelte-rz4ueh{margin-top:60px}h1.svelte-rz4ueh{margin-top:90px}",
  map: null
};
const Password_recovery = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${$$result.head += `${$$result.title = `<title>Recuperar Contrase\xF1a</title>`, ""}`, ""}

<a href="${"/admin/auth"}"><span class="${"material-icons"}">arrow_back </span></a>
<h1 class="${"svelte-rz4ueh"}">Recuperar Contrase\xF1a</h1>
<div class="${"line-decorator bg-yellow"}"></div>
<form class="${"flex-column center svelte-rz4ueh"}"><div class="${"form-group"}"><p>Documento</p>
		<input class="${"underlined-input"}" type="${"number"}"></div>
	<button class="${"button bg-yellow"}" type="${"submit"}">Recuperar</button>
</form>`;
});
export { Password_recovery as default };
