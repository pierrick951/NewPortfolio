const toggleMenuBtn = document.querySelector("#menu-btn");
const toggleMenuImg = document.querySelector("#menu-btn img");
const toggledMenu = document.querySelector("#toggled-menu");

toggleMenuBtn.addEventListener('click', toggleNav);

function toggleNav() {
    toggledMenu.classList.toggle("-translate-y-full");

    if (toggledMenu.classList.contains("-translate-y-full")) {
        toggleMenuImg.setAttribute("src", "assets/hamburger.svg"); 
        toggleMenuBtn.setAttribute("aria-expanded", "false");
    } else {
        toggleMenuImg.setAttribute("src", "assets/close.svg"); 
        toggleMenuBtn.setAttribute("aria-expanded", "true");
    }
}
