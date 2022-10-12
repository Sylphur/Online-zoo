const BURGERBUTTON = document.querySelector('.menu__mobile');
const BURGERBUTTON2 = document.querySelector('.burger__mobile');
const BURGER = document.querySelector('.burger');
const DARK = document.querySelector('.dark')


const openMenu = () => {
  DARK.classList.add('dark__toggle');
  BURGER.classList.add('burger__toggle');
  BURGERBUTTON.classList.add('menu__rotated');
  document.documentElement.scrollTop = 0;
  document.body.style.overflow = 'hidden';
  
}

const closeMenu = () => {
  DARK.classList.remove('dark__toggle');
  BURGER.classList.remove('burger__toggle');
  BURGERBUTTON.classList.remove('menu__rotated');
  document.body.style.overflow = '';
}

BURGERBUTTON.addEventListener('click', () => {
  openMenu();
})
BURGERBUTTON2.addEventListener('click', () => {
  closeMenu();
})
DARK.addEventListener('click', () => {
  closeMenu();
})