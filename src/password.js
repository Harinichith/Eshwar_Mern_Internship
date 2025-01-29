import React,{useState} from 'react';
import Granted from './granted';
import Denied from './denied';

function Password() {
    const[Same,setSame]=useState(' ')
    const passwordinput="2345";
    const Passwordcheck=()=>{
    var input=prompt('Enter your password');
        if(input==passwordinput){
            setSame(true);
        }
        else{
            setSame(false);
        }
    }
  return (
    <div>
        <button onClick={Passwordcheck}>Click</button>
        {setSame === true && <Granted />}
        {setSame  === false && <Denied />}

    </div>
  )
}

export default Password;