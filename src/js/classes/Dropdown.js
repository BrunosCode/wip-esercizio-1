export default class Dropdown {

  get SELECTORS() {
    return {
      trigger: ".filters__bar",
    };
  }
  get MODIFIERS() {
    return {
      close: "filters--close"
    };
  }

  constructor(wrapperElement) {
    this.dropdown = wrapperElement;
    // soluzione con il bind
    this.open = this.open.bind(this);

    let trigger = this.dropdown.querySelector(this.SELECTORS.trigger);
    trigger.addEventListener("click", this.open);
    // soluzione con arrow function
    // triggerElement.addEventListener("click", (e) => {
    //   e.target.parentNode.classList.toggle(this.MODIFIERS.close);
    // });
  }

  open() {
    this.dropdown.classList.toggle(this.MODIFIERS.close);
  }
}
