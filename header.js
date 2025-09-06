document.addEventListener("DOMContentLoaded", function () {
  // Load header.html dynamically
  fetch("header.html")
    .then(response => response.text())
    .then(data => {
      document.getElementById("site-header").innerHTML = data;

      // Add functionality for hamburger toggle
      const hamburger = document.getElementById("hamburger");
      const mobileNav = document.getElementById("mobileNav");
      const closeMenu = document.getElementById("closeMenu");

      if (hamburger && mobileNav && closeMenu) {
        // Open menu
        hamburger.addEventListener("click", () => {
          mobileNav.classList.add("open");
          hamburger.style.display = "none";
          closeMenu.style.display = "block";
        });

        // Close menu
        closeMenu.addEventListener("click", () => {
          mobileNav.classList.remove("open");
          hamburger.style.display = "block";
          closeMenu.style.display = "none";
        });

        // Just in case: make sure correct visibility on page load
        closeMenu.style.display = "none";
        hamburger.style.display = window.innerWidth <= 768 ? "block" : "none";

        // Optional: re-check if window resizes (e.g. user rotates device or resizes desktop)
        window.addEventListener("resize", () => {
          const isMobile = window.innerWidth <= 768;
          if (!mobileNav.classList.contains("open")) {
            hamburger.style.display = isMobile ? "block" : "none";
            closeMenu.style.display = "none";
          }
        });
      }
    })
    .catch(err => {
      console.error("Error loading header:", err);
    });
});

