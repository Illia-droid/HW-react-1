import { useState } from "react";
import PropTypes from "prop-types";
import styles from "./Ciao.module.scss";

const Ciao = (props) => {
  /**
   *
   * @param {object} props
   * @param {number} props.id
   * @param {string} props.name
   * @param {string} props.lname
   */

  const [isHi, setIsHi] = useState(true);

  const handleBnt = () => {
    setIsHi(!isHi);
  };

  const { name, lname, id } = props;
  return (
    <h2 className={styles.container}>
      <span>
        {isHi ? "hi" : "bye"}, {name} {lname} id={id}
      </span>
      <button onClick={handleBnt}>switch</button>
    </h2>
  );
};

Ciao.propTypes = {
  name: PropTypes.string.isRequired,
  lname: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};
Ciao.defaultProps = {
  name: "noname",
  lname: "noname",
  id: 0,
};

export default Ciao;
