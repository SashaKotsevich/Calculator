import Keyboard from "../components/Keyboard";
import { connect } from "react-redux";
import { addChar, removeChar } from "../actions/standartActions";

const mapStateToProps = state => ({
	standart: state.standart,
});

export default connect(
	mapStateToProps,
	{ addChar, removeChar }
)(Keyboard);
