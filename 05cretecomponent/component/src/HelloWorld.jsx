import React from "react";

function HelloWorld() {
  return (
    // First Way
    // <div>
    //   <h1>Hello World</h1>
    //   <p>
    //     Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati,
    //     accusantium?
    //   </p>
    // </div>

    // Second Way
    // <React.Fragment>
    //   <h1>Hello World</h1>
    //   <p>
    //     Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati,
    //     accusantium?
    //   </p>
    // </React.Fragment>

    // Third Way
    <>
      <h1>Hello World</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati,
        accusantium?
      </p>
    </>
  );
}

export default HelloWorld;

function HelloWorld2() {
  return <div>HelloWorld New</div>;
}

export { HelloWorld2 };
