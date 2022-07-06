"use strict"
const iconMenu = document.querySelector('.menu__icon');

if (iconMenu) {
    const headerMenu = document.querySelector('.header__menu');
    iconMenu.addEventListener("click", function (e) {
        document.body.classList.toggle("_locked")
        iconMenu.classList.toggle("_active")
        headerMenu.classList.toggle("_active")
    });
}



const swiper = new Swiper('.swiper', {
    loop: true,
    pagination: {
        el: '.slider__pagination',
        type: 'fraction',
        renderFraction: function (currentClass, totalClass) {
            return '<span class="current-slide-num">0<span class=' + currentClass + '>0</span></span>' + '<span class="slider-split">/</span>' + '<span class="total-slide-num">0<span class=' + totalClass + '></span></span>';
        }
    },


    navigation: {
        nextEl: '.slider__button-next',
        prevEl: '.slider__button-prev',
    },
    autoHeight: true,
});