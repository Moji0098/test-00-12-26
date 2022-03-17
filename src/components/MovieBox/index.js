import { memo, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { GoldenStar, GrayStar } from "../../assets/icons";
import { checkArr } from "../../utils";
import "./style.css";

function MovieBox(props) {
  const { description, id, image, title } = props?.movie;
  const [selected, setSelected] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const init = async () => {
      const favorites_list = await JSON.parse(
        localStorage.getItem("favorites_list")
      );

      if (
        checkArr(favorites_list) &&
        favorites_list.find((movie) => movie?.id === id)
      ) {
        setSelected(true);
      } else {
        setSelected(false);
      }
    };
    init();
  }, []);

  const addFavorite = async (e) => {
    e.stopPropagation();

    try {
      const favorites_list =
        (await JSON.parse(localStorage.getItem("favorites_list"))) || [];

      const existMovie =
        checkArr(favorites_list) &&
        favorites_list.find((movie) => movie?.id === id);

      if (existMovie) {
        const newFav = favorites_list?.filter((movie) => movie?.id !== id);
        localStorage.setItem("favorites_list", JSON.stringify(newFav));
        setSelected(false);
      } else {
        favorites_list.push({
          id,
          title,
          image,
          description,
        });
        localStorage.setItem("favorites_list", JSON.stringify(favorites_list));
        setSelected(true);
      }
    } catch {
      console.log("err");
    }
  };

  const cardOnClick = (e) => {
    e.stopPropagation();
    navigate(`/movie-details/${id}`);
  };

  return (
    <div
      className="movie-parent"
      style={{ backgroundImage: `url(${image})` }}
      onClick={cardOnClick}
    >
      <img
        src={selected ? GoldenStar : GrayStar}
        className="movie-fav"
        alt="fav"
        onClick={addFavorite}
      />
      <div className="movie-info">
        <h6 className="movie-title">{title}</h6>
        <span className="movie-desc">{description}</span>
      </div>
    </div>
  );
}

export default memo(MovieBox);
