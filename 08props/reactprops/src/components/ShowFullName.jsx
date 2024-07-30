import React from "react";

function ShowFullName(props) {
  //   console.log(props);
  return (
    <div>
      My Name is {props.firstName} {props.lastName}
    </div>
  );
}

export default ShowFullName;
