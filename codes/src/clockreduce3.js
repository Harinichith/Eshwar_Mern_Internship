import React,{ useReducer} from 'react';
const Actions={
    INCREMENT:"increment",
    DECREMENT:"decrement",
    RESET:"reset",
    SETCOUNT:"setcount",
}
function reducerfunction(state,action){
    switch(action.type){
        case Actions.INCREMENT:
            return {count:state.count+1}
        case Actions.DECREMENT:
            return {count:state.count-1}
        case Actions.RESET:
            return{count:55}
        case Actions.SETCOUNT:
            return{count:action.payload};
    }
}
 const Clockreduce3 = () => {
    const [state,dispatch]=useReducer(reducerfunction,{count:55})
    function increment(){
        dispatch({type:Actions.INCREMENT});
    }
    function decrement(){
        dispatch({type:Actions.DECREMENT})
    }
    function reset(){
        dispatch({type:Actions.RESET})
    }
    function setcount(value){
        dispatch({type:Actions.SETCOUNT,payload:value})
    }
    console.log(state)
  return (
    <div>
        <h1>{state.count}</h1>
        <button onClick={increment}>increment</button>
        <button onClick={decrement}>decrement</button>
        <button onClick={reset}>Reset</button>
        <button onClick={()=>setcount(100)}>SetCount</button>
    </div>
  )
}
export default Clockreduce3;
