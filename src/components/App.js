import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Standart from "./Standart";
import Convert from "./Convert";
import NavBar from "./NavBar";
import styles from "../styles/app.css";
class App extends Component {
	render() {
		return (
			<div className={styles.main_wrapper}>
				<div className={styles.app_wrapper}>
					<NavBar />
					<Router className={styles.main_wrapper}>
						<Route path="/(standart)?" exact component={Standart} />
						<Route path="/convert" exact component={Convert} />
					</Router>
				</div>
			</div>
		);
	}
}

export default App;
