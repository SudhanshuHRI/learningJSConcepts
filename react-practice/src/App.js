import "./App.css";
import React,{useState} from "react";

function App() {
const [data,setData] = useState("hello!!");


const getDataFromChild = (data) =>{
  console.log("got data",data)
}




  

  return (
    <div className="App">
      <h1>Hello World</h1>
    </div>
  );
}





export default App;
