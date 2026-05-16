import { useRef, useLayoutEffect } from "react";

function ExampleThree() {
  const boxRef = useRef(null);

  useLayoutEffect(() => {
    const el = boxRef.current;
    const width = el.offsetWidth;
    el.style.transform = `translateX(${width}px)`;
  }, []);
  return (
    <div>
      <div
        ref={boxRef}
        style={{ padding: "30px", background: "skyblue", transition: "3s" }}
      >
        Animated Box
      </div>
    </div>
  );
}

export default ExampleThree;
