//! Ініціалізуємо Swiper
let myImageSlider = new Swiper('.image-slider', {
   //! Стрілки
   navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
   },
   //! Навігація
   //! Булети, поточне положення, прогресбар
   pagination: {
      el: '.swiper-pagination',
      /* 
      //! Булети
      clickable: true,
      //! Динамічні булети
      dynamicBullets: true,
      //! Кастомні булети
      renderBullet: function (index, className) {
         return '<span class="' + className + '">' + (index + 1) + '</span>';
      }, 
      */

      //! Фракції
      type: 'fraction',
      //!Кастомний вивід фракції
   /*    renderFraction: function (currentClass, totalClass) {
         return 'Фото <span class="' + currentClass + '"></span>' +
            ' из ' +
            '<span class="' + totalClass + '"></span>';
      }, */

      
      //! Прогресбар
      type: 'progressbar', 
   },

   //! Скролл
   scrollbar: {
      el: '.swiper-scrollbar',
      //! Можливість перетаскувати скролл
      draggable: true,
   },

   //! Включення/відключення
   //! Перетаскування на ПК
   simulateTouch: true,
   //! Чутливість свайпа
   touchRatio: 1,
   //! Кут спрацювання свайпа/перетаскування
   touchAngle: 45,
   //! Курсор перетасування
   grabCursor: true,

   //! Переключення при кліку на слайд
   slideToClickedSlide: false,

   //! Навігація по хешу
   hashNavigation: {
      //! Відслідковувати стан
      watchState: true,
   },

   //! Управління клавіатурою
   keyboard: {
      //! Включити/виключити
      enabled: true,
      //! Включити/виключити
      //! тільки тоді коли слайдер
      //! в межах вьюпорта
      onlyInViewport: true,
      //! Включити/виключити
      //! управління клавішами
      //! PageUp, PageDown
      pageUpDown: true,
   },

   //! Управління колесом миші
   /* 
   mousewheel: {
      //! Чутливість об'єкта на якому
      sensitivity: 1,
      //! буде спрацьовувати прокрутка мишею
      //eventsTarget: ".image-slider",
   }, 
   */

   //! Авто-висота
   autoHeight: true,

   //! Кількість слайдів для показа
   slidesPerView: 3,

   //! Відключення функціонала
   //! якщо слайдів менше ніж потрібно
   watchOverflow: true,

   //! Відступ між слайдами 
   spaceBetween: 30,

   //! Кількість пролистуємих слайдів
   slidesPerGroup: 1,

   //! Активний слайд по центру 
   centeredSlides: false,

   //! Стартовий слайд
   initialSlide: 0,

   //! Мультирядність
   slidesPerColumn: 1,

   //! Безкінченний слайдер
   loop: false,

   //! Кількість дублюючих слайдів
   loopedSlides: 0,

   //! Вільний режим
   freeMode: false,

   //! АВтопрокрутка
   /* 
   autoplay:{
   //! Пауза між прокруткою
      delay: 1500,
      //! Закінчити на останньому слайді
      stopOnLastSlide: false,
      //! Відключити після ручного переключення
      disableOnInteraction: false,
   },
   */

   //! Швидкість
   speed: 800,

   //! Вертикальний слайдер
   //direction: 'vertical',


   //! Ефекти переключення слайдів
   //! Гортання 
   effect: 'slide',


   //! Ефекти переключення слайдів
   //! Зміна прозорості 
   //effect: 'fade',

   //! Доповнення до fade
   /*
   fadeEffect: {
      //! Паралельна
      //! зміна прозорості
      crossFade: true,
   },
   */

   //! Ефекти переключення слайдів
   //! Переворот 
   //effect: 'flip',

   //! Доповнення до flip
   /*
   flipEffect: {
      //! Тінь
      slideShadows: true,
      //! Показ тільки активного слайда
      limitRotation: true,
   }, 
   */

   //! Ефекти переключення слайдів
   //! Переворот 
   //effect: 'coverflow',

   //! Доповнення до coverFlow

   /*    
   coverFlowEffect: {
   //! Кут
   rotate: 20,
   //! Накладання 
   stretch: 50,
   //! Тінь
   slideShadows: true,
   },
   */

   //! Брейк поінти (адаптив)
   /* 
   breakpoints: {
      320: {
         slidesPerView: 1,
      },
      480: {
         slidesPerView: 2,
      },
      992: {
         slidesPerView: 3,
      },
   },
   */

   //! Відключити перед-загрузку картинок
   preloadImages: false,
   //! Lazy Loading
   //! (підгрузка картинок)
   lazy: {
      //! Підгружати на старті
      //! переключення слайда
      loadOnTransitionStart: false,
      //! Підгрузити попередню
      //! і наступну картинки
      loadPrevNext: false,
   },
   //! Відслідковування за видимими слайдами
   watchSlidesProgress: true,
   //! Додання класа видимим слайдам
   watchSlidesVisibility: true,

   //! ЗУм картинок
   zoom: {
      //! Максимальне збільшування
      maxRatio: 5,
      //! Мінімальне збільшування
      minRatio: 1,
   },

   //! Мініатюри (прев'Ю)
   /* 
   thumbs: {
      //! Свайпер з мініатюрами
      //! і його настройки
      swiper: {
         el: '.image-mini-slider',
         slidesPerView: 5,
      }
   }, 
   */

   /* 
   //! Віртуальні слайди
   //! формування слайдера
   virtual: {
      slides: (function () {
         let slide = []
         for (let i = 0; i < 500; i++) {
            slide.push(`<div class="image-slider__text">Слайд №${i}</div>`);
         }
         return slide;
      }()),
   }, 
   */

   //! Доступність
   a11y: {
   //! Включити/Виключити
   enabled: true,
   //! Повідомлення
   prevSlideMessage: 'Previous slide',
   nextSlideMessage: 'Next slide',
   firstSlideMessage: 'This is the first slide',
   lastSlideMessage: 'This is the last slide',
   paginationBulletMessage: 'Go to slide {{index}}',
   notificationClass: 'swiper-notification',
   containerMessage: '',
   containerRoleDescriptionMessage: '',
   itemRoleDescriptionMessage: '',
   //! і т.д
   },
});


