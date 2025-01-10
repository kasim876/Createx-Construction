// work slider
if(document.querySelector(".work-section__slider")) {
  const workSlider = new Swiper(".work-section__slider", {
    loop: false,
    slidesPerView: 1,
    spaceBetween: 30,
    navigation: {
      prevEl: ".work-section__nav-btn_prev",
      nextEl: ".work-section__nav-btn_next",
    },
    breakpoints: {
      1024: {
        slidesPerView: 3,
      },
      600: {
        slidesPerView: 2,
      }
    }
  })
}
