import SideBar from "../components/Sidebar";
import { connect } from "react-redux";
import { switchSideBar, switchTab } from "../actions/applicationActions";
import { logout } from "../actions/userActions";

const mapStateToProps = state => ({
  application: state.application,
  user: state.user.username,
});

export default connect(
  mapStateToProps,
  { switchSideBar, switchTab, logout }
)(SideBar);
