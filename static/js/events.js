const navMenuButton = document.getElementById("nav-menu");
const navItems = document.querySelector(".nav-items");

navMenuButton.addEventListener('click', () => {
    navItems.classList.toggle('show-menu');
});

document.addEventListener('click', (e) => {
    if (!navItems.contains(e.target) && e.target !== navMenuButton) {
        navItems.classList.remove('show-menu');
    }
});