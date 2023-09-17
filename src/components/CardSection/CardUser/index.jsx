import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import { UserContext, ThemeContext } from "../../../contexts";
import styles from "./CardUser.module.scss";
import { THEMES } from "../../../constants";
const CardUsers = () => {
  const render = ([theme]) => {
    return (
      <UserContext.Consumer>
        {({
          user: { id, firstName, lastName, isSelect, avatar },
          selectUser,
        }) => {
          const selectHandler = () => {
            selectUser(id);
          };
          const stylesBgc = { backgroundColor: isSelect ? "pink" : "gray" };
          const classes = cx(styles.container, {
            [styles.light]: theme === THEMES.LIGHT,
            [styles.dark]: theme === THEMES.DARK,
          });
          return (
            <article onClick={selectHandler} className={classes}>
              <h3 style={stylesBgc}>
                {firstName} {lastName}
              </h3>
              <img src={avatar} alt="avatar" />
            </article>
          );
        }}
      </UserContext.Consumer>
    );
  };

  return <ThemeContext.Consumer>{render}</ThemeContext.Consumer>;
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
