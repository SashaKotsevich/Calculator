import React, { Component } from "react";
import styles from "../styles/sidebar.css";
import { Link } from "react-router-dom";
import BurgerButton from "./BurgerButton";
class Sidebar extends Component {
	render() {
		return (
			<aside className={styles.sidebar}>
				<ul className={styles.link_container}>
					<BurgerButton
						action={this.props.switchSideBar}
						state={this.props.application.isSideBar}
					/>
					<Link
						to="/standart"
						className={styles.link}
						onClick={this.props.switchSideBar}
					>
						Standart
					</Link>
					<Link
						to="/convert"
						className={styles.link}
						onClick={this.props.switchSideBar}
					>
						Convert
					</Link>
					<Link
						to="/history"
						className={styles.link}
						onClick={this.props.switchSideBar}
					>
						History
					</Link>
				</ul>
			</aside>
		);
	}
}

export default Sidebar;
