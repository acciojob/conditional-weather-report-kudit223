import React from "react";

export default function WeatherDisplay({temperature,conditions}){
    let tempColor=temperature>20?'red':'blue';
    return(<>
    <p>temperature:<span style={{color:tempColor}}> {temperature}</span></p>
     <p>conditions:{conditions}</p>
    
    </>)
}