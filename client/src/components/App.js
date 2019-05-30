import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { connect } from "react-redux";
import { myData, logout } from "../actions/userActions";
import Standart from "./Standart";
import Convert from "./Convert";
import History from "./History";
import NavBar from "./NavBar";
import Sidebar from "./Sidebar";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import styles from "../styles/app.css";

class App extends Component {
  state = {
    sideBar: false,
  };
  componentDidMount() {
    this.props.myData();
  }
  handleSwitchSideBar = () => {
    this.setState(prevState => {
      return { sideBar: !prevState.sideBar };
    });
  };
  render() {
    const { logout, user } = this.props;
    return (
      <div className={styles.main_wrapper}>
        <div className={styles.app_wrapper}>
          <Router className={styles.main_wrapper}>
            {this.state.sideBar && (
              <Sidebar
                switchSideBar={this.handleSwitchSideBar}
                isSideBar={this.state.sideBar}
                logout={logout}
                user={user}
              />
            )}
            <NavBar
              switchSideBar={this.handleSwitchSideBar}
              isSideBar={this.state.sideBar}
              logout={logout}
              user={user}
            />
            <Route path="/(standart)?" exact component={Standart} />
            <Route path="/convert" exact component={Convert} />
            <Route path="/history" exact component={History} />
            <Route path="/signin" exact component={SignIn} />
            <Route path="/signup" exact component={SignUp} />
          </Router>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  application: state.application,
  user: state.user.username,
});

export default connect(
  mapStateToProps,
  { myData, logout }
)(App);
