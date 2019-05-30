import React from "react";
import { dateValidate as validate, parseDateString } from "../services/utils";
import styles from "../styles/dateFilterPanel.css";

function DateFilterPanel(props) {
  const dateValidate = (date, type) => {
    const { startDate, endDate } = props.history;
    return validate(startDate, endDate, date, type);
  };
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

  const { startDate, endDate } = props.history;

  return (
    <section className={styles.wrapper}>
      <input
        type="date"
        value={parseDateString(startDate)}
        onChange={handleStartDateChange}
        className={styles.date}
      />
      <input
        type="date"
        value={parseDateString(endDate)}
        className={styles.date}
        onChange={handleEndDateChange}
      />
    </section>
  );
}

export default DateFilterPanel;
