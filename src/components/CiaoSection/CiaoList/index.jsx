import React from "react";
import Ciao from "../Ciao";

const CiaoList = (props) => {
  const createList = ({ firstName, lastName, id }) => (
    <Ciao key={id} name={firstName} lname={lastName} id={id}></Ciao>
  );

  const { users } = props;
  return <div>{users.map(createList)}</div>;
};

export default CiaoList;
