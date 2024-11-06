import { useReducer } from "react";

function reducer(state, action) {
  console.log("State: ", state, "Action: ", action);

  switch (action.type) {
    case "Increment":
      return { ...state, count: state.count + 1 };

    case "Reset":
      return { ...state, count: 0 };

    case "Decrement":
      return { ...state, count: state.count - 1 };

    default:
      return state;
  }
}
const initialState = { count: 0 };
function ExampleuseReducerTwo() {
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
      <h1>useReducer Hook with Switch Statement</h1>
      <h3>Counter: {state.count}</h3>
      <button onClick={handleIncrease}>Increase</button>
      <button onClick={handleReset}>Reset</button>
      <button onClick={handleDecrease}>Decrease</button>
    </>
  );
}

export default ExampleuseReducerTwo;
