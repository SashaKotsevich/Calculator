import React, { Component } from "react";
import KeyboardButton from "./KeyboardButton";
import styles from "../styles/keyboard.css";

class Keyboard extends Component {
	state = { showDesc: false };
	handleShowDescChange = event => {
		const { checked } = event.target;
		this.setState({ showDesc: checked });
	};
	combineActions = () => {
		this.props.calculate();
		this.props.switchDesSideBar();
	};

	render() {
		const { showDesc } = this.state;
		return (
			<>
				<section className={styles.check_wrapper}>
					<label>show description</label>
					<input
						type="checkbox"
						value={showDesc}
						onChange={this.handleShowDescChange}
					/>
				</section>
				<div className={styles.keyboard_wrapper}>
					<KeyboardButton char={"%"} action={this.props.addChar} />
					<KeyboardButton char={"√"} action={this.props.addChar} />
					<KeyboardButton char={"^"} action={this.props.addChar} />
					<KeyboardButton char={"<-"} action={this.props.removeChar} />

					<KeyboardButton char={"c"} action={this.props.removeAll} />
					<KeyboardButton char={"("} action={this.props.addChar} />
					<KeyboardButton char={")"} action={this.props.addChar} />
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

					<KeyboardButton char={"±"} action={this.props.swithSign} />
					<KeyboardButton char={0} action={this.props.addChar} />
					<KeyboardButton char={"."} action={this.props.addChar} />
					<KeyboardButton
						char={"="}
						action={showDesc ? this.combineActions : this.props.calculate}
					/>
				</div>
			</>
		);
	}
}

export default Keyboard;
