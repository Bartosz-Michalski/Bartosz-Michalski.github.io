const navLinks = document.querySelectorAll(".navigation__link");

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    const target = document.querySelector(`.main__section[name="${link.name}`).offsetTop;

    window.scrollTo({ top: target, behavior: "smooth" });
  });
});

// TOP BAR STICKY

let lastScroll = 0;

const topBarSticky = () => {
  const currentScroll = window.pageYOffset;
  const topBar = document.querySelector(".top-bar");

  if (!topBar.classList.contains("top-bar--active")) {
    if (currentScroll <= 0) {
      document.body.classList.remove("scroll-up");
    } else if (currentScroll > lastScroll && !document.body.classList.contains("scroll-down")) {
      document.body.classList.remove("scroll-up");
      document.body.classList.add("scroll-down");
    } else if (currentScroll < lastScroll && document.body.classList.contains("scroll-down")) {
      document.body.classList.remove("scroll-down");
      document.body.classList.add("scroll-up");
    }

    lastScroll = currentScroll;
  }
};

window.addEventListener("scroll", topBarSticky);
