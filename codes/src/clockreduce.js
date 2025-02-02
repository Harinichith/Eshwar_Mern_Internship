import React,{useState,useEffect, useReducer} from 'react';
function reducerfunction(state,action){
    return  {count:state.count+1}
}
 const Clockreduce = () => {
    const [state,dispatch]=useReducer(reducerfunction,{count:55})
    function increment(){
        dispatch()
    }
    function decrement(){
        dispatch()
    }
    console.log(state)
  return (
    <div>
        <h1>{state.count}</h1>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
    </div>
  )
}
export default Clockreduce;
