import { useState,useEffect } from "react";

function TimerComponent(){
    const [seconds ,setSeconds]=useState(0);
    useEffect(()=>{
        const interval = setInterval(()=>{//callback function setInterval
            setSeconds(prevSeconds => prevSeconds+1);
        },300);
        return()=> clearInterval(interval);
    },[]);
    return(
        <div>
            <h2>Timer:</h2>
            <p>{seconds}seconds are passing.</p>
        </div>
    );
}
export default TimerComponent;