import { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function Header() {
  return <h1>Welcome to "Guess My Number" Game</h1>
}

function getRandomNumber(min, max) {
  min = Number(min);
  max = Number(max);
  let num = Math.floor(Math.random() * (max - min + 1) + min);
  console.log('num', num);
  return num;
}


function SetUpForm({setRandomNum}) {
  function onClick() {
    const minInput = document.getElementById('minNum');
    const minNum = minInput.value;
    const maxInput = document.getElementById('maxNum');
    const maxNum = maxInput.value;
    const randomNum = getRandomNumber(minNum, maxNum);
    setRandomNum(randomNum);
  }
  return (
    <div>
      <form id='minAndMax'>
        <label for='minNum'>Please, enter the minimum number</label>
        <input type='number' step='1' name='minNum' id='minNum' required></input>
        <label for='maxNum'>Please, enter the maximum number</label>
        <input type='number' step='1' name='maxNum' id='maxNum' required></input>
        <input type='button' onClick={onClick} id='generate' value='generate number' role='button' aria-pressed="false"></input>
      </form>
      <p id='missingInput'></p>
    </div>
  )
}

function GuessingForm({updateGuesses}) {
  function onClick() {
    const guess = document.getElementById('guess');
    updateGuesses(guess.value);
  }
  return (
    <div>
      <form>
        <label for='guess'>Guess what number it is?</label>
        <input type="number" step='1' name='guess' id='guess' required></input>
        <input type='button' onClick={onClick} id='try' value='try!' role='button'></input>
      </form>
    </div>
  )
}

function Result({guesses, randomNum}) {
  const userFeedback = () => {
    const guess = guesses[guesses.length - 1];
    if (guess > randomNum) {
      return 'Your guess is too high';
    } else if (guess < randomNum) {
      return 'Your guess is too low';
    } else {
      return 'Congratulations! You guessed it right!'
    }
  }
  return (
    <div>
      <p id='feedback'>{userFeedback()}</p>
      <p id='pastGuesses'>Your previous guesses were: {guesses.join(', ')}</p>
    </div>
  )
}


function App() {
  const [randomNum, setRandomNum] = useState();
  const [guesses, setGuesses] = useState([]);
  const [gameStarted, setGameStarted] = useState(false);
  function updateGuesses(guess) {
    setGuesses([...guesses, guess]);
    if (gameStarted === false) {
      setGameStarted(true);
    }
  }
  return (
    <div className="App">
      <Header />
      <SetUpForm setRandomNum={setRandomNum} />
      <GuessingForm updateGuesses={updateGuesses} />
      {gameStarted && <Result guesses={guesses} randomNum={randomNum} />}
    </div>
  );
}

export default App;
