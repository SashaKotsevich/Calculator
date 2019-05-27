import React from "react";

import styles from "../styles/dateFilterPanel.css";

function DateFilterPanel(props) {
  const handleStartDateChange = event => {
    event.preventDefault();
    let date = event.target.value;
    date = dateValidate(date, 1);
    props.changeStartDate(date);
  };
  const handleEndDateChange = event => {
    event.preventDefault();
    let date = event.target.value;
    date = dateValidate(date, 2);
    props.changeEndDate(date);
  };
  const convertDateToString = date => {
    return date
      .toLocaleDateString()
      .split(".")
      .reverse()
      .join("-");
  };
  const dateValidate = (date, type) => {
    const { startDate, endDate } = props.history;
    date = new Date(date);
    switch (type) {
      case 1:
        return endDate > date ? date : endDate;
      case 2:
        return startDate < date ? date : startDate;
      default:
    }
  };
  const { startDate, endDate, dateFilter } = props.history;

  return (
    <section className={!dateFilter ? styles.wrapper : styles.wrapper_unfolded}>
      <section className={styles.navPanel}>
        <label>Date</label>
        <img
          src="/images/unfold_icon.png"
          alt="no icon"
          className={!dateFilter ? styles.icon : styles.icon_rotated}
          onClick={() => {
            props.switchDateFilter();
          }}
        />
      </section>

      <section className={styles.date_part}>
        <input
          type="date"
          value={convertDateToString(startDate)}
          onChange={handleStartDateChange}
          className={dateFilter ? styles.date : styles.date_off}
        />
        <input
          type="date"
          value={convertDateToString(endDate)}
          className={dateFilter ? styles.date : styles.date_off}
          onChange={handleEndDateChange}
        />
      </section>
    </section>
  );
}

export default DateFilterPanel;
