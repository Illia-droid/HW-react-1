import React from "react";
import PropTypes from "prop-types";
import { COLORS } from "./constants";
import styles from "./Node.module.scss";
const Note = ({ children, title, bgColor }) => {
  return (
    <article className={styles.note} style={{ borderColor: bgColor || "" }}>
      <h2 style={{ color: bgColor || "" }} className={styles.note__h2}>
        {title || "Note"}
      </h2>
      {children}
    </article>
  );
};

Note.propTypes = {
  title: PropTypes.string.isRequired,
  bgColor: PropTypes.string.isRequired,
  children: PropTypes.node,
};

Note.defaultProps = {
  title: "Note",
  bgColor: COLORS.MAIN,
};

export default Note;
