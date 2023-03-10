import "./Search.css";
import search from "../../images/header__search_logo.svg";
import { useCallback, useContext, useRef, useState } from "react";
import { SearchContext } from "../../App";
import debounce from "lodash.debounce";

function Search() {
  const { setSearchValue } = useContext(SearchContext);
  const [value, setValue] = useState("");
  const inputRef = useRef();

  const onClickClear = () => {
    setSearchValue("");
    setValue("");
    inputRef.current.focus();
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const updateSearchValue = useCallback(
    debounce((str) => {
      setSearchValue(str);
    }, 150),
    []
  );

  const onChangeInput = (event) => {
    setValue(event.target.value);
    updateSearchValue(event.target.value);
  };

  return (
    <div className="search">
      <div className="search__container">
        <img className="search__logo" src={search} alt="search" />
        <input
          ref={inputRef}
          value={value}
          onChange={onChangeInput}
          className="search__input"
          type="text"
          placeholder="Поиск пиццы"
        />
      </div>
      {value && (
        <p className="search__cancel" onClick={onClickClear}>
          x
        </p>
      )}
    </div>
  );
}

export default Search;
