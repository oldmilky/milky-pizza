import { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card/Card";
import SkeletonLoader from "./SketelonLoader";
import "./Cards.css";
import Categories from "../Categories/Categories";
import Pagination from "../Pagination/Pagination";
import { SearchContext } from "../../App";
import { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentPage } from "../../redux/slices/filterSlice";

function Cards() {
  const { searchValue } = useContext(SearchContext);

  const categoryId = useSelector((state) => state.filter.categoryId);
  const currentPage = useSelector((state) => state.filter.currentPage);

  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();

  const onChangePage = (number) => {
    dispatch(setCurrentPage(number))
  }

  const sortType = useSelector((state) => state.filter.sort.sortProperty);

  useEffect(() => {
    setIsLoading(true);

    const sortBy = sortType.replace("-", "");
    const order = sortType.includes("-") ? "asc" : "desc";
    const category = categoryId > 0 ? `category=${categoryId}` : "";
    const search = searchValue ? `&search=${searchValue}` : "";

    axios
      .get(
        `https://63fb029b7a045e192b6151ab.mockapi.io/items?page=${currentPage}&limit=4&${category}&sortBy=${sortBy}&order=${order}${search}`
      )
      .then((res) => {
        setItems(res.data);
        setIsLoading(false);
      });

    window.scrollTo(0, 0);
  }, [categoryId, searchValue, sortType.sortProperty, currentPage, sortType]);

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
        id={obj.id}
      />
    ));

  return (
    <>
      <Categories />
      <h1 className="cards__title">Все пиццы</h1>
      <div className="cards">{isLoading ? skeletons : pizzas}</div>
      <Pagination currentPage={currentPage} setCurrentPage={onChangePage} />
    </>
  );
}

export default Cards;
