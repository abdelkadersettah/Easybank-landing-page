const hamburgerBtn = document.querySelector('.hamburger-btn');
const navMenu = document.querySelector('.main-nav');
hamburgerBtn.addEventListener('click', (e) => {
  const hamburgerImg = hamburgerBtn.firstElementChild;
  !navMenu.classList.contains('main-nav--active')
    ? (hamburgerImg.src = './images/icon-close.svg')
    : (hamburgerImg.src = './images/icon-hamburger.svg');
  navMenu.classList.toggle('main-nav--active');
});
