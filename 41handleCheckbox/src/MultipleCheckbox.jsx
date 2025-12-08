import { useState } from "react";

function MultipleCheckbox() {
  const [isHTML, setIsHTML] = useState(false);
  const [isCSS, setIsCSS] = useState(false);
  const [isJs, setIsJs] = useState(false);
  return (
    <div>
      <div>
        <label htmlFor="html">HTML</label>
        <input
          id="html"
          type="checkbox"
          checked={isHTML}
          onChange={(e) => setIsHTML(e.target.checked)}
        />
      </div>
      <div>
        <label htmlFor="css">CSS</label>
        <input
          id="css"
          type="checkbox"
          checked={isCSS}
          onChange={(e) => setIsCSS(e.target.checked)}
        />
      </div>
      <div>
        <label htmlFor="js">JS</label>
        <input
          id="js"
          type="checkbox"
          checked={isJs}
          onChange={(e) => setIsJs(e.target.checked)}
        />
      </div>
    </div>
  );
}

export default MultipleCheckbox;
