import '@scssFolder/';
import Dropdown from './classes/Dropdown.js'
import Stars from './classes/Stars.js'
import Like from './classes/Like.js'
import multiplier from './functions/multiplier.js'

// Add filter dropdown
const filters = document.querySelectorAll("[data-component='filters']");
filters.forEach(filter => {
  return new Dropdown(filter);
})


// Multiply cards
multiplier();

// Add Stars 
const starContainers = document.querySelectorAll("[data-stars]");
starContainers.forEach(container => {
  return new Stars(container);
})

// Add Stars 
const hearts = document.querySelectorAll("[data-component='like']");
hearts.forEach(heart => {
  return new Like(heart);
})

// Non avevo voglia di assegnare a tutte le label e gli input un id
const labels = document.querySelectorAll(".filters__label");
const inputs = document.querySelectorAll(".filters__input");
labels.forEach((label, i) => {
  label.setAttribute("for", `lazyCoder${i}`);
});
inputs.forEach((input, i) => {
  input.id = `lazyCoder${i}`;
});
