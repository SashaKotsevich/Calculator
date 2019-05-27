export function switchSideBar() {
	return dispatch => {
		dispatch({
			type: "SWITCH_SIDEBAR",
		});
	};
}
export function switchTab(value) {
	return dispatch => {
		dispatch({
			type: "CHANGE_TAB",
			payload: value,
		});
	};
}
