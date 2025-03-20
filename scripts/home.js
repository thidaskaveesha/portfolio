const menuButton = document.getElementById("menuButton");
let isOpen = false;
console.log("Test");
const line1 = document.querySelector(".line1");
const line2 = document.querySelector(".line2");
const line3 = document.querySelector(".line3");

menuButton.addEventListener("click", () => {
  if (!isOpen) {
    gsap.to(line1, { y: 10, rotation: 45, duration: 0.3 });
    gsap.to(line2, { opacity: 0, duration: 0.3 });
    gsap.to(line3, { y: -10, rotation: -45, duration: 0.3 });
  } else {
    gsap.to(line1, { y: 0, rotation: 0, duration: 0.3 });
    gsap.to(line2, { opacity: 1, duration: 0.3 });
    gsap.to(line3, { y: 0, rotation: 0, duration: 0.3 });
  }
  isOpen = !isOpen;
});