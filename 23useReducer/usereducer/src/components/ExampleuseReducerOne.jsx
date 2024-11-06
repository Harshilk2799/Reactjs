import { useReducer } from "react";

function reducer(state, action) {
  console.log("State: ", state, "Action: ", action);
  if (action.type === "Increment") {
    return { ...state, count: state.count + 1 };
  }
  if (action.type === "Reset") {
    return { ...state, count: 0 };
  }
  if (action.type === "Decrement") {
    return { ...state, count: state.count - 1 };
  }
  return state;
}
const initialState = { count: 0 };

// dispatch function
// we pass object(action) as an argument.

function ExampleuseReducerOne() {
  const [state, dispatch] = useReducer(reducer, initialState);

  function handleIncrease() {
    dispatch({ type: "Increment" });
  }
  function handleReset() {
    dispatch({ type: "Reset" });
  }
  function handleDecrease() {
    dispatch({ type: "Decrement" });
  }
  return (
    <>
      <h1>useReducer Hook</h1>
      <h3>Counter: {state.count}</h3>
      <button onClick={handleIncrease}>Increase</button>
      <button onClick={handleReset}>Reset</button>
      <button onClick={handleDecrease}>Decrease</button>
    </>
  );
}

export default ExampleuseReducerOne;
