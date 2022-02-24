import { l as listen, d as bubble, p as prevent_default, f as stop_propagation, g as getContext, c as create_ssr_component, h as compute_rest_props, i as get_current_component, j as spread, k as escape_attribute_value, n as escape_object, b as add_attribute, s as setContext, o as onDestroy, v as validate_component, m as missing_component, q as globals, r as compute_slots, a as subscribe, t as set_store_value, e as escape, u as each } from "../../../../chunks/index-bdac9f6e.js";
import { events, ponyfill } from "@material/dom";
import { __extends, __assign, __values } from "tslib";
import { w as writable, C as Content } from "../../../../chunks/Actions-ce359a75.js";
import { L as Label, N as Notification } from "../../../../chunks/Notification-5c4b8c21.js";
import { r as requiredValidation, t as textValidation, n as numberValidation, e as emailValidation, D as Dialog, g as getCompanies } from "../../../../chunks/InputValidation-37522034.js";
import "@material/dialog";
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var MDCFoundation = function() {
  function MDCFoundation2(adapter) {
    if (adapter === void 0) {
      adapter = {};
    }
    this.adapter = adapter;
  }
  Object.defineProperty(MDCFoundation2, "cssClasses", {
    get: function() {
      return {};
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(MDCFoundation2, "strings", {
    get: function() {
      return {};
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(MDCFoundation2, "numbers", {
    get: function() {
      return {};
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(MDCFoundation2, "defaultAdapter", {
    get: function() {
      return {};
    },
    enumerable: false,
    configurable: true
  });
  MDCFoundation2.prototype.init = function() {
  };
  MDCFoundation2.prototype.destroy = function() {
  };
  return MDCFoundation2;
}();
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var cssClasses$1 = {
  BG_FOCUSED: "mdc-ripple-upgraded--background-focused",
  FG_ACTIVATION: "mdc-ripple-upgraded--foreground-activation",
  FG_DEACTIVATION: "mdc-ripple-upgraded--foreground-deactivation",
  ROOT: "mdc-ripple-upgraded",
  UNBOUNDED: "mdc-ripple-upgraded--unbounded"
};
var strings$1 = {
  VAR_FG_SCALE: "--mdc-ripple-fg-scale",
  VAR_FG_SIZE: "--mdc-ripple-fg-size",
  VAR_FG_TRANSLATE_END: "--mdc-ripple-fg-translate-end",
  VAR_FG_TRANSLATE_START: "--mdc-ripple-fg-translate-start",
  VAR_LEFT: "--mdc-ripple-left",
  VAR_TOP: "--mdc-ripple-top"
};
var numbers = {
  DEACTIVATION_TIMEOUT_MS: 225,
  FG_DEACTIVATION_MS: 150,
  INITIAL_ORIGIN_SCALE: 0.6,
  PADDING: 10,
  TAP_DELAY_MS: 300
};
var supportsCssVariables_;
function supportsCssVariables(windowObj, forceRefresh) {
  if (forceRefresh === void 0) {
    forceRefresh = false;
  }
  var CSS = windowObj.CSS;
  var supportsCssVars = supportsCssVariables_;
  if (typeof supportsCssVariables_ === "boolean" && !forceRefresh) {
    return supportsCssVariables_;
  }
  var supportsFunctionPresent = CSS && typeof CSS.supports === "function";
  if (!supportsFunctionPresent) {
    return false;
  }
  var explicitlySupportsCssVars = CSS.supports("--css-vars", "yes");
  var weAreFeatureDetectingSafari10plus = CSS.supports("(--css-vars: yes)") && CSS.supports("color", "#00000000");
  supportsCssVars = explicitlySupportsCssVars || weAreFeatureDetectingSafari10plus;
  if (!forceRefresh) {
    supportsCssVariables_ = supportsCssVars;
  }
  return supportsCssVars;
}
function getNormalizedEventCoords(evt, pageOffset, clientRect) {
  if (!evt) {
    return { x: 0, y: 0 };
  }
  var x = pageOffset.x, y = pageOffset.y;
  var documentX = x + clientRect.left;
  var documentY = y + clientRect.top;
  var normalizedX;
  var normalizedY;
  if (evt.type === "touchstart") {
    var touchEvent = evt;
    normalizedX = touchEvent.changedTouches[0].pageX - documentX;
    normalizedY = touchEvent.changedTouches[0].pageY - documentY;
  } else {
    var mouseEvent = evt;
    normalizedX = mouseEvent.pageX - documentX;
    normalizedY = mouseEvent.pageY - documentY;
  }
  return { x: normalizedX, y: normalizedY };
}
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var ACTIVATION_EVENT_TYPES = [
  "touchstart",
  "pointerdown",
  "mousedown",
  "keydown"
];
var POINTER_DEACTIVATION_EVENT_TYPES = [
  "touchend",
  "pointerup",
  "mouseup",
  "contextmenu"
];
var activatedTargets = [];
var MDCRippleFoundation = function(_super) {
  __extends(MDCRippleFoundation2, _super);
  function MDCRippleFoundation2(adapter) {
    var _this = _super.call(this, __assign(__assign({}, MDCRippleFoundation2.defaultAdapter), adapter)) || this;
    _this.activationAnimationHasEnded = false;
    _this.activationTimer = 0;
    _this.fgDeactivationRemovalTimer = 0;
    _this.fgScale = "0";
    _this.frame = { width: 0, height: 0 };
    _this.initialSize = 0;
    _this.layoutFrame = 0;
    _this.maxRadius = 0;
    _this.unboundedCoords = { left: 0, top: 0 };
    _this.activationState = _this.defaultActivationState();
    _this.activationTimerCallback = function() {
      _this.activationAnimationHasEnded = true;
      _this.runDeactivationUXLogicIfReady();
    };
    _this.activateHandler = function(e) {
      _this.activateImpl(e);
    };
    _this.deactivateHandler = function() {
      _this.deactivateImpl();
    };
    _this.focusHandler = function() {
      _this.handleFocus();
    };
    _this.blurHandler = function() {
      _this.handleBlur();
    };
    _this.resizeHandler = function() {
      _this.layout();
    };
    return _this;
  }
  Object.defineProperty(MDCRippleFoundation2, "cssClasses", {
    get: function() {
      return cssClasses$1;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(MDCRippleFoundation2, "strings", {
    get: function() {
      return strings$1;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(MDCRippleFoundation2, "numbers", {
    get: function() {
      return numbers;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(MDCRippleFoundation2, "defaultAdapter", {
    get: function() {
      return {
        addClass: function() {
          return void 0;
        },
        browserSupportsCssVars: function() {
          return true;
        },
        computeBoundingRect: function() {
          return { top: 0, right: 0, bottom: 0, left: 0, width: 0, height: 0 };
        },
        containsEventTarget: function() {
          return true;
        },
        deregisterDocumentInteractionHandler: function() {
          return void 0;
        },
        deregisterInteractionHandler: function() {
          return void 0;
        },
        deregisterResizeHandler: function() {
          return void 0;
        },
        getWindowPageOffset: function() {
          return { x: 0, y: 0 };
        },
        isSurfaceActive: function() {
          return true;
        },
        isSurfaceDisabled: function() {
          return true;
        },
        isUnbounded: function() {
          return true;
        },
        registerDocumentInteractionHandler: function() {
          return void 0;
        },
        registerInteractionHandler: function() {
          return void 0;
        },
        registerResizeHandler: function() {
          return void 0;
        },
        removeClass: function() {
          return void 0;
        },
        updateCssVariable: function() {
          return void 0;
        }
      };
    },
    enumerable: false,
    configurable: true
  });
  MDCRippleFoundation2.prototype.init = function() {
    var _this = this;
    var supportsPressRipple = this.supportsPressRipple();
    this.registerRootHandlers(supportsPressRipple);
    if (supportsPressRipple) {
      var _a = MDCRippleFoundation2.cssClasses, ROOT_1 = _a.ROOT, UNBOUNDED_1 = _a.UNBOUNDED;
      requestAnimationFrame(function() {
        _this.adapter.addClass(ROOT_1);
        if (_this.adapter.isUnbounded()) {
          _this.adapter.addClass(UNBOUNDED_1);
          _this.layoutInternal();
        }
      });
    }
  };
  MDCRippleFoundation2.prototype.destroy = function() {
    var _this = this;
    if (this.supportsPressRipple()) {
      if (this.activationTimer) {
        clearTimeout(this.activationTimer);
        this.activationTimer = 0;
        this.adapter.removeClass(MDCRippleFoundation2.cssClasses.FG_ACTIVATION);
      }
      if (this.fgDeactivationRemovalTimer) {
        clearTimeout(this.fgDeactivationRemovalTimer);
        this.fgDeactivationRemovalTimer = 0;
        this.adapter.removeClass(MDCRippleFoundation2.cssClasses.FG_DEACTIVATION);
      }
      var _a = MDCRippleFoundation2.cssClasses, ROOT_2 = _a.ROOT, UNBOUNDED_2 = _a.UNBOUNDED;
      requestAnimationFrame(function() {
        _this.adapter.removeClass(ROOT_2);
        _this.adapter.removeClass(UNBOUNDED_2);
        _this.removeCssVars();
      });
    }
    this.deregisterRootHandlers();
    this.deregisterDeactivationHandlers();
  };
  MDCRippleFoundation2.prototype.activate = function(evt) {
    this.activateImpl(evt);
  };
  MDCRippleFoundation2.prototype.deactivate = function() {
    this.deactivateImpl();
  };
  MDCRippleFoundation2.prototype.layout = function() {
    var _this = this;
    if (this.layoutFrame) {
      cancelAnimationFrame(this.layoutFrame);
    }
    this.layoutFrame = requestAnimationFrame(function() {
      _this.layoutInternal();
      _this.layoutFrame = 0;
    });
  };
  MDCRippleFoundation2.prototype.setUnbounded = function(unbounded) {
    var UNBOUNDED = MDCRippleFoundation2.cssClasses.UNBOUNDED;
    if (unbounded) {
      this.adapter.addClass(UNBOUNDED);
    } else {
      this.adapter.removeClass(UNBOUNDED);
    }
  };
  MDCRippleFoundation2.prototype.handleFocus = function() {
    var _this = this;
    requestAnimationFrame(function() {
      return _this.adapter.addClass(MDCRippleFoundation2.cssClasses.BG_FOCUSED);
    });
  };
  MDCRippleFoundation2.prototype.handleBlur = function() {
    var _this = this;
    requestAnimationFrame(function() {
      return _this.adapter.removeClass(MDCRippleFoundation2.cssClasses.BG_FOCUSED);
    });
  };
  MDCRippleFoundation2.prototype.supportsPressRipple = function() {
    return this.adapter.browserSupportsCssVars();
  };
  MDCRippleFoundation2.prototype.defaultActivationState = function() {
    return {
      activationEvent: void 0,
      hasDeactivationUXRun: false,
      isActivated: false,
      isProgrammatic: false,
      wasActivatedByPointer: false,
      wasElementMadeActive: false
    };
  };
  MDCRippleFoundation2.prototype.registerRootHandlers = function(supportsPressRipple) {
    var e_1, _a;
    if (supportsPressRipple) {
      try {
        for (var ACTIVATION_EVENT_TYPES_1 = __values(ACTIVATION_EVENT_TYPES), ACTIVATION_EVENT_TYPES_1_1 = ACTIVATION_EVENT_TYPES_1.next(); !ACTIVATION_EVENT_TYPES_1_1.done; ACTIVATION_EVENT_TYPES_1_1 = ACTIVATION_EVENT_TYPES_1.next()) {
          var evtType = ACTIVATION_EVENT_TYPES_1_1.value;
          this.adapter.registerInteractionHandler(evtType, this.activateHandler);
        }
      } catch (e_1_1) {
        e_1 = { error: e_1_1 };
      } finally {
        try {
          if (ACTIVATION_EVENT_TYPES_1_1 && !ACTIVATION_EVENT_TYPES_1_1.done && (_a = ACTIVATION_EVENT_TYPES_1.return))
            _a.call(ACTIVATION_EVENT_TYPES_1);
        } finally {
          if (e_1)
            throw e_1.error;
        }
      }
      if (this.adapter.isUnbounded()) {
        this.adapter.registerResizeHandler(this.resizeHandler);
      }
    }
    this.adapter.registerInteractionHandler("focus", this.focusHandler);
    this.adapter.registerInteractionHandler("blur", this.blurHandler);
  };
  MDCRippleFoundation2.prototype.registerDeactivationHandlers = function(evt) {
    var e_2, _a;
    if (evt.type === "keydown") {
      this.adapter.registerInteractionHandler("keyup", this.deactivateHandler);
    } else {
      try {
        for (var POINTER_DEACTIVATION_EVENT_TYPES_1 = __values(POINTER_DEACTIVATION_EVENT_TYPES), POINTER_DEACTIVATION_EVENT_TYPES_1_1 = POINTER_DEACTIVATION_EVENT_TYPES_1.next(); !POINTER_DEACTIVATION_EVENT_TYPES_1_1.done; POINTER_DEACTIVATION_EVENT_TYPES_1_1 = POINTER_DEACTIVATION_EVENT_TYPES_1.next()) {
          var evtType = POINTER_DEACTIVATION_EVENT_TYPES_1_1.value;
          this.adapter.registerDocumentInteractionHandler(evtType, this.deactivateHandler);
        }
      } catch (e_2_1) {
        e_2 = { error: e_2_1 };
      } finally {
        try {
          if (POINTER_DEACTIVATION_EVENT_TYPES_1_1 && !POINTER_DEACTIVATION_EVENT_TYPES_1_1.done && (_a = POINTER_DEACTIVATION_EVENT_TYPES_1.return))
            _a.call(POINTER_DEACTIVATION_EVENT_TYPES_1);
        } finally {
          if (e_2)
            throw e_2.error;
        }
      }
    }
  };
  MDCRippleFoundation2.prototype.deregisterRootHandlers = function() {
    var e_3, _a;
    try {
      for (var ACTIVATION_EVENT_TYPES_2 = __values(ACTIVATION_EVENT_TYPES), ACTIVATION_EVENT_TYPES_2_1 = ACTIVATION_EVENT_TYPES_2.next(); !ACTIVATION_EVENT_TYPES_2_1.done; ACTIVATION_EVENT_TYPES_2_1 = ACTIVATION_EVENT_TYPES_2.next()) {
        var evtType = ACTIVATION_EVENT_TYPES_2_1.value;
        this.adapter.deregisterInteractionHandler(evtType, this.activateHandler);
      }
    } catch (e_3_1) {
      e_3 = { error: e_3_1 };
    } finally {
      try {
        if (ACTIVATION_EVENT_TYPES_2_1 && !ACTIVATION_EVENT_TYPES_2_1.done && (_a = ACTIVATION_EVENT_TYPES_2.return))
          _a.call(ACTIVATION_EVENT_TYPES_2);
      } finally {
        if (e_3)
          throw e_3.error;
      }
    }
    this.adapter.deregisterInteractionHandler("focus", this.focusHandler);
    this.adapter.deregisterInteractionHandler("blur", this.blurHandler);
    if (this.adapter.isUnbounded()) {
      this.adapter.deregisterResizeHandler(this.resizeHandler);
    }
  };
  MDCRippleFoundation2.prototype.deregisterDeactivationHandlers = function() {
    var e_4, _a;
    this.adapter.deregisterInteractionHandler("keyup", this.deactivateHandler);
    try {
      for (var POINTER_DEACTIVATION_EVENT_TYPES_2 = __values(POINTER_DEACTIVATION_EVENT_TYPES), POINTER_DEACTIVATION_EVENT_TYPES_2_1 = POINTER_DEACTIVATION_EVENT_TYPES_2.next(); !POINTER_DEACTIVATION_EVENT_TYPES_2_1.done; POINTER_DEACTIVATION_EVENT_TYPES_2_1 = POINTER_DEACTIVATION_EVENT_TYPES_2.next()) {
        var evtType = POINTER_DEACTIVATION_EVENT_TYPES_2_1.value;
        this.adapter.deregisterDocumentInteractionHandler(evtType, this.deactivateHandler);
      }
    } catch (e_4_1) {
      e_4 = { error: e_4_1 };
    } finally {
      try {
        if (POINTER_DEACTIVATION_EVENT_TYPES_2_1 && !POINTER_DEACTIVATION_EVENT_TYPES_2_1.done && (_a = POINTER_DEACTIVATION_EVENT_TYPES_2.return))
          _a.call(POINTER_DEACTIVATION_EVENT_TYPES_2);
      } finally {
        if (e_4)
          throw e_4.error;
      }
    }
  };
  MDCRippleFoundation2.prototype.removeCssVars = function() {
    var _this = this;
    var rippleStrings = MDCRippleFoundation2.strings;
    var keys = Object.keys(rippleStrings);
    keys.forEach(function(key) {
      if (key.indexOf("VAR_") === 0) {
        _this.adapter.updateCssVariable(rippleStrings[key], null);
      }
    });
  };
  MDCRippleFoundation2.prototype.activateImpl = function(evt) {
    var _this = this;
    if (this.adapter.isSurfaceDisabled()) {
      return;
    }
    var activationState = this.activationState;
    if (activationState.isActivated) {
      return;
    }
    var previousActivationEvent = this.previousActivationEvent;
    var isSameInteraction = previousActivationEvent && evt !== void 0 && previousActivationEvent.type !== evt.type;
    if (isSameInteraction) {
      return;
    }
    activationState.isActivated = true;
    activationState.isProgrammatic = evt === void 0;
    activationState.activationEvent = evt;
    activationState.wasActivatedByPointer = activationState.isProgrammatic ? false : evt !== void 0 && (evt.type === "mousedown" || evt.type === "touchstart" || evt.type === "pointerdown");
    var hasActivatedChild = evt !== void 0 && activatedTargets.length > 0 && activatedTargets.some(function(target) {
      return _this.adapter.containsEventTarget(target);
    });
    if (hasActivatedChild) {
      this.resetActivationState();
      return;
    }
    if (evt !== void 0) {
      activatedTargets.push(evt.target);
      this.registerDeactivationHandlers(evt);
    }
    activationState.wasElementMadeActive = this.checkElementMadeActive(evt);
    if (activationState.wasElementMadeActive) {
      this.animateActivation();
    }
    requestAnimationFrame(function() {
      activatedTargets = [];
      if (!activationState.wasElementMadeActive && evt !== void 0 && (evt.key === " " || evt.keyCode === 32)) {
        activationState.wasElementMadeActive = _this.checkElementMadeActive(evt);
        if (activationState.wasElementMadeActive) {
          _this.animateActivation();
        }
      }
      if (!activationState.wasElementMadeActive) {
        _this.activationState = _this.defaultActivationState();
      }
    });
  };
  MDCRippleFoundation2.prototype.checkElementMadeActive = function(evt) {
    return evt !== void 0 && evt.type === "keydown" ? this.adapter.isSurfaceActive() : true;
  };
  MDCRippleFoundation2.prototype.animateActivation = function() {
    var _this = this;
    var _a = MDCRippleFoundation2.strings, VAR_FG_TRANSLATE_START = _a.VAR_FG_TRANSLATE_START, VAR_FG_TRANSLATE_END = _a.VAR_FG_TRANSLATE_END;
    var _b = MDCRippleFoundation2.cssClasses, FG_DEACTIVATION = _b.FG_DEACTIVATION, FG_ACTIVATION = _b.FG_ACTIVATION;
    var DEACTIVATION_TIMEOUT_MS = MDCRippleFoundation2.numbers.DEACTIVATION_TIMEOUT_MS;
    this.layoutInternal();
    var translateStart = "";
    var translateEnd = "";
    if (!this.adapter.isUnbounded()) {
      var _c = this.getFgTranslationCoordinates(), startPoint = _c.startPoint, endPoint = _c.endPoint;
      translateStart = startPoint.x + "px, " + startPoint.y + "px";
      translateEnd = endPoint.x + "px, " + endPoint.y + "px";
    }
    this.adapter.updateCssVariable(VAR_FG_TRANSLATE_START, translateStart);
    this.adapter.updateCssVariable(VAR_FG_TRANSLATE_END, translateEnd);
    clearTimeout(this.activationTimer);
    clearTimeout(this.fgDeactivationRemovalTimer);
    this.rmBoundedActivationClasses();
    this.adapter.removeClass(FG_DEACTIVATION);
    this.adapter.computeBoundingRect();
    this.adapter.addClass(FG_ACTIVATION);
    this.activationTimer = setTimeout(function() {
      _this.activationTimerCallback();
    }, DEACTIVATION_TIMEOUT_MS);
  };
  MDCRippleFoundation2.prototype.getFgTranslationCoordinates = function() {
    var _a = this.activationState, activationEvent = _a.activationEvent, wasActivatedByPointer = _a.wasActivatedByPointer;
    var startPoint;
    if (wasActivatedByPointer) {
      startPoint = getNormalizedEventCoords(activationEvent, this.adapter.getWindowPageOffset(), this.adapter.computeBoundingRect());
    } else {
      startPoint = {
        x: this.frame.width / 2,
        y: this.frame.height / 2
      };
    }
    startPoint = {
      x: startPoint.x - this.initialSize / 2,
      y: startPoint.y - this.initialSize / 2
    };
    var endPoint = {
      x: this.frame.width / 2 - this.initialSize / 2,
      y: this.frame.height / 2 - this.initialSize / 2
    };
    return { startPoint, endPoint };
  };
  MDCRippleFoundation2.prototype.runDeactivationUXLogicIfReady = function() {
    var _this = this;
    var FG_DEACTIVATION = MDCRippleFoundation2.cssClasses.FG_DEACTIVATION;
    var _a = this.activationState, hasDeactivationUXRun = _a.hasDeactivationUXRun, isActivated = _a.isActivated;
    var activationHasEnded = hasDeactivationUXRun || !isActivated;
    if (activationHasEnded && this.activationAnimationHasEnded) {
      this.rmBoundedActivationClasses();
      this.adapter.addClass(FG_DEACTIVATION);
      this.fgDeactivationRemovalTimer = setTimeout(function() {
        _this.adapter.removeClass(FG_DEACTIVATION);
      }, numbers.FG_DEACTIVATION_MS);
    }
  };
  MDCRippleFoundation2.prototype.rmBoundedActivationClasses = function() {
    var FG_ACTIVATION = MDCRippleFoundation2.cssClasses.FG_ACTIVATION;
    this.adapter.removeClass(FG_ACTIVATION);
    this.activationAnimationHasEnded = false;
    this.adapter.computeBoundingRect();
  };
  MDCRippleFoundation2.prototype.resetActivationState = function() {
    var _this = this;
    this.previousActivationEvent = this.activationState.activationEvent;
    this.activationState = this.defaultActivationState();
    setTimeout(function() {
      return _this.previousActivationEvent = void 0;
    }, MDCRippleFoundation2.numbers.TAP_DELAY_MS);
  };
  MDCRippleFoundation2.prototype.deactivateImpl = function() {
    var _this = this;
    var activationState = this.activationState;
    if (!activationState.isActivated) {
      return;
    }
    var state = __assign({}, activationState);
    if (activationState.isProgrammatic) {
      requestAnimationFrame(function() {
        _this.animateDeactivation(state);
      });
      this.resetActivationState();
    } else {
      this.deregisterDeactivationHandlers();
      requestAnimationFrame(function() {
        _this.activationState.hasDeactivationUXRun = true;
        _this.animateDeactivation(state);
        _this.resetActivationState();
      });
    }
  };
  MDCRippleFoundation2.prototype.animateDeactivation = function(_a) {
    var wasActivatedByPointer = _a.wasActivatedByPointer, wasElementMadeActive = _a.wasElementMadeActive;
    if (wasActivatedByPointer || wasElementMadeActive) {
      this.runDeactivationUXLogicIfReady();
    }
  };
  MDCRippleFoundation2.prototype.layoutInternal = function() {
    var _this = this;
    this.frame = this.adapter.computeBoundingRect();
    var maxDim = Math.max(this.frame.height, this.frame.width);
    var getBoundedRadius = function() {
      var hypotenuse = Math.sqrt(Math.pow(_this.frame.width, 2) + Math.pow(_this.frame.height, 2));
      return hypotenuse + MDCRippleFoundation2.numbers.PADDING;
    };
    this.maxRadius = this.adapter.isUnbounded() ? maxDim : getBoundedRadius();
    var initialSize = Math.floor(maxDim * MDCRippleFoundation2.numbers.INITIAL_ORIGIN_SCALE);
    if (this.adapter.isUnbounded() && initialSize % 2 !== 0) {
      this.initialSize = initialSize - 1;
    } else {
      this.initialSize = initialSize;
    }
    this.fgScale = "" + this.maxRadius / this.initialSize;
    this.updateLayoutCssVars();
  };
  MDCRippleFoundation2.prototype.updateLayoutCssVars = function() {
    var _a = MDCRippleFoundation2.strings, VAR_FG_SIZE = _a.VAR_FG_SIZE, VAR_LEFT = _a.VAR_LEFT, VAR_TOP = _a.VAR_TOP, VAR_FG_SCALE = _a.VAR_FG_SCALE;
    this.adapter.updateCssVariable(VAR_FG_SIZE, this.initialSize + "px");
    this.adapter.updateCssVariable(VAR_FG_SCALE, this.fgScale);
    if (this.adapter.isUnbounded()) {
      this.unboundedCoords = {
        left: Math.round(this.frame.width / 2 - this.initialSize / 2),
        top: Math.round(this.frame.height / 2 - this.initialSize / 2)
      };
      this.adapter.updateCssVariable(VAR_LEFT, this.unboundedCoords.left + "px");
      this.adapter.updateCssVariable(VAR_TOP, this.unboundedCoords.top + "px");
    }
  };
  return MDCRippleFoundation2;
}(MDCFoundation);
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var cssClasses = {
  ICON_BUTTON_ON: "mdc-icon-button--on",
  ROOT: "mdc-icon-button"
};
var strings = {
  ARIA_LABEL: "aria-label",
  ARIA_PRESSED: "aria-pressed",
  DATA_ARIA_LABEL_OFF: "data-aria-label-off",
  DATA_ARIA_LABEL_ON: "data-aria-label-on",
  CHANGE_EVENT: "MDCIconButtonToggle:change"
};
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var MDCIconButtonToggleFoundation = function(_super) {
  __extends(MDCIconButtonToggleFoundation2, _super);
  function MDCIconButtonToggleFoundation2(adapter) {
    var _this = _super.call(this, __assign(__assign({}, MDCIconButtonToggleFoundation2.defaultAdapter), adapter)) || this;
    _this.hasToggledAriaLabel = false;
    return _this;
  }
  Object.defineProperty(MDCIconButtonToggleFoundation2, "cssClasses", {
    get: function() {
      return cssClasses;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(MDCIconButtonToggleFoundation2, "strings", {
    get: function() {
      return strings;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(MDCIconButtonToggleFoundation2, "defaultAdapter", {
    get: function() {
      return {
        addClass: function() {
          return void 0;
        },
        hasClass: function() {
          return false;
        },
        notifyChange: function() {
          return void 0;
        },
        removeClass: function() {
          return void 0;
        },
        getAttr: function() {
          return null;
        },
        setAttr: function() {
          return void 0;
        }
      };
    },
    enumerable: false,
    configurable: true
  });
  MDCIconButtonToggleFoundation2.prototype.init = function() {
    var ariaLabelOn = this.adapter.getAttr(strings.DATA_ARIA_LABEL_ON);
    var ariaLabelOff = this.adapter.getAttr(strings.DATA_ARIA_LABEL_OFF);
    if (ariaLabelOn && ariaLabelOff) {
      if (this.adapter.getAttr(strings.ARIA_PRESSED) !== null) {
        throw new Error("MDCIconButtonToggleFoundation: Button should not set `aria-pressed` if it has a toggled aria label.");
      }
      this.hasToggledAriaLabel = true;
    } else {
      this.adapter.setAttr(strings.ARIA_PRESSED, String(this.isOn()));
    }
  };
  MDCIconButtonToggleFoundation2.prototype.handleClick = function() {
    this.toggle();
    this.adapter.notifyChange({ isOn: this.isOn() });
  };
  MDCIconButtonToggleFoundation2.prototype.isOn = function() {
    return this.adapter.hasClass(cssClasses.ICON_BUTTON_ON);
  };
  MDCIconButtonToggleFoundation2.prototype.toggle = function(isOn) {
    if (isOn === void 0) {
      isOn = !this.isOn();
    }
    if (isOn) {
      this.adapter.addClass(cssClasses.ICON_BUTTON_ON);
    } else {
      this.adapter.removeClass(cssClasses.ICON_BUTTON_ON);
    }
    if (this.hasToggledAriaLabel) {
      var ariaLabel = isOn ? this.adapter.getAttr(strings.DATA_ARIA_LABEL_ON) : this.adapter.getAttr(strings.DATA_ARIA_LABEL_OFF);
      this.adapter.setAttr(strings.ARIA_LABEL, ariaLabel || "");
    } else {
      this.adapter.setAttr(strings.ARIA_PRESSED, "" + isOn);
    }
  };
  return MDCIconButtonToggleFoundation2;
}(MDCFoundation);
function classMap$8(classObj) {
  return Object.entries(classObj).filter(([name, value]) => name !== "" && value).map(([name]) => name).join(" ");
}
function dispatch$1(element, eventType, detail, eventInit = { bubbles: true }, duplicateEventForMDC = false) {
  if (typeof Event !== "undefined" && element) {
    const event = new CustomEvent(eventType, Object.assign(Object.assign({}, eventInit), { detail }));
    element === null || element === void 0 ? void 0 : element.dispatchEvent(event);
    if (duplicateEventForMDC && eventType.startsWith("SMUI")) {
      const duplicateEvent = new CustomEvent(eventType.replace(/^SMUI/g, () => "MDC"), Object.assign(Object.assign({}, eventInit), { detail }));
      element === null || element === void 0 ? void 0 : element.dispatchEvent(duplicateEvent);
      if (duplicateEvent.defaultPrevented) {
        event.preventDefault();
      }
    }
    return event;
  }
}
const oldModifierRegex$8 = /^[a-z]+(?::(?:preventDefault|stopPropagation|passive|nonpassive|capture|once|self))+$/;
const newModifierRegex$8 = /^[^$]+(?:\$(?:preventDefault|stopPropagation|passive|nonpassive|capture|once|self))+$/;
function forwardEventsBuilder$8(component) {
  let $on;
  let events2 = [];
  component.$on = (fullEventType, callback) => {
    let eventType = fullEventType;
    let destructor = () => {
    };
    if ($on) {
      destructor = $on(eventType, callback);
    } else {
      events2.push([eventType, callback]);
    }
    const oldModifierMatch = eventType.match(oldModifierRegex$8);
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
      const oldModifierMatch = eventType.match(oldModifierRegex$8);
      const newModifierMatch = eventType.match(newModifierRegex$8);
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
    for (let i = 0; i < events2.length; i++) {
      $on(events2[i][0], events2[i][1]);
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
const { applyPassive: applyPassive$1 } = events;
const { matches: matches$1 } = ponyfill;
function Ripple$1(node, { ripple = true, surface = false, unbounded = false, disabled = false, color, active, rippleElement, eventTarget, activeTarget, addClass = (className) => node.classList.add(className), removeClass = (className) => node.classList.remove(className), addStyle = (name, value) => node.style.setProperty(name, value), initPromise = Promise.resolve() } = {}) {
  let instance;
  let addLayoutListener = getContext("SMUI:addLayoutListener");
  let removeLayoutListener;
  let oldActive = active;
  let oldEventTarget = eventTarget;
  let oldActiveTarget = activeTarget;
  function handleProps() {
    if (surface) {
      addClass("mdc-ripple-surface");
      if (color === "primary") {
        addClass("smui-ripple-surface--primary");
        removeClass("smui-ripple-surface--secondary");
      } else if (color === "secondary") {
        removeClass("smui-ripple-surface--primary");
        addClass("smui-ripple-surface--secondary");
      } else {
        removeClass("smui-ripple-surface--primary");
        removeClass("smui-ripple-surface--secondary");
      }
    } else {
      removeClass("mdc-ripple-surface");
      removeClass("smui-ripple-surface--primary");
      removeClass("smui-ripple-surface--secondary");
    }
    if (instance && oldActive !== active) {
      oldActive = active;
      if (active) {
        instance.activate();
      } else if (active === false) {
        instance.deactivate();
      }
    }
    if (ripple && !instance) {
      instance = new MDCRippleFoundation({
        addClass,
        browserSupportsCssVars: () => supportsCssVariables(window),
        computeBoundingRect: () => (rippleElement || node).getBoundingClientRect(),
        containsEventTarget: (target) => node.contains(target),
        deregisterDocumentInteractionHandler: (evtType, handler) => document.documentElement.removeEventListener(evtType, handler, applyPassive$1()),
        deregisterInteractionHandler: (evtType, handler) => (eventTarget || node).removeEventListener(evtType, handler, applyPassive$1()),
        deregisterResizeHandler: (handler) => window.removeEventListener("resize", handler),
        getWindowPageOffset: () => ({
          x: window.pageXOffset,
          y: window.pageYOffset
        }),
        isSurfaceActive: () => active == null ? matches$1(activeTarget || node, ":active") : active,
        isSurfaceDisabled: () => !!disabled,
        isUnbounded: () => !!unbounded,
        registerDocumentInteractionHandler: (evtType, handler) => document.documentElement.addEventListener(evtType, handler, applyPassive$1()),
        registerInteractionHandler: (evtType, handler) => (eventTarget || node).addEventListener(evtType, handler, applyPassive$1()),
        registerResizeHandler: (handler) => window.addEventListener("resize", handler),
        removeClass,
        updateCssVariable: addStyle
      });
      initPromise.then(() => {
        if (instance) {
          instance.init();
          instance.setUnbounded(unbounded);
        }
      });
    } else if (instance && !ripple) {
      initPromise.then(() => {
        if (instance) {
          instance.destroy();
          instance = void 0;
        }
      });
    }
    if (instance && (oldEventTarget !== eventTarget || oldActiveTarget !== activeTarget)) {
      oldEventTarget = eventTarget;
      oldActiveTarget = activeTarget;
      instance.destroy();
      requestAnimationFrame(() => {
        if (instance) {
          instance.init();
          instance.setUnbounded(unbounded);
        }
      });
    }
    if (!ripple && unbounded) {
      addClass("mdc-ripple-upgraded--unbounded");
    }
  }
  handleProps();
  if (addLayoutListener) {
    removeLayoutListener = addLayoutListener(layout);
  }
  function layout() {
    if (instance) {
      instance.layout();
    }
  }
  return {
    update(props) {
      ({
        ripple,
        surface,
        unbounded,
        disabled,
        color,
        active,
        rippleElement,
        eventTarget,
        activeTarget,
        addClass,
        removeClass,
        addStyle,
        initPromise
      } = Object.assign({ ripple: true, surface: false, unbounded: false, disabled: false, color: void 0, active: void 0, rippleElement: void 0, eventTarget: void 0, activeTarget: void 0, addClass: (className) => node.classList.add(className), removeClass: (className) => node.classList.remove(className), addStyle: (name, value) => node.style.setProperty(name, value), initPromise: Promise.resolve() }, props));
      handleProps();
    },
    destroy() {
      if (instance) {
        instance.destroy();
        instance = void 0;
        removeClass("mdc-ripple-surface");
        removeClass("smui-ripple-surface--primary");
        removeClass("smui-ripple-surface--secondary");
      }
      if (removeLayoutListener) {
        removeLayoutListener();
      }
    }
  };
}
const A$3 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["use", "href", "getElement"]);
  let { use = [] } = $$props;
  let { href = "javascript:void(0);" } = $$props;
  forwardEventsBuilder$8(get_current_component());
  let element;
  function getElement() {
    return element;
  }
  if ($$props.use === void 0 && $$bindings.use && use !== void 0)
    $$bindings.use(use);
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  if ($$props.getElement === void 0 && $$bindings.getElement && getElement !== void 0)
    $$bindings.getElement(getElement);
  return `<a${spread([{ href: escape_attribute_value(href) }, escape_object($$restProps)])}${add_attribute("this", element, 0)}>${slots.default ? slots.default({}) : ``}</a>`;
});
const Button$1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["use", "getElement"]);
  let { use = [] } = $$props;
  forwardEventsBuilder$8(get_current_component());
  let element;
  function getElement() {
    return element;
  }
  if ($$props.use === void 0 && $$bindings.use && use !== void 0)
    $$bindings.use(use);
  if ($$props.getElement === void 0 && $$bindings.getElement && getElement !== void 0)
    $$bindings.getElement(getElement);
  return `<button${spread([escape_object($$restProps)])}${add_attribute("this", element, 0)}>${slots.default ? slots.default({}) : ``}</button>`;
});
const A$2 = A$3;
const Button = Button$1;
const { Object: Object_1$4 } = globals;
const IconButton = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let actionProp;
  let $$restProps = compute_rest_props($$props, [
    "use",
    "class",
    "style",
    "ripple",
    "color",
    "toggle",
    "pressed",
    "ariaLabelOn",
    "ariaLabelOff",
    "touch",
    "displayFlex",
    "size",
    "href",
    "action",
    "component",
    "getElement"
  ]);
  const forwardEvents = forwardEventsBuilder$8(get_current_component());
  let uninitializedValue = () => {
  };
  function isUninitializedValue(value) {
    return value === uninitializedValue;
  }
  let { use = [] } = $$props;
  let { class: className = "" } = $$props;
  let { style = "" } = $$props;
  let { ripple = true } = $$props;
  let { color = void 0 } = $$props;
  let { toggle = false } = $$props;
  let { pressed = uninitializedValue } = $$props;
  let { ariaLabelOn = void 0 } = $$props;
  let { ariaLabelOff = void 0 } = $$props;
  let { touch = false } = $$props;
  let { displayFlex = true } = $$props;
  let { size = "normal" } = $$props;
  let { href = void 0 } = $$props;
  let { action = void 0 } = $$props;
  let element;
  let instance;
  let internalClasses = {};
  let internalStyles = {};
  let internalAttrs = {};
  let context = getContext("SMUI:icon-button:context");
  let ariaDescribedby = getContext("SMUI:icon-button:aria-describedby");
  let { component = href == null ? Button : A$2 } = $$props;
  let previousDisabled = $$restProps.disabled;
  setContext("SMUI:icon:context", "icon-button");
  let oldToggle = null;
  onDestroy(() => {
    instance && instance.destroy();
  });
  function hasClass(className2) {
    return className2 in internalClasses ? internalClasses[className2] : getElement().classList.contains(className2);
  }
  function addClass(className2) {
    if (!internalClasses[className2]) {
      internalClasses[className2] = true;
    }
  }
  function removeClass(className2) {
    if (!(className2 in internalClasses) || internalClasses[className2]) {
      internalClasses[className2] = false;
    }
  }
  function addStyle(name, value) {
    if (internalStyles[name] != value) {
      if (value === "" || value == null) {
        delete internalStyles[name];
        internalStyles = internalStyles;
      } else {
        internalStyles[name] = value;
      }
    }
  }
  function getAttr(name) {
    var _a;
    return name in internalAttrs ? (_a = internalAttrs[name]) !== null && _a !== void 0 ? _a : null : getElement().getAttribute(name);
  }
  function addAttr(name, value) {
    if (internalAttrs[name] !== value) {
      internalAttrs[name] = value;
    }
  }
  function handleChange(evtData) {
    pressed = evtData.isOn;
  }
  function getElement() {
    return element.getElement();
  }
  if ($$props.use === void 0 && $$bindings.use && use !== void 0)
    $$bindings.use(use);
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.style === void 0 && $$bindings.style && style !== void 0)
    $$bindings.style(style);
  if ($$props.ripple === void 0 && $$bindings.ripple && ripple !== void 0)
    $$bindings.ripple(ripple);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.toggle === void 0 && $$bindings.toggle && toggle !== void 0)
    $$bindings.toggle(toggle);
  if ($$props.pressed === void 0 && $$bindings.pressed && pressed !== void 0)
    $$bindings.pressed(pressed);
  if ($$props.ariaLabelOn === void 0 && $$bindings.ariaLabelOn && ariaLabelOn !== void 0)
    $$bindings.ariaLabelOn(ariaLabelOn);
  if ($$props.ariaLabelOff === void 0 && $$bindings.ariaLabelOff && ariaLabelOff !== void 0)
    $$bindings.ariaLabelOff(ariaLabelOff);
  if ($$props.touch === void 0 && $$bindings.touch && touch !== void 0)
    $$bindings.touch(touch);
  if ($$props.displayFlex === void 0 && $$bindings.displayFlex && displayFlex !== void 0)
    $$bindings.displayFlex(displayFlex);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  if ($$props.action === void 0 && $$bindings.action && action !== void 0)
    $$bindings.action(action);
  if ($$props.component === void 0 && $$bindings.component && component !== void 0)
    $$bindings.component(component);
  if ($$props.getElement === void 0 && $$bindings.getElement && getElement !== void 0)
    $$bindings.getElement(getElement);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    actionProp = (() => {
      if (context === "data-table:pagination") {
        switch (action) {
          case "first-page":
            return { "data-first-page": "true" };
          case "prev-page":
            return { "data-prev-page": "true" };
          case "next-page":
            return { "data-next-page": "true" };
          case "last-page":
            return { "data-last-page": "true" };
          default:
            return { "data-action": "true" };
        }
      } else if (context === "dialog:header") {
        return { "data-mdc-dialog-action": action };
      } else {
        return { action };
      }
    })();
    {
      if (previousDisabled !== $$restProps.disabled) {
        const elem = getElement();
        if ("blur" in elem) {
          elem.blur();
        }
        previousDisabled = $$restProps.disabled;
      }
    }
    {
      if (element && getElement() && toggle !== oldToggle) {
        if (toggle && !instance) {
          instance = new MDCIconButtonToggleFoundation({
            addClass,
            hasClass,
            notifyChange: (evtData) => {
              handleChange(evtData);
              dispatch$1(getElement(), "SMUIIconButtonToggle:change", evtData, void 0, true);
            },
            removeClass,
            getAttr,
            setAttr: addAttr
          });
          instance.init();
        } else if (!toggle && instance) {
          instance.destroy();
          instance = void 0;
          internalClasses = {};
          internalAttrs = {};
        }
        oldToggle = toggle;
      }
    }
    {
      if (instance && !isUninitializedValue(pressed) && instance.isOn() !== pressed) {
        instance.toggle(pressed);
      }
    }
    $$rendered = `${validate_component(component || missing_component, "svelte:component").$$render($$result, Object_1$4.assign({
      use: [
        [
          Ripple$1,
          {
            ripple,
            unbounded: true,
            color,
            disabled: !!$$restProps.disabled,
            addClass,
            removeClass,
            addStyle
          }
        ],
        forwardEvents,
        ...use
      ]
    }, {
      class: classMap$8({
        [className]: true,
        "mdc-icon-button": true,
        "mdc-icon-button--on": !isUninitializedValue(pressed) && pressed,
        "mdc-icon-button--touch": touch,
        "mdc-icon-button--display-flex": displayFlex,
        "smui-icon-button--size-button": size === "button",
        "mdc-icon-button--reduced-size": size === "mini" || size === "button",
        "mdc-card__action": context === "card:action",
        "mdc-card__action--icon": context === "card:action",
        "mdc-top-app-bar__navigation-icon": context === "top-app-bar:navigation",
        "mdc-top-app-bar__action-item": context === "top-app-bar:action",
        "mdc-snackbar__dismiss": context === "snackbar:actions",
        "mdc-data-table__pagination-button": context === "data-table:pagination",
        "mdc-data-table__sort-icon-button": context === "data-table:sortable-header-cell",
        "mdc-dialog__close": context === "dialog:header" && action === "close",
        ...internalClasses
      })
    }, {
      style: Object.entries(internalStyles).map(([name, value]) => `${name}: ${value};`).concat([style]).join(" ")
    }, {
      "aria-pressed": !isUninitializedValue(pressed) ? pressed ? "true" : "false" : null
    }, {
      "aria-label": pressed ? ariaLabelOn : ariaLabelOff
    }, { "data-aria-label-on": ariaLabelOn }, { "data-aria-label-off": ariaLabelOff }, { "aria-describedby": ariaDescribedby }, { href }, actionProp, internalAttrs, $$restProps, { this: element }), {
      this: ($$value) => {
        element = $$value;
        $$settled = false;
      }
    }, {
      default: () => `<div class="${"mdc-icon-button__ripple"}"></div>
  ${slots.default ? slots.default({}) : ``}${touch ? `<div class="${"mdc-icon-button__touch"}"></div>` : ``}`
    })}`;
  } while (!$$settled);
  return $$rendered;
});
function classMap$7(classObj) {
  return Object.entries(classObj).filter(([name, value]) => name !== "" && value).map(([name]) => name).join(" ");
}
function exclude$1(obj, keys) {
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
const oldModifierRegex$7 = /^[a-z]+(?::(?:preventDefault|stopPropagation|passive|nonpassive|capture|once|self))+$/;
const newModifierRegex$7 = /^[^$]+(?:\$(?:preventDefault|stopPropagation|passive|nonpassive|capture|once|self))+$/;
function forwardEventsBuilder$7(component) {
  let $on;
  let events2 = [];
  component.$on = (fullEventType, callback) => {
    let eventType = fullEventType;
    let destructor = () => {
    };
    if ($on) {
      destructor = $on(eventType, callback);
    } else {
      events2.push([eventType, callback]);
    }
    const oldModifierMatch = eventType.match(oldModifierRegex$7);
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
      const oldModifierMatch = eventType.match(oldModifierRegex$7);
      const newModifierMatch = eventType.match(newModifierRegex$7);
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
    for (let i = 0; i < events2.length; i++) {
      $on(events2[i][0], events2[i][1]);
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
function prefixFilter$1(obj, prefix) {
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
const DataTable = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, [
    "use",
    "class",
    "stickyHeader",
    "sortable",
    "sort",
    "sortDirection",
    "sortAscendingAriaLabel",
    "sortDescendingAriaLabel",
    "container$use",
    "container$class",
    "table$use",
    "table$class",
    "layout",
    "getElement"
  ]);
  let $$slots = compute_slots(slots);
  let $progressClosed, $$unsubscribe_progressClosed;
  let $sortDirectionStore, $$unsubscribe_sortDirectionStore;
  let $sortStore, $$unsubscribe_sortStore;
  forwardEventsBuilder$7(get_current_component());
  let { use = [] } = $$props;
  let { class: className = "" } = $$props;
  let { stickyHeader = false } = $$props;
  let { sortable = false } = $$props;
  let { sort = null } = $$props;
  let { sortDirection = "ascending" } = $$props;
  let { sortAscendingAriaLabel = "sorted, ascending" } = $$props;
  let { sortDescendingAriaLabel = "sorted, descending" } = $$props;
  let { container$use = [] } = $$props;
  let { container$class = "" } = $$props;
  let { table$use = [] } = $$props;
  let { table$class = "" } = $$props;
  let element;
  let instance;
  let container;
  let internalClasses = {};
  let progressIndicatorStyles = { height: "auto", top: "initial" };
  let addLayoutListener = getContext("SMUI:addLayoutListener");
  let removeLayoutListener;
  let progressClosed = writable(false);
  $$unsubscribe_progressClosed = subscribe(progressClosed, (value) => $progressClosed = value);
  let sortStore = writable(sort);
  $$unsubscribe_sortStore = subscribe(sortStore, (value) => $sortStore = value);
  let sortDirectionStore = writable(sortDirection);
  $$unsubscribe_sortDirectionStore = subscribe(sortDirectionStore, (value) => $sortDirectionStore = value);
  setContext("SMUI:checkbox:context", "data-table");
  setContext("SMUI:linear-progress:context", "data-table");
  setContext("SMUI:linear-progress:closed", progressClosed);
  setContext("SMUI:data-table:sortable", sortable);
  setContext("SMUI:data-table:sort", sortStore);
  setContext("SMUI:data-table:sortDirection", sortDirectionStore);
  setContext("SMUI:data-table:sortAscendingAriaLabel", sortAscendingAriaLabel);
  setContext("SMUI:data-table:sortDescendingAriaLabel", sortDescendingAriaLabel);
  if (addLayoutListener) {
    removeLayoutListener = addLayoutListener(layout);
  }
  let previousProgressClosed = void 0;
  onDestroy(() => {
    if (removeLayoutListener) {
      removeLayoutListener();
    }
  });
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
  if ($$props.stickyHeader === void 0 && $$bindings.stickyHeader && stickyHeader !== void 0)
    $$bindings.stickyHeader(stickyHeader);
  if ($$props.sortable === void 0 && $$bindings.sortable && sortable !== void 0)
    $$bindings.sortable(sortable);
  if ($$props.sort === void 0 && $$bindings.sort && sort !== void 0)
    $$bindings.sort(sort);
  if ($$props.sortDirection === void 0 && $$bindings.sortDirection && sortDirection !== void 0)
    $$bindings.sortDirection(sortDirection);
  if ($$props.sortAscendingAriaLabel === void 0 && $$bindings.sortAscendingAriaLabel && sortAscendingAriaLabel !== void 0)
    $$bindings.sortAscendingAriaLabel(sortAscendingAriaLabel);
  if ($$props.sortDescendingAriaLabel === void 0 && $$bindings.sortDescendingAriaLabel && sortDescendingAriaLabel !== void 0)
    $$bindings.sortDescendingAriaLabel(sortDescendingAriaLabel);
  if ($$props.container$use === void 0 && $$bindings.container$use && container$use !== void 0)
    $$bindings.container$use(container$use);
  if ($$props.container$class === void 0 && $$bindings.container$class && container$class !== void 0)
    $$bindings.container$class(container$class);
  if ($$props.table$use === void 0 && $$bindings.table$use && table$use !== void 0)
    $$bindings.table$use(table$use);
  if ($$props.table$class === void 0 && $$bindings.table$class && table$class !== void 0)
    $$bindings.table$class(table$class);
  if ($$props.layout === void 0 && $$bindings.layout && layout !== void 0)
    $$bindings.layout(layout);
  if ($$props.getElement === void 0 && $$bindings.getElement && getElement !== void 0)
    $$bindings.getElement(getElement);
  set_store_value(sortStore, $sortStore = sort, $sortStore);
  set_store_value(sortDirectionStore, $sortDirectionStore = sortDirection, $sortDirectionStore);
  {
    if ($$slots.progress && instance && previousProgressClosed !== $progressClosed) {
      previousProgressClosed = $progressClosed;
      if ($progressClosed) {
        instance.hideProgress();
      } else {
        instance.showProgress();
      }
    }
  }
  $$unsubscribe_progressClosed();
  $$unsubscribe_sortDirectionStore();
  $$unsubscribe_sortStore();
  return `<div${spread([
    {
      class: escape_attribute_value(classMap$7({
        [className]: true,
        "mdc-data-table": true,
        "mdc-data-table--sticky-header": stickyHeader,
        ...internalClasses
      }))
    },
    escape_object(exclude$1($$restProps, ["container$", "table$"]))
  ])}${add_attribute("this", element, 0)}><div${spread([
    {
      class: escape_attribute_value(classMap$7({
        [container$class]: true,
        "mdc-data-table__table-container": true
      }))
    },
    escape_object(prefixFilter$1($$restProps, "container$"))
  ])}${add_attribute("this", container, 0)}><table${spread([
    {
      class: escape_attribute_value(classMap$7({
        [table$class]: true,
        "mdc-data-table__table": true
      }))
    },
    escape_object(prefixFilter$1($$restProps, "table$"))
  ])}>${slots.default ? slots.default({}) : ``}</table></div>

  ${$$slots.progress ? `<div class="${"mdc-data-table__progress-indicator"}"${add_attribute("style", Object.entries(progressIndicatorStyles).map(([name, value]) => `${name}: ${value};`).join(" "), 0)}><div class="${"mdc-data-table__scrim"}"></div>
      ${slots.progress ? slots.progress({}) : ``}</div>` : ``}

  ${slots.paginate ? slots.paginate({}) : ``}
</div>`;
});
const Head$1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["use", "getElement"]);
  forwardEventsBuilder$7(get_current_component());
  let { use = [] } = $$props;
  let element;
  setContext("SMUI:data-table:row:header", true);
  function getElement() {
    return element;
  }
  if ($$props.use === void 0 && $$bindings.use && use !== void 0)
    $$bindings.use(use);
  if ($$props.getElement === void 0 && $$bindings.getElement && getElement !== void 0)
    $$bindings.getElement(getElement);
  return `<thead${spread([escape_object($$restProps)])}${add_attribute("this", element, 0)}>${slots.default ? slots.default({}) : ``}</thead>`;
});
const Body$1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["use", "class", "getElement"]);
  forwardEventsBuilder$7(get_current_component());
  let { use = [] } = $$props;
  let { class: className = "" } = $$props;
  let element;
  setContext("SMUI:data-table:row:header", false);
  function getElement() {
    return element;
  }
  if ($$props.use === void 0 && $$bindings.use && use !== void 0)
    $$bindings.use(use);
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.getElement === void 0 && $$bindings.getElement && getElement !== void 0)
    $$bindings.getElement(getElement);
  return `<tbody${spread([
    {
      class: escape_attribute_value(classMap$7({
        [className]: true,
        "mdc-data-table__content": true
      }))
    },
    escape_object($$restProps)
  ])}${add_attribute("this", element, 0)}>${slots.default ? slots.default({}) : ``}</tbody>`;
});
let counter$4 = 0;
const Row$1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["use", "class", "rowId", "getElement"]);
  forwardEventsBuilder$7(get_current_component());
  let { use = [] } = $$props;
  let { class: className = "" } = $$props;
  let { rowId = "SMUI-data-table-row-" + counter$4++ } = $$props;
  let element;
  let checkbox = void 0;
  let internalClasses = {};
  let internalAttrs = {};
  let header = getContext("SMUI:data-table:row:header");
  function getElement() {
    return element;
  }
  if ($$props.use === void 0 && $$bindings.use && use !== void 0)
    $$bindings.use(use);
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.rowId === void 0 && $$bindings.rowId && rowId !== void 0)
    $$bindings.rowId(rowId);
  if ($$props.getElement === void 0 && $$bindings.getElement && getElement !== void 0)
    $$bindings.getElement(getElement);
  return `<tr${spread([
    {
      class: escape_attribute_value(classMap$7({
        [className]: true,
        "mdc-data-table__header-row": header,
        "mdc-data-table__row": !header,
        "mdc-data-table__row--selected": !header && checkbox && checkbox.checked,
        ...internalClasses
      }))
    },
    {
      "aria-selected": escape_attribute_value(void 0)
    },
    escape_object(internalAttrs),
    escape_object($$restProps)
  ])}${add_attribute("this", element, 0)}>${slots.default ? slots.default({}) : ``}</tr>`;
});
let counter$3 = 0;
const Cell$1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["use", "class", "numeric", "checkbox", "columnId", "sortable", "getElement"]);
  let $sort, $$unsubscribe_sort;
  let $sortDirection, $$unsubscribe_sortDirection;
  forwardEventsBuilder$7(get_current_component());
  let header = getContext("SMUI:data-table:row:header");
  let { use = [] } = $$props;
  let { class: className = "" } = $$props;
  let { numeric = false } = $$props;
  let { checkbox = false } = $$props;
  let { columnId = header ? "SMUI-data-table-column-" + counter$3++ : "SMUI-data-table-unused" } = $$props;
  let { sortable = getContext("SMUI:data-table:sortable") } = $$props;
  let element;
  let internalClasses = {};
  let internalAttrs = {};
  let sort = getContext("SMUI:data-table:sort");
  $$unsubscribe_sort = subscribe(sort, (value) => $sort = value);
  let sortDirection = getContext("SMUI:data-table:sortDirection");
  $$unsubscribe_sortDirection = subscribe(sortDirection, (value) => $sortDirection = value);
  let sortAscendingAriaLabel = getContext("SMUI:data-table:sortAscendingAriaLabel");
  let sortDescendingAriaLabel = getContext("SMUI:data-table:sortDescendingAriaLabel");
  if (sortable) {
    setContext("SMUI:label:context", "data-table:sortable-header-cell");
    setContext("SMUI:icon-button:context", "data-table:sortable-header-cell");
    setContext("SMUI:icon-button:aria-describedby", columnId + "-status-label");
  }
  function getElement() {
    return element;
  }
  if ($$props.use === void 0 && $$bindings.use && use !== void 0)
    $$bindings.use(use);
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.numeric === void 0 && $$bindings.numeric && numeric !== void 0)
    $$bindings.numeric(numeric);
  if ($$props.checkbox === void 0 && $$bindings.checkbox && checkbox !== void 0)
    $$bindings.checkbox(checkbox);
  if ($$props.columnId === void 0 && $$bindings.columnId && columnId !== void 0)
    $$bindings.columnId(columnId);
  if ($$props.sortable === void 0 && $$bindings.sortable && sortable !== void 0)
    $$bindings.sortable(sortable);
  if ($$props.getElement === void 0 && $$bindings.getElement && getElement !== void 0)
    $$bindings.getElement(getElement);
  $$unsubscribe_sort();
  $$unsubscribe_sortDirection();
  return `${header ? `<th${spread([
    {
      class: escape_attribute_value(classMap$7({
        [className]: true,
        "mdc-data-table__header-cell": true,
        "mdc-data-table__header-cell--numeric": numeric,
        "mdc-data-table__header-cell--checkbox": checkbox,
        "mdc-data-table__header-cell--with-sort": sortable,
        "mdc-data-table__header-cell--sorted": sortable && $sort === columnId,
        ...internalClasses
      }))
    },
    { role: "columnheader" },
    { scope: "col" },
    {
      "data-column-id": escape_attribute_value(columnId)
    },
    {
      "aria-sort": escape_attribute_value(sortable ? $sort === columnId ? $sortDirection : "none" : void 0)
    },
    escape_object(internalAttrs),
    escape_object($$restProps)
  ])}${add_attribute("this", element, 0)}>${sortable ? `
      <div class="${"mdc-data-table__header-cell-wrapper"}">${slots.default ? slots.default({}) : ``}
        <div class="${"mdc-data-table__sort-status-label"}" aria-hidden="${"true"}" id="${escape(columnId) + "-status-label"}">${escape($sort === columnId ? $sortDirection === "ascending" ? sortAscendingAriaLabel : sortDescendingAriaLabel : "")}</div></div>
    ` : `${slots.default ? slots.default({}) : ``}`}</th>` : `<td${spread([
    {
      class: escape_attribute_value(classMap$7({
        [className]: true,
        "mdc-data-table__cell": true,
        "mdc-data-table__cell--numeric": numeric,
        "mdc-data-table__cell--checkbox": checkbox,
        ...internalClasses
      }))
    },
    escape_object(internalAttrs),
    escape_object($$restProps)
  ])}${add_attribute("this", element, 0)}>${slots.default ? slots.default({}) : ``}</td>`}`;
});
const Pagination$1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["use", "class", "trailing$use", "trailing$class", "getElement"]);
  let $$slots = compute_slots(slots);
  forwardEventsBuilder$7(get_current_component());
  let { use = [] } = $$props;
  let { class: className = "" } = $$props;
  let { trailing$use = [] } = $$props;
  let { trailing$class = "" } = $$props;
  let element;
  setContext("SMUI:label:context", "data-table:pagination");
  setContext("SMUI:select:context", "data-table:pagination");
  setContext("SMUI:icon-button:context", "data-table:pagination");
  function getElement() {
    return element;
  }
  if ($$props.use === void 0 && $$bindings.use && use !== void 0)
    $$bindings.use(use);
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.trailing$use === void 0 && $$bindings.trailing$use && trailing$use !== void 0)
    $$bindings.trailing$use(trailing$use);
  if ($$props.trailing$class === void 0 && $$bindings.trailing$class && trailing$class !== void 0)
    $$bindings.trailing$class(trailing$class);
  if ($$props.getElement === void 0 && $$bindings.getElement && getElement !== void 0)
    $$bindings.getElement(getElement);
  return `<div${spread([
    {
      class: escape_attribute_value(classMap$7({
        [className]: true,
        "mdc-data-table__pagination": true
      }))
    },
    escape_object(exclude$1($$restProps, ["trailing$"]))
  ])}${add_attribute("this", element, 0)}><div${spread([
    {
      class: escape_attribute_value(classMap$7({
        [trailing$class]: true,
        "mdc-data-table__pagination-trailing": true
      }))
    },
    escape_object(prefixFilter$1($$restProps, "trailing$"))
  ])}>${$$slots.rowsPerPage ? `<div class="${"mdc-data-table__pagination-rows-per-page"}">${slots.rowsPerPage ? slots.rowsPerPage({}) : ``}</div>` : ``}

    <div class="${"mdc-data-table__pagination-navigation"}">${$$slots.total ? `<div class="${"mdc-data-table__pagination-total"}">${slots.total ? slots.total({}) : ``}</div>` : ``}

      ${slots.default ? slots.default({}) : ``}</div></div>
</div>`;
});
const Head = Head$1;
const Body = Body$1;
const Row = Row$1;
const Cell = Cell$1;
const Pagination = Pagination$1;
function classMap$6(classObj) {
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
const oldModifierRegex$6 = /^[a-z]+(?::(?:preventDefault|stopPropagation|passive|nonpassive|capture|once|self))+$/;
const newModifierRegex$6 = /^[^$]+(?:\$(?:preventDefault|stopPropagation|passive|nonpassive|capture|once|self))+$/;
function forwardEventsBuilder$6(component) {
  let $on;
  let events2 = [];
  component.$on = (fullEventType, callback) => {
    let eventType = fullEventType;
    let destructor = () => {
    };
    if ($on) {
      destructor = $on(eventType, callback);
    } else {
      events2.push([eventType, callback]);
    }
    const oldModifierMatch = eventType.match(oldModifierRegex$6);
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
      const oldModifierMatch = eventType.match(oldModifierRegex$6);
      const newModifierMatch = eventType.match(newModifierRegex$6);
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
    for (let i = 0; i < events2.length; i++) {
      $on(events2[i][0], events2[i][1]);
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
const { applyPassive } = events;
const { matches } = ponyfill;
function Ripple(node, { ripple = true, surface = false, unbounded = false, disabled = false, color, active, rippleElement, eventTarget, activeTarget, addClass = (className) => node.classList.add(className), removeClass = (className) => node.classList.remove(className), addStyle = (name, value) => node.style.setProperty(name, value), initPromise = Promise.resolve() } = {}) {
  let instance;
  let addLayoutListener = getContext("SMUI:addLayoutListener");
  let removeLayoutListener;
  let oldActive = active;
  let oldEventTarget = eventTarget;
  let oldActiveTarget = activeTarget;
  function handleProps() {
    if (surface) {
      addClass("mdc-ripple-surface");
      if (color === "primary") {
        addClass("smui-ripple-surface--primary");
        removeClass("smui-ripple-surface--secondary");
      } else if (color === "secondary") {
        removeClass("smui-ripple-surface--primary");
        addClass("smui-ripple-surface--secondary");
      } else {
        removeClass("smui-ripple-surface--primary");
        removeClass("smui-ripple-surface--secondary");
      }
    }
    if (instance && oldActive !== active) {
      oldActive = active;
      if (active) {
        instance.activate();
      } else if (active === false) {
        instance.deactivate();
      }
    }
    if (ripple && !instance) {
      instance = new MDCRippleFoundation({
        addClass,
        browserSupportsCssVars: () => supportsCssVariables(window),
        computeBoundingRect: () => (rippleElement || node).getBoundingClientRect(),
        containsEventTarget: (target) => node.contains(target),
        deregisterDocumentInteractionHandler: (evtType, handler) => document.documentElement.removeEventListener(evtType, handler, applyPassive()),
        deregisterInteractionHandler: (evtType, handler) => (eventTarget || node).removeEventListener(evtType, handler, applyPassive()),
        deregisterResizeHandler: (handler) => window.removeEventListener("resize", handler),
        getWindowPageOffset: () => ({
          x: window.pageXOffset,
          y: window.pageYOffset
        }),
        isSurfaceActive: () => active == null ? matches(activeTarget || node, ":active") : active,
        isSurfaceDisabled: () => !!disabled,
        isUnbounded: () => !!unbounded,
        registerDocumentInteractionHandler: (evtType, handler) => document.documentElement.addEventListener(evtType, handler, applyPassive()),
        registerInteractionHandler: (evtType, handler) => (eventTarget || node).addEventListener(evtType, handler, applyPassive()),
        registerResizeHandler: (handler) => window.addEventListener("resize", handler),
        removeClass,
        updateCssVariable: addStyle
      });
      initPromise.then(() => {
        if (instance) {
          instance.init();
          instance.setUnbounded(unbounded);
        }
      });
    } else if (instance && !ripple) {
      initPromise.then(() => {
        if (instance) {
          instance.destroy();
          instance = void 0;
        }
      });
    }
    if (instance && (oldEventTarget !== eventTarget || oldActiveTarget !== activeTarget)) {
      oldEventTarget = eventTarget;
      oldActiveTarget = activeTarget;
      instance.destroy();
      requestAnimationFrame(() => {
        if (instance) {
          instance.init();
          instance.setUnbounded(unbounded);
        }
      });
    }
    if (!ripple && unbounded) {
      addClass("mdc-ripple-upgraded--unbounded");
    }
  }
  handleProps();
  if (addLayoutListener) {
    removeLayoutListener = addLayoutListener(layout);
  }
  function layout() {
    if (instance) {
      instance.layout();
    }
  }
  return {
    update(props) {
      ({
        ripple,
        surface,
        unbounded,
        disabled,
        color,
        active,
        rippleElement,
        eventTarget,
        activeTarget,
        addClass,
        removeClass,
        addStyle,
        initPromise
      } = Object.assign({ ripple: true, surface: false, unbounded: false, disabled: false, color: void 0, active: void 0, rippleElement: void 0, eventTarget: void 0, activeTarget: void 0, addClass: (className) => node.classList.add(className), removeClass: (className) => node.classList.remove(className), addStyle: (name, value) => node.style.setProperty(name, value), initPromise: Promise.resolve() }, props));
      handleProps();
    },
    destroy() {
      if (instance) {
        instance.destroy();
        instance = void 0;
        removeClass("mdc-ripple-surface");
        removeClass("smui-ripple-surface--primary");
        removeClass("smui-ripple-surface--secondary");
      }
      if (removeLayoutListener) {
        removeLayoutListener();
      }
    }
  };
}
function classMap$5(classObj) {
  return Object.entries(classObj).filter(([name, value]) => name !== "" && value).map(([name]) => name).join(" ");
}
const oldModifierRegex$5 = /^[a-z]+(?::(?:preventDefault|stopPropagation|passive|nonpassive|capture|once|self))+$/;
const newModifierRegex$5 = /^[^$]+(?:\$(?:preventDefault|stopPropagation|passive|nonpassive|capture|once|self))+$/;
function forwardEventsBuilder$5(component) {
  let $on;
  let events2 = [];
  component.$on = (fullEventType, callback) => {
    let eventType = fullEventType;
    let destructor = () => {
    };
    if ($on) {
      destructor = $on(eventType, callback);
    } else {
      events2.push([eventType, callback]);
    }
    const oldModifierMatch = eventType.match(oldModifierRegex$5);
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
      const oldModifierMatch = eventType.match(oldModifierRegex$5);
      const newModifierMatch = eventType.match(newModifierRegex$5);
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
    for (let i = 0; i < events2.length; i++) {
      $on(events2[i][0], events2[i][1]);
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
const MenuSurface = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, [
    "use",
    "class",
    "style",
    "static",
    "anchor",
    "fixed",
    "open",
    "managed",
    "fullWidth",
    "quickOpen",
    "anchorElement",
    "anchorCorner",
    "anchorMargin",
    "maxHeight",
    "horizontallyCenteredOnViewport",
    "isOpen",
    "setOpen",
    "setAbsolutePosition",
    "setIsHoisted",
    "isFixed",
    "getElement"
  ]);
  forwardEventsBuilder$5(get_current_component());
  let { use = [] } = $$props;
  let { class: className = "" } = $$props;
  let { style = "" } = $$props;
  let { static: isStatic = false } = $$props;
  let { anchor = true } = $$props;
  let { fixed = false } = $$props;
  let { open = isStatic } = $$props;
  let { managed = false } = $$props;
  let { fullWidth = false } = $$props;
  let { quickOpen = false } = $$props;
  let { anchorElement = void 0 } = $$props;
  let { anchorCorner = void 0 } = $$props;
  let { anchorMargin = { top: 0, right: 0, bottom: 0, left: 0 } } = $$props;
  let { maxHeight = 0 } = $$props;
  let { horizontallyCenteredOnViewport = false } = $$props;
  let element;
  let instance;
  let internalClasses = {};
  let internalStyles = {};
  setContext("SMUI:list:role", "menu");
  setContext("SMUI:list:item:role", "menuitem");
  onDestroy(() => {
  });
  function isOpen() {
    return open;
  }
  function setOpen(value) {
    open = value;
  }
  function setAbsolutePosition(x, y) {
    return instance.setAbsolutePosition(x, y);
  }
  function setIsHoisted(isHoisted) {
    return instance.setIsHoisted(isHoisted);
  }
  function isFixed() {
    return instance.isFixed();
  }
  function getElement() {
    return element;
  }
  if ($$props.use === void 0 && $$bindings.use && use !== void 0)
    $$bindings.use(use);
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.style === void 0 && $$bindings.style && style !== void 0)
    $$bindings.style(style);
  if ($$props.static === void 0 && $$bindings.static && isStatic !== void 0)
    $$bindings.static(isStatic);
  if ($$props.anchor === void 0 && $$bindings.anchor && anchor !== void 0)
    $$bindings.anchor(anchor);
  if ($$props.fixed === void 0 && $$bindings.fixed && fixed !== void 0)
    $$bindings.fixed(fixed);
  if ($$props.open === void 0 && $$bindings.open && open !== void 0)
    $$bindings.open(open);
  if ($$props.managed === void 0 && $$bindings.managed && managed !== void 0)
    $$bindings.managed(managed);
  if ($$props.fullWidth === void 0 && $$bindings.fullWidth && fullWidth !== void 0)
    $$bindings.fullWidth(fullWidth);
  if ($$props.quickOpen === void 0 && $$bindings.quickOpen && quickOpen !== void 0)
    $$bindings.quickOpen(quickOpen);
  if ($$props.anchorElement === void 0 && $$bindings.anchorElement && anchorElement !== void 0)
    $$bindings.anchorElement(anchorElement);
  if ($$props.anchorCorner === void 0 && $$bindings.anchorCorner && anchorCorner !== void 0)
    $$bindings.anchorCorner(anchorCorner);
  if ($$props.anchorMargin === void 0 && $$bindings.anchorMargin && anchorMargin !== void 0)
    $$bindings.anchorMargin(anchorMargin);
  if ($$props.maxHeight === void 0 && $$bindings.maxHeight && maxHeight !== void 0)
    $$bindings.maxHeight(maxHeight);
  if ($$props.horizontallyCenteredOnViewport === void 0 && $$bindings.horizontallyCenteredOnViewport && horizontallyCenteredOnViewport !== void 0)
    $$bindings.horizontallyCenteredOnViewport(horizontallyCenteredOnViewport);
  if ($$props.isOpen === void 0 && $$bindings.isOpen && isOpen !== void 0)
    $$bindings.isOpen(isOpen);
  if ($$props.setOpen === void 0 && $$bindings.setOpen && setOpen !== void 0)
    $$bindings.setOpen(setOpen);
  if ($$props.setAbsolutePosition === void 0 && $$bindings.setAbsolutePosition && setAbsolutePosition !== void 0)
    $$bindings.setAbsolutePosition(setAbsolutePosition);
  if ($$props.setIsHoisted === void 0 && $$bindings.setIsHoisted && setIsHoisted !== void 0)
    $$bindings.setIsHoisted(setIsHoisted);
  if ($$props.isFixed === void 0 && $$bindings.isFixed && isFixed !== void 0)
    $$bindings.isFixed(isFixed);
  if ($$props.getElement === void 0 && $$bindings.getElement && getElement !== void 0)
    $$bindings.getElement(getElement);
  return `

<div${spread([
    {
      class: escape_attribute_value(classMap$5({
        [className]: true,
        "mdc-menu-surface": true,
        "mdc-menu-surface--fixed": fixed,
        "mdc-menu-surface--open": isStatic,
        "smui-menu-surface--static": isStatic,
        "mdc-menu-surface--fullwidth": fullWidth,
        ...internalClasses
      }))
    },
    {
      style: escape_attribute_value(Object.entries(internalStyles).map(([name, value]) => `${name}: ${value};`).concat([style]).join(" "))
    },
    escape_object($$restProps)
  ])}${add_attribute("this", element, 0)}>${slots.default ? slots.default({}) : ``}
</div>`;
});
function classMap$4(classObj) {
  return Object.entries(classObj).filter(([name, value]) => name !== "" && value).map(([name]) => name).join(" ");
}
const oldModifierRegex$4 = /^[a-z]+(?::(?:preventDefault|stopPropagation|passive|nonpassive|capture|once|self))+$/;
const newModifierRegex$4 = /^[^$]+(?:\$(?:preventDefault|stopPropagation|passive|nonpassive|capture|once|self))+$/;
function forwardEventsBuilder$4(component) {
  let $on;
  let events2 = [];
  component.$on = (fullEventType, callback) => {
    let eventType = fullEventType;
    let destructor = () => {
    };
    if ($on) {
      destructor = $on(eventType, callback);
    } else {
      events2.push([eventType, callback]);
    }
    const oldModifierMatch = eventType.match(oldModifierRegex$4);
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
      const oldModifierMatch = eventType.match(oldModifierRegex$4);
      const newModifierMatch = eventType.match(newModifierRegex$4);
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
    for (let i = 0; i < events2.length; i++) {
      $on(events2[i][0], events2[i][1]);
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
const Menu = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let usePass;
  let $$restProps = compute_rest_props($$props, [
    "use",
    "class",
    "open",
    "isOpen",
    "setOpen",
    "setDefaultFocusState",
    "getSelectedIndex",
    "getElement"
  ]);
  const forwardEvents = forwardEventsBuilder$4(get_current_component());
  let { use = [] } = $$props;
  let { class: className = "" } = $$props;
  let { open = false } = $$props;
  let element;
  let instance;
  function isOpen() {
    return open;
  }
  function setOpen(value) {
    open = value;
  }
  function setDefaultFocusState(focusState) {
    instance.setDefaultFocusState(focusState);
  }
  function getSelectedIndex() {
    return instance.getSelectedIndex();
  }
  function getElement() {
    return element.getElement();
  }
  if ($$props.use === void 0 && $$bindings.use && use !== void 0)
    $$bindings.use(use);
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.open === void 0 && $$bindings.open && open !== void 0)
    $$bindings.open(open);
  if ($$props.isOpen === void 0 && $$bindings.isOpen && isOpen !== void 0)
    $$bindings.isOpen(isOpen);
  if ($$props.setOpen === void 0 && $$bindings.setOpen && setOpen !== void 0)
    $$bindings.setOpen(setOpen);
  if ($$props.setDefaultFocusState === void 0 && $$bindings.setDefaultFocusState && setDefaultFocusState !== void 0)
    $$bindings.setDefaultFocusState(setDefaultFocusState);
  if ($$props.getSelectedIndex === void 0 && $$bindings.getSelectedIndex && getSelectedIndex !== void 0)
    $$bindings.getSelectedIndex(getSelectedIndex);
  if ($$props.getElement === void 0 && $$bindings.getElement && getElement !== void 0)
    $$bindings.getElement(getElement);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    usePass = [forwardEvents, ...use];
    $$rendered = `${validate_component(MenuSurface, "MenuSurface").$$render($$result, Object.assign({ use: usePass }, {
      class: classMap$4({ [className]: true, "mdc-menu": true })
    }, $$restProps, { this: element }, { open }), {
      this: ($$value) => {
        element = $$value;
        $$settled = false;
      },
      open: ($$value) => {
        open = $$value;
        $$settled = false;
      }
    }, {
      default: () => `${slots.default ? slots.default({}) : ``}`
    })}`;
  } while (!$$settled);
  return $$rendered;
});
const Div$2 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["use", "getElement"]);
  let { use = [] } = $$props;
  forwardEventsBuilder$4(get_current_component());
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
const { Object: Object_1$3 } = globals;
const internals$1 = {
  component: Div$2,
  class: "",
  classMap: {},
  contexts: {},
  props: {}
};
const ClassAdder$1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["use", "class", "component", "getElement"]);
  let { use = [] } = $$props;
  let { class: className = "" } = $$props;
  let element;
  const smuiClass = internals$1.class;
  const smuiClassMap = {};
  const smuiClassUnsubscribes = [];
  const contexts = internals$1.contexts;
  const props = internals$1.props;
  let { component = internals$1.component } = $$props;
  Object.entries(internals$1.classMap).forEach(([name, context]) => {
    const store = getContext(context);
    if (store && "subscribe" in store) {
      smuiClassUnsubscribes.push(store.subscribe((value) => {
        smuiClassMap[name] = value;
      }));
    }
  });
  const forwardEvents = forwardEventsBuilder$4(get_current_component());
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
    $$rendered = `${validate_component(component || missing_component, "svelte:component").$$render($$result, Object_1$3.assign({ use: [forwardEvents, ...use] }, {
      class: classMap$4({
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
const defaults$1 = Object.assign({}, internals$1);
function classAdderBuilder$1(props) {
  return new Proxy(ClassAdder$1, {
    construct: function(target, args) {
      Object.assign(internals$1, defaults$1, props);
      return new target(...args);
    },
    get: function(target, prop) {
      Object.assign(internals$1, defaults$1, props);
      return target[prop];
    }
  });
}
function classMap$3(classObj) {
  return Object.entries(classObj).filter(([name, value]) => name !== "" && value).map(([name]) => name).join(" ");
}
function dispatch(element, eventType, detail, eventInit = { bubbles: true }, duplicateEventForMDC = false) {
  if (typeof Event !== "undefined" && element) {
    const event = new CustomEvent(eventType, Object.assign(Object.assign({}, eventInit), { detail }));
    element === null || element === void 0 ? void 0 : element.dispatchEvent(event);
    if (duplicateEventForMDC && eventType.startsWith("SMUI")) {
      const duplicateEvent = new CustomEvent(eventType.replace(/^SMUI/g, () => "MDC"), Object.assign(Object.assign({}, eventInit), { detail }));
      element === null || element === void 0 ? void 0 : element.dispatchEvent(duplicateEvent);
      if (duplicateEvent.defaultPrevented) {
        event.preventDefault();
      }
    }
    return event;
  }
}
const oldModifierRegex$3 = /^[a-z]+(?::(?:preventDefault|stopPropagation|passive|nonpassive|capture|once|self))+$/;
const newModifierRegex$3 = /^[^$]+(?:\$(?:preventDefault|stopPropagation|passive|nonpassive|capture|once|self))+$/;
function forwardEventsBuilder$3(component) {
  let $on;
  let events2 = [];
  component.$on = (fullEventType, callback) => {
    let eventType = fullEventType;
    let destructor = () => {
    };
    if ($on) {
      destructor = $on(eventType, callback);
    } else {
      events2.push([eventType, callback]);
    }
    const oldModifierMatch = eventType.match(oldModifierRegex$3);
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
      const oldModifierMatch = eventType.match(oldModifierRegex$3);
      const newModifierMatch = eventType.match(newModifierRegex$3);
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
    for (let i = 0; i < events2.length; i++) {
      $on(events2[i][0], events2[i][1]);
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
const A$1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["use", "href", "getElement"]);
  let { use = [] } = $$props;
  let { href = "javascript:void(0);" } = $$props;
  forwardEventsBuilder$3(get_current_component());
  let element;
  function getElement() {
    return element;
  }
  if ($$props.use === void 0 && $$bindings.use && use !== void 0)
    $$bindings.use(use);
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  if ($$props.getElement === void 0 && $$bindings.getElement && getElement !== void 0)
    $$bindings.getElement(getElement);
  return `<a${spread([{ href: escape_attribute_value(href) }, escape_object($$restProps)])}${add_attribute("this", element, 0)}>${slots.default ? slots.default({}) : ``}</a>`;
});
const Div$1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["use", "getElement"]);
  let { use = [] } = $$props;
  forwardEventsBuilder$3(get_current_component());
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
const H3$1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["use", "getElement"]);
  let { use = [] } = $$props;
  forwardEventsBuilder$3(get_current_component());
  let element;
  function getElement() {
    return element;
  }
  if ($$props.use === void 0 && $$bindings.use && use !== void 0)
    $$bindings.use(use);
  if ($$props.getElement === void 0 && $$bindings.getElement && getElement !== void 0)
    $$bindings.getElement(getElement);
  return `<h3${spread([escape_object($$restProps)])}${add_attribute("this", element, 0)}>${slots.default ? slots.default({}) : ``}
