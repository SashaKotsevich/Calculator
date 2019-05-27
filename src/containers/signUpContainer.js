import SignUp from "../components/SignUp";
import { connect } from "react-redux";
import { signUp } from "../actions/userActions";

export default connect(
	null,
	{ signUp }
)(SignUp);
