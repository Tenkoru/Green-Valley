export function restTabsHandler() {
  const restBlock = document.querySelector(`.rest`);
  if (restBlock) {
    const restButtonsContainer = restBlock.querySelector(`.rest__tab-buttons`);
    const restButtons = [].slice.call(restButtonsContainer.querySelectorAll(`.rest__button`));
    const restTabsContainer = restBlock.querySelector(`.rest__tabs`);
    const restTabs = [].slice.call(restTabsContainer.querySelectorAll(`.rest__content`));
    const activeButtonClass = `rest__button--active`;
    const buttonClass = `rest__button`;
    const activeTabClass = `rest__content--active`;
    const tabClass = `rest__content`;

    function restButtonsHandler (event) {
      const targetButton = event.target;
      const targetIndex = restButtons.indexOf(targetButton);
      if (event.target.classList.contains(buttonClass)) {
        restButtons.forEach(function(item) {
          item.classList.remove(activeButtonClass);
        })
        restTabs.forEach(function(item) {
          item.classList.remove(activeTabClass);
        })
        event.target.classList.add(activeButtonClass);
        restTabs[targetIndex].classList.add(activeTabClass);
      }
    }

    restButtonsContainer.addEventListener(`click`, restButtonsHandler);
  }
}

