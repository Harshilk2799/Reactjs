import React from "react";

function Card(props) {
  return (
    <div>
      <input
        type="text"
        value={props.name}
        onChange={(e) => props.setName(e.target.value)}
      />
      <p>Card Name Child: {props.name}</p>
    </div>
  );
}

export default Card;
