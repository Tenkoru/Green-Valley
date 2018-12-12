import { utils as utils } from './utils';

export function formHandler() {
  const formContainer = document.querySelector(`.form`);
  if (formContainer) {
    const placeTypeContainer = formContainer.querySelector(`.place-type`);
    const houseTypeContainer = formContainer.querySelector(`.house-type`);

    function placeTypeHandler(event) {
      const placeTypeItems = [].slice.call(placeTypeContainer.querySelectorAll(`.place-type__type`));
      const placeTypeClass = `place-type__type`;
      const placeTypeActiveClass = `place-type__type--active`;
      const targetElement = utils.delegation(event.target, placeTypeClass, this);

      if (targetElement) {
        placeTypeItems.forEach(function(item) {
          item.classList.remove(placeTypeActiveClass);
          item.querySelector(`.place-type__input`).checked = false;
        });
        targetElement.classList.add(placeTypeActiveClass);
        targetElement.querySelector(`.place-type__input`).checked = true;
      }
    }

    function houseTypeHandler(event) {
      const houseTypeItems = [].slice.call(houseTypeContainer.querySelectorAll(`.house-type__title`));
      const houseTypeClass = `house-type__title`;
      const houseTypeActiveClass = `house-type__title--active`;
      const targetElement = utils.delegation(event.target, houseTypeClass, this);
      const stepContainer = formContainer.querySelector(`.step--3`);
      const featuresArray = [].slice.call(stepContainer.querySelectorAll(`.house-features`));
      const featuresActiveClass = `house-features--active`;

      if (targetElement) {
        const indexOfHouseType = houseTypeItems.indexOf(targetElement);
        houseTypeItems.forEach(function(item) {
          item.classList.remove(houseTypeActiveClass);
          item.querySelector(`.house-type__type`).checked = false;
        });
        featuresArray.forEach(function(item) {
          item.classList.remove(featuresActiveClass);
        })
        targetElement.classList.add(houseTypeActiveClass);
        targetElement.querySelector(`.house-type__type`).checked = true;
        featuresArray[indexOfHouseType].classList.add(featuresActiveClass);
      }
    }

    placeTypeContainer.addEventListener(`click`, placeTypeHandler);
    houseTypeContainer.addEventListener(`click`, houseTypeHandler);
  }
}
