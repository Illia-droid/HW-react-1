import React, { Component } from "react";
import styles from "./UsersLoader.module.scss";
import { getUsers } from "../../api";
import Error from "../Error";
import Spinner from "../Spinner";

class UsersLoader extends Component {
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
        if(data.error){
          throw new Error()
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
    return (
      <section className={styles.userSection}>
        <h2>Users: </h2>
        <div className={styles.pagination}>
          <button
            onClick={this.prevPage}
            disabled={currentPage === 1}
            className={`${currentPage === 1 ? styles.disabledButton : ""}`}
          >
            &lt; prev
          </button>
          <span className={styles.currentPage}>{currentPage}</span>
          <button onClick={this.nextPage}>next &gt;</button>
          <label htmlFor="currentResults" className={styles.selectLabel}>
            Choose currentResults:
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
  }
}
export default UsersLoader;
