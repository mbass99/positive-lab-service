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

$(document).ready(() => {
  $(".resources-slider-div .resources-sliders").slick({
    autoplay: true,
    autoplaySpeed: 3000,
    dots: true,
    slidestoScroll: 4,
    slidesToShow: 3,
  });
});
