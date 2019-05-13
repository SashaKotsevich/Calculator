import React, { Component } from "react";
import Keyboard from "./Keyboard";
import CalcScreen from "./CalcScreen";
class Standart extends Component {
	render() {
		return (
			<>
				<CalcScreen />
				<Keyboard />
			</>
		);
	}
}

export default Standart;
