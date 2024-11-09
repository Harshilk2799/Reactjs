import useCounter from "./useCounter";

function App() {
  // const [counter, Increment, Decrement, Reset] = useCounter(0);
  const [counter, Increment, Decrement, Reset] = useCounter(10);

  return (
    <>
      <h1>Counter: {counter}</h1>
      <button onClick={Increment}>Increment</button>
      <button onClick={Reset}>Reset</button>
      <button onClick={Decrement}>Decrement</button>
    </>
  );
}

export default App;
