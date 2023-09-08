import React, { Component } from "react";
import Ciao from "../Ciao";

class CiaoList extends Component {
  createList = ({ firstName, lastName, id }) => (
    <Ciao key={id} name={firstName} lname={lastName} id={id}></Ciao>
  );
  render() {
    const { users } = this.props;
    return <div>{users.map(this.createList)}</div>;
  }
}

export default CiaoList;