</h3>`;
});
const Li$1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["use", "getElement"]);
  let { use = [] } = $$props;
  forwardEventsBuilder$3(get_current_component());
  let element;
  function getElement() {
    return element;
  }
  if ($$props.use === void 0 && $$bindings.use && use !== void 0)
    $$bindings.use(use);
  if ($$props.getElement === void 0 && $$bindings.getElement && getElement !== void 0)
    $$bindings.getElement(getElement);
  return `<li${spread([escape_object($$restProps)])}${add_attribute("this", element, 0)}>${slots.default ? slots.default({}) : ``}
</li>`;
});
const Nav$1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["use", "getElement"]);
  let { use = [] } = $$props;
  forwardEventsBuilder$3(get_current_component());
  let element;
  function getElement() {
    return element;
  }
  if ($$props.use === void 0 && $$bindings.use && use !== void 0)
    $$bindings.use(use);
  if ($$props.getElement === void 0 && $$bindings.getElement && getElement !== void 0)
    $$bindings.getElement(getElement);
  return `<nav${spread([escape_object($$restProps)])}${add_attribute("this", element, 0)}>${slots.default ? slots.default({}) : ``}
</nav>`;
});
const Span$1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["use", "getElement"]);
  let { use = [] } = $$props;
  forwardEventsBuilder$3(get_current_component());
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
const Ul$1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["use", "getElement"]);
  let { use = [] } = $$props;
  forwardEventsBuilder$3(get_current_component());
  let element;
  function getElement() {
    return element;
  }
  if ($$props.use === void 0 && $$bindings.use && use !== void 0)
    $$bindings.use(use);
  if ($$props.getElement === void 0 && $$bindings.getElement && getElement !== void 0)
    $$bindings.getElement(getElement);
  return `<ul${spread([escape_object($$restProps)])}${add_attribute("this", element, 0)}>${slots.default ? slots.default({}) : ``}
