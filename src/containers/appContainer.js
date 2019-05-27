import App from "../components/App";
import { connect } from "react-redux";
import { switchSideBar, switchTab } from "../actions/applicationActions";
import { myData } from "../actions/userActions";

const mapStateToProps = state => ({
  application: state.application,
  user: state.user.username,
});

export default connect(
  mapStateToProps,
  { switchTab, switchSideBar, myData }
)(App);
