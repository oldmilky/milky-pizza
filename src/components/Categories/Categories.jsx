import { useState } from "react";
import "./Categories.css";

function Categories({ categoryId, setCategoryId, sortType, setSortType }) {
  const categories = ["Все", "Мясные", "Вегетарианская", "Гриль", "Острые"];

  const [activePopup, setActivePopup] = useState(false);

  const sortList = [
    { name: "Популярности ↑", sortProperty: "rating" },
    { name: "Популярности ↓", sortProperty: "-rating" },
    { name: "Цене ↑", sortProperty: "price" },
    { name: "Цене ↓", sortProperty: "-price" },
    { name: "Алфавиту", sortProperty: "title" },
  ];

  const onClickSelected = (index) => {
    setSortType(index);
    setActivePopup(false);
  };

  return (
    <div className="categories">
      <div className="categories__container">
        <div className="categories__buttons">
          {categories.map((value, index) => (
            <button
              key={index}
              onClick={() => setCategoryId(index)}
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
        >
          <p className="categories__sort">Сортировка по:</p>
          <p className="categories__filter">{sortType.name}</p>
        </div>
        {activePopup && (
          <div className="categories-modal">
            <div className="categories-modal__content">
              {sortList.map((obj, index) => (
                <button
                  key={index}
                  className={
                    sortType.sortProperty === obj.sortProperty
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
