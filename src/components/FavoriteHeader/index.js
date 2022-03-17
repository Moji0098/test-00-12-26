import { Link } from "react-router-dom";
import "./style.css";

function FavoriteHeader() {
  return (
    <div className="favorite-head">
      <Link to="/" className="home-link">
        Home
      </Link>
      <h4>Favorite List</h4>
    </div>
  );
}

export default FavoriteHeader;
