import React, { Component } from "react";

import styles from "../styles/navBar.css";
class NavBar extends Component {
	render() {
		return (
			<nav className={styles.nav_wrapper}>
				<img
					src="/images/burger_menu_icon.png"
					alt="no icon"
					className={styles.icon}
				/>
			</nav>
		);
	}
}

export default NavBar;
