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
        hamburger.addEventListener("click", () => {
          mobileNav.classList.add("open");
        });

        closeMenu.addEventListener("click", () => {
          mobileNav.classList.remove("open");
        });
      }
    })
    .catch(err => {
      console.error("Error loading header:", err);
    });
});


