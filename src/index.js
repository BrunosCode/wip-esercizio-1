import "./style.scss";

const filters = document.getElementById("filters");
const openFilters = document.getElementById("open-filters");

openFilters.addEventListener("click", () => {
  // togle the dataset boolean value 
  filters.dataset.open = !(filters.dataset.open === "true");
})
