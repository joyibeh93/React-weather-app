// import React,{useState} from 'react'
import axios from 'axios';
import { useState } from 'react';


function Weather() {
    const [city,setCity]=useState("");
    const [weather,setWeather]= useState({});

    //calling the temperature( required values) from the Api
    function showTemperature(response){
      setWeather({
        temperature: Math.round(response.data.main.temp),
        description:response.data.weather[0].description,
        humidity:response.data.main.humidity,
        wind:response.data.wind.speed,
        icon:`http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
      
      }
      )
    }
       
    // passing the Api Url to Axios
    function handleSubmit(event){
      event.preventDefauit()
        let apiKey="e7ac5db1afc40d248972898a4bbd11e2";
        let units = "metric"
        let Url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&${units}`
        axios.get(Url).then(showTemperature)
    }
    //accepting the city
    function changeCity(event){
        setCity(event.target.value)
      }
      let inputCity=(
        <form onSubmit={handleSubmit}>
          <input type="text"placeholder='please enter a city' onChange={changeCity} />
          <input type="Submit" value="Search" />
        </form>
      )
      if (city){
        return(
          <div>
             {inputCity}
          <ul>
            <li>Temperature: {Math.round(weather.temperature)}°C</li>
            <li>Description: {weather.description}</li>
            <li>Humidity: {weather.humidity}%</li>
            <li>Wind: {weather.wind}km/h</li>
            <li>
              <img src={weather.icon} alt={weather.description} />
            </li>
          </ul>
      </div>
    );

      }else {
       return inputCity
      }
         
}
export default Weather