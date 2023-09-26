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
  };

  const start = () => {
    setIsTimerStoped(false);
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
        <button onClick={start} disabled={!isTimerStoped}>
          start
        </button>
        <button onClick={reset}>reset</button>
        <button onClick={stop}>stop</button>
      </div>
    </article>
  );
};

export default StopWatchTimeout;
// class StopWatchTimeout extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       time: new Date(0, 0, 0, 0, 0, 0),
//       isTimerStoped: false,
//     };
//     this.idTimeout = null;
//   }
//   tick = () => {
//     this.setState((state) => {
//       const { time } = state;
//       const newTime = new Date(time);
//       newTime.setSeconds(newTime.getSeconds() + 1);
//       return { time: newTime, isTimerStoped: false };
//     });
//   };

//   start = () => {
//     if (this.idTimeout === null) {
//       this.idTimeout = setTimeout(this.tick, 1000);
//     }
//   };
//   reset = () => {
//     this.stop();
//     this.setState({
//       time: new Date(0, 0, 0, 0, 0, 0),
//     });
//   };
//   stop = () => {
//     clearTimeout(this.idTimeout);
//     this.idTimeout = null;
//     this.setState({
//       isTimerStoped : true
//     })
//   };

//   componentDidUpdate() {
//     if (this.state.isTimerStoped === false) {
//       this.idTimeout = null;
//       this.start();
//     }
//   }

//   render() {
//     const { time } = this.state;
//     return (
//       <article className={styles.container}>
//         <h2>{time.toLocaleTimeString("en-GB")}</h2>
//         <div>
//           <button onClick={this.start}>start</button>
//           <button onClick={this.reset}>reset</button>
//           <button onClick={this.stop}>stop</button>
//         </div>
//       </article>
//     );
//   }
// }

// export default StopWatchTimeout;
