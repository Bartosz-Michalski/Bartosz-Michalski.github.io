const arrowLeft = document.querySelector(".carousel__arrow--left");
const arrowRight = document.querySelector(".carousel__arrow--right");
const slideTitle = document.querySelector(".slide__title");
const slideText = document.querySelector(".slide__text");
const slideImg = document.querySelector(".slide__img");
const slideAnchorPage = document.querySelector(".slide__anchor--page");
const slideAnchorSourceCode = document.querySelector(".slide__anchor--source-code");

let activeSlide = 0;

const changeSlide = (e) => {
  const clickedArrow = e.target;

  if (clickedArrow.classList.contains("carousel__arrow--right")) {
    activeSlide++;

    if (activeSlide === slideList.length) {
      activeSlide = 0;
    }
  } else if (clickedArrow.classList.contains("carousel__arrow--left")) {
    if (activeSlide === 0) {
      activeSlide = slideList.length;
    }

    activeSlide--;
  }

  slideTitle.textContent = slideList[activeSlide].title;
  slideText.textContent = slideList[activeSlide].text;
  slideImg.src = slideList[activeSlide].img;
  slideAnchorPage.href = slideList[activeSlide].address;
  slideAnchorSourceCode.href = slideList[activeSlide].sourceCode;
};

arrowRight.addEventListener("click", changeSlide);
arrowLeft.addEventListener("click", changeSlide);
