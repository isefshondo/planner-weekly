import axios from 'axios';
import React from 'react'
import { HeaderWeather } from './Header.styles';
import WeatherIcon from '../../../assets/weather-icon.svg';
import { AuthContext } from '../../../context/AuthContext';

const Weather = () => {
  const [loading, setLoading] = React.useState(true);
  const myApiKey = '28272ea1cee8074586ce4325ff060c94';

  const [weatherObject, setWeatherObject] = React.useState(null);
  const { user } = React.useContext(AuthContext);

  async function fetchingWeather(){
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${user.city}&units=metric&appid=${myApiKey}`,{
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      }
    }).then(
      (data) => {
        setWeatherObject(data.data);
      }
    ).finally(() => {
      setLoading(false);
    })
  }

  React.useEffect(() => {
    fetchingWeather()
  }, []);

  return (
    <HeaderWeather>
      <p>
        {user.city} - {user.country}
      </p>
      <label htmlFor="weather">
        <img
          src={WeatherIcon}
          // src={`http://openweathermap.org/img/wn/${weatherObject?.weather[0]?.icon}.png`}
          alt="Weather's Icon"
        />
        {Number(weatherObject?.main?.temp).toFixed(0)}&#186;
      </label>
    </HeaderWeather>
  );
}

export default Weather
