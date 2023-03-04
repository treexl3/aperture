//! Nav Toggle 
const btn = document.querySelector('.header-item__icon');
const nav = document.querySelector('.header-menu');
const links = document.querySelectorAll('.header-menu__link');
document.body.classList.add('touch')

btn.addEventListener('click', () => {
   btn.classList.toggle('active');
   nav.classList.toggle('active');
   document.body.classList.toggle('lock');
});
links.forEach(link => {
   link.addEventListener('click', (e) => {
      btn.classList.remove('active');
      nav.classList.remove('active');
      document.body.classList.remove('lock');
      const targetLink = document.querySelector('.header-menu__link span.active');
      if (targetLink) {
         targetLink.classList.remove('active');
      }
      e.target.classList.add('active');
   });
});