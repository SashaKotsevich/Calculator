import React from "react";

import styles from "../styles/historyItem.css";

function HistoryItem(props) {
  const typeToSrc = type => {
    switch (type) {
      case "Calculate":
        return "/images/expression_icon.png";
      case "Convert":
        return "/images/convert_icon.png";
      default:
        return null;
    }
  };

  const handleItemClick = event => {
    event.preventDefault();
    props.action(props.data);
  };

  const { date, result, expression, type } = props.data;
  return (
    <section className={styles.item_wrapper} onClick={handleItemClick}>
      <img className={styles.type} src={typeToSrc(type)} alt="err" />
      <section className={styles.parameters}>
        <label className={styles.date}>Date: {date}</label>
        <label>{expression}</label>
        <label className={styles.result}>= {result}</label>
      </section>
    </section>
  );
}

export default HistoryItem;
