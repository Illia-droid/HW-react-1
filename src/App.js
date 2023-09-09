import React from "react";
import './App.css'
import StopWatch from "./components/StopWatch";
import Ciao from "./components/CiaoSection/Ciao";
import StopWatchTimeout from "./components/StopWatchTimeout";
// import CiaoSection from "./components/CiaoSection";
// import CardSection from "./components/CardSection";

function App() {
  return (
    <>
      {/* <CardSection /> */}
      {/* <CiaoSection /> */}
      <StopWatch />
      <Ciao name="Brad" lname="Pitt" id='23'/>
      <StopWatchTimeout />
    </>
  );
}

export default App;
