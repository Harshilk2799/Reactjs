import { useEffect } from "react";

function ChildComponent() {
  useEffect(() => {
    console.log("Child: Re-render");
  });

  function calculate() {
    for (let i = 0; i <= 1000000000; i++) {}
    return 5 * 6;
  }
  return <div>ChildComponent= {calculate()}</div>;
}

export default ChildComponent;
