import { useState, useEffect } from "react";

function MouseMoveEvent() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const handlMouse = (e) => {
      console.log({ x: e.clientX, y: e.clientY });
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    document.addEventListener("mousemove", handlMouse);
    return () => {
      document.removeEventListener("mousemove", handlMouse);
      console.log("cleanup function");
    };
  }, []);

  return (
    <div>
      <p>X: {mousePosition.x}</p>
      <p>Y: {mousePosition.y}</p>
    </div>
  );
}

export default MouseMoveEvent;
