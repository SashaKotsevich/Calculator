import React, { Component } from "react";
import Keyboard from "../containers/keyboardContainer";
import CalcScreen from "./CalcScreen";
import DescriptionSideBar from "./DescriptionSideBar";

class Standart extends Component {
	render() {
		const { desSideBar } = this.props.standart;
		return (
			<>
				<CalcScreen
					value={this.props.standart.expression}
					result={this.props.standart.result}
				/>
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
