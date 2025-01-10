
// reviews slider

if(document.querySelector(".reviews__slider")) {
  const swiper = new Swiper(".reviews__slider", {
    loop: false,
    slidedPerView: 1,
    navigation: {
      prevEl: ".reviews__nav-btn_prev",
      nextEl: ".reviews__nav-btn_next",
    },
  })
}
