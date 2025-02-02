import React,{useSate} from 'react'

const grand_parent=(props)=> {
const[grand_parent_message,setGrandParentMesaage]='Good Morning from grandParent';

function send_message(){
    props.data_from_grandParent("How are you");
}
return (
    <div>
        <button onClick={send_message} alt="send_message">Message_from_Grand_Parent</button>
    </div>
)
}

export default grand_parent;