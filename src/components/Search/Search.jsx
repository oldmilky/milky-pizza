import './Search.css';
import search from "../../images/header__search_logo.svg";

function Search() {
  return (
    <div className="search">
      <img className="search__logo" src={search} alt="search" />
      <input
        className="search__input"
        type="text"
        placeholder="Поиск пиццы"
        alt="поиск пиццы"
      />
    </div>
  );
}

export default Search;
