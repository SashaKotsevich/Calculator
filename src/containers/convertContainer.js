import Convert from "../components/Convert";
import { connect } from "react-redux";
import {
	changeIputNymSys,
	changeOutputNymSys,
	switchImputAndOutputNymSys,
} from "../actions/convertActions";

const mapStateToProps = state => ({
	convert: state.convert,
});

export default connect(
	mapStateToProps,
	{ changeIputNymSys, changeOutputNymSys, switchImputAndOutputNymSys }
)(Convert);
