import { useEffect, useState } from "react";

const URL = "https://jsonplaceholder.typicode.com/users";
function useFetch() {
  const [data, setData] = useState();
  useEffect(() => {
    async function fetchData() {
      const res = await fetch(URL);
      const resData = await res.json();
      setData(resData);
    }
    fetchData();
  }, []);
  return { data };
}

export default useFetch;
