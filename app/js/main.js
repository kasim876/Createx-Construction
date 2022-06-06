// categories tabs

const categoriesTabs = document.querySelector(".categories__tabs");
const categoriesItems = document.querySelectorAll(".categories__item");

const categoriesBtnSelector = ".categories__tabs-btn";
const categoriesBtnActiveSelector = ".categories__tabs-btn_active";
const categoriesItemHiddenSelector = ".categories__item_hidden";

const categoriesBtnClass = "categories__tabs-btn";
const categoriesBtnActiveClass = "categories__tabs-btn_active";
const categoriesItemHiddenClass = "categories__item_hidden";

let category;

if(categoriesTabs) {
  function changeCategory(e) {
    if (e.target.classList.contains(categoriesBtnClass)) {
      document.querySelector(categoriesBtnActiveSelector).classList.remove(categoriesBtnActiveClass);
      e.target.classList.add(categoriesBtnActiveClass);

      category = e.target.dataset.path;
    }
  }

  function showNeededItems() {
    if (category === 'all') {
      document.querySelectorAll(categoriesItemHiddenSelector).forEach(item => {
        item.classList.remove(categoriesItemHiddenClass);
      })
    } else {
      const neededItems = document.querySelectorAll(`[data-target="${category}"]`);

      categoriesItems.forEach(item => {
        if (!Array.from(neededItems).includes(item)) {
          item.classList.add("categories__item_hidden");
        } else {
          item.classList.remove("categories__item_hidden");
        }
      }) 
    }
  }

  categoriesTabs.addEventListener("click", (e) => {
    changeCategory(e);
    showNeededItems();
  });
}

//history slider

if (document.querySelector(".history__slider")) {
  const historyPagination = document.querySelector(".history__pagination");
  
  const historyPaginationCurrentSelector = ".history__pagination-item_current";

  const historyPaginationCurrentClass = "history__pagination-item_current";
  const historyPaginationClass = "history__pagination-item";
  
  const swiper = new Swiper(".history__slider", {
    loop: false,
    spaceBetween: 100,
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
// reviews slider

if(document.querySelector(".reviews__slider")) {
  const swiper = new Swiper(".reviews__slider", {
    loop: false,
    slidedPerView: 1,
    spaceBetween: 30,
    navigation: {
      prevEl: ".reviews__nav-btn_prev",
      nextEl: ".reviews__nav-btn_next",
    },
  })
}

// select

class CustomSelect {
  static selectedItem = ".select__option_selected";
  static elementData = "[data-select]";
  static activeClass = "select_show";
  static selectedClass = "select__option_selected";
  
  constructor(selector) {
    this.element = typeof selector === 'string' ? document.querySelector(selector) : selector;
    this.elementToggle = this.element.querySelector(".select__toggle");
    this.onClickFunc = this.onClick.bind(this);
    this.element.addEventListener("click", this.onClickFunc);
    document.addEventListener("click", (e) => {
      if (e.target.closest(".select") !== this.element && this.element.classList.contains(CustomSelect.activeClass)) {
        this.closeDropdown();
      } 
    });
    document.addEventListener("keydown", (e) => {
      if (e.key === 'Tab' || e.key === 'Escape') {
        this.closeDropdown();
      }
    })
  }

  onClick(e) {
    const target = e.target;
    const type = target.closest(CustomSelect.elementData).dataset.select;

    if (type === "toggle") {
      this.toggle();
    } else if (type === "option") {
      this.changeOption(target);
    } else if (type === "backdrop") {
      this.closeDropdown();
    }
  }

  openDropdown() {
    this.element.classList.add(CustomSelect.activeClass);
  }

  closeDropdown() {
    this.element.classList.remove(CustomSelect.activeClass);
  }

  toggle() {
    if (this.element.classList.contains(CustomSelect.activeClass)) {
      this.closeDropdown();
    } else {
      this.openDropdown();
    }
  }

  changeOption(target) {
    this.elementToggle.innerHTML = target.innerHTML;
    this.elementToggle.setAttribute("value", target.dataset.value);

    this.element.querySelector(CustomSelect.selectedItem).classList.remove(CustomSelect.selectedClass);
    target.classList.add(CustomSelect.selectedClass);

    this.closeDropdown();
  }
}

if (document.querySelector(".select")) {
  const interested = new CustomSelect(".select-interested");
  const place = new CustomSelect(".select-place");
}
// smooth scroll

document.querySelector(".to-top").addEventListener("click", (e) => {
  e.preventDefault()
  
  scroll({
    top: 0,
    behavior: "smooth",
  })
})
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

const workTabs = document.querySelector(".work__tabs");
const workItems = document.querySelectorAll(".work__content-item");
const loadMoreBtn = document.querySelector(".load-more");

const workBtnActiveSelector = ".work__tabs-btn_current";

const workBtnClass = "work__tabs-btn";
const workBtnActiveClass = "work__tabs-btn_current";
const workItemVisibleClass = "work__content-item_visible";
const workItemMoreVisibleClass = "work__content-item_more-visible";

let workCategory;
let neededItems = Array.from(workItems);

if (workTabs) {
  function changeCategory(e) {
    if (e.target.classList.contains(workBtnClass)) {
      document.querySelector(workBtnActiveSelector).classList.remove(workBtnActiveClass);
      e.target.classList.add(workBtnActiveClass);

      workCategory = e.target.dataset.path;
    }
  };

  function showNeededItems() {
    if (workCategory === 'all') {
      neededItems = Array.from(workItems);

      neededItems.forEach(item => {
        item.classList.add(workItemVisibleClass);
      })
    } else {
      neededItems = document.querySelectorAll(`[data-target="${workCategory}"]`);
      neededItems = Array.from(neededItems);

      workItems.forEach(item => {
        if (neededItems.includes(item)) {
          item.classList.add(workItemVisibleClass);
          item.classList.remove(workItemMoreVisibleClass);
        } else {
          item.classList.remove(workItemVisibleClass);
          item.classList.remove(workItemMoreVisibleClass);
        }
      })
    }
  }

  function hideMoreItems() {
    if (neededItems.length > 9) {
      neededItems.slice(9).forEach(item => {
        item.classList.add(workItemMoreVisibleClass);
      })

      loadMoreBtn.classList.remove("load-more_hidden");
    } else {
      loadMoreBtn.classList.add("load-more_hidden");
    }
  }

  const showMoreItems = () => {
    neededItems.slice(9).forEach(item => {
      item.classList.remove(workItemMoreVisibleClass);
    })

    loadMoreBtn.classList.add("load-more_hidden");
  };

  workTabs.addEventListener("click", (e) => {
    changeCategory(e);
    showNeededItems();
    hideMoreItems();
  });
  loadMoreBtn.addEventListener("click", showMoreItems);
}
