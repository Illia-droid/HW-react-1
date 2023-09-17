import React from "react";
import PropTypes from "prop-types";
import { UserContext } from "../../../contexts";
const CardUsers = () => {
  const renderFunc = ({
    user: { id, firstName, lastName, isSelect },
    selectUser,
  }) => {
    const selectHandler = () => {
      selectUser(id);
    };
    const styles = { backgroundColor: isSelect ? "pink" : "gray" };
    return (
      <article onClick={selectHandler} style={styles}>
        <h3>
          {firstName} {lastName}
        </h3>
      </article>
    );
  };
  return <UserContext.Consumer>{renderFunc}</UserContext.Consumer>;
};

export const userSHape = PropTypes.shape({
  id: PropTypes.number.isRequired,
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  isSelect: PropTypes.bool,
});
CardUsers.propTypes = {
  user: userSHape.isRequired,
  selectUser: PropTypes.func.isRequired,
};

CardUsers.defaultProps = {
  user: {
    id: 0,
    firstName: "noname",
    lastName: "noname",
  },
  selectUser: () => {},
};
export default CardUsers;
