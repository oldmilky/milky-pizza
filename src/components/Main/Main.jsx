import React from "react";
import "./Main.css";
import Cards from "../Cards/Cards";
// import Pagination from "../Pagination/Pagination";

function Main({searchValue, setSearchValue}) {
  return (
    <div className="main">
      <div className="main__content">
        <Cards searchValue={searchValue} setSearchValue={setSearchValue} />
        {/* <Pagination /> */}
      </div>
    </div>
  );
}

export default Main;
