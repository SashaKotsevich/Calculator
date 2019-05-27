import React from "react";
import { Link } from "react-router-dom";

import BurgerButton from "./BurgerButton";

import styles from "../styles/sidebar.css";

function Sidebar(props) {
	const { isSideBar } = props.application;
	const { switchSideBar, user, logout } = props;

	return (
		<aside className={styles.sidebar}>
			<BurgerButton action={switchSideBar} state={isSideBar} />
			<ul className={styles.link_container}>
				<Link to="/standart" className={styles.link} onClick={switchSideBar}>
					Standart
				</Link>
				<Link to="/convert" className={styles.link} onClick={switchSideBar}>
					Convert
				</Link>
				<Link to="/history" className={styles.link} onClick={switchSideBar}>
					History
				</Link>
				{!user && (
					<Link to="/signup" className={styles.link} onClick={switchSideBar}>
						SignUp
					</Link>
				)}
				{!user && (
					<Link to="/signin" className={styles.link} onClick={switchSideBar}>
						SignIn
					</Link>
				)}
				{user && (
					<Link to="/standart" className={styles.link} onClick={logout}>
						LogOut
					</Link>
				)}
			</ul>
		</aside>
	);
}

export default Sidebar;
