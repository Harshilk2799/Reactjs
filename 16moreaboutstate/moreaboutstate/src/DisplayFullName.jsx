import React from "react";

function DisplayFullName({ fullName }) {
  console.log("Display full name component re-render");
  return <span>{fullName}</span>;
}

export default DisplayFullName;
