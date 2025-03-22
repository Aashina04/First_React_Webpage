import React,{Component} from "react";

class StateUpdate extends Component{

    constructor(props)
    {
        super(props);

        this.state={
            name:"Himanshu",
            age:25,
            city:"Mumbai"
        };
    }


    handleClick=()=>{
        this.setState({
            //new object value
            name:"Dev",
            age:30,
            city:"Indore",
        });
    };


    //everything needs to be called in render function to work 
    render(){
        return(
            <div>
                <hr/>
                <h1>State Changes</h1>
                <h3>Hi my Name is {this.state.name} and I am {this.state.age} years old and I come from {this.state.city}</h3>
                <button onClick={this.handleClick}>Change State</button>
            </div>
        );
    }
}

export default StateUpdate;