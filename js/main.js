const icons = document.querySelectorAll(".about-me__icon");

icons.forEach((icon) => {
  icon.addEventListener("click", () => {
    icon.classList.add("about-me__icon--animate");
  });
  icon.addEventListener("animationend", () => {
    icon.classList.remove("about-me__icon--animate");
  });
});
