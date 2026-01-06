import { useState, useEffect, useEffectEvent } from "react";

function AutoSaveForm() {
  const [formData, setFormData] = useState({ name: "", email: "" });

  const formSave = useEffectEvent(() => {
    console.log("DATA: ", formData);
  });

  useEffect(() => {
    const interval = setInterval(() => {
      formSave();
    }, 3000);
    return () => clearInterval(interval);
  }, []);
  return (
    <form>
      <div>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input
          type="text"
          id="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
      </div>
      <input type="submit" value="Save" />
    </form>
  );
}

export default AutoSaveForm;
