import { useState, useEffect } from 'react';
import './App.css';
// import moment from 'moment';

function ForecastDay({forecast}) {
  return (
    <div className='forecastDay'>
      {/* <h3 id='dayOfWeek'></h3> */}
      <h3 className='date'>{forecast.dt_txt}</h3>
      <i className='weatherIcon'></i>
      <h4 className='temp'>Temp {forecast.main.temp} F</h4>
      <h4 className='description'>{forecast.weather.description}</h4>
      <h4 className='humidity'>{forecast.main.humidity}</h4>
      <h4 className='wind'>{forecast.wind.speed}</h4>
    </div>
  )
}

function Forecast({city}) {
  const [forecasts, setForecasts] =useState([]);
  const fetchData = () => {
    fetch("https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&units=imperial&appid=799fecc631c47adc89b3f3f3e590285b")
    // 5day/3 hour "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&appid=3d1dfd49bd39d14e53c1764e6af8b0cc" 
    .then((response) => response.json())
    .then(function(json) {
      console.log(json);
      const forecastIndexes = [3,11,19,27,35];
      if (json.list !== undefined) {
        const forecastsAtNoon = json.list.filter((forecast,index) => {
          return forecastIndexes.includes(index);
        });
        setForecasts(forecastsAtNoon);
      }
    })
  }
  useEffect(() => {
    if (city !== undefined) {
      fetchData()
    }
  })
  return (
    <div className='forecastList'>
      {forecasts.map((forecast, index) => {
        return <ForecastDay forecast={forecast} key={index}/>
      })}
    </div>
  )
}

function Form({setCity}) {
  function onClick() {
    console.log('hello');
    const cityElement = document.getElementById('city');
    const city = cityElement.value;
    setCity(city);
  }
  return (
    <div>
      <form>
        <input type='text' name='city' id='city' placeholder='Lookup Location'></input>
        <input type='button' onClick={onClick} id='submit' value='submit'></input>
      </form>
    </div>
  )
}

function App() {
  const [city, setCity] = useState();
  return (
    <div className="App">
      <header className="App-header">5-Day Forecast.</header>
      <Form setCity={setCity}/>
      <Forecast city={city}/>
    </div>
  );
}

export default App;
