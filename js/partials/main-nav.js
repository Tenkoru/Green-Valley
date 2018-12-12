export function mainNavHandler() {
  const mainNav = document.querySelector(`.main-nav`);
  if (mainNav) {
    const mainNavButton = mainNav.querySelector(`.main-nav__button`);
    const mainNavList = mainNav.querySelector(`.main-nav__list`);
    const mainNavListActiveClass = `main-nav__list--active`;

    function mainNavHandler(event) {
      if (mainNavList.classList.contains(mainNavListActiveClass)) {
        mainNavList.classList.remove(mainNavListActiveClass);
      } else {
        mainNavList.classList.add(mainNavListActiveClass);
      }
    }

    mainNavButton.addEventListener(`click`, mainNavHandler);
  }
}
