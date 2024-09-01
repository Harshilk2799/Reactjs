import React from "react";

function User({ id, firstName, lastName, age, increaseAge, deleteUser }) {
  return (
    <div className="user">
      <p>ID: {id}</p>
      <p>firstName: {firstName}</p>
      <p>lastName: {lastName}</p>
      <p>Age: {age}</p>
      <button
        onClick={() => {
          increaseAge(id);
        }}
      >
        Increase Age
      </button>
      <button
        onClick={() => {
          deleteUser(id);
        }}
      >
        Delete User
      </button>
    </div>
  );
}

export default User;
