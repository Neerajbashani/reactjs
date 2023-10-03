import { tasksReducers } from "./task-reducers";
import { combineReducers } from "redux";

var allReducers = combineReducers({
  tasks: tasksReducers,
});
export default allReducers;
