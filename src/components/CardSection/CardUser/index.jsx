import React from "react";
import PropTypes from "prop-types";
const CardUsers = (props) => {
  const {
    user: { id, firstName, lastName, isSelect },
    selectUser,
  } = props;
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
