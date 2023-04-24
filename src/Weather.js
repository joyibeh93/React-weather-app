// import React,{useState} from 'react'
import axios from 'axios';
import { useState } from 'react';
// import { Circles } from 'react-loader-spinner'

function Weather() {
    const [city,setCity]=useState("");
    const [temperature,setTemperature]= useState("");

    //calling the temperature( required values) from the Api
    function showTemperature(response){
        let temp= Math.round(response.data.main.temp);
        let description=response.data.weather[0].description;
        let humidity=response.data.main.humidity;
        let wind=response.data.wind.speed;
        let icon = `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`;
        
        setTemperature(
        <div>
            <ul>
                <li> Temperature: {temp}°C</li>
                <li> Description: {description}</li>
                <li> Humidity: {humidity}</li>
                <li> wind: {wind}</li>
                <li> <img src={icon} alt={description} /> </li>
            
            </ul>
        </div>
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
    function changeCity(response){
        setCity(response.target.value)
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
            {temperature}
          </div>
        );
      }else {
        return(
        {inputCity}
        )
      }
        // return (
        //     <div>
        //       <Circles
        //           height="80"
        //           width="80"
        //           color="blue"
        //           ariaLabel="circles-loading"
        //           wrapperStyle={{}}
        //           wrapperClass=""
        //           visible={true}
        //       />
        //     </div>
         
}
export default Weather