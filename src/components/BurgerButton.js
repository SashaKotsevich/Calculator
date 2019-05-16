import React, { Component } from "react";
import styles from "../styles/burgerButton.css";
class BurgerButton extends Component {
	handleClick = event => {
		event.preventDefault();
		this.props.action();
	};
	render() {
		return (
			<img
				src="/images/burger_menu_icon.png"
				alt="no icon"
				className={
					this.props.state ? styles.button_clicked : styles.button_standart
				}
				onClick={this.handleClick}
			/>
		);
	}
}

export default BurgerButton;
