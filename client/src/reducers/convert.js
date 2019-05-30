import {
  CHANGE_VALUE,
  CHANGE_INPUT_NUMBER_SYSTEM,
  CHANGE_OUTPUT_NUMBER_SYSTEM,
  SWITCH_OUTPUT_NUMBER_SYSTEM,
  CONVERT_REQUEST,
  CONVERT_SUCCESS,
  CONVERT_FAILURE,
  SWITCH_VALID_CONVERT,
} from "../constants/ActionTypes";

const initialState = {
  initialSys: 2,
  targetSys: 16,
  value: "",
  result: "",
  description: "",
  valid: true,
};

export default function(state = initialState, action) {
  switch (action.type) {
    case CHANGE_VALUE:
      return {
        ...state,
        value: action.payload,
      };
    case CHANGE_INPUT_NUMBER_SYSTEM:
      return {
        ...state,
        initialSys: action.payload,
      };

    case CHANGE_OUTPUT_NUMBER_SYSTEM:
      return {
        ...state,
        targetSys: action.payload,
      };

    case SWITCH_OUTPUT_NUMBER_SYSTEM:
      return {
        ...state,
        initialSys: state.targetSys,
        targetSys: state.initialSys,
      };

    case CONVERT_REQUEST:
      return state;

    case CONVERT_SUCCESS:
      return {
        ...state,
        result: action.payload.value,
        description: action.payload.description,
      };

    case CONVERT_FAILURE:
      return state;

    case SWITCH_VALID_CONVERT:
      return { ...state, valid: action.payload };

    default:
      return state;
  }
}
