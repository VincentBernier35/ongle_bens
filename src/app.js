//* ********* carousel 2 - swiper ***** */

// eslint-disable-next-line no-undef, no-unused-vars
const swiper = new Swiper('.mySwiper', {
  cssMode: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  pagination: {
    el: '.swiper-pagination',
  },
  mousewheel: true,
  keyboard: true,
})