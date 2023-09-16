import React from "react";
import "./App.css";


function App() {
  return (
    <>
  <button onClick={()=>{window.open('https://randomuser.me/')}}>open</button>
  <button onClick={()=>{window.close()}}>close</button>
    </>
  );
}

export default App;
