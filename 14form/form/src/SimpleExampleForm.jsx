import { useState } from "react";

function SimpleExampleForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [gender, setGender] = useState("");

  function handleUsername(e) {
    setUsername(e.target.value);
    // console.log(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    // console.log("submit");
    console.log("Username: ", username);
    console.log("Password: ", password);
    console.log("Gender: ", gender);
  }
  return (
    <>
      <h2>Form Example</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username </label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={handleUsername}
          />
          <br />
        </div>
        <br />
        <div>
          <label htmlFor="password">Password </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
        </div>

        <div>
          <span>
            <h3>Gender</h3>
          </span>
          <input
            type="radio"
            name="male"
            id="male"
            checked={gender === "male"}
            onChange={(e) => setGender("male")}
          />
          <label htmlFor="male">Male </label>
          <input
            type="radio"
            name="female"
            id="female"
            checked={gender === "female"}
            onChange={(e) => setGender("female")}
          />
          <label htmlFor="female">Female</label>
        </div>

        <input type="submit" value="Register" />
      </form>
    </>
  );
}

export default SimpleExampleForm;
