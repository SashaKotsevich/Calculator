import React, { Component } from "react";
import HistoryItem from "./HistoryItem";
import DescriptionSideBar from "./DescriptionSideBar";
import DateFilterPanel from "../containers/dateFilterPanelContainer";
import styles from "../styles/history.css";
import { Scrollbars } from "react-custom-scrollbars";

class History extends Component {
	componentDidMount() {
		this.props.getHistory();
	}
	state = {
		sideBar: false,
		sideBarData: null,
	};
	convertDateToString = date => {
		return date
			.toLocaleDateString()
			.split(".")
			.reverse()
			.join("-");
	};

	handleEnableSidebar = data => {
		this.setState({ sideBar: true, sideBarData: data });
	};
	handleDisableSidebar = () => {
		this.setState({ sideBar: false });
	};
	render() {
		const { startDate, endDate, dateFilter } = this.props.history;
		return (
			<>
				{!this.props.user && (
					<label>To view the history you need to SignIn</label>
				)}
				{this.props.user && (
					<>
						<DateFilterPanel />
						<Scrollbars className={styles.history_wrapper}>
							{this.props.user &&
								this.props.history.data
									.filter(item => {
										let date = new Date(item.date);
										if (dateFilter) return startDate <= date && date <= endDate;
										else return true;
									})
									.map(item => (
										<HistoryItem
											data={item}
											key={item._id}
											action={this.handleEnableSidebar}
										/>
									))}
						</Scrollbars>
					</>
				)}

				{this.state.sideBar && (
					<DescriptionSideBar
						data={this.state.sideBarData}
						action={this.handleDisableSidebar}
					/>
				)}
			</>
		);
	}
}

export default History;
