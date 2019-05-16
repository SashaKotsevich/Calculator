import NavBar from "../components/NavBar";
import { connect } from "react-redux";
import {
	switchSideBar,
	changeOutputNymSys,
} from "../actions/applicationActions";

const mapStateToProps = state => ({
	application: state.application,
});

export default connect(
	mapStateToProps,
	{ switchSideBar, changeOutputNymSys }
)(NavBar);
