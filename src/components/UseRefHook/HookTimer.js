import React, { useState, useEffect } from "react";

function HookTimer() {
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prevTimer) => prevTimer + 1);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div>
      Hook Timer - {timer}{" "}
      <button onClick={() => clearInterval(interval)}>Clear HookTimer</button>
      {/* dont know interval when onClick, because dont know interval => have to use useRef*/}
    </div>
  );
}

export default HookTimer;
