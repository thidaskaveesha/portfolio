document.addEventListener('DOMContentLoaded', () => {
    const audio = document.getElementById('background-music');

    // Simulate user interaction
    const simulateInteraction = new Event('click');
    document.body.dispatchEvent(simulateInteraction);

    // Attempt to play audio
    audio.play().catch((error) => {
        console.log('Autoplay failed:', error.message);
    });
});

// Typewriter effect for subtitle
const subtitleText = "Crafting innovative applications with a creative designer's touch and a developer's expertise.";
const subtitleElement = document.getElementById("typewriter")
let index = 0;
const typeSpeed = 50; // Adjust speed here (lower is faster
// Recursive function to type out the subtitle
function typeEffect() {
    if (index < subtitleText.length) {
        subtitleElement.textContent += subtitleText.charAt(index);
        index++;
        setTimeout(typeEffect, typeSpeed);
    }else{
        subtitleElement.style.border = "none";
    }
}

// GSAP animation for blinking cursor
gsap.to("#typewriter", {
    borderRightColor: "transparent",
    repeat: -1,
    duration: 0.1,
    ease: "power2.inOut",
    yoyo: true
})
// GSAP animation for blinking cursor
gsap.to(".loading-text", {
    opacity: 0,
    repeat: -1,
    duration: 0.5,
    ease: "power2.inOut",
    yoyo: true
})


typeEffect()

