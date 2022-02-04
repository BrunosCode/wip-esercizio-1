export default function multiplier() {
  const items = document.querySelectorAll("[data-multiply]");
  items.forEach(item => {
    const container = item.parentElement;
    const multiplier = item.dataset.multiply;
    for (let i = 1; i < multiplier; i++) {
      let clone = item.cloneNode(true);
      container.appendChild(clone);
    }
  })
}
