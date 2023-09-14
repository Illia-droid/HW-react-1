import React from "react";
import PropTypes from "prop-types";
import styles from "./FlexContainer.module.scss";
const FlexContainer = ({ d, fd, jc, ai, children }) => {
  return (
    <section
      className={styles.section}
      style={{
        display: d,
        flexDirection: fd,
        justifyContent: jc,
        alignItems: ai,
      }}
    >
      {children}
    </section>
  );
};
FlexContainer.propTypes = {
  d: PropTypes.string.isRequired,
  fd: PropTypes.string.isRequired,
  jc: PropTypes.string.isRequired,
  ai: PropTypes.string.isRequired,
  children: PropTypes.node,
};

FlexContainer.defaultProps = {
  d: "flex",
  fd: "row",
  jc: "center",
  ai: "center",
};
export default FlexContainer;
