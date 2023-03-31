import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentPage } from "../../redux/slices/filterSlice";
import { fetchPizza } from "../../redux/slices/pizzaSlice";
import Categories from "../Categories/Categories";
import Pagination from "../Pagination/Pagination";
import Card from "./Card/Card";
import CardEmpty from "./CardEmpty";
import "./Cards.css";
import SkeletonLoader from "./SketelonLoader";

function Cards() {
  const categoryId = useSelector(state => state.filter.categoryId);
  const searchValue = useSelector(state => state.filter.searchValue);
  const currentPage = useSelector(state => state.filter.currentPage);
  const items = useSelector(state => state.pizza.items);
  const status = useSelector(state => state.pizza.status);

  const dispatch = useDispatch();

  const onChangePage = number => {
    dispatch(setCurrentPage(number));
  };

  const sortType = useSelector(state => state.filter.sort.sortProperty);

  const getPizza = async () => {
    const sortBy = sortType.replace("-", "");
    const order = sortType.includes("-") ? "asc" : "desc";
    const category = categoryId > 0 ? `category=${categoryId}` : "";
    const search = searchValue ? `&search=${searchValue}` : "";

    dispatch(fetchPizza({ currentPage, category, sortBy, order, search }));

    window.scrollTo(0, 0);
  };

  useEffect(() => {
    getPizza();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [categoryId, currentPage, dispatch, searchValue, sortType]);

  const skeletons = [...new Array(4)].map((_, index) => (
    <SkeletonLoader key={index} />
  ));

  const pizzas = items
    .filter(obj => {
      if (obj.name.toLowerCase().includes(searchValue.toLowerCase())) {
        return true;
      }
      return false;
    })
    .map(obj => (
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
      {status === "error" ? (
        <CardEmpty />
      ) : (
        <>
          <h1 className="cards__title">Все пиццы</h1>
          <div className="cards">
            {status === "loading" ? skeletons : pizzas}
          </div>
        </>
      )}
      <Pagination currentPage={currentPage} setCurrentPage={onChangePage} />
    </>
  );
}

export default Cards;
