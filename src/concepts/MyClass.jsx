//class components 
import React from "react";

class MyClass extends React.Component{
    //to capture props we need a constructor in class components 
    //constructor is a func responsible to create objects
    constructor(props){
        super(props);    //invole superclass constructor if component
        this.state={
            //object
            name:"Kartik",
            age:"25",
            job:"DJ",
        };

    }


    //func to change the data overtime as required
    changeState=()=>{
        setTimeout(()=>
        {
            this.setState({
                name:"gaurav",
                age:"25",
                job:"dj",
            });
        },3000);
    };

    //render func returns one div at a time
    render(){
        return (
        <div>
            <hr/>
            <h1>My Class Component</h1>
            <div>
                <h3>Displaying props</h3>
                <p>My Name is {this.props.name}</p>
                <p>My age is {this.props.age}</p>
            </div>
            <hr/>

            {/* state is the object whose data changes overtime ------
            states are always present in class components only--can have in functional components also but in class it is easier*/}
            <div>
                <h3>Displaying the state</h3>
                <p>My Name is {this.state.name}</p>
                <p>My age is {this.state.age}</p>
                <p>My job is {this.state.job}</p>
            </div>
            {this.changeState()}
        </div>
        );
    }
}

export default MyClass;
