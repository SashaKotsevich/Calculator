import React, { Component } from "react";

import "../styles/navBar.css";
class NavBar extends Component {
	render() {
		return (
			<nav className="nav-wrapper">
				<img
					src="/images/burger_menu_icon.png"
					alt="no icon"
					className="icon"
				/>
			</nav>
		);
	}
}

export default NavBar;
