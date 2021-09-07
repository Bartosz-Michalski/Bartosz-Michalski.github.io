const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".navigation");
const topBar = document.querySelector(".wrapper-top");

const hamburgerClick = () => {
  hamburger.classList.toggle("hamburger--active");
  nav.classList.toggle("navigation--active");
  topBar.classList.toggle("wrapper-top--active");
};

hamburger.addEventListener("click", hamburgerClick);
