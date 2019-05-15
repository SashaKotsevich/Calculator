export function changeIputNymSys(value) {
	return dispatch => {
		dispatch({
			type: "CHANGE_INPUT_NUMBER_SYSTEM",
			payload: value,
			changeOutputNymSys,
		});
	};
}
export function changeOutputNymSys(value) {
	return dispatch => {
		dispatch({
			type: "CHANGE_OUTPUT_NUMBER_SYSTEM",
			payload: value,
		});
	};
}
export function switchImputAndOutputNymSys() {
	return dispatch => {
		dispatch({
			type: "SWITCH_OUTPUT_NUMBER_SYSTEM",
		});
	};
}
