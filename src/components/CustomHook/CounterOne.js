import React, { useState } from "react";
import useCounter from "./useCounter";

function CounterOne() {
  const [count, increment, decrement, reset] = useCounter();
  return (
    <div>
      Count ={count}
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>increment</button>
      <button onClick={reset}>increment</button>
    </div>
  );
}

export default CounterOne;
