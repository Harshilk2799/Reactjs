import { useState, useRef } from "react";

// function ExampleUseRef() {
//   console.log("Component Re-render!!!");
//   const [counter, setCounter] = useState(1);
//   const [username, setUsername] = useState("Bharat");
//   return (
//     <div>
//       <h3>Counter: {counter}</h3>
//       <button onClick={() => setCounter(counter + 1)}>Increase Counter</button>

//       <h3>Username: {username}</h3>
//       <button onClick={() => setUsername("Harshil")}>Change Username</button>
//     </div>
//   );
// }
// export default ExampleUseRef;

// function ExampleUseRef() {
//   console.log("Component Re-render!!!");
//   const username = useRef("Harshil");
//   console.log(username);
//   function handleClick() {
//     username.current = "Bharat";
//     console.log(username);
//   }
//   return (
//     <div>
//       <h1>Hello {username.current}</h1>
//       <button onClick={handleClick}>Change Name</button>
//     </div>
//   );
// }
// export default ExampleUseRef;

// function ExampleUseRef() {
//   console.log("Component Re-render!!!");
//   const h1Ref = useRef();
//   console.log(h1Ref);
//   function handleClick() {
//     // console.log(h1Ref);
//     const h1Element = h1Ref.current;
//     h1Element.textContent = "Harshil";
//     h1Element.style.backgroundColor = "lightblue";
//     h1Element.style.color = "white";
//   }
//   return (
//     <div>
//       <h1 ref={h1Ref}>Hello Harshil</h1>
//       <button onClick={handleClick}>Show value</button>
//     </div>
//   );
// }
// export default ExampleUseRef;

// uncontrolled component using useRef
function ExampleUseRef() {
  console.log("Component Re-render!!!");
  const usernameRef = useRef();
  //   console.log(usernameRef);

  function handleSubmit(e) {
    e.preventDefault();
    // console.log(usernameRef.current);
    const usernameInput = usernameRef.current;
    console.log(usernameInput.value);
  }
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="username">Username</label>
      <input type="text" id="username" ref={usernameRef} />
      <br />
      <input type="submit" value="Register" />
    </form>
  );
}

export default ExampleUseRef;
