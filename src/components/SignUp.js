import React, { Component } from "react";
import styles from "../styles/signUp.css";
class Standart extends Component {
	state = {
		name: "",
		email: "",
		password: "",
		passwordsMatch: false,
	};
	handleEmailChange = event => {
		event.preventDefault();
		this.setState({ email: event.target.value });
	};
	handleNameChange = event => {
		event.preventDefault();
		this.setState({ name: event.target.value });
	};
	handlePasswordChange = event => {
		event.preventDefault();
		this.setState({ password: event.target.value });
	};

	handleRepeatPasswordChange = event => {
		console.log(1);
		if (event.target.value === this.state.password) {
			event.target.className = styles.fieldNormal;
			this.setState({ passwordsMatch: true });
		} else {
			event.target.className = styles.fieldError;
			this.setState({ passwordsMatch: false });
		}
		console.log(event.target.className);
	};

	handleSubmit = event => {
		event.preventDefault();
		this.props.signUp(this.state.name, this.state.email, this.state.password);
	};
	render() {
		return (
			<form className={styles.wrapper} onSubmit={this.handleSubmit}>
				<label>name</label>
				<input
					type="text"
					value={this.state.name}
					onChange={this.handleNameChange}
					required
				/>
				<label>email</label>
				<input
					type="text"
					value={this.state.email}
					onChange={this.handleEmailChange}
					required
				/>
				<label>password</label>
				<input
					type="text"
					value={this.state.password}
					onChange={this.handlePasswordChange}
					required
				/>
				<label>repeat password</label>
				<input
					type="text"
					onChange={this.handleRepeatPasswordChange}
					className={styles.fieldNormal}
					required
				/>
				<input type="submit" disabled={!this.state.passwordsMatch} />
			</form>
		);
	}
}

export default Standart;
