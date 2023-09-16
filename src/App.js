import React from "react";
import "./App.css";
// import Node from "./components/Node";
// import { COLORS } from "./constants";
// import { FLEXSETTINGS } from "./constants";
// import FlexContainer from "./components/FlexContainer";
import UsersLoader from "./components/UsersLoader";

function App() {
  return (
    <>
      {/* <FlexContainer
        d={FLEXSETTINGS.DISPLAY}
        fd={FLEXSETTINGS.FLEXDIRECTION}
        jc={FLEXSETTINGS.JUSTIFYCONTENT}
        ai={FLEXSETTINGS.ALIGNITEMS}
      >
        <Node title="Pitfall" bgColor={COLORS.PITFALL}>
          <p>lorem10</p>
        </Node>
        <Node>
          <p>lorem10</p>
          <p>lorem10</p>
          <p>lorem10</p>
          <p>lorem10</p>
        </Node>
        <Node title="Deprecate" bgColor={COLORS.DEPRECATE}>
          <p>lorem10</p>
        </Node>
      </FlexContainer> */}
      <UsersLoader />
    </>
  );
}

export default App;
