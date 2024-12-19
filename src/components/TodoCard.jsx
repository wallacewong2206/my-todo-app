import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useTimer } from "react-timer-hook";

export default function TodoCard({ todo, onEdit, onDelete }) {
  const { task, expiryTimestamp } = todo;
  const [timerInput, setTimerInput] = useState("");

  const { seconds, minutes, hours } = useTimer({
    expiryTimestamp: new Date(expiryTimestamp),
    onExpire: () => alert(`${task} timer expired!`),
  });

  const setTimer = () => {
    const [hh, mm, ss] = timerInput.split(":").map(Number);
    const now = new Date();
    now.setHours(now.getHours() + hh, now.getMinutes() + mm, now.getSeconds() + ss);
    todo.expiryTimestamp = now;
  };

  return (
    <div className="card mt-3">
      <div className="card-body">
        <h5>{task}</h5>
        <p>
          Timer: {hours}h {minutes}m {seconds}s
        </p>
        <Form.Control
          type="text"
          placeholder="HH:MM:SS"
          value={timerInput}
          onChange={(e) => setTimerInput(e.target.value)}
        />
        <Button onClick={setTimer} className="mt-2">Set Timer</Button>
        <Button onClick={onEdit} className="btn-warning me-2">Edit</Button>
        <Button onClick={onDelete} className="btn-danger">Delete</Button>
      </div>
    </div>
  );
}
