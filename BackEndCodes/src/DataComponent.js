import React, { useEffect } from "react";
import { useState } from "react";
import axios from 'axios';

const DataComponent =()=>{
    const[data,setData]=useState('');
    const[inputMessage,setInputMessage]=useState(' ');
    const[responseMessage,setResponsemessage]=useState(' ');
    useEffect(()=>{
        axios.get('http://localhost:3000/api/data')
        .then(response =>setData(response.data.message))
        .catch(error => console.error('Error fetching data:',error));
        
    },[]);
    const handlesubmit =(event)=>{
        event.preventDefault();
        axios.post('http://localhost:3000/api/data',{message:inputMessage})
        .then(response=>setResponsemessage(response.data.message))
        .catch(error => console.error('Error fetching data:',error));
    };
    return(
        <div>
            <h1>Data from state</h1>
            <h1>{data}</h1>
            <form onSubmit={handlesubmit}>
                <labe>
                    Enter a message:
                    <input type="text" value={inputMessage} onChange={(e)=>setInputMessage(e.target.value)}
                    />
                </labe>
                <button type="submit" >Submit</button>
            </form>
        </div>
    );
};
export default DataComponent;