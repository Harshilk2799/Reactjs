import GrandChild from "./GrandChild";
import { MyAppContext } from "./App";
import { useContext } from "react";

function Child() {
  const { lastName } = useContext(MyAppContext);
  return (
    <div
      style={{
        padding: "2rem",
        backgroundColor: "#7EAA92",
      }}
    >
      <h1>Child: {lastName}</h1>
      <GrandChild />
    </div>
  );
}

export default Child;
