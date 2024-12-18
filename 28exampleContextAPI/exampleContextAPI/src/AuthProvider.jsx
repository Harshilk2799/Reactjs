import React, { useState } from "react";
import { createContext } from "react";

export const AuthContext = createContext();

function AuthProvider({ children }) {
  const [auth, setAuth] = useState({
    username: "Harshil",
    email: "harshil@gmail.com",
  });
  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
