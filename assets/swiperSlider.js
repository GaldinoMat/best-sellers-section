document.addEventListener("DOMContentLoaded", () => {
  const bestSellerSwiper = document.querySelector(".swiper");

  if (bestSellerSwiper !== null) {
    new Swiper(bestSellerSwiper, {
      scrollbar: {
        el: ".swiper-scrollbar",
        hide: false,
        draggable: true
      },
      enabled: false,
      breakpoints: {
        // when window width is >= 1024px
        1024: {
          enabled: true,
          slidesPerView: 4.5,
          spaceBetween: 30,
          slidesOffsetAfter: 128,
          slidesOffsetBefore: 128,
        },
      },
    });
  }
});
