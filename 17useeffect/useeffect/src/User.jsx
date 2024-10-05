import React from "react";

function User({ id, name, username, email, address, website }) {
  return (
    <div
      style={{
        backgroundColor: "brown",
        padding: "1rem",
        margin: "1rem",
        borderRadius: "10px",
        color: "white",
        fontWeight: "bold",
        fontSize: "20px",
      }}
    >
      <p>ID: {id}</p>
      <p>Name: {name}</p>
      <p>Username: {username}</p>
      <p>Email: {email}</p>
      <p>City: {address.city}</p>
      <p>Website: {website}</p>
    </div>
  );
}

export default User;
