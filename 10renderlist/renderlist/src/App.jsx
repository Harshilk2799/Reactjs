import Users from "./components/Users";
// function App() {
//   const users = [
//     { id: 1, firstName: "Harshil", lastName: "Khatri" },
//     { id: 2, firstName: "Harsh", lastName: "Khatri" },
//     { id: 3, firstName: "Bharat", lastName: "Khatri" },
//   ];
//   return (
//     <>
//       <Users firstName={users[0].firstName} lastName={users[0].lastName} />
//       <Users firstName={users[1].firstName} lastName={users[1].lastName} />
//       <Users firstName={users[2].firstName} lastName={users[2].lastName} />
//     </>
//   );
// }
// export default App;

function App() {
  const users = [
    { id: 1, firstName: "Harshil", lastName: "Khatri" },
    { id: 2, firstName: "Harsh", lastName: "Khatri" },
    { id: 3, firstName: "Bharat", lastName: "Khatri" },
  ];
  return (
    <>
      {/* {users.map((user) => {
        return <Users firstName={user.firstName} lastName={user.lastName} />;
      })} */}

      {/* {users.map((user) => (
        <Users firstName={user.firstName} lastName={user.lastName} />
      ))} */}

      {/* key prop */}
      {/* {users.map((user) => (
        <Users {...user} key={user.id} />
      ))} */}

      {users.map((user, index) => (
        <Users {...user} key={index} />
      ))}
    </>
  );
}

export default App;
