import React from "react";

function ChildC({ name }) {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      Child C Data: <b>{name}</b>
    </div>
  );
}

export default ChildC;
