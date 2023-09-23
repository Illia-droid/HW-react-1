import React, { useEffect, useState } from "react";
import { format, addSeconds } from "date-fns";


const StopWatchHooks = () => {
  const [time, setTime] = useState(new Date(0, 0, 0, 0, 0, 0, 0));
  const [isRunning, setIsRun] = useState(false);
  const resetHandle = () => {
    setTime(new Date(0, 0, 0, 0, 0, 0, 0));
    setIsRun(false);
  };
  const bntHandle = () => {
    setIsRun(!isRunning);
  };
  useEffect(() => {
    if (isRunning) {
      const changeTime = setInterval(() => {
        setTime((prevTime) => addSeconds(prevTime, 1));
      }, 1000);
      return () => {
        clearInterval(changeTime);
      };
    }
  }, [isRunning]);
  return (
    <div>
      <h2>StopWatchHooks</h2>
      <h3>time: {format(time, "HH:mm:ss")}</h3>
      <button onClick={bntHandle}>{isRunning ? "stop" : "start"}</button>
      <button onClick={resetHandle}>reset</button>
    </div>
  );
};


export default StopWatchHooks;
