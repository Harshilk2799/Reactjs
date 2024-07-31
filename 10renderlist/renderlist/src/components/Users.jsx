import React from "react";

// function Users({ firstName, lastName }) {
//   return (
//     <div>
//       <h1>
//         Hello {firstName} {lastName}
//       </h1>
//     </div>
//   );
// }
// export default Users;

function Users(props) {
  console.log(props);
  return (
    <div>
      <h1>
        ID: {props.id} | FirstName: {props.firstName} | LastName:{" "}
        {props.lastName}
      </h1>
    </div>
  );
}

export default Users;
