import React from "react";
import Card from "./Card/Card";
import "./Cards.css";

function Cards() {
  return (
    <div className="cards">
      <Card title="Мясная Пицца" price="от 600 ₽" />
      <Card title="Веган Пицца" price="от 300 ₽" />
      <Card title="Гриль Пицца" price="от 500 ₽" />
      <Card title="Острая Пицца" price="от 400 ₽" />
    </div>
  );
}

export default Cards;
