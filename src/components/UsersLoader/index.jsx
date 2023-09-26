import React from "react";
import styles from "./UsersLoader.module.scss";
import { getUsers } from "../../api";
import Error from "../Error";
import Spinner from "../Spinner";
import { useUsers } from "../../hooks";

const UsersLoader = (props) => {
  const {
    users,
    error,
    isFetching,
    currentPage,
    currentResults,
    prevPage,
    nextPage,
    handleChangeCurrentResults,
  } = useUsers(getUsers);
  if (error) {
    return <Error />;
  }

  return (
    <section className={styles.userSection}>
      <h2>Users: </h2>
      <div className={styles.pagination}>
        <button
          onClick={prevPage}
          disabled={currentPage === 1}
          className={`${currentPage === 1 ? styles.disabledButton : ""}`}
        >
          &lt; previous
        </button>
        <span className={styles.currentPage}>{currentPage}</span>
        <button onClick={nextPage}>next &gt;</button>
        <label htmlFor="currentResults" className={styles.selectLabel}>
          Choose1 currentResults :
        </label>
        <select
          value={currentResults}
          onChange={handleChangeCurrentResults}
          id="currentResults"
          name="currentResults"
          required
          className={styles.selectInput}
        >
          <option value={5}>5</option>
          <option value={10}>10</option>
          <option value={15}>15</option>
        </select>
      </div>
      <ul className={styles.userList}>
        {isFetching && <Spinner />}
        {isFetching ||
          users.map((user) => (
            <li key={user.login.uuid}>{JSON.stringify(user.email)}</li>
          ))}
      </ul>
    </section>
  );
};

export default UsersLoader;
