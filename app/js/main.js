if(document.querySelector(".reviews__slider")) {
  const swiper = new Swiper(".reviews__slider", {
    loop: false,
    slidedPerView: 1,
    navigation: {
      prevEl: ".reviews__nav-btn_prev",
      nextEl: ".reviews__nav-btn_next",
    },
    effect: "coverflow"
  })
}
if(document.querySelector(".work-section__slider")) {
  const workSlider = new Swiper(".work-section__slider", {
    loop: false,
    slidesPerView: 3,
    spaceBetween: 30,
    navigation: {
      prevEl: ".work-section__nav-btn_prev",
      nextEl: ".work-section__nav-btn_next",
    }
  })
}