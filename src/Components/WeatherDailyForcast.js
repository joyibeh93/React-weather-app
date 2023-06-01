import React from 'react'
import WeatherIcon from './weatherIcon'
import axios from 'axios';

const WeatherDailyForcast = (props) => {
  function handleResponse(response){
    console.log(response.data)

  }

  let apiKey='1b37c4b1ba4o7af717fd2c640f7ctab5';
  let latitude=props.coordinates.latitude
  let longitude=props.coordinates.longitude
  let apiURL=`https://api.shecodes.io/weather/v1/forecast?lat=${latitude}&lon=${longitude}&key=${apiKey}&units=metric`;
  
  axios.get(apiURL).then(handleResponse)
  return (
    <div>
        <div className='row'>
          <div className='col'>
            <div className='weatherDayForcast'>
              Thur 
            </div>
             <WeatherIcon code="clear-sky-day" size={35}/>
             <div className='weatherForcast-Temperature'>
                <span className='weatherForcast-Temperature-max'> 19°</span> |
                <span className='weatherForcast-Temperature-min'> 10°</span>
              </div>

          </div>
             
        </div>
    </div>
    
  )
}

export default WeatherDailyForcast