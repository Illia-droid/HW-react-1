import { Component } from "react";
import CiaoList from "./CiaoList";
import CiaoHeading from "./CiaoHeading";
import { USERS } from "../../constants";
import CiaoSort from "./CiaoSort";

class CiaoSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: USERS,
      isSortIdUp: true,
      isSortFirstNameUp: true,
      isSortLastNameUp: true,
    };
  }

  setSortId = (newUsers) => {
    this.setState({ users: newUsers, isSortIdUp: !this.state.isSortIdUp });
  };
  setSortFirstName = (newUsers) => {
    this.setState({ users: newUsers, isSortFirstNameUp: !this.state.isSortFirstNameUp });
  };
  setSortLastName = (newUsers) => {
    this.setState({ users: newUsers, isSortLastNameUp: !this.state.isSortLastNameUp });
  };

  render() {
    const { users, isSortIdUp, isSortFirstNameUp, isSortLastNameUp } =
      this.state;
    return (
      <>
        <CiaoHeading />
        <CiaoSort
          users={users}
          setSortId={this.setSortId}
          setSortFirstName={this.setSortFirstName}
          setSortLastName={this.setSortLastName}
          isSortIdUp={isSortIdUp}
          isSortFirstNameUp={isSortFirstNameUp}
          isSortLastNameUp={isSortLastNameUp}
        />
        <CiaoList users={users} />
      </>
    );
  }
}

export default CiaoSection;
