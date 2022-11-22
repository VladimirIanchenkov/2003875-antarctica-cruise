const navMain = document.querySelector('.main-nav');
const navToggle = document.querySelector('.main-nav__toggle');
const overlay = document.querySelector('.overlay');
const links = document.querySelector('.main-nav').querySelectorAll('a');

// Реализация выпадающего меню
const initMenu = () => {
  navMain.classList.remove('main-nav--nojs');
};

const closeModal = () => {
  navMain.classList.add('main-nav--closed');
  navMain.classList.remove('main-nav--opened');
  overlay.style.display = 'none';
  document.body.style.overflow = 'visible';
};

const openModal = () => {
  navMain.classList.remove('main-nav--closed');
  navMain.classList.add('main-nav--opened');
  overlay.style.display = 'block';
  document.body.style.overflow = 'hidden';
};

const onLinkClick = () => {
  links.forEach((link) => link.addEventListener('click', () => {
    closeModal();
  }));
};

const onScreenClick = () => {
  window.addEventListener('click', (evt) => {
    if (!navMain.contains(evt.target)) {
      closeModal();
    }
  });
};

const initMenuButton = () => {
  initMenu();
  onLinkClick();
  onScreenClick();
  navToggle.addEventListener('click', function () {
    if (navMain.classList.contains('main-nav--closed')) {
      openModal();
    } else {
      closeModal();
    }
  });
};

export {initMenuButton};
