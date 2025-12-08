import { useState } from "react";

function ExampleRadioBtn() {
  const [method, setMethod] = useState("");
  const payments = [
    { id: "UPI", info: "Instant transfer via UPI apps." },
    { id: "Card", info: "Pay using credit or debit card." },
    { id: "COD", info: "Pay when the order arrives." },
  ];
  return (
    <div>
      {payments.map((item) => {
        return (
          <div key={item.id}>
            <input
              type="radio"
              id={item.id}
              name="method"
              value={item.id}
              checked={method === item.id}
              onChange={(e) => setMethod(e.target.value)}
            />
            <label htmlFor={item.id}>{item.id}</label>
          </div>
        );
      })}
      <>
        {payments.map((item) => {
          if (item.id === method) {
            return (
              <>
                <p>Mode of Payment: {method}</p>
                <p>Details: {item.info}</p>;
              </>
            );
          }
        })}
      </>
    </div>
  );
}

export default ExampleRadioBtn;
