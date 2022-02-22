let burgerMenu = document.getElementsByClassName('hamburger-menu');
let openMenu = document.getElementsByClassName('fa-bars');
let closeMenu = document.getElementsByClassName('close');

openMenu[0].addEventListener('click', function() {
    burgerMenu[0].style.display='block';
})

closeMenu[0].addEventListener('click', function() {
    burgerMenu[0].style.display='none';
})