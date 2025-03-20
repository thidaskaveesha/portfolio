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


document.addEventListener("DOMContentLoaded", () => {
  const timeline = gsap.timeline();

  // Slide the black pane down
  timeline.to(".black-pane", {
    duration: 10,
    y: "100%", // Slide it down completely
    ease: "power4.out",
  });

  // Fade in and pop up the text after the pane animation
  timeline.to(
    ".dashboard-content",
    {
      duration: 1,
      opacity: 1, // Fade in
      scale: 1, // Scale back to normal size
      ease: "back.out(1.7)", // Pop-up effect
    },
    "-=8"
  );
});