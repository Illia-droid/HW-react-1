import React from "react";
import PropTypes from "prop-types";
import { ErrorMessage, Field } from "formik";
import cx from "classnames";
import styles from "./InputWrapper.module.scss";

const InputWrapper = ({ type, name, labelName,classes, ...optionts }) => {
    const className = cx(styles.label, classes)
  return (
    <label className={className} {...optionts}>
      <span className={styles.label__name}>{labelName}</span>
      <Field type={type} name={name} className={styles.input}></Field>
      <ErrorMessage component="span" name={name} className={styles.error} />
    </label>
  );
};
InputWrapper.defaultProps = {
  type: "text",
  labelName: "text",
};
InputWrapper.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  labelName: PropTypes.string,
};

export default InputWrapper;
