import React from "react";

import styles from "../styles/select.css";

function Select(props) {
  const handleOptionClick = event => {
    event.preventDefault();
    props.changeNymSys(event.target.value);
  };
  const { value } = props;

  return (
    <div>
      <p>
        <select
          className={styles.dropdown}
          value={value}
          onChange={handleOptionClick}
        >
          <option value="2">Binary</option>
          <option value="8">Octal</option>
          <option value="10">Decimal</option>
          <option value="16">Hexadecimal</option>
        </select>
      </p>
    </div>
  );
}

export default Select;