</ul>`;
});
const A = A$1;
const Div = Div$1;
const H3 = H3$1;
const Li = Li$1;
const Nav = Nav$1;
const Span = Span$1;
const Ul = Ul$1;
const List = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, [
    "use",
    "class",
    "nonInteractive",
    "dense",
    "textualList",
    "avatarList",
    "iconList",
    "imageList",
    "thumbnailList",
    "videoList",
    "twoLine",
    "threeLine",
    "vertical",
    "wrapFocus",
    "singleSelection",
    "selectedIndex",
    "radioList",
    "checkList",
    "hasTypeahead",
    "component",
    "layout",
    "setEnabled",
    "getTypeaheadInProgress",
    "getSelectedIndex",
    "getFocusedItemIndex",
    "getElement"
  ]);
  var _a;
  const forwardEvents = forwardEventsBuilder$3(get_current_component());
  let { use = [] } = $$props;
  let { class: className = "" } = $$props;
  let { nonInteractive = false } = $$props;
  let { dense = false } = $$props;
  let { textualList = false } = $$props;
  let { avatarList = false } = $$props;
  let { iconList = false } = $$props;
  let { imageList = false } = $$props;
  let { thumbnailList = false } = $$props;
  let { videoList = false } = $$props;
  let { twoLine = false } = $$props;
  let { threeLine = false } = $$props;
  let { vertical = true } = $$props;
  let { wrapFocus = (_a = getContext("SMUI:list:wrapFocus")) !== null && _a !== void 0 ? _a : false } = $$props;
  let { singleSelection = false } = $$props;
  let { selectedIndex = -1 } = $$props;
  let { radioList = false } = $$props;
  let { checkList = false } = $$props;
  let { hasTypeahead = false } = $$props;
  let element;
  let instance;
  let role = getContext("SMUI:list:role");
  let nav = getContext("SMUI:list:nav");
  let selectionDialog = getContext("SMUI:dialog:selection");
  let addLayoutListener = getContext("SMUI:addLayoutListener");
  let removeLayoutListener;
  let { component = nav ? Nav : Ul } = $$props;
  setContext("SMUI:list:nonInteractive", nonInteractive);
  setContext("SMUI:separator:context", "list");
  if (!role) {
    if (singleSelection) {
      role = "listbox";
      setContext("SMUI:list:item:role", "option");
    } else if (radioList) {
      role = "radiogroup";
      setContext("SMUI:list:item:role", "radio");
    } else if (checkList) {
      role = "group";
      setContext("SMUI:list:item:role", "checkbox");
    } else {
      role = "list";
      setContext("SMUI:list:item:role", void 0);
    }
  }
  if (addLayoutListener) {
    removeLayoutListener = addLayoutListener(layout);
  }
  onDestroy(() => {
    if (removeLayoutListener) {
      removeLayoutListener();
    }
  });
  function layout() {
    return instance.layout();
  }
  function setEnabled(itemIndex, isEnabled) {
    return instance.setEnabled(itemIndex, isEnabled);
  }
  function getTypeaheadInProgress() {
    return instance.isTypeaheadInProgress();
  }
  function getSelectedIndex() {
    return instance.getSelectedIndex();
  }
  function getFocusedItemIndex() {
    return instance.getFocusedItemIndex();
  }
  function getElement() {
    return element.getElement();
  }
  if ($$props.use === void 0 && $$bindings.use && use !== void 0)
    $$bindings.use(use);
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.nonInteractive === void 0 && $$bindings.nonInteractive && nonInteractive !== void 0)
    $$bindings.nonInteractive(nonInteractive);
  if ($$props.dense === void 0 && $$bindings.dense && dense !== void 0)
    $$bindings.dense(dense);
  if ($$props.textualList === void 0 && $$bindings.textualList && textualList !== void 0)
    $$bindings.textualList(textualList);
  if ($$props.avatarList === void 0 && $$bindings.avatarList && avatarList !== void 0)
    $$bindings.avatarList(avatarList);
  if ($$props.iconList === void 0 && $$bindings.iconList && iconList !== void 0)
    $$bindings.iconList(iconList);
  if ($$props.imageList === void 0 && $$bindings.imageList && imageList !== void 0)
    $$bindings.imageList(imageList);
  if ($$props.thumbnailList === void 0 && $$bindings.thumbnailList && thumbnailList !== void 0)
    $$bindings.thumbnailList(thumbnailList);
  if ($$props.videoList === void 0 && $$bindings.videoList && videoList !== void 0)
    $$bindings.videoList(videoList);
  if ($$props.twoLine === void 0 && $$bindings.twoLine && twoLine !== void 0)
    $$bindings.twoLine(twoLine);
  if ($$props.threeLine === void 0 && $$bindings.threeLine && threeLine !== void 0)
    $$bindings.threeLine(threeLine);
  if ($$props.vertical === void 0 && $$bindings.vertical && vertical !== void 0)
    $$bindings.vertical(vertical);
  if ($$props.wrapFocus === void 0 && $$bindings.wrapFocus && wrapFocus !== void 0)
    $$bindings.wrapFocus(wrapFocus);
  if ($$props.singleSelection === void 0 && $$bindings.singleSelection && singleSelection !== void 0)
    $$bindings.singleSelection(singleSelection);
  if ($$props.selectedIndex === void 0 && $$bindings.selectedIndex && selectedIndex !== void 0)
    $$bindings.selectedIndex(selectedIndex);
  if ($$props.radioList === void 0 && $$bindings.radioList && radioList !== void 0)
    $$bindings.radioList(radioList);
  if ($$props.checkList === void 0 && $$bindings.checkList && checkList !== void 0)
    $$bindings.checkList(checkList);
  if ($$props.hasTypeahead === void 0 && $$bindings.hasTypeahead && hasTypeahead !== void 0)
    $$bindings.hasTypeahead(hasTypeahead);
  if ($$props.component === void 0 && $$bindings.component && component !== void 0)
    $$bindings.component(component);
  if ($$props.layout === void 0 && $$bindings.layout && layout !== void 0)
    $$bindings.layout(layout);
  if ($$props.setEnabled === void 0 && $$bindings.setEnabled && setEnabled !== void 0)
    $$bindings.setEnabled(setEnabled);
  if ($$props.getTypeaheadInProgress === void 0 && $$bindings.getTypeaheadInProgress && getTypeaheadInProgress !== void 0)
    $$bindings.getTypeaheadInProgress(getTypeaheadInProgress);
  if ($$props.getSelectedIndex === void 0 && $$bindings.getSelectedIndex && getSelectedIndex !== void 0)
    $$bindings.getSelectedIndex(getSelectedIndex);
  if ($$props.getFocusedItemIndex === void 0 && $$bindings.getFocusedItemIndex && getFocusedItemIndex !== void 0)
    $$bindings.getFocusedItemIndex(getFocusedItemIndex);
  if ($$props.getElement === void 0 && $$bindings.getElement && getElement !== void 0)
    $$bindings.getElement(getElement);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `${validate_component(component || missing_component, "svelte:component").$$render($$result, Object.assign({ use: [forwardEvents, ...use] }, {
      class: classMap$3({
        [className]: true,
        "mdc-deprecated-list": true,
        "mdc-deprecated-list--non-interactive": nonInteractive,
        "mdc-deprecated-list--dense": dense,
        "mdc-deprecated-list--textual-list": textualList,
        "mdc-deprecated-list--avatar-list": avatarList || selectionDialog,
        "mdc-deprecated-list--icon-list": iconList,
        "mdc-deprecated-list--image-list": imageList,
        "mdc-deprecated-list--thumbnail-list": thumbnailList,
        "mdc-deprecated-list--video-list": videoList,
        "mdc-deprecated-list--two-line": twoLine,
        "smui-list--three-line": threeLine && !twoLine
      })
    }, { role }, $$restProps, { this: element }), {
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
const { Object: Object_1$2 } = globals;
let counter$2 = 0;
const Item$1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let tabindex;
  let $$restProps = compute_rest_props($$props, [
    "use",
    "class",
    "style",
    "color",
    "nonInteractive",
    "ripple",
    "activated",
    "role",
    "selected",
    "disabled",
    "skipRestoreFocus",
    "tabindex",
    "inputId",
    "href",
    "component",
    "action",
    "getPrimaryText",
    "getElement"
  ]);
  var _a;
  const forwardEvents = forwardEventsBuilder$3(get_current_component());
  let uninitializedValue = () => {
  };
  function isUninitializedValue(value) {
    return value === uninitializedValue;
  }
  let { use = [] } = $$props;
  let { class: className = "" } = $$props;
  let { style = "" } = $$props;
  let { color = void 0 } = $$props;
  let { nonInteractive = (_a = getContext("SMUI:list:nonInteractive")) !== null && _a !== void 0 ? _a : false } = $$props;
  setContext("SMUI:list:nonInteractive", void 0);
  let { ripple = !nonInteractive } = $$props;
  let { activated = false } = $$props;
  let { role = getContext("SMUI:list:item:role") } = $$props;
  setContext("SMUI:list:item:role", void 0);
  let { selected = false } = $$props;
  let { disabled = false } = $$props;
  let { skipRestoreFocus = false } = $$props;
  let { tabindex: tabindexProp = uninitializedValue } = $$props;
  let { inputId = "SMUI-form-field-list-" + counter$2++ } = $$props;
  let { href = void 0 } = $$props;
  let element;
  let internalClasses = {};
  let internalStyles = {};
  let internalAttrs = {};
  let input;
  let nav = getContext("SMUI:list:item:nav");
  let { component = nav ? href ? A : Span : Li } = $$props;
  setContext("SMUI:generic:input:props", { id: inputId });
  setContext("SMUI:separator:context", void 0);
  onDestroy(() => {
  });
  function addClass(className2) {
    if (!internalClasses[className2]) {
      internalClasses[className2] = true;
    }
  }
  function removeClass(className2) {
    if (!(className2 in internalClasses) || internalClasses[className2]) {
      internalClasses[className2] = false;
    }
  }
  function addStyle(name, value) {
    if (internalStyles[name] != value) {
      if (value === "" || value == null) {
        delete internalStyles[name];
        internalStyles = internalStyles;
      } else {
        internalStyles[name] = value;
      }
    }
  }
  function action(e) {
    if (!disabled) {
      dispatch(getElement(), "SMUI:action", e);
    }
  }
  function getPrimaryText() {
    var _a2, _b, _c;
    const element2 = getElement();
    const primaryText = element2.querySelector(".mdc-deprecated-list-item__primary-text");
    if (primaryText) {
      return (_a2 = primaryText.textContent) !== null && _a2 !== void 0 ? _a2 : "";
    }
    const text = element2.querySelector(".mdc-deprecated-list-item__text");
    if (text) {
      return (_b = text.textContent) !== null && _b !== void 0 ? _b : "";
    }
    return (_c = element2.textContent) !== null && _c !== void 0 ? _c : "";
  }
  function getElement() {
    return element.getElement();
  }
  if ($$props.use === void 0 && $$bindings.use && use !== void 0)
    $$bindings.use(use);
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.style === void 0 && $$bindings.style && style !== void 0)
    $$bindings.style(style);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.nonInteractive === void 0 && $$bindings.nonInteractive && nonInteractive !== void 0)
    $$bindings.nonInteractive(nonInteractive);
  if ($$props.ripple === void 0 && $$bindings.ripple && ripple !== void 0)
    $$bindings.ripple(ripple);
  if ($$props.activated === void 0 && $$bindings.activated && activated !== void 0)
    $$bindings.activated(activated);
  if ($$props.role === void 0 && $$bindings.role && role !== void 0)
    $$bindings.role(role);
  if ($$props.selected === void 0 && $$bindings.selected && selected !== void 0)
    $$bindings.selected(selected);
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0)
    $$bindings.disabled(disabled);
  if ($$props.skipRestoreFocus === void 0 && $$bindings.skipRestoreFocus && skipRestoreFocus !== void 0)
    $$bindings.skipRestoreFocus(skipRestoreFocus);
  if ($$props.tabindex === void 0 && $$bindings.tabindex && tabindexProp !== void 0)
    $$bindings.tabindex(tabindexProp);
  if ($$props.inputId === void 0 && $$bindings.inputId && inputId !== void 0)
    $$bindings.inputId(inputId);
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  if ($$props.component === void 0 && $$bindings.component && component !== void 0)
    $$bindings.component(component);
  if ($$props.action === void 0 && $$bindings.action && action !== void 0)
    $$bindings.action(action);
  if ($$props.getPrimaryText === void 0 && $$bindings.getPrimaryText && getPrimaryText !== void 0)
    $$bindings.getPrimaryText(getPrimaryText);
  if ($$props.getElement === void 0 && $$bindings.getElement && getElement !== void 0)
    $$bindings.getElement(getElement);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    tabindex = isUninitializedValue(tabindexProp) ? !nonInteractive && !disabled && (selected || input) ? 0 : -1 : tabindexProp;
    $$rendered = `${validate_component(component || missing_component, "svelte:component").$$render($$result, Object_1$2.assign({
      use: [
        ...nonInteractive ? [] : [
          [
            Ripple,
            {
              ripple: !input,
              unbounded: false,
              color: (activated || selected) && color == null ? "primary" : color,
              disabled,
              addClass,
              removeClass,
              addStyle
            }
          ]
        ],
        forwardEvents,
        ...use
      ]
    }, {
      class: classMap$3({
        [className]: true,
        "mdc-deprecated-list-item": true,
        "mdc-deprecated-list-item--activated": activated,
        "mdc-deprecated-list-item--selected": selected,
        "mdc-deprecated-list-item--disabled": disabled,
        "mdc-menu-item--selected": !nav && role === "menuitem" && selected,
        "smui-menu-item--non-interactive": nonInteractive,
        ...internalClasses
      })
    }, {
      style: Object.entries(internalStyles).map(([name, value]) => `${name}: ${value};`).concat([style]).join(" ")
    }, nav && activated ? { "aria-current": "page" } : {}, !nav ? { role } : {}, !nav && role === "option" ? {
      "aria-selected": selected ? "true" : "false"
    } : {}, !nav && (role === "radio" || role === "checkbox") ? {
      "aria-checked": "false"
    } : {}, !nav ? {
      "aria-disabled": disabled ? "true" : "false"
    } : {}, {
      "data-menu-item-skip-restore-focus": skipRestoreFocus || void 0
    }, { tabindex }, { href }, internalAttrs, $$restProps, { this: element }), {
      this: ($$value) => {
        element = $$value;
        $$settled = false;
      }
    }, {
      default: () => `${ripple ? `<span class="${"mdc-deprecated-list-item__ripple"}"></span>` : ``}${slots.default ? slots.default({}) : ``}`
    })}`;
  } while (!$$settled);
  return $$rendered;
});
const { Object: Object_1$1 } = globals;
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
  const forwardEvents = forwardEventsBuilder$3(get_current_component());
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
    $$rendered = `${validate_component(component || missing_component, "svelte:component").$$render($$result, Object_1$1.assign({ use: [forwardEvents, ...use] }, {
      class: classMap$3({
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
classAdderBuilder({
  class: "mdc-deprecated-list-item__text",
  component: Span
});
classAdderBuilder({
  class: "mdc-deprecated-list-item__primary-text",
  component: Span
});
classAdderBuilder({
  class: "mdc-deprecated-list-item__secondary-text",
  component: Span
});
const Graphic$1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["use", "class", "getElement"]);
  forwardEventsBuilder$3(get_current_component());
  let { use = [] } = $$props;
  let { class: className = "" } = $$props;
  let element;
  let menuSelectionGroup = getContext("SMUI:list:graphic:menu-selection-group");
  function getElement() {
    return element;
  }
  if ($$props.use === void 0 && $$bindings.use && use !== void 0)
    $$bindings.use(use);
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.getElement === void 0 && $$bindings.getElement && getElement !== void 0)
    $$bindings.getElement(getElement);
  return `<span${spread([
    {
      class: escape_attribute_value(classMap$3({
        [className]: true,
        "mdc-deprecated-list-item__graphic": true,
        "mdc-menu__selection-group-icon": menuSelectionGroup
      }))
    },
    escape_object($$restProps)
  ])}${add_attribute("this", element, 0)}>${slots.default ? slots.default({}) : ``}</span>`;
});
classAdderBuilder({
  class: "mdc-deprecated-list-item__meta",
  component: Span
});
classAdderBuilder({
  class: "mdc-deprecated-list-group",
  component: Div
});
classAdderBuilder({
  class: "mdc-deprecated-list-group__subheader",
  component: H3
});
const Item = Item$1;
const Graphic = Graphic$1;
classAdderBuilder$1({
  class: "mdc-menu__selection-group-icon",
  component: Graphic
});
function classMap$2(classObj) {
  return Object.entries(classObj).filter(([name, value]) => name !== "" && value).map(([name]) => name).join(" ");
}
const oldModifierRegex$2 = /^[a-z]+(?::(?:preventDefault|stopPropagation|passive|nonpassive|capture|once|self))+$/;
const newModifierRegex$2 = /^[^$]+(?:\$(?:preventDefault|stopPropagation|passive|nonpassive|capture|once|self))+$/;
function forwardEventsBuilder$2(component) {
  let $on;
  let events2 = [];
  component.$on = (fullEventType, callback) => {
    let eventType = fullEventType;
    let destructor = () => {
    };
    if ($on) {
      destructor = $on(eventType, callback);
    } else {
      events2.push([eventType, callback]);
    }
    const oldModifierMatch = eventType.match(oldModifierRegex$2);
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
      const oldModifierMatch = eventType.match(oldModifierRegex$2);
      const newModifierMatch = eventType.match(newModifierRegex$2);
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
    for (let i = 0; i < events2.length; i++) {
      $on(events2[i][0], events2[i][1]);
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
const FloatingLabel = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, [
    "use",
    "class",
    "style",
    "for",
    "floatAbove",
    "required",
    "wrapped",
    "shake",
    "float",
    "setRequired",
    "getWidth",
    "getElement"
  ]);
  var _a;
  forwardEventsBuilder$2(get_current_component());
  let { use = [] } = $$props;
  let { class: className = "" } = $$props;
  let { style = "" } = $$props;
  let { for: forId = void 0 } = $$props;
  let { floatAbove = false } = $$props;
  let { required = false } = $$props;
  let { wrapped = false } = $$props;
  let element;
  let instance;
  let internalClasses = {};
  let internalStyles = {};
  let inputProps = (_a = getContext("SMUI:generic:input:props")) !== null && _a !== void 0 ? _a : {};
  function shake(shouldShake) {
    instance.shake(shouldShake);
  }
  function float(shouldFloat) {
    floatAbove = shouldFloat;
  }
  function setRequired(isRequired) {
    required = isRequired;
  }
  function getWidth() {
    return instance.getWidth();
  }
  function getElement() {
    return element;
  }
  if ($$props.use === void 0 && $$bindings.use && use !== void 0)
    $$bindings.use(use);
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.style === void 0 && $$bindings.style && style !== void 0)
    $$bindings.style(style);
  if ($$props.for === void 0 && $$bindings.for && forId !== void 0)
    $$bindings.for(forId);
  if ($$props.floatAbove === void 0 && $$bindings.floatAbove && floatAbove !== void 0)
    $$bindings.floatAbove(floatAbove);
  if ($$props.required === void 0 && $$bindings.required && required !== void 0)
    $$bindings.required(required);
  if ($$props.wrapped === void 0 && $$bindings.wrapped && wrapped !== void 0)
    $$bindings.wrapped(wrapped);
  if ($$props.shake === void 0 && $$bindings.shake && shake !== void 0)
    $$bindings.shake(shake);
  if ($$props.float === void 0 && $$bindings.float && float !== void 0)
    $$bindings.float(float);
  if ($$props.setRequired === void 0 && $$bindings.setRequired && setRequired !== void 0)
    $$bindings.setRequired(setRequired);
  if ($$props.getWidth === void 0 && $$bindings.getWidth && getWidth !== void 0)
    $$bindings.getWidth(getWidth);
  if ($$props.getElement === void 0 && $$bindings.getElement && getElement !== void 0)
    $$bindings.getElement(getElement);
  return `${wrapped ? `<span${spread([
    {
      class: escape_attribute_value(classMap$2({
        [className]: true,
        "mdc-floating-label": true,
        "mdc-floating-label--float-above": floatAbove,
        "mdc-floating-label--required": required,
        ...internalClasses
      }))
    },
    {
      style: escape_attribute_value(Object.entries(internalStyles).map(([name, value]) => `${name}: ${value};`).concat([style]).join(" "))
    },
    escape_object($$restProps)
  ])}${add_attribute("this", element, 0)}>${slots.default ? slots.default({}) : ``}</span>` : `<label${spread([
    {
      class: escape_attribute_value(classMap$2({
        [className]: true,
        "mdc-floating-label": true,
        "mdc-floating-label--float-above": floatAbove,
        "mdc-floating-label--required": required,
        ...internalClasses
      }))
    },
    {
      style: escape_attribute_value(Object.entries(internalStyles).map(([name, value]) => `${name}: ${value};`).concat([style]).join(" "))
    },
    {
      for: escape_attribute_value(forId || (inputProps ? inputProps.id : void 0))
    },
    escape_object($$restProps)
  ])}${add_attribute("this", element, 0)}>${slots.default ? slots.default({}) : ``}</label>`}`;
});
function classMap$1(classObj) {
  return Object.entries(classObj).filter(([name, value]) => name !== "" && value).map(([name]) => name).join(" ");
}
const oldModifierRegex$1 = /^[a-z]+(?::(?:preventDefault|stopPropagation|passive|nonpassive|capture|once|self))+$/;
const newModifierRegex$1 = /^[^$]+(?:\$(?:preventDefault|stopPropagation|passive|nonpassive|capture|once|self))+$/;
function forwardEventsBuilder$1(component) {
  let $on;
  let events2 = [];
  component.$on = (fullEventType, callback) => {
    let eventType = fullEventType;
    let destructor = () => {
    };
    if ($on) {
      destructor = $on(eventType, callback);
    } else {
      events2.push([eventType, callback]);
    }
    const oldModifierMatch = eventType.match(oldModifierRegex$1);
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
      const oldModifierMatch = eventType.match(oldModifierRegex$1);
      const newModifierMatch = eventType.match(newModifierRegex$1);
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
    for (let i = 0; i < events2.length; i++) {
      $on(events2[i][0], events2[i][1]);
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
const LineRipple = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, [
    "use",
    "class",
    "style",
    "active",
    "activate",
    "deactivate",
    "setRippleCenter",
    "getElement"
  ]);
  forwardEventsBuilder$1(get_current_component());
  let { use = [] } = $$props;
  let { class: className = "" } = $$props;
  let { style = "" } = $$props;
  let { active = false } = $$props;
  let element;
  let instance;
  let internalClasses = {};
  let internalStyles = {};
  function activate() {
    instance.activate();
  }
  function deactivate() {
    instance.deactivate();
  }
  function setRippleCenter(xCoordinate) {
    instance.setRippleCenter(xCoordinate);
  }
  function getElement() {
    return element;
  }
  if ($$props.use === void 0 && $$bindings.use && use !== void 0)
    $$bindings.use(use);
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.style === void 0 && $$bindings.style && style !== void 0)
    $$bindings.style(style);
  if ($$props.active === void 0 && $$bindings.active && active !== void 0)
    $$bindings.active(active);
  if ($$props.activate === void 0 && $$bindings.activate && activate !== void 0)
    $$bindings.activate(activate);
  if ($$props.deactivate === void 0 && $$bindings.deactivate && deactivate !== void 0)
    $$bindings.deactivate(deactivate);
  if ($$props.setRippleCenter === void 0 && $$bindings.setRippleCenter && setRippleCenter !== void 0)
    $$bindings.setRippleCenter(setRippleCenter);
  if ($$props.getElement === void 0 && $$bindings.getElement && getElement !== void 0)
    $$bindings.getElement(getElement);
  return `<div${spread([
    {
      class: escape_attribute_value(classMap$1({
        [className]: true,
        "mdc-line-ripple": true,
        "mdc-line-ripple--active": active,
        ...internalClasses
      }))
    },
    {
      style: escape_attribute_value(Object.entries(internalStyles).map(([name, value]) => `${name}: ${value};`).concat([style]).join(" "))
    },
    escape_object($$restProps)
  ])}${add_attribute("this", element, 0)}></div>`;
});
function classMap(classObj) {
  return Object.entries(classObj).filter(([name, value]) => name !== "" && value).map(([name]) => name).join(" ");
}
const oldModifierRegex = /^[a-z]+(?::(?:preventDefault|stopPropagation|passive|nonpassive|capture|once|self))+$/;
const newModifierRegex = /^[^$]+(?:\$(?:preventDefault|stopPropagation|passive|nonpassive|capture|once|self))+$/;
function forwardEventsBuilder(component) {
  let $on;
  let events2 = [];
  component.$on = (fullEventType, callback) => {
    let eventType = fullEventType;
    let destructor = () => {
    };
    if ($on) {
      destructor = $on(eventType, callback);
    } else {
      events2.push([eventType, callback]);
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
    for (let i = 0; i < events2.length; i++) {
      $on(events2[i][0], events2[i][1]);
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
const NotchedOutline = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["use", "class", "notched", "noLabel", "notch", "closeNotch", "getElement"]);
  forwardEventsBuilder(get_current_component());
  let { use = [] } = $$props;
  let { class: className = "" } = $$props;
  let { notched = false } = $$props;
  let { noLabel = false } = $$props;
  let element;
  let instance;
  let internalClasses = {};
  let notchStyles = {};
  function removeClass(className2) {
    if (!(className2 in internalClasses) || internalClasses[className2]) {
      internalClasses[className2] = false;
    }
  }
  function notch(notchWidth) {
    instance.notch(notchWidth);
  }
  function closeNotch() {
    instance.closeNotch();
  }
  function getElement() {
    return element;
  }
  if ($$props.use === void 0 && $$bindings.use && use !== void 0)
    $$bindings.use(use);
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.notched === void 0 && $$bindings.notched && notched !== void 0)
    $$bindings.notched(notched);
  if ($$props.noLabel === void 0 && $$bindings.noLabel && noLabel !== void 0)
    $$bindings.noLabel(noLabel);
  if ($$props.notch === void 0 && $$bindings.notch && notch !== void 0)
    $$bindings.notch(notch);
  if ($$props.closeNotch === void 0 && $$bindings.closeNotch && closeNotch !== void 0)
    $$bindings.closeNotch(closeNotch);
  if ($$props.getElement === void 0 && $$bindings.getElement && getElement !== void 0)
    $$bindings.getElement(getElement);
  {
    {
      removeClass("mdc-notched-outline--upgraded");
    }
  }
  return `<div${spread([
    {
      class: escape_attribute_value(classMap({
        [className]: true,
        "mdc-notched-outline": true,
        "mdc-notched-outline--notched": notched,
        "mdc-notched-outline--no-label": noLabel,
        ...internalClasses
      }))
    },
    escape_object($$restProps)
  ])}${add_attribute("this", element, 0)}><div class="${"mdc-notched-outline__leading"}"></div>
  ${!noLabel ? `<div class="${"mdc-notched-outline__notch"}"${add_attribute("style", Object.entries(notchStyles).map(([name, value]) => `${name}: ${value};`).join(" "), 0)}>${slots.default ? slots.default({}) : ``}</div>` : ``}
  <div class="${"mdc-notched-outline__trailing"}"></div>
