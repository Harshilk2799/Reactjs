import { ThemeContext } from "../App";
import { useContext } from "react";

function ChildC() {
  const { theme, setTheme } = useContext(ThemeContext);

  function ToggleTheme() {
    if (theme === "lightblue") {
      setTheme("gray");
    } else {
      setTheme("lightblue");
    }
  }
  return (
    <div>
      <button onClick={ToggleTheme}>Change Theme</button>
    </div>
  );
}

export default ChildC;
