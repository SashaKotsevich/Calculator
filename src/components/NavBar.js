import React, { Component } from "react";
import BurgerButton from "./BurgerButton";
import styles from "../styles/navBar.css";
class NavBar extends Component {
	render() {
		return (
			<nav className={styles.nav_wrapper}>
				<BurgerButton
					action={this.props.switchSideBar}
					state={this.props.application.isSideBar}
				/>
			</nav>
		);
	}
}

export default NavBar;
