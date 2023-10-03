import * as actionTypes from "../constants/action";

export const craeteTask = (newTask) => {
  return {
    type: actionTypes.CREATE_TASK,
    payload: newTask,
  };
};

export const deleteTask = (taskId) => {
  return {
    type: actionTypes.DELETE_TASK,
    payload: taskId,
  };
};
