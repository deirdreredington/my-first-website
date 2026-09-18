// Mobile navigation menu

const menuButton = document.querySelector(".menu-button");
const closeButton = document.querySelector(".close-menu");
const mobileMenu = document.querySelector(".mobile-menu");
const mobileLinks = document.querySelectorAll(".mobile-menu a");

if (menuButton && mobileMenu) {
    menuButton.addEventListener("click", () => {
        mobileMenu.classList.add("active");
        mobileMenu.setAttribute("aria-hidden", "false");
        menuButton.setAttribute("aria-expanded", "true");
    });
}

if (closeButton && mobileMenu) {
    closeButton.addEventListener("click", () => {
        mobileMenu.classList.remove("active");
        mobileMenu.setAttribute("aria-hidden", "true");
        menuButton.setAttribute("aria-expanded", "false");
    });
}

mobileLinks.forEach((link) => {
    link.addEventListener("click", () => {
        mobileMenu.classList.remove("active");
        mobileMenu.setAttribute("aria-hidden", "true");
        menuButton.setAttribute("aria-expanded", "false");
    });
});


// Automatically display the current year in the footer

const year = document.getElementById("current-year");

if (year) {
    year.textContent = new Date().getFullYear();
}
