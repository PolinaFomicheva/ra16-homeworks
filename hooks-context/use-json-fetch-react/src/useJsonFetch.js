import { useEffect, useState } from 'react';

export default function useJsonFetch(url, opts) {
  const [data, setData] = useState();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    fetch(url + opts)
      .then((res) => {
        if (!res.ok) {
          setError(res.status);
        }

        return res.json();
      })
      .then((resData) => {
        setData(resData);
        setLoading(false);
      })
      .catch((err) => setError(err));
  }, [url, opts]);

  return [data ? data.status : '', error, loading];
}
