import { useEffect, useState } from "react";

const useFetch = (entity) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);

  const getData = async () => {
    const res = await entity;
    if (res.status === 200) {
      setTimeout(() => {
        setLoading(false);
        setData(res.data.results);
      }, 5000);
    } else {
      setLoading(false);
      setData(null);
    }
  };

  useEffect(() => {
    getData();
  }, [entity]);
  return { loading, data };
};

export default useFetch;
