import React from "react";
import styles from "../styles/keyboardButton.css";

function KeyboardButton(props) {
	return (
		<button
			className={
				typeof props.char === "number" ? styles.wrapper_number : styles.wrapper
			}
		>
			<label className={styles.char}>{props.char}</label>
		</button>
	);
}

export default KeyboardButton;
