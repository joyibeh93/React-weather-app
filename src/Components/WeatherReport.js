import React, { useState } from "react";
import "./WeatherReport.css";
import axios from "axios";

function WeatherReport() {
  
  const [weather, setWeather] = useState({ condition:false});
  function handleResponse(response) {
    console.log(response.data);
    setWeather({
      condition:true,
      temperature: response.data.temperature.current,
      wind: 12,
      humidity: response.data.temperature.humidity,
      pressure: response.data.temperature.pressure,
      imgUrl: "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png",
      description : response.data.condition.description,
      date:"Wednesday 7:00"
    });
   
  }
  if (weather.condition) {
    return (
      <div className="weather">
        <div className="row">
          <div className="col-6">
            <form>
              <input
                type="search"
                placeholder="Enter a city"
                className="form-control"
                autoFocus="on"
              />
            </form>
          </div>
          <div className="col-4">
            <button className="btn btn-success w-100">search</button>
          </div>
        </div>

        <div className="row mt-3">
          <div className="col-8">
            <div className="row">
              <div className="col-5">
                <div className="img-weather">
                  <p className="display-img">
                    <img
                      src={weather.imgUrl}
                      alt={weather.description}
                    />
                  </p>
                  <p>
                    <span className="temperature">
                      {Math.round(weather.temperature)}
                    </span>
                    <span className="units text-capitalize">°C</span>
                  </p>
                </div>
              </div>
              <div className="col-4">
                <ul className="weather-description">
                  <li>pressure:{weather.pressure}</li>
                  <li>Humidity:{weather.humidity}</li>
                  <li>wind:{weather.wind}</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-4">
            <h1>Lagos</h1>
            <ul>
              <li>{weather.date}</li>
              <li className="text-capitalize">{weather.description}</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "1b37c4b1ba4o7af717fd2c640f7ctab5";
    let city = "Lisbon";
    let apiURL = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiURL).then(handleResponse);

    return "The app is loading";
  }
}

export default WeatherReport;
