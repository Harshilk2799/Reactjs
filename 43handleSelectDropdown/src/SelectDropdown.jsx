import { useState } from "react";

function SelectDropdown() {
  const [paymentMode, setPaymentMode] = useState("");
  console.log("Pay: ", paymentMode);
  return (
    <div>
      <label htmlFor="paymentMethods">Payment Methods: </label>
      <select
        id="paymentMethods"
        value={paymentMode}
        onChange={(e) => setPaymentMode(e.target.value)}
      >
        <option value="">---Select Below---</option>
        <option value="upi">UPI</option>
        <option value="cod">COD</option>
        <option value="card">Card</option>
      </select>
    </div>
  );
}

export default SelectDropdown;
