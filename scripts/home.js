const menuButton = document.getElementById("menuButton");
let isOpen = false;
console.log("Test");
const line1 = document.querySelector(".line1");
const line2 = document.querySelector(".line2");
const line3 = document.querySelector(".line3");

menuButton.addEventListener("click", () => {
  if (!isOpen) {
    gsap.to(line1, { y: 10, rotation: 45, duration: 0.2 });
    gsap.to(line2, { opacity: 0, duration: 0.2 });
    gsap.to(line3, { y: -10, rotation: -45, duration: 0.2 });
  } else {
    gsap.to(line1, { y: 0, rotation: 0, duration: 0.2 });
    gsap.to(line2, { opacity: 1, duration: 0.2 });
    gsap.to(line3, { y: 0, rotation: 0, duration: 0.2 });
  }
  isOpen = !isOpen;
});

// GSAP Animation
gsap.timeline()
// Move down to top -50% with a rotationX of 8%
.to(".black-pane", {
    top: "-50%",
    rotationZ: 8,
    duration: 0.5, 
    ease: "power2.out",
})
// After 1 second, move down to top 0%
.to(".black-pane", {
    top: "0%",
    duration: 1,
    rotationZ: 0,
    ease: "power2.out",
    delay: 0.5, // Wait 1 second before executing
})
// After 1 second, move down to top 0%
.to(".black-pane", {
  top: "100%",
  duration: 1,
  rotationZ: 0,
  ease: "power2.out",
  delay: 1, // Wait 1 second before executing
});