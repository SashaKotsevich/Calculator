import React, { Component } from "react";

import KeyboardButton from "./KeyboardButton";

import styles from "../styles/keyboard.css";

class Keyboard extends Component {
  state = { showDesc: false };
  handleShowDescChange = event => {
    const { checked } = event.target;
    this.setState({ showDesc: checked });
  };
  combineActions = () => {
    this.props.calculate();
    this.props.switchDesSideBar();
  };

  render() {
    const { showDesc } = this.state;
    const { addChar, removeChar, swithSign, calculate, removeAll } = this.props;
    return (
      <>
        <section className={styles.check_wrapper}>
          <label>show description</label>
          <input
            type="checkbox"
            value={showDesc}
            onChange={this.handleShowDescChange}
          />
        </section>
        <div className={styles.keyboard_wrapper}>
          <KeyboardButton char={"%"} action={addChar} />
          <KeyboardButton char={"√"} action={addChar} />
          <KeyboardButton char={"^"} action={addChar} />
          <KeyboardButton char={"<-"} action={removeChar} />

          <KeyboardButton char={"c"} action={removeAll} />
          <KeyboardButton char={"("} action={addChar} />
          <KeyboardButton char={")"} action={addChar} />
          <KeyboardButton char={"÷"} action={addChar} />

          <KeyboardButton char={7} action={addChar} />
          <KeyboardButton char={8} action={addChar} />
          <KeyboardButton char={9} action={addChar} />
          <KeyboardButton char={"*"} action={addChar} />

          <KeyboardButton char={4} action={addChar} />
          <KeyboardButton char={5} action={addChar} />
          <KeyboardButton char={6} action={addChar} />
          <KeyboardButton char={"-"} action={addChar} />

          <KeyboardButton char={1} action={addChar} />
          <KeyboardButton char={2} action={addChar} />
          <KeyboardButton char={3} action={addChar} />
          <KeyboardButton char={"+"} action={addChar} />

          <KeyboardButton char={"±"} action={swithSign} />
          <KeyboardButton char={0} action={addChar} />
          <KeyboardButton char={"."} action={addChar} />
          <KeyboardButton
            char={"="}
            action={showDesc ? this.combineActions : calculate}
          />
        </div>
      </>
    );
  }
}

export default Keyboard;
