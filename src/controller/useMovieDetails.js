import axios from "axios";
import { useEffect, useState } from "react";
// api
import { baseURL, MOVIE_DETAIL } from "./../api";

export function useMovieDetails(id) {
  const [loading, setLoading] = useState(false);
  const [details, setDetails] = useState(null);
  const _getDetails = () => {
    try {
      setLoading(true);
      axios.get(`${baseURL}${MOVIE_DETAIL}${id}`).then((res) => {
        const data = res.data;
        setDetails(data);
        setLoading(false);
      });
    } catch (e) {
      setLoading(false);
    }
  };

  useEffect(() => {
    _getDetails();
  }, []);

  return { loading, details, _getDetails };
}
