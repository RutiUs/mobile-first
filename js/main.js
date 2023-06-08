$(document).ready(function () {
    $('.top-slider').slick({
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: '<button type="button" class="slick-arrow slick-prev"><img src="../images/ikon/left-arrow.svg"></button>',
        prevArrow: '<button type="button" class="slick-arrow slick-next"><img src="../images/ikon/right-arrow.svg"></button>',
        responsive: [
          {
            breakpoint: 1024,
            settings: {
            }
          },
          {
          },
          {
            breakpoint: 640,
            settings: {
                arrows:false,
            }
          }
        ]
      });
});

$(document).ready(function () {
  $('.blockquote__slider').slick({
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  });
});
