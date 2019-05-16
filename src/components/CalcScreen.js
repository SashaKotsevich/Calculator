import React, { Component } from "react";
import styles from "../styles/textField.css";

class CalcScreen extends Component {
	render() {
		return (
			<input
				type="textarea"
				className={styles.text_field}
				value={this.props.value}
				onChange={() => {}}
			/>
		);
	}
}

export default CalcScreen;
