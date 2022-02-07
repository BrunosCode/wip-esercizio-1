export default class Like {
  get MODIFIERS() {
    return {
      liked: "card__heart--fill"
    }
  }

  constructor(element) {
    element.addEventListener("click", (e) => {
      e.preventDefault();
      element.classList.toggle(this.MODIFIERS.liked);
    })
  }
}