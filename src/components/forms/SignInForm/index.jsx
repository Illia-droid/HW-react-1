import React, { Component } from "react";
import cx from "classnames";
import styles from "./SignInForm.module.css";

const initialValue = {
  email: "",
  password: "",
  login: "",
  emailValid: true,
  passwordValid: true,
  loginValid: true,
  check: false,
  radio:""
};

class SignInForm extends Component {
  constructor(props) {
    super(props);
    this.state = { ...initialValue };
  }

  handleForm = (event) => {
    event.preventDefault();
    this.setState({ ...initialValue });
  };

  handleInput = ({ target: { name, value } }) => {
    this.setState({
      [name]: value,
      [`${name}Valid`]: !value.includes(" "),
    });
  };

  handleCheckbox = ({ target: { name, checked } }) => {
    this.setState({
      [name]: checked,
    });
  };

  handleRadio = ({ target: { name, value } }) => {
    this.setState({
      [name]: value,
    });
  };

  handleClearRadio = () => {
    this.setState({ radio: "" });
  };

  render() {
    const {
      email,
      password,
      login,
      emailValid,
      passwordValid,
      loginValid,
      check,
      radio
    } = this.state;
    const classEmail = cx(styles.input, { [styles.invalid]: !emailValid });
    const classPassword = cx(styles.input, {
      [styles.invalid]: !passwordValid,
    });
    const classLogin = cx(styles.input, { [styles.invalid]: !loginValid });

    return (
      <form className={styles.form} onSubmit={this.handleForm}>
        <input
          className={classLogin}
          value={login}
          onChange={this.handleInput}
          type="text"
          name="login"
          placeholder="your login"
        />
        <input
          className={classEmail}
          value={email}
          onChange={this.handleInput}
          type="email"
          name="email"
          placeholder="your email"
        />
        <input
          className={classPassword}
          value={password}
          onChange={this.handleInput}
          type="password"
          name="password"
          placeholder="your password"
        />
        <input
          type="checkbox"
          name="check"
          checked={check}
          onChange={this.handleCheckbox}
        />
        <label>
          Radio 1
          <input
            type="radio"
            name="radio"
            value="Radio1"
            checked={radio === "Radio1"}
            onChange={this.handleRadio}
          />
        </label>
        <label>
          Radio 2
          <input
            type="radio"
            name="radio"
            value="Radio2"
            checked={radio === "Radio2"}
            onChange={this.handleRadio}
          />
        </label>
        <button type="button" onClick={this.handleClearRadio}>
        Clear radio buttons
      </button>
        <button type="submit">send</button>
      </form>
    );
  }
}

export default SignInForm;
