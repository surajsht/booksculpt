import AddNewPopup from "../components/AddNewPopup";
import BookPopup from "../components/BookPopup";
import Dashboard from "../components/Dashboard";
import EditBookPopup from "../components/EditBookPopup";
import Navbar from "../components/Navbar";
import ResponsiveSearchBar from "../components/ResponsiveSearchBar";

const Profile = () => {
  return (
    <>
      <Navbar />
      <ResponsiveSearchBar />
      <Dashboard />
      <AddNewPopup />
      <BookPopup />
      <EditBookPopup />
    </>
  );
};

export default Profile;
