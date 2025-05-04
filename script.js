document.addEventListener("DOMContentLoaded", () => {
  // Mobile menu toggle
  const menuToggle = document.querySelector(".header__menu-toggle");
  const mobileMenu = document.querySelector(".header__links");

  menuToggle.addEventListener("click", () => {
    mobileMenu.classList.toggle("show");
  });

  // Close menu when clicking outside
  document.addEventListener("click", (event) => {
    if (
      !mobileMenu.contains(event.target) &&
      !menuToggle.contains(event.target) &&
      mobileMenu.classList.contains("show")
    ) {
      mobileMenu.classList.remove("show");
    }
  });
});
