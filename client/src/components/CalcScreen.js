import React, { Component } from "react";
import styles from "../styles/calcScreen.css";

class CalcScreen extends Component {
  constructor(props) {
    super(props);
    this.text1 = React.createRef();
    this.text2 = React.createRef();
  }
  componentDidUpdate() {
    this.text1.current.scrollLeft = this.text1.current.scrollWidth;
    this.text2.current.scrollLeft = this.text2.current.scrollWidth;
  }
  render() {
    const { value, result, valid } = this.props;
    return (
      <>
        <textarea
          ref={this.text1}
          wrap="off"
          readOnly
          className={valid ? styles.text_field : styles.unvalid_text_field}
          value={value}
          onChange={() => {}}
        />
        <textarea
          ref={this.text2}
          wrap="off"
          readOnly
          className={styles.text_field}
          value={result}
          onChange={() => {}}
        />
      </>
    );
  }
}

export default CalcScreen;
