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
