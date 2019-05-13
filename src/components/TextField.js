import React, { Component } from "react";
import "../styles/textField.css";
class TextField extends Component {
	render() {
		return (
			<input type="textarea" mul className="text-field" value={"someText"} />
		);
	}
}

export default TextField;
