import React from "react";
import "./Header.css";
import logo from "../../images/logo.svg";
import cart from "../../images/cart__header.svg";
import { NavLink } from "react-router-dom";
import Search from "../Search/Search";
import { useSelector } from "react-redux";

function Header() {

  const {items, totalPrice} = useSelector(state => state.cart);

  const totalCount = items.reduce((sum, item) => sum + item.count, 0);

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
        <Search />
        <NavLink className="header__link" to="/cart">
          <button className="header__cart">
            {totalPrice} ₽
            <img className="header__cart_logo" src={cart} alt="cart" />
            {totalCount}
          </button>
        </NavLink>
      </div>
    </div>
  );
}

export default Header;
