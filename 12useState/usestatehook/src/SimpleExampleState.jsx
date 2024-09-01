import React, { useState } from "react";
// In react we cannot use normal variables to change the UI.

// function SimpleExampleState() {
//   let firstName = "Harshil";
//   //   function handleNameChange() {
//   //     firstName = "Harsh";
//   //     console.log(firstName);
//   //   }
//   return (
//     <>
//       <h1>Name: {firstName}</h1>
//       <button onClick={handleNameChange}>Change Name</button>
//     </>
//   );
// }

// export default SimpleExampleState;

function SimpleExampleState() {
  // useState return array contains two value first one is stateValue and second one is function to update that state value.
  // const returnValue = useState("Harshil");
  // const firstName = returnValue[0];
  // const functionToUpdatefirstName = returnValue[1];
  // console.log(firstName);
  // console.log(functionToUpdatefirstName);
  // console.log(returnValue);

  const [firstName, setFirstName] = useState("Harshil");
  function handleChangeName() {
    if (firstName === "Harshil") {
      setFirstName("Harsh");
    } else {
      setFirstName("Harshil");
    }
  }
  return (
    <>
      <h1>Name: {firstName}</h1>
      <button onClick={handleChangeName}>Change Name</button>
    </>
  );
}

export default SimpleExampleState;
