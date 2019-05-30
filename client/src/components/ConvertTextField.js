import React from "react";
import styles from "../styles/convertTextField.css";

function ConvertTextField(props) {
  const handleChange = event => {
    event.preventDefault();
    props.action(event.target.value);
  };
  const { value, valid } = props;

  return (
    <textarea
      className={valid ? styles.text_field : styles.unvalid_text_field}
      value={value}
      onChange={handleChange}
    />
  );
}

export default ConvertTextField;
