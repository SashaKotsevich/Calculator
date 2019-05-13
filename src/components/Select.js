import React, { Component } from "react";
import styles from "../styles/select.css";
class Select extends Component {
	render() {
		return (
			<div>
				<p>
					<select size="3" multiple className={styles.dropdown}>
						<option value="2">Binary</option>
						<option selected value="10">
							Decimal
						</option>
						<option value="16">Hexadecimal</option>
					</select>
				</p>
			</div>
		);
	}
}

export default Select;
