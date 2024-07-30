import React from "react";

// function Greeting(props) {
//   console.log(props.children);
//   return (
//     <div>
//       {props.children}
//       <p>Greeting Tag</p>
//     </div>
//   );
// }
// export default Greeting;

// function Greeting({ children }) {
//   return (
//     <div>
//       {children}
//       <p>Greeting Tag</p>
//     </div>
//   );
// }
// export default Greeting;

function Greeting({ children, firstName }) {
  return (
    <div>
      <p>My Name is {firstName}</p>
      {children}
    </div>
  );
}

export default Greeting;
