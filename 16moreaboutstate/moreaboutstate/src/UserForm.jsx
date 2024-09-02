import React, { useState } from "react";
import DisplayFullName from "./DisplayFullName";

function UserForm() {
  console.log("Component Re-render");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  //   const [fullName, setFullName] = useState("");
  const fullName = firstName + " " + lastName;
  return (
    <form>
      <h1>Form</h1>
      <div>
        <label htmlFor="firstname">FirstName</label>
        <input
          type="text"
          name="firstname"
          id="firstname"
          value={firstName}
          onChange={(e) => {
            setFirstName(e.target.value);
            // setFullName(e.target.value + " " + lastName);
          }}
        />
      </div>
      <br />
      <div>
        <label htmlFor="lastname">LastName</label>
        <input
          type="text"
          name="lastname"
          id="lastname"
          value={lastName}
          onChange={(e) => {
            setLastName(e.target.value);
            // setFullName(firstName + " " + e.target.value);
          }}
        />
      </div>
      <h2>User Detail</h2>
      <div>
        <p>FirstName: {firstName}</p>
        <p>LastName: {lastName}</p>
        <p>
          FullName: <DisplayFullName fullName={fullName} />
        </p>
      </div>
    </form>
  );
}

export default UserForm;
