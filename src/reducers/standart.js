const initialState = {
	expression: "",
};
export default function(state = initialState, action) {
	switch (action.type) {
		case "ADD_CHAR":
			return { ...state, expression: state.expression + action.payload };
		case "REMOVE_CHAR":
			return { ...state, expression: state.expression.slice(0, -1) };

		default:
			return state;
	}
}
