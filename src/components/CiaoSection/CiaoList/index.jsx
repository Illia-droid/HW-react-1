import React from "react";
import Ciao from "../Ciao";
import styles from './CiaoList.module.scss'
const CiaoList = (props) => {
  const createList = ({ firstName, lastName, id }) => (
    <Ciao key={id} name={firstName} lname={lastName} id={id}></Ciao>
  );

  const { users } = props;
  return <section className={styles.container}>{users.map(createList)}</section>;
};

export default CiaoList;
