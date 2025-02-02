import React from 'react';
import C4 from './c4';
const C3=({msg})=>{
    return(
        <div>
        <h3>Component 3</h3>
        <C4 msg={msg}/>
        </div>
    )
}
export default C3;