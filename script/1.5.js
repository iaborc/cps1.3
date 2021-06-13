const slider = document.querySelector('.swiper-container')

const swiper = new Swiper(slider, {
    spaceBetween: 16,
    slidesPerView: "auto",
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
    },
})