import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { UseCustomContext } from "../context/CustomContext";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../firebase/FireConfig";

const EditBookPopup = () => {
  let [bookName, setBookName] = useState("");
  let [bookAuthor, setBookAuthor] = useState("");
  let [bookDescription, setBookDescription] = useState("");
  let [bookImage, setBookImage] = useState("");

  const {
    activeEditPopup,
    setActiveEditPopup,
    editIndBook,
    currentUser,
    currentBooks,
    IndBookIdx,
  } = UseCustomContext();

  const closeEditPopup = () => {
    setActiveEditPopup(false);
  };

  const bookRef = doc(db, "users", `${currentUser.email}`);

  const updateBook = async (e) => {
    e.preventDefault();
    try {
      let editBook = currentBooks.map((item, itemIdx) => {
        if (itemIdx === IndBookIdx) {
          return {
            name: bookName,
            author: bookAuthor,
            description: bookDescription,
            image: bookImage,
          };
        }
        return item;
      });
      await updateDoc(bookRef, {
        savedBooks: editBook,
      });
      alert("Book has been updated");
      setActiveEditPopup(false);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    setBookName(`${editIndBook?.name}`);
    setBookAuthor(`${editIndBook?.author}`);
    setBookDescription(`${editIndBook?.description}`);
    setBookImage(`${editIndBook?.image}`);
  }, [editIndBook]);

  return (
    <div
      className={`popup-container edit-book-popup-container ${
        activeEditPopup ? "active" : ""
      }`}
    >
      <div className="popup-content">
        <h2 className="popup-title">Edit a book</h2>

        <form className="popup-form" onSubmit={(e) => updateBook(e)}>
          <div className="popup-form-item">
            <label htmlFor="name"> book Name </label>
            <input
              type="text"
              value={bookName}
              onChange={(e) => setBookName(e.target.value)}
            />
          </div>

          <div className="popup-form-item">
            <label htmlFor="author"> author name </label>
            <input
              type="text"
              value={bookAuthor}
              onChange={(e) => setBookAuthor(e.target.value)}
            />
          </div>

          <div className="popup-form-item">
            <label htmlFor="description"> add a description </label>
            <textarea
              value={bookDescription}
              onChange={(e) => setBookDescription(e.target.value)}
            ></textarea>
          </div>

          <div className="popup-form-item">
            <label htmlFor="image"> Image </label>
            <input
              type="text"
              placeholder="Enter image url"
              value={bookImage}
              onChange={(e) => setBookImage(e.target.value)}
            />
          </div>

          <button type="submit" className="popup-btn-submit">
            Save Edit
          </button>
        </form>

        <button className="popup-btn-close" onClick={closeEditPopup}>
          <FontAwesomeIcon icon={faXmark} />
        </button>
      </div>
    </div>
  );
};

export default EditBookPopup;
