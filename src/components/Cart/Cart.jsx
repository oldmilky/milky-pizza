import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Cart.css";
import cart from "../../images/cart.svg";
import trash from "../../images/trash.svg";
import pizza from "../../images/pizza.svg";

function Cart() {
  const [count, setCount] = useState(1);

  return (
    <div className="cart">
      <div className="cart__content">
        <div className="cart__container">
          <div className="cart__wrapper">
            <img className="cart__image_cart" src={cart} alt="cart" />
            <h1 className="cart__title">Корзина</h1>
          </div>
          <div className="cart__wrapper">
            <img className="cart__image_trash" src={trash} alt="trash" />
            <h1 className="cart__title_trash">Очистить корзину</h1>
          </div>
        </div>
        <div className="cart-menu">
          <div className="cart-menu__container">
            <div className="cart-menu__wrap">
              <img className="cart-menu__image" src={pizza} alt="pizza" />
              <div className="cart-menu__wrapper">
                <h2 className="cart-menu__title">Сырная</h2>
                <p className="cart-menu__subtitle">тонкое тесто, 35см</p>
              </div>
            </div>
            <div className="cart-menu__wrap">
              <div
                className="cart-menu__plus"
                onClick={() => setCount(count + 1)}
              >
                +
              </div>
              <p className="cart-menu__count">{count}</p>
              <div
                className="cart-menu__minus"
                onClick={() => setCount(count - 1)}
              >
                -
              </div>
            </div>
            <p className="cart-menu__price">600 ₽</p>
            <div className="cart-menu__cancel">x</div>
          </div>

          <div className="cart-menu__container">
            <div className="cart-menu__wrap">
              <img className="cart-menu__image" src={pizza} alt="pizza" />
              <div className="cart-menu__wrapper">
                <h2 className="cart-menu__title">Мясная</h2>
                <p className="cart-menu__subtitle">пышное тесто, 25см</p>
              </div>
            </div>
            <div className="cart-menu__wrap">
              <div className="cart-menu__plus">+</div>
              <p className="cart-menu__count">3</p>
              <div className="cart-menu__minus">-</div>
            </div>
            <p className="cart-menu__price">1200 ₽</p>
            <div className="cart-menu__cancel">x</div>
          </div>
        </div>
        <div className="cart-order">
          <div className="cart-order__wrap">
            <p className="cart-order__title">
              Всего пицц: <span className="cart-order__span-back">3 шт.</span>
            </p>
            <NavLink className="cart__link" to="/">
              <button className="cart-order__button-back">
                {"< Вернуться назад"}
              </button>
            </NavLink>
          </div>
          <div className="cart-order__wrap">
            <p className="cart-order__title">
              Сумма заказа: <span className="cart-order__span">1800 ₽</span>
            </p>
            <button className="cart-order__button">Оплатить сейчас</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
