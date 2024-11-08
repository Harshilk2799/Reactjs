import { createContext } from "react";
import MyComponent from "./MyComponent";

// Step 1: import createContext from React
// Step 2: Create a Context object outside the component
// Step 3: Wrap application in context.Provider
// Step 4: Pass value to context.Provider

export const MyAppContext = createContext();

function App() {
  function myFunc() {
    console.log("Hello World");
  }

  return (
    <>
      {/* Example 1 */}
      {/* <MyAppContext.Provider value={myFunc}>
        <div
          style={{
            padding: "2rem",
            backgroundColor: "#C8E4B2",
            height: "100vh",
          }}
        >
          <h1>App</h1>
          <MyComponent />
        </div>
      </MyAppContext.Provider> */}

      {/* Example 2 */}
      <MyAppContext.Provider
        value={{
          firstName: "Harshil",
          lastName: "Khatri",
          someFunction: myFunc,
        }}
      >
        <div
          style={{
            padding: "2rem",
            backgroundColor: "#C8E4B2",
            height: "100vh",
          }}
        >
          <h1>App</h1>
          <MyComponent />
        </div>
      </MyAppContext.Provider>
    </>
  );
}

export default App;
