import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { UseCustomContext } from "../context/CustomContext";

const AddNewPopup = () => {
  let { activeAddPopup, setActiveAddPopup } = UseCustomContext();

  const closeAddPopup = () => {
    setActiveAddPopup(false);
  };

  return (
    <div
      className={`add-new-popup-container ${activeAddPopup ? "active" : ""}`}
    >
      <div className="new-popup-content">
        <h2 className="popup-title">Add a book</h2>

        <form className="popup-form">
          <div className="popup-form-item">
            <label htmlFor="name"> book Name </label>
            <input type="text" />
          </div>

          <div className="popup-form-item">
            <label htmlFor="author"> author name </label>
            <input type="text" />
          </div>

          <div className="popup-form-item">
            <label htmlFor="description"> add a description </label>
            <textarea></textarea>
          </div>

          <div className="popup-form-item">
            <label htmlFor="image"> Image </label>
            <input type="text" placeholder="Enter image url" />
          </div>

          <button type="submit" className="popup-btn-submit">
            Add Book
          </button>
        </form>

        <button className="popup-btn-close" onClick={closeAddPopup}>
          <FontAwesomeIcon icon={faXmark} />
        </button>
      </div>
    </div>
  );
};

export default AddNewPopup;
