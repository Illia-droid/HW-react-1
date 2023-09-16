import React, { Component } from "react";
import Spinner from "../Spinner";
import Error from "../Error";

class LoaderEvents extends Component {
  constructor(props) {
    super(props);
    this.state = {
      events: [],
      isFetching: false,
      error: null,
    };
  }
  componentDidMount() {
    this.setState({ isFetching: true });
    fetch("/data/events.json")
      .then((responce) => responce.json())
      .then((data) => {
        this.setState({ events: data });
      })
      .catch((error) => {
        this.setState({ error });
      })
      .finally(() => {
        this.setState({ isFetching: false });
      });
  }
  render() {
    const { events, isFetching, error } = this.state;
    if (error) {
      return <Error />;
    }
    return (
      <div>
        {isFetching && <Spinner />}
        {isFetching ||
          events.map(({ id, title, date }) => (
            <article key={id}>
              <h3>{title}</h3>
              <h4>{date}</h4>
            </article>
          ))}
      </div>
    );
  }
}

export default LoaderEvents;
