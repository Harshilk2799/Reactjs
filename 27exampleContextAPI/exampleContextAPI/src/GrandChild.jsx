import { MyAppContext } from "./App";
import { useContext } from "react";

function GrandChild() {
  //   const returnValueFromContext = useContext(MyAppContext);
  //   console.log(returnValueFromContext);

  //   const myFunc = useContext(MyAppContext);
  //   console.log(myFunc);

  //   const contextObj = useContext(MyAppContext);
  //   console.log(contextObj);

  // Destructuring
  const { firstName, someFunction } = useContext(MyAppContext);
  return (
    <div style={{ padding: "2rem", backgroundColor: "#FFD9B7" }}>
      <h1>GrandChild: {firstName}</h1>
      {/* <button onClick={myFunc}>Call My Func</button> */}
      <button onClick={someFunction}>Call My Func</button>
    </div>
  );
}

export default GrandChild;
