import { c as create_ssr_component, v as validate_component } from "../../../../chunks/index-bdac9f6e.js";
import { L as Login } from "../../../../chunks/Login-fbfae83a.js";
import "../../../../chunks/Notification-5c4b8c21.js";
import "@material/dom";
var index_svelte_svelte_type_style_lang = "";
const css = {
  code: ".adminLoginTitle{margin-top:90px}",
  map: null
};
const Auth = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${$$result.head += `${$$result.title = `<title>Iniciar Sesi\xF3n</title>`, ""}`, ""}

${validate_component(Login, "Login").$$render($$result, { class: "adminLoginTitle" }, {}, {})}`;
});
export { Auth as default };
