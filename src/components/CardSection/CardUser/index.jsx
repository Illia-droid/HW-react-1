import React from "react";

const CardUsers = (props) => {
  const {
    user: { id, firstName, isSelect },selectUser
  } = props;
  const selectHandler = () => {
    selectUser(id);
  };
  const styles = { backgroundColor: isSelect ? "pink" : "gray" };
  return (
    <article onClick={selectHandler} style={styles}>
      <h3>{firstName}</h3>
    </article>
  );
};

export default CardUsers;
