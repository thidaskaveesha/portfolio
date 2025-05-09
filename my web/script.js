function toggleMenu() {
    const navList = document.querySelector('.nav-list');
    const hamburger = document.querySelector('.hamburger');

    navList.classList.toggle('active');
    hamburger.classList.toggle('active');
}

// Ensure GSAP is loaded
document.addEventListener("DOMContentLoaded", () => {
    // Profile image animation
    gsap.from(".profile-image", {
        scale: 0.9, // Scale down to 70%
        opacity: 1, // Start transparent
        duration: 0.8, // 0.8 seconds duration
        ease: "power1.inOut", // Smooth easing
    });

    // First name animation
    gsap.from(".first-name", {
        x: "100%", // Start from the right
        y: "-50%", // Start from the top
        opacity: 0,
        duration: 1,
        ease: "sine.inOut", // Elastic easing
    });

    // Last name animation
    gsap.from(".last-name", {
        x: "-100%", // Start from the left
        y: "50%", // Start from the bottom
        opacity: 0,
        duration: 1,
        ease: "sine.inOut", // Elastic easing
    });

    // About button animation
    gsap.from(".aboutBtn", {
        y: "-100%", // Start from below
        opacity: 0,
        duration: 1,
        ease: "power1.inOut", // Bouncy animation
        onComplete: () => {
            // Add jiggling effect after the main animation
            gsap.to(".aboutBtn", {
                scale: 1.05, // Slightly enlarge
                duration: 0.8,
                yoyo: true, // Animate back and forth
                repeat: -1, // Infinite loop
                ease: "power1.inOut",
            });
        },
    });
});