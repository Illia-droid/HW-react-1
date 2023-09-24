import React, { Component, useContext, useEffect, useState } from "react";
import styles from "./UsersLoader.module.scss";
import { getUsers } from "../../api";
import Error from "../Error";
import Spinner from "../Spinner";
import { LANGUAGE } from "../../constants";
import { LanguageContext } from "../../contexts";
// import { withLanguage } from "../HOCs";

const UsersLoader = (props) => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  const [isFetching, setIsFetching] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [currentResults, setCurrentResults] = useState(5);
  const [language] = useContext(LanguageContext);

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((currentPage) => currentPage - 1);
    }
  };
  const nextPage = () => {
    setCurrentPage((currentPage) => currentPage + 1);
  };
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
  const handleChangeCurrentResults = (event) => {
    setCurrentResults(event.target.value);
  };

  useEffect(() => {
    load();
  }, [currentPage, currentResults]);
  return (
    <section className={styles.userSection}>
      <h2>{language === LANGUAGE.UKRAINIAN ? "Користувачі" : "Users"}: </h2>
      <div className={styles.pagination}>
        <button
          onClick={prevPage}
          disabled={currentPage === 1}
          className={`${currentPage === 1 ? styles.disabledButton : ""}`}
        >
          &lt; {language === LANGUAGE.UKRAINIAN ? "попередній" : "previous"}
        </button>
        <span className={styles.currentPage}>{currentPage}</span>
        <button onClick={nextPage}>
          {language === LANGUAGE.UKRAINIAN ? "наступний" : "next"} &gt;
        </button>
        <label htmlFor="currentResults" className={styles.selectLabel}>
          {language === LANGUAGE.UKRAINIAN
            ? "Виберіть поточні результати"
            : "Choose currentResults"}
          :
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
/* class UsersLoader extends Component {

  constructor(props) {
    super(props);
    this.state = {
      users: [],
      error: null,
      isFetching: false,
      currentPage: 1,
      currentResults: 5,
    };
  }
  
  load = () => {
    const { currentPage, currentResults } = this.state;
    this.setState({
      isFetching: true,
    });
    getUsers({ page: currentPage, results: currentResults })
      .then((data) => {
        if (data.error) {
          throw new Error();
        }
        this.setState({
          users: data.results,
        });
      })
      .catch((error) => {
        this.setState({
          error: error,
        });
      })
      .finally(() => {
        this.setState({
          isFetching: false,
        });
      });
  };
  componentDidMount() {
    this.load();
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      this.state.currentPage !== prevState.currentPage ||
      this.state.currentResults !== prevState.currentResults
    ) {
      this.load();
    }
  }
  prevPage = () => {
    if (this.state.currentPage > 1) {
      this.setState((state) => ({ currentPage: state.currentPage - 1 }));
    }
  };

  nextPage = () =>
    this.setState((state) => ({ currentPage: state.currentPage + 1 }));

  handleChangeCurrentResults = (event) => {
    this.setState({ currentResults: event.target.value });
  };
  render() {
    const { users, error, isFetching, currentPage, currentResults } =
      this.state;
    if (error) {
      return <Error />;
    }
    const [language] = this.props;
      return (
        <section className={styles.userSection}>
          <h2>{language === LANGUAGE.UKRAINIAN ? "Користувачі" : "Users"}: </h2>
          <div className={styles.pagination}>
            <button
              onClick={this.prevPage}
              disabled={currentPage === 1}
              className={`${currentPage === 1 ? styles.disabledButton : ""}`}
            >
              &lt; {language === LANGUAGE.UKRAINIAN ? "попередній" : "previous"}
            </button>
            <span className={styles.currentPage}>{currentPage}</span>
            <button onClick={this.nextPage}>{language === LANGUAGE.UKRAINIAN ? "наступний" : "next"} &gt;</button>
            <label htmlFor="currentResults" className={styles.selectLabel}>
            {language === LANGUAGE.UKRAINIAN ? "Виберіть поточні результати" : "Choose currentResults"}:
            </label>
            <select
              value={currentResults}
              onChange={this.handleChangeCurrentResults}
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
  }
export default UsersLoader; */
