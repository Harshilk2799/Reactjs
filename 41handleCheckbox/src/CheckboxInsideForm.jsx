import { useState } from "react";

function CheckboxInsideForm() {
  const [formData, setFormData] = useState({
    email: "",
    tc: false,
  });

  function handleChange(e) {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  }
  function handleSubmit(e) {
    e.preventDefault();
    console.log(formData);
  }
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          name="email"
          placeholder="Enter a email..."
          checked={formData.email}
          onChange={handleChange}
        />
      </div>
      <div>
        <input
          type="checkbox"
          name="tc"
          id="termCondition"
          checked={formData.tx}
          onChange={handleChange}
        />
        <label htmlFor="termCondition">Terms & Condition</label>
      </div>
      <input type="submit" value="Save" />
    </form>
  );
}

export default CheckboxInsideForm;
