export default class Dropdown {
  constructor(wrapperElement, trigger, close) {
    this.selectors = {
      trigger,
    };
    this.modifiers = {
      close,
    };

    let triggerElement = wrapperElement.querySelector(this.SELECTORS.trigger);
    triggerElement.addEventListener("click", (e) => {
      e.target.parentNode.classList.toggle(this.modifiers.close);
    });
  }

  // passandoli come prop servono i get?
  get SELECTORS() {
    return this.selectors;
  }
  get MODIFIERS() {
    return this.modifiers;
  }

  // toggleSibbling(e) {
  //   e.target.parentNode.classList.toggle(this.modifiers.close);
  // }
}
