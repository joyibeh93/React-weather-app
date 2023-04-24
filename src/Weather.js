import React from 'react'
import axios from 'axios';
import { Circles } from 'react-loader-spinner'

function Weather(props) {
    function handleResponse(response){
        alert(`the weather for ${props.city} is ${response.data.main.temp} degrees`)
    }
    let apiKey="e7ac5db1afc40d248972898a4bbd11e2";
    let units = "metric"
    let Url=`https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&${units}`
    axios.get(Url).then(handleResponse)
 
    return (

   
    <div>
        <Circles
            height="80"
            width="80"
            color="#4fa94d"
            ariaLabel="circles-loading"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
        />
    </div>
  )
}

export default Weather