</div>`;
});
let counter$1 = 0;
const HelperText = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["use", "class", "id", "persistent", "validationMsg", "getElement"]);
  forwardEventsBuilder$6(get_current_component());
  let { use = [] } = $$props;
  let { class: className = "" } = $$props;
  let { id = "SMUI-select-helper-text-" + counter$1++ } = $$props;
  let { persistent = false } = $$props;
  let { validationMsg = false } = $$props;
  let element;
  let internalClasses = {};
  let internalAttrs = {};
  function getElement() {
    return element;
  }
  if ($$props.use === void 0 && $$bindings.use && use !== void 0)
    $$bindings.use(use);
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  if ($$props.persistent === void 0 && $$bindings.persistent && persistent !== void 0)
    $$bindings.persistent(persistent);
  if ($$props.validationMsg === void 0 && $$bindings.validationMsg && validationMsg !== void 0)
    $$bindings.validationMsg(validationMsg);
  if ($$props.getElement === void 0 && $$bindings.getElement && getElement !== void 0)
    $$bindings.getElement(getElement);
  return `<div${spread([
    {
      class: escape_attribute_value(classMap$6({
        [className]: true,
        "mdc-select-helper-text": true,
        "mdc-select-helper-text--validation-msg": validationMsg,
        "mdc-select-helper-text--validation-msg-persistent": persistent,
        ...internalClasses
      }))
    },
    {
      "aria-hidden": escape_attribute_value(persistent ? void 0 : "true")
    },
    { id: escape_attribute_value(id) },
    escape_object(internalAttrs),
    escape_object($$restProps)
  ])}${add_attribute("this", element, 0)}>${`${slots.default ? slots.default({}) : ``}`}
