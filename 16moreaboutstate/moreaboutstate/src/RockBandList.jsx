import { useState } from "react";
import RockBand from "./RockBand";

function RockBandList() {
  const [rockBands, setRockBands] = useState([
    { id: 1, name: "Harshil" },
    { id: 2, name: "Harsh" },
    { id: 3, name: "Bharat" },
    { id: 4, name: "Jay" },
    { id: 5, name: "Jalpesh" },
    { id: 6, name: "Harshal" },
  ]);
  function addNewRockBack() {
    console.log("add new Rock Band");

    const newRockBand = {
      id: crypto.randomUUID(),
      name: "New Rock Band",
    };
    setRockBands((preRockBands) => [...preRockBands, newRockBand]);
  }
  return (
    <ol>
      {rockBands.map((rockBand) => (
        <RockBand name={rockBand.name} key={rockBand.id} />
        // Don't do this below key regenerate and performance low
        // <RockBand name={rockBand.name} key={crypto.randomUUID()} />
      ))}
      <button onClick={addNewRockBack}>Add new Rock Band</button>
    </ol>
  );
}

export default RockBandList;
