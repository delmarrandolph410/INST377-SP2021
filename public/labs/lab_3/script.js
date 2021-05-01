/* eslint-disable func-names */
/* eslint-disable no-plusplus */
/* Put your javascript in here */
/* label the images, just for convenience, to visually track them */
let i = 1;
// eslint-disable-next-line no-restricted-syntax
for (const li of carousel.querySelectorAll('li')) {
  li.style.position = 'relative';
  li.insertAdjacentHTML('beforeend', `<span 
  style="position:absolute;left:0;top:0">${i}</span>`);
  i++;
}

const width = 130; // width of image
const count = 3; // images count

const list = carousel.querySelector('ul');
const listElems = carousel.querySelectorAll('li');

const pos = 0; // ribbon scroll position

carousel.querySelector('.prev').onclick = function() {
  // shift left
  position += width * count;
  position = Math.min(position, 0);
  list.style.marginLeft = `${position}px`;
};

carousel.querySelector('.next').onclick = function() {
  // shift right
  position -= width * count;
  // can only shift based on total length
  position = Math.max(position, -width * (listElems.length - count));
  list.style.marginLeft = `${position}px`;
};