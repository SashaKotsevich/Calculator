import React, { Component } from "react";
import NumberButton from "./NumberButton";
import "../styles/keyboard.css";

class Keyboard extends Component {
	render() {
		return (
			<div className="keyboard-wrapper">
				<NumberButton val={"%"} />
				<NumberButton val={"√"} />
				<NumberButton val={"^"} />
				<NumberButton val={"1/x"} />

				<NumberButton val={"ce"} />
				<NumberButton val={"c"} />
				<NumberButton val={"<-"} />
				<NumberButton val={"÷"} />

				<NumberButton val={7} />
				<NumberButton val={8} />
				<NumberButton val={9} />
				<NumberButton val={"x"} />

				<NumberButton val={4} />
				<NumberButton val={5} />
				<NumberButton val={6} />
				<NumberButton val={"-"} />

				<NumberButton val={1} />
				<NumberButton val={2} />
				<NumberButton val={3} />
				<NumberButton val={"+"} />

				<NumberButton val={"±"} />
				<NumberButton val={"0"} />
				<NumberButton val={"."} />
				<NumberButton val={"="} />
			</div>
		);
	}
}

export default Keyboard;
