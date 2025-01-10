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