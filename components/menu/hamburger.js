const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".navigation");
const topBar = document.querySelector(".top-bar");

const hamburgerClick = () => {
  hamburger.classList.toggle("hamburger--active");
  nav.classList.toggle("navigation--active");
  topBar.classList.toggle("top-bar--active");
};

hamburger.addEventListener("click", hamburgerClick);
