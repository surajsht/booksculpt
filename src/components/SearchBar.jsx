import searchIcon from "../assets/search.svg";

const SearchBar = () => {
  return (
    <form className="navbar-form">
      <input type="text" />
      <button type="submit" className="navbar-form-button">
        <img src={searchIcon} alt="search-icon" />
      </button>
    </form>
  );
};

export default SearchBar;
