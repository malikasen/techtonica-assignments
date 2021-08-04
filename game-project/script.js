function getRandomNumber(min, max) {
  return Math.random() * (max - min) + min;
}

function generateMessage() {
  // debugger
  if (inputsEntered()) {
    label1.textContent = 'The number is generated!'
    return getRandomNumber(getMin, getMax);
  }
}

function inputsEntered() {
  // debugger
  // console.log(getMin + ' ' + getMax)
  if (getMin() != '' && getMax() != '') {
    return true;
  } else {
    return false;
  }
}

function getMin() {
  return document.getElementById('minNum').value;
}
function getMax() {
  return document.getElementById('maxNum').value;
}
var label1 = document.querySelector('#missingInput');
var buttonGenerate = document.querySelector('#generate');
buttonGenerate.addEventListener('click', generateMessage);



let str;

if (getRandomNumber(getMin(), getMax()) > guess) {
  str = 'The number is higher. Try again.';
} else if (getRandomNumber(getMin(), getMax()) < guess) {
  str = 'The number is lower. Try again.';
} else {
  str = 'You guessed it right!!!'
}