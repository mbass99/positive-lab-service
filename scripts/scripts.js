// SLIDER JAVASCRIPT

$(document).ready(() => {
  $(".slider .hero-sliders").slick({
    autoplay: true,
    autoplaySpeed: 3000,
    dots: true,
    slidestoScroll: 3,
    slidesToShow: 1,
  });
});

$('.resources-sliders').slick({
  autoplay: true,
  dots: true,
  infinite: false,
  speed: 3000,
  slidesToShow: 3,
  slidesToScroll: 4,
  responsive: [{
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});