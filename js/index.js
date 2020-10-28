if (window.innerWidth < 768) {
    let swiper = new Swiper ('.container', {
        pagination: {
            el: '.swiper-pagination'
        },
        clickable: true,
        slidesPerView: 'auto',
        spaceBetween : 16,
    });
}

