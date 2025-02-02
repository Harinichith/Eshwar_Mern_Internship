import React,{useState} from 'react'
import Child1 from './child1.js';
import grand_parent from './grand_parent.js';


const Parent1= () => {

    const [parent_message, setParentMessage] = useState("Hello from Parent");
    const [ child_message, setChildMessage] = useState('hai');
    const [grand_parent_msg,setGrandParentMesaage]=useState("Hello");

    const datafromchildd = (message) => {
        setChildMessage(message);
    }

    const data_grandParent=(msg)=>{
      setGrandParentMesaage(msg);
    }

  return (
    <div>
        <h1>Parent component</h1>
        <p>Data from Parent: {parent_message}</p>
        <p>Data from Child: {child_message}</p>
        <p>Data from GrandParent:{grand_parent_msg}</p>
        <grand_parent data_from_grandParent={data_grandParent}/>
        <Child1 msg={parent_message} datatoparent={datafromchildd} grand_msg={grand_parent_msg} />
    
        
    </div>
  )
}

export default Parent1;