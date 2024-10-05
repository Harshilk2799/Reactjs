import { useEffect, useState } from "react";

// useEffect
// => It take callback function as input

// first argument : callback function
// second argument : dependency array

// dependency array
// [] =====> useEffect will be called only once
// dependency array with some value

// Example1 = useEffect callback function call after component renderer and also state change then useEffect callback function call
// function ExampleUseEffect() {
//   const [counter, setCounter] = useState(0);
//   console.log("Component Rendered");
//   useEffect(() => {
//     console.log("Inside useEffect");
//   });
//   return (
//     <div>
//       <h1>Counter: {counter}</h1>
//       <button onClick={() => setCounter((prevState) => prevState + 1)}>
//         Increase
//       </button>
//     </div>
//   );
// }
// export default ExampleUseEffect;

// Example 2: useEffect will be called only once (First time component rendered) with [] dependency array
// function ExampleUseEffect() {
//   const [counter, setCounter] = useState(0);
//   console.log("Component Rendered");
//   useEffect(() => {
//     console.log("Inside useEffect");
//   }, []);
//   return (
//     <div>
//       <h1>Counter: {counter}</h1>
//       <button onClick={() => setCounter((prevState) => prevState + 1)}>
//         Increase
//       </button>
//     </div>
//   );
// }
// export default ExampleUseEffect;

// Example 3
// function ExampleUseEffect() {
//   const [counter1, setCounter1] = useState(0);
//   const [counter2, setCounter2] = useState(0);
//   console.log("Component Rendered");
//   useEffect(() => {
//     console.log("Inside useEffect");
//   }, [counter2]);
//   return (
//     <div>
//       <h1>Counter: {counter1}</h1>
//       <button onClick={() => setCounter1((prevState) => prevState + 1)}>
//         Increase
//       </button>
//       <h1>Counter: {counter2}</h1>
//       <button onClick={() => setCounter2((prevState) => prevState + 1)}>
//         Increase
//       </button>
//     </div>
//   );
// }
// export default ExampleUseEffect;
