import DateFilterPanel from "../components/DateFilterPanel";
import { connect } from "react-redux";
import {
	changeStartDate,
	changeEndDate,
	switchDateFilter,
} from "../actions/historyActions";

const mapStateToProps = state => ({
	history: state.history,
});

export default connect(
	mapStateToProps,
	{ changeStartDate, changeEndDate, switchDateFilter }
)(DateFilterPanel);
