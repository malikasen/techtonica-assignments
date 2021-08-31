import React from "react"

function Question(props) {
  const data = props.question.correct;
  return (
      <div>
        <h3>Question {props.question.id}: {props.question.title}</h3>
        <input type='submit' value={props.question.choices[0]} onClick={ () => props.onAnswer(data, props.question.choices[0]) } />
        <input type='submit' value={props.question.choices[1]} onClick={ () => props.onAnswer(data, props.question.choices[1]) }/>
        <input type='submit' value={props.question.choices[2]} onClick={ () => props.onAnswer(data, props.question.choices[2]) }/>
        <input type='submit' value={props.question.choices[3]} onClick={ () => props.onAnswer(data, props.question.choices[3]) }/>
      </div>
  )
}

export default Question