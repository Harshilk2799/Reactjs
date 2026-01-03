import React from "react";

function TabButton({ onClick, children, isActive }) {
  if (isActive) {
    return <b>{children}</b>;
  }

  return <button onClick={onClick}>{children}</button>;
}

export default TabButton;
