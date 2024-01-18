import SearchBar from "./SearchBar";
import { UseCustomContext } from "../context/CustomContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const ResponsiveSearchBar = () => {
  let { activeSearchBar, setActiveSearchBar } = UseCustomContext();

  const closeSearchBar = () => {
    setActiveSearchBar(false);
  };

  return (
    <div className={`search-bar ${activeSearchBar ? "active" : ""}`}>
      <button className="search-bar-close" onClick={closeSearchBar}>
        <FontAwesomeIcon icon={faXmark} />
      </button>
      <SearchBar />
    </div>
  );
};

export default ResponsiveSearchBar;
