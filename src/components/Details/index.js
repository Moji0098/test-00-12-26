import { IMDB } from "../../assets/icons";
import Loading from "../Loading";
import "./style.css";

function Details(props) {
  const { details, loading } = props;
  const actorList = details?.actorList;
  const image = details?.image;
  const fullTitle = details?.fullTitle;
  const genres = details?.genres;
  const contentRating = details?.contentRating;
  const imDbRating = details?.imDbRating;
  const directors = details?.directors;
  const countries = details?.countries;
  const languages = details?.languages;
  const writerList = details?.writerList;
  const plot = details?.plot;

  const renderDetails = () => {
    if (loading) {
      return <Loading />;
    } else if (!loading && details) {
      return (
        <div className="details-parent">
          <section className="section-1">
            <img src={image} className="movie-cover" />
            <div className="movie-section-1-right">
              <div className="movie-section-1-title">{fullTitle}</div>
              <div className="movie-section-1-row-2">
                <div className="movie-section-1-box">
                  <span className="movie-label">Genre:&nbsp; </span>
                  <span className="movie-value">{genres}</span>
                </div>
                {contentRating && (
                  <>
                    <span className="vertical-line">&nbsp; | &nbsp;</span>
                    <div className="movie-section-1-box content-rating-box">
                      <span className="movie-value content-rating">
                        {contentRating}
                      </span>
                    </div>
                  </>
                )}
                <span className="vertical-line">&nbsp; | &nbsp;</span>
                <div className="movie-section-1-box">
                  <span className="movie-value imdb-rating">{imDbRating}</span>
                  &nbsp;
                  <img src={IMDB} className="movie-section-1-imdb" alt="imdb" />
                </div>
              </div>
              <div className="seprator"></div>
              <div className="movie-section-1-row-3">
                <span className="movie-label">Actor list:&nbsp;</span>
                {actorList
                  ?.filter((_, i) => i < 3)
                  .map((actor, i) => {
                    const { asCharacter } = actor;
                    return (
                      <span className="movie-value">
                        {asCharacter +
                          `${i === actorList.length - 1 ? " ..." : ", "}`}
                        &nbsp;
                      </span>
                    );
                  })}
              </div>
              <div className="movie-section-1-row-4">
                <span className="movie-label">Directors: &nbsp;</span>
                <span className="movie-value">{directors}</span>
              </div>
              <div className="movie-section-1-row-4">
                <span className="movie-label">Countries: &nbsp;</span>
                <span className="movie-value">{countries}</span>
              </div>
              <div className="movie-section-1-row-4">
                <span className="movie-label">Languages: &nbsp;</span>
                <span className="movie-value">{languages}</span>
              </div>
              <div className="movie-section-1-row-3">
                <span className="movie-label">Actor list: &nbsp;</span>
                {writerList
                  ?.filter((_, i) => i < 3)
                  .map((writer, i) => {
                    const { name } = writer;
                    return (
                      <span className="movie-value">
                        {name +
                          `${i === writerList.length - 1 ? " ..." : ", "}`}
                        &nbsp;
                      </span>
                    );
                  })}
              </div>
            </div>
          </section>
          <div className="seprator"></div>
          <section className="section-2">
            <div className="movie-section-2-row-1">
              <span className="movie-label">Plot: &nbsp;</span>
              <span className="movie-value">{plot}</span>
            </div>
          </section>
        </div>
      );
    } else return <p className="no-results">Nothing to show</p>;
  };
  return <div className="search-list-parent">{renderDetails()}</div>;
}

export default Details;
