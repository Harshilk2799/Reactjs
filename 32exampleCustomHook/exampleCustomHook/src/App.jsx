import useLocalStorage from "./hooks/useLocalStorage";

function App() {
  const [firstname, setFirstName] = useLocalStorage("firstname", "");
  const [lastname, setLastName] = useLocalStorage("lastname", "");
  return (
    <>
      <div>
        <label htmlFor="firstname">FirstName: </label>
        <input
          type="text"
          name="firstname"
          id="firstname"
          value={firstname}
          onChange={(e) => setFirstName(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="lastname">LastName: </label>
        <input
          type="text"
          name="lastname"
          id="lastname"
          value={lastname}
          onChange={(e) => setLastName(e.target.value)}
        />
      </div>
      <h1>Firstname: {firstname}</h1>
      <h1>Lastname: {lastname}</h1>
    </>
  );
}

export default App;
