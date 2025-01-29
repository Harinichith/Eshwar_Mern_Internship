import React,{ useReducer} from 'react';
const Colors={
      V:"violet",
      I:"indiogo",
      B:"blue",
      G:"green",
      R:"red",
      Y:"yellow",
      O:"orange",
      v:"violet",
      i:"indiogo",
      b:"blue",
      g:"green",
      r:"red",
      y:"yellow",
      o:"orange",



}
function reducerfunction(state,action){
    switch(action.type){
        case Colors.V:
            return {color:"violet",background:"violet"};
        case Colors.I:
            return {color: "indigo",background:"indigo" };
        case Colors.B:
            return {color:"blue",background:"blue"};
        case Colors.G:
            return {color:"green",background:"green"};
        case Colors.R:
            return {color:"red",background:"red"};
            case Colors.Y:
            return {color:"yellow",background:"yellow"};
            case Colors.O:
                return {color:"orange",background:"orange"};
            case Colors.v:
                return {color:"violet",background:"violet"};
            case Colors.i:
                return {color: "indigo",background:"indigo" };
            case Colors.b:
                return {color:"blue",background:"blue"};
            case Colors.g:
                return {color:"green",background:"green"};
            case Colors.r:
                return {color:"red",background:"red"};
            case Colors.y:
                return {color:"yellow",background:"yellow"};
            case Colors.o:
                return {color:"orange",background:"orange"};
     
        default:
             return state;
    }
}
 const Rainbow = () => {
    const [state,dispatch]=useReducer(reducerfunction,{color:'black'})
    const Getcolor=()=>{
    const userinput=prompt('Enter letter from the rainbow color')
    if(Colors[userinput]){
        dispatch({type:Colors[userinput]})
    }
    else{
        alert("the letter is not from rainbow color");
    }
}
  return (
    <div style={{background:state.backgroundcolor}}>
        <h1>{state.color}</h1>
     <button onClick={Getcolor}>Colors</button>
    </div>
  )
}
export default Rainbow;
