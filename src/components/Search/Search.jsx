import "./Search.css";
import search from "../../images/header__search_logo.svg";
import { useContext } from "react";
import { SearchContext } from "../../App";

function Search() {

  const { searchValue, setSearchValue } = useContext(SearchContext)

  return (
    <div className="search">
      <div className="search__container">
        <img className="search__logo" src={search} alt="search" />
        <input
          value={searchValue}
          onChange={(event) => setSearchValue(event.target.value)}
          className="search__input"
          type="text"
          placeholder="Поиск пиццы"
        />
      </div>
      {
        searchValue && <p className="search__cancel" onClick={() => setSearchValue('')}>x</p>
      }
    </div>
  );
}

export default Search;
