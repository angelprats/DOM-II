// Your code goes here
const funBus = document.querySelector('h1');
funBus.addEventListener('mouseover', event => {
  event.target.style.color = 'blue';
  event.target.style.fontSize = '6rem';
  // console.log(funBus);
});

const navigation = document.querySelector('.nav');
navigation.addEventListener('dblclick', event => {
  event.target.style.fontSize = '2.5rem';
  event.target.style.color = 'crimson';
});

const secondP = document.querySelector('.text-content p');
secondP.addEventListener('wheel', event => {
  event.target.style.fontSize = '2.5rem';
  event.target.style.color = 'crimson';
  // console.log(secondP);
});

const introHead = document.querySelector('.intro p');
introHead.addEventListener('click', event => {
  event.target.style.color = 'blue';
  event.target.style.fontFamily = 'Indie Flower';
  event.target.style.fontSize = '3rem';
  // console.log(introHead);
});

const boat = document.querySelector('.text-content h2');
boat.addEventListener('mouseenter', event => {
  event.target.textContent = 'Super Fun Bus';
  event.target.style.color = 'limegreen';
  event.target.style.fontSize = '4rem';
  console.log('Thanks for riding the Fun Bus!');
});

const vacation = document.querySelector('.content-destination h2');
vacation.addEventListener('mousedown', event => {
  event.target.style.color = 'mediumpurple';
  event.target.textContent = 'VACATION TIME!!';
  event.target.style.fontSize = '6rem';
});
// console.log(vacation);

const busImg = document.querySelector('.intro img');
busImg.addEventListener('mouseleave', event => {
  event.target.style.height = '400px';
});
// console.log(busImg);

const selectText = document.querySelector('.inverse-content h2');
selectText.addEventListener('mouseup', event => {
  event.target.style.color = 'magenta';
  event.target.textContent = 'The Journey Begins!';
  event.target.style.fontSize = '6rem';
});
console.log(selectText);

const buttons = document.querySelectorAll('.btn');
buttons[1].addEventListener('click', event => {
  event.preventDefault();
  event.target.style.color = 'black';
  console.log('button works!!!');
});

const mainTitle = document.querySelector('.intro h2');
// console.log(firstName);
mainTitle.addEventListener('mouseover', event => {
  event.target.style.fontSize = '6rem';
  event.target.style.color = 'mediumpurple';
  event.target.style.fontFamily = 'roboto';
});
console.log(mainTitle);

//preventDefault()
const navLinks = document.querySelectorAll('.nav-link');
navLinks[0].addEventListener('click', event => {
  event.preventDefault();
});
console.log(navLinks);
