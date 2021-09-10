const vectorWrapper = document.querySelector(".vector-down");
const aboutMePosition = document.querySelector(".main__section[name='about-me']").offsetTop;

vectorWrapper.addEventListener("click", () => {
  window.scrollTo({ top: aboutMePosition, behavior: "smooth" });
});
