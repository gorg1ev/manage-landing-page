const burger = document.querySelector('#burger');
const nav = document.querySelector('#menu');
const overlay = document.querySelector('#overlay');

burger.addEventListener('click', () => {
   burger.classList.toggle('open');
   nav.classList.toggle('menu-open');
   overlay.classList.toggle('show');
});
