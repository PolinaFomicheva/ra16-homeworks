import { useState, useEffect } from "react";

export default function useJsonFetch(url, opts = null) {
  const [data, setData] = useState();
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      try {
        const response = await fetch(url, opts);
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        const dataList = await response.json();
        setData(dataList);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);
  return [data, error, loading];
}
