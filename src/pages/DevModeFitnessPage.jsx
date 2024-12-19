import React from "react";
import { useNavigate } from "react-router-dom";

export default function DevModeFitnessPage() {
  const navigate = useNavigate();

  return (
    <div className="container mt-5 text-center">
      <h1>Choose Your Mode</h1>
      <button
        className="btn btn-primary m-3"
        onClick={() => navigate("/devmode")}
      >
        Developer Mode
      </button>
      <button
        className="btn btn-success m-3"
        onClick={() => navigate("/fitnessmode")}
      >
        Fitness Mode
      </button>
    </div>
  );
}
