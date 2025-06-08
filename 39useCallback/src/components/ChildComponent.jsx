import { memo } from "react";

function ChildComponent({ handleClick, btnName }) {
  console.log("Component re-render");
  return (
    <div>
      <button onClick={handleClick}>{btnName}</button>
    </div>
  );
}

export default memo(ChildComponent);
