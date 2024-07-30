import ShowFullName from "./ShowFullName";

// function Greetings(props) {
//   //   console.log(props);
//   //   console.log(props.firstName);
//   return (
//     <div>
//       Hello, My name is {props.firstName} {props.lastName}
//     </div>
//   );
// }
// export default Greetings;

// props Destructuring
// function Greetings(props) {
//   //   const firstName = props.firstName;
//   //   const lastName = props.lastName;
//   const { firstName, lastName } = props;
//   return (
//     <div>
//       Hello, My name is {firstName} {lastName}
//     </div>
//   );
// }
// export default Greetings;

// Parameterize Destructuring
// function Greetings({ firstName, lastName }) {
//   return (
//     <div>
//       Hello, My name is {firstName} {lastName}
//     </div>
//   );
// }
// export default Greetings;

// function Greetings({ firstName, lastName, age }) {
//   return (
//     <div>
//       Hello, My name is {firstName} {lastName} {age}
//     </div>
//   );
// }
// export default Greetings;

// Access Array
// function Greetings({ firstName, lastName, age, hobbies, userInfo }) {
//   //   console.log(typeof hobbies);
//   //   console.log(hobbies[0]);
//   return (
// <div>
//   <p>
//     Hello, My name is {firstName} {lastName} Older of {age} Age. My hoobies{" "}
//     {hobbies[0]} and Work Position {userInfo.position}
//   </p>
// </div>
//   );
// }
// export default Greetings;

// Default Props
// function Greetings({ firstName, lastName, fullName = "Harshil Khatri" }) {
//   return (
//     <div>
//       <p>Hello, My name is {fullName}</p>
//     </div>
//   );
// }
// export default Greetings;

// function Greetings({ firstName, lastName, fullName = "Harshil Khatri" }) {
//   return <ShowFullName fname={firstName} lname={lastName} />;
// }
// export default Greetings;

function Greetings(props) {
  return <ShowFullName {...props} />;
}

export default Greetings;
