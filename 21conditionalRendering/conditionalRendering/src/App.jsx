import LoginBtn from "./components/LoginBtn";
import { useState } from "react";
import LogoutBtn from "./components/LogoutBtn";
function App() {
  const [isLoggedIn, setLoggedIn] = useState(true);

  // 1. if..else condition
  // if (isLoggedIn) {
  //   return <LogoutBtn />;
  // } else {
  //   return <LoginBtn />;
  // }

  // 2. ternary operator
  // return <div>{isLoggedIn ? <LogoutBtn /> : <LoginBtn />}</div>;

  // 3. Logical Operator
  return (
    <div>
      <h1>Hello World</h1>
      {isLoggedIn && <LogoutBtn />}
    </div>
  );
}

export default App;
