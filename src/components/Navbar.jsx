import searchIcon from "../assets/search.svg";
import user from "../assets/user.svg";
import logout from "../assets/logout.svg";
import { UseCustomContext } from "../context/CustomContext";
import { useState } from "react";

const Navbar = () => {
  let [userInfo, setUserInfo] = useState(false);

  let { currentUser } = UseCustomContext();

  const handleUserInfo = () => {
    setUserInfo(!userInfo);
  };

  return (
    <nav className="container navbar-container">
      <div className="logo"> Booksculpt </div>

      <form className="navbar-form">
        <input type="text" />
        <button type="submit" className="navbar-form-button">
          <img src={searchIcon} alt="search-icon" />
        </button>
      </form>

      <div className="user-info-container">
        {currentUser.displayName && (
          <div className="user-info" onClick={handleUserInfo}>
            <img src={user} alt="user-icon" />
            <span> {currentUser?.displayName} </span>
          </div>
        )}

        <div
          className={`user-info-option ${userInfo ? "show-info-option" : ""}`}
        >
          <span> {currentUser?.displayName} </span>
          <div className="user-logout">
            <img src={logout} alt="logout-icon" />
            <span> Logout </span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
