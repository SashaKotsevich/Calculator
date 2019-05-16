export function switchSideBar() {
	return dispatch => {
		dispatch({
			type: "SWITCH_SIDEBAR",
		});
	};
}
export function changeOutputNymSys(value) {
	return dispatch => {
		dispatch({
			type: "CHANGE_TAB",
			payload: value,
		});
	};
}
