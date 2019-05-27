import React, { Component } from "react";
import { Redirect } from "react-router";

import styles from "../styles/authForm.css";

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
    const { username } = this.props.user;
    return (
      <form className={styles.wrapper} onSubmit={this.handleSubmit}>
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
        <input type="submit" value="submit" className={styles.submit} />
        {username && <Redirect to="/standart" />}
      </form>
    );
  }
}

export default Standart;