</div>`;
});
const { Object: Object_1 } = globals;
let counter = 0;
const Select = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, [
    "use",
    "class",
    "style",
    "ripple",
    "disabled",
    "variant",
    "noLabel",
    "label",
    "value",
    "key",
    "dirty",
    "invalid",
    "updateInvalid",
    "required",
    "inputId",
    "hiddenInput",
    "withLeadingIcon",
    "anchor$use",
    "anchor$class",
    "selectedTextContainer$use",
    "selectedTextContainer$class",
    "selectedText$use",
    "selectedText$class",
    "dropdownIcon$use",
    "dropdownIcon$class",
    "menu$class",
    "getUseDefaultValidation",
    "setUseDefaultValidation",
    "focus",
    "layout",
    "getElement"
  ]);
  let $$slots = compute_slots(slots);
  let $selectedTextStore, $$unsubscribe_selectedTextStore;
  let $valueStore, $$unsubscribe_valueStore;
  forwardEventsBuilder$6(get_current_component());
  let uninitializedValue = () => {
  };
  function isUninitializedValue(value2) {
    return value2 === uninitializedValue;
  }
  let { use = [] } = $$props;
  let { class: className = "" } = $$props;
  let { style = "" } = $$props;
  let { ripple = true } = $$props;
  let { disabled = false } = $$props;
  let { variant = "standard" } = $$props;
  let { noLabel = false } = $$props;
  let { label = void 0 } = $$props;
  let { value = "" } = $$props;
  let { key = (item) => item } = $$props;
  let { dirty = false } = $$props;
  let { invalid = uninitializedValue } = $$props;
  let { updateInvalid = isUninitializedValue(invalid) } = $$props;
  if (isUninitializedValue(invalid)) {
    invalid = false;
  }
  let { required = false } = $$props;
  let { inputId = "SMUI-select-" + counter++ } = $$props;
  let { hiddenInput = false } = $$props;
  let { withLeadingIcon = uninitializedValue } = $$props;
  let { anchor$use = [] } = $$props;
  let { anchor$class = "" } = $$props;
  let { selectedTextContainer$use = [] } = $$props;
  let { selectedTextContainer$class = "" } = $$props;
  let { selectedText$use = [] } = $$props;
  let { selectedText$class = "" } = $$props;
  let { dropdownIcon$use = [] } = $$props;
  let { dropdownIcon$class = "" } = $$props;
  let { menu$class = "" } = $$props;
  let element;
  let instance;
  let internalClasses = {};
  let internalStyles = {};
  let selectAnchor;
  let selectAnchorAttrs = {};
  let selectText;
  let selectedIndex = -1;
  let helperId = void 0;
  let addLayoutListener = getContext("SMUI:addLayoutListener");
  let removeLayoutListener;
  let menuOpen = false;
  let menuClasses = {};
  let anchorElement = void 0;
  let anchorCorner = void 0;
  let wrapFocus = false;
  let list;
  let context = getContext("SMUI:select:context");
  let floatingLabel = void 0;
  let lineRipple = void 0;
  let notchedOutline = void 0;
  setContext("SMUI:list:role", "");
  setContext("SMUI:list:nav", false);
  const selectedTextStore = writable("");
  $$unsubscribe_selectedTextStore = subscribe(selectedTextStore, (value2) => $selectedTextStore = value2);
  setContext("SMUI:select:selectedText", selectedTextStore);
  const valueStore = writable(value);
  $$unsubscribe_valueStore = subscribe(valueStore, (value2) => $valueStore = value2);
  setContext("SMUI:select:value", valueStore);
  let previousSelectedIndex = selectedIndex;
  if (addLayoutListener) {
    removeLayoutListener = addLayoutListener(layout);
  }
  onDestroy(() => {
    if (removeLayoutListener) {
      removeLayoutListener();
    }
  });
  function getMenuItemValues() {
    return list.getOrderedList().map((accessor) => accessor.getValue());
  }
  function getUseDefaultValidation() {
    return instance.getUseDefaultValidation();
  }
  function setUseDefaultValidation(useDefaultValidation) {
    instance.setUseDefaultValidation(useDefaultValidation);
  }
  function focus() {
    selectAnchor.focus();
  }
  function layout() {
    instance.layout();
  }
  function getElement() {
    return element;
  }
  if ($$props.use === void 0 && $$bindings.use && use !== void 0)
    $$bindings.use(use);
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.style === void 0 && $$bindings.style && style !== void 0)
    $$bindings.style(style);
  if ($$props.ripple === void 0 && $$bindings.ripple && ripple !== void 0)
    $$bindings.ripple(ripple);
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0)
    $$bindings.disabled(disabled);
  if ($$props.variant === void 0 && $$bindings.variant && variant !== void 0)
    $$bindings.variant(variant);
  if ($$props.noLabel === void 0 && $$bindings.noLabel && noLabel !== void 0)
    $$bindings.noLabel(noLabel);
  if ($$props.label === void 0 && $$bindings.label && label !== void 0)
    $$bindings.label(label);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  if ($$props.key === void 0 && $$bindings.key && key !== void 0)
    $$bindings.key(key);
  if ($$props.dirty === void 0 && $$bindings.dirty && dirty !== void 0)
    $$bindings.dirty(dirty);
  if ($$props.invalid === void 0 && $$bindings.invalid && invalid !== void 0)
    $$bindings.invalid(invalid);
  if ($$props.updateInvalid === void 0 && $$bindings.updateInvalid && updateInvalid !== void 0)
    $$bindings.updateInvalid(updateInvalid);
  if ($$props.required === void 0 && $$bindings.required && required !== void 0)
    $$bindings.required(required);
  if ($$props.inputId === void 0 && $$bindings.inputId && inputId !== void 0)
    $$bindings.inputId(inputId);
  if ($$props.hiddenInput === void 0 && $$bindings.hiddenInput && hiddenInput !== void 0)
    $$bindings.hiddenInput(hiddenInput);
  if ($$props.withLeadingIcon === void 0 && $$bindings.withLeadingIcon && withLeadingIcon !== void 0)
    $$bindings.withLeadingIcon(withLeadingIcon);
  if ($$props.anchor$use === void 0 && $$bindings.anchor$use && anchor$use !== void 0)
    $$bindings.anchor$use(anchor$use);
  if ($$props.anchor$class === void 0 && $$bindings.anchor$class && anchor$class !== void 0)
    $$bindings.anchor$class(anchor$class);
  if ($$props.selectedTextContainer$use === void 0 && $$bindings.selectedTextContainer$use && selectedTextContainer$use !== void 0)
    $$bindings.selectedTextContainer$use(selectedTextContainer$use);
  if ($$props.selectedTextContainer$class === void 0 && $$bindings.selectedTextContainer$class && selectedTextContainer$class !== void 0)
    $$bindings.selectedTextContainer$class(selectedTextContainer$class);
  if ($$props.selectedText$use === void 0 && $$bindings.selectedText$use && selectedText$use !== void 0)
    $$bindings.selectedText$use(selectedText$use);
  if ($$props.selectedText$class === void 0 && $$bindings.selectedText$class && selectedText$class !== void 0)
    $$bindings.selectedText$class(selectedText$class);
  if ($$props.dropdownIcon$use === void 0 && $$bindings.dropdownIcon$use && dropdownIcon$use !== void 0)
    $$bindings.dropdownIcon$use(dropdownIcon$use);
  if ($$props.dropdownIcon$class === void 0 && $$bindings.dropdownIcon$class && dropdownIcon$class !== void 0)
    $$bindings.dropdownIcon$class(dropdownIcon$class);
  if ($$props.menu$class === void 0 && $$bindings.menu$class && menu$class !== void 0)
    $$bindings.menu$class(menu$class);
  if ($$props.getUseDefaultValidation === void 0 && $$bindings.getUseDefaultValidation && getUseDefaultValidation !== void 0)
    $$bindings.getUseDefaultValidation(getUseDefaultValidation);
  if ($$props.setUseDefaultValidation === void 0 && $$bindings.setUseDefaultValidation && setUseDefaultValidation !== void 0)
    $$bindings.setUseDefaultValidation(setUseDefaultValidation);
  if ($$props.focus === void 0 && $$bindings.focus && focus !== void 0)
    $$bindings.focus(focus);
  if ($$props.layout === void 0 && $$bindings.layout && layout !== void 0)
    $$bindings.layout(layout);
  if ($$props.getElement === void 0 && $$bindings.getElement && getElement !== void 0)
    $$bindings.getElement(getElement);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    {
      if (previousSelectedIndex !== selectedIndex) {
        previousSelectedIndex = selectedIndex;
        {
          const values = getMenuItemValues();
          if (value !== values[selectedIndex]) {
            value = values[selectedIndex];
          }
        }
      }
    }
    set_store_value(valueStore, $valueStore = value, $valueStore);
    $$rendered = `<div${spread([
      {
        class: escape_attribute_value(classMap$6({
          [className]: true,
          "mdc-select": true,
          "mdc-select--required": required,
          "mdc-select--disabled": disabled,
          "mdc-select--filled": variant === "filled",
          "mdc-select--outlined": variant === "outlined",
          "smui-select--standard": variant === "standard",
          "mdc-select--with-leading-icon": isUninitializedValue(withLeadingIcon) ? $$slots.leadingIcon : withLeadingIcon,
          "mdc-select--no-label": noLabel || label == null && !$$slots.label,
          "mdc-select--invalid": invalid,
          "mdc-select--activated": menuOpen,
          "mdc-data-table__pagination-rows-per-page-select": context === "data-table:pagination",
          ...internalClasses
        }))
      },
      {
        style: escape_attribute_value(Object.entries(internalStyles).map(([name, value2]) => `${name}: ${value2};`).concat([style]).join(" "))
      },
      escape_object(exclude($$restProps, [
        "input$",
        "anchor$",
        "label$",
        "outline$",
        "selectedTextContainer$",
        "selectedText$",
        "dropdownIcon$",
        "ripple$",
        "menu$",
        "list$",
        "helperText$"
      ]))
    ])}${add_attribute("this", element, 0)}>${hiddenInput ? `<input${spread([
      { type: "hidden" },
      { required: required || null },
      { disabled: disabled || null },
      { value: escape_attribute_value(value) },
      escape_object(prefixFilter($$restProps, "input$"))
    ])}>` : ``}
  <div${spread([
      {
        class: escape_attribute_value(classMap$6({
          [anchor$class]: true,
          "mdc-select__anchor": true
        }))
      },
      {
        "aria-required": escape_attribute_value(required ? "true" : void 0)
      },
      {
        "aria-disabled": escape_attribute_value(disabled ? "true" : void 0)
      },
      {
        "aria-controls": escape_attribute_value(helperId)
      },
      {
        "aria-describedby": escape_attribute_value(helperId)
      },
      escape_object(selectAnchorAttrs),
      escape_object(prefixFilter($$restProps, "anchor$"))
    ])}${add_attribute("this", selectAnchor, 0)}>${variant === "filled" ? `<span class="${"mdc-select__ripple"}"></span>` : ``}
    ${variant !== "outlined" && !noLabel && (label != null || $$slots.label) ? `${validate_component(FloatingLabel, "FloatingLabel").$$render($$result, Object_1.assign({ id: inputId + "-smui-label" }, { floatAbove: $selectedTextStore !== "" }, { required }, prefixFilter($$restProps, "label$"), { this: floatingLabel }), {
      this: ($$value) => {
        floatingLabel = $$value;
        $$settled = false;
      }
    }, {
      default: () => `${escape(label == null ? "" : label)}${slots.label ? slots.label({}) : ``}`
    })}` : ``}
    ${variant === "outlined" ? `${validate_component(NotchedOutline, "NotchedOutline").$$render($$result, Object_1.assign({
      noLabel: noLabel || label == null && !$$slots.label
    }, prefixFilter($$restProps, "outline$"), { this: notchedOutline }), {
      this: ($$value) => {
        notchedOutline = $$value;
        $$settled = false;
      }
    }, {
      default: () => `${!noLabel && (label != null || $$slots.label) ? `${validate_component(FloatingLabel, "FloatingLabel").$$render($$result, Object_1.assign({ id: inputId + "-smui-label" }, { floatAbove: $selectedTextStore !== "" }, { required }, prefixFilter($$restProps, "label$"), { this: floatingLabel }), {
        this: ($$value) => {
          floatingLabel = $$value;
          $$settled = false;
        }
      }, {
        default: () => `${escape(label == null ? "" : label)}${slots.label ? slots.label({}) : ``}`
      })}` : ``}`
    })}` : ``}
    ${slots.leadingIcon ? slots.leadingIcon({}) : ``}
    <span${spread([
      {
        class: escape_attribute_value(classMap$6({
          [selectedTextContainer$class]: true,
          "mdc-select__selected-text-container": true
        }))
      },
      escape_object(prefixFilter($$restProps, "selectedTextContainer$"))
    ])}><span${spread([
      {
        id: escape_attribute_value(inputId + "-smui-selected-text")
      },
      {
        class: escape_attribute_value(classMap$6({
          [selectedText$class]: true,
          "mdc-select__selected-text": true
        }))
      },
      { role: "button" },
      { "aria-haspopup": "listbox" },
      {
        "aria-labelledby": escape_attribute_value(inputId + "-smui-label")
      },
      escape_object(prefixFilter($$restProps, "selectedText$"))
    ])}${add_attribute("this", selectText, 0)}>${escape($selectedTextStore)}</span></span>
    <span${spread([
      {
        class: escape_attribute_value(classMap$6({
          [dropdownIcon$class]: true,
          "mdc-select__dropdown-icon": true
        }))
      },
      escape_object(prefixFilter($$restProps, "dropdownIcon$"))
    ])}><svg class="${"mdc-select__dropdown-icon-graphic"}" viewBox="${"7 10 10 5"}" focusable="${"false"}"><polygon class="${"mdc-select__dropdown-icon-inactive"}" stroke="${"none"}" fill-rule="${"evenodd"}" points="${"7 10 12 15 17 10"}"></polygon><polygon class="${"mdc-select__dropdown-icon-active"}" stroke="${"none"}" fill-rule="${"evenodd"}" points="${"7 15 12 10 17 15"}"></polygon></svg></span>
    ${variant !== "outlined" && ripple ? `${validate_component(LineRipple, "LineRipple").$$render($$result, Object_1.assign(prefixFilter($$restProps, "ripple$"), { this: lineRipple }), {
      this: ($$value) => {
        lineRipple = $$value;
        $$settled = false;
      }
    }, {})}` : ``}</div>

  ${validate_component(Menu, "Menu").$$render($$result, Object_1.assign({
      class: classMap$6({
        [menu$class]: true,
        "mdc-select__menu": true,
        ...menuClasses
      })
    }, { fullWidth: true }, { anchor: false }, { anchorElement }, { anchorCorner }, prefixFilter($$restProps, "menu$"), { open: menuOpen }), {
      open: ($$value) => {
        menuOpen = $$value;
        $$settled = false;
      }
    }, {
      default: () => `${validate_component(List, "List").$$render($$result, Object_1.assign({ role: "listbox" }, { wrapFocus }, prefixFilter($$restProps, "list$"), { selectedIndex }), {
        selectedIndex: ($$value) => {
          selectedIndex = $$value;
          $$settled = false;
        }
      }, {
        default: () => `${slots.default ? slots.default({}) : ``}`
      })}`
    })}</div>
