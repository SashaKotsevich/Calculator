import React, { Component } from "react";
import Keyboard from "../containers/keyboardContainer";
import CalcScreen from "./CalcScreen";
class Standart extends Component {
	render() {
		return (
			<>
				<CalcScreen value={this.props.standart.expression} />
				<Keyboard />
			</>
		);
	}
}

export default Standart;
