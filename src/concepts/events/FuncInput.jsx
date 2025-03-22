import React,{useState} from 'react';


//handle keyboard inputs in functional components
function FuncInput() {
    const [name,setName]=useState("");
  return (
    <div>
        <hr/>
        <h1> Handle keyboard inputs</h1>
      <input
       type='text' 
       placeholder='Enter your name'
       onChange={(e)=>{setName(e.target.value);    
        // e is the event value that occurs
       }}/>

       {/* data displayed as soon it is changed instantaneously---data binding */}
      <h4> I have entered ...{name}</h4>
      <h4> The length of the entered word is:{name.length}</h4>
    </div>
  )
}

export default FuncInput;
