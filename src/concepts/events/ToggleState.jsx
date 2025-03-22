import React, { Component } from 'react'

export class ToggleState extends Component {
    constructor(props) {
      super(props)
    
        this.state={
            name1:"Himanshu",
            name2:"Anil",
            toggle:true,
        };
      }

    
      toggleState=() =>{
        this.setState({
            toggle:!this.state.toggle,
        });
      }



        // render() {
        //     if(this.state.toggle){
        //         return(
        //             <div>
        //                 <h3>Hi my name is {this.state.name1}</h3>
        //                 <button onClick={this.toggleState}>Change Name</button>
        //             </div>
        //         )
        //     }
        //     else{
        //         return(
        //             <div>
        //                 <h3>Hi my name is {this.state.name2}</h3>
        //                 <button onClick={this.toggleState}>Change Name</button>
        //             </div>
        //         )
        //     }
        // }



        //optimized code---->
        render(){
            return(
                <div>
                    <h3>Hello my name is {this.state.toggle?this.state.name1:this.state.name2}</h3>
                    <button onClick={this.toggleState}>Change Name</button>
                </div>
            )
        }
}


export default ToggleState;



//rce,rconst
//rfce for function component