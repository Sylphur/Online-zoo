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

// ------------------------------ pets carousel ----------------------------------

const cardsTotal = [
  pandas = {
      name: "giant Pandas",
      textCard: "Native to Southwest China",
      iconeFood: "../../assets/icons/banana-bamboo_icon.svg",
      imgCardPets: "../../assets/images/pets/1.jpg",
  },

  eagles = {
      name: "Eagles",
      textCard: "Native to South America",
      iconeFood: "../../assets/icons/meet-fish_icon.svg",
      imgCardPets: "../../assets/images/pets/2.jpg",
  },

  gorillas = {
      name: "Gorillas",
      textCard: "Native to Congo",
      iconeFood: "../../assets/icons/banana-bamboo_icon.svg",
      imgCardPets: "../../assets/images/pets/3.jpg",
  },

  sloth = {
      name: "Two-toed Sloth",
      textCard: "Mesoamerica, South America",
      iconeFood: "../../assets/icons/banana-bamboo_icon.svg",
      imgCardPets: "../../assets/images/pets/4.png",
  },

  cheetahs = {
      name: "cheetahs",
      textCard: "Native to Africa",
      iconeFood: "../../assets/icons/meet-fish_icon.svg",
      imgCardPets: "../../assets/images/pets/5.jpg",
  },

  penguins = {
      name: "Penguins",
      textCard: "Native to Antarctica",
      iconeFood: "../../assets/icons/meet-fish_icon.svg",
      imgCardPets: "../../assets/images/pets/6.jpg",
  },
];

let PETS = document.querySelectorAll('.pets__item');
let newCardsArr = [];
const mix = () => {
    let cloneCardsArr = Array.from(cardsTotal);
    for (let i = cloneCardsArr.length; i > 0; i--) {
        let rand = Math.floor(Math.random() * i);
        let randCard = cloneCardsArr.splice(rand, 1);
        newCardsArr.push(randCard[0]);
    }
}
const rewrite = (dir) => {
  newCardsArr = [];
  mix();
  for(let i = 0; i < PETS.length; i++) {
    PETS[i].querySelector('.pets__img').src = newCardsArr[i].imgCardPets;
    PETS[i].querySelector('.pets__title').innerHTML = newCardsArr[i].name;
    PETS[i].querySelector('.pets__subtitle').innerHTML = newCardsArr[i].textCard;
    PETS[i].querySelector('.pets__icon-img').src = newCardsArr[i].iconeFood;

    if (dir === 'left') {
      PETS[i].classList.remove('scroll-right');
      PETS[i].classList.add('scroll-left');
      BUTTLEFT.style.pointerEvents = 'none';
      BUTTRIGHT.style.pointerEvents = 'none';
      BUTTLEFT.classList.add('btn-disabled');
      BUTTRIGHT.classList.add('btn-disabled');
      setTimeout(() => {
        BUTTLEFT.style.pointerEvents = '';
        BUTTRIGHT.style.pointerEvents = '';
        BUTTLEFT.classList.remove('btn-disabled');
        BUTTRIGHT.classList.remove('btn-disabled');
        PETS[i].classList.remove('scroll-left');
      }, 201)
    }
    else if (dir === 'right') {
      PETS[i].classList.remove('scroll-left');
      PETS[i].classList.add('scroll-right');
      BUTTLEFT.style.pointerEvents = 'none';
      BUTTRIGHT.style.pointerEvents = 'none';
      BUTTLEFT.classList.add('btn-disabled');
      BUTTRIGHT.classList.add('btn-disabled');
      setTimeout(() => {
        BUTTLEFT.style.pointerEvents = '';
        BUTTRIGHT.style.pointerEvents = '';
        PETS[i].classList.remove('scroll-right');
        BUTTLEFT.classList.remove('btn-disabled');
        BUTTRIGHT.classList.remove('btn-disabled');
      }, 201)
    }
    
  }
}
const BUTTLEFT = document.querySelector('.pets__arrow-img-two');
const BUTTRIGHT = document.querySelector('.pets__arrow-img-one');
BUTTLEFT.addEventListener('click', () => {
  rewrite('left');
})
BUTTRIGHT.addEventListener('click', () => {
  rewrite('right');
})