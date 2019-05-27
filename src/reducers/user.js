const initialState = {
	token: localStorage.getItem("token"),
	username: null,
};
export default function(state = initialState, action) {
	switch (action.type) {
		case "LOGOUT": {
			return { ...state, token: "", username: null };
		}
		case "SIGNUP_REQUEST":
			return state;

		case "SIGNUP_SUCCESS":
			return {
				...state,
				token: action.payload.token,
				username: action.payload.name,
			};

		case "SIGNUP_FAILURE":
			return state;

		case "SIGNIN_REQUEST":
			return state;

		case "SIGNIN_SUCCESS":
			return {
				...state,
				token: action.payload.token,
				username: action.payload.name,
			};

		case "SIGNIN_FAILURE":
			return state;

		case "FETCH_MY_DATA_REQUEST":
			return state;

		case "FETCH_MY_DATA_SUCCESS":
			return {
				...state,
				username: action.payload.name,
			};

		case "FETCH_MY_DATA_FAILURE":
			return state;
		default:
			return state;
	}
}
