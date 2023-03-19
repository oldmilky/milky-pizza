import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "../Cards.css";
import pizza from "../../../images/pizza.svg";
import { addItem } from "../../../redux/slices/cartSlice";

function Card({ id, title, price, sizes, types }) {

  const typesName = ["тонкое", "пышное"];

  const [activeType, setActiveType] = useState(0);
  const [activeSize, setActiveSize] = useState(0);

  const dispatch = useDispatch();

  const cartItem = useSelector(state => state.cart.items.find(obj => obj.id === id));

  const addedCount = cartItem ? cartItem.count : 0;

  const onClickAdd = () => {
    const item = {
      id,
      title,
      price,
      type: typesName[activeType],
      size: sizes[activeSize],
    };
    dispatch(addItem(item))
  }

  return (
    <div className="card">
      <div className="card__container">
        <img className="card__image" src={pizza} alt="pizza" />
        <h1 className="card__title">{title}</h1>
        <div className="card__wrapper">
          {types.map((type) => (
            <button
              key={type}
              className={
                activeType === type ? "card__button_active" : "card__button"
              }
              onClick={() => setActiveType(type)}
            >
              {typesName[type]}
            </button>
          ))}
        </div>
        <div className="card__wrapper">
          {sizes.map((size, index) => (
            <button
              key={size}
              className={
                activeSize === index ? "card__button_active" : "card__button"
              }
              onClick={() => setActiveSize(index)}
            >
              {size} см.
            </button>
          ))}
        </div>
        <div className="card__wrap">
          <button className="card__add" onClick={onClickAdd}>
            <span className="card__add_plus">+</span>Добавить
            <span className="card__add_plus">{addedCount > 0 && <p>{addedCount}</p>}</span>
          </button>
          <p className="card__text">{price} ₽</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
