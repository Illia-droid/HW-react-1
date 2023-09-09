import { Component } from "react";
import styles from './Ciao.module.css'
class Ciao extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isHi: true,
    };
  }

  handleBnt = () => {
    const { isHi } = this.state;
    this.setState({ isHi: !isHi });
  };

  render() {
    const { name, lname, id } = this.props;
    const { isHi } = this.state;
    return (
      <h2 className={styles.container}>
        {isHi ? "hi" : "bye"}, {name} {lname} id={id}
        <button onClick={this.handleBnt}>switch</button>
      </h2>
    );
  }
}

export default Ciao;
