import React, { Component } from "react";
import { connect } from "react-redux";

import Keyboard from "./Keyboard";
import CalcScreen from "./CalcScreen";
import DescriptionSideBar from "./DescriptionSideBar";

class Standart extends Component {
  state = {
    descPanel: false,
  };
  showDescPanel = value => {
    this.setState({ descPanel: value });
  };

  render() {
    const { expression, result, valid } = this.props.standart;
    const { standart } = this.props;
    const { descPanel } = this.state;
    return (
      <>
        <CalcScreen value={expression} result={result} valid={valid} />
        <Keyboard descPanel={descPanel} showDescPanel={this.showDescPanel} />
        {descPanel && (
          <DescriptionSideBar data={standart} action={this.showDescPanel} />
        )}
      </>
    );
  }
}

const mapStateToProps = state => ({
  standart: state.standart,
  application: state.application,
});

export default connect(
  mapStateToProps,
  null
)(Standart);
