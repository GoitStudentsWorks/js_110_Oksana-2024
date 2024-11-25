const hamburgerButton = document.querySelector('.hamburger-menu-button');
const mobileMenu = document.querySelector('.mobile-menu');
const closeButton = document.querySelector('.mobile-menu__close');
const menuLinks = document.querySelectorAll('.js-menu__link');

window.addEventListener('DOMContentLoaded', () => {
  hamburgerButton.addEventListener('click', () => {
    mobileMenu.classList.add('active');
    document.body.classList.add('no-scroll');
  });

  closeButton.addEventListener('click', () => {
    mobileMenu.classList.remove('active');
    document.body.classList.remove('no-scroll');
  });

  menuLinks.forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.remove('active');
      document.body.classList.remove('no-scroll');
    });
  });
});
