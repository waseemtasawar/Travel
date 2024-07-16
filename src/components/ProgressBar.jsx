import React, { useState, useEffect } from "react";
const ProgressBar = ({ timer }) => {
  const [remaningTime, setRemaningTime] = useState(timer);

  useEffect(() => {
    const interval = setInterval(() => {
      setRemaningTime((prevTime) => prevTime - 10);
    }, 10);

    return () => {
      clearInterval(interval);
    };
  }, []);
  return <progress value={remaningTime} max={timer} />;
};

export default ProgressBar;
