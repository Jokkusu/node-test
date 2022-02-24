import { c as create_ssr_component, e as escape, y as null_to_empty, b as add_attribute, v as validate_component } from "./index-bdac9f6e.js";
import { N as Notification } from "./Notification-5c4b8c21.js";
class LoginModel {
  constructor(document, password) {
    this.document = document;
    this.password = password;
  }
  set Document(document) {
    this.document = document;
  }
  set Password(password) {
    this.password = password;
  }
  get Document() {
    return this.document;
  }
  get Password() {
    return this.password;
  }
}
var Login_svelte_svelte_type_style_lang = "";
const css = {
  code: "form.svelte-1wtmifl.svelte-1wtmifl{margin-top:60px}h1.svelte-1wtmifl.svelte-1wtmifl{color:black}.password-container.svelte-1wtmifl.svelte-1wtmifl{position:relative}.password-container.svelte-1wtmifl .underlined-input.svelte-1wtmifl{padding-right:32px}.password-container.svelte-1wtmifl .material-icons.svelte-1wtmifl{margin:0;position:absolute;right:8px;color:gray;font-size:18px}",
  map: null
};
const DOCUMENT_MIN_LENGHT = 6;
const PASSWORD_MIN_LENGHT = 8;
const Login = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let loginModel = new LoginModel(void 0, "");
  let validLoginForm = false;
  let requestResponseMessage = "";
  $$result.css.add(css);
  {
    {
      validLoginForm = loginModel.document > DOCUMENT_MIN_LENGHT && loginModel.password.length > PASSWORD_MIN_LENGHT;
    }
  }
  return `<div class="${"login-container"}"><h1 class="${escape(null_to_empty($$props.class)) + " svelte-1wtmifl"}">Ingresar</h1>
	<div class="${"line-decorator bg-yellow"}"></div>
	<form class="${"flex-column center svelte-1wtmifl"}"><div class="${"form-group"}"><p>C\xE9dula</p>
			<input class="${"underlined-input"}" type="${"number"}"${add_attribute("value", loginModel.document, 0)}></div>
		<div class="${"form-group"}"><p>Contrase\xF1a</p>
			<div class="${"password-container svelte-1wtmifl"}"><input id="${"passwordInputLogin"}" class="${"underlined-input svelte-1wtmifl"}" type="${"password"}"${add_attribute("value", loginModel.password, 0)}>
				<button id="${"visibilityIcon"}" class="${"material-icons svelte-1wtmifl"}">visibility</button></div></div>
		<button ${!validLoginForm ? "disabled" : ""} class="${"button bg-yellow"}" type="${"submit"}">Iniciar Sesi\xF3n</button></form></div>

${validate_component(Notification, "Notification").$$render($$result, { message: requestResponseMessage }, {}, {})}`;
});
export { Login as L };
