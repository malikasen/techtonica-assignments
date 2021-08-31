import React, { useState, useEffect, useCallback } from 'react'
import './App.css';
import questionsData from './components/questionsData'
import Question from './components/Question'
import Welcome from './components/Welcome'

function App() {
  const [feedback, setFeedback] = useState('Feedback will be displayed here');
  const [currentQuestion, setCurrentQuestion] = useState();
  const [correctAnswers, setCorrectAnswers] = useState([]);
  const [incorrectAnswers, setIncorrectAnswers] = useState([]);
  const [gameStarted, setGameStarted] = useState(false);
  const [unAnsweredQuestions, setUnAnsweredQuestions] = useState([]);
  useEffect(() => {
    return fetch('http://localhost:9000/questions')
    .then(response => response.json())
    .then(json => setUnAnsweredQuestions(json))
    .then(() => {
      console.log(unAnsweredQuestions)
    })
    .catch(error => console.log(error))
  }, [])

  // const [unAnsweredQuestions, setUnAnsweredQuestions] = useState
  const onAnswer = (correctAnswer, actualAnswer) => {
    if (correctAnswer === actualAnswer) {
      setFeedback("Correct!");
    } else {
      setFeedback("Wrong Answer!");
    }
  }
  const getNextQuestion = useCallback(() => {
    const questionClone = [...unAnsweredQuestions];
    // console.log(unAnsweredQuestions)
    // console.log(questionClone)
    setCurrentQuestion(questionClone.pop());
    setUnAnsweredQuestions(questionClone);
  }, [unAnsweredQuestions])
  useEffect(() => {
    getNextQuestion();
  }, [unAnsweredQuestions])
  // const questionComponents = unAnsweredQuestions.map(item => <Question key={item.id} question={item} onAnswer={onAnswer} />)
  const beginGame = () => {
    setGameStarted(true);
  } 
  // console.log(currentQuestion);
  if (!gameStarted) {
    return <Welcome onClick={beginGame}/>
  }
  return (
    <div className="App">
      <div className='feedback'>
        {feedback} 
      </div>
      <div>
        {/* {questionComponents} */}
        <Question question={currentQuestion} onAnswer={onAnswer} />
      </div>
    </div>
  );
}

export default App;
