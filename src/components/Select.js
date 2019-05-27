import React, { Component } from "react";
import styles from "../styles/select.css";
class Select extends Component {
	handleOptionClick = event => {
		event.preventDefault();
		this.props.changeNymSys(event.target.value);
	};
	render() {
		return (
			<div>
				<p>
					<select
						className={styles.dropdown}
						value={this.props.value}
						onChange={this.handleOptionClick}
					>
						<option value="2">Binary</option>
						<option value="8">Octal</option>
						<option value="10">Decimal</option>
						<option value="16">Hexadecimal</option>
					</select>
				</p>
			</div>
		);
	}
}

export default Select;
