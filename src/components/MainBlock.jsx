import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { UseCustomContext } from "../context/CustomContext";
import { doc, onSnapshot } from "firebase/firestore";
import { useEffect } from "react";
import { db } from "../firebase/FireConfig";
import noImage from "../assets/no-image.jpg";

const MainBlock = () => {
  let {
    setActiveAddPopup,
    currentUser,
    setCurrentIndBook,
    setBookPopupActive,
    setIndBookIdx,
    currentBooks,
    setCurrentBooks,
    searchedBookResult,
    searchQuery,
  } = UseCustomContext();

  const openAddPopup = () => {
    setActiveAddPopup(true);
  };

  const openIndBook = (item) => {
    setCurrentIndBook(item);
    setIndBookIdx(item.id);
    setBookPopupActive(true);
  };

  useEffect(() => {
    onSnapshot(doc(db, "users", `${currentUser?.email}`), (doc) => {
      setCurrentBooks(doc.data()?.savedBooks);
    });
  }, [currentUser.email]);

  if (searchQuery.length !== 0) {
    return (
      <>
        {searchedBookResult.length === 0 ? (
          <div className="main-block-container">
            <div className="search-result search-no-result">
              <h2 className="search-no-result-title">
                No search result found.
              </h2>
            </div>
          </div>
        ) : (
          <div className="main-block-container">
            <div className="main-block-bottom search-result searched-book-list-container">
              {searchedBookResult.map((item, itemIdx) => {
                let { name, author, description, image } = item;

                return (
                  <div
                    className="block-bottom-item"
                    key={itemIdx}
                    onClick={() => openIndBook(item)}
                  >
                    <div className="bottom-item-image">
                      {image ? (
                        <img src={image} alt={name} />
                      ) : (
                        <img
                          src={noImage}
                          className="no-image"
                          alt="no-image"
                        />
                      )}
                    </div>

                    <div className="bottom-item-detail">
                      {name.length !== 0 && (
                        <h2 className="bottom-item-title"> {name} </h2>
                      )}
                      {author.length !== 0 && (
                        <span className="bottom-item-author"> {author} </span>
                      )}
                      {description.length !== 0 && (
                        <p className="bottom-item-description">
                          {description.length > 15
                            ? `${description.slice(0, 190)}...`
                            : description}
                        </p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </>
    );
  }

  return (
    <div className="main-block-container">
      <div className="main-block-top">
        <button className="btn-add-book" onClick={openAddPopup}>
          Add new book
          <FontAwesomeIcon icon={faPlus} />
        </button>
      </div>

      <div className="main-block-bottom">
        {currentBooks.map((item, itemIdx) => {
          let { name, author, description, image } = item;

          return (
            <div
              className="block-bottom-item"
              key={itemIdx}
              onClick={() => openIndBook(item)}
            >
              <div className="bottom-item-image">
                {image ? (
                  <img src={image} alt={name} />
                ) : (
                  <img src={noImage} className="no-image" alt="no-image" />
                )}
              </div>

              <div className="bottom-item-detail">
                {name.length !== 0 && (
                  <h2 className="bottom-item-title"> {name} </h2>
                )}
                {author.length !== 0 && (
                  <span className="bottom-item-author"> {author} </span>
                )}
                {description.length !== 0 && (
                  <p className="bottom-item-description">
                    {description.length > 15
                      ? `${description.slice(0, 190)}...`
                      : description}
                  </p>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MainBlock;
