function getRandomNumber(min, max) {
  return Math.random() * (max - min) + min;
}

let lower = document.getElementById("minNum").value;
let lower = document.getElementById("maxNum").value;



let str;

if (getRandomNumber(lower, upper) > guess) {
  str = 'The number is higher. Try again.';
} else if (getRandomNumber(lower, upper) < guess) {
  str = 'The number is lower. Try again.';
} else {
  str = 'You guessed it right!!!'
}