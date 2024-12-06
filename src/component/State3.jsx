import React, { useState } from 'react'

const State3 = () => {
    const[total, setTotal] = useState(0);
    const[color,setColor] = useState("red")

    
  return (

    <div>
      <h3>My favorite color is <span style={{color:color,textAlign:'center'}}>red</span></h3>
        <button 
        onClick={() => {
            setColor("red");
        }}
        >Red</button>
        <button 
        onClick={() => {
           setColor("blue"); 
        }}
        >Blue</button>

        <button
        onClick={() =>{
          setColor("Green");
        }}
        >Green</button>

<button
        onClick={() =>{
          setColor("Pink");
        }}
        >Pink</button>
        
    </div>
  )
}
export default State3

