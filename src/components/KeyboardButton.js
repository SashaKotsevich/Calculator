import React from "react";
import styles from "../styles/keyboardButton.css";

class KeyboardButton extends React.Component {
	handleClick = event => {
		event.preventDefault();
		this.props.action(this.props.char);
	};
	render() {
		return (
			<button
				className={
					typeof this.props.char === "number"
						? styles.wrapper_number
						: styles.wrapper
				}
				onClick={this.handleClick}
			>
				<label className={styles.char}>{this.props.char}</label>
			</button>
		);
	}
}
export default KeyboardButton;
