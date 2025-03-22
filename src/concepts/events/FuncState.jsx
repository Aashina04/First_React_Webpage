import React, { useState } from 'react'


function FuncState() {
    console.log(useState);   //return array of two elements---function to update the state and initial state of variable
    const [count,setCount]=useState(0);    //count is initial state of var and setCount is the function to update the val  ; 0 is the initial state
  return (
    <div>
        <hr/>
      <h1>State in functional components</h1>
      <p>I have clicked {count} times</p>
      <button onClick={()=>{setCount(count+1);}}>Increment</button>
      <button onClick={()=>{setCount(count-1);}}>Decrement</button>
      <button onClick={()=>{setCount(0);}}>Reset</button>
    </div>
  )
}


//in latest versions we can use states with functional components
export default FuncState;



