import { l as listen, d as bubble, p as prevent_default, f as stop_propagation, c as create_ssr_component, h as compute_rest_props, i as get_current_component, j as spread, n as escape_object, b as add_attribute, g as getContext, v as validate_component, m as missing_component, s as setContext, o as onDestroy, q as globals, k as escape_attribute_value, e as escape } from "./index-bdac9f6e.js";
import "@material/dom";
function classMap(classObj) {
  return Object.entries(classObj).filter(([name, value]) => name !== "" && value).map(([name]) => name).join(" ");
}
function exclude(obj, keys) {
  let names = Object.getOwnPropertyNames(obj);
  const newObj = {};
  for (let i = 0; i < names.length; i++) {
    const name = names[i];
    const cashIndex = name.indexOf("$");
    if (cashIndex !== -1 && keys.indexOf(name.substring(0, cashIndex + 1)) !== -1) {
      continue;
    }
    if (keys.indexOf(name) !== -1) {
      continue;
    }
    newObj[name] = obj[name];
  }
  return newObj;
}
const oldModifierRegex = /^[a-z]+(?::(?:preventDefault|stopPropagation|passive|nonpassive|capture|once|self))+$/;
const newModifierRegex = /^[^$]+(?:\$(?:preventDefault|stopPropagation|passive|nonpassive|capture|once|self))+$/;
function forwardEventsBuilder(component) {
  let $on;
  let events = [];
  component.$on = (fullEventType, callback) => {
    let eventType = fullEventType;
    let destructor = () => {
    };
    if ($on) {
      destructor = $on(eventType, callback);
    } else {
      events.push([eventType, callback]);
    }
    const oldModifierMatch = eventType.match(oldModifierRegex);
    if (oldModifierMatch && console) {
      console.warn('Event modifiers in SMUI now use "$" instead of ":", so that all events can be bound with modifiers. Please update your event binding: ', eventType);
    }
    return () => {
      destructor();
    };
  };
  function forward(e) {
    bubble(component, e);
  }
  return (node) => {
    const destructors = [];
    const forwardDestructors = {};
    $on = (fullEventType, callback) => {
      let eventType = fullEventType;
      let handler = callback;
      let options = false;
      const oldModifierMatch = eventType.match(oldModifierRegex);
      const newModifierMatch = eventType.match(newModifierRegex);
      const modifierMatch = oldModifierMatch || newModifierMatch;
      if (eventType.match(/^SMUI:\w+:/)) {
        const newEventTypeParts = eventType.split(":");
        let newEventType = "";
        for (let i = 0; i < newEventTypeParts.length; i++) {
          newEventType += i === newEventTypeParts.length - 1 ? ":" + newEventTypeParts[i] : newEventTypeParts[i].split("-").map((value) => value.slice(0, 1).toUpperCase() + value.slice(1)).join("");
        }
        console.warn(`The event ${eventType.split("$")[0]} has been renamed to ${newEventType.split("$")[0]}.`);
        eventType = newEventType;
      }
      if (modifierMatch) {
        const parts = eventType.split(oldModifierMatch ? ":" : "$");
        eventType = parts[0];
        const eventOptions = Object.fromEntries(parts.slice(1).map((mod) => [mod, true]));
        if (eventOptions.passive) {
          options = options || {};
          options.passive = true;
        }
        if (eventOptions.nonpassive) {
          options = options || {};
          options.passive = false;
        }
        if (eventOptions.capture) {
          options = options || {};
          options.capture = true;
        }
        if (eventOptions.once) {
          options = options || {};
          options.once = true;
        }
        if (eventOptions.preventDefault) {
          handler = prevent_default(handler);
        }
        if (eventOptions.stopPropagation) {
          handler = stop_propagation(handler);
        }
      }
      const off = listen(node, eventType, handler, options);
      const destructor = () => {
        off();
        const idx = destructors.indexOf(destructor);
        if (idx > -1) {
          destructors.splice(idx, 1);
        }
      };
      destructors.push(destructor);
      if (!(eventType in forwardDestructors)) {
        forwardDestructors[eventType] = listen(node, eventType, forward);
      }
      return destructor;
    };
    for (let i = 0; i < events.length; i++) {
      $on(events[i][0], events[i][1]);
    }
    return {
      destroy: () => {
        for (let i = 0; i < destructors.length; i++) {
          destructors[i]();
        }
        for (let entry of Object.entries(forwardDestructors)) {
          entry[1]();
        }
      }
    };
  };
}
function prefixFilter(obj, prefix) {
  let names = Object.getOwnPropertyNames(obj);
  const newObj = {};
  for (let i = 0; i < names.length; i++) {
    const name = names[i];
    if (name.substring(0, prefix.length) === prefix) {
      newObj[name.substring(prefix.length)] = obj[name];
    }
  }
  return newObj;
}
const Span = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["use", "getElement"]);
  let { use = [] } = $$props;
  forwardEventsBuilder(get_current_component());
  let element;
  function getElement() {
    return element;
  }
  if ($$props.use === void 0 && $$bindings.use && use !== void 0)
    $$bindings.use(use);
  if ($$props.getElement === void 0 && $$bindings.getElement && getElement !== void 0)
    $$bindings.getElement(getElement);
  return `<span${spread([escape_object($$restProps)])}${add_attribute("this", element, 0)}>${slots.default ? slots.default({}) : ``}</span>`;
});
const CommonLabel = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["use", "class", "component", "getElement"]);
  const forwardEvents = forwardEventsBuilder(get_current_component());
  let { use = [] } = $$props;
  let { class: className = "" } = $$props;
  let element;
  let { component = Span } = $$props;
  const context = getContext("SMUI:label:context");
  const tabindex = getContext("SMUI:label:tabindex");
  function getElement() {
    return element.getElement();
  }
  if ($$props.use === void 0 && $$bindings.use && use !== void 0)
    $$bindings.use(use);
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.component === void 0 && $$bindings.component && component !== void 0)
    $$bindings.component(component);
  if ($$props.getElement === void 0 && $$bindings.getElement && getElement !== void 0)
    $$bindings.getElement(getElement);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `${validate_component(component || missing_component, "svelte:component").$$render($$result, Object.assign({ use: [forwardEvents, ...use] }, {
      class: classMap({
        [className]: true,
        "mdc-button__label": context === "button",
        "mdc-fab__label": context === "fab",
        "mdc-tab__text-label": context === "tab",
        "mdc-image-list__label": context === "image-list",
        "mdc-snackbar__label": context === "snackbar",
        "mdc-banner__text": context === "banner",
        "mdc-segmented-button__label": context === "segmented-button",
        "mdc-data-table__pagination-rows-per-page-label": context === "data-table:pagination",
        "mdc-data-table__header-cell-label": context === "data-table:sortable-header-cell"
      })
    }, context === "snackbar" ? { "aria-atomic": "false" } : {}, { tabindex }, $$restProps, { this: element }), {
      this: ($$value) => {
        element = $$value;
        $$settled = false;
      }
    }, {
      default: () => `${slots.default ? slots.default({}) : ``}`
    })}`;
  } while (!$$settled);
  return $$rendered;
});
const Label = CommonLabel;
const Div$1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["use", "getElement"]);
  let { use = [] } = $$props;
  forwardEventsBuilder(get_current_component());
  let element;
  function getElement() {
    return element;
  }
  if ($$props.use === void 0 && $$bindings.use && use !== void 0)
    $$bindings.use(use);
  if ($$props.getElement === void 0 && $$bindings.getElement && getElement !== void 0)
    $$bindings.getElement(getElement);
  return `<div${spread([escape_object($$restProps)])}${add_attribute("this", element, 0)}>${slots.default ? slots.default({}) : ``}
</div>`;
});
const { Object: Object_1 } = globals;
const internals = {
  component: Div$1,
  class: "",
  classMap: {},
  contexts: {},
  props: {}
};
const ClassAdder = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["use", "class", "component", "getElement"]);
  let { use = [] } = $$props;
  let { class: className = "" } = $$props;
  let element;
  const smuiClass = internals.class;
  const smuiClassMap = {};
  const smuiClassUnsubscribes = [];
  const contexts = internals.contexts;
  const props = internals.props;
  let { component = internals.component } = $$props;
  Object.entries(internals.classMap).forEach(([name, context]) => {
    const store = getContext(context);
    if (store && "subscribe" in store) {
      smuiClassUnsubscribes.push(store.subscribe((value) => {
        smuiClassMap[name] = value;
      }));
    }
  });
  const forwardEvents = forwardEventsBuilder(get_current_component());
  for (let context in contexts) {
    if (contexts.hasOwnProperty(context)) {
      setContext(context, contexts[context]);
    }
  }
  onDestroy(() => {
    for (const unsubscribe of smuiClassUnsubscribes) {
      unsubscribe();
    }
  });
  function getElement() {
    return element.getElement();
  }
  if ($$props.use === void 0 && $$bindings.use && use !== void 0)
    $$bindings.use(use);
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.component === void 0 && $$bindings.component && component !== void 0)
    $$bindings.component(component);
  if ($$props.getElement === void 0 && $$bindings.getElement && getElement !== void 0)
    $$bindings.getElement(getElement);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `${validate_component(component || missing_component, "svelte:component").$$render($$result, Object_1.assign({ use: [forwardEvents, ...use] }, {
      class: classMap({
        [className]: true,
        [smuiClass]: true,
        ...smuiClassMap
      })
    }, props, $$restProps, { this: element }), {
      this: ($$value) => {
        element = $$value;
        $$settled = false;
      }
    }, {
      default: () => `${slots.default ? slots.default({}) : ``}`
    })}`;
  } while (!$$settled);
  return $$rendered;
});
const defaults = Object.assign({}, internals);
function classAdderBuilder(props) {
  return new Proxy(ClassAdder, {
    construct: function(target, args) {
      Object.assign(internals, defaults, props);
      return new target(...args);
    },
    get: function(target, prop) {
      Object.assign(internals, defaults, props);
      return target[prop];
    }
  });
}
const H2$1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["use", "getElement"]);
  let { use = [] } = $$props;
  forwardEventsBuilder(get_current_component());
  let element;
  function getElement() {
    return element;
  }
  if ($$props.use === void 0 && $$bindings.use && use !== void 0)
    $$bindings.use(use);
  if ($$props.getElement === void 0 && $$bindings.getElement && getElement !== void 0)
    $$bindings.getElement(getElement);
  return `<h2${spread([escape_object($$restProps)])}${add_attribute("this", element, 0)}>${slots.default ? slots.default({}) : ``}
</h2>`;
});
const Div = Div$1;
const H2 = H2$1;
let waiting = Promise.resolve();
const Snackbar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, [
    "use",
    "class",
    "variant",
    "leading",
    "timeoutMs",
    "closeOnEscape",
    "labelText",
    "actionButtonText",
    "surface$class",
    "surface$use",
    "open",
    "forceOpen",
    "close",
    "isOpen",
    "getLabelElement",
    "getActionButtonElement",
    "getElement"
  ]);
  forwardEventsBuilder(get_current_component());
  let uninitializedValue = () => {
  };
  let { use = [] } = $$props;
  let { class: className = "" } = $$props;
  let { variant = "" } = $$props;
  let { leading = false } = $$props;
  let { timeoutMs = 5e3 } = $$props;
  let { closeOnEscape = true } = $$props;
  let { labelText = uninitializedValue } = $$props;
  let { actionButtonText = uninitializedValue } = $$props;
  let { surface$class = "" } = $$props;
  let { surface$use = [] } = $$props;
  let element;
  let instance;
  let internalClasses = {};
  let closePromise = new Promise((resolve) => resolve);
  setContext("SMUI:label:context", "snackbar");
  function open() {
    waiting = waiting.then(() => {
      instance.open();
      return closePromise;
    });
  }
  function forceOpen() {
    return instance.open();
  }
  function close(reason) {
    return instance.close(reason);
  }
  function isOpen() {
    return instance.isOpen();
  }
  function getLabelElement() {
    var _a;
    return (_a = getElement().querySelector(".mdc-snackbar__label")) !== null && _a !== void 0 ? _a : document.createElement("div");
  }
  function getActionButtonElement() {
    var _a;
    return (_a = getElement().querySelector(".mdc-snackbar__action")) !== null && _a !== void 0 ? _a : document.createElement("button");
  }
  function getElement() {
    return element;
  }
  if ($$props.use === void 0 && $$bindings.use && use !== void 0)
    $$bindings.use(use);
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.variant === void 0 && $$bindings.variant && variant !== void 0)
    $$bindings.variant(variant);
  if ($$props.leading === void 0 && $$bindings.leading && leading !== void 0)
    $$bindings.leading(leading);
  if ($$props.timeoutMs === void 0 && $$bindings.timeoutMs && timeoutMs !== void 0)
    $$bindings.timeoutMs(timeoutMs);
  if ($$props.closeOnEscape === void 0 && $$bindings.closeOnEscape && closeOnEscape !== void 0)
    $$bindings.closeOnEscape(closeOnEscape);
  if ($$props.labelText === void 0 && $$bindings.labelText && labelText !== void 0)
    $$bindings.labelText(labelText);
  if ($$props.actionButtonText === void 0 && $$bindings.actionButtonText && actionButtonText !== void 0)
    $$bindings.actionButtonText(actionButtonText);
  if ($$props.surface$class === void 0 && $$bindings.surface$class && surface$class !== void 0)
    $$bindings.surface$class(surface$class);
  if ($$props.surface$use === void 0 && $$bindings.surface$use && surface$use !== void 0)
    $$bindings.surface$use(surface$use);
  if ($$props.open === void 0 && $$bindings.open && open !== void 0)
    $$bindings.open(open);
  if ($$props.forceOpen === void 0 && $$bindings.forceOpen && forceOpen !== void 0)
    $$bindings.forceOpen(forceOpen);
  if ($$props.close === void 0 && $$bindings.close && close !== void 0)
    $$bindings.close(close);
  if ($$props.isOpen === void 0 && $$bindings.isOpen && isOpen !== void 0)
    $$bindings.isOpen(isOpen);
  if ($$props.getLabelElement === void 0 && $$bindings.getLabelElement && getLabelElement !== void 0)
    $$bindings.getLabelElement(getLabelElement);
  if ($$props.getActionButtonElement === void 0 && $$bindings.getActionButtonElement && getActionButtonElement !== void 0)
    $$bindings.getActionButtonElement(getActionButtonElement);
  if ($$props.getElement === void 0 && $$bindings.getElement && getElement !== void 0)
    $$bindings.getElement(getElement);
  return `<aside${spread([
    {
      class: escape_attribute_value(classMap({
        [className]: true,
        "mdc-snackbar": true,
        "mdc-snackbar--stacked": variant === "stacked",
        "mdc-snackbar--leading": leading,
        ...internalClasses
      }))
    },
    escape_object(exclude($$restProps, ["surface$"]))
  ])}${add_attribute("this", element, 0)}><div${spread([
    {
      class: escape_attribute_value(classMap({
        [surface$class]: true,
        "mdc-snackbar__surface": true
      }))
    },
    { role: "status" },
    { "aria-relevant": "additions" },
    escape_object(prefixFilter($$restProps, "surface$"))
  ])}>${slots.default ? slots.default({}) : ``}</div>
</aside>`;
});
classAdderBuilder({
  class: "mdc-snackbar__actions",
  props: { "aria-atomic": "true" },
  contexts: {
    "SMUI:button:context": "snackbar:actions",
    "SMUI:icon-button:context": "snackbar:actions",
    "SMUI:label:context": void 0
  },
  component: Div
});
function secondsToMs(seconds) {
  return seconds * 1e3;
}
const DISMISS_SECONDS = 8;
const Notification = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { message = "" } = $$props;
  let displayedMessage = "";
  const DISMISS_MS = secondsToMs(DISMISS_SECONDS);
  let messageSnackbar;
  if ($$props.message === void 0 && $$bindings.message && message !== void 0)
    $$bindings.message(message);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    {
      {
        if (message != displayedMessage && messageSnackbar != void 0) {
          displayedMessage = message;
          messageSnackbar.open();
        }
      }
    }
    $$rendered = `${validate_component(Snackbar, "Snackbar").$$render($$result, {
      timeoutMs: DISMISS_MS,
      this: messageSnackbar
    }, {
      this: ($$value) => {
        messageSnackbar = $$value;
        $$settled = false;
      }
    }, {
      default: () => `${validate_component(Label, "Label").$$render($$result, {}, {}, {
        default: () => `${escape(displayedMessage)}`
      })}`
    })}`;
  } while (!$$settled);
  return $$rendered;
});
export { Div as D, H2 as H, Label as L, Notification as N, classAdderBuilder as a, classMap as c, exclude as e, forwardEventsBuilder as f, prefixFilter as p };