${$$slots.helperText ? `${validate_component(HelperText, "HelperText").$$render($$result, Object_1.assign(prefixFilter($$restProps, "helperText$")), {}, {
      default: () => `${slots.helperText ? slots.helperText({}) : ``}`
    })}` : ``}`;
  } while (!$$settled);
  $$unsubscribe_selectedTextStore();
  $$unsubscribe_valueStore();
  return $$rendered;
});
const Option$1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let usePass;
  let selected;
  let $$restProps = compute_rest_props($$props, ["use", "class", "value", "getElement"]);
  let $selectedText, $$unsubscribe_selectedText;
  let $selectedValue, $$unsubscribe_selectedValue;
  const forwardEvents = forwardEventsBuilder$6(get_current_component());
  let { use = [] } = $$props;
  const className = "";
  let { value = "" } = $$props;
  let element;
  const selectedText = getContext("SMUI:select:selectedText");
  $$unsubscribe_selectedText = subscribe(selectedText, (value2) => $selectedText = value2);
  const selectedValue = getContext("SMUI:select:value");
  $$unsubscribe_selectedValue = subscribe(selectedValue, (value2) => $selectedValue = value2);
  setContext("SMUI:list:item:role", "option");
  onDestroy(setSelectedText);
  function setSelectedText() {
    if (selected && element) {
      set_store_value(selectedText, $selectedText = element.getPrimaryText(), $selectedText);
    }
  }
  function getElement() {
    return element.getElement();
  }
  if ($$props.use === void 0 && $$bindings.use && use !== void 0)
    $$bindings.use(use);
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  if ($$props.getElement === void 0 && $$bindings.getElement && getElement !== void 0)
    $$bindings.getElement(getElement);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    usePass = [forwardEvents, ...use];
    selected = value != null && value !== "" && $selectedValue === value;
    $$rendered = `${validate_component(Item, "Item").$$render($$result, Object.assign({ use: usePass }, { "data-value": value }, { value }, { selected }, $$restProps, { this: element }), {
      this: ($$value) => {
        element = $$value;
        $$settled = false;
      }
    }, {
      default: () => `${slots.default ? slots.default({}) : ``}`
    })}`;
  } while (!$$settled);
  $$unsubscribe_selectedText();
  $$unsubscribe_selectedValue();
  return $$rendered;
});
const Option = Option$1;
class CompanyCreationAndEditModel {
  constructor(name, nit, email, companyState) {
    this.name = name;
    this.nit = nit;
    this.email = email;
    this.companyState = companyState;
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
  get Name() {
    return this.name;
  }
  get NIT() {
    return this.nit;
  }
  get Email() {
    return this.email;
  }
  get CompanState() {
    return this.companyState;
  }
}
var companies_svelte_svelte_type_style_lang = "";
const css = {
  code: ".line-decorator.svelte-7pq209.svelte-7pq209{margin-top:10px}button.svelte-7pq209.svelte-7pq209{gap:5px}button.svelte-7pq209 .material-icons.svelte-7pq209{font-size:16px}.companies-list.svelte-7pq209.svelte-7pq209{margin-top:20px}",
  map: null
};
const Companies = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let start;
  let end;
  let slice;
  let lastPage;
  let companiesList = [];
  let rowsPerPage = 10;
  let currentPage = 0;
  let activeCreateCompanyDialog = false;
  let companyCreationModel = new CompanyCreationAndEditModel("", void 0, "", null);
  let validCompanyCreationForm = false;
  let requestResponseMessage = "";
  async function _getCompanies() {
    try {
      companiesList = await getCompanies();
    } catch (error) {
      requestResponseMessage = "Error al obtener las empresas, por favor intentelo de nuevo en un momento";
      console.log(error);
    }
  }
  _getCompanies();
  let activeEditCompanyDialog = false;
  let companyEditModel = new CompanyCreationAndEditModel("", void 0, "", null);
  let validCompanyEditForm = false;
  function validateCompanyForm(companyModel) {
    return requiredValidation(companyModel.Name) && requiredValidation(companyModel.NIT) && requiredValidation(companyModel.Email) && textValidation(companyModel.Name, 3, 100) && numberValidation(companyModel.NIT, 1, 10) && emailValidation(companyModel.Email);
  }
  let activeDisableCompanyDialog = false;
  $$result.css.add(css);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    lastPage = Math.max(Math.ceil(companiesList.length / rowsPerPage) - 1, 0);
    {
      if (currentPage > lastPage) {
        currentPage = lastPage;
      }
    }
    start = currentPage * rowsPerPage;
    end = Math.min(start + rowsPerPage, companiesList.length);
    slice = companiesList.slice(start, end);
    validCompanyCreationForm = validateCompanyForm(companyCreationModel);
    validCompanyEditForm = validateCompanyForm(companyEditModel);
    $$rendered = `${$$result.head += `${$$result.title = `<title>Empresas</title>`, ""}`, ""}

