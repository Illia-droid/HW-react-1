import React from "react";
import Spinner from "../Spinner";
import Error from "../Error";
import { useLoaderData } from "../../hooks";
import { getEventsJSON } from "../../api";

const ViewEvents = (props) => {
  const { data, isFetching, error } = useLoaderData(getEventsJSON);
  if (error) {
    return <Error />;
  }
  return (
    <div>
      {isFetching && <Spinner />}
      {isFetching ||
        data.map(({ id, title, date }) => (
          <article key={id}>
            <h3>{title}</h3>
            <h4>{date}</h4>
          </article>
        ))}
    </div>
  );
};

export default ViewEvents;
