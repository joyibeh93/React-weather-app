import React,{useState} from 'react';
import WeatherForcastDay from './WeatherForcastDay';
import axios from 'axios';

const WeatherDailyForcast = (props) => {
  const [loaded,setLoaded]=useState(false)
  const [forcast,setForcast]=useState()

  function handleResponse(response){
    console.log(response.data)
    setForcast(response.data.daily)
    setLoaded(true)


  }

  if (loaded){
    console.log(forcast)
    return(
      <div>
        <div className='row'>
          <div className='col'>

          <WeatherForcastDay data={forcast[0]}/>

          </div>
             
        </div>
    </div>
    )
    
  }
  else{

  let apiKey='1b37c4b1ba4o7af717fd2c640f7ctab5';
  let latitude=props.coordinates.latitude
  let longitude=props.coordinates.longitude
  let apiURL=`https://api.shecodes.io/weather/v1/forecast?lat=${latitude}&lon=${longitude}&key=${apiKey}&units=metric`;
  
  axios.get(apiURL).then(handleResponse)
  return "fetching daily weather report"
  }

 
}

export default WeatherDailyForcast