'use strict';
const colors = ['white', 'green', 'blue', 'purple', 'pink'];
const colorBtn = document.querySelector('.color-btn');
const colorCode = document.querySelector('.color-code');
const backgroundColor = document.querySelector('body');

function simple() {
  colorBtn.addEventListener('click', function () {
    // backgroundColor.style.backgroundColor = `${colors[0]}`;
    const random = Math.floor(Math.random() * colors.length);
    backgroundColor.style.backgroundColor = `${colors[random]}`;
    colorCode.textContent = colors[random];
    // console.log(colors[1]);
  });
}
simple();

// window.addEventListener('DOMContentLoaded', function () {
//   simple();
// });
