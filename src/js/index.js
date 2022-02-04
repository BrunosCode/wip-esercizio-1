import '@scssFolder/';
import Dropdown from './classes/Dropdown.js'

const filters = document.querySelectorAll(".filters");
filters.forEach(filter => {
  return new Dropdown(filter, ".filters__bar", "filters--close");
})

const container = document.querySelector(".cards");
const card = document.querySelector(".card");
for (let i = 0; i < 7; i++) {
  let clone = card.cloneNode(true);
  container.appendChild(clone);
}

const labels = document.querySelectorAll(".filters__label");
const inputs = document.querySelectorAll(".filters__input");

labels.forEach((label, i) => {
  label.setAttribute("for", i);
})
inputs.forEach((input, i) => {
  input.id = i;
})