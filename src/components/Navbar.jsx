import { UseCustomContext } from "../context/CustomContext";
import { useState, useRef, useEffect } from "react";
import { auth } from "../firebase/FireConfig";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import SearchBar from "./SearchBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faUser,
  faArrowRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  let [userInfo, setUserInfo] = useState(false);

  let { currentUser, setActiveSearchBar } = UseCustomContext();
  let userContainerRef = useRef(null);
  let navigate = useNavigate();

  const handleUserInfo = () => {
    setUserInfo(!userInfo);
  };

  const handleOutsideClick = (e) => {
    if (
      userContainerRef.current &&
      !userContainerRef.current.contains(e.target)
    ) {
      setUserInfo(false);
    }
  };

  const signOutUser = async () => {
    try {
      await signOut(auth);
      navigate("/");
    } catch (e) {
      console.error(e);
    }
  };

  const openSearchBar = () => {
    setActiveSearchBar(true);
  };

  useEffect(() => {
    window.addEventListener("click", handleOutsideClick);

    return () => window.removeEventListener("click", handleOutsideClick);
  }, []);

  return (
    <nav className="container navbar-container">
      <div className="logo"> Booksculpt </div>

      <SearchBar />

      <button
        type="submit"
        className="responsive-searchbar-icon"
        onClick={openSearchBar}
      >
        <FontAwesomeIcon icon={faMagnifyingGlass} />
      </button>

      <div className="user-info-container">
        <div
          className="user-info"
          onClick={handleUserInfo}
          ref={userContainerRef}
        >
          <FontAwesomeIcon icon={faUser} />
          {currentUser.displayName && <span> {currentUser?.displayName} </span>}
        </div>

        <div
          className={`user-info-option ${userInfo ? "show-info-option" : ""}`}
        >
          <span> {currentUser?.displayName} </span>
          <div className="user-logout" onClick={signOutUser}>
            <FontAwesomeIcon icon={faArrowRightFromBracket} />
            <span> Logout </span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
