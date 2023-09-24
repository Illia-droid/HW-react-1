import React, { useEffect, useState } from "react";
import styles from "./StopWatchTimeout.module.css";

const StopWatchTimeout = (props) => {
  const [time, setTime] = useState(new Date(0, 0, 0, 0, 0, 0));
  const [isTimerStoped, setIsTimerStoped] = useState(true);

  let idTimeout = null;
  
  const tick = () => {
    setTime((time) => {
      const newTime = new Date(time);
      newTime.setSeconds(newTime.getSeconds() + 1);
      return newTime;
    });
    setIsTimerStoped(false);
  };

  const start = () => {
    if (idTimeout === null) {
      idTimeout = setTimeout(tick, 1000);
    }
  };
  const reset = () => {
    stop();
    setTime(new Date(0, 0, 0, 0, 0, 0));
  };
  const stop = () => {
    clearTimeout(idTimeout);
    idTimeout = null;
    setIsTimerStoped(true);
  };
  useEffect(() => {
    if (isTimerStoped === false) {
      start();
    }
    return () => {}; // eslint-disable-next-line
  }, [time]);

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

export default StopWatchTimeout;

