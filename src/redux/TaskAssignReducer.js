import axios from "axios";

const initState = {
  taskAssign: [],
  progress: false,
};

const TASK_ASSIGN_GET_ALL_ACTION_TYPE = "TASK_ASSIGN_GET_ALL_ACTION_TYPE";

// ACTIONS
export const getAllTaskAssignAction = (payload) => {
  return async (dispatch) => {
    // API CALL :: FETCH RECORDS
    const url = `http://localhost:8080/api/v1/work/${payload}`;
    const response = await axios.get(url);

    console.log(response.data);

    // UI UPDATE
    dispatch({
      type: TASK_ASSIGN_GET_ALL_ACTION_TYPE,
      payload: response.data,
    });
  };
};

export function TaskAssignReducer(state = initState, action) {
  switch (action.type) {
    case TASK_ASSIGN_GET_ALL_ACTION_TYPE:
      return { ...state, taskAssign: action.payload };
    default:
      return state;
  }
}
