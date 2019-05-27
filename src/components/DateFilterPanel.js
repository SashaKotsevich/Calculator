import React, { Component } from "react";
import styles from "../styles/dateFilterPanel.css";
class DateFilterPanel extends Component {
	handleStartDateChange = event => {
		event.preventDefault();
		let date = event.target.value;
		date = this.dateValidate(date, 1);
		this.props.changeStartDate(date);
	};
	handleEndDateChange = event => {
		event.preventDefault();
		let date = event.target.value;
		date = this.dateValidate(date, 2);
		this.props.changeEndDate(date);
	};
	convertDateToString = date => {
		return date
			.toLocaleDateString()
			.split(".")
			.reverse()
			.join("-");
	};
	dateValidate = (date, type) => {
		const { startDate, endDate } = this.props.history;
		date = new Date(date);
		switch (type) {
			case 1:
				return endDate > date ? date : endDate;
			case 2:
				return startDate < date ? date : startDate;
			default:
		}
	};
	render() {
		const { startDate, endDate, dateFilter } = this.props.history;
		console.log(startDate, endDate);
		return (
			<section
				className={!dateFilter ? styles.wrapper : styles.wrapper_unfolded}
			>
				<section className={styles.navPanel}>
					<label>Date</label>
					<img
						src="/images/unfold_icon.png"
						alt="no icon"
						className={!dateFilter ? styles.icon : styles.icon_rotated}
						onClick={() => {
							this.props.switchDateFilter();
						}}
					/>
				</section>

				<section className={styles.date_part}>
					<input
						type="date"
						value={this.convertDateToString(startDate)}
						onChange={this.handleStartDateChange}
						className={dateFilter ? styles.date : styles.date_off}
					/>
					<input
						type="date"
						value={this.convertDateToString(endDate)}
						className={dateFilter ? styles.date : styles.date_off}
						onChange={this.handleEndDateChange}
					/>
				</section>
			</section>
		);
	}
}

export default DateFilterPanel;
