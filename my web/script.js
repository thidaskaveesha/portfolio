function toggleMenu() {
    const navList = document.querySelector('.nav-list');
    const hamburger = document.querySelector('.hamburger');

    navList.classList.toggle('active');
    hamburger.classList.toggle('active');
}

// Ensure GSAP is loaded
document.addEventListener("DOMContentLoaded", () => {
    // remove hashing from url
    // Check if there's a hash in the URL
    if (window.location.hash) {
        // Get the current path and hash
        const currentPath = window.location.pathname;
        const hash = window.location.hash;

        // Replace the hash with a clean path
        const newPath = `${currentPath}${hash.replace('#', '/')}`;
        history.replaceState(null, null, newPath);
    }

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


// Smooth scrolling for navigation links
document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll('a[href^="#"]')

  for (const link of links) {
    link.addEventListener("click", function (e) {
      e.preventDefault()

      const targetId = this.getAttribute("href")
      const targetElement = document.querySelector(targetId)

      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 60,
          behavior: "smooth",
        })

        // Close mobile menu if open
        const navList = document.querySelector(".nav-list")
        const hamburger = document.querySelector(".hamburger")
        if (navList.classList.contains("active")) {
          navList.classList.remove("active")
          hamburger.classList.remove("active")
        }
      }
    })
  }

  // Animation for skill cards
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate")
        }
      })
    },
    { threshold: 0.1 },
  )

  document.querySelectorAll(".skill-card").forEach((card) => {
    observer.observe(card)
  })

  document.querySelectorAll(".project-card").forEach((card) => {
    observer.observe(card)
  })
})

// Form submission handling
const contactForm = document.getElementById("contact-form")
if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault()

    // Get form data
    const name = document.getElementById("name").value
    const email = document.getElementById("email").value
    const message = document.getElementById("message").value

    // Here you would typically send the data to a server
    // For now, we'll just show a success message
    const formGroups = document.querySelectorAll(".form-group")
    formGroups.forEach((group) => {
      group.style.display = "none"
    })

    document.querySelector(".submit-btn").style.display = "none"

    const successMessage = document.createElement("div")
    successMessage.className = "success-message"
    successMessage.textContent = `Thanks ${name}! Your message has been sent successfully.`
    successMessage.style.color = "green"
    successMessage.style.padding = "20px"
    successMessage.style.textAlign = "center"

    contactForm.appendChild(successMessage)

    // Reset form after 5 seconds
    setTimeout(() => {
      contactForm.reset()
      formGroups.forEach((group) => {
        group.style.display = "block"
      })
      document.querySelector(".submit-btn").style.display = "block"
      successMessage.remove()
    }, 5000)
  })
}