/* Show menu start */
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close');

if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
    });
};

if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    });
};
/* Show menu end */
/* Remove menu mobile start */
const navLink = document.querySelectorAll('.nav_link');

const linkAction = () => {
    const navMenu = document.getElementById('nav-menu');

    navMenu.classList.remove('show-menu');
};

navLink.forEach(n => n.addEventListener('click', linkAction));
/* Remove menu mobile end */

/* Add blur header start */
const blurHeader = () => {
    const header = document.getElementById('header');

    this.scrollY >= 50 ? header.classList.add('blur-header')
                       : header.classList.remove('blur-header');
};

window.addEventListener('scroll', blurHeader);
/* Add blur header end */

/* Swiper planets start */
const swiperTravel = new Swiper('.travel_swiper', {
    loop: true,
    spaceBetween: '32',
    grabCursor: true,
    slidersPerView: 'auto',
    centeredSliders: 'auto',

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    breakpoints: {
        600: {
            slidesPerView: 2,
        },
        900: {
            slidesPerView: 3,
        },
    },
});
/* Swiper planets end */

/* Show scroll up start */
const scrollUp = () => {
    const scrollUp = document.getElementById('scroll-up');

    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                        : scrollUp.classList.remove('show-scroll');
};

window.addEventListener('scroll', scrollUp);
/* Show scroll up end */
/* Scroll sections active link start */
const sections = document.querySelectorAll('section[id]');

const scrollActive = () => {
    const scrollDowm = window.scrollY;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id'),
              sectionsClass = document.querySelector('.nav_menu a[href*=' + sectionId + ']');

        if(scrollDowm > sectionTop && scrollDowm <= sectionTop + sectionHeight) {
            sectionsClass.classList.add('active-link');
        } else {
            sectionsClass.classList.remove('active-link');
        };
    });
};

window.addEventListener('scroll', scrollActive);
/* Scroll sections active link end */

/* Scroll reveal animation start */
const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2500,
    delay: 300,
})

sr.reveal('.home_data, .travel_swiper, .contact_container');
sr.reveal('.home_img', {origin: 'bottom'});
sr.reveal('.home_ovni', {delay: 800})
sr.reveal('.explore_img', {origin: 'left'});
sr.reveal('.explore_data', {origin: 'right'});
sr.reveal('.explore_planet', {origin: 'right', delay: 800});
sr.reveal('.history_card', {interval: 100});
sr.reveal('.history_planet-1', {origin: 'left', delay: 1000});
sr.reveal('.history_planet-2', {origin: 'right', delay: 1200});
sr.reveal('.footer_plaet-1', {origin: 'bottom', delay: 600});
sr.reveal('.footer_plaet-2', {delay: 800});
/* Scroll reveal animation end */