import React from 'react'
// import Weather from './Weather';
// import Circlle from './Circlle';
import WeatherReport from './Components/WeatherReport';
import './App.css'

function App() {
  return (
    <div>
      <div className="App-container">
        {/* <Weather/> */}
        <WeatherReport/>
        {/* <Circlle/> */}
        <footer>
        <p> Developed by Ibeh Joy chinwendu using React, the source code    < a href="https://github.com/joyibeh93/React-weather-app" target='_blank' rel="noreferrer">Source-Code</a></p>

        </footer>
        
        
      </div>

       
    </div>
  )
}

export default App