import React from "react";
import Error from "../Error";
import Spinner from "../Spinner";
import {useLoaderData} from "../../hooks";
import { getUserJSON } from "../../api";

const ViewUsers = (props) => {
  const {data, isFetching, error } = useLoaderData(getUserJSON);
  if (error) {
    return <Error />;
  }
  return (
    <div>
      {isFetching && <Spinner />}
      {isFetching || data.map(({ id, name }) => <p key={id}>{name}</p>)}
    </div>
  );
};

export default ViewUsers;
