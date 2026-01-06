import { useState, useEffect, useEffectEvent } from "react";

function FetchAPI() {
  const [data, setData] = useState([]);
  const [queryParams, setQueryParams] = useState("");

  const fetchLatestData = useEffectEvent(async () => {
    try {
      const response = await fetch(
        `https://api.example.com/data?${queryParams}`
      );
      const result = await response.json();
      setData(result);
    } catch (error) {
      console.error("API fetch failed:", err);
    }
  });

  useEffect(() => {
    const interval = setInterval(() => {
      fetchLatestData();
    }, 5000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div>
      <p>Data: {JSON.stringify(data)}</p>
      {/* UI to update queryParams */}
      <button onClick={() => setQueryParams("Harshil")}>Load Page 2</button>
    </div>
  );
}

export default FetchAPI;
