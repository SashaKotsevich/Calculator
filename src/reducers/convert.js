const initialState = {
	inputNumSys: 2,
	outputNumSys: 16,
};
export default function(state = initialState, action) {
	switch (action.type) {
		case "CHANGE_INPUT_NUMBER_SYSTEM":
			return {
				...state,
				inputNumSys: action.payload,
			};
		case "CHANGE_OUTPUT_NUMBER_SYSTEM":
			return {
				...state,
				outputNumSys: action.payload,
			};
		case "SWITCH_OUTPUT_NUMBER_SYSTEM":
			return {
				...state,
				inputNumSys: state.outputNumSys,
				outputNumSys: state.inputNumSys,
			};
		default:
			return state;
	}
}
