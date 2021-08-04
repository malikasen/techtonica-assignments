function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}



function generateMessage() {
  if (inputsEntered()) {
    randomNumber = getRandomNumber(getMin(), getMax());
    label1.textContent = `The number is generated! It is between ${getMin()} and ${getMax()}. It is ${randomNumber}.`
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
      // fireworks.start();
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

// https://www.pinterest.com/pin/623678248371870067/

//add fireworks
// const container = document.querySelector('..fireworks-example')
// const fireworks = new Fireworks(container, {
//       rocketsPoint: 50,
//       hue: { min: 0, max: 360 },
//       delay: { min: 15, max: 30 },
//       speed: 2,
//       acceleration: 1.05,
//       friction: 0.95,
//       gravity: 1.5,
//       particles: 50,
//       trace: 3,
//       explosion: 5,
//       autoresize: true,
//       brightness: { 
//         min: 50, 
//         max: 80,
//         decay: { min: 0.015, max: 0.03 }
//       }
//       mouse: { 
//         click: false, 
//         move: false, 
//         max: 3 
//       }
//       boundaries: { 
//         x: 50, 
//         y: 50, 
//         width: container.clientWidth, 
//         height: container.clientHeight 
//       }
//       sound: {
//         enable: true,
//         files: [
//           'explosion0.mp3',
//           'explosion1.mp3',
//           'explosion2.mp3'
//         ],
//         volume: { min: 1, max: 2 },
//       }
// });




