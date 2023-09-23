import React from "react";
import { Form, Formik } from "formik";
import { SIGN_IN_USER_SCHEMA} from "../../../utils/validationSchema";
import InputWrapper from "../InputWrapper";
import styles from "./SignUpForm.module.scss";

const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  age: 18,
  isMale: true,
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  const onSubmit = (values, formikBag) => {
    console.log(values);
    // console.log(formikBag);
    formikBag.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={SIGN_IN_USER_SCHEMA}
    >
      {(formikProps) => {
        return (
          <Form className="form">
            <InputWrapper name="firstName" labelName="firstName" />
            <InputWrapper name="lastName" labelName="lastName" />
            <InputWrapper type="email" name="email" labelName="email" />
            <InputWrapper type="number" name="age" labelName="age" />
            <InputWrapper
              type="password"
              name="password"
              labelName="password"
            />
            <InputWrapper
              type="password"
              name="confirmPassword"
              labelName="confirmPassword"
            />
            <InputWrapper
              type="checkbox"
              name="isMale"
              labelName="isMale"
              className={styles.checkbox}
            />

            <input type="submit" value="send"></input>
          </Form>
        );
      }}
    </Formik>
  );
};

export default SignUpForm;