<div><h1>Empresas</h1>
	<div class="${"line-decorator bg-yellow svelte-7pq209"}"></div></div>
<div class="${"flex-row center flex-end"}"><button class="${"flex-row center button bg-yellow small svelte-7pq209"}"><span class="${"material-icons svelte-7pq209"}">add</span>
		Crear Empresa
	</button></div>

<div class="${"companies-list svelte-7pq209"}">${validate_component(DataTable, "DataTable").$$render($$result, {
      "table$aria-label": "Companies list",
      style: "max-width: 100%; width:100%"
    }, {}, {
      paginate: () => `${validate_component(Pagination, "Pagination").$$render($$result, { slot: "paginate" }, {}, {
        total: () => `${escape(start + 1)}-${escape(end)} of ${escape(companiesList.length)}
			`,
        rowsPerPage: () => `${validate_component(Label, "Label").$$render($$result, {}, {}, { default: () => `Rows Per Page` })}
				${validate_component(Select, "Select").$$render($$result, {
          variant: "outlined",
          noLabel: true,
          value: rowsPerPage
        }, {
          value: ($$value) => {
            rowsPerPage = $$value;
            $$settled = false;
          }
        }, {
          default: () => `${validate_component(Option, "Option").$$render($$result, { value: 10 }, {}, { default: () => `10` })}
					${validate_component(Option, "Option").$$render($$result, { value: 25 }, {}, { default: () => `25` })}
					${validate_component(Option, "Option").$$render($$result, { value: 100 }, {}, { default: () => `100` })}`
        })}
			`,
        default: () => `${validate_component(IconButton, "IconButton").$$render($$result, {
          class: "material-icons",
          action: "first-page",
          title: "First page",
          disabled: currentPage === 0
        }, {}, { default: () => `first_page` })}
			${validate_component(IconButton, "IconButton").$$render($$result, {
          class: "material-icons",
          action: "prev-page",
          title: "Prev page",
          disabled: currentPage === 0
        }, {}, { default: () => `chevron_left` })}
			${validate_component(IconButton, "IconButton").$$render($$result, {
          class: "material-icons",
          action: "next-page",
          title: "Next page",
          disabled: currentPage === lastPage
        }, {}, { default: () => `chevron_right` })}
			${validate_component(IconButton, "IconButton").$$render($$result, {
          class: "material-icons",
          action: "last-page",
          title: "Last page",
          disabled: currentPage === lastPage
        }, {}, { default: () => `last_page` })}`
      })}`,
      default: () => `${validate_component(Head, "Head").$$render($$result, {}, {}, {
        default: () => `${validate_component(Row, "Row").$$render($$result, {}, {}, {
          default: () => `${validate_component(Cell, "Cell").$$render($$result, {}, {}, { default: () => `Nombre` })}
				${validate_component(Cell, "Cell").$$render($$result, {}, {}, { default: () => `NIT` })}
				${validate_component(Cell, "Cell").$$render($$result, {}, {}, { default: () => `Correo` })}
				${validate_component(Cell, "Cell").$$render($$result, {}, {}, { default: () => `Acciones` })}`
        })}`
      })}
		${validate_component(Body, "Body").$$render($$result, {}, {}, {
        default: () => `${each(slice, (company) => `${company.CompanyState == 1 ? `${validate_component(Row, "Row").$$render($$result, {}, {}, {
          default: () => `${validate_component(Cell, "Cell").$$render($$result, {}, {}, { default: () => `${escape(company.Name)}` })}
						${validate_component(Cell, "Cell").$$render($$result, {}, {}, { default: () => `${escape(company.NIT)}` })}
						${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
            default: () => `${escape(company.Email)}`
          })}
						${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
            default: () => `<div class="${"flex-row center"}" style="${"gap: 10px;"}"><button class="${"flex-row center button bg-yellow icon-button svelte-7pq209"}"><span class="${"material-icons svelte-7pq209"}">edit </span></button>
								<button class="${"flex-row center button bg-red icon-button svelte-7pq209"}"><span class="${"material-icons svelte-7pq209"}">delete </span>
								</button></div>
						`
          })}
					`
        })}` : ``}`)}`
      })}`
    })}</div>

