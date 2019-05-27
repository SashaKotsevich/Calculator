import React, { Component } from "react";
import Keyboard from "../containers/keyboardContainer";
import CalcScreen from "./CalcScreen";
import DescriptionSideBar from "./DescriptionSideBar";

class Standart extends Component {
	render() {
		const { desSideBar, expression, result, valid } = this.props.standart;
		return (
			<>
				<CalcScreen value={expression} result={result} valid={valid} />
				<Keyboard />
				{desSideBar && (
					<DescriptionSideBar
						data={this.props.standart}
						action={this.props.switchDesSideBar}
					/>
				)}
			</>
		);
	}
}

export default Standart;
