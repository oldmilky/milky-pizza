import "./Cards.css";

function CardEmpty() {
  return (
    <div className="cardempty">
      <h2 className="cardempty__title">Произошла ошибка :c</h2>
      <p className="cardempty__subtitle">
        К сожалению, не удалось получить пиццы.
      </p>
      <p className="cardempty__subtitle">
        Попробуйте повторить попытку позже.
      </p>
    </div>
  );
}

export default CardEmpty;
