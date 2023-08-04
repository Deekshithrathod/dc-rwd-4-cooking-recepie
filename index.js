const ingredientsEl = document.querySelector("div.ingredients");
ingredientsEl.addEventListener("click", (e) => {
  if (e.target.matches(`p`)) {
    e.target.classList.toggle("striked-ingredient");
  }
  if (e.target.matches(`input`)) {
    e.target.parentNode
      .querySelector(`p`)
      .classList.toggle("striked-ingredient");
  }
});
