import { useContext } from "react";
import { UserContext } from "../App";

function ChildC() {
  const user = useContext(UserContext);
  console.log(user);
  return <div>Hello, {user.name}</div>;
}

export default ChildC;
