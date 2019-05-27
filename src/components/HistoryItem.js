import React, { Component } from "react";
import styles from "../styles/histotyItem.css";

class HistoryItem extends Component {
	typeToSrc = type => {
		switch (type) {
			case "Calculate":
				return "/images/expression_icon.png";
			case "Convert":
				return "/images/convert_icon.png";
			default:
				return null;
		}
	};

	handleItemClick = event => {
		event.preventDefault();
		this.props.action(this.props.data);
	};
	render() {
		return (
			<section className={styles.item_wrapper} onClick={this.handleItemClick}>
				<img
					className={styles.type}
					src={this.typeToSrc(this.props.data.type)}
					alt="err"
				/>
				<section className={styles.parameters}>
					<label className={styles.date}>Date: {this.props.data.date}</label>
					<label>{this.props.data.expression}</label>
					<label className={styles.result}>= {this.props.data.result}</label>
				</section>
			</section>
		);
	}
}

export default HistoryItem;
