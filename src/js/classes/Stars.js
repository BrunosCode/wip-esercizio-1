export default class Stars {

  constructor(element) {
    const maxStars = 5;
    const container = element;
    const starsFilledNumber = container.dataset.stars;
    for (let i = 0; i < starsFilledNumber; i++) {
      let starFilled = document.createElement("span");
      starFilled.classList.add(this.MODIFIERS.starFill);
      container.appendChild(starFilled);
    }
    for (let i = 0; i < maxStars - starsFilledNumber; i++) {
      let starStroked = document.createElement("span");
      starStroked.classList.add(this.MODIFIERS.starStroke);
      container.appendChild(starStroked);
    }
  }

  // passandoli come prop servono i get?
  get SELECTORS() {
    return {
      container: "[data-stars]"
    };
  }
  get MODIFIERS() {
    return {
      starFill: "star--fill",
      starStroke: "star--stroke",
    };
  }

}
