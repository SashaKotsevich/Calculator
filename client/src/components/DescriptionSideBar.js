import React from "react";
import { Scrollbars } from "react-custom-scrollbars";

import styles from "../styles/descriptionSideBar.css";

function DescriptionSideBar(props) {
  const handleCloseClick = event => {
    event.preventDefault();
    props.action();
  };
  const { type, expression, result, description } = props.data;

  return (
    <div className={styles.wrapper}>
      <img
        src="/images/unfold_icon.png"
        className={styles.icon}
        onClick={handleCloseClick}
        alt="no_icon"
      />
      <section className={styles.parameters}>
        <label className={styles.type}>Type: {type}</label>
        <label className={styles.expression}>
          Expression:
          <textarea
            className={styles.expression_text}
            wrap="off"
            value={expression}
            readOnly
          />
        </label>
        <label className={styles.result}>Result: {result}</label>
      </section>

      <Scrollbars>
        {description.map((item, index) => (
          <label key={index} className={styles.description_item}>
            {item}
          </label>
        ))}
      </Scrollbars>
    </div>
  );
}

export default DescriptionSideBar;
