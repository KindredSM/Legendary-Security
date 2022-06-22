const options = {};

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
observer.observe(services);

const observer2 = new IntersectionObserver(function (entries, observer) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    }
    console.log(entry.target);
    entry.target.classList.toggle("fade2");
    observer.unobserve(entry.target);
  });
}, options);

observer2.observe(about__header);
observer2.observe(about__description);

// MOBILE

const menu = document.querySelector("#mobile-menu");
const menuLinks = document.querySelector(".navbar__menu");

const mobileMenu = () => {
  menu.classList.toggle("is-active");
  menuLinks.classList.toggle("active");
};

menu.addEventListener("click", mobileMenu);
