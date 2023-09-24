import React, { useState, useEffect } from "react";
import styles from "./StopWatch.module.css";
const StopWatch = () => {
  const [time, setTime] = useState(new Date(0, 0, 0, 0, 0, 0));
  const [idInterval, setIdInterval] = useState(null);

  const tick = () => {
    setTime((prevTime) => {
      const newTime = new Date(prevTime);
      newTime.setSeconds(newTime.getSeconds() + 1);
      return newTime;
    });
  };

  const start = () => {
    if (idInterval === null) {
      setIdInterval(setInterval(tick, 1000));
    }
  };

  const reset = () => {
    stop();
    setTime(new Date(0, 0, 0, 0, 0, 0));
  };

  const stop = () => {
    clearInterval(idInterval);
    setIdInterval(null);
  };

  useEffect(() => {
    return () => {
      stop();
    };
  }, []);

  return (
    <article className={styles.container}>
      <h2>{time.toLocaleTimeString("en-GB")}</h2>
      <div>
        <button onClick={start}>start</button>
        <button onClick={reset}>reset</button>
        <button onClick={stop}>stop</button>
      </div>
    </article>
  );
};

export default StopWatch;
