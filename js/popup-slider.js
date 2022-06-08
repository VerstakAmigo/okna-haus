/* burger-menu */
const burger = document.querySelector(".burger-menu");
const navLinks = document.querySelector('nav.menu');

burger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
})


const burger1 = document.querySelector(".a-1");
const navLinks1 = document.querySelector('nav.menu');

burger1.addEventListener('click', () => {
  navLinks1.classList.remove('active');
})

const burger2 = document.querySelector(".a-2");

burger2.addEventListener('click', () => {
  navLinks1.classList.remove('active');
})

const burger3 = document.querySelector(".a-3");

burger3.addEventListener('click', () => {
  navLinks1.classList.remove('active');
})

const burger4 = document.querySelector(".a-4");

burger4.addEventListener('click', () => {
  navLinks1.classList.remove('active');
})

const burger5 = document.querySelector(".a-5");

burger5.addEventListener('click', () => {
  navLinks1.classList.remove('active');
})

const burger6 = document.querySelector(".a-6");

burger6.addEventListener('click', () => {
  navLinks1.classList.remove('active');
})

const burger7 = document.querySelector(".menu__close");

burger7.addEventListener('click', () => {
  navLinks1.classList.remove('active');
})

const burger8 = document.querySelector(".btn-popup-1");

burger8.addEventListener('click', () => {
  navLinks1.classList.remove('active');
})

const burger9 = document.querySelector(".btn-popup-2");

burger9.addEventListener('click', () => {
  navLinks1.classList.remove('active');
})

const openPopUp1 = document.getElementById('open_popup1');
const close1PopUp = document.querySelector('.close1');
const close2PopUp = document.querySelector('.close2');
const close3PopUp = document.querySelector('.close3');

const popUp1 = document.getElementById('popup_about1');

openPopUp1.addEventListener('click', function (e) {
  e.preventDefault();
  popUp1.classList.add('active');
})

close1PopUp.addEventListener('click', () => {
  popUp1.classList.remove('active')
})
close2PopUp.addEventListener('click', () => {
  popUp1.classList.remove('active')
})
close3PopUp.addEventListener('click', () => {
  popUp1.classList.remove('active')
}) 



const openPopUp2 = document.getElementById('open_popup2');
const close4PopUp = document.querySelector('.close4');
const close5PopUp = document.querySelector('.close5');
const close6PopUp = document.querySelector('.close6');

const popUp2 = document.getElementById('popup_about2');

openPopUp2.addEventListener('click', function (e) {
  e.preventDefault();
  popUp2.classList.add('active');
})

close4PopUp.addEventListener('click', () => {
  popUp2.classList.remove('active')
})
close5PopUp.addEventListener('click', () => {
  popUp2.classList.remove('active')
})
close6PopUp.addEventListener('click', () => {
  popUp2.classList.remove('active')
})



const openPopUp3 = document.getElementById('open_popup3');
const close7PopUp = document.querySelector('.close7');
const close8PopUp = document.querySelector('.close8');
const close9PopUp = document.querySelector('.close9');

const popUp3 = document.getElementById('popup_about3');

openPopUp3.addEventListener('click', function (e) {
  e.preventDefault();
  popUp3.classList.add('active');
})

close7PopUp.addEventListener('click', () => {
  popUp3.classList.remove('active')
})
close8PopUp.addEventListener('click', () => {
  popUp3.classList.remove('active')
})
close9PopUp.addEventListener('click', () => {
  popUp3.classList.remove('active')
})



const openPopUp4 = document.getElementById('open_popup4');
const close10PopUp = document.querySelector('.close10');
const close11PopUp = document.querySelector('.close11');
const close12PopUp = document.querySelector('.close12');

const popUp4 = document.getElementById('popup_about4');

openPopUp4.addEventListener('click', function (e) {
  e.preventDefault();
  popUp4.classList.add('active');
})

close10PopUp.addEventListener('click', () => {
  popUp4.classList.remove('active')
})
close11PopUp.addEventListener('click', () => {
  popUp4.classList.remove('active')
})
close12PopUp.addEventListener('click', () => {
  popUp4.classList.remove('active')
})



const openPopUp5 = document.getElementById('open_popup5');
const close13PopUp = document.querySelector('.close13');

const popUp5 = document.getElementById('popup-coment');

openPopUp5.addEventListener('click', function (e) {
  e.preventDefault();
  popUp5.classList.add('active');
})

close13PopUp.addEventListener('click', () => {
  popUp5.classList.remove('active')
})



const openPopUp6 = document.getElementById('open_popup6');
const close14PopUp = document.querySelector('.close14');
const close15PopUp = document.querySelector('.close15');
const close16PopUp = document.querySelector('.close16');

const popUp6 = document.getElementById('popup-portfolio1');

openPopUp6.addEventListener('click', function (e) {
  e.preventDefault();
  popUp6.classList.add('active');
})

close14PopUp.addEventListener('click', () => {
  popUp6.classList.remove('active')
})
close15PopUp.addEventListener('click', () => {
  popUp6.classList.remove('active')
})
close16PopUp.addEventListener('click', () => {
  popUp6.classList.remove('active')
})

const openPopUp7 = document.getElementById('open_popup7');
const close17PopUp = document.querySelector('.close17');
const close18PopUp = document.querySelector('.close18');
const close19PopUp = document.querySelector('.close19');

const popUp7 = document.getElementById('popup-portfolio2');

openPopUp7.addEventListener('click', function (e) {
  e.preventDefault();
  popUp7.classList.add('active');
})

close17PopUp.addEventListener('click', () => {
  popUp7.classList.remove('active')
})
close18PopUp.addEventListener('click', () => {
  popUp7.classList.remove('active')
})
close19PopUp.addEventListener('click', () => {
  popUp7.classList.remove('active')
})

const openPopUp8 = document.getElementById('open_popup8');
const close20PopUp = document.querySelector('.close20');
const close21PopUp = document.querySelector('.close21');
const close22PopUp = document.querySelector('.close22');

const popUp8 = document.getElementById('popup-portfolio3');

openPopUp8.addEventListener('click', function (e) {
  e.preventDefault();
  popUp8.classList.add('active');
})

close20PopUp.addEventListener('click', () => {
  popUp8.classList.remove('active')
})
close21PopUp.addEventListener('click', () => {
  popUp8.classList.remove('active')
})
close22PopUp.addEventListener('click', () => {
  popUp8.classList.remove('active')
})

const openPopUp9 = document.getElementById('open_popup9');
const close23PopUp = document.querySelector('.close23');
const close24PopUp = document.querySelector('.close24');
const close25PopUp = document.querySelector('.close25');

const popUp9 = document.getElementById('popup-portfolio4');

openPopUp9.addEventListener('click', function (e) {
  e.preventDefault();
  popUp9.classList.add('active');
})

close23PopUp.addEventListener('click', () => {
  popUp9.classList.remove('active')
})
close24PopUp.addEventListener('click', () => {
  popUp9.classList.remove('active')
})
close25PopUp.addEventListener('click', () => {
  popUp9.classList.remove('active')
})

