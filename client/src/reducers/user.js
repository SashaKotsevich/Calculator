import {
  LOGOUT,
  SIGNUP_REQUEST,
  SIGNUP_SUCCESS,
  SIGNUP_FAILURE,
  SIGNIN_REQUEST,
  SIGNIN_SUCCESS,
  SIGNIN_FAILURE,
  FETCH_MY_DATA_REQUEST,
  FETCH_MY_DATA_SUCCESS,
  FETCH_MY_DATA_FAILURE,
} from "../constants/ActionTypes";

const initialState = {
  token: localStorage.getItem("token"),
  username: null,
};
export default function(state = initialState, action) {
  switch (action.type) {
    case LOGOUT: {
      return { ...state, token: "", username: null };
    }
    case SIGNUP_REQUEST:
      return state;

    case SIGNUP_SUCCESS:
      return {
        ...state,
        token: action.payload.token,
        username: action.payload.name,
      };

    case SIGNUP_FAILURE:
      return state;

    case SIGNIN_REQUEST:
      return state;

    case SIGNIN_SUCCESS:
      return {
        ...state,
        token: action.payload.token,
        username: action.payload.name,
      };

    case SIGNIN_FAILURE:
      return state;

    case FETCH_MY_DATA_REQUEST:
      return state;

    case FETCH_MY_DATA_SUCCESS:
      return {
        ...state,
        username: action.payload.name,
      };

    case FETCH_MY_DATA_FAILURE:
      return state;
    default:
      return state;
  }
}
