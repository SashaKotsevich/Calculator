import React, { Component } from "react";
import styles from "../styles/histotyItem.css";
const fakeData = {
	date: new Date().toLocaleString(),
	type: "Calculate",
	expression: "10+(5-2*4)/3",
	result: 9,
};
class HistoryItem extends Component {
	render() {
		return (
			<section className={styles.item_wrapper}>
				<label className={styles.type}>Operation: {fakeData.type}</label>
				<label className={styles.date}>Date: {fakeData.date}</label>
				<label>{fakeData.expression}</label>
				<label className={styles.result}>= {fakeData.result}</label>
			</section>
		);
	}
}

export default HistoryItem;
