import React from "react";
import User from "./User";
import "./index.css";

function Users({ users, increaseAge, deleteUser }) {
  return (
    <h1>
      {/* {users.map((user) => {
        return (
          <div className="user">
            <p>firstName: {user.firstName}</p>
            <p>lastName: {user.lastName}</p>
            <p>age: {user.age}</p>
          </div>
        );
      })} */}

      {users.map((user) => (
        <User
          {...user}
          key={user.id}
          increaseAge={increaseAge}
          deleteUser={deleteUser}
        />
      ))}

      {/* {users.map((user) => (
        <User userDetail={user} key={user.id} />
      ))} */}
    </h1>
  );
}

export default Users;
