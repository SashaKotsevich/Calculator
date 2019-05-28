import React from "react";

import styles from "../styles/keyboardButton.css";

function KeyboardButton(props) {
  const handleClick = event => {
    event.preventDefault();
    props.action(props.char);
  };
  const { char } = props;

  return (
    <button
      className={
        typeof char === "number" ? styles.wrapper_number : styles.wrapper
      }
      onClick={handleClick}
    >
      <label className={styles.char}>{char}</label>
    </button>
  );
}

export default KeyboardButton;
