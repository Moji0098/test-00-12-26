import { useEffect, useState } from "react";
import MovieBox from "../MovieBox";
import "./style.css";

function FavoriteList() {
  const [favList, setFavList] = useState([]);
  const favorites_list = JSON.parse(localStorage.getItem("favorites_list"));

  useEffect(() => {
    setFavList(favorites_list);
  }, [favorites_list]);

  const renderCard = () => {
    if (Array.isArray(favList) && favList.length > 0) {
      return favList.map((movie) => {
        const { id } = movie;
        return <MovieBox key={id} movie={movie} />;
      });
    } else return <p className="no-favlist">Favorite list is empty</p>;
  };
  return <div className="favorite-list-parent">{renderCard()}</div>;
}

export default FavoriteList;
