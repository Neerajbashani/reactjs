import { initialTasks } from "../data/task";
import * as actionTypes from "../constants/action";
import actions from "../actions";

export const tasksReducers = (state = initialTasks, action) => {
  // console.log(initialTasks);
  switch (action.type) {
    case actionTypes.CREATE_TASK:
      return [...state, action.payload];
    case actionTypes.DELETE_TASK:
      console.log(state.id);
      console.log(action.payload);
      return state.filter((task) => task.id !== action.payload);

    default:
      return state;
  }
};
