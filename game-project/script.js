function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}



function generateMessage() {
  if (inputsEntered()) {
    randomNumber = getRandomNumber(getMin(), getMax());
    label1.textContent = `The number is generated! It is between ${getMin()} and ${getMax()}.`
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
let pastGuesses = [];
function generateResult() {
  let guess = Number(document.getElementById('guess').value);
  if (guess != '') {
    let str;
    pastGuesses.push(guess);
    if (randomNumber > guess) {
      str = 'The number is higher. Try again.';
    } else if (randomNumber < guess) {
      str = 'The number is lower. Try again.';
    } else {
      str = 'You guessed it right!!!'
    }
    label2.textContent = str;
    label3.textContent = pastGuesses;
  }
}

let randomNumber;

var label1 = document.querySelector('#missingInput');
var buttonGenerate = document.querySelector('#generate');
buttonGenerate.addEventListener('click', generateMessage);
var label2 = document.querySelector('#result');
var buttonTry = document.querySelector('#try');
buttonTry.addEventListener('click', generateResult);
var label3 = document.querySelector('#guesses');

var checkBox = document.getElementById('generate');
checkBox.addEventListener('click', function() {
  var isPressed = checkBox.getAttribute('aria-pressed');
  if (isPressed === 'false') {
    checkBox.setAttribute('aria-pressed','true');
    // checkBox.className = 'checked';
  } else {
    checkBox.setAttribute('aria-pressed','false');
    // checkBox.className = 'unchecked';
  }
})

// https://www.pinterest.com/pin/623678248371870067/






