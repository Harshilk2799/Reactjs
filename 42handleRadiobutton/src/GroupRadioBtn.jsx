import { useState } from "react";

function GroupRadioBtn() {
  const [gender, setGender] = useState("");
  const genders = ["male", "female", "other"];
  return (
    <div>
      {genders.map((item) => {
        return (
          <div key={item}>
            <input
              type="radio"
              id={item}
              name="gender"
              value={item}
              checked={gender === item}
              onChange={(e) => setGender(e.target.value)}
            />
            <label htmlFor={item}>{item}</label>
          </div>
        );
      })}
    </div>
  );
}

export default GroupRadioBtn;
