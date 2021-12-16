import React, { useReducer } from "react";

let initialState = { count: 0 };
let Reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    case "reset":
      return { count: 0 };
    default:
      new Error("error");
  }
};

const ReducerHook = () => {
  let [state, dispatch] = useReducer(Reducer, initialState);

  let Increment = () => {
    dispatch({ type: "increment" });
  };
  let Decrement = () => {
    dispatch({ type: "decrement" });
  };
  let Reset = () => {
    dispatch({ type: "reset" });
  };
  let { count } = state;
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={Increment}>Increment</button>
      <button onClick={Decrement}>Decrement</button>
      <button onClick={Reset}>Reset</button>
    </div>
  );
};

export default ReducerHook;
