import React, { useEffect, useState } from "react";
import styles from "./UsersLoader.module.scss";
import { getUsers } from "../../api";
import Error from "../Error";
import Spinner from "../Spinner";

const UsersLoader = (props) => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(false);
  const [isFetching, setIsFetching] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [currentResults, setCurrentResults] = useState(5);

  const load = () => {
    setIsFetching(true);
    getUsers({ page: currentPage, results: currentResults })
      .then((data) => {
        if (data.error) {
          throw new Error();
        }
        setUsers(data.results);
      })
      .catch((error) => {
        setError(error);
      })
      .finally(() => {
        setIsFetching(false);
      });
  };

  useEffect(() => {
    load(); // eslint-disable-next-line
  }, [currentPage, currentResults]);

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((currentPage) => currentPage - 1);
    }
  };

  const nextPage = () => setCurrentPage((currentPage) => currentPage + 1);

  const handleChangeCurrentResults = (event) => {
    setCurrentResults(event.target.value);
  };

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
