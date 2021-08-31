import React from 'react' 

function Welcome({onClick}) {
  return (
    <div>
      <h2>Welcome to the United States History quiz!</h2>
      <input type='submit' value='Start the quiz' onClick={onClick}/>
    </div>
  )
}
export default Welcome