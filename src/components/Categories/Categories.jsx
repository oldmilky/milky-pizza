import React from "react";
import "./Categories.css";

function Categories() {
  return (
    <div className="categories">
      <div className="categories__container">
        <div className="categories__buttons">
          <button className="categories__button">Все</button>
          <button className="categories__button">Мясные</button>
          <button className="categories__button">Вегетарианская</button>
          <button className="categories__button">Гриль</button>
          <button className="categories__button">Острые</button>
        </div>
        <div className="categories__wrap">
          <p className="categories__sort">Сортировка по:</p>
          <p className="categories__filter">Популярные</p>
        </div>
      </div>
    </div>
  );
}

export default Categories;
