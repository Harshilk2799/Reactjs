import React, { useState } from "react";

function SimpleExampleObject() {
  const [person, setPerson] = useState({
    id: 1,
    firstName: "Harshil",
    lastName: "Khatri",
    email: "harshil@gmail.com",
    phone: 7465465465,
    age: 24,
  });
  function increaseAge() {
    // setPerson({
    //   ...person,
    //   age: person.age + 1,
    // });

    setPerson((currentState) => {
      return { ...currentState, age: currentState.age + 1, phone: 465465546 };
    });
  }
  return (
    <>
      <p>firstName: {person.firstName}</p>
      <p>lastName: {person.lastName}</p>
      <p>email: {person.email}</p>
      <p>phone: {person.phone}</p>
      <p>age: {person.age}</p>
      <button onClick={increaseAge}>Increase Age</button>
    </>
  );
}

export default SimpleExampleObject;
