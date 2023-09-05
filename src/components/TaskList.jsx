import React from "react";

import Task from "./Task";
import "./TaskList.css";

function TaskList({ tasks }) {
  if (!tasks || tasks.length === 0) {
    return <p className="no-tasks">No tasks found!</p>;
  }

  return (
    <ul className="task-list" id="task-list">
      {tasks.map((task) => (
        <Task key={task.id} {...task} />
      ))}
    </ul>
  );
}

export default TaskList;
