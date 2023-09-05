import React from "react";

import Filter from "./Filter";

import "./TaskControl.css";

function TaskControl({ onStartAddTask, onSetFilter }) {
  return (
    <div id="task-control">
      <button onClick={onStartAddTask} id="add-task-btn">
        Add Task
      </button>
      <Filter onFilterChange={onSetFilter} />
    </div>
  );
}

export default TaskControl;
