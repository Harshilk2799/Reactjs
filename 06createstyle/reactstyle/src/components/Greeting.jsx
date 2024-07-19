import React from "react";
import "./Greeting.css";

// Inline Style using Javascript Object
// function Greeting() {
//   const cssStyle = {
//     backgroundColor: "lightblue",
//     border: "1px solid black",
//     padding: "10px",
//     margin: "5px",
//     borderRadius: "5px",
//   };
//   return (
//     <div style={cssStyle}>
//       <h1 className="heading_text">Hello World</h1>
//       <p className="para_text">
//         Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, soluta.
//       </p>
//     </div>
//   );
// }

// export default Greeting;

// Inline Style using Javascript Object
// function Greeting() {
//   const isSansSerif = false;
//   return (
//     <div
//       style={{
//         backgroundColor: "lightblue",
//         fontFamily: isSansSerif ? "sans-serif" : "serif",
//         border: "1px solid black",
//         padding: "10px",
//         margin: "5px",
//         borderRadius: "5px",
//       }}
//     >
//       <h1 className="heading_text">Hello World</h1>
//       <p className="para_text">
//         Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, soluta.
//       </p>
//     </div>
//   );
// }

// export default Greeting;

// Condition styling
// function Greeting() {
//   const isMode = true;
//   return (
//     <div className={isMode ? "card" : null}>
//       <h1 className="heading_text">Hello World</h1>
//       <p className="para_text">
//         Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, soluta.
//       </p>
//     </div>
//   );
// }

// export default Greeting;

// Condition styling
// function Greeting() {
//   const isMode = true;
//   return (
//     <div className={isMode && "card"}>
//       <h1 className="heading_text">Hello World</h1>
//       <p className="para_text">
//         Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, soluta.
//       </p>
//     </div>
//   );
// }

// export default Greeting;

function Greeting() {
  return (
    <div className="card">
      <h1 className="heading_text">Hello World</h1>
      <p className="para_text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, soluta.
      </p>
    </div>
  );
}

export default Greeting;
