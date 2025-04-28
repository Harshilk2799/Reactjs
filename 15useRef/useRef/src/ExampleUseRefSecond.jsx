import { useRef } from "react";

function ExampleUseRefSecond() {
  let btnRef = useRef();
  function ChangeColor() {
    btnRef.current.style.backgroundColor = "red";
  }
  return (
    <div>
      <button ref={btnRef}>Increment</button>
      <button onClick={ChangeColor}>Change Color of 1st Button</button>
    </div>
  );
}

export default ExampleUseRefSecond;
