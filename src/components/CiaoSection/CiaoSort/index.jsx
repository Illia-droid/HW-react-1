import React from "react";
import BtnSortUsersById from "./BtnSortUsersById";
import BtnSortUsersByFirstName from "./BtnSortUsersByFirstName";
import BtnSortUsersByLastName from "./BtnSortUsersByLastName";

const CiaoSort = (props) => {
  const sortUsersById = () => {
    const { users, isSortIdUp, setSortId } = props;
    const newUsers = JSON.parse(JSON.stringify(users));
    newUsers.sort((a, b) => {
      if (isSortIdUp) {
        return a.id - b.id;
      }
      return b.id - a.id;
    });

    setSortId(newUsers);
  };

  const sortUsersByFirstName = () => {
    const { users, isSortFirstNameUp, setSortFirstName } = props;
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

  const sortUsersByLastName = () => {
    const { users, isSortLastNameUp, setSortLastName } = props;
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

  const { isSortIdUp, isSortFirstNameUp, isSortLastNameUp } = props;
  return (
    <div>
      <BtnSortUsersById isSortIdUp={isSortIdUp} sortUsersById={sortUsersById} />
      <BtnSortUsersByFirstName
        isSortFirstNameUp={isSortFirstNameUp}
        sortUsersByFirstName={sortUsersByFirstName}
      />
      <BtnSortUsersByLastName
        isSortLastNameUp={isSortLastNameUp}
        sortUsersByLastName={sortUsersByLastName}
      />
    </div>
  );
};

export default CiaoSort;
