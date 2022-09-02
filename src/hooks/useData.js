import { useState, useEffect } from "react";

export default function useData(url) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!data.length) {
      fetchData();
    }
  }, [data]);

  async function fetchData() {
    const response = await fetch("https://api.spacexdata.com/v5/launches");
    const data = await response.json();
    setData(data);
    setLoading(true);
  }

  return [data, loading];
}
