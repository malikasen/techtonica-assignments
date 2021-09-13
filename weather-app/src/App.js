import { useState, useEffect, useMemo } from 'react';
import './App.css';
// import moment from 'moment';

function ForecastDay({forecast}) {

  const getDayOfWeek = () => {
    const date = new Date(forecast.dt*1000);
    switch(date.getDay()) {
      case 0: return "Sunday"
      case 1: return "Monday"
      case 2: return "Tuesday"
      case 3: return "Wednesday"
      case 4: return "Thursday"
      case 5: return "Friday"
      case 6: return "Saturday"
    }
  }
  const iconString = `http://openweathermap.org/img/w/${forecast.weather[0].icon}.png`
  console.log(iconString);
  return (
    <div className='forecastDay' class='col ForecastCard'>
      <h3 id='dayOfWeek'>{getDayOfWeek()}</h3>
      <h3 className='date'>{forecast.dt_txt.substring(0,11)}</h3>
      <img className='weatherIcon' src={iconString} alt='Icon weather should be here'></img>
      <h4 className='temp'>Temp {forecast.main.temp} F</h4>
      <h4 className='description'>{forecast.weather[0].description}</h4>
      <h4 className='humidity'>Humidity: {forecast.main.humidity}</h4>
      <h4 className='wind'>Wind: speed {forecast.wind.speed}, deg {forecast.wind.deg}</h4>
    </div>
  )
}

function Forecast({city}) {
  const [forecasts, setForecasts] = useState([]);
  useMemo(() => {
    if (city !== undefined) {
      fetch("https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&units=imperial&appid=dd404e88f1240ad89413f450ca007d1d")
      // 5day/3 hour "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&appid=3d1dfd49bd39d14e53c1764e6af8b0cc" 
      // 799fecc631c47adc89b3f3f3e590285b
      // c2a342ca948b9c3c397372c123d2a67a
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
  }, [city])
  
  return (
    <div className='forecastList' class='container'>
      <div class='row'>
        {forecasts.map((forecast, index) => {
          return <ForecastDay forecast={forecast} key={index}/>
        })}
      </div>
    </div>
  )
}

function Form({setCity}) {
  function onClick(event) {
    event.preventDefault();
    const cityElement = document.getElementById('city');
    const city = cityElement.value;
    setCity(city);
  }
  return (
    <div>
      <form onSubmit={onClick}>
        <input type='text' name='city' id='city' placeholder='Lookup Location'></input>
        <input type='submit' id='submit' value='submit'></input>
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
