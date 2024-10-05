// import ExampleUseEffect from "./ExampleUseEffect";
import FetchData from "./FetchData";
import CleanupFunctionDemo from "./CleanupFunctionDemo";
import MouseMoveEvent from "./MouseMoveEvent";
import MultiEffectComponent from "./MultiEffectComponent";
import { useState } from "react";
function App() {
  const [showComponent, setShowComponent] = useState(true);
  return (
    <>
      <label htmlFor="showComponent">Show Component</label>
      <input
        type="checkbox"
        name="showComponent"
        id="showComponent"
        checked={showComponent}
        onChange={() => setShowComponent(!showComponent)}
      />
      {showComponent && <MultiEffectComponent />}
    </>
  );
}

export default App;
