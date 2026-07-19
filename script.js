const menuButton = document.querySelector("#menu-button");
const navigationLinks = document.querySelector("#nav-links");
const currentYear = document.querySelector("#current-year");

if (currentYear) {
    currentYear.textContent = new Date().getFullYear();
}

if (menuButton && navigationLinks) {
    menuButton.addEventListener("click", () => {
        const menuIsOpen = navigationLinks.classList.toggle("active");

        menuButton.setAttribute(
            "aria-expanded",
            String(menuIsOpen)
        );
    });

    navigationLinks.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", () => {
            navigationLinks.classList.remove("active");
            menuButton.setAttribute("aria-expanded", "false");
        });
    });
}