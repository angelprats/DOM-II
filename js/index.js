// Your code goes here
const funBus = document.querySelector('h1');
funBus.addEventListener('mouseover', event => {
  event.target.style.color = 'blue';
  console.log(funBus);
});
