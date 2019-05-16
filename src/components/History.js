import React, { Component } from "react";
import HistoryItem from "./HistoryItem";
import styles from "../styles/history.css";
class History extends Component {
	render() {
		return (
			<section className={styles.history_wrapper}>
				<HistoryItem />
				<HistoryItem />
				<HistoryItem />
				<HistoryItem />
			</section>
		);
	}
}

export default History;
