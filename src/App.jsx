import Header from "./components/Header";
import Footer from "./components/Footer";
import MyFunc1 from "./concepts/MyFunc1";
import MyClass from "./concepts/MyClass";
import FuncClick from "./concepts/events/FuncClick";
import ClassClick from "./concepts/events/ClassClick";
import StateUpdate from "./concepts/events/StateUpdate";
import ToggleState from "./concepts/events/ToggleState";
import FuncState from "./concepts/events/FuncState";
import FuncInput from "./concepts/events/FuncInput";

//import file from folder
function App() {
  //in reactJS functions we can write html code and we can return a html element--called jsx

  //we return the file as html element
  return( <>
  
    {/* <Header />
    <main style={{height:"80vh"}}> //this way we give inline styling
      <h1> Home Page</h1>
    </main>
    <Footer /> */}

    <MyFunc1  name="John" age="25"/>
    <MyClass name="Amit" age="24"/>
    <hr/>
    <br/>

    <FuncClick/>
    <ClassClick/>
    <StateUpdate/>
    <ToggleState/>
    <FuncState/>
    <FuncInput/>
  </>
  );
}

export default App;
