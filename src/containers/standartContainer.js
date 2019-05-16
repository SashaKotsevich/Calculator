import Standart from "../components/Standart";
import { connect } from "react-redux";
import { addChar, removeChar } from "../actions/standartActions";
import {
	switchSideBar,
	changeOutputNymSys,
} from "../actions/applicationActions";

const mapStateToProps = state => ({
	standart: state.standart,
	application: state.application,
});

export default connect(
	mapStateToProps,
	{ addChar, removeChar, switchSideBar, changeOutputNymSys }
)(Standart);
