import { useState, Activity } from "react";

function ExampleOne() {
  const [visible, setVisible] = useState(true);
  return (
    <div>
      <Activity mode={visible ? "visible" : "hidden"}>
        <p>This is an Activity Component.</p>
      </Activity>
      <button onClick={() => setVisible(!visible)}>Click to Toggle</button>
      {visible && <p>This will unmount from the DOM.</p>}
    </div>
  );
}

export default ExampleOne;