${validate_component(Notification, "Notification").$$render($$result, { message: requestResponseMessage }, {}, {})}


${validate_component(Dialog, "Dialog").$$render($$result, {
      surface$style: "width: 400px; max-width: calc(100vw - 32px);",
      open: activeCreateCompanyDialog
    }, {
      open: ($$value) => {
        activeCreateCompanyDialog = $$value;
        $$settled = false;
      }
    }, {
      default: () => `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => `<div class="${"flex-row flex-end"}"><button class="${"material-icons svelte-7pq209"}">close</button></div>
		<div style="${"padding: 10px;"}"><div style="${"color: black; margin-bottom: 20px"}"><h1>Crear Empresa</h1>
				<div class="${"line-decorator bg-yellow svelte-7pq209"}"></div></div>
			<form class="${"flex-column center"}"><div class="${"form-group"}"><p>Nombre</p>
					<input class="${"underlined-input"}" type="${"text"}"${add_attribute("value", companyCreationModel.Name, 0)}></div>
				<div class="${"form-group"}"><p>NIT</p>
					<input class="${"underlined-input"}" type="${"number"}"${add_attribute("value", companyCreationModel.NIT, 0)}></div>
				<div class="${"form-group"}"><p>Correo</p>
					<input class="${"underlined-input"}" type="${"email"}"${add_attribute("value", companyCreationModel.Email, 0)}></div>
				<button ${!validCompanyCreationForm ? "disabled" : ""} class="${"button bg-yellow svelte-7pq209"}" type="${"submit"}">Crear</button></form></div>
		<div class="${"center-text"}"></div>`
      })}`
    })}


${validate_component(Dialog, "Dialog").$$render($$result, {
      surface$style: "width: 400px; max-width: calc(100vw - 32px);",
      open: activeEditCompanyDialog
    }, {
      open: ($$value) => {
        activeEditCompanyDialog = $$value;
        $$settled = false;
      }
    }, {
      default: () => `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => `<div class="${"flex-row flex-end"}"><button class="${"material-icons svelte-7pq209"}">close</button></div>
		<div style="${"padding: 10px;"}"><div style="${"color: black; margin-bottom: 20px"}"><h1>Editar Empresa</h1>
				<div class="${"line-decorator bg-yellow svelte-7pq209"}"></div></div>
			<form class="${"flex-column center"}"><div class="${"form-group"}"><p>Nombre</p>
					<input class="${"underlined-input"}" type="${"text"}"${add_attribute("value", companyEditModel.Name, 0)}></div>
				<div class="${"form-group"}"><p>NIT</p>
					<input class="${"underlined-input"}" type="${"number"}"${add_attribute("value", companyEditModel.NIT, 0)}></div>
				<div class="${"form-group"}"><p>Correo</p>
					<input class="${"underlined-input"}" type="${"email"}"${add_attribute("value", companyEditModel.Email, 0)}></div>
				<button ${!validCompanyEditForm ? "disabled" : ""} class="${"button bg-yellow svelte-7pq209"}" type="${"submit"}">Editar</button></form></div>
		<div class="${"center-text"}"></div>`
      })}`
    })}


${validate_component(Dialog, "Dialog").$$render($$result, {
      surface$style: "width: 400px; max-width: calc(100vw - 32px);",
      open: activeDisableCompanyDialog
    }, {
      open: ($$value) => {
        activeDisableCompanyDialog = $$value;
        $$settled = false;
      }
    }, {
      default: () => `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => `<div class="${"flex-row flex-end"}"><button class="${"material-icons svelte-7pq209"}">close</button></div>
		<h1 style="${"color: black;"}">Deshabilitar Empresa</h1>
		<div class="${"line-decorator bg-yellow svelte-7pq209"}"></div>
		<div class="${"flex-row justify-center"}" style="${"color: black; margin:20px"}">\xBFEst\xE1 seguro de que desea deshabilitar la empresa?
		</div>
		<div class="${"center-text"}"><button class="${"button bg-red svelte-7pq209"}" type="${"submit"}">Deshabilitar</button></div>`
      })}`
    })}`;
  } while (!$$settled);
  return $$rendered;
});
export { Companies as default };
