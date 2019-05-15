export function addChar(char) {
	return dispatch => {
		dispatch({
			type: "ADD_CHAR",
			payload: char,
		});
	};
}
export function removeChar() {
	return dispatch => {
		dispatch({
			type: "REMOVE_CHAR",
		});
	};
}
