import React from 'react'
import './WeatherReport.css'

function WeatherReport() {
  return (
    <div className='weather'>
      <div className='row'>
        <div className='col-6'>
          <form>
            <input type='search' placeholder='Enter a city' className='form-control' autoFocus='on'/>
          </form>
        </div>
        <div className='col-4'>
          <button className='btn btn-success w-100'>
            search
          </button>

        </div>


      </div>
      
      <div className='row mt-3'>
        <div className='col-8'>
          <div className='row'>
          <div className='col-5'>
            <div className='img-weather'>
              <p className='display-img'><img src='https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png' alt='weather-description'/></p>
              <p>
                  <span className='temperature'>31</span>
                  <span className='units'>oC</span>
              </p>

            </div>  
          </div>
          <div className='col-4'>
            <ul className='weather-description'>
              <li>Precipitation:15%</li>
              <li>Humidity: 72%</li>
              <li>Wind: 13km/hr</li>
            </ul> 
          </div>

          </div>
         

        </div>
        <div className='col-4'>
        <h1>Lisbon</h1>
            <ul>
              <li>Wednesday 7:00</li>
              <li>Mostly Cloudy</li>
            </ul>

        </div>


      </div>

     
     
    </div>
  )
}

export default WeatherReport