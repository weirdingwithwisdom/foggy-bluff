document.addEventListener("DOMContentLoaded", function () {
  fetch("header.html")
    .then(response => response.text())
    .then(data => {
      document.getElementById("site-header").innerHTML = data;

      // Wait until header is loaded before assigning toggle behavior
      const hamburger = document.getElementById("hamburger");
      const navMenu = document.getElementById("nav-menu");

      if (hamburger && navMenu) {
        hamburger.addEventListener("click", () => {
          navMenu.classList.toggle("open");
        });
      }
    })
    .catch(err => {
      console.error("Error loading header:", err);
    });
});



