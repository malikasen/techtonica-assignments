import React from "react"

function FinalScore({score, totalScore}) {
  return (
    <div className='Final'>
      <div className='backg'></div>
      <p className='f-p'>Congatulation! Your final score was {score}/{totalScore}</p>
    </div>
  )
}

export default FinalScore