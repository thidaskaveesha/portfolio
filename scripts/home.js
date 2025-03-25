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


// Ensure GSAP and ScrollTrigger are loaded
gsap.registerPlugin(ScrollTrigger);

// Animate text movement when the user is in the #about section
gsap.to(".text-movement", {
  scrollTrigger: {
    trigger: "#about", // Trigger animation when #about is in view
    start: "top center", // Start animation when the top of #about hits the center of the viewport
    end: "bottom center", // End animation when the bottom of #about hits the center of the viewport
    toggleActions: "play none none reset", // Play animation when in view, no resets
  },
  x: "-400%", // Move text to the left
  duration: 30, // Duration of the animation
  ease: "none", // Linear easing
});

// Fade in another div when the user is in the #about section
gsap.to(".another-div", {
  scrollTrigger: {
    trigger: "#about", // Trigger animation when #about is in view
    start: "top center", // Start animation when the top of #about hits the center of the viewport
    toggleActions: "play none none reset", // Play animation when in view, no resets
  },
  opacity: 1, // Make the div fully visible
  duration: 10, // Duration of the fade-in
  ease: "power1.inOut", // Smooth easing
  delay: 5, // Delay the start of the animation
});


// Import Three.js and GLTFLoader
const container = document.querySelector(".another-div");
let scene, camera, renderer, loader, model, mixer;

// Initialize Three.js Scene
function init() {
  // Scene
  scene = new THREE.Scene();

  // Camera
  const fov = 75; // Field of View
  const aspect = container.clientWidth / container.clientHeight;
  const near = 0.1;
  const far = 1000;
  camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
  camera.position.set(0, 1, 5);

  // Renderer
  renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer.setSize(container.clientWidth, container.clientHeight);
  renderer.setPixelRatio(window.devicePixelRatio);
  container.appendChild(renderer.domElement);

  // Light
  const light = new THREE.AmbientLight(0xffffff, 1);
  scene.add(light);

  // Load GLB Model
  loader = new THREE.GLTFLoader();
  loader.load(
    "assets/document.glb", // Replace with the path to your GLB file
    (gltf) => {
      model = gltf.scene;
      scene.add(model);

      // Optional: Set initial scale, position, and rotation
      // Set the initial scale of the model
      model.scale.set(3, 3, 3);
      model.position.set(0, 0, 0);

      // Start the animation
      animate();
    },
    undefined,
    (error) => {
      console.error("An error occurred while loading the GLB file:", error);
    }
  );
}

// Animation Loop
function animate() {
  requestAnimationFrame(animate);

  if (model) {
    // Rotate the model
    model.rotation.y += 0.01;
    // Check and update material opacity
    
  }

  renderer.render(scene, camera);
}

// Ensure responsive resizing
window.addEventListener("resize", () => {
  camera.aspect = container.clientWidth / container.clientHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(container.clientWidth, container.clientHeight);
});

// Initialize Three.js
init();

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

// Timeline for paragraph animations with ScrollTrigger
const timeline = gsap.timeline({
  delay: 18,
  scrollTrigger: {
    trigger: "#about", // Trigger animation when #about-me is in view
    start: "top center", // Start when the top of #about-me hits the center of the viewport
    end: "bottom center", // End when the bottom of #about-me hits the center of the viewport
    toggleActions: "play none none reset", // Play animation, reset when out of view
  },
});

timeline
.from(".self", { y: 50, opacity: 0, duration: 2 })
//.to(".self", { opacity: 0, duration: 2 })
.from(".self1", { y: 50, opacity: 0, duration: 2 }, "-=0.00005")
//.to(".self1", { opacity: 0, duration: 2})
.from(".self2", { y: 50, opacity: 0, duration: 2 }, "-=0.00005")
//.to(".self2", { opacity: 0, duration: 2 })
.from(".self3", { y: 50, opacity: 0, duration: 2 }, "-=0.00005")
//.to(".self3", { opacity: 0, duration: 2 })
.from(".self4", { y: 50, opacity: 0, duration: 2 }, "-=0.00005")
//.to(".self4", { opacity: 0, duration: 2 })
.from(".self5", { y: 50, opacity: 0, duration: 2 }, "-=0.00005")
//.to(".self5", { opacity: 0, duration: 2 })
.from(".self6", { y: 50, opacity: 0, duration: 2 }, "-=0.00005")
//.to(".self6", { opacity: 0, duration: 2 })
.from(".self7", { y: 50, opacity: 0, duration: 2 }, "-=0.00005")
//.to(".self7", { opacity: 0, duration: 2 });