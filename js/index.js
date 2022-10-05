

// $( function() {
//   $( ".accordion" ).accordion( {
//     heightStyle: "content",
//     collapsible: true,
//     icons: { "header": false,
//                "activeHeader": false }
//   });
// } );

document.addEventListener('DOMContentLoaded', () => {
  const container = document.querySelector(".container-relative")
  const swiper = new Swiper('.hero__swiper', {
  slidesPerView: 1,
  spaceBetween: 0,
  speed: 2000,
  autoplay: {
    delay: 2000
  },
  effect: 'slide',
  allowTouchMove: false,
  // Optional parameters
  loop: true,
  });

  // const swiper3 = new Swiper('.events__swiper', {
  //   slidesPerView: 'auto',
  //   spaceBetween: 0,
  //   loop: true,
  // // Optional parameters


  // // If we need pagination
  // pagination: {
  // el: '.events__swiper-pagination',
  // },
  // });

  const element = document.querySelector('select');
    const choices = new Choices(element, {
        searchEnabled: false,
        itemSelectText: ""
    });
  document.querySelectorAll('.tabs-nav__btn').forEach(function(tabsBtn){
    tabsBtn.addEventListener('click', function(e) {
      const path = e.currentTarget.dataset.path;
      document.querySelectorAll('.tabs-nav__btn').forEach(function(btn){
        btn.classList.remove('tabs-nav__btn--active')
      });
      e.currentTarget.classList.add('.tabs-nav__btn--active');
      document.querySelectorAll('.tabs-item').forEach(function(tabsBtn){
        tabsBtn.classList.remove('tabs-item_active')
      });
      document.querySelector(`[data-target="${path}"]`).classList.add('tabs-item_active');
    });
  });
  let acc = new Accordion('.accordion', {
    duration: 700,
    elementClass: 'accordion__item',
    triggerClass: 'accordion__link',
    panelClass: 'accordion__content',
    showMultiple: false
  });
  const gallerySlider = new Swiper('.gallery__swiper', {
    // количество отображаемых слайдов
    slidesPerView: 1,
    speed: 1500,
    grid: {
      rows: 1,
      fill: "row"
    },

    spaceBetween: 20,

    pagination: {
      el: ".gallery__swiper-pagination",
      type: "fraction"
    },

    navigation: {
      nextEl: ".gallery__swiper-btn-next",
      prevEl: ".gallery__swiper-btn-prev",
    },

    breakpoints: {
      441: {
        slidesPerView: 2,
        spaceBetween: 38,
        // количество слайдов в группе при свайпе/пролистывании slidesPerGroup
        slidesPerGroup: 1,
      },
      769: {
        slidesPerView: 2,
        spaceBetween: 34,
        slidesPerGroup: 2,
      },
      1200: {
        slidesPerView: 3,
        spaceBetween: 50,
        slidesPerGroup: 3,
      },
    },

    a11y: false,

    // доступность с клавы
    keyboard: {
      enabled: true,
      onlyInViewport: true,
    },

    watchSlidesProgress: true,
    watchSlidesVisibility: true,
    slideVisibleClass: "slide-visible",

    on: {
      init: function () {
        this.slides.forEach((slide) => {
          if(!slide.classList.contain("slide-visible"))
          {
            slide.tabIndex = "-1";
          }
          else {
            slide.tabIndex = "";
          }
        });

      },
      slideChange: function () {
        this.slide.forEach((slide) => {
          if(!slide.classList.contain("slide-visible"))
          {
            slide.tabIndex = "-1";
          }
          else {
            slide.tabIndex = "";
          }
        });
      }

    }

  });

});

// document.addEventListener('DOMContentLoaded', () => {
//   let gallerySlider = new Swiper('.gallery__swiper', {
//     // количество отображаемых слайдов
//     slidesPerView: 1,
//     speed: 1500,
//     grid: {
//       rows: 1,
//       fill: "row"
//     },

//     spaceBetween: 20,

//     pagination: {
//       el: ".gallery__swiper-pagination",
//       type: "fraction"
//     },

//     navigation: {
//       nextEl: ".gallery__swiper-btn-next",
//       prevEl: ".gallery__swiper-btn-prev",
//     },

//     breakpoints: {
//       441: {
//         slidesPerView: 2,
//         spaceBetween: 38,
//         // количество слайдов в группе при свайпе/пролистывании slidesPerGroup
//         slidesPerGroup: 1,
//       },
//       769: {
//         slidesPerView: 2,
//         spaceBetween: 34,
//         slidesPerGroup: 2,
//       },
//       1200: {
//         slidesPerView: 3,
//         spaceBetween: 50,
//         slidesPerGroup: 3,
//       },
//     },

//     a11y: false,

//     // доступность с клавы
//     keyboard: {
//       enabled: true,
//       onlyInViewport: true,
//     },

//     watchSlidesProgress: true,
//     watchSlidesVisibility: true,
//     slideVisibleClass: "slide-visible",

//     on: {
//       init: function () {
//         this.slides.forEach((slide) => {
//           if(!slide.classList.contain("slide-visible"))
//           {
//             slide.tabIndex = "-1";
//           }
//           else {
//             slide.tabIndex = "";
//           }
//         });

//       },
//       slideChange: function () {
//         this.slide.forEach((slide) => {
//           if(!slide.classList.contain("slide-visible"))
//           {
//             slide.tabIndex = "-1";
//           }
//           else {
//             slide.tabIndex = "";
//           }
//         });
//       }

//     }

//   });

// });

