import service from "../services/signSwitch";
import { calculateRequest } from "../services/apiCall";
import { Expression } from "../services/validator";
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
export function calculate() {
  return (dispatch, getState) => {
    const { expression } = getState().standart;
    const { token } = getState().user;
    const valid = Expression(expression);
    dispatch({
      type: SWITCH_VALID_STANDART,
      payload: valid,
    });
    if (valid) {
      dispatch({
        type: CALCULATE_REQUEST,
      });
      return calculateRequest(expression, token)
        .then(result =>
          dispatch({
            type: CALCULATE_SUCCESS,
            payload: result.data,
          })
        )
        .catch(reason =>
          dispatch({
            type: CALCULATE_FAILURE,
            payload: reason,
          })
        );
    }
  };
}

export function addChar(char) {
  return dispatch => {
    dispatch({
      type: ADD_CHAR,
      payload: char,
    });
  };
}
export function removeChar() {
  return dispatch => {
    dispatch({
      type: REMOVE_CHAR,
    });
  };
}
export function removeAll() {
  return dispatch => {
    dispatch({
      type: REMOVE_ALL,
    });
  };
}
export function swithSign() {
  return (dispatch, getState) => {
    dispatch({
      type: SWITCH_SIGN,
      payload: service(getState().standart.expression),
    });
  };
}

export function validateExpression(value) {
  return dispatch => {};
}
