import React, { Component } from "react";
import KeyboardButton from "./KeyboardButton";
import styles from "../styles/keyboard.css";

class Keyboard extends Component {
	render() {
		console.log(this.props);
		return (
			<div className={styles.keyboard_wrapper}>
				<KeyboardButton char={"%"} action={this.props.addChar} />
				<KeyboardButton char={"√"} action={this.props.addChar} />
				<KeyboardButton char={"^"} action={this.props.addChar} />
				<KeyboardButton char={"1/x"} action={this.props.addChar} />

				<KeyboardButton char={"ce"} />
				<KeyboardButton char={"c"} />
				<KeyboardButton char={"<-"} action={this.props.removeChar} />
				<KeyboardButton char={"÷"} action={this.props.addChar} />

				<KeyboardButton char={7} action={this.props.addChar} />
				<KeyboardButton char={8} action={this.props.addChar} />
				<KeyboardButton char={9} action={this.props.addChar} />
				<KeyboardButton char={"*"} action={this.props.addChar} />

				<KeyboardButton char={4} action={this.props.addChar} />
				<KeyboardButton char={5} action={this.props.addChar} />
				<KeyboardButton char={6} action={this.props.addChar} />
				<KeyboardButton char={"-"} action={this.props.addChar} />

				<KeyboardButton char={1} action={this.props.addChar} />
				<KeyboardButton char={2} action={this.props.addChar} />
				<KeyboardButton char={3} action={this.props.addChar} />
				<KeyboardButton char={"+"} action={this.props.addChar} />

				<KeyboardButton char={"±"} action={this.props.addChar} />
				<KeyboardButton char={0} action={this.props.addChar} />
				<KeyboardButton char={"."} action={this.props.addChar} />
				<KeyboardButton char={"="} />
			</div>
		);
	}
}

export default Keyboard;
