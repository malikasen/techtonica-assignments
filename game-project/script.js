function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function generateMessage() {
  if (inputsEntered()) {
    label1.textContent = 'The number is generated!'
    return getRandomNumber(getMin(), getMax());
  }
}

function inputsEntered() {
  // console.log(getMin + ' ' + getMax)
  if (getMin() != '' && getMax() != '') {
    return true;
  } else {
    return false;
  }
}

function getMin() {
  return Number(document.getElementById('minNum').value);
}
function getMax() {
  return Number(document.getElementById('maxNum').value);
}

function generateResult() {
  let guess = Number(document.getElementById('guess').value);
  if (guess != '') {
    let str;
    if (getRandomNumber(getMin(), getMax()) > guess) {
      str = 'The number is higher. Try again.';
    } else if (getRandomNumber(getMin(), getMax()) < guess) {
      str = 'The number is lower. Try again.';
    } else {
      str = 'You guessed it right!!!'
    }
    label2.textContent = str;
  }
}

var label1 = document.querySelector('#missingInput');
var buttonGenerate = document.querySelector('#generate');
buttonGenerate.addEventListener('click', generateMessage);
var label2 = document.querySelector('#result');
var buttonTry = document.querySelector('#try');
buttonTry.addEventListener('click', generateResult);


