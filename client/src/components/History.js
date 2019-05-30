import React, { Component } from "react";
import { Scrollbars } from "react-custom-scrollbars";
import { connect } from "react-redux";
import {
  changeStartDate,
  changeEndDate,
  getHistory,
} from "../actions/historyActions";
import HistoryItem from "./HistoryItem";
import DescriptionSideBar from "./DescriptionSideBar";
import DateFilterPanel from "./DateFilterPanel";
import styles from "../styles/history.css";

class History extends Component {
  componentDidMount() {
    this.props.getHistory();
  }
  state = {
    sideBar: false,
    sideBarData: null,
    filter: false,
  };

  handleEnableSidebar = data => {
    this.setState({ sideBar: true, sideBarData: data });
  };
  handleDisableSidebar = () => {
    this.setState({ sideBar: false });
  };
  handleFilterSwitch = e => {
    this.setState(prevState => {
      return {
        filter: !prevState.filter,
      };
    });
  };
  render() {
    const { startDate, endDate } = this.props.history;
    const { changeStartDate, changeEndDate } = this.props;
    return (
      <>
        {!this.props.user && (
          <label className={styles.message}>
            To view the history you need to SignIn
          </label>
        )}
        {this.props.user && (
          <>
            <section className={styles.navPanel}>
              <label>Date</label>
              <img
                src="/images/unfold_icon.png"
                alt="no icon"
                className={
                  this.state.filter ? styles.icon_rotated : styles.icon
                }
                onClick={this.handleFilterSwitch}
              />
            </section>

            {this.state.filter && (
              <DateFilterPanel
                changeStartDate={changeStartDate}
                changeEndDate={changeEndDate}
                history={this.props.history}
              />
            )}
            <Scrollbars className={styles.history_wrapper}>
              {this.props.user &&
                this.props.history.data
                  .filter(item => {
                    let date = new Date(item.date);
                    if (this.state.filter)
                      return startDate <= date && date <= endDate;
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

const mapStateToProps = state => ({
  history: state.history,
  user: state.user.username,
});

export default connect(
  mapStateToProps,
  { changeStartDate, changeEndDate, getHistory }
)(History);
