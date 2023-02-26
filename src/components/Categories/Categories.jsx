import { useState } from "react";
import "./Categories.css";

function Categories() {
  const [activeIndex, setActiveIndex] = useState(0);

  const categories = ["Все", "Мясные", "Вегетарианская", "Гриль", "Острые"];

  const [activePopup, setActivePopup] = useState(false);

  const sort = ["Популярности", "Цене", "Алфавиту"];

  const [selectedSort, setSelectedSort] = useState(0);

  const onClickSelected = (index) => {
    setSelectedSort(index)
    setActivePopup(false);
  }

  return (
    <div className="categories">
      <div className="categories__container">
        <div className="categories__buttons">
          {categories.map((value, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={
                activeIndex === index
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
          <p className="categories__filter">{sort[selectedSort]}</p>
        </div>
        {activePopup && (
          <div className="categories-modal">
            <div className="categories-modal__content">
              {sort.map((name, index) => (
                <button
                  key={index}
                  className={
                    selectedSort === index
                      ? "categories-modal__button-active"
                      : "categories-modal__button"
                  }
                  onClick={() => onClickSelected(index)}
                >
                  {name}
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
