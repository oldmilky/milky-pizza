import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCategoryId, setSort } from "../../redux/slices/filterSlice";
import "./Categories.css";

function Categories() {
  const dispatch = useDispatch();

  const sort = useSelector(state => state.filter.sort);

  const categoryId = useSelector(state => state.filter.categoryId);

  const categories = ["Все", "Мясные", "Вегетарианская", "Гриль", "Острые"];

  const [activePopup, setActivePopup] = useState(false);

  const sortList = [
    { name: "популярности ↑", sortProperty: "rating" },
    { name: "популярности ↓", sortProperty: "-rating" },
    { name: "цене ↑", sortProperty: "price" },
    { name: "цене ↓", sortProperty: "-price" },
    { name: "алфавиту", sortProperty: "title" },
  ];

  const onClickSelected = obj => {
    dispatch(setSort(obj));
    setActivePopup(false);
  };

  const onClickCategory = id => {
    dispatch(setCategoryId(id));
  };

  const sortRef = useRef();

  useEffect(() => {
    const handleClickOutside = event => {
      if (!event.composedPath().includes(sortRef.current)) {
        setActivePopup(false);
      }
    };
    document.body.addEventListener("click", handleClickOutside);
    return () => {
      document.body.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className="categories">
      <div className="categories__container">
        <div className="categories__buttons">
          {categories.map((value, index) => (
            <button
              key={index}
              onClick={() => onClickCategory(index)}
              className={
                categoryId === index
                  ? "categories__button-active"
                  : "categories__button"
              }
            >
              {value}
            </button>
          ))}
        </div>
        <div
          className="categories__wrap"
          onClick={() => setActivePopup(!activePopup)}
          ref={sortRef}
        >
          <p className="categories__sort">Сортировка по:</p>
          <p className="categories__filter">{sort.name}</p>
        </div>
        {activePopup && (
          <div className="categories-modal">
            <div className="categories-modal__content">
              {sortList.map((obj, index) => (
                <button
                  key={index}
                  className={
                    sort.sortProperty === obj.sortProperty
                      ? "categories-modal__button-active"
                      : "categories-modal__button"
                  }
                  onClick={() => onClickSelected(obj)}
                >
                  {obj.name}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Categories;
