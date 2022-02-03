import '@scssFolder/';
import Dropdown from './classes/Dropdown.js'

const filters = document.querySelectorAll(".filters");
filters.forEach(filter => {
  return new Dropdown(filter, ".filters__bar", "filters--close");
})
