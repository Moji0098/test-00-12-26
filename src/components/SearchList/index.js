import MovieBox from "../MovieBox";
import Loading from "../Loading";
import "./style.css";

function Search(props) {
  const { results, loading } = props;
  const renderCard = () => {
    if (loading) {
      return <Loading />;
    } else if (!loading && Array.isArray(results) && results.length > 0) {
      return results.map((movie) => {
        const { id } = movie;
        return <MovieBox key={id} movie={movie} />;
      });
    } else return <p className="no-results">Nothing to show</p>;
  };
  return <div className="search-list-parent">{renderCard()}</div>;
}

export default Search;
