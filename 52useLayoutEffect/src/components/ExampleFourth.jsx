import { useRef, useLayoutEffect } from "react";

function ExampleFourth() {
  const chatRef = useRef(null);

  useLayoutEffect(() => {
    chatRef.current.scrollTop = chatRef.current.scrollHeight;
  }, []);
  return (
    <div>
      <div
        ref={chatRef}
        style={{
          height: "150px",
          border: "1px solid white",
          overflow: "scroll",
        }}
      >
        <p>Hello</p>
        <p>How are you?</p>
        <p>Welcome to chat</p>
        <p>Testing...</p>
        <p>How are you?</p>
        <p>Welcome to chat</p>
        <p>Testing...</p>
        <p>How are you?</p>
        <p>Welcome to chat</p>
        <p>Testing...</p>
        <p>How are you?</p>
        <p>Welcome to chat</p>
        <p>Testing...</p>
      </div>
    </div>
  );
}

export default ExampleFourth;
