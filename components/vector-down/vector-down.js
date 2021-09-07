const vectorWrapper = document.querySelector(".wrapper-vector");
const aboutMePosition = document.querySelector(".main__section[name='about-me']").offsetTop;

vectorWrapper.addEventListener("click", () => {
  window.scrollTo({ top: aboutMePosition, behavior: "smooth" });
});
