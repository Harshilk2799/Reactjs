import React from "react";

// Higher Order Component
function withBorder(WrappedComponent) {
  return function () {
    return (
      <div
        style={{
          padding: "1rem",
          background: "lightblue",
          width: "250px",
          border: "1px solid black",
          borderRadius: "5px",
        }}
      >
        <WrappedComponent />
      </div>
    );
  };
}

export default withBorder;
