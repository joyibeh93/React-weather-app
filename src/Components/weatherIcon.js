import React from 'react'
import ReactAnimatedWeather from 'react-animated-weather'

function weatherIcon(props) {
   const codeMapping = {
    "clear-sky-day": "CLEAR_DAY",
    "clear-sky-night": "CLEAR_NIGHT",
    "few-clouds-day": "PARTLY_CLOUDY_DAY",
    "few-clouds-night": "PARTLY_CLOUDY_NIGHT",
    "scattered-clouds-day": "PARTLY_CLOUDY_DAY",
    "scattered-clouds-night": "PARTLY_CLOUDY_NIGHT",
    "broken-clouds-day": "CLOUDY",
    "broken-clouds-night": "CLOUDY",
    "shower-rain-day": "RAIN",
    "shower-rain-night": "RAIN",
    "rain-day": "RAIN",
    "rain-night": "RAIN",
    "thunderstorm-day": "RAIN",
    "thunderstorm-night": "RAIN",
    "snow-day": "SNOW",
    "snow-night": "SNOW",
    "mist-day": "FOG",
    "mist-night": "FOG",
  };
  const colors ={
    "clear-sky-day": "yellow",
    "clear-sky-night": "black",
    "few-clouds-day": "blue",
    "few-clouds-night": "black",
    "scattered-clouds-day": "blue",
    "scattered-clouds-night": "black",
    "broken-clouds-day": "blue",
    "broken-clouds-night": "black",
    "shower-rain-day": "blue",
    "shower-rain-night": "blue",
    "rain-day": "blue",
    "rain-night": "blue",
    "thunderstorm-day": "blue",
    "thunderstorm-night": "blue",
    "snow-day": "black",
    "snow-night": "black",
    "mist-day": "black",
    "mist-night": "black",

  }
  return (
    <ReactAnimatedWeather
      icon={codeMapping[props.code]}
      color={colors[props.code]}
      size={props.size}
      animate={true}
    />
  )
  
  
}

export default weatherIcon