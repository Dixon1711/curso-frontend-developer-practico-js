//mostrar y ocultar el desktop menu - bloque 1
const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
menuEmail.addEventListener('click',showDesktopMenu);

//mostrar y ocultar el mobil menu - bloque 2
const burguerMenu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
burguerMenu.addEventListener('click',showMobileMenu);

//mostrar y ocultar el product detail- bloque 3 
const shopCar = document.querySelector('.navbar-shopping-cart');
const shoppingCartContainer = document.querySelector('.product-detail');
shopCar.addEventListener('click',showDetailProduct);

// funcion del bloque 1
function showDesktopMenu(){
    desktopMenu.classList.toggle('inactive');
    mobileMenu.classList.toggle('inactive', true);
    shoppingCartContainer.classList.toggle('inactive',true);
}

// funcion del bloque 2
function showMobileMenu(){
    desktopMenu.classList.toggle('inactive', true);
    mobileMenu.classList.toggle('inactive');
    shoppingCartContainer.classList.toggle('inactive',true);
    
}

// funcion del bloque 3
function showDetailProduct(){
    desktopMenu.classList.toggle('inactive',true);
    mobileMenu.classList.toggle('inactive',true);
    shoppingCartContainer.classList.toggle('inactive');
}