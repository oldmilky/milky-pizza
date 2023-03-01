import { useEffect, useState } from "react";
import Card from "./Card/Card";
import SkeletonLoader from "./SketelonLoader";
import "./Cards.css";
import Categories from "../Categories/Categories";
import Pagination from "../Pagination/Pagination";

function Cards({ searchValue, setSearchValue }) {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [categoryId, setCategoryId] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [sortType, setSortType] = useState({
    name: "Популярности ↓",
    sortProperty: "rating",
  });

  useEffect(() => {
    setIsLoading(true);

    const sortBy = sortType.sortProperty.replace("-", "");
    const order = sortType.sortProperty.includes("-") ? "asc" : "desc";
    const category = categoryId > 0 ? `category=${categoryId}` : "";
    const search = searchValue ? `&search=${searchValue}` : "";

    fetch(
      `https://63fb029b7a045e192b6151ab.mockapi.io/items?page=${currentPage}&limit=4&${category}&sortBy=${sortBy}&order=${order}${search}`
    )
      .then((res) => {
        return res.json();
      })
      .then((arr) => {
        setItems(arr);
        setIsLoading(false);
      });
    window.scrollTo(0, 0);
  }, [categoryId, searchValue, sortType.sortProperty, currentPage]);

  const skeletons = [...new Array(4)].map((_, index) => (
    <SkeletonLoader key={index} />
  ));

  const pizzas = items
    .filter((obj) => {
      if (obj.name.toLowerCase().includes(searchValue.toLowerCase())) {
        return true;
      }
      return false;
    })
    .map((obj) => (
      <Card
        key={obj.id}
        title={obj.name}
        price={obj.price}
        sizes={obj.sizes}
        types={obj.types}
      />
    ));

  return (
    <>
      <Categories
        categoryId={categoryId}
        sortType={sortType}
        setCategoryId={(index) => setCategoryId(index)}
        setSortType={(index) => setSortType(index)}
      />
      <h1 className="cards__title">Все пиццы</h1>
      <div className="cards">{isLoading ? skeletons : pizzas}</div>
      <Pagination setCurrentPage={(number) => setCurrentPage(number)} />
    </>
  );
}

export default Cards;
