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