import React, { useState } from "react";
import "./Tasks.css";

const Tasks = ({ title, completed }) => {
  const [isCompleted, setIscompleted] = useState(completed);
  return (
    <div className="task__element">
      <div
        className="task__info"
        onClick={() => {
          setIscompleted(!isCompleted);
        }}
      >
        <div className="task__title">{title}</div>
        <div className="task__status">
          {isCompleted ? "Completed" : "Pending"}
        </div>
      </div>
      <div className="task__operation">
        <div className="task__op">x</div>
      </div>
    </div>
  );
};

export default Tasks;
