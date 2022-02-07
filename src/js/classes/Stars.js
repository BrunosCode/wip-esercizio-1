export default class Stars {

  get SELECTORS() {
    return {
      container: "[data-stars]"
    };
  }
  get MODIFIERS() {
    return {
      star: "card__star",
      starFill: "card__star--fill"
    };
  }

  constructor(wrapperElement) {
    const maxStars = 5;
    const container = wrapperElement;
    const starsFilledNumber = container.dataset.stars;
    for (let i = 0; i < starsFilledNumber; i++) {
      let starFilled = document.createElement("span");
      starFilled.classList.add(this.MODIFIERS.star, this.MODIFIERS.starFill);
      container.appendChild(starFilled);
    }
    for (let i = 0; i < maxStars - starsFilledNumber; i++) {
      let star = document.createElement("span");
      star.classList.add(this.MODIFIERS.star);
      container.appendChild(star);
    }
  }
}
