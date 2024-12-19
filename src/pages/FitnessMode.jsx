import React from "react";

export default function FitnessMode() {
  const exercises = ["Push-ups", "Squats", "Jumping Jacks", "Plank", "Yoga"];
  return (
    <div className="container mt-5">
      <h1>Fitness Mode</h1>
      <p>Choose your exercise:</p>
      <ul>
        {exercises.map((exercise, index) => (
          <li key={index}>{exercise}</li>
        ))}
      </ul>
    </div>
  );
}
