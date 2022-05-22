// reviews slider
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

// smooth scroll
const toTopBtn = document.querySelector(".to-top");

if(toTopBtn) {
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
}

// work slider
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

//work tabs
const workTabs = document.querySelector(".work__tabs"),
        workTabsBtn = document.querySelector(".work__tabs-btn");

let workTabsBtnCurrent = document.querySelector(".work__tabs-btn_current");

const workItems = document.querySelectorAll(".work__content-item");

const loadMoreBtn = document.querySelector(".load-more");

let path;

if (workTabs) {
  const changeCategory = (event) => {
    if (event.target.classList.contains("work__tabs-btn")) {
      workTabsBtnCurrent.classList.remove("work__tabs-btn_current");
      event.target.classList.add("work__tabs-btn_current");
      workTabsBtnCurrent = event.target;

      path = event.target.dataset.path;

      workItems.forEach(el => {
        el.classList.remove("work__content-item_visible");
        el.classList.remove("work__content-item_more-visible");
      });

      if (path === "all") {
        workItems.forEach(el => {
          el.classList.add("work__content-item_visible");
        });

        Array.from(workItems).slice(9).forEach(el => {
          el.classList.add("work__content-item_more-visible");
        });

        loadMoreBtn.classList.remove("load-more_hidden");
      } else {
        const visibleItems = Array.from( document.querySelectorAll(`[data-target=${path}]`) );

        visibleItems.forEach(el => {
          el.classList.add("work__content-item_visible");
        });

        if (visibleItems.length > 9) {
          visibleItems.slice(9).forEach(el => {
            el.classList.add("work__content-item_more-visible");
          });

          loadMoreBtn.classList.remove("load-more_hidden");
        } else {
          loadMoreBtn.classList.add("load-more_hidden");
        }
      }
    }
  };

  const showMoreItems = () => {
    document.querySelectorAll(".work__content-item_more-visible").forEach(el => {
      el.classList.remove("work__content-item_more-visible");
    });

    loadMoreBtn.classList.add("load-more_hidden");
  };

  workTabs.addEventListener("click", changeCategory);
  loadMoreBtn.addEventListener("click", showMoreItems);
}
