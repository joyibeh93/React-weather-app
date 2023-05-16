import React, { useState } from "react";
import "./WeatherReport.css";
import WeatherInfo from "./weatherInfo";
import axios from "axios";

function WeatherReport(props) {
  
  const [weather, setWeather] = useState({ condition:false});
  const [city,setCity] = useState(props.defaultcity)
  function handleResponse(response) {
    // console.log(response.data);
    setWeather({
      condition:true,
      temperature: response.data.temperature.current,
      wind: 12,
      humidity: response.data.temperature.humidity,
      pressure: response.data.temperature.pressure,
      imgUrl: "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png",
      description : response.data.condition.description,
      date:new Date(response.data.time *1000),
      city:response.data.city
    });
 
   
  }
  function handleSubmit(event){
    event.preventDefault()
    //search for a cuty
    search()
  }
  function handleCityChange(event){
    setCity(event.target.value)

    
  }
  function search(){
    const apiKey = "1b37c4b1ba4o7af717fd2c640f7ctab5";
    // let defaultcity = "lagos";
    let apiURL = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiURL).then(handleResponse);


  }

  if (weather.condition) {
    return (
      <div className="weather">
        <div className="row">
          <div className="col-6">
            <form onSubmit={handleSubmit}>
              <input
                type="search"
                placeholder="Enter a city"
                className="form-control"
                autoFocus="on"
                onChange={handleCityChange}
              />
            </form>
           
          </div>
         
          <div className="col-4">
            <button className="btn btn-success w-100">search</button>
          </div>
        </div>
        <WeatherInfo data={weather}/>

        
      </div>
    );
  } 
  else {
    search()

    return "The app is loading";
  }
}

export default WeatherReport;
