import { useEffect, useState } from "react";
import Card from "./Card/Card";
import SkeletonLoader from "./SketelonLoader";
import "./Cards.css";
import Categories from "../Categories/Categories";

function Cards() {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [categoryId, setCategoryId] = useState(0);
  const [sortType, setSortType] = useState({
    name: "Популярности ↓",
    sortProperty: "rating",
  });

  useEffect(() => {
    setIsLoading(true);
    fetch(
      `https://63fb029b7a045e192b6151ab.mockapi.io/items?${
        categoryId > 0 ? `category=${categoryId}` : ""
      }&sortBy=${sortType.sortProperty.replace("-", "")}&order=${
        sortType.sortProperty.includes("-") ? "asc" : "desc"
      }`
    )
      .then((res) => {
        return res.json();
      })
      .then((arr) => {
        setItems(arr);
        setIsLoading(false);
      });
    window.scrollTo(0, 0);
  }, [categoryId, sortType.sortProperty]);

  return (
    <>
      <Categories
        categoryId={categoryId}
        sortType={sortType}
        setCategoryId={(index) => setCategoryId(index)}
        setSortType={(index) => setSortType(index)}
      />
      <h1 className="cards__title">Все пиццы</h1>
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
    </>
  );
}

export default Cards;
