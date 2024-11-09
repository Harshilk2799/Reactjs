import { createPortal } from "react-dom";

function MyComponent() {
  return createPortal(
    <div>MyComponent</div>,
    document.getElementById("newRoot")
  );
}

export default MyComponent;
