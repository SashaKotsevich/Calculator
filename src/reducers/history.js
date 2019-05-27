const initialState = {
	data: [],
	dateFilter: false,
	startDate: new Date(),
	endDate: new Date(),
};
export default function(state = initialState, action) {
	switch (action.type) {
		case "SWITCH_DATEFILTER":
			return { ...state, dateFilter: !state.dateFilter };
		case "CHANGE_START_DATE":
			return { ...state, startDate: action.payload };
		case "CHANGE_END_DATE":
			return { ...state, endDate: action.payload };
		case "HISTORY_REQUEST":
			return state;

		case "HISTORY_SUCCESS":
			return { ...state, data: action.payload };

		case "HISTORY_FAILURE":
			return state;

		default:
			return state;
	}
}
