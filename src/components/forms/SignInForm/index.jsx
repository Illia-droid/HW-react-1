import React, { useState } from "react";
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
  radio: "",
};

function SignInForm() {
  const [formData, setFormData] = useState({ ...initialValue });

  const handleForm = (event) => {
    event.preventDefault();
    setFormData({ ...initialValue });
  };

  const handleInput = ({ target: { name, value } }) => {
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
      [`${name}Valid`]: !value.includes(" "),
    }));
  };

  const handleCheckbox = ({ target: { name, checked } }) => {
    setFormData((prevData) => ({
      ...prevData,
      [name]: checked,
    }));
  };

  const handleRadio = ({ target: { name, value } }) => {
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleClearRadio = () => {
    setFormData((prevData) => ({
      ...prevData,
      radio: "",
    }));
  };

  const {
    email,
    password,
    login,
    emailValid,
    passwordValid,
    loginValid,
    check,
    radio,
  } = formData;

  const classEmail = cx(styles.input, { [styles.invalid]: !emailValid });
  const classPassword = cx(styles.input, { [styles.invalid]: !passwordValid });
  const classLogin = cx(styles.input, { [styles.invalid]: !loginValid });

  return (
    <form className={styles.form} onSubmit={handleForm}>
      <input
        className={classLogin}
        value={login}
        onChange={handleInput}
        type="text"
        name="login"
        placeholder="your login"
      />
      <input
        className={classEmail}
        value={email}
        onChange={handleInput}
        type="email"
        name="email"
        placeholder="your email"
      />
      <input
        className={classPassword}
        value={password}
        onChange={handleInput}
        type="password"
        name="password"
        placeholder="your password"
      />
      <input
        type="checkbox"
        name="check"
        checked={check}
        onChange={handleCheckbox}
      />
      <label>
        Radio 1
        <input
          type="radio"
          name="radio"
          value="Radio1"
          checked={radio === "Radio1"}
          onChange={handleRadio}
        />
      </label>
      <label>
        Radio 2
        <input
          type="radio"
          name="radio"
          value="Radio2"
          checked={radio === "Radio2"}
          onChange={handleRadio}
        />
      </label>
      <button type="button" onClick={handleClearRadio}>
        Clear radio buttons
      </button>
      <button type="submit">send</button>
    </form>
  );
}

export default SignInForm;
