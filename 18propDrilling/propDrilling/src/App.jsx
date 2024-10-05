import ChildA from "./ChildA";
function App() {
  let name = "Harshil";
  return (
    <>
      <h1 style={{ display: "flex", justifyContent: "center" }}>
        Props Drilling
      </h1>
      <ChildA name={name} />
    </>
  );
}

export default App;
