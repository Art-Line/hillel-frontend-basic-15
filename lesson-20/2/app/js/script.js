$('.js-slider').slick({
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 500,
    // draggable: true,
    dots: true,
    // arrows: false,
    prevArrow: '<button type="button" class="my-btn my-btn_prev"></button>',
    nextArrow: '<button type="button" class="my-btn my-btn_next"></button>',
    dotsClass: 'my-dots',
    mobileFirst: true,
    responsive: [
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
            }
        },
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 4,
                draggable: false,
            }
        },

    ]
});
      