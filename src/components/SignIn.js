import React, { Component } from "react";
import styles from "../styles/signIn.css";
class Standart extends Component {
	state = {
		email: "",
		password: "",
	};
	handleEmailChange = event => {
		event.preventDefault();
		this.setState({ email: event.target.value });
	};
	handlePasswordChange = event => {
		event.preventDefault();
		this.setState({ password: event.target.value });
	};
	handleSubmit = event => {
		event.preventDefault();
		this.props.signIn(this.state.email, this.state.password);
	};
	render() {
		return (
			<form className={styles.wrapper} onSubmit={this.handleSubmit}>
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
				<input type="submit" />
			</form>
		);
	}
}

export default Standart;
