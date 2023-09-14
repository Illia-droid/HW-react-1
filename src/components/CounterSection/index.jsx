import React, { Component } from "react";
import Counter from "./Counter";

class CounterSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      step: 1,
    };
  }

  handleChangeStep = ({ target: { value } }) => {
    const NumberValue = Number(value);
    this.setState({
      step: NumberValue >= 1 && NumberValue <= 1000000 ? NumberValue : "",
    });
  };

  handleBlur = ({ target: { value } }) => {
    if (value==="") {
      this.setState({ step: 1 });
    }
  };

  render() {
    const { step} = this.state;
    return (
      <div>
        <Counter step={step}/>
        <input
          type="number"
          value={step}
          onChange={this.handleChangeStep}
          onBlur={this.handleBlur}
        />
      </div>
    );
  }
}

export default CounterSection;
