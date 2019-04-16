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
  event.target.style.fontSize = '2rem';
  // console.log(introHead);
});

//mouseleave

const boat = document.querySelector('.img-content');
boat.addEventListener('mouseenter', event => {
  event.target.style.height = '400 px';
});
console.log(boat);
