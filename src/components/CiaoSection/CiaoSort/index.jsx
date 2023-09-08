import React, { Component } from "react";
import BtnSortUsersById from "./BtnSortUsersById";
import BtnSortUsersByFirstName from "./BtnSortUsersByFirstName";
import BtnSortUsersByLastName from "./BtnSortUsersByLastName";

class CiaoSort extends Component {
  sortUsersById = () => {
    const { users, isSortIdUp, setSortId } = this.props;
    const newUsers = JSON.parse(JSON.stringify(users));
    newUsers.sort((a, b) => {
      if (isSortIdUp) {
        return a.id - b.id;
      }
      return b.id - a.id;
    });

    setSortId(newUsers);
  };

  sortUsersByFirstName = () => {
    const { users, isSortFirstNameUp, setSortFirstName } = this.props;
    const newUsers = JSON.parse(JSON.stringify(users));
    newUsers.sort((a, b) => {
      if (a.firstName > b.firstName) {
        return isSortFirstNameUp ? 1 : -1;
      }
      if (a.firstName < b.firstName) {
        return isSortFirstNameUp ? -1 : 1;
      }
      return 0;
    });

    setSortFirstName(newUsers);
  };

  sortUsersByLastName = () => {
    const { users, isSortLastNameUp, setSortLastName } = this.props;
    const newUsers = JSON.parse(JSON.stringify(users));
    newUsers.sort((a, b) => {
      if (a.lastName > b.lastName) {
        return isSortLastNameUp ? 1 : -1;
      }
      if (a.lastName < b.lastName) {
        return isSortLastNameUp ? -1 : 1;
      }
      return 0;
    });

    setSortLastName(newUsers);
  };
  render() {
    const { isSortIdUp, isSortFirstNameUp, isSortLastNameUp } = this.props;
    return (
      <div>
        <BtnSortUsersById isSortIdUp={isSortIdUp} sortUsersById={this.sortUsersById}/>
        <BtnSortUsersByFirstName isSortFirstNameUp={isSortFirstNameUp} sortUsersByFirstName={this.sortUsersByFirstName} />
        <BtnSortUsersByLastName isSortLastNameUp={isSortLastNameUp} sortUsersByLastName={this.sortUsersByLastName} />
      </div>
    );
  }
}

export default CiaoSort;
