import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Standart from "../containers/standartContainer";
import Convert from "../containers/convertContainer";
import History from "../containers/historyContainer";
import NavBar from "../containers/navBarContainer";
import Sidebar from "../containers/sideBarContainer";
import SignIn from "../containers/signInContainer";
import SignUp from "../containers/signUpContainer";
import styles from "../styles/app.css";
class App extends Component {
	componentDidMount() {
		this.props.myData();
	}

	render() {
		return (
			<div className={styles.main_wrapper}>
				<div className={styles.app_wrapper}>
					<Router className={styles.main_wrapper}>
						{this.props.application.isSideBar && <Sidebar />}
						<NavBar />
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

export default App;
