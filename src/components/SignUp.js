import React, { Component } from "react";
import styles from "../styles/authForm.css";
import { Redirect } from "react-router";

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
		if (event.target.value === this.state.password) {
			event.target.className = styles.field;
			this.setState({ passwordsMatch: true });
		} else {
			event.target.className = styles.unvalid_field;
			this.setState({ passwordsMatch: false });
		}
	};

	handleSubmit = event => {
		event.preventDefault();
		this.props.signUp(this.state.name, this.state.email, this.state.password);
	};
	render() {
		const { username } = this.props.user;
		return (
			<form className={styles.wrapper} onSubmit={this.handleSubmit}>
				<input
					type="text"
					value={this.state.name}
					onChange={this.handleNameChange}
					required
					placeholder="Name"
					className={styles.field}
				/>

				<input
					type="email"
					value={this.state.email}
					onChange={this.handleEmailChange}
					required
					placeholder="Email"
					className={styles.field}
				/>

				<input
					type="password"
					value={this.state.password}
					onChange={this.handlePasswordChange}
					required
					placeholder="Password"
					className={styles.field}
				/>

				<input
					type="password"
					onChange={this.handleRepeatPasswordChange}
					required
					placeholder="Repeat Password"
					className={styles.field}
				/>
				<input
					type="submit"
					value="submit"
					disabled={!this.state.passwordsMatch}
					className={styles.submit}
				/>
				{username && <Redirect to="/standart" />}
			</form>
		);
	}
}

export default Standart;
