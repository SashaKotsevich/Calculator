import React, { Component } from "react";
import styles from "../styles/toggleButton.css";
class ToggleButton extends Component {
  state = {
    checked: null,
  };
  switch = event => {
    this.props.onClick();
    event.preventDefault();
    event.stopPropagation();
    this.setState(prevState => ({
      checked: !prevState.checked,
    }));
  };
  showStyle = value => {
    switch (value) {
      case null:
        return styles.switch_standart;
      case true:
        return styles.switch_on;
      case false:
        return styles.switch_off;
      default:
        return styles.standart;
    }
  };
  render() {
    return (
      <div className={styles.wrapper} onClick={this.switch}>
        <div className={this.showStyle(this.state.checked)} />
      </div>
    );
  }
}

export default ToggleButton;
