const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const burguerMenu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');

menuEmail.addEventListener('click',showDesktopMenu);
burguerMenu.addEventListener('click',showMobileMenu);

function showDesktopMenu(){
    desktopMenu.classList.toggle('inactive');
    mobileMenu.classList.toggle('inactive', true);
}
function showMobileMenu(){
    mobileMenu.classList.toggle('inactive');
    desktopMenu.classList.toggle('inactive', true);
}