import React from "react";
import style from "./Greeting.module.css";
import style2 from "./Greeting2.module.css";

function Greeting() {
  return (
    // <div className={style2.container}>
    // <div className={style2["bg-dark"]}>
    <div className={`${style.container} ${style["bg-dark"]}`}>
      <h1>Hello, My Name is Harshil</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum,
        deleniti!
      </p>
    </div>
  );
}

export default Greeting;
