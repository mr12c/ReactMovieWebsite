import { useEffect, useState } from "react";
 import { fetchDataFromApi4 } from "../utils/fetchData";

const useFetch2 = (param) => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState();
  const [error, setError] = useState();

  useEffect(() => {
    setIsLoading("loading...");
    setData(null);
    setError(null);
    
    fetchDataFromApi4(param)
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
  }, [param]);

  return { data, isLoading, error };
};

export default useFetch2;
