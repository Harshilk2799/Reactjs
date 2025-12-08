import { useState } from "react";

function BasicRadioBtn() {
  const [gender, setGender] = useState("");
  return (
    <div>
      <div>
        <input
          type="radio"
          id="male"
          name="gender"
          value="Male"
          checked={gender === "Male"}
          onChange={(e) => setGender(e.target.value)}
        />
        <label htmlFor="male">Male</label>
      </div>
      <div>
        <input
          type="radio"
          id="female"
          name="gender"
          value="Female"
          checked={gender === "Female"}
          onChange={(e) => setGender(e.target.value)}
        />
        <label htmlFor="female">Female</label>
      </div>
      <div>
        <input
          type="radio"
          id="other"
          name="gender"
          value="Other"
          checked={gender === "Other"}
          onChange={(e) => setGender(e.target.value)}
        />
        <label htmlFor="other">Other</label>
      </div>
    </div>
  );
}

export default BasicRadioBtn;
