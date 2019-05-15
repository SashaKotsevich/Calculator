import React, { Component } from "react";
import styles from "../styles/convertTextField.css";
class ConvertTextField extends Component {
	render() {
		return <input type="text" className={styles.text_field} />;
	}
}

export default ConvertTextField;
