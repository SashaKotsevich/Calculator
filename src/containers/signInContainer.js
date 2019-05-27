import SignIn from "../components/SignIn";
import { connect } from "react-redux";
import { signIn } from "../actions/userActions";

export default connect(
	null,
	{ signIn }
)(SignIn);
