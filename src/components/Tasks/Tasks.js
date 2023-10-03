import React from "react";
import "./Tasks.css";
import actions from "../../actions";
import Collepaseble from "../collapsable/Collepaseble";
import { useState } from "react";

import { UseSelector, useSelector, useDispatch } from "react-redux";
function Tasks() {
  let [taskTitle, setTaskTitle] = useState("");
  let [taskDateTime, setTaskDateTime] = useState("");

  let tasks = useSelector((state) => state.tasks);

  let [isTaskOpen, setIsTaskOpen] = useState(false);
  let [search, setSearch] = useState("");
  let filteredTask = tasks.filter(
    (task) => task.taskTitle.toLowerCase().indexOf(search.toLowerCase()) >= 0
  );
  console.log("".toLowerCase);
  let onCancelClick = () => {
    setIsTaskOpen(false);
  };

  let dispatch = useDispatch();
  let onSaveClick = () => {
    //dispatch
    dispatch(
      actions.craeteTask({
        id: Math.floor(Math.random() * 10000000),
        taskTitle: taskTitle,
        taskDateTime: taskDateTime,
      })
    );
    setTaskTitle("");
    setTaskDateTime("");
    setIsTaskOpen(false);
  };
  let onDeletClick = (task) => {
    // console.log("id" + id);
    if (window.confirm("are you sur")) {
      dispatch(actions.deleteTask(task.id));
    }
  };
  return (
    <div className="outer-containe">
      <div className="container">
        <div className="app-titile-container">
          <div className="app-title">
            <h1>Tasks</h1>
          </div>
          <div className="create-button-container">
            {isTaskOpen === false ? (
              <button
                className="button create-button"
                onClick={() => setIsTaskOpen(!isTaskOpen)}
              >
                <i className="fa fa-ccre">create </i>
              </button>
            ) : null}
          </div>
        </div>

        <Collepaseble isOpen={isTaskOpen}>
          <div className="new-new-task-container">
            <h4 className="new-task-title">New Task</h4>

            <div className="form-label">
              <label className="task-title">Task Title</label>
              <input
                type="text"
                placeholder="Task Title "
                className="text-box"
                id="task-title"
                value={taskTitle}
                onChange={(e) => {
                  setTaskTitle(e.target.value);
                }}
              ></input>
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="task-date-time">
                Task Date and Time
              </label>
              <div className="form-input">
                <input
                  type="datetime-local"
                  placeholder="Task date and time"
                  className="text-box"
                  id="task-date-time"
                  value={taskDateTime}
                  onChange={(e) => setTaskDateTime(e.target.value)}
                ></input>
              </div>
            </div>

            <div className="button-group">
              <button
                className="button save-button"
                onClick={() => {
                  onSaveClick();
                }}
              >
                <i className="fa fa-save"> Save</i>
              </button>

              <button
                className="button cancel-button"
                onClick={() => {
                  onCancelClick();
                }}
              >
                <i className="fa fa-cancel"> Cancel</i>{" "}
              </button>
            </div>
          </div>
        </Collepaseble>
        <div className="search-box">
          <input
            type="search"
            placeholder="Search"
            onChange={(e) => setSearch(e.target.value)}
          />
          <i className="fa fa-search"></i>
        </div>

        <div className="content-body">
          {filteredTask.map((task) => (
            <div className="task" key={task.id}>
              <div className="task-body">
                <div className="task-title">
                  <i className=" fa fa-thumbtack"></i>
                  <span className="task-title-text"> {task.taskTitle}</span>
                </div>
                <div className="task-subtitle">
                  <i className="far fa-clock"></i>
                  <span className="task-subtitle">{task.taskDateTime}</span>
                </div>
              </div>
              <div className="task-options">
                <button
                  className="icon-button"
                  title="Delete"
                  onClick={() => onDeletClick(task.id)}
                >
                  &times;
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default Tasks;
