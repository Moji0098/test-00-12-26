import axios from "axios";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
//
import { baseURL, SEARCH } from "./../api";

export function useSearch() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [value, setValue] = useState("");
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState([]);

  const search = () => {
    searchParams.set("search", value);
    setSearchParams(searchParams);
  };

  const _callback = async () => {
    try {
      const movie = searchParams.get("search");
      if (movie && !value) setValue(movie);
      if (!movie) return;
      setLoading(true);
      axios.get(`${baseURL}${SEARCH}${movie}`).then((res) => {
        const results = res.data.results;
        console.log("res", results);
        setResults(results);
        setLoading(false);
      });
    } catch (e) {
      setLoading(false);
    }
  };

  const onChange = (e) => {
    const { value } = e.target;
    setValue(value);
  };

  const onKeyDown = (e) => {
    if (e.key === "Enter") {
      search();
    }
  };

  useEffect(() => {
    _callback();
  }, [searchParams]);

  return { value, loading, results, search, onChange, onKeyDown };
}
