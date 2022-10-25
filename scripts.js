gsap.registerPlugin(ScrollTrigger);

gsap.from(".hero__container", {
  scrollTrigger: ".hero__container",
  duration: 0.8,
  y: 30,
  opacity: 0,
  ease: "in",
});
gsap.from(".about__container", {
  scrollTrigger: ".about__container",
  duration: 0.8,
  x: 30,
  opacity: 0,
  ease: "in",
});
gsap.from(".services__wrapper, .services__header", {
  scrollTrigger: ".services__header",
  duration: 0.8,
  x: -30,
  opacity: 0,
  ease: "in",
});
