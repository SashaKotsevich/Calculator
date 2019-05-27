import React, { Component } from "react";
import styles from "../styles/convertTextField.css";
class ConvertTextField extends Component {
	handleChange = event => {
		event.preventDefault();
		this.props.action(event.target.value);
	};
	render() {
		return (
			<textarea
				className={styles.text_field}
				value={this.props.value}
				onChange={this.handleChange}
			/>
		);
	}
}

export default ConvertTextField;
