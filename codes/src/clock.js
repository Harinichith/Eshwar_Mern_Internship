import React from "react";
import { useState,useEffect } from "react";
const Clock=()=>{
  const [State,setState]=useState(0);
    useEffect(()=>{document.getElementById("one").innerHTML=`value ${State}`;},
[State]);



    return(
        <div>
            <h1>Clock</h1>
            <h1>{document.title}</h1>
            <h1 id="one"></h1>
            <h1>{State}</h1>
        <button onClick={()=>setState(State+1)}>+</button><br />
        <button onClick={()=>setState(State-1)}>-</button><br />
        <button onClick={()=>setState(0)}>Reset</button>
        </div>
    )
}
export default Clock;