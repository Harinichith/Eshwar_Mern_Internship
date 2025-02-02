import React,{useState} from 'react';

const App1 =() =>{
    const[message,setMessage]=useState('Click the button to see a message!');

    const handleClick =()=>{
        setMessage('Hello, you clicked the button');
    };
    const handleClick1 =()=>{
        setMessage('happy morning');
    };
    return (
        <div>
            <h1>{message}</h1>
            <button onClick={handleClick}>Click Me!</button>
            <button onClick={handleClick1}>Click!</button>
        </div>
        
    );
};
export default App1;