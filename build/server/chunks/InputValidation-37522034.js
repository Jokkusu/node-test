import { c as create_ssr_component, h as compute_rest_props, i as get_current_component, a as subscribe, g as getContext, s as setContext, o as onDestroy, t as set_store_value, j as spread, k as escape_attribute_value, n as escape_object, b as add_attribute } from "./index-bdac9f6e.js";
import "@material/dialog";
import "@material/dom";
import { w as writable } from "./Actions-ce359a75.js";
import { f as forwardEventsBuilder, c as classMap, e as exclude, p as prefixFilter } from "./Notification-5c4b8c21.js";
const Dialog = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, [
    "use",
    "class",
    "open",
    "selection",
    "escapeKeyAction",
    "scrimClickAction",
    "autoStackButtons",
    "fullscreen",
    "container$class",
    "surface$class",
    "isOpen",
    "setOpen",
    "layout",
    "getElement"
  ]);
  let $aboveFullscreenShown, $$unsubscribe_aboveFullscreenShown;
  let $actionButtonsReversed, $$unsubscribe_actionButtonsReversed;
  var _a;
  forwardEventsBuilder(get_current_component());
  let { use = [] } = $$props;
  let { class: className = "" } = $$props;
  let { open = false } = $$props;
  let { selection = false } = $$props;
  let { escapeKeyAction = "close" } = $$props;
  let { scrimClickAction = "close" } = $$props;
  let { autoStackButtons = true } = $$props;
  let { fullscreen = false } = $$props;
  let { container$class = "" } = $$props;
  let { surface$class = "" } = $$props;
  let element;
  let instance;
  let internalClasses = {};
  let actionButtonsReversed = writable(false);
  $$unsubscribe_actionButtonsReversed = subscribe(actionButtonsReversed, (value) => $actionButtonsReversed = value);
  let aboveFullscreen = getContext("SMUI:dialog:aboveFullscreen");
  let aboveFullscreenShown = (_a = getContext("SMUI:dialog:aboveFullscreenShown")) !== null && _a !== void 0 ? _a : writable(false);
  $$unsubscribe_aboveFullscreenShown = subscribe(aboveFullscreenShown, (value) => $aboveFullscreenShown = value);
  let addLayoutListener = getContext("SMUI:addLayoutListener");
  let removeLayoutListener;
  let addLayoutListenerFn = (listener) => {
    return () => {
    };
  };
  setContext("SMUI:dialog:actions:reversed", actionButtonsReversed);
  setContext("SMUI:addLayoutListener", addLayoutListenerFn);
  setContext("SMUI:dialog:selection", selection);
  setContext("SMUI:dialog:aboveFullscreen", aboveFullscreen || fullscreen);
  setContext("SMUI:dialog:aboveFullscreenShown", aboveFullscreenShown);
  if (addLayoutListener) {
    removeLayoutListener = addLayoutListener(layout);
  }
  let previousAboveFullscreenShown = $aboveFullscreenShown;
  onDestroy(() => {
    if (removeLayoutListener) {
      removeLayoutListener();
    }
  });
  function isOpen() {
    return open;
  }
  function setOpen(value) {
    open = value;
  }
  function layout() {
    return instance.layout();
  }
  function getElement() {
    return element;
  }
  if ($$props.use === void 0 && $$bindings.use && use !== void 0)
    $$bindings.use(use);
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.open === void 0 && $$bindings.open && open !== void 0)
    $$bindings.open(open);
  if ($$props.selection === void 0 && $$bindings.selection && selection !== void 0)
    $$bindings.selection(selection);
  if ($$props.escapeKeyAction === void 0 && $$bindings.escapeKeyAction && escapeKeyAction !== void 0)
    $$bindings.escapeKeyAction(escapeKeyAction);
  if ($$props.scrimClickAction === void 0 && $$bindings.scrimClickAction && scrimClickAction !== void 0)
    $$bindings.scrimClickAction(scrimClickAction);
  if ($$props.autoStackButtons === void 0 && $$bindings.autoStackButtons && autoStackButtons !== void 0)
    $$bindings.autoStackButtons(autoStackButtons);
  if ($$props.fullscreen === void 0 && $$bindings.fullscreen && fullscreen !== void 0)
    $$bindings.fullscreen(fullscreen);
  if ($$props.container$class === void 0 && $$bindings.container$class && container$class !== void 0)
    $$bindings.container$class(container$class);
  if ($$props.surface$class === void 0 && $$bindings.surface$class && surface$class !== void 0)
    $$bindings.surface$class(surface$class);
  if ($$props.isOpen === void 0 && $$bindings.isOpen && isOpen !== void 0)
    $$bindings.isOpen(isOpen);
  if ($$props.setOpen === void 0 && $$bindings.setOpen && setOpen !== void 0)
    $$bindings.setOpen(setOpen);
  if ($$props.layout === void 0 && $$bindings.layout && layout !== void 0)
    $$bindings.layout(layout);
  if ($$props.getElement === void 0 && $$bindings.getElement && getElement !== void 0)
    $$bindings.getElement(getElement);
  {
    if (!autoStackButtons) {
      set_store_value(actionButtonsReversed, $actionButtonsReversed = true, $actionButtonsReversed);
    }
  }
  {
    if (fullscreen && instance && previousAboveFullscreenShown !== $aboveFullscreenShown) {
      previousAboveFullscreenShown = $aboveFullscreenShown;
      if ($aboveFullscreenShown) {
        instance.showSurfaceScrim();
      } else {
        instance.hideSurfaceScrim();
      }
    }
  }
  $$unsubscribe_aboveFullscreenShown();
  $$unsubscribe_actionButtonsReversed();
  return `


<div${spread([
    {
      class: escape_attribute_value(classMap({
        [className]: true,
        "mdc-dialog": true,
        "mdc-dialog--stacked": !autoStackButtons,
        "mdc-dialog--fullscreen": fullscreen,
        "smui-dialog--selection": selection,
        ...internalClasses
      }))
    },
    { role: "alertdialog" },
    { "aria-modal": "true" },
    escape_object(exclude($$restProps, ["container$", "surface$"]))
  ])}${add_attribute("this", element, 0)}><div${spread([
    {
      class: escape_attribute_value(classMap({
        [container$class]: true,
        "mdc-dialog__container": true
      }))
    },
    escape_object(prefixFilter($$restProps, "container$"))
  ])}><div${spread([
    {
      class: escape_attribute_value(classMap({
        [surface$class]: true,
        "mdc-dialog__surface": true
      }))
    },
    { role: "alertdialog" },
    { "aria-modal": "true" },
    escape_object(prefixFilter($$restProps, "surface$"))
  ])}>${slots.default ? slots.default({}) : ``}
      ${fullscreen ? `<div class="${"mdc-dialog__surface-scrim"}"></div>` : ``}</div></div>
  <div class="${"mdc-dialog__scrim"}"></div></div>

${slots.over ? slots.over({}) : ``}`;
});
const environment = {
  API_URL: "http://localhost:9099",
  AUTH_TOKEN_NAME: "token",
  AUTH_TOKEN_EXPIRATION_IN_DAYS: 2
};
class CompanyModel {
  constructor(companyId, name, nit, email, companyState) {
    this.companyId = companyId;
    this.name = name;
    this.nit = nit;
    this.email = email;
    this.companyState = companyState;
  }
  set CompanyId(companyId) {
    this.companyId = companyId;
  }
  set Name(name) {
    this.name = name;
  }
  set NIT(nit) {
    this.nit = nit;
  }
  set Email(email) {
    this.email = email;
  }
  set CompanyState(companyState) {
    this.companyState = companyState;
  }
  get CompanyId() {
    return this.companyId;
  }
  get Name() {
    return this.name;
  }
  get NIT() {
    return this.nit;
  }
  get Email() {
    return this.email;
  }
  get CompanyState() {
    return this.companyState;
  }
}
function getCookie(cookieName) {
  let name = cookieName + "=";
  let ca = document.cookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}
async function getCompanies() {
  const getCompaniesEndpoint = "/admin/companies";
  const requestInit = {
    method: "GET",
    headers: {
      "Authorization": "Bearer " + getCookie(environment.AUTH_TOKEN_NAME),
      "Content-Type": "application/json"
    }
  };
  const res = await fetch(environment.API_URL + getCompaniesEndpoint, requestInit);
  const data = await res.json();
  let companiesArray = [];
  for (let key in data) {
    let company = data[key];
    companiesArray.push(new CompanyModel(company.companyId, company.name, company.nit, company.email, company.companyState));
  }
  return companiesArray;
}
function textValidation(text, minLength, maxLength) {
  return text && text.length >= minLength && text.length <= maxLength;
}
function numberValidation(number, minLenght, maxLength) {
  return number && number.toString().length >= minLenght && number.toString().length <= maxLength;
}
function emailValidation(email) {
  return email && !!email.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
}
function requiredValidation(value) {
  return value !== void 0 && value !== "" && value !== null;
}
export { Dialog as D, environment as a, getCookie as b, emailValidation as e, getCompanies as g, numberValidation as n, requiredValidation as r, textValidation as t };
