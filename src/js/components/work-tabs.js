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
