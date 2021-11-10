import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);
  const fetchData = (url) => {
    fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw Error("could not fetch data from resource");
        }
        return res.json();
      })
      .then((data) => {
        setError(null);
        setData(data);
      })
      .catch((err) => {
        setIsPending(false);
        setError(err.message);
      });
  };
  useEffect(() => {
    setTimeout(() => {
      fetchData(url);
      setIsPending(false);
    }, 3000);

    /*****FIXME: dont use setTimeout in real project .here i am using just for checking loading is working or not****** */
  }, [url]);

  //return value for custom hooks

  return { data, isPending, error };
};

export default useFetch;
