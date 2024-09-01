import { useState } from "react";
import Users from "./Users";

// prop drilling
function App() {
  const [users, setUsers] = useState([
    { id: 1, firstName: "Harshil", lastName: "Khatri", age: 24 },
    { id: 2, firstName: "Harsh", lastName: "Trivedi", age: 25 },
    { id: 3, firstName: "Bharat", lastName: "Shethwala", age: 24 },
  ]);

  function deleteUser(id) {
    // const newState = [];
    // for (let user of users) {
    //   if (user.id !== id) {
    //     newState.push(user);
    //   }
    // }
    // setUsers(newState);

    // setUsers((preState) => {
    //   return preState.filter((user) => {
    //     return user.id !== id;
    //   });
    // });

    setUsers((preState) => {
      return preState.filter((user) => user.id !== id);
    });
  }
  // state change component re-render
  function increaseAge(id) {
    // console.log("id: ", id);
    // Pure Javascript
    // const newState = [];
    // for (let user of users) {
    //   if (user.id === id) {
    //     newState.push({ ...user, age: user.age + 1 });
    //   } else {
    //     newState.push(user);
    //   }
    // }
    // setUsers(newState);

    setUsers((preState) => {
      return preState.map((user) => {
        if (user.id === id) {
          return { ...user, age: user.age + 1 };
        } else {
          return user;
        }
      });
    });
  }

  return (
    <>
      <div className="App">
        <h1>State Example</h1>
        <Users
          users={users}
          increaseAge={increaseAge}
          deleteUser={deleteUser}
        />
      </div>
    </>
  );
}

export default App;
