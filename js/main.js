var swiper = new Swiper(".worst", {
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,

    navigation: {
        nextEl: ".next1",
        prevEl: ".prev1",
    },
    breakpoints: {
        640:{
            slidesPerView: 3,
            spaceBetween: 10,
        },
        1440:{
            slidesPerView: 4,
            spaceBetween: 10,
        },
    },

});
var swiper1 = new Swiper(".board", {
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,

    navigation: {
        nextEl: ".next2",
        prevEl: ".prev2",
    },
    breakpoints: {
        640:{
            slidesPerView: 3,
            spaceBetween: 10,
        },
        1440:{
            slidesPerView: 4,
            spaceBetween: 10,
        },
    },
});