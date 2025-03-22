import React from "react";

class ClassClick extends React.Component{
    handleClick=()=>{
        let h3Ele=document.getElementById("i3");
        h3Ele.innerHTML="Hello My name is Rohit and I am 15 years old and I am a student";
    }


    render(){
        return(
            <div>
                <h3 id="i3">Hello, My name is Manoj and I am 25 years old and I am a professor</h3>
                <button onClick={this.handleClick}>Change output</button>
            </div>
        )
    }
}
export default ClassClick;