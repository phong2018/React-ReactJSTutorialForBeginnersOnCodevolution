import React, { useReducer } from "react";
import ComponentAA from "./ComponentAA";
import ComponentBB from "./ComponentBB";
import ComponentCC from "./ComponentCC";

export const CountContext = React.createContext();

const initialState = 0;

const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return 0;
    default:
      return state;
  }
};

function ReducerContext() {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <CountContext.Provider
      value={{ countState: count, countDispatch: dispatch }}
    >
      <div>Count - {count}</div>
      <ComponentAA />
      <ComponentBB />
      <ComponentCC />
    </CountContext.Provider>
  );
}

export default ReducerContext;
