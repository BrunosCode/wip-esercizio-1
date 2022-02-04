export default class Dropdown {

  get SELECTORS() {
    return {
      trigger: ".filters__bar"
    };
  }
  get MODIFIERS() {
    return {
      close: "filters--close"
    };
  }

  constructor(wrapperElement, trigger, close) {

    // soluzione con il bind
    this.open = this.open.bind(this);

    let triggerElement = wrapperElement.querySelector(this.SELECTORS.trigger);
    triggerElement.addEventListener("click", this.open);
    // soluzione con arrow function
    // triggerElement.addEventListener("click", (e) => {
    //   e.target.parentNode.classList.toggle(this.MODIFIERS.close);
    // });
  }

  open(e) {
    e.target.parentNode.classList.toggle(this.MODIFIERS.close);
  }
}
