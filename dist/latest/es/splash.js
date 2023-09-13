var m = Object.defineProperty;
var v = (e, t, s) => t in e ? m(e, t, { enumerable: !0, configurable: !0, writable: !0, value: s }) : e[t] = s;
var r = (e, t, s) => (v(e, typeof t != "symbol" ? t + "" : t, s), s);
const S = "3.0.1";
var a = /* @__PURE__ */ ((e) => (e.Add = "add", e.Remove = "remove", e))(a || {});
const c = class c {
  /**
   * # Constructor
   * Creates a new Splash instance.
   */
  constructor() {
    /**
     * # ID
     * Each Splash instance is given a unique GUID.
     */
    r(this, "id");
    /**
     * # Element
     * The root element of the Splash component.
     */
    r(this, "element");
    this.element = p(), this.element.id = this.id = c.generateGUID();
  }
  /**
   * # Generate GUID
   * @returns {GUIDString} A GUID string.
   * @private
   */
  static generateGUID() {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (t) => {
      const s = Math.random() * 16 | 0;
      return (t === "x" ? s : s & 3 | 8).toString(16);
    });
  }
  /**
   * @inheritdoc
   */
  getNSContentElement() {
    return this.getNSElement().firstElementChild;
  }
  /**
   * @inheritdoc
   */
  getNSTextElement() {
    return this.getNSContentElement().firstElementChild;
  }
  /**
   * @inheritdoc
   */
  getId() {
    return this.id;
  }
  /**
   * @inheritdoc
   */
  getNSElement() {
    return this.element;
  }
  /**
   * @inheritdoc
   */
  setText(t) {
    return this.getNSTextElement().innerText = t, t.length > 0 ? this.showText() : this.hideText(), this;
  }
  /**
   * @inheritdoc
   */
  showText() {
    return I(this.getNSTextElement()), this;
  }
  /**
   * @inheritdoc
   */
  hideText() {
    return N(this.getNSTextElement()), this;
  }
  /**
   * @inheritdoc
   */
  remove() {
    var t;
    return this.element && ((t = this.element.parentElement) == null || t.removeChild(this.element), delete this.element), this;
  }
};
/**
 * # CSS Class Name
 * The main CSS class name of the root element of a Splash component.
 */
r(c, "SplashClass", "s"), /**
 * # Host CSS Class Name
 * The CSS class name of the host element of a Splash component.
 * The host element is the element that the Splash is attached to.
 */
