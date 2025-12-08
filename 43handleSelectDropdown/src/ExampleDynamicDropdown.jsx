import { useState } from "react";

function ExampleDynamicDropdown() {
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const data = {
    India: ["Delhi", "Mumbai", "Kolkata", "Bengaluru"],
    USA: ["New York", "Los Angeles", "Chicago"],
    Japan: ["Tokyo", "Osaka", "Kyoto"],
    Germany: ["Berlin", "Munich", "Hamburg"],
  };
  return (
    <div>
      <label htmlFor="country">Country </label>
      <select
        id="country"
        value={selectedCountry}
        onChange={(e) => setSelectedCountry(e.target.value)}
      >
        <option value="">---Select Country---</option>

        {Object.keys(data).map((country) => (
          <option key={country} value={country}>
            {country}
          </option>
        ))}
      </select>

      {selectedCountry && (
        <select
          value={selectedCity}
          onChange={(e) => setSelectedCity(e.target.value)}
        >
          <option value="">---Select City---</option>

          {data[selectedCountry].map((city) => (
            <option key={city} value={city}>
              {city}
            </option>
          ))}
        </select>
      )}
      <p>Country: {selectedCountry}</p>
      <p>City: {selectedCity}</p>
    </div>
  );
}

export default ExampleDynamicDropdown;
