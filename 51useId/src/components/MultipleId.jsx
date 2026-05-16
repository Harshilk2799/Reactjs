import { useId } from "react";

function MultipleId() {
  const id = useId();
  return (
    <form>
      <div>
        <label htmlFor={id + "usernameId"}>Username: </label>
        <input type="text" id={id + "usernameId"} />
      </div>
      <div>
        <label htmlFor={id + "passwordId"}>Password: </label>
        <input type="text" id={id + "passwordId"} />
      </div>
      <div>
        <label htmlFor={id + "emailId"}>Email: </label>
        <input type="text" id={id + "emailId"} />
      </div>
      <input type="submit" value="Save" />
    </form>
  );
}

export default MultipleId;
