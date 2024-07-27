import { useEffect, useState } from "react";
 import { fetchDataFromApi3 } from "../utils/fetchData";

const useFetch = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState();
  const [error, setError] = useState();

  useEffect(() => {
    setIsLoading("loading...");
    setData(null);
    setError(null);
    
    fetchDataFromApi3()
      .then((res) => {
        setError(false);
        setIsLoading(false);
         setData(res);
      })
      .catch((err) => {
        setError(true);
        setIsLoading(false);
        console.log(err);
      });
  }, []);

  return { data, isLoading, error };
};

export default useFetch;
