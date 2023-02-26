import React from "react";
import "./Header.css";
import logo from "../../images/logo.svg";
import search from "../../images/header__search_logo.svg";
import cart from "../../images/cart.svg";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <div className="header__content">
        <div className="header__container">
          <NavLink className="header__link" to="/">
            <img className="header__logo" src={logo} alt="header" />
          </NavLink>
          <div className="header__wrapper">
            <p className="header__title">MILKY PIZZA</p>
            <p className="header__subtitle">Лучшая пицца разработчика</p>
          </div>
        </div>
        <div className="header__input">
          <img className="header__search_logo" src={search} alt="search" />
          <input
            className="header__search"
            type="text"
            placeholder="Поиск пиццы"
            alt="поиск пиццы"
          />
        </div>
        <button className="header__cart">
          3000 ₽
          <img className="header__cart_logo" src={cart} alt="cart" />
          10
        </button>
      </div>
    </div>
  );
}

export default Header;
