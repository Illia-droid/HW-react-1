import React from "react";
import LoaderData from "../../../components/LoaderData";
import { getUserJSON } from "../../../api";
import ViewUsers from "../../../components/ViewUsers";

const UsersBlock = () => {
  return (
    <>
      <h2>Users: </h2>
      <LoaderData
        loadData={getUserJSON}
        render={(state) => <ViewUsers state={state} />}
      />
    </>
  );
};

export default UsersBlock;
