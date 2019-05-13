import React, { Component } from "react";
import Home from "./components/Home";
import "./styles/app.css";
class App extends Component {
	render() {
		return (
			<div className="main-wrapper">
				<Home />
			</div>
		);
	}
}

export default App;
