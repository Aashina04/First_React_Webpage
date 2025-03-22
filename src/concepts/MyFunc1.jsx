import React from "react";
import "./styles/styles.css";

//imported img1 as fig1
import fig1 from "./images/img1.jpg";
import fig2 from "./images/img2.jpg";

function MyFunc1(props){
    console.log(props);
    console.log(typeof props);



    const mystyles={
        color:"white",
        fontSize:"30px",
        backgroundColor:"blue",
    };

   return(
    <div>
        <h1> My First React App</h1>
        <div>
            <h2 style={{color:"blue",backgroundColor:"yellow"}}>I am styled using inline style prop</h2>

            <h3 style={mystyles}>I am styled using style object</h3>

            <h4 id="ext-style">I am styles using external css</h4>
        </div>



{/* if images are present in the public folder we do not need to import it in the file we can directly access the images folder and then image */}
        <div className="images">

            <h3> Calling images in public folder</h3>
            <img src="./images/img1.jpg" alt="birds" id="img1"/>
            <img src="./images/img2.jpg" alt="landscape" id="img2"/>


            <h3>Calling images as a component</h3>
            {/* here we need to import the image when the images are located in the concepts folder */}
            <img src={fig1} alt="birds" />
            <img src={fig2} alt="landscape" />
        </div>





        {/* displaying props -----App.jsx is calling MyFunc1 and MyClass therefore they become the children of App.jsx
        called function --child
        calling function ---parent 
        
        parent can send data to child as parameter with the help of props in key value pairs and value will always be a string*/}
        <div>
            <h3>Displaying props</h3>
            <p>Name:{props.name}</p>
            <p>Age:{props.age}</p>
        </div>
    </div>
   ) 
}

export default MyFunc1;