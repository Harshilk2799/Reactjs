import { useId } from "react";

function LoginForm() {
  const usernameId = useId();
  const emailId = useId();
  return (
    <div>
      <div>
        <label htmlFor={usernameId}>Username:</label>
        <input type="text" id={usernameId} />
      </div>
      <div>
        <label htmlFor={emailId}>Email:</label>
        <input type="email" id={emailId} />
      </div>
    </div>
  );
}

export default LoginForm;
