import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function TodoPage() {
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState("");
  const [editIndex, setEditIndex] = useState(null);
  const [reminder, setReminder] = useState(new Date());
  const [expiryTimestamp, setExpiryTimestamp] = useState(null);

  const addTodo = () => {
    if (!task.trim()) return;

    const newTodo = {
      task,
      reminder: reminder || new Date(), // Calendar Date
      expiryTimestamp: expiryTimestamp || new Date(), // Timer Timestamp
    };

    if (editIndex !== null) {
      const updatedTodos = [...todos];
      updatedTodos[editIndex] = newTodo;
      setTodos(updatedTodos);
      setEditIndex(null);
    } else {
      setTodos([...todos, newTodo]);
    }

    setTask("");
    setReminder(new Date());
    setExpiryTimestamp(null);
  };

  return (
    <div className="container mt-5">
      <h1>Todo List</h1>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter your task"
        className="form-control mb-2"
      />
      <DatePicker
        selected={reminder}
        onChange={(date) => setReminder(date)}
        showTimeSelect
        dateFormat="Pp"
        className="form-control mb-2"
      />
      <button onClick={addTodo} className="btn btn-primary">Add Task</button>

      <ul className="list-group mt-3">
        {todos.map((todo, index) => (
          <li key={index} className="list-group-item">
            <h5>{todo.task}</h5>
            <p>Reminder: {todo.reminder.toLocaleString()}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
