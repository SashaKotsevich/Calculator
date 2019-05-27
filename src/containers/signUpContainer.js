import SignUp from "../components/SignUp";
import { connect } from "react-redux";
import { signUp } from "../actions/userActions";

const mapStateToProps = state => ({
	user: state.user,
});
export default connect(
	mapStateToProps,
	{ signUp }
)(SignUp);
