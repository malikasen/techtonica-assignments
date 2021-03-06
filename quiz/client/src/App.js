import React, { useState, useEffect, useCallback } from 'react'
import './App.css';
import Question from './components/Question'
import Welcome from './components/Welcome'
import FinalScore from './components/FinalScore';


function App() {
  const [feedback, setFeedback] = useState('');
  const [score, setScore] = useState(0);
  const [gameStarted, setGameStarted] = useState(false);
  const [questionList, setQuestionList] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  useEffect(() => {
    return fetch('http://localhost:9000/questions')
    .then(response => response.json())
    .then(json => setQuestionList(json))
    .catch(error => console.log(error))
  }, [])

  const incrementQuestionIndex = () => {
    setCurrentQuestionIndex(currentQuestionIndex + 1);
    setFeedback('');
  }

  const checkAnswer = (correctAnswer, actualAnswer) => {
    
    if (correctAnswer === actualAnswer) {
      setFeedback("Correct!");
      setScore(score + 1);
    } else {
      setFeedback("Wrong Answer!");
    }
  }
 
  const beginGame = () => {
    setGameStarted(true);
  } 

  if (!gameStarted) {
    return <Welcome onClick={beginGame}/>
  }

  if(currentQuestionIndex === questionList.length) {
    return <FinalScore score={score} totalScore={questionList.length} />
  }

  return (
    <div className="App">
      <div id='score-section'>
        The score is {score}/{questionList.length}
      </div>
      <div>
        {/* {questionComponents} */}
        <Question question={questionList[currentQuestionIndex]} onAnswer={checkAnswer} onNext={incrementQuestionIndex} />
      </div>
      <div className='feedback'>
        {feedback} 
      </div>
    </div>
  );
}

export default App;
