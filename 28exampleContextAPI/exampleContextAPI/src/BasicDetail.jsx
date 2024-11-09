import { AuthContext } from "./AuthProvider";
import { useContext } from "react";

function BasicDetail() {
  const { auth, setAuth } = useContext(AuthContext);
  return (
    <div>
      <h1>Username: {auth.username}</h1>
      <h1>Email: {auth.email}</h1>
    </div>
  );
}

export default BasicDetail;
