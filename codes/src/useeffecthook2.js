import {useState,useEffect} from 'react';

function ExampleComponent(){
    const[count,setCount]=useState(0);
    useEffect(()=>{
        document.title =`you clicked ${count} times`;
        return ()=>{
            document.titile ='React App';
        };
     },[count]);
     return(
        <div>
            <p>You clicked {count} the button</p>
            <button onClick={()=>setCount(count+1)}>
                Click Me
            </button>
        </div>
     )
}
export default ExampleComponent;