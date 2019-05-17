import React, { Component } from "react";
import HistoryItem from "./HistoryItem";
import styles from "../styles/history.css";
import { Scrollbars } from "react-custom-scrollbars";
class History extends Component {
	render() {
		return (
			<Scrollbars className={styles.history_wrapper}>
				<HistoryItem />
				<HistoryItem />
				<HistoryItem />
				<HistoryItem />
				<HistoryItem />
				<HistoryItem />
			</Scrollbars>
		);
	}
}

export default History;
