import Layouts from "../components/Layout";
import Search from "../components/Search";
import SearchList from "../components/SearchList";
import { useSearch } from "../controller/useSearch";

function Home() {
  const { value, results, loading, search, onChange, onKeyDown } = useSearch();

  return (
    <Layouts>
      <Search
        onChange={onChange}
        value={value}
        search={search}
        onKeyDown={onKeyDown}
      />
      <SearchList results={results} loading={loading} />
    </Layouts>
  );
}

export default Home;
