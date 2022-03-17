import FavoriteList from "../components/FavoriteList";
import FavoriteHeader from "../components/FavoriteHeader";
import Layouts from "../components/Layout";

function Favorites() {
  return (
    <Layouts>
      <FavoriteHeader />
      <FavoriteList />
    </Layouts>
  );
}

export default Favorites;
