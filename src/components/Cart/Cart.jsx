import { NavLink } from "react-router-dom";
import "./Cart.css";
import cart from "../../images/cart.svg";
import trash from "../../images/trash.svg";
import CartItem from "./CartItem";
import { useSelector, useDispatch } from "react-redux";
import { clearItems } from "../../redux/slices/cartSlice";
import CartEmpty from "./CartEmpty";

function Cart() {

  const dispatch = useDispatch();

  // const items = useSelector(state => state.cart.items);
  const {items, totalPrice} = useSelector(state => state.cart);

  const onClickClear = () => {
    dispatch(clearItems())
  }

  const totalCount = items.reduce((sum, item) => sum + item.count, 0);

  if (!totalPrice) {
    return <CartEmpty />;
  }

  return (
    <div className="cart">
      <div className="cart__content">
        <div className="cart__container">
          <div className="cart__wrapper">
            <img className="cart__image_cart" src={cart} alt="cart" />
            <h1 className="cart__title">Корзина</h1>
          </div>
          <div className="cart__wrapper" onClick={onClickClear}>
            <img className="cart__image_trash" src={trash} alt="trash" />
            <h1 className="cart__title_trash">Очистить корзину</h1>
          </div>
        </div>
        <div className="cart-menu">
          
          {items.map((obj) => (
            <CartItem key={obj.id} {...obj} />
          ))}
          
        </div>
        <div className="cart-order">
          <div className="cart-order__wrap">
            <p className="cart-order__title">
              Всего пицц: <span className="cart-order__span-back">{totalCount} шт.</span>
            </p>
            <NavLink className="cart__link" to="/">
              <button className="cart-order__button-back">
                {"< Вернуться назад"}
              </button>
            </NavLink>
          </div>
          <div className="cart-order__wrap">
            <p className="cart-order__title">
              Сумма заказа: <span className="cart-order__span">{totalPrice} ₽</span>
            </p>
            <button className="cart-order__button">Оплатить сейчас</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
