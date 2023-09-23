import React, { useState } from "react";

const LearnHooks = (props) => {
  const [state, setState] = useState({ x: 0, y: 0, count: 0 });
  const handleMove = (event) => {
    console.log(event.nativeEvent.offsetX, event.nativeEvent.offsetY);
    setState({
      ...state,
      x: event.nativeEvent.offsetX,
      y: event.nativeEvent.offsetY,
    });
  };
  const handleClick = () => {
    setState((state) => ({
      ...state,
      count: state.count + 1,
    }));
  };

  return (
    <div onMouseMove={handleMove} onClick={handleClick}>
      <h2>
        state: x={state.x}, y={state.y} count={state.count}
      </h2>
    </div>
  );
};

export default LearnHooks;
