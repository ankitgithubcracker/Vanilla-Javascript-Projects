const mobile_nav = document.querySelector(".mobile-navbar-btn");
const nav_header = document.querySelector(".header");

mobile_nav.addEventListener('click',function(){
    toggleNavbar();
});

function toggleNavbar(){
    nav_header.classList.toggle("active");
}