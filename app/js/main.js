"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// burger menu
var burger = document.querySelector(".burger");
var burgerMenu = document.querySelector(".header__nav");
var overlay = document.querySelector(".overlay");
var burgerActiveClass = "burger_active";
var burgerMenuActiveClass = "header__nav_active";
var overlayActiveClass = "overlay_active";

if (burger) {
  var disScroll = function disScroll() {
    document.body.classList.add('dis-scroll');
  };

  var enScroll = function enScroll() {
    document.body.classList.remove('dis-scroll');
  };

  var toggleBurgerMenu = function toggleBurgerMenu() {
    if (burger.classList.contains(burgerActiveClass)) {
      hideBurgerMenu();
    } else {
      showBurgerMenu();
    }
  };

  var showBurgerMenu = function showBurgerMenu() {
    burger.classList.add(burgerActiveClass);
    burgerMenu.classList.add(burgerMenuActiveClass);
    overlay.classList.add(overlayActiveClass);
    disScroll();
  };

  var hideBurgerMenu = function hideBurgerMenu() {
    burger.classList.remove(burgerActiveClass);
    burgerMenu.classList.remove(burgerMenuActiveClass);
    overlay.classList.remove(overlayActiveClass);
    enScroll();
  };

  burger.addEventListener('click', toggleBurgerMenu);
  overlay.addEventListener('click', hideBurgerMenu);
} // categories tabs


var categoriesTabs = document.querySelector(".categories__tabs");
var categoriesItems = document.querySelectorAll(".categories__item");
var categoriesBtnSelector = ".categories__tabs-btn";
var categoriesBtnActiveSelector = ".categories__tabs-btn_active";
var categoriesItemHiddenSelector = ".categories__item_hidden";
var categoriesBtnClass = "categories__tabs-btn";
var categoriesBtnActiveClass = "categories__tabs-btn_active";
var categoriesItemHiddenClass = "categories__item_hidden";
var category;

if (categoriesTabs) {
  var changeCategory = function changeCategory(e) {
    if (e.target.classList.contains(categoriesBtnClass)) {
      document.querySelector(categoriesBtnActiveSelector).classList.remove(categoriesBtnActiveClass);
      e.target.classList.add(categoriesBtnActiveClass);
      category = e.target.dataset.path;
    }
  };

  var showNeededItems = function showNeededItems() {
    if (category === 'all') {
      document.querySelectorAll(categoriesItemHiddenSelector).forEach(function (item) {
        item.classList.remove(categoriesItemHiddenClass);
      });
    } else {
      var _neededItems = document.querySelectorAll("[data-target=\"".concat(category, "\"]"));

      categoriesItems.forEach(function (item) {
        if (!Array.from(_neededItems).includes(item)) {
          item.classList.add("categories__item_hidden");
        } else {
          item.classList.remove("categories__item_hidden");
        }
      });
    }
  };

  categoriesTabs.addEventListener("click", function (e) {
    changeCategory(e);
    showNeededItems();
  });
} //history slider


if (document.querySelector(".history__slider")) {
  var changeSlide = function changeSlide() {
    document.querySelector(historyPaginationCurrentSelector).classList.remove(historyPaginationCurrentClass);
    document.querySelector("[data-index=\"".concat(swiper.activeIndex, "\"]")).classList.add(historyPaginationCurrentClass);
  };

  var moveToSlide = function moveToSlide(e) {
    if (e.target.classList.contains(historyPaginationClass)) {
      swiper.slideTo(e.target.dataset.index);
    }
  };

  var historyPagination = document.querySelector(".history__pagination");
  var historyPaginationCurrentSelector = ".history__pagination-item_current";
  var historyPaginationCurrentClass = "history__pagination-item_current";
  var historyPaginationClass = "history__pagination-item";
  var swiper = new Swiper(".history__slider", {
    loop: false,
    slidesPerView: 1,
    navigation: {
      prevEl: ".history__nav-btn_prev",
      nextEl: ".history__nav-btn_next"
    },
    effect: 'fade',
    fadeEffect: {
      crossFade: true
    }
  });
  swiper.on('slideChange', changeSlide);
  historyPagination.addEventListener('click', moveToSlide);
} // reviews slider


if (document.querySelector(".reviews__slider")) {
  var _swiper = new Swiper(".reviews__slider", {
    loop: false,
    slidedPerView: 1,
    navigation: {
      prevEl: ".reviews__nav-btn_prev",
      nextEl: ".reviews__nav-btn_next"
    }
  });
} // select


