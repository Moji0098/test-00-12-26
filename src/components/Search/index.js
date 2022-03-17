import { Link } from "react-router-dom";
import "./style.css";

function Search(props) {
  const { onChange, onKeyDown, value, search } = props;
  return (
    <div className="search-parent">
      <input
        onKeyDown={onKeyDown}
        onChange={onChange}
        value={value}
        className="input"
        placeholder="Search..."
      />
      <button className="button" onClick={search}>
        Search
      </button>
      <Link to="/favorites" className="link">
        Favorites
      </Link>
    </div>
  );
}

export default Search;
