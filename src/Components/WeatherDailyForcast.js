import React,{useState,useEffect} from 'react';
import WeatherForcastDay from './WeatherForcastDay';
import axios from 'axios';

const WeatherDailyForcast = (props) => {
  const [loaded,setLoaded]=useState(false)
  const [forcast,setForcast]=useState()

  useEffect(()=>{
    setLoaded(false)
  },[props.coordinates])

  function handleResponse(response){
    console.log(response.data)
    setForcast(response.data.daily)
    setLoaded(true)
  }
  function load(){
    let apiKey='1b37c4b1ba4o7af717fd2c640f7ctab5';
    let latitude=props.coordinates.latitude
    let longitude=props.coordinates.longitude
    let apiURL=`https://api.shecodes.io/weather/v1/forecast?lat=${latitude}&lon=${longitude}&key=${apiKey}&units=metric`;
    
    axios.get(apiURL).then(handleResponse)
    return "fetching daily weather report"
  }

  if (loaded){
    //console.log(forcast)
    return(
      <div>
        <div className='row'>    
            {forcast.map(function (dailyforcast, index){
              if (index < 7) {
                return(
                  <div className='col' key={index}>
                    <WeatherForcastDay data={dailyforcast}/>
                  </div>
              );
            }else{
              return null
            }
            
                } 
               
            )
            }     
        </div>
      </div>
    )
    
  }
  else{
    load()
  }

 
}

export default WeatherDailyForcast