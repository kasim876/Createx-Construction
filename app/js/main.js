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
const toTopBtn = document.querySelector(".to-top");

const smoothScroll = new SmoothScroll(".to-top", {
  updateURL: false,
  speed: 200,
});

const firstSectionHeight = document.querySelector(".first").offsetHeight;

const isScrollBtnVisible = () => {
  if(window.pageYOffset > firstSectionHeight) {
    toTopBtn.classList.add("to-top_visible");
  } else {
    toTopBtn.classList.remove("to-top_visible");
  }
}

window.addEventListener("scroll", isScrollBtnVisible);
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