//history slider

if (document.querySelector(".history__slider")) {
  const historyPagination = document.querySelector(".history__pagination");
  
  const historyPaginationCurrentSelector = ".history__pagination-item_current";

  const historyPaginationCurrentClass = "history__pagination-item_current";
  const historyPaginationClass = "history__pagination-item";
  
  const swiper = new Swiper(".history__slider", {
    loop: false,
    slidesPerView: 1,
    navigation: {
      prevEl: ".history__nav-btn_prev",
      nextEl: ".history__nav-btn_next",
    },
    effect: 'fade',
    fadeEffect: {
    crossFade: true,
    }
  })

  function changeSlide() {
    document.querySelector(historyPaginationCurrentSelector).classList.remove(historyPaginationCurrentClass);
    document.querySelector(`[data-index="${swiper.activeIndex}"]`).classList.add(historyPaginationCurrentClass);
  }

  function moveToSlide(e) {
    if (e.target.classList.contains(historyPaginationClass)) {
      swiper.slideTo(e.target.dataset.index);
    }
  }

  swiper.on('slideChange', changeSlide)
  historyPagination.addEventListener('click', moveToSlide);
}