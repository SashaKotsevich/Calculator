import { fetchMyData, loginRequest, signupRequest } from "../services/apiCall";

export function myData() {
	return (dispatch, getState) => {
		const token = getState().user.token;
		dispatch({
			type: "FETCH_MY_DATA_REQUEST",
		});
		return fetchMyData(token)
			.then(result =>
				dispatch({
					type: "FETCH_MY_DATA_SUCCESS",
					payload: result.data,
				})
			)
			.catch(reason =>
				dispatch({
					type: "FETCH_MY_DATA_FAILURE",
					payload: reason,
				})
			);
	};
}

export function signIn(email, password) {
	return dispatch => {
		dispatch({
			type: "SIGNIN_REQUEST",
		});
		return loginRequest(email, password)
			.then(result => {
				console.log(result.data);
				localStorage.setItem("token", result.data.token);
				dispatch({
					type: "SIGNIN_SUCCESS",
					payload: result.data,
				});
			})
			.catch(reason =>
				dispatch({
					type: "SIGNIN_FAILURE",
					payload: reason,
				})
			);
	};
}
export function signUp(name, email, password) {
	return dispatch => {
		dispatch({
			type: "SIGNUP_REQUEST",
		});
		return signupRequest(name, email, password)
			.then(result => {
				localStorage.setItem("token", result.data.token);
				dispatch({
					type: "SIGNUP_SUCCESS",
					payload: result.data,
				});
			})
			.catch(reason =>
				dispatch({
					type: "SIGNUP_FAILURE",
					payload: reason,
				})
			);
	};
}
export function logout(name, email, password) {
	localStorage.removeItem("token");
	return dispatch => {
		dispatch({
			type: "LOGOUT",
		});
	};
}
