import React from "react";

export default function Weather({temperature,conditions}){
    let tempColor=temperature>20?'red':'blue';
    return(<>
    <p><span style={{color:tempColor}}> temperature:{temperature}</span> conditions:{conditions}</p>
    
    </>)
}