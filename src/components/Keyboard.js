import React, { Component } from "react";
import KeyboardButton from "./KeyboardButton";
import styles from "../styles/keyboard.css";

class Keyboard extends Component {
	render() {
		return (
			<div className={styles.keyboard_wrapper}>
				<KeyboardButton char={"%"} />
				<KeyboardButton char={"√"} />
				<KeyboardButton char={"^"} number={false} />
				<KeyboardButton char={"1/x"} />

				<KeyboardButton char={"ce"} />
				<KeyboardButton char={"c"} />
				<KeyboardButton char={"<-"} />
				<KeyboardButton char={"÷"} />

				<KeyboardButton char={7} />
				<KeyboardButton char={8} />
				<KeyboardButton char={9} />
				<KeyboardButton char={"x"} />

				<KeyboardButton char={4} />
				<KeyboardButton char={5} />
				<KeyboardButton char={6} />
				<KeyboardButton char={"-"} />

				<KeyboardButton char={1} />
				<KeyboardButton char={2} />
				<KeyboardButton char={3} />
				<KeyboardButton char={"+"} />

				<KeyboardButton char={"±"} />
				<KeyboardButton char={0} />
				<KeyboardButton char={"."} />
				<KeyboardButton char={"="} />
			</div>
		);
	}
}

export default Keyboard;
