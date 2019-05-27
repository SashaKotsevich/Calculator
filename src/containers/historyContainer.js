import History from "../components/History";
import { connect } from "react-redux";
import { getHistory } from "../actions/historyActions";

const mapStateToProps = state => ({
  history: state.history,
  user: state.user.username,
});

export default connect(
  mapStateToProps,
  { getHistory }
)(History);
