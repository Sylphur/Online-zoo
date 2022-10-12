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

// ----------------------- popup ----------------------

const mediaQuery968 = window.matchMedia('(max-width: 968px)');
const CARD = document.querySelectorAll('.testimonials__item');
const POPUP = document.querySelector('.popup');
const POPUPBTN = document.querySelector('.popup__mobile');
const openPopup = (e) => {
  if (e.matches) {
    DARK.classList.add('dark__toggle');
    //document.documentElement.scrollTop = 0;
    document.body.style.overflow = 'hidden';
    POPUP.classList.add('popup__toggle');
    BURGERBUTTON.classList.add('menu__rotated');
  }
}
const closePopup = () => {
  DARK.classList.remove('dark__toggle');
  document.body.style.overflow = '';
  POPUP.classList.remove('popup__toggle');
  BURGERBUTTON.classList.remove('menu__rotated');
}

for (let key of CARD) {
  key.addEventListener('click', () => { 
    openPopup(mediaQuery968);
  })
}
POPUPBTN.addEventListener('click', () => {
  closePopup();
});
// dark - union of popup and burger
DARK.addEventListener('click', () => {
  closeMenu();
  closePopup();
})

// заполнение попапа

const cardsTest = document.querySelector('.testimonials__content');
let nameCardPopap = document.querySelector('.popup__username'),
    profCardPopap = document.querySelector('.popup__userlocation'),
    storyCardPopap = document.querySelector('.popup__descr');
cardsTest.addEventListener('click', (e) => {
    let newPopap = e.target.parentElement;
    let imgCardPopap = document.querySelector('.popup__img');
    let newName = newPopap.querySelector('.testimonials__user-name').innerHTML;
    let newImg = newPopap.querySelector('.testimonials__user-img').cloneNode();
    let newStory = newPopap.querySelector('.testimonials__content-text').innerHTML;
    let newProf = newPopap.querySelector('.testimonials__user-local').innerHTML;
    imgCardPopap.replaceChild(newImg, imgCardPopap.childNodes[1]);
    nameCardPopap.innerHTML = newName;
    profCardPopap.innerHTML = newProf;
    storyCardPopap.innerHTML = newStory;
    console.log(imgCardPopap.childNodes[1]);
})