// components/TodoTimer.jsx
import React from "react";
import { useTimer } from "react-timer-hook";
import PropTypes from "prop-types";

export default function TodoTimer({ expiryTimestamp, onExpire }) {
  const { seconds, minutes, hours, days } = useTimer({
    expiryTimestamp,
    onExpire: onExpire || (() => alert("Task Timer Expired!")),
  });

  return (
    <div>
      {days}d {hours}h {minutes}m {seconds}s
    </div>
  );
}

TodoTimer.propTypes = {
  expiryTimestamp: PropTypes.instanceOf(Date).isRequired,
  onExpire: PropTypes.func,
};
