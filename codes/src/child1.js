import React,{useState} from 'react'


 const Child1 = (props, datatoparent) => {

    const [child_message, setChildMessage] = useState("Hello from Child");

    const send_message = () => {
        props.datatoparent(child_message);
    }

  return (
    <div>
        <h1>Child component</h1>
        <p>Data from Parent: {props.msg}</p>
        <p>Data from grand Parent:{props.grand_msg} </p>
        <button onClick={send_message}>Send Data to Parent</button>
    </div>
  )
}
export default Child1;