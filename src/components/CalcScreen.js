import React, { Component } from "react";
import styles from "../styles/calcScreen.css";

class CalcScreen extends Component {
	constructor(props) {
		super(props);
		this.myRef = React.createRef();
	}
	componentDidUpdate() {
		this.myRef.current.scrollLeft = this.myRef.current.scrollWidth;
	}
	render() {
		return (
			<>
				<textarea
					ref={this.myRef}
					wrap="off"
					className={styles.text_field}
					value={this.props.value}
					onChange={() => {}}
				/>
				<textarea
					wrap="off"
					className={styles.text_field}
					value={this.props.result}
					onChange={() => {}}
				/>
			</>
		);
	}
}

export default CalcScreen;
