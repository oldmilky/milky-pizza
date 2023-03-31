import debounce from "lodash.debounce";
import { useCallback, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import search from "../../images/header__search_logo.svg";
import { setSearchValue } from "../../redux/slices/filterSlice";
import "./Search.css";

function Search() {
  const dispatch = useDispatch();
  const [value, setValue] = useState("");
  const inputRef = useRef();

  const onClickClear = () => {
    dispatch(setSearchValue(value));
    setValue("");
    inputRef.current.focus();
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const updateSearchValue = useCallback(
    debounce((str) => {
      dispatch(setSearchValue(str));
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
