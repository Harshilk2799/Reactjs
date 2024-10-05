import { useEffect, useState } from "react";
import User from "./User";

// Fetch API
// function FetchData() {
//   console.log("Component Rendered");
//   useEffect(() => {
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((response) => {
//         return response.json();
//       })
//       .then((data) => {
//         console.log(data);
//       });
//   }, []);
//   return <div>FetchData</div>;
// }
// export default FetchData;

// Strict mode
// 1. on component mount
// 2. Effect run
// 3. Cleanup function
// 4. Effect run

function FetchData() {
  const [users, setUsers] = useState([]);
  const [isloading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  console.log("Component Rendered");
  async function JsonData() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    if (!(response.status >= 200 && response.status <= 299)) {
      setIsError(true);
      setErrorMsg(`${response.status} Error`);
      setIsLoading(false);
      return;
    }
    const data = await response.json();
    console.log("data: ", data);
    setUsers(data);
    setIsLoading(false);
  }
  useEffect(() => {
    JsonData();
  }, []);

  if (isloading) {
    return <h1>Loading...</h1>;
  }
  if (isError) {
    return <h1>{errorMsg}</h1>;
  }
  return (
    <div>
      {users.map((user) => (
        <User key={user.id} {...user} />
      ))}
    </div>
  );
}

export default FetchData;
