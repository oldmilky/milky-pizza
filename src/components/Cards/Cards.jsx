import { useEffect, useState } from "react";
import Card from "./Card/Card";
import SkeletonLoader from "./SketelonLoader";
import "./Cards.css";

function Cards() {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("https://63fb029b7a045e192b6151ab.mockapi.io/items")
      .then((res) => {
        return res.json();
      })
      .then((arr) => {
        setItems(arr);
        setIsLoading(false);
      });
  }, []);

  return (
    <div className="cards">
      {isLoading
        ? [...new Array(4)].map((_, index) => <SkeletonLoader key={index} />)
        : items.map((obj) => (
            <Card
              key={obj.id}
              title={obj.name}
              price={obj.price}
              sizes={obj.sizes}
              types={obj.types}
            />
          ))}
    </div>
  );
}

export default Cards;
