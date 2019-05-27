import React, { Component } from "react";
import styles from "../styles/sidebar.css";
import { Link } from "react-router-dom";
import BurgerButton from "./BurgerButton";
class Sidebar extends Component {
	render() {
		return (
			<aside className={styles.sidebar}>
				<BurgerButton
					action={this.props.switchSideBar}
					state={this.props.application.isSideBar}
				/>
				<ul className={styles.link_container}>
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
					{!this.props.user && (
						<Link
							to="/signup"
							className={styles.link}
							onClick={this.props.switchSideBar}
						>
							SignUp
						</Link>
					)}
					{!this.props.user && (
						<Link
							to="/signin"
							className={styles.link}
							onClick={this.props.switchSideBar}
						>
							SignIn
						</Link>
					)}
					{this.props.user && (
						<Link
							to="/standart"
							className={styles.link}
							onClick={this.props.logout}
						>
							LogOut
						</Link>
					)}
				</ul>
			</aside>
		);
	}
}

export default Sidebar;
