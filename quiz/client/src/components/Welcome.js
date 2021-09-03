import React from 'react'; 
import '../App.css';

function Welcome({onClick}) {
  return (
    <div className="container-flex Welcome">
      <div className='backg'></div>
      <div className='row'>
        <div className='col-1'>
        </div>
        <div className='col-10 d-flex p-2'>
          <div className='container'>
            <div className='row'>
              <h2 className='wel-h2'>Welcome to the United States History quiz!</h2>
            </div>
            <div className='row'>
              <input id='wel-btn' type='submit' value='Start the quiz' onClick={onClick}/>
            </div>
          </div>
        </div>
        <div className='col-1'>
        </div>
      </div>
    </div>
  )
}
export default Welcome