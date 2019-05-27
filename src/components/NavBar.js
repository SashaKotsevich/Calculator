import React from "react";
import { Link } from "react-router-dom";

import BurgerButton from "./BurgerButton";

import styles from "../styles/navBar.css";

function NavBar(props) {
	const { switchSideBar, logout, user } = props;
	const { isSideBar } = props.application;
	return (
		<nav className={styles.nav_wrapper}>
			<BurgerButton action={switchSideBar} state={isSideBar} />
			<section>
				{!user && (
					<Link to="/signin">
						<img
							src="/images/signin_icon.png"
							alt="no icon"
							className={styles.icon}
						/>
					</Link>
				)}
				{!user && (
					<Link to="/signup">
						<img
							src="/images/signup_icon.png"
							alt="no icon"
							className={styles.icon}
						/>
					</Link>
				)}
				{user && (
					<Link to="/standart">
						<img
							src="/images/logout_icon.png"
							alt="no icon"
							className={styles.icon}
							onClick={logout}
						/>
					</Link>
				)}
			</section>
		</nav>
	);
}

export default NavBar;
