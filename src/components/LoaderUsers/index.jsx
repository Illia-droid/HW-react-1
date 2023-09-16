import React, { Component } from "react";
import Error from "../Error";
import Spinner from "../Spinner";

class LoaderUsers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      isFetching: false,
      error: null,
    };
  }

  componentDidMount() {
    this.setState({ isFetching: true });
    fetch("/data/users.json")
      .then((responce) => responce.json())
      .then((data) => {
        this.setState({ users: data });
      })
      .catch((error) => {
        this.setState({ error });
      })
      .finally(() => {
        this.setState({ isFetching: false });
      });
  }
  render() {
    const { users, isFetching, error } = this.state;
    if (error) {
      return <Error />;
    }
    return (
      <div>
        {isFetching && <Spinner />}
        {isFetching || users.map(({ id, name }) => <p key={id}>{name}</p>)}
      </div>
    );
  }
}

export default LoaderUsers;
