import React, { Component } from "react";
import ConvertTextField from "./ConvertTextField";

import Select from "./Select";
import styles from "../styles/convert.css";

class Convert extends Component {
	handleSwitchClick = event => {
		event.preventDefault();
		this.props.switchImputAndOutputNymSys();
	};
	render() {
		return (
			<div className={styles.convert_panel}>
				<nav className={styles.options_panel}>
					<Select
						value={this.props.convert.inputNumSys}
						changeNymSys={this.props.changeIputNymSys}
					/>
					<img
						src="/images/reverse_icon.png"
						alt="err"
						className={styles.reverse_icon}
						onClick={this.handleSwitchClick}
					/>
					<Select
						value={this.props.convert.outputNumSys}
						changeNymSys={this.props.changeOutputNymSys}
					/>
				</nav>
				<ConvertTextField />
				<ConvertTextField />
			</div>
		);
	}
}

export default Convert;
