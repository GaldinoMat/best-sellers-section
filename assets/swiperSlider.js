document.addEventListener("DOMContentLoaded", () => {
  const bestSellerSwiper = document.querySelector(".swiper");

  if (bestSellerSwiper !== null) {
    new Swiper(bestSellerSwiper, {
      scrollbar: {
        el: ".swiper-scrollbar",
        hide: false,
        draggable: true,
        dragSize: 480,
      },
      enabled: false,
      on: {
        init: function () {
          if (window.innerWidth >= 1024) {
            const wrapper = bestSellerSwiper.querySelector(".slider-wrapper");
            const spinner = document.querySelector(".lds-ring");
            if (wrapper !== null && spinner !== null) {
              wrapper.style.display = "flex";
              spinner.style.display = "none";
            }
          }
        },
      },
      breakpoints: {
        // when window width is >= 1024px
        1024: {
          enabled: true,
          slidesPerView: 3,
          spaceBetween: 12,
          slidesOffsetAfter: 56,
          slidesOffsetBefore: 56,
        },
        1440: {
          enabled: true,
          slidesPerView: 5,
          spaceBetween: 24,
          slidesOffsetAfter: 128,
          slidesOffsetBefore: 128,
        },
      },
    });
  }
});
