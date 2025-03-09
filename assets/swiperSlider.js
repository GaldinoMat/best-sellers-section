function handleInit(wrapper) {
  if (window.innerWidth >= 1024) {
    const spinner = document.querySelector(".lds-ring");
    if (spinner !== null) {
      wrapper.style.display = "flex";
      spinner.style.display = "none";
    }
  }
}

function handleResize(wrapper) {
  if (wrapper !== null) {
    window.innerWidth >= 1024 ? handleInit(wrapper) : wrapper.style.display = "none";
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const bestSellerSwiper = document.querySelector(".swiper");

  if (bestSellerSwiper !== null) {
    const wrapper = bestSellerSwiper.querySelector(".slider-wrapper");

    new Swiper(bestSellerSwiper, {
      scrollbar: {
        el: ".swiper-scrollbar",
        hide: false,
        draggable: true,
        dragSize: 480,
      },
      enabled: false,
      on: {
        init: handleInit(wrapper),
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
        // when window width is >= 1440px
        1440: {
          enabled: true,
          slidesPerView: 5,
          spaceBetween: 24,
          slidesOffsetAfter: 128,
          slidesOffsetBefore: 128,
        },
      },
    });

    window.addEventListener("resize", () => handleResize(wrapper));
  }
});