//! Слайдер в слайдері
new Swiper('.image-in-slider', {
   //! Курсор перетаскування
   grabCursor: true,
   //! Навігація
   //! Пагінація, поточне положення, прогресбар
   pagination: {
      el: '.swiper-pagination',
      //! Булети
      clickable: true,
   },
   //! Коректна робота
   //! Перетасування\свайпа
   //! для дочерного слайдера
   nested: true,
   //! Відступ між слайдами 
   spaceBetween: 0.5,
});


//! Ще один слайдер
let myTextSlider = new Swiper('.text-slider', {
   //! Кількість слайдів для показа
   slidesPerView: 3,
   //! Відступ між слайдами
   spaceBetween: 30,
});

//! Передача управління
myImageSlider.controller.control = myTextSlider;
myTextSlider.controller.control = myImageSlider;

/* 
//! Налаштування

//! Отримання
let qSlides = myImageSlider.slider.length;

//! Редагування
myImageSlider.params.speed = 3000;


//! Методи

//! Обновити слайдер
myImageSlider.update();

//! Переключитися на слайд 2, скорость 800
myImageSlider.slideTo(2, 800); 
*/


//! Паралакс слайдер
new Swiper('.parallax-slider', {
   //! Включаємо паралакс
   parallax: true,
   //! Швидкість переключення
   speed: 2000,
   //! Стрілки
   navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
   },
});



//! Запуск автопрокрутки при наведенні 
let sliderBlock = document.querySelector('.image-slider');

// myImagesSlider - це змінна якій прсвоїний слайдер

sliderBlock.addEventListener("mouseenter", function (e) {
   myImageSlider.params.autoplay.disableOnInteraction = false;
   myImageSlider.params.autoplay.delay = 1000;
   myImageSlider.autoplay.start();
});
sliderBlock.addEventListener("mouseleave", function (e) {
   myImageSlider.autoplay.stop();
});