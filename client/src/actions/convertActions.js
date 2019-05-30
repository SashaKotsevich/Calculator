import { convertRequest } from "../services/apiCall";
import { Num } from "../services/validator";
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

export function convert() {
  return (dispatch, getState) => {
    const { initialSys, targetSys, value } = getState().convert;
    const { token } = getState().user;
    const valid = Num(value, initialSys);
    dispatch({
      type: SWITCH_VALID_CONVERT,
      payload: valid,
    });

    if (valid) {
      dispatch({
        type: CONVERT_REQUEST,
      });
      return convertRequest(initialSys, targetSys, value, token)
        .then(result => {
          dispatch({
            type: CONVERT_SUCCESS,
            payload: result.data,
          });
        })
        .catch(reason =>
          dispatch({
            type: CONVERT_FAILURE,
            payload: reason,
          })
        );
    }
  };
}
export function changeValue(value) {
  return dispatch => {
    dispatch({
      type: CHANGE_VALUE,
      payload: value,
    });
  };
}

export function changeIputNymSys(value) {
  return dispatch => {
    dispatch({
      type: CHANGE_INPUT_NUMBER_SYSTEM,
      payload: value,
    });
  };
}
export function changeOutputNymSys(value) {
  return dispatch => {
    dispatch({
      type: CHANGE_OUTPUT_NUMBER_SYSTEM,
      payload: value,
    });
  };
}
export function switchImputAndOutputNymSys() {
  return dispatch => {
    dispatch({
      type: SWITCH_OUTPUT_NUMBER_SYSTEM,
    });
  };
}
