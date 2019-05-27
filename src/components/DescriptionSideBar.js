import React, { Component } from "react";
import styles from "../styles/descriptionSideBar.css";
import { Scrollbars } from "react-custom-scrollbars";
class DescriptionSideBar extends Component {
	handleCloseClick = event => {
		event.preventDefault();
		this.props.action();
	};
	render() {
		const { type, expression, result, description } = this.props.data;

		return (
			<div className={styles.wrapper}>
				<img
					src="/images/unfold_icon.png"
					className={styles.icon}
					onClick={this.handleCloseClick}
					alt="no_icon"
				/>
				<section className={styles.parameters}>
					<label className={styles.type}>Type: {type}</label>
					<label className={styles.expression}>
						Expression:
						<textarea
							className={styles.expression_text}
							wrap="off"
							value={expression}
							readonly
						/>
					</label>
					<label className={styles.result}>Result: {result}</label>
				</section>
				{console.log(this.props.data)}
				<Scrollbars>
					{description.map((item, index) => (
						<label key={index} className={styles.description_item}>
							{item}
						</label>
					))}
				</Scrollbars>
			</div>
		);
	}
}

export default DescriptionSideBar;
