import React from "react";

import Keyboard from "../containers/keyboardContainer";
import CalcScreen from "./CalcScreen";
import DescriptionSideBar from "./DescriptionSideBar";

function Standart(props) {
	const { desSideBar, expression, result, valid } = props.standart;
	const { standart, switchDesSideBar } = props;

	return (
		<>
			<CalcScreen value={expression} result={result} valid={valid} />
			<Keyboard />
			{desSideBar && (
				<DescriptionSideBar data={standart} action={switchDesSideBar} />
			)}
		</>
	);
}

export default Standart;
