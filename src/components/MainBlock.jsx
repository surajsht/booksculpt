import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { UseCustomContext } from "../context/CustomContext";

const MainBlock = () => {
  let { setActiveAddPopup } = UseCustomContext();

  const openAddPopup = () => {
    setActiveAddPopup(true);
  };

  return (
    <div className="main-block-container">
      <div className="main-block-top">
        <button className="btn-add-book" onClick={openAddPopup}>
          Add new book
          <FontAwesomeIcon icon={faPlus} />
        </button>
      </div>
    </div>
  );
};

export default MainBlock;
