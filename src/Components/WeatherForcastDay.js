import React from 'react';
import WeatherIcon from './weatherIcon'; 

function WeatherForcastDay(props) {
    function maxTemperature(){
        let temperature=Math.round(props.data.temperature.maximum)
        return temperature 
    }
    function minTemperatuer(){
        let temperature=Math.round(props.data.temperature.minimum)
        return temperature
    }
    function day(){
        let date= new Date(props.data.time * 1000)
        let day=date.getDay()
        let days=["sun","mon","tue","wed","thur","fri","sat"]
        return days[day]

    }
  return (
    <div>
        <div className='weatherDayForcast'>
              {day()}
        </div>
        <WeatherIcon code={props.data.condition.icon} alt={props.data.description} size={35}/>
        <div className='weatherForcast-Temperature'>
            <span className='weatherForcast-Temperature-max'> {maxTemperature()}°</span> |
            <span className='weatherForcast-Temperature-min'> {minTemperatuer()}°</span>
        </div>
    </div>
  )
}

export default WeatherForcastDay