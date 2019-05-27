import React, { Component } from "react";
import styles from "../styles/convertTextField.css";
class ConvertTextField extends Component {
	handleChange = event => {
		event.preventDefault();
		this.props.action(event.target.value);
	};
	render() {
		const { value, valid } = this.props;
		return (
			<textarea
				className={valid ? styles.text_field : styles.unvalid_text_field}
				value={value}
				onChange={this.handleChange}
			/>
		);
	}
}

export default ConvertTextField;
