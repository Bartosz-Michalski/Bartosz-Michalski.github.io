const icons = document.querySelectorAll(".main__section--rollable .article__icon");

icons.forEach((icon) => {
  icon.addEventListener("click", () => {
    const articleText = icon.parentElement.querySelector(".article__text");
    const isArticleTextActive = articleText.classList.contains("article__text--active");

    //Icon Animate
    const isIconAnimateInActive = icon.classList.contains("article__icon--animate-in");
    const isIconAnimateOutActive = icon.classList.contains("article__icon--animate-out");

    const transitionDuration = 0.5;
    const transitionDelay = 0.5;

    if (isArticleTextActive && !isIconAnimateInActive && !isIconAnimateOutActive) {
      articleText.style.transition = `max-height ${transitionDuration}s ${transitionDelay}s linear, opacity ${transitionDuration}s linear`;

      icon.classList.add("article__icon--animate-out");
      // console.log("out - start");

      icon.addEventListener("animationend", () => {
        icon.classList.remove("article__icon--animate-out");
        // console.log("out - end");
      });

      articleText.classList.toggle("article__text--active");
      //
    } else if (!isArticleTextActive && !isIconAnimateInActive && !isIconAnimateOutActive) {
      articleText.style.transition = `max-height ${transitionDuration}s linear, opacity ${transitionDuration}s ${transitionDelay}s linear`;

      icon.classList.add("article__icon--animate-in");
      // console.log("in - start");

      icon.addEventListener("animationend", () => {
        icon.classList.remove("article__icon--animate-in");
        // console.log("in - end");
      });

      articleText.classList.toggle("article__text--active");
    }
  });
});
