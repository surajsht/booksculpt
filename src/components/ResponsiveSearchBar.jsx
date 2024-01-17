import SearchBar from "./SearchBar";
import { UseCustomContext } from "../context/CustomContext";
import CloseIcon from "../assets/close.svg";

const ResponsiveSearchBar = () => {
  let { activeSearchBar, setActiveSearchBar } = UseCustomContext();

  const closeSearchBar = () => {
    setActiveSearchBar(false);
  };

  return (
    <div className={`search-bar ${activeSearchBar ? "active" : ""}`}>
      <button className="search-bar-close" onClick={closeSearchBar}>
        <img src={CloseIcon} alt="close-button" />
      </button>
      <SearchBar />
    </div>
  );
};

export default ResponsiveSearchBar;
