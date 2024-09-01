import { useState } from "react";

// function MultipleInputExample() {
//   const [firstName, setFirstName] = useState("");
//   const [lastName, setLastName] = useState("");
//   const [username, setUsername] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const [phone, setPhone] = useState("");
//   const [address, setAddress] = useState("");

//   function handleSubmit(e) {
//     e.preventDefault();
//     console.log("First Name: ", firstName);
//     console.log("Last Name: ", lastName);
//     console.log("Username: ", username);
//     console.log("Email: ", email);
//     console.log("Password: ", password);
//     console.log("Confirm Password: ", confirmPassword);
//     console.log("Phone: ", phone);
//     console.log("Address: ", address);
//   }
//   return (
//     <form onSubmit={handleSubmit}>
//       <h2>Form Example</h2>
//       <div>
//         <label htmlFor="firstname">Firstname </label>
//         <input
//           type="text"
//           name="firstname"
//           id="firstname"
//           value={firstName}
//           onChange={(e) => setFirstName(e.target.value)}
//         />
//       </div>
//       <br />
//       <div>
//         <label htmlFor="lastname">Lastname </label>
//         <input
//           type="text"
//           name="lastname"
//           id="lastname"
//           value={lastName}
//           onChange={(e) => setLastName(e.target.value)}
//         />
//       </div>
//       <br />
//       <div>
//         <label htmlFor="username">Username </label>
//         <input
//           type="text"
//           name="username"
//           id="username"
//           value={username}
//           onChange={(e) => setUsername(e.target.value)}
//         />
//       </div>
//       <br />
//       <div>
//         <label htmlFor="email">Email </label>
//         <input
//           type="email"
//           name="email"
//           id="email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//         />
//       </div>
//       <br />
//       <div>
//         <label htmlFor="password">Password </label>
//         <input
//           type="password"
//           name="password"
//           id="password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         />
//       </div>
//       <br />
//       <div>
//         <label htmlFor="confirmPassword">Confirm Password </label>
//         <input
//           type="password"
//           name="confirmPassword"
//           id="confirmPassword"
//           value={confirmPassword}
//           onChange={(e) => setConfirmPassword(e.target.value)}
//         />
//       </div>
//       <br />
//       <div>
//         <label htmlFor="phone">Phone </label>
//         <input
//           type="text"
//           name="phone"
//           id="phone"
//           value={phone}
//           onChange={(e) => setPhone(e.target.value)}
//         />
//       </div>
//       <br />
//       <div>
//         <label htmlFor="address">Address </label>
//         <input
//           type="text"
//           name="address"
//           id="address"
//           value={address}
//           onChange={(e) => setAddress(e.target.value)}
//         />
//       </div>
//       <input type="submit" value="Register" />
//     </form>
//   );
// }
// export default MultipleInputExample;

function MultipleInputExample() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
    address: "",
  });

  function handleChange(e) {
    // console.log(e.target.id);
    setFormData((prevState) => {
      return { ...prevState, [e.target.id]: e.target.value };
    });
  }
  function handleSubmit(e) {
    e.preventDefault();
    console.log("First Name: ", formData.firstName);
    console.log("Last Name: ", formData.lastName);
    console.log("Username: ", formData.username);
    console.log("Email: ", formData.email);
    console.log("Password: ", formData.password);
    console.log("Confirm Password: ", formData.confirmPassword);
    console.log("Phone: ", formData.phone);
    console.log("Address: ", formData.address);
  }
  return (
    <form onSubmit={handleSubmit}>
      <h2>Form Example</h2>
      <div>
        <label htmlFor="firstname">Firstname </label>
        <input
          type="text"
          name="firstname"
          id="firstName"
          value={formData.firstName}
          onChange={handleChange}
        />
      </div>
      <br />
      <div>
        <label htmlFor="lastname">Lastname </label>
        <input
          type="text"
          name="lastname"
          id="lastName"
          value={formData.lastName}
          onChange={handleChange}
        />
      </div>
      <br />
      <div>
        <label htmlFor="username">Username </label>
        <input
          type="text"
          name="username"
          id="username"
          value={formData.username}
          onChange={handleChange}
        />
      </div>
      <br />
      <div>
        <label htmlFor="email">Email </label>
        <input
          type="email"
          name="email"
          id="email"
          value={formData.email}
          onChange={handleChange}
        />
      </div>
      <br />
      <div>
        <label htmlFor="password">Password </label>
        <input
          type="password"
          name="password"
          id="password"
          value={formData.password}
          onChange={handleChange}
        />
      </div>
      <br />
      <div>
        <label htmlFor="confirmPassword">Confirm Password </label>
        <input
          type="password"
          name="confirmPassword"
          id="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
        />
      </div>
      <br />
      <div>
        <label htmlFor="phone">Phone </label>
        <input
          type="text"
          name="phone"
          id="phone"
          value={formData.phone}
          onChange={handleChange}
        />
      </div>
      <br />
      <div>
        <label htmlFor="address">Address </label>
        <input
          type="text"
          name="address"
          id="address"
          value={formData.address}
          onChange={handleChange}
        />
      </div>
      <input type="submit" value="Register" />
    </form>
  );
}

export default MultipleInputExample;
