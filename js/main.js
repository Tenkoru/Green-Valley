import { restTabsHandler as restTabsInit } from './partials/rest-tabs';
import { mainNavHandler as mainNavInit } from './partials/main-nav';
import { formHandler as formInit } from './partials/form';

restTabsInit();
mainNavInit();
formInit();

$(document).ready(function() {
  $('.main-gallery__list').lightSlider({
    gallery: true,
    item: 1,
    loop: true,
    thumbItem: 6,
    slideMargin: 0,
    galleryMargin: 0,
    thumbMargin: 0,
    enableDrag: false,
    speed: 400,
    currentPagerPosition:'middle',
    onSliderLoad: function(el) {
      $('.main-gallery__list').removeClass('cS-hidden');
      el.lightGallery({
        selector: '.main-gallery__list .lslide'
      });
    },
    responsive : [
      {
        breakpoint:768,
        settings: {
          gallery: false,
          pager: false,
          controls: false
        }
      }
    ]
  });

  $('.feedback__items').lightSlider({
    item: 2,
    pager: false,
    adaptiveHeight: true,
    onSliderLoad: function() {
      $('#autoWidth').removeClass('cS-hidden');
    },
    responsive : [
      {
        breakpoint:769,
        settings: {
          item: 1,
          gallery: false,
          pager: false,
          controls: false
        }
      }
    ]
  });

  $('.offers__slider').lightSlider({
    item: 1,
    pager: true,
    adaptiveHeight: true,
    controls: false,
    onAfterSlide: function (el) {
      var index = el.find('.lslide.active').index();
      $('.offers__button').removeClass('offers__button--active');
      $('.offers__button').eq(index).addClass('offers__button--active');
    },
  });

  $('.offers__button').click(function() {
    var $this = $(this);
    var index = $this.index();
    $('.offers__button').removeClass('offers__button--active');
    $this.addClass('offers__button--active');
    $('.offers .lSPager li').eq(index).click();
  })

  $('.room__images').lightSlider({
    item: 1,
    pager: false,
    onSliderLoad: function(el) {
      el.lightGallery({
        selector: '.room__images .lslide'
      });
    },
  });

  $('.steps').validate({
    rules: {
      tel: {
        required: true,
        digits: true
      }
    }
  });
})
