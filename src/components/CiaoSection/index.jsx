import { useState } from "react";
import CiaoList from "./CiaoList";
import CiaoHeading from "./CiaoHeading";
import { USERS } from "../../constants";
import CiaoSort from "./CiaoSort";

const CiaoSection = (props) => {
  const [users, setUsers] = useState(USERS);
  const [isSortIdUp, setIsSortIdUp] = useState(true);
  const [isSortFirstNameUp, setIsSortFirstNameUp] = useState(true);
  const [isSortLastNameUp, setIsSortLastNameUp] = useState(true);

  const setSortId = (newUsers) => {
    setUsers(newUsers);
    setIsSortIdUp(!isSortIdUp);
  };
  const setSortFirstName = (newUsers) => {
    setUsers(newUsers);
    setIsSortFirstNameUp(!isSortFirstNameUp);
  };
  const setSortLastName = (newUsers) => {
    setUsers(newUsers);
    setIsSortLastNameUp(!isSortLastNameUp);
  };

  return (
    <>
      <CiaoHeading />
      <CiaoSort
        users={users}
        setSortId={setSortId}
        setSortFirstName={setSortFirstName}
        setSortLastName={setSortLastName}
        isSortIdUp={isSortIdUp}
        isSortFirstNameUp={isSortFirstNameUp}
        isSortLastNameUp={isSortLastNameUp}
      />
      <CiaoList users={users} />
    </>
  );
};

export default CiaoSection;
