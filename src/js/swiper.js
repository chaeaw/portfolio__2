const redesign__swiper = new Swiper('.redesign__swiper', {
    // Optional parameters
    direction: 'horizontal',
    slidesPerView: "auto",
    spaceBetween: 200,
    allowTouchMove: true,
    // centeredSlides: true,
    loop: true,

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

});

const create__swiper = new Swiper('.create__swiper', {
    // Optional parameters
    direction: 'horizontal',

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

});