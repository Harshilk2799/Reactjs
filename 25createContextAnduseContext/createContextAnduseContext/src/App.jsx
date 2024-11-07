import { createContext, useState } from "react";
import "./App.css";
import ChildA from "./components/ChildA";

// Step 1: Create a Context object
// Step 2: Wrap all the child inside a provider
// Step 3: Pass value
// Step 4: Export Context object
// Step 5: Access data using useContext hook.

const UserContext = createContext();

function App() {
  const [user, setUser] = useState({ name: "Harshil" });
  return (
    <>
      <UserContext.Provider value={user}>
        <ChildA />
      </UserContext.Provider>
    </>
  );
}

export default App;
export { UserContext };
