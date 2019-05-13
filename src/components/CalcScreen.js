import React, { Component } from "react";
import styles from "../styles/textField.css";

class TextField extends Component {
	state = { value: "142" };
	onChangeValue = event => {
		event.preventDefault();
		this.setState({ value: event.target.value });
	};
	render() {
		return (
			<input
				type="textarea"
				className={styles.text_field}
				value={this.state.value}
				onChange={this.onChangeValue}
			/>
		);
	}
}

export default TextField;
