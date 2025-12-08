import { useState } from "react";

function SingleCheckbox() {
  const [isChecked, setIsChecked] = useState(false);

  function handleChange(e) {
    // console.log(e.target.checked);
    // const { checked } = e.target;
    setIsChecked(e.target.checked);
  }
  return (
    <div>
      <h1>Single Checkbox</h1>
      <input
        type="checkbox"
        id="termCondition"
        checked={isChecked}
        onChange={handleChange}
      />
      <label htmlFor="termCondition">Terms & Condition</label>
    </div>
  );
}

export default SingleCheckbox;
