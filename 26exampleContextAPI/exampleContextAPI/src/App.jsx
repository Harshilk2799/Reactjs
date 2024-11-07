import { useState, createContext } from "react";
import "./App.css";
import ChildA from "./components/ChildA";

export const ThemeContext = createContext();

function App() {
  const [theme, setTheme] = useState("lightblue");
  return (
    <>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <div
          id="container"
          style={{
            backgroundColor: theme === "lightblue" ? "gray" : "lightblue",
          }}
        >
          <ChildA />
        </div>
      </ThemeContext.Provider>
    </>
  );
}

export default App;
