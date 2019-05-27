import Keyboard from "../components/Keyboard";
import { connect } from "react-redux";
import {
  addChar,
  removeChar,
  removeAll,
  swithSign,
  calculate,
} from "../actions/standartActions";
import { switchDesSideBar } from "../actions/standartActions";

const mapStateToProps = state => ({
  standart: state.standart,
});

export default connect(
  mapStateToProps,
  {
    addChar,
    removeChar,
    removeAll,
    swithSign,
    calculate,
    switchDesSideBar,
  }
)(Keyboard);
