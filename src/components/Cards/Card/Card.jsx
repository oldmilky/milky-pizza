import React, {useState} from "react";
import "../Cards.css";
import pizza from "../../../images/pizza.svg";

function Card({ title, price }) {

  const [count, setCount] = useState(0);

  return (
    <div className="card">
      <div className="card__container">
        <img className="card__image" src={pizza} alt="pizza" />
        <h1 className="card__title">{title}</h1>
        <div className="card__wrapper">
          <button className="card__button-active">Тонкое</button>
          <button className="card__button">Пышное</button>
        </div>
        <div className="card__wrapper">
          <button className="card__button">25 см</button>
          <button className="card__button-active">35 см</button>
          <button className="card__button">45 см</button>
        </div>
        <div className="card__wrap" onClick={() => setCount(count + 1)}>
          <button className="card__add">
            <span className="card__add_plus">+</span>Добавить<span className="card__add_plus">{count}</span>
          </button>
          <p className="card__text">{price}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
