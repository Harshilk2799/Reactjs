import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function SimpleExampleArray() {
  const [fruits, setFruits] = useState(["Apple", "Mango"]);
  function AddFruit() {
    // setFruits([...fruits, "Kewi"]);

    setFruits((currentState) => {
      return [...currentState, "Kewi"];
    });
  }
  return (
    <>
      <ul>
        {fruits.map((fruit) => {
          return <li key={uuid()}>{fruit}</li>;
        })}
      </ul>
      <button onClick={AddFruit}>Add Fruit</button>
    </>
  );
}

export default SimpleExampleArray;
