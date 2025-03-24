// Function to disable and enable scrolling
const disableScroll = () => {
  if (window.scrollY === 0) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "";
  }
};

const enableScroll = () => {
  document.body.style.overflow = "";
};

// Lock scrolling at the beginning
disableScroll();

// Menu Button Animation
const menuButton = document.getElementById("menuButton");
let isOpen = false;

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

menuButton.addEventListener("click", () => {
  const nav = document.querySelector(".nav");
  if (!isOpen) {
    gsap.to(nav, {
      duration: 0.5, opacity: 0
    });
    nav.classList.add("nav-not-visible");
  } else {
    gsap.to(nav, {
      duration: 0.5, opacity: 1
    });
    gsap.from(".dashboard-link", {
      duration: 0.5,
      y: 500,
      opacity: 1,
      rotationZ: -320,
    });
    gsap.from(".about-link", {
      duration: 1,
      x: 500,
      opacity: 1,
      rotationX: -320,
    });
    gsap.from(".projects-link", {
      duration: 1,
      y: 500,
      opacity: 1,
      rotationY: -320,
    });
    gsap.from(".contact-link", {
      duration: 1,
      x: 500,
      opacity: 1,
      rotationZ: 360,
    });
    nav.classList.remove("nav-not-visible");
  }
});

// GSAP Animation Timeline
gsap.timeline()
  .to(".black-pane", {
    top: "-50%",
    rotationZ: 8,
    duration: 0.5,
    ease: "power2.out",
  })
  .to(".black-pane", {
    top: "0%",
    duration: 1,
    rotationZ: 0,
    ease: "power2.out",
    delay: 0.5,
  })
  .to(".black-pane", {
    top: "100%",
    duration: 1,
    rotationZ: 0,
    ease: "power2.out",
    delay: 1,
  })
  .to(".dashboard-content", {
    duration: 1,
    scale: 1,
    opacity: 1,
    ease: "power2.out",
    delay: -0.7,
  })
  .from(".dashboard-content h1", {
    duration: 1,
    rotationZ: -20,
    y: 500,
    opacity: 0,
    ease: "power2.out",
    delay: -0.7,
  })
  .from(".dashboard-content p", {
    duration: 1,
    rotationZ: -8,
    x: 500,
    opacity: 0,
    ease: "elastic.out(1, 0.3)",
    delay: -0.7,
  })
  .from(".dashboard-content button", {
    duration: 1,
    rotationZ: 20,
    y: 200,
    scale: 0.5,
    opacity: 0,
    ease: "elastic.out(1, 0.3)",
    delay: -0.7,
    onComplete: () => {
      // Enable scrolling after animation ends
      enableScroll();
    },
  });

// Ensure GSAP and ScrollTrigger are loaded
gsap.registerPlugin(ScrollTrigger);

const img = document.getElementById('img1');

// Function to change the image source with a shake effect
const changeImageWithShake = (src) => {
  // Change the image source
  img.src = src;

  // Add a shake animation
  gsap.fromTo(
    img,
    { x: -10, rotation: -8 },
    { x: 10, rotation: 4, duration: 0.1, yoyo: true, repeat: 5, ease: "power1.inOut" }
  );
};
// Detect if the user is on a mobile device
const isMobile = window.innerWidth <= 400;

if (!isMobile) {
  // Desktop: Change image on hover
  img.addEventListener('mouseenter', () => changeImageWithShake('assets/ThidasSenavirathna.jpg'));
  img.addEventListener('mouseleave', () => changeImageWithShake('assets/ThidasSenavirathna2.jpg'));
} else {
  // Mobile: Change image on scroll
  gsap.timeline({
    scrollTrigger: {
      trigger: img,
      start: "top center",
      end: "bottom center",
      scrub: true,
    }
  }).to(img, {
    onUpdate: () => changeImageWithShake('assets/ThidasSenavirathna.jpg'),
    onReverseComplete: () => changeImageWithShake('assets/ThidasSenavirathna2.jpg'),
  });
}
