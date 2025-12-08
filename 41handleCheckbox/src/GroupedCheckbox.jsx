import { useState } from "react";

function GroupedCheckbox() {
  const [language, setLanguage] = useState({
    html: false,
    css: false,
    js: false,
  });

  function handleChange(e) {
    const key = e.target.name;
    const { checked } = e.target;
    setLanguage((prevState) => {
      return { ...prevState, [key]: checked };
    });
  }
  return (
    <div>
      <div>
        <label htmlFor="html">HTML</label>
        <input
          id="html"
          type="checkbox"
          name="html"
          checked={language.html}
          //   onChange={(e) => setLanguage({ ...language, html: e.target.checked })}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="css">CSS</label>
        <input
          id="css"
          type="checkbox"
          name="css"
          checked={language.css}
          //   onChange={(e) => setLanguage({ ...language, css: e.target.checked })}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="js">JS</label>
        <input
          id="js"
          type="checkbox"
          name="js"
          checked={language.js}
          //   onChange={(e) => setLanguage({ ...language, js: e.target.checked })}
          onChange={handleChange}
        />
      </div>
    </div>
  );
}

export default GroupedCheckbox;
