import React from "react";
import styles from "../styles/burgerButton.css";

function BurgerButton(props) {
  const handleClick = event => {
    event.preventDefault();
    props.action();
  };
  const { state } = props.state;

  return (
    <img
      src="/images/burger_menu_icon.png"
      alt="no icon"
      className={state ? styles.button_clicked : styles.button}
      onClick={handleClick}
    />
  );
}

export default BurgerButton;
