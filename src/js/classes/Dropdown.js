export default class Dropdown {

  constructor(wrapperElement, trigger, close) {
    this.selectors = {
      trigger,
    };
    this.modifiers = {
      close,
    };
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

  // passandoli come prop servono i get?
  get SELECTORS() {
    return this.selectors;
  }
  get MODIFIERS() {
    return this.modifiers;
  }

}
