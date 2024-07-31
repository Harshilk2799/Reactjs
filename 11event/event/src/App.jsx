import Greeting from "./Greeting";

// function App() {
//   function handleClick(e) {
//     // console.log(e);
//     // console.log(e.target);
//     e.target.textContent = "You Click Me";
//     // console.log("You Click me");
//   }
//   return (
//     <>
//       <h1>Hello World</h1>
//       <button onClick={handleClick}>Click me</button>
//     </>
//   );
// }
// export default App;

// function App() {
//   function handleClick(firstName, lastName) {
//     console.log(firstName, lastName);
//   }

//   // Wrapper function to call handleClick function and Also Wrapper function pass to the onClick Event
//   function Wrapper() {
//     handleClick("Harshil", "Khatri");
//   }
//   return (
//     <>
//       <h1>Hello World</h1>
//       <button onClick={Wrapper}>Click me</button>
//     </>
//   );
// }
// export default App;

// function App() {
//   function handleClick(firstName, lastName) {
//     console.log(firstName, lastName);
//   }
//   // Not create a wrapper function used arrow function
//   return (
//     <>
//       <h1>Hello World</h1>
//       <button
//         onClick={(e) => {
//           // console.log(e);
//           // console.log(e.target);
//           e.target.textContent = "Click Me Too";
//           handleClick("Harshil", "Khatri");
//         }}
//       >
//         Click me
//       </button>
//     </>
//   );
// }
// export default App;

function App() {
  function handleClick() {
    console.log("Hello World");
  }
  // onClick => work on HTML Elements h1, h2, button, p
  return (
    <>
      <h1>Hello World</h1>
      <Greeting onHandleClick={handleClick} />
    </>
  );
}
export default App;
