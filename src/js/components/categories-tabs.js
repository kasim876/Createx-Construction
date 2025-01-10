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
