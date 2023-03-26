import pizza from "../../images/pizza.svg";
import "./Cart.css";
import { useDispatch } from "react-redux";
import { addItem, minusItem, removeItem } from "../../redux/slices/cartSlice";

function CartItem({ id, title, type, price, count, size }) {
  const dispatch = useDispatch();

  const onClickPlus = () => {
    dispatch(
      addItem({
        id,
      })
    );
  };

  const onClickMinus = () => {
    dispatch(minusItem(id));
  };

  const onClickRemove = () => {
    dispatch(removeItem(id));
  };

  return (
    <div className="cart-menu__container">
      <div className="cart-menu__wrap">
        <img className="cart-menu__image" src={pizza} alt="pizza" />
        <div className="cart-menu__wrapper">
          <h2 className="cart-menu__title">{title}</h2>
          <p className="cart-menu__subtitle">{type}, {size}см</p>
        </div>
      </div>
      <div className="cart-menu__wrap">
        <div className="cart-menu__minus" onClick={onClickMinus}>
          -
        </div>
        <p className="cart-menu__count">{count}</p>
        <div className="cart-menu__plus" onClick={onClickPlus}>
          +
        </div>
      </div>
      <p className="cart-menu__price">{price * count} ₽</p>
      <div className="cart-menu__cancel" onClick={onClickRemove}>x</div>
    </div>
  );
}

export default CartItem;
