import React from 'react'

function Jsobject() {
  var obj={
    num:100,
    name:"Harini",
  }
  const state={
    pass:"123"
  }
  const password=prompt("Enter the password");
  let imgsrc;
  if(password=state.pass){
    imgsrc="demp1/img/thumps.jpeg";
  }
  else{
    imgsrc="demp1/img/thumps1.jpeg";
  }
  return (
    <div>
      <h1>{obj.num}</h1>
      <h1>{obj.name}</h1>
      <img src={imgsrc} alt="thumps"/>
      </div>
  )
}

export default Jsobject;