import React from "react";

import ConvertTextField from "./ConvertTextField";
import Select from "./Select";

import styles from "../styles/convert.css";

function Convert(props) {
  const handleSwitchClick = event => {
    event.preventDefault();
    props.switchImputAndOutputNymSys();
  };
  const handleSubmit = event => {
    event.preventDefault();
    event.stopPropagation();
    event.persist();
    props.convert();
  };
  const { initialSys, targetSys, value, valid, result } = props.convertState;
  const { changeIputNymSys, changeOutputNymSys, changeValue } = props;

  return (
    <div className={styles.convert_panel}>
      <nav className={styles.options_panel}>
        <Select value={initialSys} changeNymSys={changeIputNymSys} />
        <img
          src="/images/reverse_icon.png"
          alt="err"
          className={styles.reverse_icon}
          onClick={handleSwitchClick}
        />
        <Select value={targetSys} changeNymSys={changeOutputNymSys} />
      </nav>
      <ConvertTextField value={value} valid={valid} action={changeValue} />
      <ConvertTextField value={result} action={() => {}} valid={true} />
      <button onClick={handleSubmit} className={styles.submit}>
        convert
      </button>
    </div>
  );
}

export default Convert;
