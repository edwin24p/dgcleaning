let hamburger = document.querySelector(".navbar__hamburger");
let close =document.querySelector(".navbar__close");
let menu = document.querySelector(".navbar__menu");
let overlay = document.querySelector(".navbar__overlay");

hamburger.addEventListener('click', function(e){
menu.classList.add('active');
overlay.classList.add('active');
});

close.addEventListener('click', function(e){
    menu.classList.remove('active');
    overlay.classList.remove('active');
});

overlay.addEventListener('click',function(e){
    menu.classList.remove('active');
    overlay.classList.remove('active');
} )

