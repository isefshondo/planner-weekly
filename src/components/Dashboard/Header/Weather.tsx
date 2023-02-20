import React from "react";
import axios, { AxiosError } from "axios";
import { AppContext } from "../../../context/ApplicationContext";
import { ApplicationContext, } from "../../../interfaces/general-interfaces";
import { WeatherProps } from "../../../interfaces/dashboard-interfaces";
import Icon from "../../../assets/imgs/weather-icon.svg"
import { StyledWeather, WeatherWrapper } from "./styles";

const Weather = () => {
  const myAPIKey: string = "28272ea1cee8074586ce4325ff060c94";

  const [isCityValid, setIsCityValid] = React.useState<boolean>(true);
  const [weatherData, setWeatherData] = React.useState<WeatherProps>();
  const { enteredUser } = React.useContext<ApplicationContext>(AppContext);

  
  async function fetchingWeather() {
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${enteredUser.city}&units=metric&appid=${myAPIKey}`, {
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      }
    }).then((data) => {
      setWeatherData(data.data.main.temp);
    }).catch((error: AxiosError) => {
      error !== null && setIsCityValid(false);
    });
  }

  React.useEffect(() => {
    fetchingWeather()
  }, [enteredUser.city]);

  return (
    <WeatherWrapper>
      <h6>{enteredUser.city} - {enteredUser.country}</h6>
      <StyledWeather>
        <img src={Icon} alt="Weather's Icon" />
        {isCityValid ? `${Number(weatherData).toFixed(0)}°` : "Location not found!"}
      </StyledWeather>
    </WeatherWrapper>
  );
};

export default Weather;