import React from 'react'
import Formatteddate from './formattedDate'
import WeatherIcon from './weatherIcon'
import WeatherTemperature from './weatherTemperature'

function weatherInfo(props) {
  return (
    <div className='weatherInfo'>
        <div className="row mt-3">
          <div className="col-8">
            <div className="row">
              <div className="col-5">
                <div className="img-weather">
                  <p>
                    < WeatherIcon code={props.data.icon} alt={props.data.description} size={52}/>
                  </p>
                  {/* <p className="display-img">
                    <img
                      src={props.data.imgUrl}
                      alt={props.data.description}
                    />
                  </p> */}
                  <p>
                    <WeatherTemperature celcius={props.data.temperature}/>
                    
                  </p>
                </div>
              </div>
              <div className="col-4">
                <ul className="weather-description">
                  <li>pressure:{props.data.pressure}</li>
                  <li>Humidity:{props.data.humidity}km</li>
                  <li>wind:{props.data.wind}</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-4">
            <h1>{props.data.city}</h1>
            <ul>
              <li> <Formatteddate date = {props.data.date} /></li>
              <li className="text-capitalize">{props.data.description}</li>
            </ul>
          </div>
        </div>

    </div>
  )
}

export default weatherInfo