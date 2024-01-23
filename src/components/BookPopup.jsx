import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPenToSquare,
  faTrash,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { UseCustomContext } from "../context/CustomContext";
import noImage from "../assets/no-image.jpg";

const BookPopup = () => {
  let { currentIndBook, bookPopupActive, setBookPopupActive } =
    UseCustomContext();

  const closeBookPopup = () => {
    setBookPopupActive(false);
  };

  return (
    <div className={`book-popup-container ${bookPopupActive ? "active" : ""}`}>
      <div className="book-popup-content">
        <div className="book-popup-image">
          {currentIndBook?.image ? (
            <img
              src={`${currentIndBook?.image}`}
              alt={`${currentIndBook?.name}`}
            />
          ) : (
            <img src={noImage} alt="no-image" />
          )}
        </div>

        <div className="book-popup-detail">
          <h2 className="book-popup-title"> {`${currentIndBook?.name}`} </h2>
          <span className="book-popup-author">
            {`${currentIndBook?.author}`}
          </span>
          <p className="book-popup-description">{`${currentIndBook?.description}`}</p>

          <div className="book-popup-button-detail">
            <button className="book-btn book-btn-edit">
              <FontAwesomeIcon icon={faPenToSquare} /> Edit
            </button>
            <button className="book-btn book-btn-delete">
              <FontAwesomeIcon icon={faTrash} /> Delete
            </button>
          </div>
        </div>

        <button className="popup-btn-close" onClick={closeBookPopup}>
          <FontAwesomeIcon icon={faXmark} />
        </button>
      </div>
    </div>
  );
};

export default BookPopup;
