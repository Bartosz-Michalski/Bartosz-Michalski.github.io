const icons = document.querySelectorAll(".article__icon");

icons.forEach((icon) => {
  icon.addEventListener("click", () => {
    icon.classList.add("article__icon--animate");
  });
  icon.addEventListener("animationend", () => {
    icon.classList.remove("article__icon--animate");
  });
});
