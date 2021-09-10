const arrowUp = document.querySelector(".arrow-up");
const homePosition = document.querySelector(".main__section[name='home']").offsetTop;

arrowUp.addEventListener("click", () => {
  window.scrollTo({ top: homePosition, behavior: "smooth" });
});
