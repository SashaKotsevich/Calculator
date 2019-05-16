import SideBar from "../components/Sidebar";
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
)(SideBar);
