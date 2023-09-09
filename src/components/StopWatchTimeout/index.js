import React, { Component } from "react";
import styles from './StopWatchTimeout.module.css'
class StopWatchTimeout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: new Date(0, 0, 0, 0, 0, 0),
      isTimerStoped: false,
    };
    this.idTimeout = null;
  }
  tick = () => {
    this.setState((state) => {
      const { time } = state;
      const newTime = new Date(time);
      newTime.setSeconds(newTime.getSeconds() + 1);
      return { time: newTime, isTimerStoped: false };
    });
  };

  start = () => {
    if (this.idTimeout === null) {
      this.idTimeout = setTimeout(this.tick, 1000);
    }
  };
  reset = () => {
    this.stop();
    this.setState({
      time: new Date(0, 0, 0, 0, 0, 0),
    });
  };
  stop = () => {
    clearTimeout(this.idTimeout);
    this.idTimeout = null;
    this.setState({
      isTimerStoped : true
    })
  };

  componentDidUpdate() {
    if (this.state.isTimerStoped === false) {
      this.idTimeout = null;
      this.start();
    }
  }

  render() {
    console.log(this.state.time.getSeconds());
    const { time } = this.state;
    return (
      <article className={styles.container}>
        <h2>{time.toLocaleTimeString("en-GB")}</h2>
        <div>
          <button onClick={this.start}>start</button>
          <button onClick={this.reset}>reset</button>
          <button onClick={this.stop}>stop</button>
        </div>
      </article>
    );
  }
}

export default StopWatchTimeout;
