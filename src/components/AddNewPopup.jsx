import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { UseCustomContext } from "../context/CustomContext";
import { db } from "../firebase/FireConfig";
import { doc, updateDoc, arrayUnion } from "firebase/firestore";
import { useState } from "react";

const AddNewPopup = () => {
  let [bookName, setBookName] = useState("");
  let [bookAuthor, setBookAuthor] = useState("");
  let [bookDescription, setBookDescription] = useState("");
  let [bookImage, setBookImage] = useState("");

  let { activeAddPopup, setActiveAddPopup, currentUser } = UseCustomContext();

  const bookDocRef = doc(db, "users", `${currentUser.email}`);

  const addNewBook = async (e) => {
    e.preventDefault();

    if (
      bookName === "" &&
      bookAuthor === "" &&
      bookDescription === "" &&
      bookImage === ""
    ) {
      alert("Please enter some data");
      return;
    }

    try {
      await updateDoc(bookDocRef, {
        savedBooks: arrayUnion({
          name: bookName,
          author: bookAuthor,
          description: bookDescription,
          image: bookImage,
        }),
      });
      alert("Book added successfully");
      setBookName("");
      setBookAuthor("");
      setBookDescription("");
      setBookImage("");
      setActiveAddPopup(false);
    } catch (e) {
      console.error(e);
    }
  };

  const closeAddPopup = () => {
    setActiveAddPopup(false);
  };

  return (
    <div
      className={`add-new-popup-container ${activeAddPopup ? "active" : ""}`}
    >
      <div className="new-popup-content">
        <h2 className="popup-title">Add a book</h2>

        <form className="popup-form" onSubmit={(e) => addNewBook(e)}>
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
