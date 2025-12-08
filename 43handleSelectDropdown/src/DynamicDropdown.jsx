import { useState } from "react";

function DynamicDropdown() {
  const [language, setLanguage] = useState("");
  const languages = [
    "HTML",
    "CSS",
    "Javascript",
    "Java",
    "Python",
    "Rust",
    "PHP",
  ];

  console.log("Language: ", language);
  return (
    <div>
      <label htmlFor="language">Languages: </label>
      <select
        id="language"
        value={language}
        onChange={(e) => setLanguage(e.target.value)}
      >
        <option value="">---Select Below---</option>

        {languages.map((item) => {
          return (
            <option key={item} value={item.toLowerCase()}>
              {item}
            </option>
          );
        })}
      </select>
    </div>
  );
}

export default DynamicDropdown;
