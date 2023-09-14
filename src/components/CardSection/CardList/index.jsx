import React from "react";
import PropTypes from "prop-types";
import CardUsers, { userSHape } from "../CardUser";

const CardList = (props) => {
  const { users, setSelectUsers } = props;

  const selectorUser = (id) => {
    const newUsers = users.map((user) => ({
      ...user,
      isSelect: user.id === id ? !user.isSelect : user.isSelect,
    }));
    setSelectUsers(newUsers);
  };

  const createCard = (user) => (
    <CardUsers key={user.id} user={user} selectUser={selectorUser} />
  );
  return <section>{users.map(createCard)}</section>;
};
CardList.propTypes = {
  users: PropTypes.arrayOf(userSHape.isRequired).isRequired,
  setSelectUsers: PropTypes.func,
};
CardList.defaultProps = {
  users: [{ id: 0, firstName: "noname", lastName: "noname" }],
  setSelectUsers: () => {},
};
export default CardList;
