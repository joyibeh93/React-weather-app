import React,{ useState } from "react";


function WeatherTemperature(props){
const [unit,setUnit]=useState('celcius');

function convertToFahreheit(event){
    event.preventDefault();
    setUnit("Fahrenheit");
}
function convertToCelcius(event){
    event.preventDefault();
    setUnit('celcius');
}
   
    if(unit ==='celcius'){
        return (
            <span>
                <span className="temperature">
                    {Math.round(props.celcius)}
                </span>
            <span className="units text-capitalize"> °C| <a href="/" onClick={convertToFahreheit}> °F </a> </span>
            </span>
        )

    }
    else{
        
        let Fahrehreit= (props.celcius)*(9/5) +32;
       return (
            <span>
                <span className="temperature">
                    {Math.round(Fahrehreit)}
                </span>
                <span className="units text-capitalize"> <a href="/" onClick={convertToCelcius} > °C </a>|  °F  </span>
            </span>
        
       )
    }

    // let Fahrehreit= (props.celcius)*(9/5) +32;
    // return (
    //     <span>
    //         <span className="temperature">
    //             {Math.round(Fahrehreit)}
    //         </span>
    //     <span className="units text-capitalize"> <a href="/"  °C| </a> °F  </span>
    //     </span>

    // )
   
}
export default WeatherTemperature;