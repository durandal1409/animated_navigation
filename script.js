const menuBars = document.getElementById('menu-bars');
const navItems = [];
for (i=1; i<=5; i++) {
    navItems.push(document.getElementById(`nav-${i}`));
}
const overlay = document.getElementById('overlay');


function toggleNav() {
    if (menuBars.classList.contains('change')) {
        // Animate out overlay
        overlay.classList.replace('overlay-slide-right', 'overlay-slide-left');
        // Animate out nav bars
        navItems.forEach((navItem, i) => {
            navItem.classList.replace(`slide-in-${i+1}`, `slide-out-${i+1}`);
        });
    } else {
        // Animate in overlay
        overlay.classList.replace('overlay-slide-left', 'overlay-slide-right');
        // Animate in nav bars
        navItems.forEach((navItem, i) => {
            navItem.classList.replace(`slide-out-${i+1}`, `slide-in-${i+1}`);
        });
    }
    menuBars.classList.toggle('change');
}

menuBars.addEventListener('click', toggleNav);
navItems.forEach(navItem => {
    navItem.addEventListener('click', toggleNav);
});