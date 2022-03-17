import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Details from "../components/Details";
import Layouts from "../components/Layout";
import { useMovieDetails } from "../controller/useMovieDetails";

function MovieDetails() {
  const params = useParams();
  const { details, loading } = useMovieDetails(params?.id);
  useEffect(() => {}, []);

  return (
    <Layouts>
      <Details details={details} loading={loading} />
    </Layouts>
  );
}

export default MovieDetails;
