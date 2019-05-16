const initialState = {
	isSideBar: false,
	currentTab: "standart",
};
export default function(state = initialState, action) {
	switch (action.type) {
		case "SWITCH_SIDEBAR":
			return { ...state, isSideBar: !state.isSideBar };
		case "CHANGE_TAB":
			return { ...state, currentTab: action.payload };
		default:
			return state;
	}
}
