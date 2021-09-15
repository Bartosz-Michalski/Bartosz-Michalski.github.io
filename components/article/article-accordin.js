const icons = document.querySelectorAll(".main__section--rollable .article__icon");

const iconRotate = () => {};

icons.forEach((icon) => {
  icon.addEventListener("click", () => {
    const iconWrapper = icon.parentElement;

    const articleText = iconWrapper.parentElement.querySelector(".article__text");
    const isArticleTextVisible = articleText.classList.contains("article__text--visible");

    //Icon Animate - Rotate - Details
    const isIconRotateInActive = icon.classList.contains("article__icon--rotate-in");
    const isIconRotateOutActive = icon.classList.contains("article__icon--rotate-out");
    const transitionDuration = 0.5;
    const transitionDelay = 0.5;

    if (!isArticleTextVisible && !isIconRotateInActive && !isIconRotateOutActive) {
      articleText.style.transition = `max-height ${transitionDuration}s linear, opacity ${transitionDuration}s ${transitionDelay}s linear`;
      articleText.classList.toggle("article__text--visible");

      //Icon Animate - RotateIn
      iconPulse(iconWrapper);
      icon.classList.add("article__icon--rotate-in");
      setTimeout(() => {
        icon.classList.remove("article__icon--rotate-in");
      }, transitionDuration + transitionDelay + 1 * 1000);
    } else if (isArticleTextVisible && !isIconRotateInActive && !isIconRotateOutActive) {
      articleText.style.transition = `max-height ${transitionDuration}s ${transitionDelay}s linear, opacity ${transitionDuration}s linear`;
      articleText.classList.toggle("article__text--visible");

      //Icon Animate - RotateOut
      icon.classList.add("article__icon--rotate-out");
      setTimeout(() => {
        icon.classList.remove("article__icon--rotate-out");
        iconPulse(iconWrapper);
      }, transitionDuration + transitionDelay + 1 * 1000);
    }
  });
});
