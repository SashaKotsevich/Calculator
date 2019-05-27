import React, { Component } from "react";
import BurgerButton from "./BurgerButton";
import styles from "../styles/navBar.css";
import { Link } from "react-router-dom";

class NavBar extends Component {
	render() {
		return (
			<nav className={styles.nav_wrapper}>
				<BurgerButton
					action={this.props.switchSideBar}
					state={this.props.application.isSideBar}
				/>
				<section>
					<Link to={this.props.user ? "/profile" : "/signin"}>
						<img
							src="/images/signin_icon.png"
							alt="no icon"
							className={styles.icon}
						/>
					</Link>
					{!this.props.user && (
						<Link to="/signup">
							<img
								src="/images/signup_icon.png"
								alt="no icon"
								className={styles.icon}
							/>
						</Link>
					)}
					{this.props.user && (
						<Link to="/standart">
							<img
								src="/images/logout_icon.png"
								alt="no icon"
								className={styles.icon}
								onClick={this.props.logout}
							/>
						</Link>
					)}
				</section>
			</nav>
		);
	}
}

export default NavBar;
