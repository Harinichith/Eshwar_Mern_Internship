import React, {useState} from "react";
const Form=()=>{
    const [form,setform]=useState({name:"", age:""});
    // const [age,setAge]=useState(" ");
    function handlechange(event){
        const {name,value}=event.target;
        setform((curr)=>({
            ...curr,
            [name]:value,
        })); 
    }
    console.log(form);

    return(
        <div>
        <label>Name:</label>
        <input type="text" onChange={handlechange} name="name" value={form.name}></input><br />
        <label>Age:</label>
        <input type="number" onChange={handlechange} name="age" value={form.age}></input><br />
        
        <h1>Name: {form.name}</h1>
        <h1>Age: {form.age}</h1>
        </div>
    )
}
export default Form;