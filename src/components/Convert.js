import React, { Component } from "react";
import ConvertTextField from "./ConvertTextField";

import Select from "./Select";
import styles from "../styles/convert.css";

class Convert extends Component {
	handleSwitchClick = event => {
		event.preventDefault();
		this.props.switchImputAndOutputNymSys();
	};
	handleSubmit = event => {
		event.preventDefault();
		event.stopPropagation();
		event.persist();
		this.props.convert();
	};
	render() {
		return (
			<div className={styles.convert_panel}>
				<nav className={styles.options_panel}>
					<Select
						value={this.props.convertState.initialSys}
						changeNymSys={this.props.changeIputNymSys}
					/>
					<img
						src="/images/reverse_icon.png"
						alt="err"
						className={styles.reverse_icon}
						onClick={this.handleSwitchClick}
					/>
					<Select
						value={this.props.convertState.targetSys}
						changeNymSys={this.props.changeOutputNymSys}
					/>
				</nav>
				<ConvertTextField
					value={this.props.convertState.value}
					valid={this.props.convertState.valid}
					action={this.props.changeValue}
				/>
				<ConvertTextField
					value={this.props.convertState.result}
					action={() => {}}
					valid={true}
				/>
				<button onClick={this.handleSubmit}>convert</button>
			</div>
		);
	}
}

export default Convert;
