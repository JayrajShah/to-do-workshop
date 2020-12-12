import React, { useState } from "react";
import "./App.css";
import "./Tasks.css";

// import Tasks from "./Tasks";

function App() {
  const [value, setValue] = useState("");
  const [tasks, setTasks] = useState([]);

  const handleChange = (event) => {
    event.preventDefault();
    setValue(event.target.value);
    console.log(event.target);
  };
  const handleAdd = () => {
    setTasks([...tasks, value]);
    setValue("");
  };
  const handleRemove = (title) => {
    setTasks(tasks.filter((task) => task !== title));
  };

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
        <div
          className="task__operation"
          onClick={() => {
            handleRemove(title);
          }}
        >
          <div className="task__op">x</div>
        </div>
      </div>
    );
  };

  return (
    <div className="container">
      <div className="header"></div>
      <div className="inputControl">
        <input
          type="text"
          placeholder="Add Task"
          value={value}
          onChange={handleChange}
        />
        <button onClick={handleAdd}>Add</button>
      </div>
      <div className="list">
        {tasks.map((task, index) => (
          <Tasks title={task} key={index} completed={false} />
        ))}
      </div>
    </div>
  );
}

export default App;
