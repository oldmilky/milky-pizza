import "./pages.css";
import Header from "../components/Header/Header";
import { NavLink } from "react-router-dom";

function NotFound() {
  return (
    <>
      <Header />
      <div className="notfound">
        <h1 className="notfound__title">Ничего не найдено :(</h1>
        <NavLink className="notfound__link" to="/">
          <button className="notfound__button">Главная</button>
        </NavLink>
      </div>
    </>
  );
}

export default NotFound;
