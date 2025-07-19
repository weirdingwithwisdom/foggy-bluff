document.addEventListener("DOMContentLoaded", function () {
  fetch("header.html")
    .then(response => response.text())
    .then(data => {
      document.getElementById("site-header").innerHTML = data;
    })
    .catch(err => {
      console.error("Error loading header:", err);
    });
});
