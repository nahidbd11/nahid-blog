import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);
  const controller = new AbortController();
  const signal = controller.signal;
  const fetchData = (url) => {
    fetch(url, { signal })
      .then((res) => {
        if (!res.ok) {
          throw Error("could not fetch data from resource");
        }
        return res.json();
      })
      .then((data) => {
        setError(null);
        setData(data);
        console.log(signal);
      })
      .catch((err) => {
        if (err.name === "AbortError") {
          console.log("fetch aborted");
        } else {
          setIsPending(false);
          setError(err.message);
        }
      });
  };
  useEffect(() => {
    setTimeout(() => {
      fetchData(url);
      setIsPending(false);
    }, 1000);

    /*****FIXME: dont use setTimeout in real project .here i am using just for checking loading is working or not****** */

    return () => {
      controller.abort();
    };
  }, [url]);

  //return value for custom hooks

  return { data, isPending, error };
};

export default useFetch;
