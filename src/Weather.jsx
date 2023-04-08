// Weather.js

import React from 'react';
import './Weather.css';

const Weather = ({ name, des, img, temp }) => {
  return (
    <div className="weather-container">
      <h2 className="weather-name">Weather in {name}</h2>
      <p className="weather-description">Description: {des}</p>
      <img className="weather-icon" src={`http://openweathermap.org/img/w/${img}.png`} alt="Weather Icon" />
      <p className="weather-temperature">Temperature: {temp}°C</p>
    </div>
  );
}

export default Weather;

