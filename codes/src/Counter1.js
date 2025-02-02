import React,{useState} from 'react';
function Counter1(){
    const [count,setCount]=useState(100);
    const decrement =()=>{
        setCount(count-1);
    };
    return (
        <div>
            <h1>Counter1:{count}</h1>
            <button onClick={decrement}>Decrement</button>

        </div>
    );

} 
export default Counter1;