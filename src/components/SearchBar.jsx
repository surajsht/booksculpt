import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const SearchBar = () => {
  return (
    <form className="navbar-form">
      <input type="text" />
      <button type="submit" className="navbar-form-button">
        <FontAwesomeIcon icon={faMagnifyingGlass} />
      </button>
    </form>
  );
};

export default SearchBar;
