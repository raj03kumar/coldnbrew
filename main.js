//Initialize AOS Onscroll animation library
AOS.init();

// Navbar
// Get elements from the DOM
const navbar = document.querySelector('.navbar');
const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');

// Add click event to menu button
menuBtn.addEventListener('click', ()=>{
    // Add menu open styles
    menu.classList.add('.menu-open');
});

// Add click event to window 
// We have to use this method to prevent this event from firing on child elements
window.addEventListener('click', e=>{
    // If the clicked element contains the 'menu-open' class
    if(e.target.classList.contains('menu-open')){
        // Remove the menu-open class
        e.target.classList.remove('menu-open');
    }
});

// Add scroll event listener to the page
window.addEventListener("scroll", ()=>{
    // If the page is scrolled
    if(pageYOffset>0){
        // Activate navbar
        navbar.classList.add('navbar-active');
    }
    else{
        // Deactivate navbar
        navbar.classList.remove('navbar-active');
    }
});

// Swiper
const swiper = new Swiper(".mySwiper", {
    slidesPerView:1,
    spaceBetween: 30,
    slidesPerGroup: 1,
    loop: true,
    loopFillGroupWithBlank: true,
    breakpoints:{
        '800':{slidesPerView:2, slidesPerGroup:2},
        '1000':{slidesPerView:3, slidesPerGroup:3},
    },
    pagination:{
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation:{
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});