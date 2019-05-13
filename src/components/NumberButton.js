import React from "react";
import "../styles/numberButton.css";

function NumberButton(props) {
	return (
		<div className="number-button-wrapper">
			<label className="number">{props.val}</label>
		</div>
	);
}

export default NumberButton;
