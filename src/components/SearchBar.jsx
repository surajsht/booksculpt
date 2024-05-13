import { UseCustomContext } from "../context/CustomContext";

const SearchBar = () => {
  let { currentBooks, setSearchedBookResult, searchQuery, setSearchQuery } =
    UseCustomContext();

  const searchBarForm = (e) => {
    e.preventDefault();
  };

  const searchBook = (e) => {
    setSearchQuery(e.target.value);

    if (e.target.value === "") {
      setSearchedBookResult([]);
      return;
    }

    let searchBookList = currentBooks.filter((item) => {
      if (item.name.includes(e.target.value)) {
        return item;
      }
    });
    setSearchedBookResult(searchBookList);
  };

  return (
    <form className="navbar-form" onSubmit={(e) => searchBarForm(e)}>
      <input
        type="text"
        value={searchQuery}
        placeholder="Search a book title"
        onChange={(e) => searchBook(e)}
      />
    </form>
  );
};

export default SearchBar;
