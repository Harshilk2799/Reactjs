// import { createPortal } from "react-dom";
// import PortalTest from "./PortalTest";
import { useState } from "react";
import Modal from "./Modal";

function App() {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <h1>App Component</h1>
      {/* {createPortal(<h1>Portal</h1>, document.body)} */}
      {/* <PortalTest /> */}
      <button onClick={() => setOpen(true)}>Open Modal</button>

      <Modal isOpen={open} onClose={() => setOpen(false)}>
        <h2>Hello from Modal</h2>
        <p>This is a simple modal without context.</p>
      </Modal>
    </div>
  );
}

export default App;