r(c, "SplashHostClass", "sh");
let d = c;
function p() {
  return new DOMParser().parseFromString(
    '<div class=s><div class=sc><div class=st></div><div class=ss><svg viewBox="0 0 50 50"><circle class=path cx=25 cy=25 r=20 fill=none></circle></svg></div></div></div>',
    "text/html"
  ).body.firstChild;
}
function w(e, t) {
  t.children.length > 0 ? t.insertBefore(e, t.children.item(0)) : t.append(e);
}
function h(e, t) {
  e == null || e.classList[t](d.SplashHostClass);
}
function E(e) {
  h(e.getNSElement().parentElement, a.Remove);
}
function I(e) {
  e.style.display = "flex";
}
function N(e) {
  e.style.display = "none";
}
function u(e) {
  return e instanceof Element ? e : document.querySelector(e || "");
}
function y(e) {
  var t;
  return ((t = e == null ? void 0 : e.classList) == null ? void 0 : t.contains(d.SplashClass)) ?? !1;
}
function x(e, t) {
  h(e.parentElement, a.Remove), h(t, a.Add), w(e, t);
}
function f(e) {
  const t = e.firstElementChild;
  if (t !== null && y(t)) {
    const l = t.id;
    return o.getInstance().stack.find((g) => g.getId() === l) ?? null;
  }
  return null;
}
const n = class n {
  /**
   * # Constructor
   * Private constructor to prevent multiple instances.
   * @private
   */
  constructor() {
    /**
     * # Version
     */
    r(this, "version");
    /**
     * @inheritdoc
     */
    r(this, "stack");
    this.version = S, this.stack = [];
  }
  /**
   * # Find Index
   * Find Splashck index by callback.
   * @param callback Callback function that returns a boolean.
   * @returns {number} Index of Splash instance in the stack or -1.
   * @private
   */
  findIndex(t) {
    return this.stack.findIndex(t);
  }
  /**
   * # Find
   * Find Splash in the stack by callback.
   * @param callback Callback function that returns a boolean.
   * @returns {Splash | undefined} Splashefined
   * @private
   */
  find(t) {
    return this.stack.find(t);
  }
  /**
   * # Get Instance
   * Singleton instance accessor
   * @returns {Service} Splash
   */
  static getInstance() {
    return n.instance || (n.instance = new n()), n.instance;
  }
  /**
   * # Assign To Window
   * Assign a SplashService instance to the Window object.
   * The SplashService instance can be accessed in the window object
   * using the key window accessor key.
   * @see WindowAccessorKey
   * @private
   */
  static assignToWindow() {
    Object.defineProperty(window, n.WindowAccessorKey, {
      value: n.getInstance(),
      writable: !1
    });
  }
  /**
   * # Start
   * Initialize and attach a Splash Service instance to the Window object.
   */
  static start() {
    n.assignToWindow(), window.addEventListener("load", () => {
      window[n.WindowAccessorKey] instanceof n || n.assignToWindow();
    });
  }
  /**
   * # Create Splash
   * Return new Splash instance and push it to the stack.
   * @param text Text to display.
   * @returns {Splash} Splash instance.
   * @private
   */
  createNS(t) {
    const s = new d();
    return s.setText(t || ""), this.stack.push(s), s;
  }
  /**
   * # Clean And Remove
   * Remove Splash from DOM and clean its parent.
   * @param s Splash instance.
   * @returns {GUIDString} Splash ID.
   * @private
   */
  cleanAndRemove(t) {
    return E(t), t.remove().getId();
  }
  /**
   * # Stack Delete
   * Remove Splash instance from the stack.
   * @param s Splash instance.
   * @returns {GUIDString | null} Splash ID or null if it doesn't exist.
   * @private
   */
  stackDelete(t) {
    let s = this.findIndex((i) => i.getId() === t.getId());
    return s < 0 ? null : (this.stack.splice(s, 1), t.getId());
  }
  /**
   * # Delete NS
   * Remove Splash instance from both the stack and the
   * @param callback Callback function.
   * @returns {GUIDString | null} Splash ID or null if it doesn't exist.
   * @private
   */
  deleteNS(t) {
    const s = this.find(t);
    return s ? (this.cleanAndRemove(s), this.stackDelete(s)) : null;
  }
  /**
   * @inheritdoc
   */
  show(t) {
    let s = f(document.body);
    return s || (s = this.createNS(), x(s.getNSElement(), document.body)), s.setText(t || "").getId();
  }
  /**
   * @inheritdoc
   */
  showInside(t, s) {
    const i = u(t);
    if (i) {
      let l = f(i);
      return l || (l = this.createNS()), x(l.getNSElement(), i), l.setText(s || "").getId();
    }
    return null;
  }
  /**
   * @inheritdoc
   */
  hide() {
    const t = this.stack.pop();
    return t ? this.cleanAndRemove(t) : null;
  }
  /**
   * @inheritdoc
   */
  hideAll() {
    this.stack.forEach(this.cleanAndRemove), this.stack.splice(0, this.stack.length);
  }
  /**
   * @inheritdoc
   */
  hideId(t) {
    return this.deleteNS((s) => s.getId() === t);
  }
  /**
   * @inheritdoc
   */
  hideInside(t) {
    const s = u(t), i = (l) => l.getNSElement().parentElement === s;
    return s ? this.deleteNS(i) : null;
  }
};
/**
 * # Window Accessor Key
 * Key to access SplashService instance in the Window object.
 */
r(n, "WindowAccessorKey", "splash"), /**
 * # Instance
 * Singleton instance of SplashService.
 * @private
 */
r(n, "instance");
let o = n;
const A = { Service: o };
export {
  o as Service,
  A as default
};
