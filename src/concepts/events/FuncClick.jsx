import React from "react";

function FuncClick(){

    const handleClick=()=>{
        let h1Ele=document.getElementById("i1");
        h1Ele.innerHTML="Hello My name is Rajat and I am 30 years old and I am a professor";
    }


    return(
        <div>
            <h1 id="i1">Hello, My name is Rohan and I am 10 years old and I am a student</h1>
            <button onClick={handleClick}>Change output</button>
        </div>
    );
}
export default FuncClick;