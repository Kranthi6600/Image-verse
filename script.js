const reload = document.querySelector(".reload");

reload.style.cursor = "pointer";

reload.addEventListener("click", () => {
  location.reload();
})


window.addEventListener("DOMContentLoaded", () => {
  gsap.from(".title", {
    y: -50,
    opacity: 0,
    duration: 1.5,
    ease: "power3.out"
  });

  gsap.from(".sub-titles a", {
    y: 20,
    opacity: 0,
    stagger: 0.2,
    duration: 0.8,
    delay: 0.5,
    ease: "power2.out"
  });
});

gsap.from(".grid-image", {
  opacity: 0,
  y: 50,
  duration: 1,
  stagger: 0.2,
  ease: "power2.out",
  delay: 1.2,
});

gsap.from(".images-title", {
    y: -30,
    opacity: -1,
    delay: 0.5,
    ease: "power3.out"
})

const lightbox = GLightbox({
  selector: '.glightbox'
});