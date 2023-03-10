import ReactPaginate from "react-paginate";
import "./Pagination.css";

function Pagination({ currentPage, setCurrentPage }) {
  return (
    <>
      <ReactPaginate
        className="pagination"
        breakLabel="..."
        nextLabel=">"
        onPageChange={(event) => setCurrentPage(event.selected + 1)}
        pageRangeDisplayed={4}
        pageCount={3}
        previousLabel="<"
        forcePage={currentPage -1}
        renderOnZeroPageCount={null}
      />
    </>
  );
}

export default Pagination;
