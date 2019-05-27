import Convert from "../components/Convert";
import { connect } from "react-redux";
import {
	changeIputNymSys,
	changeOutputNymSys,
	switchImputAndOutputNymSys,
	convert,
	changeValue,
} from "../actions/convertActions";

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
