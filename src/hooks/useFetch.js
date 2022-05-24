import { useEffect, useState, useCallback } from "react";

const useFetch = (entity) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const getData = useCallback(async () => {
    const res = await entity;
    if (res.status === 200) {
      setLoading(false);
      setData(res.data.results);
      setError(false);
    } else {
      setLoading(false);
      setData(null);
      setError(true);
    }
  }, [entity]);

  useEffect(() => {
    getData();
  }, [getData]);

  return { loading, data, error };
};

export default useFetch;
