import AddNewPopup from "../components/AddNewPopup";
import BookPopup from "../components/BookPopup";
import Dashboard from "../components/Dashboard";
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
    </>
  );
};

export default Profile;
