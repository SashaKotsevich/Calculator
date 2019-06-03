import {
  ADD_CHAR,
  REMOVE_CHAR,
  REMOVE_ALL,
  SWITCH_SIGN,
  CALCULATE_REQUEST,
  CALCULATE_SUCCESS,
  CALCULATE_FAILURE,
  SWITCH_VALID_STANDART,
} from "../constants/ActionTypes";

const initialState = {
  type: "Calculate",
  expression: "",
  result: "",
  description: [],
  valid: true,
};

export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_CHAR:
      return { ...state, expression: state.expression + action.payload };

    case REMOVE_CHAR:
      return { ...state, expression: state.expression.slice(0, -1) };

    case REMOVE_ALL:
      return { ...state, expression: "", result: "" };

    case SWITCH_SIGN:
      return { ...state, expression: action.payload };

    case CALCULATE_REQUEST:
      return { ...state, result: "" };

    case CALCULATE_SUCCESS:
      return {
        ...state,
        result: action.payload.value,
        description: action.payload.description,
      };
    case CALCULATE_FAILURE:
      return { ...state, valid: false, result: "Failure" };

    case SWITCH_VALID_STANDART:
      return { ...state, valid: action.payload };

    default:
      return state;
  }
}
