import React from "react";
import * as Yup from "yup";
const NAME_SCHEMA = Yup.string("value must be string")
  .trim()
  .required()
  .matches(/^[A-Z][a-z]{1,31}$/, "перша буква повинна бути великою");

const EMAIL_SCHEMA = Yup.string("value must be string")
  .trim()
  .required()
  .email()
  .min(7, "min length is 7 ")
  .max(64, "max length is 64");

export const SIGN_IN_USER_SCHEMA = Yup.object({
  firstName: NAME_SCHEMA,
  lastName: NAME_SCHEMA,
  email: EMAIL_SCHEMA,
  age: Yup.number().integer().min(18),
  isMale: Yup.boolean().required(),
  password: Yup.string("Error type!")
    .trim()
    .required()
    .matches(/.{8,128}/, "check your password"),
  confirmPassword: Yup.string()
    .trim()
    .required()
    .oneOf([Yup.ref("password")]),
});

export const CALLBACK_SCHEMA = Yup.object({
  question: Yup.string()
    .trim()
    .required("Required")
    .min(3, "Min length must 3")
    .max(64, "Max length must 64"),
  email: EMAIL_SCHEMA,
});

const TestYup = () => {
  return <div></div>;
};

export default TestYup;
