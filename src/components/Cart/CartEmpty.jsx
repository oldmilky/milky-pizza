import "./Cart.css";

function CartEmpty() {
  return (
    <div className="cartempty">
      <h2 className="cartempty__title">Корзина пустая :c</h2>
      <p className="cartempty__subtitle">
        Вероятней всего, вы еще не выбрали пиццу.
      </p>
      <p className="cartempty__subtitle">
        Для того, чтобы заказать пиццу, перейди на главную страницу.
      </p>
      <button className="cartempty__button">На главную</button>
    </div>
  );
}

export default CartEmpty;
