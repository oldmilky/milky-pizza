import Main from "../components/Main/Main";

function HomePage({searchValue, setSearchValue}) {
  return (
    <>
      <Main searchValue={searchValue} setSearchValue={setSearchValue} />
    </>
  );
}

export default HomePage;
