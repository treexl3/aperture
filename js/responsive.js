//! Adaptive functions
const elementToMove = document.querySelector('.header-top__lang');

const targetElement = document.querySelector('.header-menu');

const Parent = document.querySelector('.header-top');

window, addEventListener('resize', function () {
   const currentWidth = window.innerWidth;

   if (currentWidth <= 767) {
      targetElement.appendChild(elementToMove)
   }
   else {
      if (currentWidth >= 767) {
         Parent.appendChild(elementToMove)
         Parent.insertBefore(elementToMove, Parent.firstChild);
      }
   }
});