import { useState, useEffect } from "react";

// cleanup function
// 1. before component unmount
// function CleanupFunctionDemo() {
//   const [counter, setCounter] = useState(0);
//   console.log("Component Rendererd");
//   useEffect(() => {
//     console.log("Inside useEffect");

//     return () => {
//       console.log("Cleanup function");
//     };
//   }, []);

//   return (
//     <div>
//       <h1>Counter: {counter}</h1>
//       <button
//         onClick={() => {
//           setCounter(counter + 1);
//         }}
//       >
//         Increase
//       </button>
//     </div>
//   );
// }

// export default CleanupFunctionDemo;
// 2. When there is some value inside dependency array

// When value change
// 1. Component Re-render
// 2. Cleanup Function
// 3. useEffect runs

function CleanupFunctionDemo() {
  const [counter, setCounter] = useState(0);
  console.log("Component Rendererd");
  useEffect(() => {
    console.log("Inside useEffect");

    return () => {
      console.log("Count is unmounted from UI");
    };
  }, [counter]);

  return (
    <div>
      <h1>Counter: {counter}</h1>
      <button
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        Increase
      </button>
    </div>
  );
}

export default CleanupFunctionDemo;
