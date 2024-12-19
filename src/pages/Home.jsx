import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="container mt-5 text-center">
      <h1>Welcome to Todo App</h1>
      <p className="mt-4">
        <strong>Instructions:</strong>
      </p>
      <ol className="text-start mx-auto" style={{ maxWidth: "600px" }}>
        <li>
          <Link to="/signup">Sign Up</Link> or <Link to="/login">Login</Link> to access your account.
        </li>
        <li>Use the navigation bar to access your Todos.</li>
        <li>Switch between <strong>Software Developer Mode</strong> and <strong>Fitness Mode</strong> for different types of tasks.</li>
        <li>Toggle between light and dark themes for better usability.</li>
      </ol>
    </div>
  );
}
