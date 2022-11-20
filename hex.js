'use strict';
const colors = ['#fff', 'green', 'blue', 'purple', 'pink'];
const colorBtn = document.querySelector('.color-btn');
const colorCode = document.querySelector('.color-code');
const backgroundColor = document.querySelector('body');

const inputs = ['a', 'b', 'c', 'd', 'e', 'f', 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

function getRandomNumber() {
  return Math.floor(Math.random() * inputs.length);
}

colorBtn.addEventListener('click', function () {
  let hex = '#';
  for (let i = 0; i < 6; i++) {
    hex = hex + inputs[getRandomNumber()];
  }
  colorCode.textContent = hex;
  backgroundColor.style.backgroundColor = `${hex}`;
  // console.log(combination);
});

// function hex() {
//   colorBtn.addEventListener('click', function () {
//     // backgroundColor.style.backgroundColor = `${colors[0]}`;
//     const random = Math.floor(Math.random() * inputs.length);
//     backgroundColor.style.backgroundColor = `${colors[random]}`;
//     // console.log(colors[1]);
//   });
// }
// hex();
