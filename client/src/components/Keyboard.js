import React, { Component } from "react";
import { connect } from "react-redux";
import {
  addChar,
  removeChar,
  removeAll,
  swithSign,
  calculate,
} from "../actions/standartActions";
import KeyboardButton from "./KeyboardButton";
import ToggleButton from "./ToggleButton";
import styles from "../styles/keyboard.css";

class Keyboard extends Component {
  state = {
    descPanel: false,
  };
  switchDescPanel = () => {
    this.setState(prevState => ({
      descPanel: !prevState.descPanel,
    }));
  };

  combineActions = () => {
    this.props.calculate();
    this.props.showDescPanel(true);
  };

  render() {
    const { descPanel } = this.state;
    const { addChar, removeChar, swithSign, calculate, removeAll } = this.props;
    return (
      <>
        <section className={styles.check_wrapper}>
          <ToggleButton onClick={this.switchDescPanel} />
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
            action={descPanel ? this.combineActions : calculate}
          />
        </div>
      </>
    );
  }
}
const mapStateToProps = state => ({
  standart: state.standart,
});

export default connect(
  mapStateToProps,
  {
    addChar,
    removeChar,
    removeAll,
    swithSign,
    calculate,
  }
)(Keyboard);
