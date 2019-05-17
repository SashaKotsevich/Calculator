import React, { Component } from "react";
import styles from "../styles/histotyItem.css";
const types = ["/images/expression_icon.png", "/images/convert_icon.png"];
const fakeData = {
	date: new Date().toLocaleString(),
	type: "",
	expression: "10+(5-2*4)/3",
	result: 9,
};
class HistoryItem extends Component {
	arrayRandElement = () => {
		let rand = Math.floor(Math.random() * types.length);
		return types[rand];
	};
	render() {
		return (
			<section className={styles.item_wrapper}>
				<img className={styles.type} src={this.arrayRandElement()} alt="err" />
				<section className={styles.description}>
					<label className={styles.date}>Date: {fakeData.date}</label>
					<label>{fakeData.expression}</label>
					<label className={styles.result}>= {fakeData.result}</label>
				</section>
			</section>
		);
	}
}

export default HistoryItem;
