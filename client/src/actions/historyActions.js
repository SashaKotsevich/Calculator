import { fetchHistory } from "../services/apiCall";

export function getHistory() {
  return (dispatch, getState) => {
    const { token } = getState().user;
    dispatch({
      type: "HISTORY_REQUEST",
    });
    return fetchHistory(token)
      .then(result =>
        dispatch({
          type: "HISTORY_SUCCESS",
          payload: result.data,
        })
      )
      .catch(reason =>
        dispatch({
          type: "HISTORY_FAILURE",
          payload: reason,
        })
      );
  };
}
export function switchDateFilter() {
  return dispatch => {
    dispatch({
      type: "SWITCH_DATEFILTER",
    });
  };
}
export function changeStartDate(date) {
  return dispatch => {
    dispatch({
      type: "CHANGE_START_DATE",
      payload: date,
    });
  };
}
export function changeEndDate(date) {
  return dispatch => {
    dispatch({
      type: "CHANGE_END_DATE",
      payload: date,
    });
  };
}