document.addEventListener('DOMContentLoaded', () => {
  let eventsSlider = new Swiper('.events__swiper', {
    // количество отображаемых слайдов
    slidesPerView: 3,
    speed: 1500,
    grid: {
      rows: 1,
      fill: "row"
    },

    pagination: {
      el: ".events__swiper-pagination",
    },

    navigation: {
      nextEl: ".events__swiper-btn-next",
      prevEl: ".events__swiper-btn-prev",
    },

    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 0,
        // количество слайдов в группе при свайпе/пролистывании slidesPerGroup
        slidesPerGroup: 1,
      },
      441: {
        slidesPerView: 2,
        spaceBetween: 34,
        slidesPerGroup: 2,
      },
      769: {
        slidesPerView: 3,
        spaceBetween: 27,
        slidesPerGroup: 3,
      },
      1200: {
        slidesPerView: 3,
        spaceBetween: 50,
        slidesPerGroup: 3,
      },
    },
  });
});

document.addEventListener('DOMContentLoaded', () => {
  let projectsSlider = new Swiper('.projects__swiper', {
    // количество отображаемых слайдов
    slidesPerView: 3,
    speed: 1500,
    grid: {
      rows: 1,
      fill: "row"
    },



    navigation: {
      nextEl: ".projects__swiper-btn-next",
      prevEl: ".projects__swiper-btn-prev",
    },

    breakpoints: {
      441: {
        slidesPerView: 1,
        spaceBetween: 0,
        // количество слайдов в группе при свайпе/пролистывании slidesPerGroup
        slidesPerGroup: 1,
      },
      769: {
        slidesPerView: 2,
        spaceBetween: 34,
        slidesPerGroup: 1,
      },
      1000: {
        slidesPerView: 2,
        spaceBetween: 50,
        slidesPerGroup: 1,
      },
      1200: {
        slidesPerView: 3,
        spaceBetween: 50,
        slidesPerGroup: 3,
        // width: 1450,
      },
    },
  });
});

document.addEventListener('DOMContentLoaded', () => {
  var selectortel = document.querySelector("input[type='tel']")
  var imtel = new Inputmask("+7 (999)-999-99-99");
  imtel.mask(selectortel);

  const validation = new JustValidate ('.form', {
    rules: {
      name: {
        required: true,
        minLength: 2,
        maxLength: 15,
        customRegexp: /[^0-9]/,
      },
      tel: {
        required: true,
        function: (name, value) => {
            const phone = selector.inputmask.unmaskedvalue()
            return Number (phone) && phone.length === 10
        }
    },


    },
    messages: {
      name: {
          required: 'Вы не ввели имя',
          minLength: 'Min число символов 2',
          maxLength: 'Max число символов 15'

      },
      tel: {
          required: 'Вы не ввели телефон',
          function: 'Недопустимый формат'
      },
    },

});
});

document.addEventListener('DOMContentLoaded', () => {
        ymaps.ready(init);
        function init(){
            // Создание карты.
            var myMap = new ymaps.Map("map", {
                // Координаты центра карты.
                // Порядок по умолчанию: «широта, долгота».
                // Чтобы не определять координаты центра карты вручную,
                // воспользуйтесь инструментом Определение координат.
                center: [55.75846806898367, 37.60108849999989],
                // Уровень масштабирования. Допустимые значения:
                // от 0 (весь мир) до 19.
                zoom: 14.5,
                controls: ['zoomControl', 'geolocationControl']
            });

            // Создание геообъекта с типом точка (метка).
            var myPlacemark = new ymaps.Placemark([55.75846806898367, 37.60108849999989], {}, {
                iconLayout: 'default#image',
                iconImageHref: 'img/map__icon.svg',
                iconImageSize: [20, 20]

            });

            // Размещение геообъекта на карте.
            myMap.geoObjects.add(myPlacemark);
            // myMap.controls.remove('searchControl');
            // myMap.controls.remove('typeSelector');
            // myMap.controls.remove('trafficControl');
            // myMap.controls.remove('fullscreenControl');
            // myMap.controls.remove('rulerControl');
            // myMap.controls.remove('zoomControl');

            myMap.controls.get('zoomControl').options.set('size', 'small');
            // myMap.controls.get('zoomControl').options.set('position', 'top','300');
            // myMap.controls.get('zoomControl').options.set('top', '1300');
          //   var zoomControl = new ymaps.control.ZoomControl({
          //     options: {
          //         size: "small",
          //         position: {
          //           right: 0,
          //           top: 1000,
          //         }
          //     }
          // });
          myMap.controls.add(zoomControl);
          //   myMap.controls.get('zoomControl', {
          //     size: "small"
          //     // right: 0,
          //     // top: 50%,
          // });
        };
});

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll(".dropdown__simplebar").forEach(dropdown => {
    new SimpleBar(dropdown, {
      // ползунок виден изначально
      autohide: false,
      // высота ползунка
      scrollbarMaxSize: 28,
    });
  })

});
document.addEventListener('DOMContentLoaded', () => {
const btns = document.querySelectorAll(".container-absolute__btn");
  const dropdowns = document.querySelectorAll(".dropdown");
  const activeClassdropdowns = "dropdown--active";
  const activeClassbtns = "container-absolute__btn--active";

  btns.forEach(item => {
    item.addEventListener('click', function() {
      let DropThis = this.parentElement.querySelector(".dropdown");
      dropdowns.forEach(el => {
        if (el != DropThis) {
          el.classList.remove(activeClassdropdowns)
        }
      });
      btns.forEach(el => {
        if (el != this) {
          el.classList.remove(activeClassbtns)
        }
      });
      DropThis.classList.toggle(activeClassdropdowns);
      this.classList.toggle(activeClassbtns);
    })
  });
});


document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('#gallery__slide2').addEventListener('click', function() {
    document.querySelector('#gallery__card2').classList.add('is-active')
  });
  document.querySelector('#gallery__card-exit').addEventListener('click', function() {
    document.querySelector('#gallery__card2').classList.remove('is-active')
  });

});