var CustomSelect = /*#__PURE__*/function () {
  function CustomSelect(selector) {
    var _this = this;

    _classCallCheck(this, CustomSelect);

    this.element = typeof selector === 'string' ? document.querySelector(selector) : selector;
    this.elementToggle = this.element.querySelector(".select__toggle");
    this.onClickFunc = this.onClick.bind(this);
    this.element.addEventListener("click", this.onClickFunc);
    document.addEventListener("click", function (e) {
      if (e.target.closest(".select") !== _this.element && _this.element.classList.contains(CustomSelect.activeClass)) {
        _this.closeDropdown();
      }
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === 'Tab' || e.key === 'Escape') {
        _this.closeDropdown();
      }
    });
  }

  _createClass(CustomSelect, [{
    key: "onClick",
    value: function onClick(e) {
      var target = e.target;
      var type = target.closest(CustomSelect.elementData).dataset.select;

      if (type === "toggle") {
        this.toggle();
      } else if (type === "option") {
        this.changeOption(target);
      } else if (type === "backdrop") {
        this.closeDropdown();
      }
    }
  }, {
    key: "openDropdown",
    value: function openDropdown() {
      this.element.classList.add(CustomSelect.activeClass);
    }
  }, {
    key: "closeDropdown",
    value: function closeDropdown() {
      this.element.classList.remove(CustomSelect.activeClass);
    }
  }, {
    key: "toggle",
    value: function toggle() {
      if (this.element.classList.contains(CustomSelect.activeClass)) {
        this.closeDropdown();
      } else {
        this.openDropdown();
      }
    }
  }, {
    key: "changeOption",
    value: function changeOption(target) {
      this.elementToggle.innerHTML = target.innerHTML;
      this.elementToggle.setAttribute("value", target.dataset.value);
      this.element.querySelector(CustomSelect.selectedItem).classList.remove(CustomSelect.selectedClass);
      target.classList.add(CustomSelect.selectedClass);
      this.closeDropdown();
    }
  }]);

  return CustomSelect;
}();

_defineProperty(CustomSelect, "selectedItem", ".select__option_selected");

_defineProperty(CustomSelect, "elementData", "[data-select]");

_defineProperty(CustomSelect, "activeClass", "select_show");

_defineProperty(CustomSelect, "selectedClass", "select__option_selected");

if (document.querySelector(".select")) {
  var interested = new CustomSelect(".select-interested");
  var place = new CustomSelect(".select-place");
} // smooth scroll


document.querySelector(".to-top").addEventListener("click", function (e) {
  e.preventDefault();
  scroll({
    top: 0,
    behavior: "smooth"
  });
}); // video

if (document.querySelector(".video-wrapper")) {
  var videoPlay = function videoPlay() {
    videoWrapper.classList.add(videoWrapperPlayedClass);
    videoPlayBtn.classList.add(videoBtnPlayedClass);
    video.play();
    video.controls = true;
  };

  var video = document.querySelector(".video-wrapper__content");
  var videoWrapper = document.querySelector(".video-wrapper");
  var videoPlayBtn = document.querySelector(".video-wrapper__btn");
  var videoWrapperPlayedClass = "video-wrapper_played";
  var videoBtnPlayedClass = "video-wrapper__btn_played";
  videoPlayBtn.addEventListener("click", videoPlay);
} // work slider


if (document.querySelector(".work-section__slider")) {
  var workSlider = new Swiper(".work-section__slider", {
    loop: false,
    slidesPerView: 1,
    spaceBetween: 30,
    navigation: {
      prevEl: ".work-section__nav-btn_prev",
      nextEl: ".work-section__nav-btn_next"
    },
    breakpoints: {
      1024: {
        slidesPerView: 3
      },
      600: {
        slidesPerView: 2
      }
    }
  });
} //work tabs


var workTabs = document.querySelector(".work__tabs");
var workItems = document.querySelectorAll(".work__content-item");
var loadMoreBtn = document.querySelector(".load-more");
var workBtnActiveSelector = ".work__tabs-btn_current";
var workBtnClass = "work__tabs-btn";
var workBtnActiveClass = "work__tabs-btn_current";
var workItemVisibleClass = "work__content-item_visible";
var workItemMoreVisibleClass = "work__content-item_more-visible";
var workCategory;
var neededItems = Array.from(workItems);

if (workTabs) {
  var _changeCategory = function _changeCategory(e) {
    if (e.target.classList.contains(workBtnClass)) {
      document.querySelector(workBtnActiveSelector).classList.remove(workBtnActiveClass);
      e.target.classList.add(workBtnActiveClass);
      workCategory = e.target.dataset.path;
    }
  };

  var _showNeededItems = function _showNeededItems() {
    if (workCategory === 'all') {
      neededItems = Array.from(workItems);
      neededItems.forEach(function (item) {
        item.classList.add(workItemVisibleClass);
      });
    } else {
      neededItems = document.querySelectorAll("[data-target=\"".concat(workCategory, "\"]"));
      neededItems = Array.from(neededItems);
      workItems.forEach(function (item) {
        if (neededItems.includes(item)) {
          item.classList.add(workItemVisibleClass);
          item.classList.remove(workItemMoreVisibleClass);
        } else {
          item.classList.remove(workItemVisibleClass);
          item.classList.remove(workItemMoreVisibleClass);
        }
      });
    }
  };

  var hideMoreItems = function hideMoreItems() {
    if (neededItems.length > 9) {
      neededItems.slice(9).forEach(function (item) {
        item.classList.add(workItemMoreVisibleClass);
      });
      loadMoreBtn.classList.remove("load-more_hidden");
    } else {
      loadMoreBtn.classList.add("load-more_hidden");
    }
  };

  ;

  var showMoreItems = function showMoreItems() {
    neededItems.slice(9).forEach(function (item) {
      item.classList.remove(workItemMoreVisibleClass);
    });
    loadMoreBtn.classList.add("load-more_hidden");
  };

  workTabs.addEventListener("click", function (e) {
    _changeCategory(e);

    _showNeededItems();

    hideMoreItems();
  });
  loadMoreBtn.addEventListener("click", showMoreItems);
}