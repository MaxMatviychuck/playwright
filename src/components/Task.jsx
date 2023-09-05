import React from "react";

import "./Task.css";

const CATEGORY_ICONS = {
  urgent: "🚨",
  important: "🔴",
  moderate: "🔵",
  low: "🟢",
};

function Task({ category, title, summary }) {
  console.log("category", category);
  return (
    <li className="task" id="task">
      <span className="task-category" aria-label={category}>
        {CATEGORY_ICONS[category]}
      </span>
      <div>
        <h2>{title}</h2>
        <p>{summary}</p>
      </div>
    </li>
  );
}

export default Task;
