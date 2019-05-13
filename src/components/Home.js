import React, { Component } from "react";
import "../styles/home.css";
import Keyboard from "./Keyboard";
import TextField from "./TextField";
import NavBar from "./NavBar";
class Home extends Component {
	render() {
		return (
			<div className="home-main-wrapper">
				<NavBar />
				<TextField />
				<Keyboard />
			</div>
		);
	}
}

export default Home;
