import React, { Component } from "react";
import ConvertInput from "./ConvertInput";
import ConvertOutput from "./ConvertOutput";
import Select from "./Select";
import styles from "../styles/convert.css";
class Convert extends Component {
	render() {
		return (
			<>
				<div className={styles.changeCod}>
					<Select />
					<Select />
				</div>
				<ConvertInput />
				<ConvertOutput />
			</>
		);
	}
}

export default Convert;
