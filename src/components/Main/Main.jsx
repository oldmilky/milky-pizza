import React from "react";
import "./Main.css";
import Cards from "../Cards/Cards";

function Main() {
  return (
    <div className="main">
      <div className="main__content">
        <h1 className="main__title">Все пиццы</h1>
        <Cards />
        <div className="main__pagination">
          <button className="main__number">1</button>
          <button className="main__number">2</button>
          <button className="main__number">3</button>
        </div>
      </div>
    </div>
  );
}

export default Main;
