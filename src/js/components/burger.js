// burger menu

const burger = document.querySelector(".burger");
const burgerMenu = document.querySelector(".header__nav");
const overlay = document.querySelector(".overlay");

const burgerActiveClass = "burger_active";
const burgerMenuActiveClass = "header__nav_active";
const overlayActiveClass = "overlay_active";

if (burger) {
  function disScroll() {
    document.body.classList.add('dis-scroll');
  }
  
  function enScroll() {
    document.body.classList.remove('dis-scroll');
  }
  
  function toggleBurgerMenu() {
    if (burger.classList.contains(burgerActiveClass)) {
      hideBurgerMenu();
    } else {
      showBurgerMenu();
    }
  }
  
  function showBurgerMenu() {
    burger.classList.add(burgerActiveClass);
    burgerMenu.classList.add(burgerMenuActiveClass);
    overlay.classList.add(overlayActiveClass);
  
    disScroll();
  }
  
  function hideBurgerMenu() {
    burger.classList.remove(burgerActiveClass);
    burgerMenu.classList.remove(burgerMenuActiveClass);
    overlay.classList.remove(overlayActiveClass);
  
    enScroll();
  }
  
  burger.addEventListener('click', toggleBurgerMenu);
  overlay.addEventListener('click', hideBurgerMenu);
}