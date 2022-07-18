const hamburger = document.querySelector('.hamburger'),
      menu = document.querySelector('.menu'),
      closeElem = document.querySelector('.menu__close'),
      menuOverlay = document.querySelector('.menu__overlay');

hamburger.addEventListener('click',  () => {
    menu.classList.add('active');
});
closeElem.addEventListener('click', () => {
    menu.classList.remove('active');
});
menuOverlay.addEventListener('click', () => {
    menu.classList.remove('active');
});

const percents = document.querySelectorAll(".skill__percent"),
      lines   = document.querySelectorAll(".skill__top-line");

percents.forEach((item, i) => {
    lines[i].style.width = item.innerHTML;
});
