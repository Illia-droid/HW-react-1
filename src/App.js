import { Component } from "react";
import "./App.css";
import CiaoList from "./components/CiaoList";
import CiaoHeading from "./components/CiaoHeading";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [
        { id: 1, firstName: "Brad", lastName: "Pitt" },
        { id: 7, firstName: "Alex", lastName: "Varker" },
        { id: 3, firstName: "Tom", lastName: "Rot" },
      ],
      isSortIdUp: true,
      isSortFirstNameUp: true,
      isSortLastNameUp: true,
    };
  }
  sortUsersById = () => {
    const { users, isSortIdUp } = this.state;
    const newUsers = JSON.parse(JSON.stringify(users));
    newUsers.sort((a, b) => {
      if (isSortIdUp) {
        return a.id - b.id;
      }
      return b.id - a.id;
    });

    this.setState({ users: newUsers, isSortIdUp: !isSortIdUp });
  };

  sortUsersByFirstName = () => {
    const { users, isSortFirstNameUp } = this.state;
    const newUsers = JSON.parse(JSON.stringify(users));
    newUsers.sort((a, b) => {
      if (a.firstName > b.firstName) {
        return isSortFirstNameUp ? 1 : -1;
      }
      if (a.firstName < b.firstName) {
        return isSortFirstNameUp ? -1 : 1;
      }
      return 0;
    });

    this.setState({ users: newUsers, isSortFirstNameUp: !isSortFirstNameUp });
  };

  sortUsersByLastName = () => {
    const { users, isSortLastNameUp } = this.state;
    const newUsers = JSON.parse(JSON.stringify(users));
    newUsers.sort((a, b) => {
      if (a.lastName > b.lastName) {
        return isSortLastNameUp ? 1 : -1;
      }
      if (a.lastName < b.lastName) {
        return isSortLastNameUp ? -1 : 1;
      }
      return 0;
    });

    this.setState({ users: newUsers, isSortLastNameUp: !isSortLastNameUp });
  };

  render() {
    const { users, isSortIdUp, isSortFirstNameUp, isSortLastNameUp } =
      this.state;
    return (
      <>
        <CiaoHeading />
        <div>
          <button onClick={this.sortUsersById}>
            sort by id {isSortIdUp ? "up" : "down"}
          </button>
          <button onClick={this.sortUsersByFirstName}>
            sort by firstName {isSortFirstNameUp ? "up" : "down"}
          </button>
          <button onClick={this.sortUsersByLastName}>
            sort by lastName {isSortLastNameUp ? "up" : "down"}
          </button>
        </div>
        <CiaoList users={users} />
      </>
    );
  }
}

export default App;
