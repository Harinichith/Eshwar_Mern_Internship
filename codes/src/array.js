import React,{ useState } from 'react';

const Array =() => {
    var arr1=[1,2,3];
    var arr2=[4,5,6];
    const [final,setFinal]=useState([]);

    
  return (
    <div className="p-6 bg-gray-100">
      <h1>array1 elements:{arr1.join(",")}</h1>
      <h1>array2 elements:{arr2.join(",")}</h1>
      <h2>final:{final}</h2>
      <button className="bg-blue-500" onClick={() => setFinal(arr1.concat(arr2).join(","))} >click me</button>

    </div>
  );
};

export default Array;