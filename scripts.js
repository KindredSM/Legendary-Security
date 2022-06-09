// Intersection Observer
const sectionOne = document.querySelector(".home__container");
const sections = document.querySelectorAll(".about__header");

const options = {
  //   root: null,
  threshhold: 0.25,
};

const observer = new IntersectionObserver(function (entries, observer) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    }
    console.log(entry.target);
    entry.target.classList.toggle("fade");
    observer.unobserve(entry.target);
  });
}, options);

observer.observe(home__container);
observer.observe(about__header);
observer.observe(about__description);
observer.observe(services);

// MOBILE

const menu = document.querySelector("#mobile-menu");
const menuLinks = document.querySelector(".navbar__menu");

const mobileMenu = () => {
  menu.classList.toggle("is-active");
  menuLinks.classList.toggle("active");
};

menu.addEventListener("click", mobileMenu);
