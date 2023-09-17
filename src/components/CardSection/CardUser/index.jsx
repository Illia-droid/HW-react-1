import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import styles from "./CardUser.module.scss";
import { THEMES } from "../../../constants";
import {withTheme, withUser} from "../../HOCs";

const CardUsers = (props) => {
  const {
    theme,
    user: { id, firstName, lastName, isSelect, avatar },
    selectUser,
  } = props;

  const classes = cx(styles.container, {
    [styles.light]: theme === THEMES.LIGHT,
    [styles.dark]: theme === THEMES.DARK,
  });
  const selectHandler = () => {
    selectUser(id);
  };
  const stylesBgc = { backgroundColor: isSelect ? "pink" : "gray" };

  return (
    <article onClick={selectHandler} className={classes}>
      <h3 style={stylesBgc}>
        {firstName} {lastName}
      </h3>
      <img src={avatar} alt="avatar" />
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
export default withUser(withTheme(CardUsers));
