import React from 'react'

function formattedDate(props) {
    let days=["sunday","monday","Tuesdays","wednesday","thursday","friday","saturday"];
    let day =days[props.date.getDay()];
    let hour= props.date.getHours();
   
    if (hour < 10){
        hour=`0${hour}`
    }
    let min=props.date.getMinutes();
    if(min<10){
        min=`0${min}`
    }
  return (
    <div>
      {day} {hour}:{min}
    </div>
  )
}

export default formattedDate