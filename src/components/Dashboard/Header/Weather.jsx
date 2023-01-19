import axios from 'axios';
import React from 'react'
import { UserContext } from '../../../context/UserContext';
import { HeaderWeather } from './Header.styles';

const Weather = () => {
  const myApiKey = '28272ea1cee8074586ce4325ff060c94';

  const [weatherObject, setWeatherObject] = React.useState(null);
  const { country, city } = React.useContext(UserContext);

  async function fetchingWeather(){
    const response = axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${myApiKey}`,{
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      }
    }).then(
      (data) => {
        setWeatherObject(data.data);
      }
    );
  }

  React.useEffect(() => {
    fetchingWeather()
  }, []);

  return (
    <HeaderWeather>
      <p>
        {city} - {country}
      </p>
      <label htmlFor="weather">
        <img
          src={`http://openweathermap.org/img/wn/${weatherObject?.weather[0]?.icon}.png`}
          alt="Weather's Icon"
        />
        {weatherObject?.main?.temp}&#186;
      </label>
    </HeaderWeather>
  );
}

export default Weather
