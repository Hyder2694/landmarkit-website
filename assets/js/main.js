
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("open");
    menuToggle.setAttribute(
      "aria-expanded",
      navLinks.classList.contains("open") ? "true" : "false"
    );
  });
}
