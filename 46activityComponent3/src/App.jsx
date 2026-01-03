import { Activity } from "react";
import ComponentWithEffects from "./components/ComponentWithEffects";
import { useState } from "react";

function App() {
  const [isHidden, setIsHidden] = useState(true);

  return (
    <>
      <div style={{ textAlign: "center", marginBottom: "20px" }}>
        <button onClick={() => setIsHidden(!isHidden)}>Hide Component</button>
      </div>

      <div style={{ display: "flex", gap: "20px", padding: "20px" }}>
        <div style={{ flex: 1 }}>
          <h2 style={{ color: "red" }}>Display: None</h2>
          <p>
            <strong>Effects keep running in background!</strong>
          </p>
          <div style={{ display: isHidden ? "none" : "block" }}>
            <ComponentWithEffects name="Display None" />
          </div>
        </div>

        <div style={{ flex: 1 }}>
          <h2 style={{ color: "blue" }}>Activity Component</h2>
          <p>
            <strong>Effects paused when hidden!</strong>
          </p>
          <Activity mode={isHidden ? "hidden" : "visible"}>
            <ComponentWithEffects name="Activity Component" />
          </Activity>
        </div>
      </div>
    </>
  );
}

export default App;
