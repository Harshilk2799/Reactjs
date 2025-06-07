import { memo } from "react";

function Name({ firstName, lastName }) {
  console.log("Componenet Re-render");
  return (
    <div>
      First Name: {firstName} & Last Name: {lastName}
    </div>
  );
}

export default memo(Name);
