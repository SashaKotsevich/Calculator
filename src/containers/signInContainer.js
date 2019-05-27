import SignIn from "../components/SignIn";
import { connect } from "react-redux";
import { signIn } from "../actions/userActions";

const mapStateToProps = state => ({
	user: state.user,
});

export default connect(
	mapStateToProps,
	{ signIn }
)(SignIn);
