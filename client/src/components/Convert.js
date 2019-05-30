import React from "react";
import { connect } from "react-redux";
import {
  changeIputNymSys,
  changeOutputNymSys,
  switchImputAndOutputNymSys,
  convert,
  changeValue,
} from "../actions/convertActions";
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

const mapStateToProps = state => ({
  convertState: state.convert,
});

export default connect(
  mapStateToProps,
  {
    changeIputNymSys,
    changeOutputNymSys,
    switchImputAndOutputNymSys,
    convert,
    changeValue,
  }
)(Convert);
