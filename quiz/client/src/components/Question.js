import React, { useState } from "react"

function Question(props) {
  const data = props.question.correct;

  const [questionAnswered, setQuestionAnswered] = useState(false);

  const onAnswer = (number) => {
    props.onAnswer(data, props.question.choices[number]);
    setQuestionAnswered(true);
  }

  const proceedToNextQuestion = () => {
    setQuestionAnswered(false);
    props.onNext();
  }
  return (
      <div className='q-container'>
        <h3 className='q-q'>Question {props.question.id}: {props.question.title}</h3>
        {/* <div className='q-row'> */}
          <input className="box q-btn" type='submit' value={props.question.choices[0]} onClick={ () => onAnswer(0) } disabled={questionAnswered} />
          <input className="box q-btn" type='submit' value={props.question.choices[1]} onClick={ () => onAnswer(1) } disabled={questionAnswered} />
        {/* </div> */}
        {/* <div className='q-row'> */}
          <input className="box q-btn" type='submit' value={props.question.choices[2]} onClick={ () => onAnswer(2) } disabled={questionAnswered} />
          <input className="box q-btn" type='submit' value={props.question.choices[3]} onClick={ () => onAnswer(3) } disabled={questionAnswered} />
        {/* </div> */}
        <input className="q-next" type='button' value='Next question' onClick={proceedToNextQuestion} disabled={!questionAnswered} />
      </div>
  )
}

export default Question